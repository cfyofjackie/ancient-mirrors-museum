import { useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import mirrors from './data/mirrors'
import type { Hotspot } from './data/mirrors'
import MirrorStage from './components/MirrorStage'
import InfoCard, { type SheetContent } from './components/InfoCard'
import usePageNavigation from './interaction/usePageNavigation'

const HOTSPOT_DWELL = 1600
type Sheet = { type: 'hotspot'; hotspot: Hotspot } | { type: 'reference' } | null

export default function App() {
  const [sheet, setSheet] = useState<Sheet>(null)
  const [flipped, setFlipped] = useState(false)
  const [showHotspots, setShowHotspots] = useState(false)
  const [waiting, setWaiting] = useState(false)
  const { index, phase, y, opacity, ready } = usePageNavigation({
    count: mirrors.length,
    blocked: sheet !== null,
    onCommit: () => { setSheet(null); setFlipped(false) },
    onTap: () => setFlipped(value => !value),
  })
  const mirror = mirrors[index]
  const onReady = useCallback(() => ready(index), [ready, index])

  useEffect(() => {
    setWaiting(false)
    if (phase !== 'waiting') return
    const timer = setTimeout(() => setWaiting(true), 350)
    return () => clearTimeout(timer)
  }, [phase])

  useEffect(() => {
    setShowHotspots(false)
    if (flipped || phase !== 'idle') return
    const timer = setTimeout(() => setShowHotspots(true), HOTSPOT_DWELL)
    return () => clearTimeout(timer)
  }, [mirror.id, flipped, phase])

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
      imageAlt: ref.imageAlt ?? `${mirror.name} 馆藏实物参考`,
      source: ref.source,
      sourceUrl: ref.sourceUrl,
      isReference: true,
    }
  })()

  return (
    <div className="app">
      <div className="bg-tint" style={{ backgroundColor: mirror.tint }} />

      <header className="app-header">
        <h1 className="app-title">照见千年</h1>
        <p className="app-subtitle">从一面铜镜，看见不同时代的审美</p>
      </header>

      {/* 整页内容容器：镜子与介绍文字共享同一位移，滑动时作为整体联动 */}
      <motion.div className="page" style={{ y, opacity }} data-phase={phase} aria-busy={phase === 'waiting'}>
        <MirrorStage
          mirror={mirror}
          flipped={flipped}
          showHotspots={showHotspots}
          onHotspotOpen={(hotspot) => setSheet({ type: 'hotspot', hotspot })}
          onReady={onReady}
        />

        <footer className="app-footer">
          <div className="dynasty-name">{mirror.dynasty}</div>
          <div className="mirror-name">{mirror.name}</div>
          <div className="divider" />
          <p className="mirror-desc">{mirror.shortDescription}</p>

          {mirror.reference && (
            <button type="button" className="ref-entry" onClick={() => setSheet({ type: 'reference' })}>
              史实资料
            </button>
          )}

          <p className="hint">上下滑动切换朝代 · 点击铜镜翻面</p>
        </footer>
      </motion.div>

      {/* 朝代指示器：固定于屏幕右缘垂直居中，不随拖拽/滑动位移；纯指示，不可点击 */}
      <div className="dynasty-dots" aria-hidden="true">
        {mirrors.map((m) => (
          <span key={m.id} className={m.id === mirror.id ? 'active' : undefined} />
        ))}
      </div>

      {waiting && <p className="loading-notice" role="status">正在加载铜镜…</p>}

      <InfoCard content={sheetContent} onClose={() => setSheet(null)} />
    </div>
  )
}
