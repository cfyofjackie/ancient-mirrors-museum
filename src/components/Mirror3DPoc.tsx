import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

/**
 * 立体化 POC（决策 D9）：four mirrors × 两种渲染模式（写实 PBR / 风格化卡通）。
 * 访问 ?poc3d 进入。验证「平涂图 + 代码光照」的立体感与风格方向。
 */

type ShapeSpec =
  | { type: 'circle' }
  | { type: 'polygon'; sides: number }
  | { type: 'lobed'; lobes: number; depth: number }

interface MirrorDef {
  id: string
  label: string
  base: string
  shape: ShapeSpec
}

const MIRRORS: MirrorDef[] = [
  { id: 'han', label: '汉', base: 'poc3d/han/sishou', shape: { type: 'circle' } },
  { id: 'tang', label: '唐', base: 'poc3d/tang/octagon', shape: { type: 'polygon', sides: 8 } },
  { id: 'song', label: '宋', base: 'poc3d/song/kuihua', shape: { type: 'lobed', lobes: 8, depth: 0.11 } },
  { id: 'ming', label: '明', base: 'poc3d/ming/wuzidengke', shape: { type: 'circle' } },
]

const R = 1.22

/** 镜背轮廓几何：圆 / 正多边形 / 葵口（极坐标波浪），UV 统一映射到 [0,1]² */
function makeFaceGeometry(shape: ShapeSpec): THREE.BufferGeometry {
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

/** 镜缘圆筒半径略小于轮廓，藏住接缝 */
function makeEdgeGeometry(shape: ShapeSpec): THREE.CylinderGeometry {
  if (shape.type === 'polygon') return new THREE.CylinderGeometry(R * 0.965, R * 0.965, 0.14, shape.sides, 1, true)
  if (shape.type === 'lobed') return new THREE.CylinderGeometry(R * 0.885, R * 0.885, 0.14, 96, 1, true)
  return new THREE.CylinderGeometry(R * 0.99, R * 0.99, 0.14, 128, 1, true)
}

/** 三档色阶贴图：卡通分档光照用 */
function makeGradientMap(): THREE.DataTexture {
  const steps = new Uint8Array([90, 160, 235])
  const t = new THREE.DataTexture(steps, steps.length, 1, THREE.RedFormat)
  t.minFilter = THREE.NearestFilter
  t.magFilter = THREE.NearestFilter
  t.generateMipmaps = false
  t.needsUpdate = true
  return t
}

export default function Mirror3DPoc() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [index, setIndex] = useState(0)
  const [mode, setMode] = useState<'pbr' | 'toon'>('pbr')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const def = MIRRORS[index]
    let dispose: (() => void) | null = null
    try {
      const probe = document.createElement('canvas')
      const gl = probe.getContext('webgl2') ?? probe.getContext('webgl')
      if (!gl) {
        setError('当前环境 WebGL 不可用，无法渲染 3D（正式版将回退为平面方案）')
        return
      }

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
      const flatMap = load(`${def.base}.flat.webp`)
      flatMap.colorSpace = THREE.SRGBColorSpace
      const normalMap = load(`${def.base}.normal.webp`)
      const gradientMap = makeGradientMap()

      const backGeo = makeFaceGeometry(def.shape)
      const frontGeo = makeFaceGeometry(def.shape)
      const edgeGeo = makeEdgeGeometry(def.shape)

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
              gradientMap,
            })
      const edgeColor = 0x5a4a30
      const edgeMat =
        mode === 'pbr'
          ? new THREE.MeshStandardMaterial({ color: edgeColor, metalness: 0.9, roughness: 0.42, envMapIntensity: 0.5 })
          : new THREE.MeshToonMaterial({ color: edgeColor, gradientMap })
      const frontColor = 0x9a8258
      const frontMat =
        mode === 'pbr'
          ? new THREE.MeshStandardMaterial({ color: frontColor, metalness: 0.7, roughness: 0.42, envMapIntensity: 0.4 })
          : new THREE.MeshToonMaterial({ color: frontColor, gradientMap })

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

      const FLIP_MS = 650
      const state = {
        flip: 0,
        flipFrom: 0,
        flipTo: 0,
        flipT0: 0,
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
        state.flipFrom = state.flip
        state.flipTo = state.flipTo === 0 ? Math.PI : 0
        state.flipT0 = performance.now()
      }
      window.addEventListener('pointermove', onPointer)
      canvas.addEventListener('click', onClick)

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
        const p = Math.min(1, (performance.now() - state.flipT0) / FLIP_MS)
        const eased = 1 - (1 - p) ** 3
        state.flip = state.flipFrom + (state.flipTo - state.flipFrom) * eased
        state.tiltX += (state.pointerY * -0.16 - state.tiltX) * 0.06
        state.tiltY += (state.pointerX * 0.2 - state.tiltY) * 0.06
        mirror.rotation.y = state.flip + state.tiltY
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
        canvas.removeEventListener('click', onClick)
        pmrem.dispose()
        flatMap.dispose()
        normalMap.dispose()
        gradientMap.dispose()
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
      setError(e instanceof Error ? e.message : String(e))
    }

    return () => dispose?.()
  }, [index, mode])

  return (
    <div className="poc3d-root">
      <h1 className="poc3d-title">立体化 POC · 四朝铜镜</h1>
      <div className="poc3d-controls">
        <div className="poc3d-tabs">
          {MIRRORS.map((m, i) => (
            <button key={m.id} type="button" className={i === index ? 'active' : undefined} onClick={() => setIndex(i)}>
              {m.label}
            </button>
          ))}
        </div>
        <div className="poc3d-tabs">
          <button type="button" className={mode === 'pbr' ? 'active' : undefined} onClick={() => setMode('pbr')}>
            写实 PBR
          </button>
          <button type="button" className={mode === 'toon' ? 'active' : undefined} onClick={() => setMode('toon')}>
            风格化
          </button>
        </div>
      </div>
      {error ? <p className="poc3d-error">{error}</p> : <canvas ref={canvasRef} className="poc3d-canvas" />}
      <p className="poc3d-hint">{MIRRORS[index].label} · 点击铜镜翻面 · 移动指针让光线流动</p>
    </div>
  )
}
