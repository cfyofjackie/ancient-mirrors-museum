import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import mirrors from './data/mirrors'
import type { Hotspot } from './data/mirrors'
import MirrorStage from './components/MirrorStage'
import InfoCard, { type SheetContent } from './components/InfoCard'
import OpeningPages from './components/OpeningPages'
import usePageNavigation from './interaction/usePageNavigation'
import { SEQUENCE } from './interaction/sequence'

const HOTSPOT_DWELL = 1600
type Sheet = { type: 'hotspot'; hotspot: Hotspot } | { type: 'reference' } | null

export default function App() {
  const [sheet, setSheet] = useState<Sheet>(null)
  const [flipped, setFlipped] = useState(false)
  const [showHotspots, setShowHotspots] = useState(false)
  const [waiting, setWaiting] = useState(false)

  const nav = usePageNavigation({
    count: SEQUENCE.length,
    blocked: sheet !== null,
    onCommit: () => { setSheet(null); setFlipped(false) },
    onTap: () => setFlipped(value => !value),
  })
  const { index, phase, y, opacity, ready } = nav
  const item = SEQUENCE[index]
  const inHall = item.kind === 'mirror'
  // 最近一次报告素材就绪的镜（mirrors 下标）。商镜在序厅期间已按 mirrors[0] 挂载并绘制完成，
  // 翻入展厅（index 2）时内容不变、不会有新的 onReady，需据此放行 waiting。
  const readyMirror = useRef(-1)
  // 序厅两页期间主展厅已按商镜渲染（藏在序厅之下）：翻入展厅时商镜纹理早已就绪，无需等待
  const mirror = mirrors[item.kind === 'mirror' ? item.index : 0]
  const mirrorIndex = item.kind === 'mirror' ? item.index : 0
  const onReady = useCallback(() => {
    readyMirror.current = mirrorIndex
    ready(index)
  }, [ready, index, mirrorIndex])

  useEffect(() => {
    setWaiting(false)
    if (phase !== 'waiting' || !inHall) return
    const timer = setTimeout(() => setWaiting(true), 350)
    return () => clearTimeout(timer)
  }, [phase, inHall])

  // waiting 放行：序厅页没有 3D 素材等待；商镜翻入展厅时早已就绪（无新 onReady）。
  // 其余镜间切换必须等新素材实际绘制后的 onReady（经 ready 回调）解除 waiting。
  useEffect(() => {
    if (phase !== 'waiting') return
    if (!inHall || readyMirror.current === mirrorIndex) {
      ready(index)
      return
    }
    // 兜底：onReady 因纹理超时等原因未到达时，800ms 后强制放行，避免页面卡死在 waiting
    const bailout = setTimeout(() => ready(index), 800)
    return () => clearTimeout(bailout)
  }, [phase, index, inHall, mirrorIndex, ready])

  useEffect(() => {
    setShowHotspots(false)
    if (!inHall || flipped || phase !== 'idle') return
    const timer = setTimeout(() => setShowHotspots(true), HOTSPOT_DWELL)
    return () => clearTimeout(timer)
  }, [mirror.id, flipped, phase, inHall])

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

      {/* 整页内容容器：镜子与介绍文字共享同一位移，滑动时作为整体联动。
          序厅两页也在本容器内（OpeningPages 绝对定位层），与铜镜同一位移值。
          主展厅顶部有 hall-header 展签（朝代名+镜名），随页面整体位移 */}
      <motion.div
        className="page"
        style={{ y, opacity }}
        data-phase={phase}
        data-kind={item.kind}
        data-page={index}
        aria-busy={phase === 'waiting'}
      >
        {/* 主展厅顶部展签块：朝代名（朱红）+ 镜名 + 简介两行，一组居中。
            文字随 mirror 数据渲染（与下方 MirrorStage 同一 mirror 对象），朝代切换自动跟随。
            pointer-events: none（触摸穿透到 window 级手势层）；仅主展厅显示，序厅有自己文字体系 */}
        {inHall && (
          <header className="hall-header">
            <div className="dynasty-name">{mirror.dynasty}</div>
            <div className="mirror-name">{mirror.name}</div>
            <p className="mirror-desc">{mirror.shortDescription}</p>
          </header>
        )}

        <MirrorStage
          mirror={mirror}
          flipped={flipped}
          showHotspots={showHotspots}
          onHotspotOpen={(hotspot) => setSheet({ type: 'hotspot', hotspot })}
          onReady={onReady}
        />

        {/* 底部只留史实资料按钮 + 滑动提示（圆点指示器在 .page 之外固定于右缘） */}
        <footer className={`app-footer${inHall ? ' text-enter' : ''}`}>
          {mirror.reference && (
            <button type="button" className="ref-entry" onClick={() => setSheet({ type: 'reference' })}>
              史实资料
            </button>
          )}

          <p className="hint">上下滑动切换朝代 · 点击铜镜翻面</p>
        </footer>

        {/* 序厅两页：磨镜页 / 仕女页，纯 DOM，与铜镜共用同一位移容器 */}
        <OpeningPages
          page={item.kind === 'opening' ? item.page : 2}
          active={item.kind === 'opening'}
        />
      </motion.div>

      {/* 朝代指示器：固定于屏幕右缘垂直居中，不随拖拽/滑动位移；纯指示，不可点击。
          11 项：序厅两项（空心小点）+ 展厅九镜 */}
      <div className="dynasty-dots" aria-hidden="true">
        {SEQUENCE.map((entry, i) => (
          <span
            key={entry.kind === 'opening' ? `opening-${entry.page}` : `mirror-${entry.index}`}
            className={`${entry.kind === 'opening' ? 'opening-dot' : ''}${i === index ? ' active' : ''}`}
          />
        ))}
      </div>

      {waiting && <p className="loading-notice" role="status">正在加载铜镜…</p>}

      <InfoCard content={sheetContent} onClose={() => setSheet(null)} />
    </div>
  )
}
