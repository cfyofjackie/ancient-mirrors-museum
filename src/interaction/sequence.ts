import mirrors from '../data/mirrors'

/**
 * 统一翻页序列：序厅两页（数据驱动项）+ 九镜，共 11 项。
 * 序厅不再是遮罩组件——磨镜页/仕女页与铜镜页共用同一套翻页状态机、
 * 同一位移容器（.page 的 y/opacity），跟手与回弹机制完全一致。
 *
 * 序列：[磨镜页, 仕女页, 商镜, 春秋, 战国, 汉, 隋, 唐, 宋, 元, 明]
 * 首次打开落在 index 0（磨镜页）；序厅常驻，无 sessionStorage 一次性播放。
 */
export type PageItem = { kind: 'opening'; page: 1 | 2 } | { kind: 'mirror'; index: number }

/** 序厅页数（磨镜页、仕女页），占据序列前两位 */
export const OPENING_COUNT = 2

/** 主展厅第一面镜（商镜）在序列中的位置 */
export const HALL_START = OPENING_COUNT

export const SEQUENCE: PageItem[] = [
  { kind: 'opening', page: 1 },
  { kind: 'opening', page: 2 },
  ...mirrors.map((_, index) => ({ kind: 'mirror' as const, index })),
]
