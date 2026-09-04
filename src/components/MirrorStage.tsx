import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import type { Hotspot, Mirror } from '../data/mirrors'
import Mirror3D, { hasWebGL } from './Mirror3D'
import MirrorFlip from './MirrorFlip'
import HotspotComponent from './Hotspot'

interface MirrorStageProps {
  mirror: Mirror
  flipped: boolean
  showHotspots: boolean
  onHotspotOpen: (hotspot: Hotspot) => void
  /** 展示自转请求令牌：每次自增触发一圈 3D 展示自转 */
  spinToken: number
  /** 自转结束（含被打断后回正完成）回调 */
  onSpinEnd: () => void
  onReady: () => void
}

/**
 * 视觉舞台：镜面画布 + 热点层。
 * 滑动/点击手势由 App 的全屏指针监听负责；本组件只做视觉呈现。
 */
export default function MirrorStage({
  mirror,
  flipped,
  showHotspots,
  onHotspotOpen,
  spinToken,
  onSpinEnd,
  onReady,
}: MirrorStageProps) {
  const webgl = useMemo(() => hasWebGL(), [])
  const [failed, setFailed] = useState(false)
  const use3D = webgl && !failed && !!mirror.art3d

  useEffect(() => {
    // 平面回退没有 3D 自转，立即确认结束，上层热点逻辑不等待
    if (!use3D) onSpinEnd()
  }, [use3D, onSpinEnd, spinToken])

  return (
    <div className="mirror-stage">
      <div className="mirror-slide">
        <div className="mirror-3d-wrap">
          {use3D && mirror.art3d ? (
            <Mirror3D
              art={mirror.art3d}
              flipped={flipped}
              onReady={onReady}
              onError={() => setFailed(true)}
              spinToken={spinToken}
              onSpinEnd={onSpinEnd}
            />
          ) : (
            <MirrorFlip mirror={mirror} flipped={flipped} onReady={onReady} />
          )}
          {!flipped && (
            <div className="hotspot-layer">
              <AnimatePresence key={mirror.id}>
                {showHotspots &&
                  mirror.hotspots.map((h, i) => (
                    <HotspotComponent key={h.title} hotspot={h} index={i} onOpen={() => onHotspotOpen(h)} />
                  ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
