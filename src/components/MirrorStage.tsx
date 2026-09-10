import { useMemo, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import type { CSSProperties } from 'react'
import type { Hotspot, Mirror } from '../data/mirrors'
import type { ReflectionProfile } from '../data/reflections'
import Mirror3D, { hasWebGL } from './Mirror3D'
import MirrorFlip from './MirrorFlip'
import HotspotComponent from './Hotspot'
import { flags } from '../flags' // 临时诊断开关（?flip 强制 CSS 回退）

interface MirrorStageProps {
  mirror: Mirror
  flipped: boolean
  showHotspots: boolean
  onHotspotOpen: (hotspot: Hotspot) => void
  onReady: () => void
  interactionActive: boolean
  reflection?: ReflectionProfile
  reflectionVisible: boolean
  dormant?: boolean
  tableauMode?: boolean
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
  onReady,
  interactionActive,
  reflection,
  reflectionVisible,
  dormant = false,
  tableauMode = false,
}: MirrorStageProps) {
  const webgl = useMemo(() => hasWebGL(), [])
  const [failed, setFailed] = useState(false)
  const [loadedReflection, setLoadedReflection] = useState<string | null>(null)
  const use3D = webgl && !failed && !!mirror.art3d && !flags.flip

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
              interactionActive={interactionActive}
              reflection={reflection}
              reflectionVisible={reflectionVisible}
              className={dormant ? 'is-dormant' : undefined}
            />
          ) : (
            <MirrorFlip mirror={mirror} flipped={flipped} onReady={onReady} />
          )}
          {tableauMode && (
            <div className={`flat-mirror flat-mirror-${mirror.art3d?.shape.type ?? 'circle'}${dormant ? '' : ' is-awake'}`} aria-hidden="true">
              <img src={mirror.art3d?.flat ?? mirror.backImage} alt="" draggable={false} />
            </div>
          )}
          {/* 铜镜下沿的常驻指引：与"轻触铜镜，让它醒来"同一位置，唤醒后接着给翻面指引。
              独立于 .flat-mirror（那层唤醒后会淡出），pointer-events:none 不挡点镜。 */}
          {tableauMode && (
            <div className="mirror-hint" aria-hidden="true">
              {dormant
                ? '轻触铜镜，让它醒来'
                : flipped
                  ? '轻触铜镜，翻回镜背'
                  : showHotspots
                    ? '轻触标记查看纹样说明'
                    : '轻触铜镜，翻至镜面'}
            </div>
          )}
          {!use3D && reflection && flipped && (
            <div
              className={`mirror-reflection reflection-shape-${mirror.art3d?.shape.type ?? 'circle'}${reflectionVisible ? ' is-visible' : ''}`}
              style={{
                '--reflection-opacity': reflection.opacity,
                '--reflection-scale': reflection.scale ?? 1,
                '--reflection-offset-y': `${reflection.offsetY ?? 0}%`,
              } as CSSProperties}
              aria-hidden="true"
            >
              <img
                className={loadedReflection === reflection.imageUrl ? 'is-loaded' : ''}
                src={reflection.imageUrl}
                alt=""
                draggable={false}
                onLoad={() => setLoadedReflection(reflection.imageUrl)}
              />
            </div>
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
