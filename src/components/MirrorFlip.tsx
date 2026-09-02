import { motion } from 'framer-motion'
import type { Mirror } from '../data/mirrors'

/**
 * CSS 平面翻面：WebGL 不可用时的回退方案（SLC 第三节 2）。
 * 3D 可用时主舞台走 Mirror3D；热点层已上提到 MirrorStage。
 */
export default function MirrorFlip({ mirror, flipped }: { mirror: Mirror; flipped: boolean }) {
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
