import { motion } from 'framer-motion'
import { useEffect } from 'react'
import type { Mirror } from '../data/mirrors'

/**
 * CSS 平面翻面：WebGL 不可用时的回退方案（SLC 第三节 2）。
 * 3D 可用时主舞台走 Mirror3D；热点层已上提到 MirrorStage。
 */
export default function MirrorFlip({ mirror, flipped, onReady }: { mirror: Mirror; flipped: boolean; onReady: () => void }) {
  useEffect(() => {
    let cancelled = false
    const load = (src: string) => new Promise<void>(resolve => {
      const image = new Image()
      const timer = setTimeout(resolve, 12000)
      image.onload = image.onerror = () => { clearTimeout(timer); resolve() }
      image.src = src
    })
    Promise.all([load(mirror.frontImage), load(mirror.backImage)]).then(() => { if (!cancelled) onReady() })
    return () => { cancelled = true }
  }, [mirror.frontImage, mirror.backImage, onReady])
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
