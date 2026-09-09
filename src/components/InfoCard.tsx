import { useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'

export interface SheetContent {
  title: string
  /** 单段说明（无 sections 时渲染） */
  description?: string
  /** 结构化多段内容（优先于 description 渲染） */
  sections?: { heading: string; body: string }[]
  /** 馆藏实物图（可选；无图时若 isReference 则显示占位块） */
  imageUrl?: string
  imageAlt?: string
  /** 来源与授权说明 */
  source?: string
  sourceUrl?: string
  /** 是否为史实资料卡片（无图时显示占位块而非不显示） */
  isReference?: boolean
}

interface InfoCardProps {
  content: SheetContent | null
  onClose: () => void
}

/**
 * 底部信息卡（SLC 第三节 3 + 第七节：不遮挡整页、点击空白关闭）。
 * 同时承载热点说明与史实资料两类内容。
 *
 * 关闭手势：滚动到内容顶部时向下拖即收起卡片；往下滚看内容时，向下拖仍进行自动滚动。
 * 用受控 motion 值 + 原生 touch/mouse 手势实现，从而让「下拉关闭」与「内容滚动」共存。
 */
export default function InfoCard({ content, onClose }: InfoCardProps) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sheetY = useMotionValue(0)
  const backdropOpacity = useMotionValue(0)
  const gesture = useRef<{ startY: number; atTop: boolean; captured: boolean } | null>(null)
  const closingRef = useRef(false)

  const height = useCallback(() => sheetRef.current?.offsetHeight ?? window.innerHeight, [])

  const setCapturedClass = useCallback((on: boolean) => {
    const el = sheetRef.current
    if (el) el.classList.toggle('is-dragging', on)
  }, [])

  const requestClose = useCallback(() => {
    if (closingRef.current) return
    closingRef.current = true
    animate(sheetY, height(), {
      duration: 0.26,
      ease: [0.32, 0.72, 0, 1],
      onComplete: () => { setCapturedClass(false); onClose() },
    })
    animate(backdropOpacity, 0, { duration: 0.22 })
  }, [backdropOpacity, height, onClose, setCapturedClass, sheetY])

  // 重新打开时复位关闭标记
  useEffect(() => { closingRef.current = false }, [content])

  // 打开动画：先移到屏外，再滑入（useLayoutEffect 保证首帧不闪现 @0）
  useLayoutEffect(() => {
    if (!content) return
    sheetY.set(height())
    backdropOpacity.set(0)
    const c = animate(sheetY, 0, { duration: 0.32, ease: [0.32, 0.72, 0, 1] })
    const b = animate(backdropOpacity, 1, { duration: 0.25 })
    return () => { c.stop(); b.stop() }
  }, [content, backdropOpacity, height, sheetY])

  const snapBack = useCallback(() => {
    setCapturedClass(false)
    animate(sheetY, 0, { type: 'spring', stiffness: 420, damping: 40 })
  }, [setCapturedClass, sheetY])

  const finishDrag = useCallback(() => {
    if (sheetY.get() > 110) requestClose()
    else snapBack()
  }, [requestClose, sheetY, snapBack])

  // 触摸手势
  useEffect(() => {
    const el = sheetRef.current
    if (!el) return
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      const t = e.touches[0]
      gesture.current = { startY: t.clientY, atTop: (scrollRef.current?.scrollTop ?? 0) <= 1, captured: false }
    }
    const onTouchMove = (e: TouchEvent) => {
      const g = gesture.current
      if (!g) return
      const dy = e.touches[0].clientY - g.startY
      if (!g.captured) {
        // 仅在内容顶部、且向下拖时接管；否则放行给原生滚动
        if (g.atTop && dy > 0) { g.captured = true; setCapturedClass(true) }
        else return
      }
      if (e.cancelable) e.preventDefault()
      sheetY.set(Math.max(0, dy))
    }
    const onEnd = () => {
      const g = gesture.current
      gesture.current = null
      if (g?.captured) finishDrag()
    }
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onEnd)
    el.addEventListener('touchcancel', onEnd)
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onEnd)
      el.removeEventListener('touchcancel', onEnd)
    }
  }, [setCapturedClass, sheetY, finishDrag])

  // 鼠标手势（桌面）：拖动内容区向下同样可收起
  useEffect(() => {
    const el = sheetRef.current
    if (!el) return
    const onDown = (e: MouseEvent) => {
      if (e.button !== 0) return
      gesture.current = { startY: e.clientY, atTop: (scrollRef.current?.scrollTop ?? 0) <= 1, captured: false }
    }
    const onMove = (e: MouseEvent) => {
      const g = gesture.current
      if (!g) return
      const dy = e.clientY - g.startY
      if (!g.captured) {
        if (g.atTop && dy > 6) { g.captured = true; setCapturedClass(true) }
        else return
      }
      sheetY.set(Math.max(0, dy))
    }
    const onUp = () => {
      const g = gesture.current
      gesture.current = null
      if (g?.captured) finishDrag()
    }
    el.addEventListener('mousedown', onDown)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => {
      el.removeEventListener('mousedown', onDown)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
  }, [setCapturedClass, sheetY, finishDrag])

  if (!content) return null

  return (
    <>
      <motion.div
        className="sheet-backdrop"
        style={{ opacity: backdropOpacity }}
        onClick={requestClose}
      />
      <motion.div
        ref={sheetRef}
        className={`sheet${content.isReference ? ' sheet-reference' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={content.title}
        style={{ x: '-50%', y: sheetY }}
      >
        <div className="sheet-grab" aria-hidden="true">
          <div className="sheet-handle" />
        </div>
        <button type="button" className="sheet-x" onClick={requestClose} aria-label="关闭">
          ×
        </button>
        <div className="sheet-scroll" ref={scrollRef}>
          <div className="sheet-body">
            {content.imageUrl ? (
              <figure className="ref-figure">
                <div className="ref-image-frame">
                  <img src={content.imageUrl} alt={content.imageAlt ?? content.title} />
                </div>
                <figcaption>{content.imageAlt ?? content.title}</figcaption>
              </figure>
            ) : (
              content.isReference && !content.sections?.length && (
                <div className="ref-placeholder">
                  <span>史料图片整理中 · 待补充</span>
                </div>
              )
            )}
            <div className="sheet-copy">
              <h2 className="sheet-title">{content.title}</h2>
              {content.sections?.length ? (
                <div className="sheet-sections">
                  {content.sections.map(sec => (
                    <section key={sec.heading} className="sheet-section">
                      <h3 className="sheet-section-heading">{sec.heading}</h3>
                      <p className="sheet-desc">{sec.body}</p>
                    </section>
                  ))}
                </div>
              ) : (
                <p className="sheet-desc">{content.description}</p>
              )}
              {content.source && (
                <p className="sheet-source">
                  {/* 小工具容器禁跳转外链，来源仅作标注展示，不做可点击外联 */}
                  图片来源：<span title={content.sourceUrl}>{content.source}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
