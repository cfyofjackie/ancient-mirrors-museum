// 无头运行 11 项交互回归：加载 ?interactions 页面，轮询状态元素直到输出 JSON 汇总。
// 用法：
//   DIAG_PORT=6190 node scripts/diagnostics/server.mjs   # 先启动诊断服务器
//   node scripts/diagnostics/interactions-probe.mjs
// 结果由页面 POST 到 /__perf-results，之后可用 node scripts/diagnostics/check.mjs interactions 读取。
import { spawn } from 'node:child_process'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { setTimeout as sleep } from 'node:timers/promises'

const url = process.argv[2] || `http://127.0.0.1:${process.env.DIAG_PORT || 6190}/?interactions&dpr2`
const cdpPort = Number(process.env.CDP_PORT || 9224)
const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe'

const profile = await fs.mkdtemp(path.join(os.tmpdir(), 'interactions-probe-'))
const chrome = spawn(CHROME, [
  '--headless=new', `--remote-debugging-port=${cdpPort}`, `--user-data-dir=${profile}`,
  '--no-first-run', '--no-default-browser-check', '--disable-extensions', '--mute-audio',
  '--window-size=504,665', '--force-device-scale-factor=1', '--hide-scrollbars',
  '--enable-unsafe-swiftshader', 'about:blank',
], { stdio: 'ignore' })
const killChrome = () => { try { spawn('taskkill', ['/pid', String(chrome.pid), '/T', '/F'], { stdio: 'ignore' }) } catch {} }
process.on('exit', killChrome)
try {
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
  ws.onmessage = event => {
    const msg = JSON.parse(event.data)
    if (msg.id && pending.has(msg.id)) { const { resolve, reject } = pending.get(msg.id); pending.delete(msg.id); msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result) }
  }
  const send = (method, params = {}) => new Promise((resolve, reject) => { const id = ++seq; pending.set(id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params })) })
  const evaluate = async expression => {
    const result = await send('Runtime.evaluate', { expression, returnByValue: true })
    if (result.exceptionDetails) throw new Error('In-page error: ' + (result.exceptionDetails.exception?.description || result.exceptionDetails.text))
    return result.result.value
  }

  await send('Page.enable')
  await send('Runtime.enable')
  await send('Page.navigate', { url })
  // interactions.js 会在用例结束后把 status 替换为 JSON 汇总
  const summary = await (async () => {
    for (let i = 0; i < 120; i++) {
      await sleep(2000)
      const text = await evaluate(`document.getElementById('interaction-status')?.textContent || ''`)
      if (text.startsWith('{')) return JSON.parse(text)
    }
    throw new Error('Interactions run did not finish within 240s')
  })()
  console.log(JSON.stringify(summary, null, 2))
  process.exitCode = summary.verdict === 'PASS' ? 0 : 1
} finally {
  killChrome()
  await fs.rm(profile, { recursive: true, force: true }).catch(() => {})
}
