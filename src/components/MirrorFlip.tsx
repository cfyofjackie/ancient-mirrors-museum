import { AnimatePresence, motion } from 'framer-motion'
import type { Mirror } from '../data/mirrors'
import Hotspot from './Hotspot'

interface MirrorFlipProps {
  mirror: Mirror
  /** 是否已翻到正面；由 MirrorStage 的 tap 手势驱动 */
  flipped: boolean
  /** 热点是否可见（停留 1–2 秒后出现，SLC 第三节 3） */
  showHotspots: boolean
  onHotspotOpen: (hotspot: Mirror['hotspots'][number]) => void
}

/**
 * 点击翻面（SLC 第三节 2）：
 * - 沿 Y 轴 650ms 缓动翻转，CSS 3D Transform 双面法，不引入真实 3D 模型
 * - 正面用 rotateY(180deg) + backface-visibility 叠在背面之下，翻出即替换
 * - 热点渲染在镜背图层上，仅背面且停留后可见（backface-visibility 视觉隐藏后事件仍会命中，故用条件渲染）
 */
export default function MirrorFlip({ mirror, flipped, showHotspots, onHotspotOpen }: MirrorFlipProps) {
  return (
    <div className="mirror-perspective">
      <motion.div
        className="mirror-flip"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
      >
        <img
          className="mirror-face"
          src={mirror.backImage}
          alt={`${mirror.dynasty} · ${mirror.name}（镜背）`}
          draggable={false}
        />
        {!flipped && (
          <div className="hotspot-layer">
            <AnimatePresence>
              {showHotspots &&
                mirror.hotspots.map((h, i) => (
                  <Hotspot key={h.title} hotspot={h} index={i} onOpen={() => onHotspotOpen(h)} />
                ))}
            </AnimatePresence>
          </div>
        )}
        <img
          className="mirror-face mirror-face-front"
          src={mirror.frontImage}
          alt={`${mirror.dynasty} · ${mirror.name}（镜面）`}
          draggable={false}
        />
      </motion.div>
    </div>
  )
}
