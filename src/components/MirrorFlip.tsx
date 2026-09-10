import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import type { Mirror } from '../data/mirrors'

/**
 * CSS 平面翻面：WebGL 不可用（或 3D 素材加载失败）时的回退方案。
 * 3D 可用时主舞台走 Mirror3D；热点层已上提到 MirrorStage。
 *
 * 素材来源要注意：`mirrors/<id>/back.webp` 里「汉 / 明 / 宋 / 唐」四张至今仍是
 * 早期 `scripts/make-placeholders.mjs` 生成的**占位图**（另 5 张才是真素材），
 * 直接用它会在 3D 失败时露出占位铜镜。因此：
 * - 镜背优先用 3D 那张真彩图 `art3d.flat`（已是裁好的镜体彩图），并按镜形裁切
 *   （它是方图无透明底，需 clip 成圆/八瓣/多边形）；
 * - 镜面本来就没有真图（3D 正面是程序纹理），这里用 CSS 渐变复刻同一套「磨光古铜」语汇。
 */
export default function MirrorFlip({ mirror, flipped, onReady }: { mirror: Mirror; flipped: boolean; onReady: () => void }) {
  const [backAvailable, setBackAvailable] = useState(true)
  const backSrc = mirror.art3d?.flat ?? mirror.backImage
  const shape = mirror.art3d?.shape.type ?? 'circle'

  useEffect(() => {
    let cancelled = false
    let timer = 0
    setBackAvailable(true)
    const finish = (ok: boolean) => {
      window.clearTimeout(timer)
      if (cancelled) return
      setBackAvailable(ok)
      // 即使资源不可用，也先渲染稳定占位再放行页面，避免卡死在不可见 waiting。
      requestAnimationFrame(() => { if (!cancelled) onReady() })
    }
    const image = new Image()
    timer = window.setTimeout(() => finish(false), 12000)
    image.onload = () => finish(true)
    image.onerror = () => finish(false)
    image.src = backSrc
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [backSrc, onReady])

  return (
    <div className="mirror-perspective">
      <motion.div
        className="mirror-flip"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
      >
        {backAvailable ? (
          <img
            className={`mirror-face mirror-fallback-shape-${shape}`}
            src={backSrc}
            alt={`${mirror.dynasty} · ${mirror.name}（镜背）`}
            draggable={false}
          />
        ) : (
          <div className="mirror-face mirror-unavailable">镜背图像暂不可用</div>
        )}
        <div className="mirror-face mirror-face-front" role="img" aria-label={`${mirror.dynasty} · ${mirror.name}（镜面）`}>
          <div className={`mirror-front-fallback mirror-fallback-shape-${shape}`} />
        </div>
      </motion.div>
    </div>
  )
}
