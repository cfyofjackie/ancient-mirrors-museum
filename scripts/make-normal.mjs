/**
 * 平涂纹样图 → 高度图 + 法线贴图（决策 D9 管线第一步）
 *
 * 用法：npm run normal -- <输入图> [--out <目录>] [--strength 1.6] [--size 1024] [--invert]
 *
 * 步骤：自动裁出镜体（亮度阈值找包围盒）→ 缩放到 size² → 灰度=高度（亮=凸）
 *   → Sobel 梯度 → 法线编码 RGB → 输出 flat.webp（彩色裁切）/ normal.webp（法线，无损）/ height.webp（高度预览）
 *
 * 亮暗与凹凸相反时（暗纹为凸）加 --invert。
 */
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const args = process.argv.slice(2)
const input = args.find((a) => !a.startsWith('--'))
const getArg = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 && args[i + 1] !== undefined ? Number(args[i + 1]) : fallback
}
const has = (name) => args.includes(`--${name}`)

const OUT_DIR = path.resolve(ROOT, has('out') ? args[args.indexOf('--out') + 1] : path.dirname(input))
const SIZE = getArg('size', 1024)
const STRENGTH = getArg('strength', 1.6)
const INVERT = has('invert')

if (!input) {
  console.error('用法: node scripts/make-normal.mjs <输入图> [--out <目录>] [--strength 1.6] [--size 1024] [--invert]')
  process.exit(1)
}

// 1) 亮度阈值找镜体包围盒（背景暗、镜体亮；噪声抖动用低分辨率统计抵抗）
async function findMirrorBox(img) {
  const W = 256
  const { data } = await img.clone().resize(W, W, { fit: 'inside' }).grayscale().raw().toBuffer({ resolveWithObject: true })
  const h = data.length / W
  let sum = 0
  for (let i = 0; i < data.length; i++) sum += data[i]
  const threshold = sum / data.length + 18
  let minX = W, minY = h, maxX = 0, maxY = 0
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < W; x++) {
      if (data[y * W + x] > threshold) {
        if (x < minX) minX = x
        if (x > maxX) maxX = x
        if (y < minY) minY = y
        if (y > maxY) maxY = y
      }
    }
  }
  if (maxX <= minX || maxY <= minY) return null
  // 映射回原尺寸，外扩 1.5% 防裁边
  const meta = await img.metadata()
  const pad = 0.015
  const left = Math.max(0, Math.floor((minX / W) * meta.width * (1 - pad)))
  const top = Math.max(0, Math.floor((minY / h) * meta.height * (1 - pad)))
  const right = Math.min(meta.width, Math.ceil(((maxX + 1) / W) * meta.width * (1 + pad)))
  const bottom = Math.min(meta.height, Math.ceil(((maxY + 1) / h) * meta.height * (1 + pad)))
  return { left, top, width: right - left, height: bottom - top }
}

const source = sharp(input)
const box = await findMirrorBox(source)
console.log('镜体包围盒:', box ? JSON.stringify(box) : '未检出，用全图')

// 2) 裁切 + 缩放 + 灰度高度
let cropped = box ? source.extract(box) : source
const flat = await cropped.clone().resize(SIZE, SIZE, { fit: 'cover' }).webp({ quality: 88 }).toBuffer()
const { data: gray, info } = await cropped
  .clone()
  .resize(SIZE, SIZE, { fit: 'cover' })
  .grayscale()
  .blur(0.8)
  .raw()
  .toBuffer({ resolveWithObject: true })
const W = info.width
const H = info.height

// 3) Sobel → 法线
const strength = STRENGTH * 4
const normal = Buffer.alloc(W * H * 3)
const at = (x, y) => gray[Math.min(H - 1, Math.max(0, y)) * W + Math.min(W - 1, Math.max(0, x))]
for (let y = 0; y < H; y++) {
  for (let x = 0; x < W; x++) {
    const dx = (at(x + 1, y) - at(x - 1, y)) * (INVERT ? -1 : 1)
    const dy = (at(x, y + 1) - at(x, y - 1)) * (INVERT ? -1 : 1)
    const len = Math.hypot(dx * strength, dy * strength, 255)
    normal[(y * W + x) * 3] = Math.round(((-dx * strength) / len) * 127 + 128)
    normal[(y * W + x) * 3 + 1] = Math.round(((-dy * strength) / len) * 127 + 128)
    normal[(y * W + x) * 3 + 2] = Math.round((255 / len) * 127 + 128)
  }
}

// 4) 输出
await mkdir(OUT_DIR, { recursive: true })
const base = path.basename(input, path.extname(input))
const flatPath = path.join(OUT_DIR, `${base}.flat.webp`)
const normalPath = path.join(OUT_DIR, `${base}.normal.webp`)
const heightPath = path.join(OUT_DIR, `${base}.height.webp`)
await writeFile(flatPath, flat)
const NQ = getArg('normal-q', 95)
await writeFile(
  normalPath,
  await sharp(normal, { raw: { width: W, height: H, channels: 3 } }).webp({ quality: NQ }).toBuffer(),
)
await writeFile(heightPath, await sharp(gray, { raw: { width: W, height: H, channels: 1 } }).webp({ quality: 80 }).toBuffer())
console.log(`flat  -> ${flatPath}`)
console.log(`normal-> ${normalPath} (lossless)`)
console.log(`height-> ${heightPath}`)
