import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import mirrors from '../data/mirrors'
import type { Art3D, Shape3D } from '../data/mirrors'

const R = 1.22
const MIRROR_Y = 0
const FLIP_MS = 650

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

type Mode = 'pbr' | 'toon'
const cancelled = () => new DOMException('Mirror scene disposed or superseded', 'AbortError')

/** 缓存和 GPU 资源归场景所有；切换只替换已准备好的资源。 */
export function createMirrorScene(canvas: HTMLCanvasElement, onError: () => void) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
  let disposed = false
  let raf = 0
  let warmTimer = 0
  let artGeneration = 0
  let displayedGeneration = 0
  let hasArt = false
  let mode: Mode = 'pbr'
  let desiredFlip = false
  let lastTime = performance.now()
  const textures = new Set<THREE.Texture>()
  const textureCache = new Map<string, Promise<THREE.Texture>>()
  const geometries = new Map<string, { face: THREE.BufferGeometry; edge: THREE.BufferGeometry }>()
  let uploadQueue: Promise<unknown> = Promise.resolve()
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50)
  camera.position.set(0, 0, 4.35)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 0.95
  const pmrem = new THREE.PMREMGenerator(renderer)
  const room = new RoomEnvironment()
  let environment: THREE.WebGLRenderTarget
  try {
    environment = pmrem.fromScene(room, 0.04)
  } catch (error) {
    pmrem.dispose()
    renderer.dispose()
    renderer.forceContextLoss()
    throw error
  } finally { room.dispose() }
  scene.environment = environment.texture

  const loader = new THREE.TextureLoader()
  const assertAlive = () => { if (disposed) throw cancelled() }
  const getTexture = (url: string, srgb: boolean): Promise<THREE.Texture> => {
    const hit = textureCache.get(url)
    if (hit) return hit
    // 立即缓存 Promise，预热与当前镜可共享正在进行的加载和上传。
    const pending = new Promise<THREE.Texture>((resolve, reject) => {
      let expired = false
      const timeout = window.setTimeout(() => { expired = true; reject(new Error(`Texture timed out: ${url}`)) }, 12000)
      loader.load(url, t => {
        window.clearTimeout(timeout)
        if (disposed || expired) { t.dispose(); reject(cancelled()); return }
        textures.add(t)
        t.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy())
        if (srgb) t.colorSpace = THREE.SRGBColorSpace
        // 一次只上传一张，并在上传间让出主线程，避免八张同时堵住输入。
        const upload = uploadQueue.then(() => new Promise<void>(resume => window.setTimeout(resume, 0))).then(() => {
          assertAlive()
          renderer.initTexture(t)
          return t
        })
        uploadQueue = upload.catch(() => {})
        upload.then(resolve, reject)
      }, undefined, error => { window.clearTimeout(timeout); reject(error) })
    })
    textureCache.set(url, pending)
    pending.catch(() => { if (textureCache.get(url) === pending) textureCache.delete(url) })
    return pending
  }
  const prepare = async (art: Art3D) => {
    assertAlive()
    const [flat, normal] = await Promise.all([getTexture(art.flat, true), getTexture(art.normal, false)])
    assertAlive()
    const key = JSON.stringify(art.shape)
    let geometry = geometries.get(key)
    if (!geometry) {
      geometry = { face: makeFaceGeometry(art.shape), edge: makeEdgeGeometry(art.shape) }
      geometries.set(key, geometry)
    }
    return { flat, normal, geometry }
  }

  let gradientMap: THREE.DataTexture | null = null
  const tex: { flat: THREE.Texture | null; normal: THREE.Texture | null } = { flat: null, normal: null }
  const buildMaterials = (next: Mode) => {
    if (next === 'toon' && !gradientMap) gradientMap = makeGradientMap()
    const common = { normalMap: tex.normal, normalScale: new THREE.Vector2(1.55, 1.55) }
    return {
      back: next === 'pbr'
        ? new THREE.MeshStandardMaterial({ map: tex.flat, metalness: 0.82, roughness: 0.52, envMapIntensity: 0.5, ...common })
        : new THREE.MeshToonMaterial({ map: tex.flat, gradientMap: gradientMap!, ...common }),
      front: next === 'pbr'
        ? new THREE.MeshStandardMaterial({ color: FRONT_COLOR, metalness: 0.72, roughness: 0.5, envMapIntensity: 0.28 })
        : new THREE.MeshToonMaterial({ color: FRONT_COLOR, gradientMap: gradientMap! }),
      edge: next === 'pbr'
        ? new THREE.MeshStandardMaterial({ color: EDGE_COLOR, metalness: 0.9, roughness: 0.42, envMapIntensity: 0.5 })
        : new THREE.MeshToonMaterial({ color: EDGE_COLOR, gradientMap: gradientMap! }),
    }
  }
  let mats = buildMaterials(mode)
  const empty = new THREE.BufferGeometry()
  const back = new THREE.Mesh(empty, mats.back)
  const front = new THREE.Mesh(empty, mats.front)
  const edge = new THREE.Mesh(empty, mats.edge)
  front.rotation.y = Math.PI
  front.position.z = 0.071
  edge.rotation.x = Math.PI / 2
  const disc = new THREE.Group()
  disc.add(back, edge, front)
  disc.position.y = MIRROR_Y
  scene.add(disc)

  const flip = { value: 0, from: 0, to: 0, start: -1 }
  const tilt = { x: 0, y: 0, px: 0, py: 0 }
  const sampleFlip = (now: number) => {
    if (flip.start < 0) return
    const progress = Math.min(1, (now - flip.start) / FLIP_MS)
    flip.value = flip.from + (flip.to - flip.from) * (1 - (1 - progress) ** 3)
    if (progress >= 1) flip.start = -1
  }
  const invalidate = () => {
    if (!raf && !disposed && hasArt && !document.hidden) raf = requestAnimationFrame(tick)
  }
  const tick = () => {
    raf = 0
    if (disposed || !hasArt || document.hidden) return
    const now = performance.now()
    sampleFlip(now)
    const ease = 1 - Math.exp(-Math.min(64, now - lastTime) / 90)
    lastTime = now
    tilt.x += (tilt.py - tilt.x) * ease
    tilt.y += (tilt.px - tilt.y) * ease
    const tilting = Math.abs(tilt.py - tilt.x) + Math.abs(tilt.px - tilt.y) > 0.0005
    if (!tilting) { tilt.x = tilt.py; tilt.y = tilt.px }
    disc.rotation.y = flip.value + tilt.y
    disc.rotation.x = tilt.x
    renderer.render(scene, camera)
    if (flip.start >= 0 || tilting) invalidate()
  }
  const setFlipped = (value: boolean) => {
    desiredFlip = value
    const to = value ? Math.PI : 0
    if (to === flip.to) return
    sampleFlip(performance.now())
    flip.from = flip.value
    flip.to = to
    flip.start = performance.now()
    invalidate()
  }

  let warmStarted = false
  const warmup = (first: Art3D) => {
    if (warmStarted) return
    warmStarted = true
    const remaining = mirrors.flatMap(m => m.art3d && m.art3d.flat !== first.flat ? [m.art3d] : [])
    const next = () => {
      if (disposed || !remaining.length) return
      if (document.hidden || displayedGeneration !== artGeneration) { warmTimer = window.setTimeout(next, 500); return }
      const art = remaining.shift()!
      prepare(art).catch(() => {}).finally(() => { if (!disposed) warmTimer = window.setTimeout(next, 400) })
    }
    warmTimer = window.setTimeout(next, 700)
  }
  const applyArt = async (art: Art3D) => {
    const gen = ++artGeneration
    const resource = await prepare(art)
    if (disposed || gen !== artGeneration) return false
    const firstMaps = !mats.back.map || !mats.back.normalMap
    tex.flat = resource.flat
    tex.normal = resource.normal
    mats.back.map = resource.flat
    mats.back.normalMap = resource.normal
    if (firstMaps) mats.back.needsUpdate = true
    back.geometry = front.geometry = resource.geometry.face
    edge.geometry = resource.geometry.edge
    flip.value = flip.from = flip.to = desiredFlip ? Math.PI : 0
    flip.start = -1
    // 首次带贴图的 shader 在显现前准备；此后形状/贴图热替换复用程序。
    if (firstMaps) await renderer.compileAsync(scene, camera)
    if (disposed || gen !== artGeneration) return false
    hasArt = true
    displayedGeneration = gen
    if (raf) cancelAnimationFrame(raf)
    tick()
    warmup(art)
    return true
  }
  const setMode = (next: Mode) => {
    if (mode === next) return
    mode = next
    const old = mats
    mats = buildMaterials(mode)
    back.material = mats.back
    front.material = mats.front
    edge.material = mats.edge
    Object.values(old).forEach(material => material.dispose())
    invalidate()
  }
  const onPointer = (event: PointerEvent) => {
    // 手指/按住拖拽仅移动页面，不再让 3D 倾斜与翻页争用每帧预算。
    if (event.pointerType === 'touch' || event.buttons) return
    tilt.px = ((event.clientX / window.innerWidth) * 2 - 1) * 0.16
    tilt.py = ((event.clientY / window.innerHeight) * 2 - 1) * -0.12
    invalidate()
  }
  const onLeave = () => { tilt.px = tilt.py = 0; invalidate() }
  const resize = () => {
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    if (!width || !height) return
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    invalidate()
  }
  const visibility = () => {
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0 }
    else { lastTime = performance.now(); invalidate() }
  }
  const contextLost = (event: Event) => { event.preventDefault(); onError() }
  const observer = new ResizeObserver(resize)
  observer.observe(canvas)
  resize()
  window.addEventListener('resize', resize)
  window.addEventListener('pointermove', onPointer)
  document.addEventListener('pointerleave', onLeave)
  document.addEventListener('visibilitychange', visibility)
  canvas.addEventListener('webglcontextlost', contextLost)

  return {
    applyArt, setFlipped, setMode,
    toggle: () => setFlipped(!desiredFlip),
    dispose() {
      disposed = true
      artGeneration++
      cancelAnimationFrame(raf)
      window.clearTimeout(warmTimer)
      observer.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('pointerleave', onLeave)
      document.removeEventListener('visibilitychange', visibility)
      canvas.removeEventListener('webglcontextlost', contextLost)
      textures.forEach(texture => texture.dispose())
      geometries.forEach(geometry => { geometry.face.dispose(); geometry.edge.dispose() })
      empty.dispose()
      Object.values(mats).forEach(material => material.dispose())
      gradientMap?.dispose()
      environment.dispose()
      pmrem.dispose()
      renderer.dispose()
      // StrictMode 会在同一个仍连接的 canvas 上执行一次清理再挂载。
      // 此时不能主动丢失上下文，否则第二次挂载会收到延迟的 contextlost。
      if (!canvas.isConnected) renderer.forceContextLoss()
    },
  }
}
