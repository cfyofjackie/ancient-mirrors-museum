import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import mirrors from './data/mirrors'
import type { Hotspot } from './data/mirrors'
import MirrorStage from './components/MirrorStage'
import InfoCard, { type SheetContent } from './components/InfoCard'
import OpeningPages from './components/OpeningPages'
import usePageNavigation from './interaction/usePageNavigation'
import { SEQUENCE } from './interaction/sequence'
import { REFLECTIONS } from './data/reflections'
import { TABLEAUX } from './data/tableaux'
import { MUSEUM_INTRO } from './data/museumIntro'
import { perf } from './perf' // 临时诊断（与 src/probe.ts 配套）

type Sheet = { type: 'hotspot'; hotspot: Hotspot } | { type: 'reference' } | { type: 'knowledge' } | null

export default function App() {
  const [sheet, setSheet] = useState<Sheet>(null)
  const [flipped, setFlipped] = useState(false)
  const [showHotspots, setShowHotspots] = useState(false)
  const [waiting, setWaiting] = useState(false)
  const [awake, setAwake] = useState(false)
  const awakeRef = useRef(false)

  const nav = usePageNavigation({
    count: SEQUENCE.length,
    blocked: sheet !== null,
    onCommit: () => {
      setSheet(null)
      setFlipped(false)
      setShowHotspots(false)
      setAwake(false)
      awakeRef.current = false
    },
    onTap: () => {
      if (!awakeRef.current) {
        awakeRef.current = true
        setAwake(true)
        return
      }
      setShowHotspots(false)
      setFlipped(value => !value)
    },
  })
  const { index, phase, y, opacity, ready } = nav
  const item = SEQUENCE[index]
  const inHall = item.kind === 'mirror'
  // 最近一次报告素材就绪的镜（mirrors 下标）。商镜在序厅期间已按 mirrors[0] 挂载并绘制完成，
  // 翻入展厅（index 2）时内容不变、不会有新的 onReady，需据此放行 waiting。
  const readyMirror = useRef(-1)
  // 序厅两页期间主展厅已按商镜渲染（藏在序厅之下）：翻入展厅时商镜纹理早已就绪，无需等待
  const mirror = mirrors[item.kind === 'mirror' ? item.index : 0]
  const mirrorIndex = item.kind === 'mirror' ? item.index : 0
  const reflection = REFLECTIONS[mirror.id]
  const tableau = TABLEAUX[mirror.id]
  const onReady = useCallback(() => {
    readyMirror.current = mirrorIndex
    perf.mark('ready') // 临时诊断：新镜实际就绪时刻
    ready(index)
  }, [ready, index, mirrorIndex])

  // 临时诊断：量一下新画卷图的解码耗时（换页是否卡在大图解码上）
  const tableauImgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const img = tableauImgRef.current
    if (!img || !tableau) return
    const t0 = performance.now()
    const done = () => perf.tableau(performance.now() - t0)
    if (img.complete && img.naturalWidth) done()
    else if (typeof img.decode === 'function') img.decode().then(done, done)
    else img.addEventListener('load', done, { once: true })
  }, [tableau, mirror.id, index])

  useEffect(() => {
    setWaiting(false)
    if (phase !== 'waiting' || !inHall) return
    const timer = setTimeout(() => setWaiting(true), 350)
    return () => clearTimeout(timer)
  }, [phase, inHall])

  // waiting 放行：序厅页没有 3D 素材等待；商镜翻入展厅时早已就绪（无新 onReady）。
  // 其余镜间切换必须等新素材实际绘制后的 onReady（经 ready 回调）解除 waiting。
  // 加载失败会由 MirrorStage 切到已解码的 CSS 图片或稳定的错误占位，再报告 ready；
  // 不再用固定时间强行显现尚未绘制的 canvas。
  useEffect(() => {
    if (phase !== 'waiting') return
    if (!inHall || readyMirror.current === mirrorIndex) {
      ready(index)
    }
  }, [phase, index, inHall, mirrorIndex, ready])

  useEffect(() => { setShowHotspots(false) }, [mirror.id, flipped, inHall])

  const sheetContent: SheetContent | null = (() => {
    if (!sheet) return null
    if (sheet.type === 'hotspot') {
      return { title: sheet.hotspot.title, description: sheet.hotspot.description }
    }
    if (sheet.type === 'knowledge') {
      return {
        title: MUSEUM_INTRO.title,
        sections: MUSEUM_INTRO.sections,
        isReference: true,
      }
    }
    const ref = mirror.reference
    if (!ref) return null
    return {
      title: ref.title,
      description: ref.detail ?? '',
      sections: ref.sections,
      imageUrl: ref.imageUrl,
      imageAlt: ref.imageAlt ?? `${mirror.name} 馆藏实物参考`,
      source: ref.source,
      sourceUrl: ref.sourceUrl,
      isReference: true,
    }
  })()

  return (
    <div className="app">
      <div className="bg-tint" style={{ backgroundColor: mirror.tint }} />

      {/* 整页内容容器：镜子与介绍文字共享同一位移，滑动时作为整体联动。
          序厅两页也在本容器内（OpeningPages 绝对定位层），与铜镜同一位移值。
          主展厅顶部有 hall-header 展签（朝代名+镜名），随页面整体位移 */}
      <motion.div
        className="page"
        style={{ y, opacity }}
        data-phase={phase}
        data-kind={item.kind}
        data-page={index}
        data-flipped={flipped}
        data-mirror={inHall ? mirror.id : undefined}
        data-awake={inHall ? awake : undefined}
        aria-busy={phase === 'waiting'}
      >
        {inHall && tableau && (
          <div className="tableau-backdrop" aria-hidden="true">
            <picture>
              <source media="(max-width: 819px)" srcSet={tableau.mobile} />
              <img ref={tableauImgRef} src={tableau.desktop} alt="" draggable={false} />
            </picture>
          </div>
        )}
        {/* 展厅采用稳定的展签 / 展品 / 控制三区。MirrorStage 始终挂载，保证序厅期间的
            商镜预载与 3D 场景生命周期不变；仅由 CSS 在桌面和手机间调整布局。 */}
        <div className="hall-layout">
          {inHall && (
            <header className="hall-header">
              <div className="dynasty-name">{mirror.dynasty}</div>
              <div className="mirror-name">{mirror.name}</div>
              <p className="mirror-desc">{mirror.shortDescription}</p>
            </header>
          )}

          <MirrorStage
            mirror={mirror}
            flipped={flipped}
            showHotspots={showHotspots}
            onHotspotOpen={(hotspot) => setSheet({ type: 'hotspot', hotspot })}
            onReady={onReady}
            interactionActive={phase !== 'idle'}
            reflection={awake ? reflection : undefined}
            reflectionVisible={awake && flipped}
            dormant={inHall && !awake}
            tableauMode={inHall}
          />

          <footer className={`app-footer${inHall ? ' text-enter' : ''}`}>
            <div className="footer-actions">
              {mirror.reference && (
                <button
                  type="button"
                  className="ref-entry"
                  aria-label="查看史实资料"
                  onClick={() => setSheet({ type: 'reference' })}
                >
                  <span>史实</span>
                  <span>资料</span>
                </button>
              )}
              {inHall && awake && !flipped && mirror.hotspots.length > 0 && (
                <button
                  type="button"
                  className="reflection-entry pattern-entry"
                  aria-label={showHotspots ? '隐藏纹样标记' : '查看纹样标记'}
                  aria-pressed={showHotspots}
                  onClick={() => setShowHotspots(value => !value)}
                >
                  <span>{showHotspots ? '隐去' : '细看'}</span>
                  <span>纹样</span>
                </button>
              )}
            </div>

            {awake && (
              <p className={`hint${flipped ? ' reflection-disclosure' : ''} breathe`}>
                {flipped && reflection
                  ? `${reflection.label} · 艺术复原 · 点击铜镜翻回镜背`
                  : showHotspots ? '轻触标记查看纹样说明' : '铜镜已醒 · 点击翻至镜面'}
              </p>
            )}
          </footer>
        </div>

        {/* 序厅两页：磨镜页 / 仕女页，纯 DOM，与铜镜共用同一位移容器 */}
        <OpeningPages
          page={item.kind === 'opening' ? item.page : 2}
          active={item.kind === 'opening'}
        />
      </motion.div>

      {/* 朝代指示器：固定于屏幕右缘垂直居中，不随拖拽/滑动位移；纯指示，不可点击。
          11 项：序厅两项（空心小点）+ 展厅九镜 */}
      <div className={`dynasty-dots${inHall ? ' in-hall' : ''}`} aria-hidden="true">
        {SEQUENCE.map((entry, i) => (
          <span
            key={entry.kind === 'opening' ? `opening-${entry.page}` : `mirror-${entry.index}`}
            className={`${entry.kind === 'opening' ? 'opening-dot' : ''}${i === index ? ' active' : ''}`}
          />
        ))}
      </div>

      {/* 序厅期的「关于铜镜」入口：固定不随拖拽位移；按钮属于 interactive，不参与翻页手势 */}
      {!inHall && (
        <button
          type="button"
          className="opening-knowledge"
          aria-label="关于铜镜"
          onClick={() => setSheet({ type: 'knowledge' })}
        >
          <span>关于</span>
          <span>铜镜</span>
        </button>
      )}

      {waiting && <p className="loading-notice" role="status">正在加载铜镜…</p>}

      <InfoCard content={sheetContent} onClose={() => setSheet(null)} />
    </div>
  )
}
