import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import type { Hotspot, Mirror } from '../data/mirrors'
import Mirror3D, { hasWebGL } from './Mirror3D'
import MirrorFlip from './MirrorFlip'
import HotspotComponent from './Hotspot'

/** 触发切换的滑动阈值：位移超过 70px 或速度超过 350px/s（SLC 优先级第 1 条：交互顺滑的重点打磨项） */
const SWIPE_DISTANCE = 70
const SWIPE_VELOCITY = 350
/** 停留多久后浮现热点（SLC：1–2 秒，取 1.6s） */
const HOTSPOT_DWELL = 1600
/** 点击与滑动的区分阈值：按下到抬起位移超过此值视为滑动，不触发翻面 */
const TAP_MOVE_THRESHOLD = 12

interface MirrorStageProps {
  mirror: Mirror
  /** 1 = 向下一个朝代，-1 = 向上一个 */
  direction: 1 | -1
  onSwitch: (delta: 1 | -1) => void
  onHotspotOpen: (hotspot: Hotspot) => void
}

const slideVariants = {
  enter: (dir: number) => ({
    y: dir > 0 ? 240 : -240,
    opacity: 0,
    scale: 0.96,
  }),
  center: { y: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({
    y: dir > 0 ? -240 : 240,
    opacity: 0,
    scale: 0.96,
  }),
}

/** TouchEvent/PointerEvent/MouseEvent 统一取 clientY */
function clientYOf(e: MouseEvent | TouchEvent | PointerEvent): number {
  if ('changedTouches' in e && e.changedTouches.length) return e.changedTouches[0].clientY
  return (e as PointerEvent).clientY
}

/**
 * 主舞台（决策 D3：上下滑动切换朝代）：
 * - 手势层覆盖整个视口（含页脚文字区，页脚容器 pointer-events:none、按钮单独恢复）
 * - 拖动时铜镜跟手移动，松手按位移/速度阈值判定切换或回弹
 * - 翻面只认「点在镜子上且位移 ≤12px」的点击——滑动切换绝不错触翻面；
 *   drag 结束后 250ms 内的 tap 一并忽略（framer 偶发同时派发 tap 与 dragEnd）
 */
export default function MirrorStage({ mirror, direction, onSwitch, onHotspotOpen }: MirrorStageProps) {
  const [flipped, setFlipped] = useState(false)
  const [showHotspots, setShowHotspots] = useState(false)
  const webgl = useMemo(() => hasWebGL(), [])
  const use3D = webgl && !!mirror.art3d
  const downY = useRef(0)
  const lastDragEnd = useRef(0)

  // 停留 1.6 秒后浮现热点；翻面或换镜后重置，回到镜背重新计时
  useEffect(() => {
    setShowHotspots(false)
    if (flipped) return
    const timer = setTimeout(() => setShowHotspots(true), HOTSPOT_DWELL)
    return () => clearTimeout(timer)
  }, [mirror.id, flipped])

  const handlePointerDown = (e: React.PointerEvent) => {
    downY.current = e.clientY
  }

  const handleTap = (e?: MouseEvent | TouchEvent | PointerEvent) => {
    if (Date.now() - lastDragEnd.current < 250) return
    const target = e?.target as Element | undefined
    // 只有点在镜子本体上才翻面；按钮/热点/空白区域不翻
    if (!target?.closest?.('.mirror-3d-wrap')) return
    if (target?.closest?.('.hotspot')) return
    if (e && Math.abs(clientYOf(e) - downY.current) > TAP_MOVE_THRESHOLD) return
    setFlipped((v) => !v)
  }

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    lastDragEnd.current = Date.now()
    const { offset, velocity } = info
    if (offset.y < -SWIPE_DISTANCE || velocity.y < -SWIPE_VELOCITY) {
      onSwitch(1)
    } else if (offset.y > SWIPE_DISTANCE || velocity.y > SWIPE_VELOCITY) {
      onSwitch(-1)
    }
  }

  return (
    <motion.div
      className="mirror-stage"
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.35}
      onDragEnd={handleDragEnd}
      onTap={handleTap}
      onPointerDown={handlePointerDown}
    >
      <div className="mirror-slide">
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
          /* CSS 平面回退：保留滑动交叉过渡 */
          <AnimatePresence custom={direction} initial={false} mode="popLayout">
            <motion.div
              key={mirror.id}
              className="mirror-slide-inner"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
            >
              <MirrorFlip mirror={mirror} flipped={flipped} />
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* 上下翻页按钮：全平台常显（滑不动时也有按钮兜底）；位于手势层之上，点击不触发翻面 */}
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
