import { useCallback, useEffect, useRef, useState } from 'react'
import { animate, useReducedMotion } from 'framer-motion'
import type { AnimationPlaybackControls, MotionValue } from 'framer-motion'

/**
 * 三幕交接（仕女页 → 商镜专属，取代旧 OpeningOverlay 的 WAAPI 一把梭）：
 *
 * 第一幕·画中镜独舞（~600ms）：仕女页内容淡出让位（CSS is-yielding），页面从拖拽位置回落，
 *   画中镜裁切图（shinv-mirror.webp 桥接层，绝对定位在 .page 内、随页面位移）单独放大，
 *   目标为主铜镜落位（实测 .mirror-3d-wrap / .mirror-face rect）。
 * 第二幕·叠化交接（~500ms）：内容切换到商镜页，画中镜与 3D 商镜同位交叉淡化；
 *   顶部标题与主展厅文字（朝代/镜名/简介）并行淡入。
 * 第三幕·落定（~300ms）：铜镜轻微缩放落定（CSS mirror-settle，跨越二三幕、第三幕末到位），交互解锁。
 *
 * 可中断：交接中途 pointerdown → 立即完成（interrupt），直接落在主展厅（不打架原则）。
 * 单写入者：交接期间 usePageNavigation 锁定在 handover 相位，y 仅由本编排写入（act1 回落）。
 */

/** 三幕时长/曲线集中配置（调参唯一入口；CSS 侧 450ms/800ms 与 yieldFade、act2+act3 对齐） */
export const HANDOVER = {
  /** 第一幕·画中镜独舞 */
  act1: 600,
  /** 第二幕·叠化交接 */
  act2: 500,
  /** 第三幕·落定 */
  act3: 300,
  /** 第一幕内仕女页内容让位淡出（OpeningPages.css 的 is-yielding 同步用该值） */
  yieldFade: 450,
  /** 画中镜桥接层淡入（第一幕前段，盖住让位淡出避免透明谷） */
  bridgeIn: 150,
  /** 第三幕落定起始缩放 */
  settleFrom: 1.02,
} as const

/** 画中大镜（镜台椭圆镜面）在《对镜仕女图》941×1672 原图中的裁切区域（比例） */
export const BRIDGE_CROP = { left: 0.13709, top: 0.56758, width: 0.25505, height: 0.19139 }

export type HandoverAct = 'idle' | 'act1' | 'act2' | 'act3'

type Callbacks = {
  /** 主位移容器 .page（桥接层绝对定位于其内，坐标随页面 transform 抵消） */
  getPage: () => HTMLElement | null
  /** 仕女页画框槽位（测量画中镜裁切起点） */
  getSlot: () => HTMLElement | null
  /** 画中镜桥接层 img */
  getBridge: () => HTMLImageElement | null
  /** 主铜镜落位（3D wrap；WebGL 不可用时回退平面 .mirror-face） */
  getStage: () => Element | null
  /** 商镜纹理是否已就绪（3D 绘制完成或平面图加载完成） */
  isMirrorReady: () => boolean
  /** 第二幕：内容切换到商镜 + 标题/文字并行淡入（须幂等，中断时也会调用） */
  onEnterHall: () => void
  /** 第三幕末：解锁交互（须幂等） */
  onUnlock: () => void
}

export function useHandover(callbacks: Callbacks) {
  const latest = useRef(callbacks)
  latest.current = callbacks
  const reduced = useReducedMotion()
  const reducedRef = useRef(false)
  reducedRef.current = !!reduced
  const [act, setAct] = useState<HandoverAct>('idle')
  const actRef = useRef<HandoverAct>('idle')
  const timers = useRef<number[]>([])
  // 桥接层的全部 WAAPI 动画（act1 飞行 fill:both 需保活到 act2 叠化结束，收尾时一并取消）
  const bridgeAnims = useRef<Animation[]>([])
  const yAnim = useRef<AnimationPlaybackControls | null>(null)

  /** reduced-motion：所有时值归零，交接直接落到终态 */
  const dur = (ms: number) => (reducedRef.current ? 0 : ms)
  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, dur(ms)))
  }
  const clearTimers = () => {
    timers.current.forEach(t => clearTimeout(t))
    timers.current = []
  }
  const setActSafe = (next: HandoverAct) => {
    actRef.current = next
    setAct(next)
  }
  const clearBridge = () => {
    bridgeAnims.current.forEach(anim => anim.cancel())
    bridgeAnims.current = []
    const bridge = latest.current.getBridge()
    if (bridge) ['left', 'top', 'width', 'height'].forEach(key => bridge.style.removeProperty(key))
  }

  const runAct3 = () => {
    setActSafe('act3')
    later(finish, HANDOVER.act3)
  }

  const runAct2 = () => {
    if (actRef.current !== 'act1') return
    const proceed = () => {
      if (actRef.current !== 'act1') return
      setActSafe('act2')
      latest.current.onEnterHall()
      const bridge = latest.current.getBridge()
      if (bridge) {
        // 第二幕·叠化：画中镜到位后与 3D 商镜交叉淡化（同位置同尺寸）
      bridgeAnims.current.push(
        bridge.animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: dur(HANDOVER.act2),
          easing: 'ease-in-out',
          fill: 'forwards',
        }),
      )
      }
      later(runAct3, HANDOVER.act2)
    }
    if (latest.current.isMirrorReady()) {
      proceed()
      return
    }
    // 商镜纹理尚未就绪（极端弱网兜底）：画中镜保持在落位等待，就绪后继续；3s 超时放行
    const started = performance.now()
    const poll = () => {
      if (actRef.current !== 'act1') return
      if (latest.current.isMirrorReady() || performance.now() - started > 3000) {
        proceed()
        return
      }
      window.setTimeout(poll, 80)
    }
    poll()
  }


  const finish = () => {
    clearTimers()
    clearBridge()
    yAnim.current?.stop()
    yAnim.current = null
    setActSafe('idle')
    latest.current.onUnlock()
  }

  /** 开始三幕交接；测量失败（布局缺失等兜底）返回 false，交还标准滑动过渡处理 */
  const begin = (y: MotionValue<number>): boolean => {
    if (actRef.current !== 'idle') return false
    const page = latest.current.getPage()
    const slot = latest.current.getSlot()
    const stage = latest.current.getStage()
    const bridge = latest.current.getBridge()
    if (!page || !slot || !stage || !bridge) return false
    const pageRect = page.getBoundingClientRect()
    const slotRect = slot.getBoundingClientRect()
    const stageRect = stage.getBoundingClientRect()
    if (!slotRect.width || !slotRect.height || !stageRect.width || !stageRect.height) return false
    setActSafe('act1')

    // 桥接层定位在 .page 内：page 坐标 = 元素 rect - page rect（两者的页面 transform 相互抵消），
    // 因此 act1 期间页面回落（y → 0）时桥接层与画中镜/铜镜始终对齐。
    const left = slotRect.left - pageRect.left + slotRect.width * BRIDGE_CROP.left
    const top = slotRect.top - pageRect.top + slotRect.height * BRIDGE_CROP.top
    const width = slotRect.width * BRIDGE_CROP.width
    const height = slotRect.height * BRIDGE_CROP.height
    bridge.style.left = `${left}px`
    bridge.style.top = `${top}px`
    bridge.style.width = `${width}px`
    bridge.style.height = `${height}px`
    const dx = stageRect.left - pageRect.left + stageRect.width / 2 - (left + width / 2)
    const dy = stageRect.top - pageRect.top + stageRect.height / 2 - (top + height / 2)
    const scale = stageRect.width / width

    // 第一幕：页面回落 + 仕女页内容让位（CSS）+ 画中镜独舞放大
    yAnim.current = animate(y, 0, {
      duration: dur(HANDOVER.yieldFade) / 1000,
      ease: [0.22, 0.8, 0.36, 1],
    })
    bridgeAnims.current.push(
      bridge.animate(
        [
          {
            transform: 'translate(0px, 0px) scale(1)',
            opacity: 0,
            easing: 'cubic-bezier(0.3, 0, 0.22, 1)',
          },
          { opacity: 1, offset: HANDOVER.bridgeIn / HANDOVER.act1 },
          { transform: `translate(${dx}px, ${dy}px) scale(${scale})`, opacity: 1 },
        ],
        { duration: dur(HANDOVER.act1), fill: 'both' },
      ),
    )
    later(runAct2, HANDOVER.act1)
    return true
  }

  /** 交接中断（pointerdown）：清掉编排，立即落在主展厅（onEnterHall 幂等） */
  const interrupt = useCallback(() => {
    if (actRef.current === 'idle') return
    clearTimers()
    latest.current.onEnterHall()
    finish()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(
    () => () => {
      clearTimers()
      bridgeAnims.current.forEach(anim => anim.cancel())
      yAnim.current?.stop()
    },
    [],
  )

  return { act, begin, interrupt }
}
