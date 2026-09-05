import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import mirrors from './data/mirrors'
import type { Hotspot } from './data/mirrors'
import MirrorStage from './components/MirrorStage'
import InfoCard, { type SheetContent } from './components/InfoCard'
import OpeningPages from './components/OpeningPages'
import usePageNavigation from './interaction/usePageNavigation'
import { SEQUENCE, HALL_START, SHINV_PAGE } from './interaction/sequence'
import { useHandover } from './interaction/useHandover'
import shinvMirrorUrl from './textures/opening/shinv-mirror.webp'

const HOTSPOT_DWELL = 1600
type Sheet = { type: 'hotspot'; hotspot: Hotspot } | { type: 'reference' } | null

export default function App() {
  const [sheet, setSheet] = useState<Sheet>(null)
  const [flipped, setFlipped] = useState(false)
  const [showHotspots, setShowHotspots] = useState(false)
  const [waiting, setWaiting] = useState(false)
  // 主展厅文字（朝代/镜名/简介）：三幕交接第二幕与镜子叠化并行淡入
  //（顶部标题已移入序厅扉页，主展厅不再有 header）
  const [hallEntered, setHallEntered] = useState(false)
  const slotRef = useRef<HTMLDivElement | null>(null)
  const bridgeRef = useRef<HTMLImageElement | null>(null)
  // 商镜纹理/平面图是否已就绪（交接第二幕的前置条件；商镜是挂载首镜，通常早已就绪）
  const mirrorReady = useRef(false)

  // 三幕交接（仕女页 → 商镜）：编排独立成 hook；期间 usePageNavigation 锁定在 handover 相位
  const handover = useHandover({
    getPage: () => document.querySelector('.page'),
    getSlot: () => slotRef.current,
    getBridge: () => bridgeRef.current,
    getStage: () =>
      document.querySelector('.mirror-3d-wrap') ?? document.querySelector('.mirror-face'),
    isMirrorReady: () => mirrorReady.current,
    onEnterHall: () => {
      nav.commitHandover(HALL_START)
      setFlipped(false)
      setHallEntered(true)
    },
    onUnlock: () => {
      nav.endHandover()
    },
  })

  const nav = usePageNavigation({
    count: SEQUENCE.length,
    blocked: sheet !== null || handover.act !== 'idle',
    onCommit: () => { setSheet(null); setFlipped(false) },
    onTap: () => setFlipped(value => !value),
    onHandover: (from, delta) =>
      from === SHINV_PAGE && delta === 1 ? handover.begin(y) : false,
  })
  const { index, phase, y, opacity, ready } = nav
  const item = SEQUENCE[index]
  const inHall = item.kind === 'mirror'
  // 序厅两页期间主展厅已按商镜渲染（藏在序厅之下）：商镜纹理提前就绪，交接无需等待
  const mirror = mirrors[item.kind === 'mirror' ? item.index : 0]
  const onReady = useCallback(() => {
    mirrorReady.current = true
    ready(index)
  }, [ready, index])

  useEffect(() => {
    setWaiting(false)
    if (phase !== 'waiting' || !inHall) return
    const timer = setTimeout(() => setWaiting(true), 350)
    return () => clearTimeout(timer)
  }, [phase, inHall])

  // 序厅页没有 3D 素材等待：waiting 阶段立即放行（否则无 onReady 会卡在 waiting）
  useEffect(() => {
    if (phase === 'waiting' && !inHall) ready(index)
  }, [phase, index, inHall, ready])

  useEffect(() => {
    setShowHotspots(false)
    if (!inHall || flipped || phase !== 'idle') return
    const timer = setTimeout(() => setShowHotspots(true), HOTSPOT_DWELL)
    return () => clearTimeout(timer)
  }, [mirror.id, flipped, phase, inHall])

  // 回到序厅页（如商镜左滑返回）时复位入场态：再次交接时文字重新淡入
  useEffect(() => {
    if (inHall) return
    setHallEntered(false)
  }, [inHall])

  // 三幕交接可中断：交接中途任何 pointerdown 立即完成交接，直接落在主展厅（不打架原则）
  useEffect(() => {
    if (handover.act === 'idle') return
    const onDown = () => handover.interrupt()
    window.addEventListener('pointerdown', onDown)
    return () => window.removeEventListener('pointerdown', onDown)
  }, [handover.act, handover.interrupt])

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
          顶部标题已移入序厅扉页（展览扉页化），主展厅不再渲染 header */}
      <motion.div
        className="page"
        style={{ y, opacity }}
        data-phase={phase}
        data-kind={item.kind}
        data-page={index}
        aria-busy={phase === 'waiting' || phase === 'handover'}
      >
        <MirrorStage
          mirror={mirror}
          flipped={flipped}
          showHotspots={showHotspots}
          settling={handover.act === 'act2' || handover.act === 'act3'}
          onHotspotOpen={(hotspot) => setSheet({ type: 'hotspot', hotspot })}
          onReady={onReady}
        />

        <footer className={`app-footer${hallEntered ? ' text-enter' : ''}`}>
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

        {/* 序厅两页：磨镜页 / 仕女页，纯 DOM，与铜镜共用同一位移容器 */}
        <OpeningPages
          page={item.kind === 'opening' ? item.page : 2}
          active={item.kind === 'opening'}
          yielding={handover.act === 'act1'}
          slotRef={slotRef}
        />

        {/* 画中镜桥接层：平时隐藏，交接第一幕按实测位置定尺寸并放大，第二幕与 3D 商镜叠化 */}
        <img ref={bridgeRef} className="handover-bridge" src={shinvMirrorUrl} alt="" draggable={false} />
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
