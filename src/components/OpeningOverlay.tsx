import { useEffect, useRef, useState } from 'react'
import { animate, motion, useMotionValue } from 'framer-motion'
import type { AnimationPlaybackControls } from 'framer-motion'
import './OpeningOverlay.css'
import mojingUrl from '../textures/opening/mojing.webp'
import shinvUrl from '../textures/opening/shinv.webp'
import shinvMirrorUrl from '../textures/opening/shinv-mirror.webp'

/**
 * 开场序厅（两页手动滑动版，取代 opening/design.md 的时间线动画章节）：
 * 第 1 页《磨镜图》+「以铜为镜」→ 上滑第 2 页《对镜仕女图》+「可以正衣冠」
 * → 再上滑：页 2 整体滑出，画中镜（shinv-mirror 裁切层）放大并移向主页面铜镜落位、
 *   交叉淡化，3D 铜镜接管；遮罩淡出露出主页面，标题入场、交互恢复。
 *
 * - 页内滑动手势独立实现（pointer 监听），与主展厅 dragY 体系互不干扰：
 *   开场期间 usePageNavigation 的 blocked 通道已屏蔽主展厅手势；
 *   手势阈值/速度判定与主展厅一致（≥70px，或 ≥20px 且 |v|≥350px/s），跟手拖拽 + spring 落定/回弹；
 * - 画中镜桥接层在交接时刻才按实际布局测量定位（脱离轨道，页面滑出不影响其轨迹），沿用 WAAPI；
 * - 保留：图片预加载 + 800ms 弱网跳过、sessionStorage 一次、点击跳过、
 *   prefers-reduced-motion 快速进入、陀螺仪预检钩子。
 */

interface OpeningOverlayProps {
  /** 遮罩开始淡出（铜镜已落位）时触发：用于主标题一次性入场淡入 */
  onReveal: () => void
  /** 开场彻底结束，卸载遮罩 */
  onDone: () => void
}

/** 画中大镜（镜台椭圆镜面）在《对镜仕女图》941×1672 原图中的裁切区域（比例） */
const BRIDGE = { left: 0.13709, top: 0.56758, width: 0.25505, height: 0.19139 }

const PAGE_COUNT = 2
/** 与主展厅 usePageNavigation 一致的松手判定阈值 */
const SWIPE_DISTANCE_PX = 70
const SWIPE_SHORT_PX = 20
const SWIPE_VELOCITY_PXPS = 350
const SAMPLE_WINDOW_MS = 100
const TAP_MAX_PX = 12
/** 越界拖拽阻尼（第 1 页下拽 / 第 2 页上拽超出边界的跟随比例） */
const RUBBER = 0.3
/** 交接时刻编排：桥接动画 → 主页面淡出 → 卸载 */
const BRIDGE_DELAY_MS = 120
const BRIDGE_DURATION_MS = 1300
const ROOT_FADE_AT_MS = 900
const HANDOVER_TOTAL_MS = 1550
const PRELOAD_BUDGET_MS = 800
const REDUCED_TOTAL_MS = 420
const CLOSING_MS = 200
const STORAGE_KEY = 'opening:played:v1'

/** 本会话是否已播放过开场（sessionStorage，失败按未播放处理） */
export function openingShouldPlay(): boolean {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === null
  } catch {
    return true
  }
}

function markPlayed() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    /* 隐私模式等场景忽略 */
  }
}

function preloadImage(url: string): Promise<boolean> {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

type Outcome = 'ready' | 'fail' | 'timeout'
type Phase = 'loading' | 'play'

interface PointerGesture {
  id: number
  x: number
  y: number
  maxDistance: number
  samples: Array<{ y: number; t: number }>
  /** loading 阶段或页面落定动画中：只识别轻点跳过，不参与拖拽 */
  tapOnly: boolean
}

export default function OpeningOverlay({ onReveal, onDone }: OpeningOverlayProps) {
  const [phase, setPhase] = useState<Phase>('loading')
  const rootRef = useRef<HTMLDivElement | null>(null)
  const slotRef = useRef<HTMLDivElement | null>(null)
  const bridgeRef = useRef<HTMLImageElement | null>(null)
  const timers = useRef<number[]>([])
  const anim = useRef<Animation | null>(null)
  const trackAnim = useRef<AnimationPlaybackControls | null>(null)
  const trackY = useMotionValue(0)
  const pageH = useRef(1)
  const indexRef = useRef(0)
  const phaseRef = useRef<Phase>('loading')
  const pointer = useRef<PointerGesture | null>(null)
  const animating = useRef(false)
  const finishing = useRef(false)
  const finished = useRef(false)
  const callbacks = useRef({ onReveal, onDone })
  callbacks.current = { onReveal, onDone }
  phaseRef.current = phase

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms))
  }
  const clearTimers = () => {
    timers.current.forEach(t => clearTimeout(t))
    timers.current = []
  }
  const measurePage = () => {
    pageH.current = rootRef.current?.getBoundingClientRect().height || window.innerHeight
  }

  /** 开场结束（正常交接 / 跳过 / 兜底共用）：记录会话 + 静默陀螺仪预检 + 卸载 */
  const complete = () => {
    if (finished.current) return
    finished.current = true
    markPlayed()
    // TODO: gyro permission hook（未来倾斜/视差功能预留）。iOS 13+ 的 requestPermission
    // 必须在用户手势内调用才会弹窗，第 2 页上滑交接发生在手势内，这里静默尝试一次，失败即忽略。
    try {
      const coarse = window.matchMedia('(pointer: coarse)').matches
      const doe =
        typeof DeviceOrientationEvent !== 'undefined'
          ? (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<unknown> })
          : null
      if (coarse && typeof doe?.requestPermission === 'function') {
        doe.requestPermission().catch(() => {})
      }
    } catch {
      /* 静默忽略 */
    }
    callbacks.current.onDone()
  }

  /** 点击任意处快速跳过：清定时器、取消动画，快速淡出后卸载（保留原有行为） */
  const skip = () => {
    if (finished.current || finishing.current) return
    clearTimers()
    anim.current?.cancel()
    anim.current = null
    trackAnim.current?.stop()
    trackAnim.current = null
    const root = rootRef.current
    if (root) {
      root.classList.add('is-closing')
      later(complete, CLOSING_MS)
    } else {
      complete()
    }
  }

  /** 轨道落定 / 回弹：spring 手感；reduced 情况下直接跳到目标位 */
  const snapTo = (target: number) => {
    trackAnim.current?.stop()
    animating.current = true
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      trackY.jump(target)
      animating.current = false
      return
    }
    trackAnim.current = animate(trackY, target, {
      type: 'spring',
      stiffness: 320,
      damping: 38,
      onComplete: () => {
        animating.current = false
      },
    })
  }

  const baseY = () => -indexRef.current * pageH.current

  /** 页间切换：更新 index 并让轨道 spring 到目标页（DOM 不变，轨道由 motion value 驱动） */
  const goPage = (target: 0 | 1) => {
    indexRef.current = target
    snapTo(-target * pageH.current)
  }

  /** 向下翻（dir=1：第 1 页→第 2 页→主展厅）或向上翻（dir=-1：仅第 2 页→第 1 页） */
  const step = (dir: 1 | -1) => {
    if (finished.current || finishing.current || animating.current) return
    if (phaseRef.current !== 'play') return
    if (dir === 1) {
      if (indexRef.current === 0) goPage(1)
      else enterHall()
    } else if (indexRef.current === 1) {
      goPage(0)
    } else {
      snapTo(baseY())
    }
  }

  /** 进入主展厅（A 方案）：第 2 页滑出手势完成时触发。
   *  页 2 整体滑出；画中镜裁切层脱离轨道、按实时布局定位后走 WAAPI 轨迹，
   *  放大并移向主页面真实铜镜落位、交叉淡化；随后遮罩淡出、标题入场。 */
  const enterHall = () => {
    if (finished.current || finishing.current) return
    finishing.current = true
    pointer.current = null
    trackAnim.current?.stop()
    animating.current = false

    const root = rootRef.current
    const slot = slotRef.current
    const bridge = bridgeRef.current
    let bridged = false
    if (bridge && slot) {
      const slotRect = slot.getBoundingClientRect()
      bridge.style.left = `${slotRect.left + slotRect.width * BRIDGE.left}px`
      bridge.style.top = `${slotRect.top + slotRect.height * BRIDGE.top}px`
      bridge.style.width = `${slotRect.width * BRIDGE.width}px`
      bridge.style.height = `${slotRect.height * BRIDGE.height}px`
      const startX = slotRect.left + slotRect.width * (BRIDGE.left + BRIDGE.width / 2)
      const startY = slotRect.top + slotRect.height * (BRIDGE.top + BRIDGE.height / 2)
      const startW = slotRect.width * BRIDGE.width
      // 主页面真实铜镜（3D wrap；WebGL 不可用时回退平面 .mirror-face）的最终落位
      const stage =
        document.querySelector('.mirror-3d-wrap') ?? document.querySelector('.mirror-face')
      const rect = stage?.getBoundingClientRect()
      const hasRect = !!rect && rect.width > 0 && rect.height > 0
      const targetW = hasRect
        ? rect!.width
        : Math.min(window.innerWidth * 0.7, window.innerHeight * 0.58, 560)
      const targetX = hasRect ? rect!.left + rect!.width / 2 : window.innerWidth / 2
      const targetY = hasRect ? rect!.top + rect!.height / 2 : window.innerHeight * 0.46
      const dx = targetX - startX
      const dy = targetY - startY
      const scale = targetW / startW
      anim.current = bridge.animate(
        [
          {
            transform: 'translate(0px, 0px) scale(1)',
            opacity: 0,
            easing: 'cubic-bezier(0.3, 0, 0.22, 1)',
          },
          { opacity: 1, offset: 0.22 },
          { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 1, offset: 0.72 },
          { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 0 },
        ],
        { delay: BRIDGE_DELAY_MS, duration: BRIDGE_DURATION_MS, fill: 'both' },
      )
      bridged = true
    }

    // 页 2 整体向上滑出（从当前拖拽位置继续），露出下方已渲染好的主页面
    trackAnim.current = animate(trackY, -(PAGE_COUNT * pageH.current) - 40, {
      duration: 0.34,
      ease: [0.22, 0.8, 0.36, 1],
    })

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || !bridged) {
      // 无桥接（素材/布局缺失兜底）：直接快速淡出
      later(() => {
        root?.classList.add('is-closing')
        callbacks.current.onReveal()
      }, 60)
      later(complete, 60 + CLOSING_MS)
    } else {
      later(() => {
        root?.classList.add('is-ending')
        callbacks.current.onReveal()
      }, ROOT_FADE_AT_MS)
      later(complete, HANDOVER_TOTAL_MS)
    }
  }

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let cancelled = false

    if (reduced) {
      // 减少动态效果：不做两页滑动，仅背景 + 静态文案，0.4s 左右简单淡出直进主展厅
      setPhase('play')
      rootRef.current?.classList.add('is-reduced')
      later(() => rootRef.current?.classList.add('is-closing'), REDUCED_TOTAL_MS - CLOSING_MS)
      later(complete, REDUCED_TOTAL_MS)
      return () => {
        cancelled = true
        clearTimers()
      }
    }

    const startPlay = () => {
      if (cancelled || finished.current) return
      setPhase('play')
      measurePage()
    }

    // 图片构建时打包、运行时预加载；800ms 内未就绪则跳过开场（宁无开场不白屏）
    const images = Promise.all([
      preloadImage(mojingUrl),
      preloadImage(shinvUrl),
      preloadImage(shinvMirrorUrl),
    ]).then(ok => (ok.every(Boolean) ? 'ready' : 'fail'))
    const budget = new Promise<Outcome>(resolve => later(() => resolve('timeout'), PRELOAD_BUDGET_MS))
    Promise.race([images, budget]).then(outcome => {
      if (cancelled || finished.current) return
      if (outcome === 'ready') startPlay()
      else complete()
    })

    // ---- 开场页内手势：独立 pointer 监听，只驱动本组件的轨道 motion value ----
    const root = rootRef.current
    const target = (event: Event) => (event.target instanceof Element ? event.target : null)

    const onDown = (event: PointerEvent) => {
      if (
        pointer.current ||
        event.button !== 0 ||
        event.isPrimary === false ||
        finished.current ||
        finishing.current ||
        !root ||
        !root.contains(target(event))
      )
        return
      // 页面落定动画中只识别轻点跳过，不参与拖拽，避免与 spring 打架
      const tapOnly = phaseRef.current !== 'play' || animating.current
      if (!tapOnly) measurePage()
      pointer.current = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        maxDistance: 0,
        samples: [{ y: event.clientY, t: event.timeStamp }],
        tapOnly,
      }
    }
    const onMove = (event: PointerEvent) => {
      const gesture = pointer.current
      if (!gesture || event.pointerId !== gesture.id) return
      gesture.maxDistance = Math.max(
        gesture.maxDistance,
        Math.hypot(event.clientX - gesture.x, event.clientY - gesture.y),
      )
      gesture.samples.push({ y: event.clientY, t: event.timeStamp })
      while (gesture.samples.length > 2 && event.timeStamp - gesture.samples[0].t > SAMPLE_WINDOW_MS)
        gesture.samples.shift()
      if (gesture.tapOnly) return
      // 跟手：整条轨道按手指位移平移；越过首/末页边界时施加阻尼（rubber band）
      const raw = -indexRef.current * pageH.current + (event.clientY - gesture.y)
      const min = -(PAGE_COUNT - 1) * pageH.current
      let next = raw
      if (raw > 0) next = raw * RUBBER
      else if (raw < min) next = min + (raw - min) * RUBBER
      trackY.set(next)
    }
    const onUp = (event: PointerEvent) => {
      const gesture = pointer.current
      if (!gesture || event.pointerId !== gesture.id) return
      pointer.current = null
      gesture.samples.push({ y: event.clientY, t: event.timeStamp })
      const dy = event.clientY - gesture.y
      // 轻点：保留"点击跳过"
      if (gesture.maxDistance < TAP_MAX_PX) {
        skip()
        return
      }
      if (gesture.tapOnly) {
        return
      }
      const dx = event.clientX - gesture.x
      const vertical = Math.abs(dy) > Math.abs(dx)
      const first = gesture.samples[0]
      const velocity =
        ((event.clientY - first.y) / Math.max(1, event.timeStamp - first.t)) * 1000
      if (!vertical) {
        snapTo(baseY())
        return
      }
      // 松手判定与主展厅一致：≥70px，或 ≥20px 且 |速度| ≥350px/s
      const commitUp = -dy >= SWIPE_DISTANCE_PX || (-dy >= SWIPE_SHORT_PX && velocity <= -SWIPE_VELOCITY_PXPS)
      const commitDown = dy >= SWIPE_DISTANCE_PX || (dy >= SWIPE_SHORT_PX && velocity >= SWIPE_VELOCITY_PXPS)
      if (commitUp) {
        if (indexRef.current === 0) goPage(1)
        else enterHall()
      } else if (commitDown && indexRef.current === 1) {
        goPage(0)
      } else {
        snapTo(baseY())
      }
    }
    const onCancel = (event?: PointerEvent) => {
      const gesture = pointer.current
      if (!gesture || (event && event.pointerId !== gesture.id)) return
      pointer.current = null
      if (!gesture.tapOnly) snapTo(baseY())
    }

    // 滚轮 / 方向键翻页（与主展厅一致的方向与去抖；开场只有两页，向下翻完即交接）
    let wheelTotal = 0
    let lastWheel = -Infinity
    let wheelTime = 0
    const onWheel = (event: WheelEvent) => {
      if (phaseRef.current !== 'play' || finished.current || finishing.current) return
      const now = performance.now()
      if (now - lastWheel < 650) return
      if (now - wheelTime > 160 || Math.sign(wheelTotal) !== Math.sign(event.deltaY)) wheelTotal = 0
      wheelTime = now
      wheelTotal += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1)
      if (Math.abs(wheelTotal) < 24) return
      lastWheel = now
      step(wheelTotal > 0 ? 1 : -1)
      wheelTotal = 0
    }
    const editable = 'input, textarea, select, [contenteditable]'
    const onKey = (event: KeyboardEvent) => {
      if (event.repeat || target(event)?.closest(editable)) return
      if (event.key === 'ArrowDown') step(1)
      else if (event.key === 'ArrowUp') step(-1)
    }

    const onResize = () => {
      if (phaseRef.current !== 'play') return
      const height = rootRef.current?.getBoundingClientRect().height || window.innerHeight
      if (height === pageH.current) return
      pageH.current = height
      trackY.jump(-indexRef.current * height)
    }

    root?.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onCancel as (event: PointerEvent) => void)
    const onBlur = () => onCancel()
    window.addEventListener('blur', onBlur)
    root?.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)

    return () => {
      cancelled = true
      clearTimers()
      anim.current?.cancel()
      anim.current = null
      trackAnim.current?.stop()
      trackAnim.current = null
      root?.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onCancel as (event: PointerEvent) => void)
      window.removeEventListener('blur', onBlur)
      root?.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={rootRef}
      className={`opening-root${phase === 'play' ? ' is-playing' : ''}`}
      aria-hidden="true"
    >
      {phase === 'play' && (
        <motion.div className="opening-track" style={{ y: trackY }}>
          {/* 第 1 页：磨镜页 */}
          <section className="opening-page">
            <div className="painting-slot">
              <img className="opening-img" src={mojingUrl} alt="" draggable={false} />
            </div>
            <div className="opening-copy">
              <p className="opening-line1">以铜为镜</p>
            </div>
            <p className="opening-hint">向上滑动，开始观展</p>
          </section>

          {/* 第 2 页：对镜页（painting-slot 供交接时刻测量画中镜裁切位置） */}
          <section className="opening-page">
            <div className="painting-slot" ref={slotRef}>
              <img className="opening-img" src={shinvUrl} alt="" draggable={false} />
            </div>
            <div className="opening-copy">
              <p className="opening-line2">可以正衣冠</p>
            </div>
            <p className="opening-hint">向上滑动，进入展厅</p>
          </section>
        </motion.div>
      )}

      {/* 画中镜桥接层：平时隐藏，交接时刻按实测位置定尺寸，WAAPI 驱动飞向主铜镜 */}
      <img ref={bridgeRef} className="opening-bridge" src={shinvMirrorUrl} alt="" draggable={false} />
    </div>
  )
}
