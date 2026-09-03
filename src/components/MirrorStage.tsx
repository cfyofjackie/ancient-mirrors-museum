import { useMemo, type PointerEvent as ReactPointerEvent } from 'react'
import { AnimatePresence, motion, type MotionValue, type PanInfo } from 'framer-motion'
import type { Hotspot, Mirror } from '../data/mirrors'
import Mirror3D, { hasWebGL } from './Mirror3D'
import MirrorFlip from './MirrorFlip'
import HotspotComponent from './Hotspot'

/** 滑动阈值（与 App 保持一致） */
const SWIPE_DISTANCE = 70
const SWIPE_VELOCITY = 350
const TAP_MOVE_THRESHOLD = 12
const DRAG_TAP_SUPPRESS = 250

interface MirrorStageProps {
  mirror: Mirror
  flipped: boolean
  showHotspots: boolean
  /** 拖拽跟手位移（与手势层共享同一 MotionValue） */
  dragY: MotionValue<number>
  /** 按下/拖拽结束时刻（MotionValue，跨层可变共享） */
  downY: MotionValue<number>
  lastDragEnd: MotionValue<number>
  /** 点击镜子本体 → 翻面（App 持有 flipped 状态） */
  onToggleFlip: () => void
  onHotspotOpen: (hotspot: Hotspot) => void
  onSwitch: (delta: 1 | -1) => void
}

function clientYOf(e: MouseEvent | TouchEvent | PointerEvent): number {
  if ('changedTouches' in e && e.changedTouches.length) return e.changedTouches[0].clientY
  return (e as PointerEvent).clientY
}

/**
 * 手势 + 视觉一体容器（决策 D3/D9）：
 * - 覆盖全屏，内部用 padding 避开顶部标题与底部文字——全屏任意位置滑动/点击都生效
 * - 拖动时镜子跟手；松手按位移/速度阈值切换或回弹
 * - 翻面只认「点在镜子上且位移 ≤12px」的点击（热点/按钮/空白不触发）
 */
export default function MirrorStage({
  mirror,
  flipped,
  showHotspots,
  dragY,
  downY,
  lastDragEnd,
  onToggleFlip,
  onHotspotOpen,
  onSwitch,
}: MirrorStageProps) {
  const webgl = useMemo(() => hasWebGL(), [])
  const use3D = webgl && !!mirror.art3d

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    lastDragEnd.set(Date.now())
    const { offset, velocity } = info
    if (offset.y < -SWIPE_DISTANCE || velocity.y < -SWIPE_VELOCITY) {
      onSwitch(1)
    } else if (offset.y > SWIPE_DISTANCE || velocity.y > SWIPE_VELOCITY) {
      onSwitch(-1)
    }
  }

  const handleTap = (e: MouseEvent | TouchEvent | PointerEvent) => {
    if (Date.now() - lastDragEnd.get() < DRAG_TAP_SUPPRESS) return
    if (Math.abs(clientYOf(e) - downY.get()) > TAP_MOVE_THRESHOLD) return
    const target = e.target as Element | undefined
    if (!target?.closest?.('.mirror-3d-wrap')) return
    if (target?.closest?.('.hotspot')) return
    onToggleFlip()
  }

  return (
    <motion.div
      className="stage-gesture"
      drag="y"
      style={{ y: dragY }}
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.35}
      onDragEnd={handleDragEnd}
      onPointerDown={(e: ReactPointerEvent) => downY.set(e.clientY)}
      onPointerUp={(e: ReactPointerEvent) => downY.set(e.clientY)}
      onTap={handleTap}
    >
      <div className="scene-band">
        <motion.div className="mirror-slide" style={{ y: dragY }}>
          {use3D && mirror.art3d ? (
            <div className="mirror-3d-wrap">
              <Mirror3D art={mirror.art3d} flipped={flipped} />
              {!flipped && (
                <div className="hotspot-layer">
                  <AnimatePresence>
                    {showHotspots &&
                      mirror.hotspots.map((h, i) => (
                        <HotspotComponent key={h.title} hotspot={h} index={i} onOpen={() => onHotspotOpen(h)} />
                      ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          ) : (
            <AnimatePresence initial={false} mode="wait">
              <motion.div key={mirror.id} className="mirror-slide-inner">
                <MirrorFlip mirror={mirror} flipped={flipped} />
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>

      <div className="stage-nav">
        <button type="button" className="nav-btn" onClick={() => onSwitch(-1)} aria-label="上一个朝代">
          ↑
        </button>
        <button type="button" className="nav-btn" onClick={() => onSwitch(1)} aria-label="下一个朝代">
          ↓
        </button>
      </div>
    </motion.div>
  )
}
