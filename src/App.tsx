import { useCallback, useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import mirrors from './data/mirrors'
import type { Hotspot } from './data/mirrors'
import MirrorStage from './components/MirrorStage'
import InfoCard, { type SheetContent } from './components/InfoCard'

/** 切换动画：整页滑出 → 即时换素材 → 对侧滑入（一条动画链，方向随滑动） */
const SWITCH_OUT_MS = 160
const SWITCH_IN_MS = 280
const SWITCH_OFFSET = 84
/** 拖动/按钮/键盘切换进行中的互斥锁 */
const WHEEL_THRESHOLD = 24
const WHEEL_COOLDOWN = 900
/** 停留多久后浮现热点（SLC：1–2 秒，取 1.6s） */
const HOTSPOT_DWELL = 1600

type Sheet =
  | { type: 'hotspot'; hotspot: Hotspot }
  | { type: 'reference' }
  | null

export default function App() {
  const [index, setIndex] = useState(0)
  const [sheet, setSheet] = useState<Sheet>(null)
  const [flipped, setFlipped] = useState(false)
  const [showHotspots, setShowHotspots] = useState(false)
  const switching = useRef(false)
  /** 拖拽跟手位移（手势层与整页内容共享） */
  const dragY = useMotionValue(0)

  // 切换：整页沿滑动方向滑出 → 即时换素材 → 从对侧滑入落位
  const go = useCallback(
    async (delta: 1 | -1) => {
      if (switching.current) return
      switching.current = true
      setSheet(null)
      setFlipped(false)
      const out = delta === 1 ? -SWITCH_OFFSET : SWITCH_OFFSET
      await animate(dragY, out, { duration: SWITCH_OUT_MS / 1000, ease: 'easeIn' })
      setIndex((i) => (i + delta + mirrors.length) % mirrors.length)
      dragY.jump(-out)
      await animate(dragY, 0, { duration: SWITCH_IN_MS / 1000, ease: [0.22, 0.8, 0.36, 1] })
      switching.current = false
    },
    [dragY],
  )

  // ---- 全屏指针手势：拖拽跟手 + 松手判定（切换 / 回弹 / 点击翻面）----
  useEffect(() => {
    let startY = 0
    let startValue = 0
    let dragging = false
    const down = (e: PointerEvent) => {
      const t = e.target as Element | null
      // 交互元素（按钮/链接/热点/信息卡）上不启动拖拽
      if (t?.closest('button, a, .hotspot, .sheet, .sheet-backdrop')) return
      startY = e.clientY
      startValue = dragY.get()
      dragging = true
    }
    const move = (e: PointerEvent) => {
      if (!dragging) return
      dragY.set(startValue + (e.clientY - startY))
    }
    const up = (e: PointerEvent) => {
      if (!dragging) return
      dragging = false
      const dy = e.clientY - startY
      if (Math.abs(dy) < 12) {
        // 点击：点在镜子本体上才翻面（热点/按钮由各自处理器负责）
        const t = e.target as Element | null
        if (t?.closest('.mirror-3d-wrap') && !t.closest('.hotspot')) setFlipped((v) => !v)
        animate(dragY, 0, { type: 'spring', stiffness: 520, damping: 42 })
        return
      }
      if (dy < -70) go(1)
      else if (dy > 70) go(-1)
      else animate(dragY, 0, { type: 'spring', stiffness: 520, damping: 42 })
    }
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', up)
    return () => {
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', up)
    }
  }, [dragY, go])

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
      <motion.div className="bg-tint" animate={{ backgroundColor: mirror.tint }} transition={{ duration: 0.9 }} />

      <header className="app-header">
        <h1 className="app-title">照见千年</h1>
        <p className="app-subtitle">从一面铜镜，看见不同时代的审美</p>
      </header>

      {/* 整页内容容器：镜子与介绍文字共享同一位移，滑动时作为整体联动 */}
      <motion.div className="page" style={{ y: dragY }}>
        <MirrorStage
          mirror={mirror}
          flipped={flipped}
          showHotspots={showHotspots}
          onHotspotOpen={(hotspot) => setSheet({ type: 'hotspot', hotspot })}
          onSwitch={go}
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

          <div className="dynasty-dots">
            {mirrors.map((m) => (
              <span key={m.id} className={m.id === mirror.id ? 'active' : undefined} />
            ))}
          </div>
          <p className="hint">上下滑动切换朝代 · 点击铜镜翻面</p>
        </footer>
      </motion.div>

      <InfoCard content={sheetContent} onClose={() => setSheet(null)} />
    </div>
  )
}
