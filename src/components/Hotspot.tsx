import { motion } from 'framer-motion'
import type { Hotspot as HotspotData } from '../data/mirrors'

interface HotspotProps {
  hotspot: HotspotData
  /** 热点在数据数组中的序号，用作动画错峰 */
  index: number
  onOpen: () => void
}

/**
 * 热点圆点（SLC 第三节 3）：停留后轻微淡入 + 很淡的呼吸动画，不做持续闪烁。
 * 触控区 24px 以上，保证移动端可点。
 */
export default function Hotspot({ hotspot, index, onOpen }: HotspotProps) {
  return (
    <motion.button
      type="button"
      className="hotspot"
      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
      initial={{ opacity: 0, scale: 0.6, x: '-50%', y: '-50%' }}
      animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
      exit={{ opacity: 0, scale: 0.6, x: '-50%', y: '-50%' }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: 'easeOut' }}
      onClick={(e) => {
        e.stopPropagation()
        onOpen()
      }}
      aria-label={hotspot.title}
    >
      <span className="hotspot-core" />
    </motion.button>
  )
}
