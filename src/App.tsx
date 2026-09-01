import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import mirrors from './data/mirrors'
import type { Hotspot } from './data/mirrors'
import MirrorStage from './components/MirrorStage'
import InfoCard, { type SheetContent } from './components/InfoCard'

/** 拖动/按钮/键盘切换的冷却时间，避免动画未完成时连跳 */
const SWITCH_COOLDOWN = 650
/** 滚轮单独用更长的冷却，吸收触控板连续小滚动 */
const WHEEL_COOLDOWN = 900
const WHEEL_THRESHOLD = 24

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
  const lastSwitch = useRef(0)

  // 循环切换（决策 D8）：上滑 = 下一个朝代，下滑 = 上一个；明上滑绕回汉，汉下滑绕到明
  const go = useCallback((delta: 1 | -1) => {
    const now = Date.now()
    if (now - lastSwitch.current < SWITCH_COOLDOWN) return
    lastSwitch.current = now
    setSheet(null)
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

  const mirror = mirrors[index]

  const sheetContent: SheetContent | null = (() => {
    if (!sheet) return null
    if (sheet.type === 'hotspot') {
      return {
        title: sheet.hotspot.title,
        description: sheet.hotspot.description,
      }
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
      {/* 朝代微染色层（极低透明度，随切换缓慢过渡） */}
      <motion.div
        className="bg-tint"
        animate={{ backgroundColor: mirror.tint }}
        transition={{ duration: 0.9 }}
      />

      <header className="app-header">
        <h1 className="app-title">照见千年</h1>
        <p className="app-subtitle">从一面铜镜，看见不同时代的审美</p>
      </header>

      <MirrorStage
        mirror={mirror}
        direction={direction}
        onSwitch={go}
        onHotspotOpen={(hotspot) => setSheet({ type: 'hotspot', hotspot })}
      />

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
          <button
            type="button"
            className="ref-entry"
            onClick={() => setSheet({ type: 'reference' })}
          >
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
