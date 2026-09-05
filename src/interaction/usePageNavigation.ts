import { useCallback, useEffect, useRef, useState } from 'react'
import { animate, useMotionValue, useReducedMotion } from 'framer-motion'

type Direction = 1 | -1
type Phase = 'idle' | 'dragging' | 'exiting' | 'waiting' | 'entering' | 'handover'
type Options = {
  count: number
  blocked: boolean
  onCommit: () => void
  onTap: () => void
  /** 专属过渡拦截（序厅仕女页 → 商镜三幕交接）：返回 true 表示由外部接管本次翻页，
   *  控制器进入 handover 相位并锁定，随后由 commitHandover/endHandover 收尾。 */
  onHandover?: (from: number, delta: Direction) => boolean
}
const interactive = 'button, a, input, textarea, select, [contenteditable], .sheet, .sheet-backdrop'
const editable = 'input, textarea, select, [contenteditable], .sheet'

/** 一个写入者管理拖拽、退场、素材就绪和入场；取消动画不依赖其 Promise 完成。 */
export default function usePageNavigation(options: Options) {
  const latest = useRef(options)
  latest.current = options
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('idle')
  const state = useRef<Phase>('idle')
  const current = useRef(0)
  const queued = useRef<Direction | null>(null)
  const generation = useRef(0)
  const controls = useRef<Array<{ stop: () => void }>>([])
  const run = useRef<(delta: Direction) => void>(() => {})
  const y = useMotionValue(0)
  const opacity = useMotionValue(1)
  const reduced = useReducedMotion()

  const changePhase = useCallback((next: Phase) => {
    state.current = next
    setPhase(next)
  }, [])
  const stop = useCallback(() => {
    generation.current++
    controls.current.forEach(control => control.stop())
    controls.current = []
  }, [])
  const finish = useCallback(() => {
    changePhase('idle')
    const next = queued.current
    queued.current = null
    if (next) run.current(next)
  }, [changePhase])
  const tween = useCallback((toY: number, toOpacity: number, duration: number, done: () => void) => {
    stop()
    const gen = generation.current
    const transition = { duration: reduced ? 0 : duration, ease: [0.22, 0.8, 0.36, 1] as const }
    controls.current = [
      animate(opacity, toOpacity, transition),
      animate(y, toY, { ...transition, onComplete: () => { if (gen === generation.current) done() } }),
    ]
  }, [opacity, y, reduced, stop])
  const settle = useCallback(() => {
    changePhase('entering')
    tween(0, 1, 0.28, finish)
  }, [changePhase, tween, finish])

  const go = useCallback((delta: Direction) => {
    if (latest.current.blocked) return
    if (state.current === 'exiting' || state.current === 'waiting' || state.current === 'entering') {
      queued.current = delta
      return
    }
    // 专属过渡（三幕交接）：外部接管，控制器锁定在 handover 相位；
    // y/opacity 不再由本控制器写入，单写入者移交给交接编排。
    if (latest.current.onHandover?.(current.current, delta)) {
      queued.current = null
      changePhase('handover')
      return
    }
    changePhase('exiting')
    const distance = reduced ? 0 : Math.min(240, window.innerHeight * 0.24)
    // 从当前拖动位置继续，不把已经拖远的页面拉回。
    const out = -delta * Math.max(distance, Math.abs(y.get()) + 36)
    tween(out, 0, 0.16, () => {
      opacity.jump(0)
      y.jump(reduced ? 0 : delta * Math.min(160, window.innerHeight * 0.18))
      changePhase('waiting')
      current.current = (current.current + delta + latest.current.count) % latest.current.count
      latest.current.onCommit()
      setIndex(current.current)
    })
  }, [changePhase, opacity, reduced, tween, y])
  run.current = go

  // 新镜已经应用纹理并绘制完成后才显现，慢网不会闪现上一面镜子的贴图。
  const ready = useCallback((readyIndex: number) => {
    if (readyIndex === current.current && state.current === 'waiting') settle()
  }, [settle])

  /** 三幕交接第二幕：内容切换到目标页（只改页码，不解除锁定，交互仍屏蔽） */
  const commitHandover = useCallback((target: number) => {
    current.current = target
    queued.current = null
    setIndex(target)
  }, [])

  /** 三幕交接第三幕结束：解除锁定回到 idle，交互恢复 */
  const endHandover = useCallback(() => {
    queued.current = null
    changePhase('idle')
  }, [changePhase])

  useEffect(() => {
    let pointer: { id: number; x: number; y: number; offset: number; maxDistance: number; tap: boolean; deferred: boolean; samples: Array<{y: number; t: number}> } | null = null
    const target = (event: Event) => event.target instanceof Element ? event.target : null
    const down = (event: PointerEvent) => {
      if (pointer || event.button !== 0 || event.isPrimary === false || latest.current.blocked || target(event)?.closest(interactive)) return
      const deferred = state.current === 'waiting'
      const wasIdle = state.current === 'idle'
      if (!deferred) stop()
      queued.current = null
      pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, offset: y.get(), maxDistance: 0,
        deferred, tap: wasIdle && !!target(event)?.closest('.mirror-3d-wrap'), samples: [{ y: event.clientY, t: event.timeStamp }] }
      if (!deferred) {
        controls.current = [animate(opacity, 1, { duration: 0.12 })]
        changePhase('dragging')
      }
    }
    const sample = (event: PointerEvent) => {
      if (!pointer) return
      pointer.maxDistance = Math.max(pointer.maxDistance, Math.hypot(event.clientX - pointer.x, event.clientY - pointer.y))
      pointer.samples.push({ y: event.clientY, t: event.timeStamp })
      while (pointer.samples.length > 2 && event.timeStamp - pointer.samples[0].t > 100) pointer.samples.shift()
    }
    const move = (event: PointerEvent) => {
      if (!pointer || event.pointerId !== pointer.id) return
      sample(event)
      if (!pointer.deferred) y.set(pointer.offset + event.clientY - pointer.y)
    }
    const up = (event: PointerEvent) => {
      if (!pointer || event.pointerId !== pointer.id) return
      sample(event)
      const gesture = pointer
      pointer = null
      const dy = event.clientY - gesture.y
      const vertical = Math.abs(dy) > Math.abs(event.clientX - gesture.x)
      const first = gesture.samples[0]
      const velocity = (event.clientY - first.y) / Math.max(1, event.timeStamp - first.t) * 1000
      if (gesture.deferred) {
        if (vertical && (Math.abs(dy) >= 70 || (Math.abs(dy) >= 20 && Math.abs(velocity) >= 350))) go((Math.abs(velocity) >= 350 ? velocity : dy) < 0 ? 1 : -1)
        return
      }
      if (gesture.maxDistance < 12) {
        if (gesture.tap && target(event)?.closest('.mirror-3d-wrap') && !target(event)?.closest(interactive)) latest.current.onTap()
        settle()
      } else if (vertical && (Math.abs(dy) >= 70 || (Math.abs(dy) >= 20 && Math.abs(velocity) >= 350))) {
        go((Math.abs(velocity) >= 350 ? velocity : dy) < 0 ? 1 : -1)
      } else settle()
    }
    const cancel = (event?: PointerEvent) => {
      if (!pointer || (event && event.pointerId !== pointer.id)) return
      const deferred = pointer.deferred
      pointer = null
      queued.current = null
      if (!deferred) settle()
    }
    let wheelTotal = 0
    let lastWheel = -Infinity
    let wheelTime = 0
    const wheel = (event: WheelEvent) => {
      if (pointer || latest.current.blocked || target(event)?.closest(editable)) return
      const now = performance.now()
      if (now - lastWheel < 650) return
      if (now - wheelTime > 160 || Math.sign(wheelTotal) !== Math.sign(event.deltaY)) wheelTotal = 0
      wheelTime = now
      wheelTotal += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1)
      if (Math.abs(wheelTotal) < 24) return
      lastWheel = now
      go(wheelTotal > 0 ? 1 : -1)
      wheelTotal = 0
    }
    const key = (event: KeyboardEvent) => {
      if (pointer || latest.current.blocked || event.repeat || target(event)?.closest(editable)) return
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
      event.preventDefault()
      go(event.key === 'ArrowDown' ? 1 : -1)
    }
    const blur = () => cancel()
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', cancel)
    window.addEventListener('blur', blur)
    window.addEventListener('wheel', wheel, { passive: true })
    window.addEventListener('keydown', key)
    return () => {
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', cancel)
      window.removeEventListener('blur', blur)
      window.removeEventListener('wheel', wheel)
      window.removeEventListener('keydown', key)
      stop()
    }
  }, [changePhase, go, opacity, settle, stop, y])

  return { index, phase, y, opacity, go, ready, commitHandover, endHandover }
}
