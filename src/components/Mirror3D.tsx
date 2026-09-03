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
const MIRROR_Y = 0
const FLIP_MS = 650
/** 换展两段式动画：旧镜降下（更快、加速）→ 换素材 → 新镜升起（较慢、减速） */
const LOWER_MS = 170
const RAISE_MS = 450
const DROP_HIDDEN = -4.6
const EDGE_COLOR = 0x5a4a30
const FRONT_COLOR = 0x6b5a3e

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
  /** 受控翻面：主页面由手势层驱动；不传则点击自翻（POC 用） */
  flipped?: boolean
  mode?: 'pbr' | 'toon'
  className?: string
}

/**
 * 3D 铜镜（决策 D9）：渲染器与场景常驻，切换朝代走「换展」两段式动画——
 * 旧镜降下离场 → 热替换纹理/几何 → 新镜升起；渲染器零重建。
 */
export default function Mirror3D({ art, flipped, mode = 'pbr', className }: Mirror3DProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const api = useRef<{
    applyArt: (a: Art3D) => void
    applyMode: (m: 'pbr' | 'toon') => void
    setFlipped: (f: boolean) => void
  }>()
  const controlled = flipped !== undefined

  useEffect(() => {
    if (controlled) api.current?.setFlipped(!!flipped)
  }, [flipped, controlled])

  useEffect(() => {
    api.current?.applyArt(art)
  }, [art])

  useEffect(() => {
    api.current?.applyMode(mode)
  }, [mode])

  useEffect(() => {
    const canvas = canvasRef.current!
    let dispose: (() => void) | null = null
    try {
      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })
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
      const setTexParams = (t: THREE.Texture, srgb: boolean) => {
        t.anisotropy = renderer.capabilities.getMaxAnisotropy()
        if (srgb) t.colorSpace = THREE.SRGBColorSpace
        return t
      }

      let backGeo = makeFaceGeometry(art.shape)
      let frontGeo = makeFaceGeometry(art.shape)
      let edgeGeo = makeEdgeGeometry(art.shape)
      const tex: { flat: THREE.Texture | null; normal: THREE.Texture | null } = { flat: null, normal: null }
      let gradientMap: THREE.DataTexture | null = null

      const buildMaterials = (m: 'pbr' | 'toon') => {
        if (m === 'toon' && !gradientMap) gradientMap = makeGradientMap()
        const gradient = m === 'toon' ? gradientMap! : undefined
        const common = { normalMap: tex.normal, normalScale: new THREE.Vector2(1.55, 1.55) }
        return {
          back:
            m === 'pbr'
              ? new THREE.MeshStandardMaterial({
                  map: tex.flat,
                  metalness: 0.82,
                  roughness: 0.52,
                  envMapIntensity: 0.5,
                  ...common,
                })
              : new THREE.MeshToonMaterial({ map: tex.flat, gradientMap: gradient, ...common }),
          edge:
            m === 'pbr'
              ? new THREE.MeshStandardMaterial({ color: EDGE_COLOR, metalness: 0.9, roughness: 0.42, envMapIntensity: 0.5 })
              : new THREE.MeshToonMaterial({ color: EDGE_COLOR, gradientMap: gradient }),
          front:
            m === 'pbr'
              ? new THREE.MeshStandardMaterial({ color: FRONT_COLOR, metalness: 0.72, roughness: 0.5, envMapIntensity: 0.28 })
              : new THREE.MeshToonMaterial({ color: FRONT_COLOR, gradientMap: gradient }),
        }
      }

      let mats = buildMaterials(mode)
      const back = new THREE.Mesh(backGeo, mats.back)
      const edge = new THREE.Mesh(edgeGeo, mats.edge)
      edge.rotation.x = Math.PI / 2
      const front = new THREE.Mesh(frontGeo, mats.front)
      front.rotation.y = Math.PI
      front.position.z = 0.071

      const disc = new THREE.Group()
      disc.add(back, edge, front)
      disc.position.y = MIRROR_Y
      scene.add(disc)

      // 素材替换（在镜体降下后调用）
      const swapTo = (a: Art3D) => {
        const bg = makeFaceGeometry(a.shape)
        const fg = makeFaceGeometry(a.shape)
        const eg = makeEdgeGeometry(a.shape)
        back.geometry = bg
        front.geometry = fg
        edge.geometry = eg
        backGeo.dispose()
        frontGeo.dispose()
        edgeGeo.dispose()
        backGeo = bg
        frontGeo = fg
        edgeGeo = eg

        loader.load(a.flat, (t) => {
          setTexParams(t, true)
          tex.flat?.dispose()
          tex.flat = t
          mats.back.map = t
          mats.back.needsUpdate = true
        })
        loader.load(a.normal, (t) => {
          setTexParams(t, false)
          tex.normal?.dispose()
          tex.normal = t
        })
      }

      // ---- 换展两段式：降下 → （回调里换素材）→ 升起；翻转同机制 ----
      const flip = { value: 0, from: 0, to: 0, t0: -1 }
      const drop = {
        value: MIRROR_Y + DROP_HIDDEN,
        from: MIRROR_Y + DROP_HIDDEN,
        to: MIRROR_Y,
        t0: performance.now(),
        dur: RAISE_MS,
        onDone: null as null | (() => void),
      }
      const animateDrop = (to: number, dur: number, onDone?: () => void) => {
        drop.from = disc.position.y
        drop.to = to
        drop.dur = dur
        drop.t0 = performance.now()
        drop.onDone = onDone ?? null
      }
      const setFlipped = (f: boolean) => {
        flip.from = flip.to
        flip.to = f ? Math.PI : 0
        flip.t0 = performance.now()
      }
      const applyArt = (a: Art3D) => {
        if (drop.onDone) {
          // 换展流程进行中：只覆盖最终换入的素材
          drop.onDone = () => {
            swapTo(a)
            animateDrop(MIRROR_Y, RAISE_MS)
          }
          return
        }
        animateDrop(MIRROR_Y + DROP_HIDDEN, LOWER_MS, () => {
          swapTo(a)
          animateDrop(MIRROR_Y, RAISE_MS)
        })
      }

      const applyMode = (m: 'pbr' | 'toon') => {
        const old = [mats.back, mats.edge, mats.front]
        mats = buildMaterials(m)
        back.material = mats.back
        edge.material = mats.edge
        front.material = mats.front
        old.forEach((mm) => mm.dispose())
      }
      api.current = { applyArt, applyMode, setFlipped }
      applyArt(art)

      const tilt = { x: 0, y: 0, px: 0, py: 0 }
      const onPointer = (e: PointerEvent) => {
        tilt.px = (e.clientX / window.innerWidth) * 2 - 1
        tilt.py = (e.clientY / window.innerHeight) * 2 - 1
      }
      const onClick = () => {
        if (controlled) return
        setFlipped(flip.to === 0)
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
        const now = performance.now()
        if (flip.t0 >= 0) {
          const fp = Math.min(1, (now - flip.t0) / FLIP_MS)
          flip.value = flip.from + (flip.to - flip.from) * (1 - (1 - fp) ** 3)
        }
        const dp = Math.min(1, (now - drop.t0) / drop.dur)
        drop.value = drop.from + (drop.to - drop.from) * (dp >= 1 ? 1 : 1 - (1 - dp) ** 3)
        disc.position.y = drop.value
        if (dp >= 1 && drop.onDone) {
          const cb = drop.onDone
          drop.onDone = null
          cb()
        }
        tilt.x += (tilt.py * -0.12 - tilt.x) * 0.06
        tilt.y += (tilt.px * 0.16 - tilt.y) * 0.06
        disc.rotation.y = flip.value + tilt.y
        disc.rotation.x = tilt.x
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
        tex.flat?.dispose()
        tex.normal?.dispose()
        gradientMap?.dispose()
        backGeo.dispose()
        frontGeo.dispose()
        edgeGeo.dispose()
        mats.back.dispose()
        mats.edge.dispose()
        mats.front.dispose()
        envTex.dispose()
        renderer.dispose()
      }
    } catch (e) {
      console.error('Mirror3D 初始化失败:', e)
    }

    return () => dispose?.()
  }, [controlled])

  return <canvas ref={canvasRef} className={className} />
}
