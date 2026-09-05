import { useEffect, useRef, useState } from 'react'
import './OpeningOverlay.css'
import mojingUrl from '../textures/opening/mojing.webp'
import shinvUrl from '../textures/opening/shinv.webp'
import shinvMirrorUrl from '../textures/opening/shinv-mirror.webp'

/**
 * 开场序厅（约 4 秒，opening/design.md）：
 * 深青黑背景 → 《磨镜图》浮现 →「以铜为镜」→ 叠化《对镜仕女图》→「可以正衣冠」
 * → 画中圆形镜面放大并移向主页面铜镜最终位置（匹配剪辑，WAAPI）→ 遮罩淡出露出主页面。
 *
 * - 主页面在遮罩下方提前渲染，结束时遮罩整体淡出，无二次加载；
 * - 图片/文字层全部 CSS animation（delay 编排，只动 opacity/transform）；
 * - 画中镜 → 3D 铜镜的桥接需要按实际布局测量位移/缩放，用 Web Animations API 单独驱动；
 * - 点击任意处跳过；prefers-reduced-motion 走 0.4s 简单淡入；弱网 800ms 图片未就绪直接跳过。
 */

interface OpeningOverlayProps {
  /** 遮罩开始淡出（铜镜已落位）时触发：用于主标题一次性入场淡入 */
  onReveal: () => void
  /** 开场彻底结束，卸载遮罩 */
  onDone: () => void
}

/** 画中大镜（镜台椭圆镜面）在《对镜仕女图》941×1672 原图中的裁切区域（比例） */
const BRIDGE = { left: 0.13709, top: 0.56758, width: 0.25505, height: 0.19139 }

const TOTAL_MS = 4100 // 3.45s 开始淡出 + 0.6s 淡出 + 少量缓冲
const REVEAL_MS = 3450
const BRIDGE_DELAY_MS = 2550
const BRIDGE_DURATION_MS = 1300
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

export default function OpeningOverlay({ onReveal, onDone }: OpeningOverlayProps) {
  const [phase, setPhase] = useState<'loading' | 'play'>('loading')
  const rootRef = useRef<HTMLDivElement | null>(null)
  const slotRef = useRef<HTMLDivElement | null>(null)
  const bridgeRef = useRef<HTMLImageElement | null>(null)
  const timers = useRef<number[]>([])
  const anim = useRef<Animation | null>(null)
  const finished = useRef(false)
  const callbacks = useRef({ onReveal, onDone })
  callbacks.current = { onReveal, onDone }

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms))
  }
  const clearTimers = () => {
    timers.current.forEach(t => clearTimeout(t))
    timers.current = []
  }

  /** 开场结束（正常播完 / 跳过 / 兜底共用）：记录会话 + 静默陀螺仪预检 + 卸载 */
  const complete = () => {
    if (finished.current) return
    finished.current = true
    markPlayed()
    // TODO: gyro permission hook（未来倾斜/视差功能预留）。iOS 13+ 的 requestPermission
    // 必须在用户手势内调用才会弹窗，开场自动结束时通常没有手势——这里按要求静默尝试一次，失败即忽略。
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

  /** 点击任意处快速跳过：清定时器、取消桥接动画，快速淡出后卸载 */
  const skip = () => {
    if (finished.current) return
    clearTimers()
    anim.current?.cancel()
    anim.current = null
    const root = rootRef.current
    if (root) {
      root.classList.add('is-closing')
      later(complete, CLOSING_MS)
    } else {
      complete()
    }
  }

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let cancelled = false

    if (reduced) {
      // 减少动态效果：不做画卷时间线，仅背景 + 静态文案，0.4s 左右简单淡出
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
      // 短延时等 React 提交后测量：画中镜椭圆位置 + 主页面铜镜最终矩形，驱动匹配剪辑桥接动画。
      // 不用 rAF 门控：测量靠 getBoundingClientRect 强制布局，与是否产出合成帧无关。
      later(() => {
        if (cancelled || finished.current) return
        const bridge = bridgeRef.current
          const slot = slotRef.current
          if (bridge && slot) {
            const slotRect = slot.getBoundingClientRect()
            const startX = slotRect.left + slotRect.width * (BRIDGE.left + BRIDGE.width / 2)
            const startY = slotRect.top + slotRect.height * (BRIDGE.top + BRIDGE.height / 2)
            const startW = slotRect.width * BRIDGE.width
            // 主页面真实铜镜（3D wrap；WebGL 不可用时回退平面 .mirror-face）的最终落位
            const stage =
              document.querySelector('.mirror-3d-wrap') ?? document.querySelector('.mirror-face')
            const rect = stage?.getBoundingClientRect()
            const hasRect = !!rect && rect.width > 0 && rect.height > 0
            const targetW = hasRect ? rect!.width : Math.min(window.innerWidth * 0.7, window.innerHeight * 0.58, 560)
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
          }
          later(() => {
            rootRef.current?.classList.add('is-ending')
            callbacks.current.onReveal()
          }, REVEAL_MS)
          later(complete, TOTAL_MS)
      }, 60)
    }

    // 图片构建时打包、运行时预加载；800ms 内未就绪则跳过开场（宁无开场不白屏）
    const images = Promise.all([preloadImage(mojingUrl), preloadImage(shinvUrl), preloadImage(shinvMirrorUrl)]).then(
      ok => (ok.every(Boolean) ? 'ready' : 'fail'),
    )
    const budget = new Promise<Outcome>(resolve => later(() => resolve('timeout'), PRELOAD_BUDGET_MS))
    Promise.race([images, budget]).then(outcome => {
      if (cancelled || finished.current) return
      if (outcome === 'ready') startPlay()
      else complete()
    })

    return () => {
      cancelled = true
      clearTimers()
      anim.current?.cancel()
      anim.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={rootRef}
      className={`opening-root${phase === 'play' ? ' is-playing' : ''}`}
      onClick={skip}
      aria-hidden="true"
    >
      {/* 《磨镜图》：0.25s 浮现，1.3s 起退暗 */}
      <div className="opening-layer">
        <div className="painting-slot">
          <img className="opening-img opening-mojing" src={mojingUrl} alt="" draggable={false} />
        </div>
      </div>

      {/* 《对镜仕女图》：1.2s 起从下半部浮现，与磨镜图叠化；画中镜桥接层随 2.55s 起的 WAAPI 动画移动 */}
      <div className="opening-layer">
        <div className="painting-slot" ref={slotRef}>
          <img className="opening-img opening-shinv" src={shinvUrl} alt="" draggable={false} />
          <img ref={bridgeRef} className="opening-bridge" src={shinvMirrorUrl} alt="" draggable={false} />
        </div>
      </div>

      {/* 真实 HTML 文本，非图片文字 */}
      {phase === 'play' && (
        <div className="opening-copy">
          <p className="opening-line1">以铜为镜</p>
          <p className="opening-line2">可以正衣冠</p>
        </div>
      )}
    </div>
  )
}
