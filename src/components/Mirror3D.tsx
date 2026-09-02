import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import type { Art3D, Shape3D } from '../data/mirrors'

export function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') ?? c.getContext('webgl'))
  } catch {
    return false
  }
}

const R = 1.22

/** 镜背轮廓几何：圆 / 正多边形 / 葵口（极坐标波浪），UV 统一映射到 [0,1]² */
function makeFaceGeometry(shape: Shape3D): THREE.BufferGeometry {
  if (shape.type === 'polygon') return new THREE.CircleGeometry(R, shape.sides)
  if (shape.type === 'lobed') {
    const s = new THREE.Shape()
    const N = 360
    for (let i = 0; i <= N; i++) {
      const th = (i / N) * Math.PI * 2
      const r = R * (1 - shape.depth + shape.depth * Math.abs(Math.sin((shape.lobes / 2) * th)))
      const x = r * Math.cos(th)
      const y = r * Math.sin(th)
      if (i === 0) s.moveTo(x, y)
      else s.lineTo(x, y)
    }
    const g = new THREE.ShapeGeometry(s, 64)
    const uv = g.attributes.uv
    for (let i = 0; i < uv.count; i++) {
      uv.setXY(i, uv.getX(i) / (2 * R) + 0.5, uv.getY(i) / (2 * R) + 0.5)
    }
    return g
  }
  return new THREE.CircleGeometry(R, 128)
}

function makeEdgeGeometry(shape: Shape3D): THREE.CylinderGeometry {
  if (shape.type === 'polygon') return new THREE.CylinderGeometry(R * 0.965, R * 0.965, 0.14, shape.sides, 1, true)
  if (shape.type === 'lobed') return new THREE.CylinderGeometry(R * 0.885, R * 0.885, 0.14, 96, 1, true)
  return new THREE.CylinderGeometry(R * 0.99, R * 0.99, 0.14, 128, 1, true)
}

function makeGradientMap(): THREE.DataTexture {
  const steps = new Uint8Array([90, 160, 235])
  const t = new THREE.DataTexture(steps, steps.length, 1, THREE.RedFormat)
  t.minFilter = THREE.NearestFilter
  t.magFilter = THREE.NearestFilter
  t.generateMipmaps = false
  t.needsUpdate = true
  return t
}

interface Mirror3DProps {
  art: Art3D
  /**
   * 受控翻面：主页面由手势层驱动（传入 flipped）；
   * 不传则组件内部点击自翻（POC 用）。
   */
  flipped?: boolean
  mode?: 'pbr' | 'toon'
  className?: string
}

/**
 * 3D 铜镜（决策 D9）：平涂图 + 法线贴图 + 实时光照的圆盘。
 * 纯渲染组件：翻面状态受控（或不传 flipped 时点击自翻），手势与热点由外层负责。
 */
export default function Mirror3D({ art, flipped, mode = 'pbr', className }: Mirror3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const target = useRef(0)
  const anim = useRef({ from: 0, to: 0, t0: -1 })
  const controlled = flipped !== undefined

  useEffect(() => {
    if (controlled) {
      anim.current = { from: anim.current.to, to: flipped ? Math.PI : 0, t0: performance.now() }
      target.current = anim.current.to
    }
  }, [flipped, controlled])

  useEffect(() => {
    const canvas = canvasRef.current!
    let dispose: (() => void) | null = null
    try {
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 0.95

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50)
      camera.position.set(0, 0, 4.35)

      const pmrem = new THREE.PMREMGenerator(renderer)
      const envTex = pmrem.fromScene(new RoomEnvironment(), 0.06).texture
      scene.environment = envTex

      const loader = new THREE.TextureLoader()
      const load = (url: string) => {
        const t = loader.load(url)
        t.anisotropy = renderer.capabilities.getMaxAnisotropy()
        return t
      }
      const flatMap = load(art.flat)
      flatMap.colorSpace = THREE.SRGBColorSpace
      const normalMap = load(art.normal)
      const gradientMap = mode === 'toon' ? makeGradientMap() : null

      const backGeo = makeFaceGeometry(art.shape)
      const frontGeo = makeFaceGeometry(art.shape)
      const edgeGeo = makeEdgeGeometry(art.shape)

      const backMat =
        mode === 'pbr'
          ? new THREE.MeshStandardMaterial({
              map: flatMap,
              normalMap,
              normalScale: new THREE.Vector2(1.6, 1.6),
              metalness: 0.82,
              roughness: 0.52,
              envMapIntensity: 0.5,
            })
          : new THREE.MeshToonMaterial({
              map: flatMap,
              normalMap,
              normalScale: new THREE.Vector2(1.5, 1.5),
              gradientMap: gradientMap!,
            })
      const edgeColor = 0x5a4a30
      const edgeMat =
        mode === 'pbr'
          ? new THREE.MeshStandardMaterial({ color: edgeColor, metalness: 0.9, roughness: 0.42, envMapIntensity: 0.5 })
          : new THREE.MeshToonMaterial({ color: edgeColor, gradientMap: gradientMap! })
      const frontColor = 0x6b5a3e
      const frontMat =
        mode === 'pbr'
          ? new THREE.MeshStandardMaterial({ color: frontColor, metalness: 0.72, roughness: 0.5, envMapIntensity: 0.28 })
          : new THREE.MeshToonMaterial({ color: frontColor, gradientMap: gradientMap! })

      const back = new THREE.Mesh(backGeo, backMat)
      const edge = new THREE.Mesh(edgeGeo, edgeMat)
      edge.rotation.x = Math.PI / 2
      const front = new THREE.Mesh(frontGeo, frontMat)
      front.rotation.y = Math.PI
      front.position.z = 0.071

      const mirror = new THREE.Group()
      mirror.add(back, edge, front)
      scene.add(mirror)

      const key = new THREE.DirectionalLight(0xffe6c4, mode === 'pbr' ? 1.15 : 1.5)
      key.position.set(-2, 2.4, 2.6)
      scene.add(key)
      const fill = new THREE.DirectionalLight(0x9fb4c8, mode === 'pbr' ? 0.22 : 0.5)
      fill.position.set(2.4, -1.2, 1.6)
      scene.add(fill)

      const state = {
        tiltX: 0,
        tiltY: 0,
        pointerX: 0,
        pointerY: 0,
      }
      const onPointer = (e: PointerEvent) => {
        state.pointerX = (e.clientX / window.innerWidth) * 2 - 1
        state.pointerY = (e.clientY / window.innerHeight) * 2 - 1
      }
      const onClick = () => {
        if (controlled) return
        anim.current = { from: target.current, to: target.current === 0 ? Math.PI : 0, t0: performance.now() }
        target.current = anim.current.to
      }
      window.addEventListener('pointermove', onPointer)
      if (!controlled) canvas.addEventListener('click', onClick)

      const resize = () => {
        const w = canvas.clientWidth
        const h = canvas.clientHeight
        renderer.setSize(w, h, false)
        camera.aspect = w / h
        camera.updateProjectionMatrix()
      }
      resize()
      window.addEventListener('resize', resize)

      let raf = 0
      const tick = () => {
        // 翻面：固定时长 ease-out cubic，与帧率无关
        const p = Math.min(1, (performance.now() - anim.current.t0) / 650)
        const eased = 1 - (1 - p) ** 3
        const flip = anim.current.from + (anim.current.to - anim.current.from) * eased
        state.tiltX += (state.pointerY * -0.16 - state.tiltX) * 0.06
        state.tiltY += (state.pointerX * 0.2 - state.tiltY) * 0.06
        mirror.rotation.y = flip + state.tiltY
        mirror.rotation.x = state.tiltX
        key.position.x = -2 + state.pointerX * 1.6
        key.position.y = 2.4 - state.pointerY * 1.2
        renderer.render(scene, camera)
        raf = requestAnimationFrame(tick)
      }
      tick()

      dispose = () => {
        cancelAnimationFrame(raf)
        window.removeEventListener('pointermove', onPointer)
        window.removeEventListener('resize', resize)
        if (!controlled) canvas.removeEventListener('click', onClick)
        pmrem.dispose()
        flatMap.dispose()
        normalMap.dispose()
        gradientMap?.dispose()
        backGeo.dispose()
        frontGeo.dispose()
        edgeGeo.dispose()
        backMat.dispose()
        edgeMat.dispose()
        frontMat.dispose()
        envTex.dispose()
        renderer.dispose()
      }
    } catch (e) {
      console.error('Mirror3D 初始化失败:', e)
    }

    return () => dispose?.()
  }, [art, mode, controlled])

  return <canvas ref={canvasRef} className={className} />
}
