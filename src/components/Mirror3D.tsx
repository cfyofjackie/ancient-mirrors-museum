import { useEffect, useRef, useState } from 'react'
import type { Art3D } from '../data/mirrors'
import { createMirrorScene } from '../rendering/mirrorScene'

let supported: boolean | undefined
export function hasWebGL(): boolean {
  if (supported !== undefined) return supported
  try {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('webgl2')
    supported = !!context
    context?.getExtension('WEBGL_lose_context')?.loseContext()
  } catch { supported = false }
  return supported
}

type Props = {
  art: Art3D
  flipped?: boolean
  mode?: 'pbr' | 'toon'
  className?: string
  onReady?: () => void
  onError?: () => void
}

/** 常驻场景；只有资源应用并绘制后才向页面报告就绪。 */
export default function Mirror3D(props: Props) {
  const { art, flipped, mode = 'pbr', className } = props
  const canvas = useRef<HTMLCanvasElement>(null)
  const scene = useRef<ReturnType<typeof createMirrorScene>>()
  const latest = useRef(props)
  latest.current = props
  const [displayed, setDisplayed] = useState<Art3D | null>(null)
  useEffect(() => {
    try {
      scene.current = createMirrorScene(canvas.current!, () => latest.current.onError?.())
    } catch (error) {
      console.error('Mirror3D 初始化失败:', error)
      latest.current.onError?.()
    }
    return () => { scene.current?.dispose(); scene.current = undefined }
  }, [])
  useEffect(() => {
    let cancelled = false
    scene.current?.applyArt(art).then(applied => {
      if (cancelled || !applied) return
      setDisplayed(art)
      latest.current.onReady?.()
    }).catch(error => {
      if (cancelled) return
      console.error('Mirror3D 素材加载失败:', error)
      latest.current.onError?.()
    })
    return () => { cancelled = true }
  }, [art])
  useEffect(() => { scene.current?.setMode(mode) }, [mode])
  useEffect(() => { if (flipped !== undefined) scene.current?.setFlipped(flipped) }, [flipped])
  return <canvas ref={canvas} className={className} style={{ visibility: displayed === art ? 'visible' : 'hidden' }}
    onClick={() => { if (latest.current.flipped === undefined) scene.current?.toggle() }} />
}
