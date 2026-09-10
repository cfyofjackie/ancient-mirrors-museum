/**
 * 临时诊断开关（URL query）——用于在真机 Chromium 上对照定位滑动卡顿。
 * 不带参数时全部为 false，行为与正式版**完全一致**；定位结束后整份删除。
 *
 *   ?nofade      去掉翻页的淡出淡入（只保留位移）
 *   ?canvaslayer 给 WebGL 画布单独提升合成层
 *   ?nolayer     去掉 .page 的 will-change: transform
 *   ?dpr1        WebGL DPR 1.5 → 1.0
 *   ?noprobe     关闭诊断探针（它自身有每帧 rAF + 每 250ms 改 HUD）
 *   ?flip        强制走 CSS 平面回退（验证 3D 失败时的观感，不再露占位图）
 */
const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '')

export const flags = {
  nofade: params.has('nofade'),
  canvaslayer: params.has('canvaslayer'),
  nolayer: params.has('nolayer'),
  dpr1: params.has('dpr1'),
  noprobe: params.has('noprobe'),
  flip: params.has('flip'),
}

/** 供 HUD 显示当前生效的开关 */
export const activeFlags = Object.entries(flags)
  .filter(([, on]) => on)
  .map(([name]) => name)

// 纯 CSS 的开关直接挂到 <html> 上，避免层层传 prop
if (typeof document !== 'undefined') {
  const root = document.documentElement
  if (flags.canvaslayer) root.classList.add('flag-canvaslayer')
  if (flags.nolayer) root.classList.add('flag-nolayer')
}
