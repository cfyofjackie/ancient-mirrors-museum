// 展示自转诊断：无头 Chrome + CDP，按状态窗口采集 rAF 间隔与 3D 渲染次数。
// 用法：
//   DIAG_PORT=6190 node scripts/diagnostics/server.mjs   # 先启动诊断服务器
//   node scripts/diagnostics/spin-probe.mjs --label with-spin [--url http://127.0.0.1:6190/?spinlab]
// 输出 JSON 至 scripts/diagnostics/results/spinlab-<label>-<ts>.json，并在 stdout 打印对照表。
// 帧间隔来自软件渲染的无头环境，只做相对对比，不代表真机帧率。
import { spawn } from 'node:child_process'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { setTimeout as sleep } from 'node:timers/promises'

const args = process.argv.slice(2)
const arg = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback }
const label = arg('label', 'run')
const url = arg('url', `http://127.0.0.1:${process.env.DIAG_PORT || 6190}/?spinlab`)
const cdpPort = Number(arg('cdp-port', 9223))
const CHROME = arg('chrome', 'C:/Program Files/Google/Chrome/Application/chrome.exe')
const root = process.cwd()
const resultDir = path.join(root, 'scripts/diagnostics/results')

const profile = await fs.mkdtemp(path.join(os.tmpdir(), 'spin-probe-'))
const chrome = spawn(CHROME, [
  '--headless=new', `--remote-debugging-port=${cdpPort}`, `--user-data-dir=${profile}`,
  '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--mute-audio',
  '--window-size=390,844', '--force-device-scale-factor=1', '--hide-scrollbars',
  '--enable-unsafe-swiftshader', 'about:blank',
], { stdio: 'ignore' })
const killChrome = () => { try { spawn('taskkill', ['/pid', String(chrome.pid), '/T', '/F'], { stdio: 'ignore' }) } catch {} }
process.on('exit', killChrome)
try {
  // 等调试端口就绪
  let targets = null
  for (let i = 0; i < 50; i++) {
    await sleep(200)
    try { targets = await (await fetch(`http://127.0.0.1:${cdpPort}/json/list`)).json(); if (targets.some(t => t.type === 'page')) break } catch {}
  }
  const page = targets.find(t => t.type === 'page')
  const ws = new WebSocket(page.webSocketDebuggerUrl)
  await new Promise((resolve, reject) => { ws.onopen = resolve; ws.onerror = reject })
  let seq = 0
  const pending = new Map()
  const eventWaiters = []
  const consoleLog = []
  ws.onmessage = event => {
    const msg = JSON.parse(event.data)
    if (msg.id && pending.has(msg.id)) { const { resolve, reject } = pending.get(msg.id); pending.delete(msg.id); msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result) }
    else if (msg.method === 'Runtime.consoleAPICalled') { const text = (msg.params.args || []).map(a => a.value ?? a.description ?? '').join(' '); consoleLog.push(`[${msg.params.type}] ${text}`) }
    else if (msg.method === 'Runtime.exceptionThrown') { const d = msg.params.exceptionDetails; consoleLog.push(`[exception] ${d.exception?.description || d.text}`) }
    else if (msg.method) for (let i = eventWaiters.length - 1; i >= 0; i--) { const w = eventWaiters[i]; if (w.method === msg.method) { eventWaiters.splice(i, 1); w.resolve(msg.params) } }
  }
  const send = (method, params = {}) => new Promise((resolve, reject) => { const id = ++seq; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params })) })
  const waitEvent = method => new Promise(resolve => eventWaiters.push({ method, resolve }))
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })
    if (result.exceptionDetails) throw new Error('In-page error: ' + (result.exceptionDetails.exception?.description || result.exceptionDetails.text) + '\nconsole:\n' + consoleLog.slice(-15).join('\n'))
    return result.result.value
  }

  await send('Page.enable')
  await send('Runtime.enable')
  const loaded = waitEvent('Page.loadEventFired')
  await send('Page.navigate', { url })
  await loaded

  // 注入页面内场景脚本：连续时间线采样 + 事件标记 + 手势回放
  await evaluate(`(() => {
    const delay = ms => new Promise(r => setTimeout(r, ms))
    const lab = window.__spinlab = {
      t0: 0, running: false, frames: [], events: {}, dynastyLog: [], lastInfo: null, lastT: 0, lastDynasty: '',
      mark(name) { this.events[name] = +(performance.now() - this.t0).toFixed(1) },
      loop() {
        if (!this.running) return
        const t = performance.now()
        const info = window.__mirrorProbe && window.__mirrorProbe.rendererInfo
        const rendered = info && info !== this.lastInfo ? 1 : 0
        this.lastInfo = info
        const page = document.querySelector('.page')
        const dynasty = document.querySelector('.dynasty-name')
        const d = dynasty ? dynasty.textContent : ''
        if (d !== this.lastDynasty) { this.dynastyLog.push({ t: +(t - this.t0).toFixed(1), dynasty: d }); this.lastDynasty = d }
        this.frames.push({
          t: +(t - this.t0).toFixed(1), gap: this.lastT ? +(t - this.lastT).toFixed(2) : 0, r: rendered,
          spin: info ? +Number(info.spin || 0).toFixed(3) : null, flip: info ? +Number(info.flip || 0).toFixed(3) : null,
          phase: page ? page.dataset.phase : null,
        })
        this.lastT = t
        requestAnimationFrame(() => this.loop())
      },
      async waitReady() {
        await document.fonts.ready
        const deadline = performance.now() + 45000
        while (performance.now() < deadline) {
          const canvas = document.querySelector('.mirror-3d-wrap canvas')
          const face = document.querySelector('.mirror-face')
          if (face) throw new Error('3D not active: flat fallback rendered (no WebGL in headless?)')
          const page = document.querySelector('.page')
          if (canvas && page && page.dataset.phase === 'idle') {
            const info = window.__mirrorProbe && window.__mirrorProbe.rendererInfo
            if (info && info.flat) { this.domOnly = false; return }
            // __production 入口不注入业务 transform，没有 rendererInfo：稳定 2s 后按 DOM-only 模式继续
            await delay(2000)
            const info2 = window.__mirrorProbe && window.__mirrorProbe.rendererInfo
            this.domOnly = !(info2 && info2.flat)
            return
          }
          await delay(100)
        }
        throw new Error('App not ready within 45s')
      },
      async waitSpinActive(timeout = 8000) {
        // 兼容两种被测版本：含自转版本等 spin>0.02；移除自转的版本没有 spin 字段，只等落定
        const info = window.__mirrorProbe && window.__mirrorProbe.rendererInfo
        if (!info || !('spin' in info)) { await delay(1800); return false }
        const deadline = performance.now() + timeout
        while (performance.now() < deadline) {
          if (Math.abs((window.__mirrorProbe.rendererInfo || {}).spin || 0) > 0.02) return true
          await delay(33)
        }
        throw new Error('Spin never became active')
      },
      async waitRenderSilence(quietMs, timeout = 40000) {
        const deadline = performance.now() + timeout
        while (performance.now() < deadline) {
          const renders = this.frames.filter(f => f.r)
          const last = renders.length ? renders[renders.length - 1].t : 0
          if (performance.now() - this.t0 - last >= quietMs) return performance.now() - this.t0 - last
          await delay(100)
        }
        throw new Error('Render loop never went quiet within ' + timeout + 'ms')
      },
      async swipe(dy, duration, x, y0) {
        const el = document.querySelector('.mirror-3d-wrap canvas, .mirror-face')
        x = x ?? innerWidth / 2; y0 = y0 ?? 420
        const opts = { pointerId: 11, isPrimary: true, pointerType: 'touch', button: 0, clientX: x, bubbles: true }
        el.dispatchEvent(new PointerEvent('pointerdown', { ...opts, clientY: y0 }))
        const steps = 6
        for (let i = 1; i <= steps; i++) {
          await delay(duration / steps)
          el.dispatchEvent(new PointerEvent('pointermove', { ...opts, clientY: y0 + (dy * i) / steps }))
        }
        el.dispatchEvent(new PointerEvent('pointerup', { ...opts, clientY: y0 + dy }))
      },
      async run() {
        await this.waitReady()
        this.t0 = performance.now(); this.running = true; this.loop()
        await delay(400)
        this.mark('A_start'); await delay(2400); this.mark('A_end')            // 静止（自转前，本镜未换页）
        this.mark('nav1_keydown'); window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
        await this.waitSpinActive(); this.mark('settled_after_nav')             // 换页落定（含自转版本此刻已开始自转）
        await delay(1500)
        this.mark('B_start'); await delay(4000); this.mark('B_end')            // 自转进行中（静置）
        this.mark('swipe1_start'); await this.swipe(-120, 130); this.mark('swipe1_end') // 自转中滑动（真实翻页）
        await delay(2300); this.mark('C_end')                                   // 覆盖打断回正 + 退场 + 换镜 + 入场 + 新自转
        const quietGap = await this.waitRenderSilence(2000); this.mark('render_silence') // 最后一次交互后渲染循环多久才停
        this.quietGap = +quietGap.toFixed(1)
        await delay(300)
        this.mark('D_start'); await delay(3000); this.mark('D_end')            // 自转结束后的静止（泄漏检查）
        this.mark('swipe2_start'); await this.swipe(-45, 300); this.mark('swipe2_end') // 慢速小滑：回弹，不换页、无自转
        await delay(300)
        this.mark('E_start'); await delay(2200); this.mark('E_end')            // 无自转滑动（同版对照）
        this.running = false
        return { t0: this.t0, events: this.events, dynastyLog: this.dynastyLog, frames: this.frames, quietGap: this.quietGap }
      },
    }
    return true
  })()`)

  const data = await evaluate('window.__spinlab.run()')
  const domOnly = await evaluate('!!window.__spinlab.domOnly')

  // —— 汇总 ——
  const quantile = (xs, q) => { const s = [...xs].sort((a, b) => a - b); return s.length ? +s[Math.min(s.length - 1, Math.floor(s.length * q))].toFixed(2) : 0 }
  const seg = (name, from, to) => {
    const fs2 = data.frames.filter(f => f.t >= from && f.t <= to)
    const renders = fs2.filter(f => f.r)
    const gaps = renders.map((f, i) => i ? +(f.t - renders[i - 1].t).toFixed(2) : 0).slice(1)
    const raf = fs2.map(f => f.gap).slice(1)
    const spinOn = fs2.filter(f => f.spin !== null && Math.abs(f.spin) > 0.02).length
    return {
      name, ms: Math.round(to - from), samples: fs2.length, renders: renders.length,
      renderGapP50: quantile(gaps, .5), renderGapP95: quantile(gaps, .95), renderGapMax: quantile(gaps, 1),
      renderGapsOver40: gaps.filter(g => g > 40).length,
      rafP50: quantile(raf, .5), rafP95: quantile(raf, .95), rafMax: quantile(raf, 1),
      rafOver50: raf.filter(g => g > 50).length,
      spinSampleRatio: fs2.length ? +(spinOn / fs2.length).toFixed(2) : 0,
    }
  }
  const ev = data.events
  const segments = [
    seg('A 静止(首镜,未交互)', ev.A_start, ev.A_end),
    seg('B 换页落定后静置(原自转时段)', ev.B_start, ev.B_end),
    seg('C 落定后滑动+翻页', ev.swipe1_start - 100, ev.C_end),
    seg('D 渲染停止后静止(泄漏检查)', ev.D_start, ev.D_end),
    seg('E 滑动(不换页)', ev.E_start, ev.E_end),
  ]
  const total = data.frames.reduce((n, f) => n + f.r, 0)
  const mode = domOnly ? 'prod-dom（无 rendererInfo，渲染计数不可用，仅帧间隔/功能）' : 'dev（含渲染计数）'
  const fmtRenders = n => domOnly ? 'n/a' : n
  const result = { variant: `spinlab-${label}`, url, viewport: [390, 844], userAgent: await evaluate('navigator.userAgent'), webgl: await evaluate('!!document.querySelector(".mirror-3d-wrap canvas")'), mode: domOnly ? 'prod-dom' : 'dev', events: ev, quietGapAfterLastGestureMs: data.quietGap, dynastyLog: data.dynastyLog, segments, totalRenders: domOnly ? null : total, frames: data.frames }
  await fs.mkdir(resultDir, { recursive: true })
  const file = path.join(resultDir, `spinlab-${label}-${Date.now()}.json`)
  await fs.writeFile(file, JSON.stringify(result, null, 2))
  console.log('saved:', path.relative(root, file))
  console.table(segments.map(({ name, ...s }) => ({ name, ...s, renders: fmtRenders(s.renders) })))
  console.log(`mode=${mode}  totalRenders=${fmtRenders(total)}  rendersStopMsAfterLastGesture=${data.quietGap}  dynastyChanges=${data.dynastyLog.length - 1}`)
  console.log('events:', JSON.stringify(ev))
} finally {
  killChrome()
  await fs.rm(profile, { recursive: true, force: true }).catch(() => {})
}
