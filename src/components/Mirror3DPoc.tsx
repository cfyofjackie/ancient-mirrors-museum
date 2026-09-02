import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

/**
 * 立体化 POC（决策 D9）：three.js 圆盘 + 平涂图 + 法线贴图 + 实时光照。
 * 访问 ?poc3d 进入。验证「平涂图在实时光下能否立起来」，不走正常页面。
 */
export default function Mirror3DPoc() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 0.95

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50)
    camera.position.set(0, 0, 4.1)

    // 影棚环境光（three 内置，零外部资源）
    const pmrem = new THREE.PMREMGenerator(renderer)
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.06).texture

    const load = (url: string) => {
      const t = new THREE.TextureLoader().load(url)
      t.anisotropy = renderer.capabilities.getMaxAnisotropy()
      return t
    }
    const flatMap = load('poc3d/han/sishou.flat.webp')
    flatMap.colorSpace = THREE.SRGBColorSpace
    const normalMap = load('poc3d/han/sishou.normal.webp')

    // 镜背：纹样 + 法线起伏；镜缘：铜边圆筒；镜面：抛光素面（正面图未出，先纯材质）
    const R = 1.22
    const backMat = new THREE.MeshStandardMaterial({
      map: flatMap,
      normalMap,
      normalScale: new THREE.Vector2(1.6, 1.6),
      metalness: 0.82,
      roughness: 0.52,
      envMapIntensity: 0.5,
    })
    const back = new THREE.Mesh(new THREE.CircleGeometry(R, 128), backMat)

    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0x5a4a30,
      metalness: 0.9,
      roughness: 0.42,
      envMapIntensity: 0.5,
    })
    const edge = new THREE.Mesh(new THREE.CylinderGeometry(R, R, 0.14, 128, 1, true), edgeMat)
    edge.rotation.x = Math.PI / 2

    const frontMat = new THREE.MeshStandardMaterial({
      color: 0x9a8258,
      metalness: 0.7,
      roughness: 0.42,
      envMapIntensity: 0.4,
    })
    const front = new THREE.Mesh(new THREE.CircleGeometry(R, 128), frontMat)
    front.rotation.y = Math.PI
    front.position.z = 0.071

    const mirror = new THREE.Group()
    mirror.add(back, edge, front)
    scene.add(mirror)

    // 主光（左上）+ 弱补光；环境贴图负责整体反射
    const key = new THREE.DirectionalLight(0xffe6c4, 1.15)
    key.position.set(-2, 2.4, 2.6)
    scene.add(key)
    const fill = new THREE.DirectionalLight(0x9fb4c8, 0.22)
    fill.position.set(2.4, -1.2, 1.6)
    scene.add(fill)

    // 交互状态：点击翻面（按时间参数化，与帧率解耦）；指针位置 → 轻微倾斜 + 主光游移
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
      // 翻面：固定时长 ease-out cubic，与帧率无关
      const p = Math.min(1, (performance.now() - state.flipT0) / FLIP_MS)
      const eased = 1 - (1 - p) ** 3
      state.flip = state.flipFrom + (state.flipTo - state.flipFrom) * eased
      ;(window as unknown as Record<string, number>).__flip = state.flip
      // 倾斜：阻尼趋近指针位置
      state.tiltX += (state.pointerY * -0.16 - state.tiltX) * 0.06
      state.tiltY += (state.pointerX * 0.2 - state.tiltY) * 0.06
      mirror.rotation.y = state.flip + state.tiltY
      mirror.rotation.x = state.tiltX
      // 主光随指针缓移：光线在铜面上流动
      key.position.x = -2 + state.pointerX * 1.6
      key.position.y = 2.4 - state.pointerY * 1.2
      renderer.render(scene, camera)
      raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onPointer)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('click', onClick)
      pmrem.dispose()
      flatMap.dispose()
      normalMap.dispose()
      backMat.dispose()
      edgeMat.dispose()
      frontMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div className="poc3d-root">
      <h1 className="poc3d-title">立体化 POC · 汉 · 四神博局纹镜</h1>
      <canvas ref={canvasRef} className="poc3d-canvas" />
      <p className="poc3d-hint">点击铜镜翻面 · 移动指针让光线流动 · 上下拖出倾斜角</p>
    </div>
  )
}
