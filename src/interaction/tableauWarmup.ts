/**
 * 画卷图空闲预热（零视觉影响）。
 *
 * 背景：实测换页时若目标页的「全屏画卷大图」尚未解码，解码会阻塞主线程最坏 ~100ms
 * （探针里表现为 tab=103 且伴随 60ms longtask），把 JS 驱动的翻页位移冻住 → 卡顿。
 * 本模块在**页面落定后的空闲时间**提前解码上一/下一镜的画卷图，使常规上/下滑命中已解码缓存，
 * 把那次解码从"翻页关键路径"挪到"静止空闲"，画面与分辨率完全不变。
 */
type TableauUrls = { desktop: string; mobile: string }

const DELAY = 250 // 落定后稍等再预热，避免贴着手势结束
const IDLE_TIMEOUT = 1200

let queue: string[] = []
let timer = 0
let idleHandle = 0
let running = false
let paused = false

const idleWin = window as typeof window & {
  requestIdleCallback?: (cb: IdleRequestCallback, options?: IdleRequestOptions) => number
  cancelIdleCallback?: (handle: number) => void
}

const cancelSchedule = () => {
  window.clearTimeout(timer)
  timer = 0
  if (idleHandle) idleWin.cancelIdleCallback?.(idleHandle)
  idleHandle = 0
}

function schedule(delay = DELAY) {
  if (paused || running || !queue.length || timer || idleHandle) return
  timer = window.setTimeout(() => {
    timer = 0
    if (paused || !queue.length) return
    // 空闲回调里一次只解码一张，避免长时间占用主线程
    if (idleWin.requestIdleCallback) idleHandle = idleWin.requestIdleCallback(run, { timeout: IDLE_TIMEOUT })
    else timer = window.setTimeout(run, 100)
  }, delay)
}

function run() {
  idleHandle = 0
  timer = 0
  if (paused || running) return
  const url = queue.shift()
  if (!url) return
  running = true
  const img = new Image()
  img.decoding = 'async'
  const finish = () => {
    running = false
    schedule()
  }
  const advance = () => {
    // 已解码/带缓存的图 decode() 会很快 resolve；未命中才真正解码
    if (typeof img.decode === 'function') img.decode().then(finish, finish)
    else img.addEventListener('load', finish, { once: true })
  }
  img.src = url
  advance()
}

/**
 * 设置待预热的画卷图（按顺序优先，越靠前越先解码）。
 * 每个 profile 自带手机/桌面两版，这里按当前断点选用与页面一致的那张。
 */
export function warmTableaux(profiles: TableauUrls[]) {
  const mobile = window.matchMedia('(max-width: 819px)').matches
  queue = profiles.map((p) => (mobile ? p.mobile : p.desktop)).filter(Boolean)
  cancelSchedule()
  schedule()
}

/** 交互/翻页过渡期间暂停预热，避免与手势争用主线程 */
export function pauseTableauWarmup(value: boolean) {
  paused = value
  if (paused) cancelSchedule()
  else schedule()
}
