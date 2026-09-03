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
  onHotspotOpen: (hotspot: Hotspot) => void
  /** 翻页按钮兜底（全平台常显） */
  onSwitch: (delta: 1 | -1) => void
  onReady: () => void
}

/**
 * 视觉舞台：镜面画布 + 热点层 + 翻页按钮。
 * 滑动/点击手势由 App 的全屏指针监听负责；本组件只做视觉呈现。
 */
export default function MirrorStage({
  mirror,
  flipped,
  showHotspots,
  onHotspotOpen,
  onSwitch,
  onReady,
}: MirrorStageProps) {
  const webgl = useMemo(() => hasWebGL(), [])
  const [failed, setFailed] = useState(false)
  const use3D = webgl && !failed && !!mirror.art3d

  return (
    <div className="mirror-stage">
      <div className="mirror-slide">
        <div className="mirror-3d-wrap">
          {use3D && mirror.art3d ? (
            <Mirror3D art={mirror.art3d} flipped={flipped} onReady={onReady} onError={() => setFailed(true)} />
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

      {/* 翻页按钮兜底（全平台常显）；点击经由 App 的 window 手势过滤，不会误触翻面 */}
      <div className="stage-nav">
        <button type="button" className="nav-btn" onClick={() => onSwitch(-1)} aria-label="上一个朝代">
          ↑
        </button>
        <button type="button" className="nav-btn" onClick={() => onSwitch(1)} aria-label="下一个朝代">
          ↓
        </button>
      </div>
    </div>
  )
}
