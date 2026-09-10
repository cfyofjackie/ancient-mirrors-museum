import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import mirrors from '../data/mirrors'
import type { Art3D, Shape3D } from '../data/mirrors'
import type { ReflectionProfile } from '../data/reflections'
import { perf } from '../perf' // 临时诊断（与 src/probe.ts 配套）

const R = 1.22
const MIRROR_Y = 0
const FLIP_MS = 650

const EDGE_COLOR = 0x5a4a30

type FrontSurfaceTextures = {
  color: THREE.CanvasTexture
  roughness: THREE.DataTexture
}

/**
 * 全馆共用一套小型静态镜面纹理：暖铜底色、打磨环纹、细划痕和边缘氧化。
 * 不为九面镜分别下载素材，也不引入逐帧程序纹理；纹理只在场景创建时生成、上传一次。
 */
function makeFrontSurfaceTextures(): FrontSurfaceTextures {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const context = canvas.getContext('2d')!
  const image = context.createImageData(size, size)

  const smoothstep = (from: number, to: number, value: number) => {
    const t = Math.max(0, Math.min(1, (value - from) / (to - from)))
    return t * t * (3 - 2 * t)
  }
  const noise = (x: number, y: number) => {
    const value = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453
    return value - Math.floor(value)
  }
  const mix = (a: number, b: number, amount: number) => a + (b - a) * amount

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = (x + 0.5) / size - 0.5
      const ny = (y + 0.5) / size - 0.5
      const radius = Math.hypot(nx, ny) * 2
      const angle = Math.atan2(ny, nx)
      const vignette = smoothstep(0.08, 1, radius)
      const edge = smoothstep(0.72, 1, radius + Math.sin(angle * 7 + radius * 13) * 0.018)
      const grain = (noise(x, y) - 0.5) * 7
      const polish = Math.sin(radius * 118 + Math.sin(angle * 5) * 0.9) * (1.5 + vignette)

      let red = mix(128, 82, vignette) + grain + polish
      let green = mix(112, 76, vignette) + grain * 0.8 + polish * 0.75
      let blue = mix(82, 55, vignette) + grain * 0.45 + polish * 0.45
      // 边缘只留轻微青褐氧化，不把镜面做成夸张的绿色锈斑。
      red = mix(red, 55, edge * 0.46)
      green = mix(green, 65, edge * 0.46)
      blue = mix(blue, 51, edge * 0.46)

      const index = (y * size + x) * 4
      image.data[index] = red
      image.data[index + 1] = green
      image.data[index + 2] = blue
      image.data[index + 3] = 255
    }
  }
  context.putImageData(image, 0, 0)

  // 同心打磨痕与短划痕直接烘进色彩图，静止时也能读出表面年代感。
  context.save()
  context.translate(size / 2, size / 2)
  for (let radius = 28; radius < 124; radius += 7.5) {
    context.beginPath()
    context.arc(0, 0, radius, 0, Math.PI * 2)
    context.strokeStyle = radius % 15 < 2 ? 'rgba(229, 214, 175, 0.045)' : 'rgba(38, 34, 26, 0.045)'
    context.lineWidth = 0.65
    context.stroke()
  }
  let seed = 0x5f3759df
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
    return seed / 0x100000000
  }
  for (let i = 0; i < 46; i++) {
    const angle = random() * Math.PI * 2
    const radius = Math.sqrt(random()) * 103
    const length = 5 + random() * 22
    const tangent = angle + Math.PI / 2 + (random() - 0.5) * 0.42
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    context.beginPath()
    context.moveTo(x - Math.cos(tangent) * length / 2, y - Math.sin(tangent) * length / 2)
    context.lineTo(x + Math.cos(tangent) * length / 2, y + Math.sin(tangent) * length / 2)
    context.strokeStyle = random() > 0.45 ? 'rgba(228, 211, 172, 0.075)' : 'rgba(34, 31, 25, 0.10)'
    context.lineWidth = 0.35 + random() * 0.55
    context.stroke()
  }
  context.restore()

  const color = new THREE.CanvasTexture(canvas)
  color.colorSpace = THREE.SRGBColorSpace
  color.minFilter = THREE.LinearMipmapLinearFilter
  color.magFilter = THREE.LinearFilter

  // roughnessMap 使用绿色通道；128px 已足够承载细微变化，显存约 64KB。
  const roughSize = 128
  const roughPixels = new Uint8Array(roughSize * roughSize * 4)
  for (let y = 0; y < roughSize; y++) {
    for (let x = 0; x < roughSize; x++) {
      const nx = (x + 0.5) / roughSize - 0.5
      const ny = (y + 0.5) / roughSize - 0.5
      const radius = Math.hypot(nx, ny) * 2
      const edge = smoothstep(0.7, 1, radius)
      const grain = (noise(x + 317, y + 911) - 0.5) * 17
      const rings = Math.sin(radius * 92) * 5
      const value = Math.max(170, Math.min(245, 211 + edge * 22 + grain + rings))
      const index = (y * roughSize + x) * 4
      roughPixels[index] = roughPixels[index + 1] = roughPixels[index + 2] = value
      roughPixels[index + 3] = 255
    }
  }
  const roughness = new THREE.DataTexture(roughPixels, roughSize, roughSize, THREE.RGBAFormat)
  roughness.minFilter = THREE.LinearMipmapLinearFilter
  roughness.magFilter = THREE.LinearFilter
  roughness.generateMipmaps = true
  roughness.needsUpdate = true
  return { color, roughness }
}

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
type TexturePriority = 0 | 1 | 2 // 当前镜 / 下一镜 / 其余空闲预热
const cancelled = () => new DOMException('Mirror scene disposed or superseded', 'AbortError')

/** 缓存和 GPU 资源归场景所有；切换只替换已准备好的资源。 */
export function createMirrorScene(canvas: HTMLCanvasElement, onError: () => void) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
  let disposed = false
  let raf = 0
  let warmTimer = 0
  let warmIdle = 0
  let uploadTimer = 0
  let uploadIdle = 0
  let artGeneration = 0
  let interactionActive = false
  let hasArt = false
  let mode: Mode = 'pbr'
  let desiredFlip = false
  let lastTime = performance.now()
  const textures = new Set<THREE.Texture>()
  const textureCache = new Map<string, Promise<THREE.Texture>>()
  const texturePriority = new Map<string, TexturePriority>()
  const geometries = new Map<string, { face: THREE.BufferGeometry; edge: THREE.BufferGeometry }>()
  type UploadTask = {
    url: string
    texture: THREE.Texture
    resolve: (texture: THREE.Texture) => void
    reject: (reason?: unknown) => void
  }
  const uploadTasks = new Map<string, UploadTask>()
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50)
  camera.position.set(0, 0, 4.35)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
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

  const frontSurface = makeFrontSurfaceTextures()
  const surfaceAnisotropy = Math.min(2, renderer.capabilities.getMaxAnisotropy())
  frontSurface.color.anisotropy = surfaceAnisotropy
  frontSurface.roughness.anisotropy = surfaceAnisotropy

  const loader = new THREE.TextureLoader()
  const assertAlive = () => { if (disposed) throw cancelled() }
  const idleWindow = window as typeof window & {
    requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number
    cancelIdleCallback?: (handle: number) => void
  }
  const cancelUploadSchedule = () => {
    window.clearTimeout(uploadTimer)
    uploadTimer = 0
    if (uploadIdle) idleWindow.cancelIdleCallback?.(uploadIdle)
    uploadIdle = 0
  }
  const runUpload = () => {
    uploadTimer = 0
    uploadIdle = 0
    if (disposed || document.hidden || !uploadTasks.size) return
    const ordered = [...uploadTasks.values()].sort((a, b) =>
      (texturePriority.get(a.url) ?? 2) - (texturePriority.get(b.url) ?? 2))
    const task = ordered.find(candidate =>
      (texturePriority.get(candidate.url) ?? 2) === 0 || !interactionActive)
    if (!task) return
    uploadTasks.delete(task.url)
    try {
      assertAlive()
      const t0 = performance.now()
      renderer.initTexture(task.texture)
      perf.upload(performance.now() - t0) // 临时诊断：记录 GPU 上传耗时
      task.resolve(task.texture)
    } catch (error) {
      textures.delete(task.texture)
      task.texture.dispose()
      task.reject(error)
    }
    scheduleUpload()
  }
  function scheduleUpload() {
    if (disposed || document.hidden || uploadTimer || uploadIdle || !uploadTasks.size) return
    const hasCurrent = [...uploadTasks.keys()].some(url => (texturePriority.get(url) ?? 2) === 0)
    if (hasCurrent) {
      // 当前镜在 waiting 阶段也必须完成；每张上传之间仍让出一次事件循环。
      uploadTimer = window.setTimeout(runUpload, 0)
      return
    }
    if (interactionActive) return
    // 下一镜和其余镜只占用浏览器空闲片段；不支持 idle callback 时退化为短延时。
    if (idleWindow.requestIdleCallback) uploadIdle = idleWindow.requestIdleCallback(runUpload, { timeout: 800 })
    else uploadTimer = window.setTimeout(runUpload, 120)
  }
  const getTexture = (url: string, srgb: boolean, priority: TexturePriority): Promise<THREE.Texture> => {
    const hit = textureCache.get(url)
    if (hit) {
      const previous = texturePriority.get(url) ?? 2
      if (priority < previous) {
        texturePriority.set(url, priority)
        cancelUploadSchedule()
        scheduleUpload()
      }
      return hit
    }
    texturePriority.set(url, priority)
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
        uploadTasks.set(url, { url, texture: t, resolve, reject })
        scheduleUpload()
      }, undefined, error => { window.clearTimeout(timeout); reject(error) })
    })
    textureCache.set(url, pending)
    pending.catch(() => {
      if (textureCache.get(url) === pending) textureCache.delete(url)
      texturePriority.delete(url)
      uploadTasks.delete(url)
    })
    return pending
  }
  const prepare = async (art: Art3D, priority: TexturePriority = 0) => {
    assertAlive()
    const [flat, normal] = await Promise.all([
      getTexture(art.flat, true, priority),
      getTexture(art.normal, false, priority),
    ])
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
        ? new THREE.MeshStandardMaterial({
            map: frontSurface.color,
            roughnessMap: frontSurface.roughness,
            metalness: 0.46,
            roughness: 0.86,
            envMapIntensity: 0.13,
          })
        : new THREE.MeshToonMaterial({ map: frontSurface.color, gradientMap: gradientMap! }),
      edge: next === 'pbr'
        ? new THREE.MeshStandardMaterial({ color: EDGE_COLOR, metalness: 0.9, roughness: 0.42, envMapIntensity: 0.5 })
        : new THREE.MeshToonMaterial({ color: EDGE_COLOR, gradientMap: gradientMap! }),
    }
  }
  let mats = buildMaterials(mode)
  const empty = new THREE.BufferGeometry()
  const back = new THREE.Mesh(empty, mats.back)
  const front = new THREE.Mesh(empty, mats.front)
  const reflectionMaterial = new THREE.MeshStandardMaterial({
    transparent: true,
    opacity: 0,
    metalness: 0.18,
    roughness: 0.92,
    envMapIntensity: 0.08,
    depthWrite: false,
    blending: THREE.MultiplyBlending,
    premultipliedAlpha: true,
  })
  const reflection = new THREE.Mesh(empty, reflectionMaterial)
  const edge = new THREE.Mesh(empty, mats.edge)
  front.rotation.y = Math.PI
  front.position.z = 0.071
  reflection.rotation.y = Math.PI
  // 镜面翻到朝向观众时，局部 +z 会随父组旋到远侧，因此数值需略小于 front，
  // 才能让人物层位于铜面之前而不被深度缓冲遮住。
  reflection.position.z = 0.069
  reflection.renderOrder = 2
  reflection.visible = false
  edge.rotation.x = Math.PI / 2
  const disc = new THREE.Group()
  disc.add(back, edge, front, reflection)
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
    const dt = Math.min(64, now - lastTime)
    lastTime = now
    sampleFlip(now)
    const ease = 1 - Math.exp(-dt / 90)
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

  type WarmItem = { art: Art3D; priority: TexturePriority }
  let warmQueue: WarmItem[] = []
  let warming = false
  const cancelWarmSchedule = () => {
    window.clearTimeout(warmTimer)
    warmTimer = 0
    if (warmIdle) idleWindow.cancelIdleCallback?.(warmIdle)
    warmIdle = 0
  }
  const runWarmup = () => {
    warmTimer = 0
    warmIdle = 0
    if (disposed || interactionActive || document.hidden || warming || !warmQueue.length) return
    const item = warmQueue.shift()!
    warming = true
    prepare(item.art, item.priority).catch(() => {}).finally(() => {
      warming = false
      if (!disposed) scheduleWarmup(400)
    })
  }
  function scheduleWarmup(delay = 180) {
    cancelWarmSchedule()
    if (disposed || interactionActive || document.hidden || warming || !warmQueue.length) return
    warmTimer = window.setTimeout(() => {
      warmTimer = 0
      if (disposed || interactionActive || document.hidden) return
      if (idleWindow.requestIdleCallback) warmIdle = idleWindow.requestIdleCallback(runWarmup, { timeout: 1200 })
      else warmTimer = window.setTimeout(runWarmup, 120)
    }, delay)
  }
  const warmupAround = (focused: Art3D) => {
    const available = mirrors.flatMap(m => m.art3d ? [m.art3d] : [])
    const current = available.findIndex(art => art.flat === focused.flat)
    const nextIndex = current >= 0 && current + 1 < available.length ? current + 1 : 0
    const next = available[nextIndex]
    warmQueue = [
      ...(next && next.flat !== focused.flat ? [{ art: next, priority: 1 as const }] : []),
      ...available
        .filter(art => art.flat !== focused.flat && art.flat !== next?.flat)
        .map(art => ({ art, priority: 2 as const })),
    ]
    scheduleWarmup()
  }
  const applyArt = async (art: Art3D) => {
    const gen = ++artGeneration
    perf.mark('artStart')
    // 用户正在等待的镜永远提升为最高优先级，即使它已经由后台预热开始加载。
    const resource = await prepare(art, 0)
    perf.mark('artPrep')
    if (disposed || gen !== artGeneration) return false
    const firstMaps = !mats.back.map || !mats.back.normalMap
    tex.flat = resource.flat
    tex.normal = resource.normal
    mats.back.map = resource.flat
    mats.back.normalMap = resource.normal
    if (firstMaps) mats.back.needsUpdate = true
    back.geometry = front.geometry = reflection.geometry = resource.geometry.face
    edge.geometry = resource.geometry.edge
    flip.value = flip.from = flip.to = desiredFlip ? Math.PI : 0
    flip.start = -1
    // 首次带贴图的 shader 在显现前准备；此后形状/贴图热替换复用程序。
    if (firstMaps) await renderer.compileAsync(scene, camera)
    if (disposed || gen !== artGeneration) return false
    hasArt = true
    if (raf) cancelAnimationFrame(raf)
    tick()
    warmupAround(art)
    perf.mark('artApplied')
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
  let reflectionGeneration = 0
  const setReflection = async (profile?: ReflectionProfile, visible = false) => {
    const gen = ++reflectionGeneration
    if (!profile || !visible) {
      reflection.visible = false
      reflectionMaterial.opacity = 0
      invalidate()
      return
    }
    try {
      const map = await getTexture(profile.imageUrl, true, 0)
      if (disposed || gen !== reflectionGeneration) return
      // 倒影沿镜面左右翻转；贴图本身保留透明边缘，与铜色底材自然叠合。
      map.wrapS = THREE.RepeatWrapping
      map.repeat.x = -1
      map.offset.x = 1
      map.needsUpdate = true
      reflectionMaterial.map = map
      reflectionMaterial.opacity = profile.opacity
      reflectionMaterial.needsUpdate = true
      reflection.scale.set(profile.scale ?? 1, profile.scale ?? 1, 1)
      reflection.position.y = ((profile.offsetY ?? 0) / 100) * -2.44
      reflection.visible = true
      invalidate()
    } catch (error) {
      if (gen === reflectionGeneration) console.warn('人物倒影贴图加载失败:', error)
    }
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
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(width, height, false)
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    invalidate()
  }
  const visibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(raf)
      raf = 0
      cancelUploadSchedule()
      cancelWarmSchedule()
    } else {
      lastTime = performance.now()
      invalidate()
      scheduleUpload()
      scheduleWarmup()
    }
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

  // —— 临时诊断探针：暴露 renderer 的显存/绘制统计供 HUD 读取（诊断完成后连同 src/probe.ts 一起删除）——
  ;(window as unknown as { __mirrorSceneInfo?: () => Record<string, unknown> }).__mirrorSceneInfo = () => ({
    textures: renderer.info.memory.textures,
    geometries: renderer.info.memory.geometries,
    programs: renderer.info.programs?.length ?? 0,
    calls: renderer.info.render.calls,
    triangles: renderer.info.render.triangles,
    dpr: renderer.getPixelRatio(),
    canvasW: canvas.width,
    canvasH: canvas.height,
  })

  return {
    applyArt, setFlipped, setMode, setReflection,
    setInteractionActive(active: boolean) {
      if (interactionActive === active) return
      interactionActive = active
      if (active) {
        // 一次已经开始的同步上传无法中断；调度器保证之后不会再开始后台上传。
        cancelUploadSchedule()
        cancelWarmSchedule()
        scheduleUpload() // 若 waiting 正在等当前镜，仍允许最高优先级上传。
      } else {
        scheduleUpload()
        scheduleWarmup()
      }
    },
    toggle: () => setFlipped(!desiredFlip),
    dispose() {
      disposed = true
      artGeneration++
      cancelAnimationFrame(raf)
      cancelUploadSchedule()
      cancelWarmSchedule()
      uploadTasks.forEach(task => task.reject(cancelled()))
      uploadTasks.clear()
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
      reflectionMaterial.dispose()
      frontSurface.color.dispose()
      frontSurface.roughness.dispose()
      gradientMap?.dispose()
      environment.dispose()
      pmrem.dispose()
      renderer.dispose()
      // 临时诊断探针：卸载时清掉全局钩子
      ;(window as unknown as { __mirrorSceneInfo?: unknown }).__mirrorSceneInfo = undefined
      // StrictMode 会在同一个仍连接的 canvas 上执行一次清理再挂载。
      // 此时不能主动丢失上下文，否则第二次挂载会收到延迟的 contextlost。
      if (!canvas.isConnected) renderer.forceContextLoss()
    },
  }
}
