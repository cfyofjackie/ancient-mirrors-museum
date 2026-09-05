import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import type { Hotspot, Mirror } from '../data/mirrors'
import Mirror3D, { hasWebGL } from './Mirror3D'
import MirrorFlip from './MirrorFlip'
import HotspotComponent from './Hotspot'

interface MirrorStageProps {
  mirror: Mirror
  flipped: boolean
  showHotspots: boolean
  /** 三幕交接第二/三幕：铜镜轻微缩放落定动效（scale 1.02 → 1.0） */
  settling?: boolean
  onHotspotOpen: (hotspot: Hotspot) => void
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
  settling,
  onHotspotOpen,
  onReady,
}: MirrorStageProps) {
  const webgl = useMemo(() => hasWebGL(), [])
  const [failed, setFailed] = useState(false)
  const use3D = webgl && !failed && !!mirror.art3d

  return (
    <div className={`mirror-stage${settling ? ' handover-settle' : ''}`}>
      <div className="mirror-slide">
        <div className="mirror-3d-wrap">
          {use3D && mirror.art3d ? (
            <Mirror3D
              art={mirror.art3d}
              flipped={flipped}
              onReady={onReady}
              onError={() => setFailed(true)}
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
