import { AnimatePresence, motion, useDragControls, type PanInfo } from 'framer-motion'

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
 */
export default function InfoCard({ content, onClose }: InfoCardProps) {
  const dragControls = useDragControls()

  // 顶部把手下拉关闭：拖过阈值或速度足够即关闭，否则回弹到原位。
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > 70 || info.velocity.y > 600) onClose()
  }

  return (
    <AnimatePresence>
      {content && (
        <>
          <motion.div
            className="sheet-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <motion.div
            className={`sheet${content.isReference ? ' sheet-reference' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label={content.title}
            initial={{ y: '100%', x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            exit={{ y: '100%', x: '-50%' }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            drag="y"
            dragListener={false}
            dragControls={dragControls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={handleDragEnd}
          >
            <div className="sheet-grab" onPointerDown={(e) => dragControls.start(e)} aria-hidden="true">
              <div className="sheet-handle" />
            </div>
            <button type="button" className="sheet-x" onClick={onClose} aria-label="关闭">
              ×
            </button>
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
                    图片来源：{content.sourceUrl ? (
                      <a href={content.sourceUrl} target="_blank" rel="noreferrer">
                        {content.source}
                      </a>
                    ) : (
                      content.source
                    )}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
