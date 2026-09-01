import { AnimatePresence, motion } from 'framer-motion'

export interface SheetContent {
  title: string
  description: string
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
            className="sheet"
            role="dialog"
            aria-label={content.title}
            initial={{ y: '100%', x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            exit={{ y: '100%', x: '-50%' }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="sheet-handle" />
            {content.imageUrl ? (
              <figure className="ref-figure">
                <img src={content.imageUrl} alt={content.imageAlt ?? content.title} />
                <figcaption>{content.imageAlt ?? content.title}</figcaption>
              </figure>
            ) : (
              content.isReference && (
                <div className="ref-placeholder">
                  <span>史料图片整理中 · 待补充</span>
                </div>
              )
            )}
            <h2 className="sheet-title">{content.title}</h2>
            <p className="sheet-desc">{content.description}</p>
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
            <button type="button" className="sheet-close" onClick={onClose}>
              关闭
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
