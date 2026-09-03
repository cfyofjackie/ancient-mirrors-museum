import { useEffect, useMemo, useState } from 'react'
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

/**
 * 主舞台（决策 D3：上下滑动切换朝代）：
 * - 拖动时铜镜跟手移动，松手按位移/速度阈值判定切换或回弹
 * - onTap 必须挂在 drag 元素自身：draggable 父元素会抑制子元素的 tap 手势，
 *   且 drag 元素自身的 onTap 自带「未拖动才算 tap」的判定
 * - tap 落在热点上时不翻面（closest 判断走原生 DOM，React 合成层的 stopPropagation 拦不住原生监听）
 * - 渲染：有 3D 素材且 WebGL 可用 → Mirror3D；否则回退 CSS 平面翻面
 */
export default function MirrorStage({ mirror, direction, onSwitch, onHotspotOpen }: MirrorStageProps) {
  const [flipped, setFlipped] = useState(false)
  const [showHotspots, setShowHotspots] = useState(false)
  const webgl = useMemo(() => hasWebGL(), [])
  const use3D = webgl && !!mirror.art3d

  // 停留 1.6 秒后浮现热点；翻面或换镜后重置，回到镜背重新计时
  useEffect(() => {
    setShowHotspots(false)
    if (flipped) return
    const timer = setTimeout(() => setShowHotspots(true), HOTSPOT_DWELL)
    return () => clearTimeout(timer)
  }, [mirror.id, flipped])

  const handleTap = (e?: MouseEvent | TouchEvent | PointerEvent) => {
    const target = e?.target as Element | undefined
    if (target?.closest?.('.hotspot')) return
    setFlipped((v) => !v)
  }

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info
    if (offset.y < -SWIPE_DISTANCE || velocity.y < -SWIPE_VELOCITY) {
      onSwitch(1)
    } else if (offset.y > SWIPE_DISTANCE || velocity.y > SWIPE_VELOCITY) {
      onSwitch(-1)
    }
  }

  return (
    <div className="mirror-stage">
      {/* 手势层：覆盖整个舞台区域——滑动/点击任意位置都可翻页，不局限于镜子本体 */}
      <motion.div
        className="stage-gesture"
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.35}
        onDragEnd={handleDragEnd}
        onTap={handleTap}
      >
        {use3D && mirror.art3d ? (
          /* 3D 模式：Mirror3D 常驻（渲染器不重建），切换朝代 = 纹理热替换 + 镜体升起动画 */
          <div className="mirror-slide">
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
          </div>
        ) : (
          /* CSS 平面回退：保留滑动交叉过渡 */
          <AnimatePresence custom={direction} initial={false} mode="popLayout">
            <motion.div
              key={mirror.id}
              className="mirror-slide"
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
      </motion.div>

      {/* 桌面端切换按钮（触屏设备隐藏，CSS 控制）；位于手势层之上，点击不触发翻面 */}
      <div className="stage-nav">
        <button type="button" className="nav-btn" onClick={() => onSwitch(-1)} aria-label="上一个朝代">
          ↑
        </button>
        <button type="button" className="nav-btn" onClick={() => onSwitch(1)} aria-label="下一个朝代">
          ↓
        </button>
      </div>
    </div>
  )
}
