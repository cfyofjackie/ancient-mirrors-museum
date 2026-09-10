/**
 * 临时性能记录（诊断用，与 src/probe.ts 配套，诊断后一起删除）。
 * 以「一次翻页」为单位记录各阶段标记点，翻页结束时汇总成一行摘要放进 history，
 * 由 probe HUD 显示最近若干次，用来定位那次 ~85–160ms 卡顿花在哪。
 */
export const perf = {
  cur: {} as Record<string, number>,
  uploads: 0,
  uploadMs: 0,
  tableauMs: -1,
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
      const line =
        `total=${d('swipe', 'settle')} exit=${d('swipe', 'commit')} wait=${d('commit', 'ready')} ` +
        `art=${d('artStart', 'artApplied')}(prep ${d('artStart', 'artPrep')}) ` +
        `tab=${this.tableauMs < 0 ? '-' : Math.round(this.tableauMs)} ` +
        `up=${this.uploads}×${Math.round(this.uploadMs)}ms`
      this.history.unshift(line)
      if (this.history.length > 5) this.history.pop()
    }
    this.cur = {}
    this.uploads = 0
    this.uploadMs = 0
    this.tableauMs = -1
  },
}
