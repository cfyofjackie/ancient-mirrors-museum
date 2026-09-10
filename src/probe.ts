/**
 * 临时性能探针（诊断用）——定位小红书容器内滑动卡顿的真因。
 * 容器里看不到 console，所以把关键信息画到屏幕左上角 HUD，直接截图即可。
 *
 * 显示：GPU 型号/厂商（判断是否软件渲染）、GL 版本与纹理上限、
 *       镜面画布像素与 DPR、实时帧率、最差帧、>33ms / >50ms 长帧计数、
 *       THREE renderer 的纹理/几何体/绘制调用数（若 mirrorScene 暴露了 __mirrorSceneInfo）。
 *
 * 诊断完成后：删除本文件 + main.tsx 里的 import/startProbe() 调用
 *（以及 mirrorScene.ts 里的 __mirrorSceneInfo 挂载）。
 */
import { perf, observeLongTasks } from './perf'
import { activeFlags } from './flags'

export function startProbe() {
  observeLongTasks() // 订阅主线程长任务（第三版新增）
  // 1) GPU / 上下文能力
  let gpu = 'n/a'
  let vendor = 'n/a'
  let glVersion = 'n/a'
  let maxTex = 0
  let maxUnits = 0
  try {
    const c = document.createElement('canvas')
    const gl = (c.getContext('webgl') || c.getContext('experimental-webgl')) as WebGLRenderingContext | null
    if (gl) {
      const dbg = gl.getExtension('WEBGL_debug_renderer_info')
      vendor = String(gl.getParameter(dbg ? dbg.UNMASKED_VENDOR_WEBGL : gl.VENDOR))
      gpu = String(gl.getParameter(dbg ? dbg.UNMASKED_RENDERER_WEBGL : gl.RENDERER))
      glVersion = String(gl.getParameter(gl.VERSION))
      maxTex = gl.getParameter(gl.MAX_TEXTURE_SIZE)
      maxUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  } catch {
    /* ignore */
  }
  const software = /swiftshader|software|llvmpipe|basic render/i.test(`${gpu} ${vendor}`)

  // 2) 帧间隔统计（滑动卡顿看这里的 worst / long 计数）
  let last = performance.now()
  let total = 0
  let long33 = 0
  let long50 = 0
  let worstEver = 0
  const win: number[] = []
  const frame = (now: number) => {
    const dt = now - last
    last = now
    if (total > 0) {
      win.push(dt)
      if (win.length > 120) win.shift()
      if (dt > 33) long33++
      if (dt > 50) long50++
      if (dt > worstEver) worstEver = dt
    }
    total++
    requestAnimationFrame(frame)
  }
  requestAnimationFrame(frame)

  // 3) HUD
  const el = document.createElement('div')
  el.id = '__probe_hud__'
  el.style.cssText =
    'position:fixed;left:6px;top:6px;z-index:99998;max-width:74vw;padding:6px 8px;' +
    'background:rgba(0,0,0,.74);color:#7CFC9A;border-radius:6px;pointer-events:none;' +
    'font:11px/1.45 ui-monospace,Menlo,Consolas,monospace;white-space:pre-wrap;text-align:left;'
  document.body.appendChild(el)

  const refresh = () => {
    const canvas = document.querySelector('.mirror-3d-wrap canvas, .mirror-stage canvas') as HTMLCanvasElement | null
    const avg = win.length ? win.reduce((a, b) => a + b, 0) / win.length : 0
    const fps = avg ? 1000 / avg : 0
    const winWorst = win.length ? Math.max(...win) : 0
    const info = (window as unknown as { __mirrorSceneInfo?: () => Record<string, unknown> }).__mirrorSceneInfo?.()
    el.textContent =
      'PROBE 临时诊断\n' +
      `开关: ${activeFlags.length ? activeFlags.join(',') : '(无)'}\n` +
      `GPU: ${gpu}\n` +
      `vendor: ${vendor}\n` +
      `${software ? '⚠ 软件渲染 SOFTWARE' : '硬件 GPU（非软件）'}\n` +
      `gl: ${glVersion}  maxTex=${maxTex} units=${maxUnits}\n` +
      `canvas: ${canvas ? `${canvas.width}x${canvas.height}` : 'n/a'}  dpr=${window.devicePixelRatio}\n` +
      `fps: ${fps.toFixed(1)}  worst2s=${winWorst.toFixed(0)}ms  worstAll=${worstEver.toFixed(0)}ms\n` +
      `long>33=${long33}  >50=${long50}  frames=${total}\n` +
      (info ? `tex=${info.textures} geo=${info.geometries} calls=${info.calls} tri=${info.triangles}` : 'tex= n/a') +
      `\nLT(最近4)=${perf.longtasks.slice(-4).map((t) => Math.round(t.dur) + 'ms').join(' ') || '-'}\n` +
      '— 翻页耗时（新→旧）—\n' +
      (perf.history.length ? perf.history.join('\n') : '(还没有翻页)')
    ;(window as unknown as { __probe?: unknown }).__probe = {
      gpu, vendor, software, glVersion, maxTex, maxUnits,
      canvas: canvas ? { w: canvas.width, h: canvas.height } : null, dpr: window.devicePixelRatio,
      fps, winWorst, worstEver, long33, long50, total, info,
    }
  }
  refresh()
  window.setInterval(refresh, 250)
}
