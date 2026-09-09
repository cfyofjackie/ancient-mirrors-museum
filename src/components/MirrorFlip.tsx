import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Mirror } from '../data/mirrors'

/**
 * CSS 平面翻面：WebGL 不可用时的回退方案（SLC 第三节 2）。
 * 3D 可用时主舞台走 Mirror3D；热点层已上提到 MirrorStage。
 */
export default function MirrorFlip({ mirror, flipped, onReady }: { mirror: Mirror; flipped: boolean; onReady: () => void }) {
  const [available, setAvailable] = useState({ front: true, back: true })
  useEffect(() => {
    let cancelled = false
    setAvailable({ front: true, back: true })
    const load = (src: string) => new Promise<boolean>(resolve => {
      const image = new Image()
      const timer = window.setTimeout(() => resolve(false), 12000)
      image.onload = () => { window.clearTimeout(timer); resolve(true) }
      image.onerror = () => { window.clearTimeout(timer); resolve(false) }
      image.src = src
    })
    Promise.all([load(mirror.frontImage), load(mirror.backImage)]).then(([front, back]) => {
      if (cancelled) return
      setAvailable({ front, back })
      // 即使资源不可用，也先渲染稳定占位再放行页面，避免卡死在不可见 waiting。
      requestAnimationFrame(() => { if (!cancelled) onReady() })
    })
    return () => { cancelled = true }
  }, [mirror.frontImage, mirror.backImage, onReady])
  if (!available.front && !available.back) {
    return <div className="mirror-unavailable" role="img" aria-label={`${mirror.dynasty} · ${mirror.name}图像暂不可用`}>铜镜图像暂不可用</div>
  }
  return (
    <div className="mirror-perspective">
      <motion.div
        className="mirror-flip"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
      >
        {available.back ? <img
          className="mirror-face"
          src={mirror.backImage}
          alt={`${mirror.dynasty} · ${mirror.name}（镜背）`}
          draggable={false}
        /> : <div className="mirror-face mirror-unavailable">镜背图像暂不可用</div>}
        {available.front ? <div
          className="mirror-face mirror-face-front mirror-front-fallback"
          role="img"
          aria-label={`${mirror.dynasty} · ${mirror.name}（镜面）`}
          style={{ backgroundImage: `url("${mirror.frontImage}")` }}
        /> : <div className="mirror-face mirror-face-front mirror-unavailable">镜面图像暂不可用</div>}
      </motion.div>
    </div>
  )
}
