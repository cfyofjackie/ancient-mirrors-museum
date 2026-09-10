/**
 * 临时性能记录（诊断用，与 src/probe.ts 配套，诊断后一起删除）。
 * 以「一次翻页」为单位记录各阶段标记点，并记录主线程长任务（longtask），
 * 翻页结束时汇总成一行摘要放进 history，由 probe HUD 显示最近若干次。
 */
export type LongTask = { start: number; dur: number }

export const perf = {
  cur: {} as Record<string, number>,
  uploads: 0,
  uploadMs: 0,
  tableauMs: -1,
  longtasks: [] as LongTask[],
  history: [] as string[],

  mark(name: string) {
    this.cur[name] = performance.now()
  },
  /** 记录一次 GPU 纹理上传的耗时（在 runUpload 里调用） */
  upload(ms: number) {
    this.uploads++
    this.uploadMs += ms
  },
  /** 记录新画卷图解码耗时 */
  tableau(ms: number) {
    this.tableauMs = ms
  },
  /** 一次翻页结束：汇总并清空 */
  finish() {
    const c = this.cur
    const d = (a: string, b: string) =>
      c[a] != null && c[b] != null ? Math.round(c[b] - c[a]) : -1
    if (c.swipe != null && c.settle != null) {
      // 落在本次翻页窗口内的长任务：显示「相对 swipe 的偏移 / 持续时长」
      const lt = this.longtasks
        .filter((t) => t.start > c.swipe - 40 && t.start < c.settle + 40)
        .map((t) => `${Math.round(t.start - c.swipe)}/${Math.round(t.dur)}`)
        .join(' ')
      const line =
        `total=${d('swipe', 'settle')} exit=${d('swipe', 'commit')} wait=${d('commit', 'ready')} ` +
        `art=${d('artStart', 'artApplied')}(prep ${d('artStart', 'artPrep')}) ` +
        `tab=${this.tableauMs < 0 ? '-' : Math.round(this.tableauMs)} ` +
        `up=${this.uploads}×${Math.round(this.uploadMs)}ms ` +
        `LT[+ms/ms]=${lt || '-'}`
      this.history.unshift(line)
      if (this.history.length > 5) this.history.pop()
    }
    this.cur = {}
    this.uploads = 0
    this.uploadMs = 0
    this.tableauMs = -1
  },
}

/** 订阅主线程长任务（Chromium 支持；不支持则静默跳过） */
export function observeLongTasks() {
  if (typeof PerformanceObserver === 'undefined') return
  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        perf.longtasks.push({ start: entry.startTime, dur: entry.duration })
      }
      if (perf.longtasks.length > 40) perf.longtasks.splice(0, perf.longtasks.length - 40)
    })
    observer.observe({ entryTypes: ['longtask'] })
  } catch {
    /* 该环境不支持 longtask，忽略 */
  }
}
