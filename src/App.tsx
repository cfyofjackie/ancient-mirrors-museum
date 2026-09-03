import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import mirrors from './data/mirrors'
import type { Hotspot } from './data/mirrors'
import MirrorStage from './components/MirrorStage'
import InfoCard, { type SheetContent } from './components/InfoCard'

/** 拖动/按钮/键盘切换的冷却时间，避免动画未完成时连跳 */
const SWITCH_COOLDOWN = 650
/** 滚轮单独用更长的冷却，吸收触控板连续小滚动 */
const WHEEL_COOLDOWN = 900
const WHEEL_THRESHOLD = 24
/** 停留多久后浮现热点（SLC：1–2 秒，取 1.6s） */
const HOTSPOT_DWELL = 1600

type Sheet =
  | { type: 'hotspot'; hotspot: Hotspot }
  | { type: 'reference' }
  | null

const footerVariants = {
  enter: (dir: number) => ({ y: dir > 0 ? 18 : -18, opacity: 0 }),
  center: { y: 0, opacity: 1 },
  exit: (dir: number) => ({ y: dir > 0 ? -14 : 14, opacity: 0 }),
}

export default function App() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [sheet, setSheet] = useState<Sheet>(null)
  const [flipped, setFlipped] = useState(false)
  const [showHotspots, setShowHotspots] = useState(false)
  const lastSwitch = useRef(0)
  /** 拖拽跟手位移 + 手势时刻（与 MirrorStage 共享） */
  const dragY = useMotionValue(0)
  const downY = useMotionValue(0)
  const lastDragEnd = useMotionValue(0)

  // 循环切换（决策 D8）：上滑 = 下一个朝代，下滑 = 上一个；明上滑绕回汉，汉下滑绕到明
  const go = useCallback((delta: 1 | -1) => {
    const now = Date.now()
    if (now - lastSwitch.current < SWITCH_COOLDOWN) return
    lastSwitch.current = now
    setSheet(null)
    setFlipped(false)
    setDirection(delta)
    setIndex((i) => (i + delta + mirrors.length) % mirrors.length)
  }, [])

  // 桌面端：滚轮 + 键盘方向键
  useEffect(() => {
    let lastWheel = 0
    const onWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD || now - lastWheel < WHEEL_COOLDOWN) return
      lastWheel = now
      go(e.deltaY > 0 ? 1 : -1)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') go(1)
      else if (e.key === 'ArrowUp') go(-1)
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
    }
  }, [go])

  // 预热全部 3D 纹理（浏览器缓存），切换朝代时纹理近零等待
  useEffect(() => {
    mirrors.forEach((m) => {
      if (!m.art3d) return
      ;[m.art3d.flat, m.art3d.normal].forEach((u) => {
        const img = new Image()
        img.src = u
      })
    })
  }, [])

  const mirror = mirrors[index]

  // 停留 1.6 秒后浮现热点；翻面或换镜后重置
  useEffect(() => {
    setShowHotspots(false)
    if (flipped) return
    const timer = setTimeout(() => setShowHotspots(true), HOTSPOT_DWELL)
    return () => clearTimeout(timer)
  }, [mirror.id, flipped])

  const toggleFlip = useCallback(() => {
    setFlipped((v) => !v)
  }, [])

  const sheetContent: SheetContent | null = (() => {
    if (!sheet) return null
    if (sheet.type === 'hotspot') {
      return { title: sheet.hotspot.title, description: sheet.hotspot.description }
    }
    const ref = mirror.reference
    if (!ref) return null
    return {
      title: ref.title,
      description: ref.detail,
      imageUrl: ref.imageUrl,
      imageAlt: `${mirror.name} 馆藏实物参考`,
      source: ref.source,
      sourceUrl: ref.sourceUrl,
      isReference: true,
    }
  })()

  return (
    <div className="app">
      <MirrorStage
        mirror={mirror}
        flipped={flipped}
        showHotspots={showHotspots}
        dragY={dragY}
        downY={downY}
        lastDragEnd={lastDragEnd}
        onToggleFlip={toggleFlip}
        onHotspotOpen={(hotspot) => setSheet({ type: 'hotspot', hotspot })}
        onSwitch={go}
      />

      <motion.div className="bg-tint" animate={{ backgroundColor: mirror.tint }} transition={{ duration: 0.9 }} />

      <header className="app-header">
        <h1 className="app-title">照见千年</h1>
        <p className="app-subtitle">从一面铜镜，看见不同时代的审美</p>
      </header>

      <footer className="app-footer">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={mirror.id}
            className="footer-info"
            custom={direction}
            variants={footerVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.18 }}
          >
            <div className="dynasty-name">{mirror.dynasty}</div>
            <div className="mirror-name">{mirror.name}</div>
            <div className="divider" />
            <p className="mirror-desc">{mirror.shortDescription}</p>
          </motion.div>
        </AnimatePresence>

        {mirror.reference && (
          <button type="button" className="ref-entry" onClick={() => setSheet({ type: 'reference' })}>
            史实资料
          </button>
        )}

        <div className="dynasty-dots">
          {mirrors.map((m) => (
            <span key={m.id} className={m.id === mirror.id ? 'active' : undefined} />
          ))}
        </div>
        <p className="hint">上下滑动切换朝代 · 点击铜镜翻面</p>
      </footer>

      <InfoCard content={sheetContent} onClose={() => setSheet(null)} />
    </div>
  )
}
