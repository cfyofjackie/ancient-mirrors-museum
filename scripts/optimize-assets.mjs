/**
 * 美术素材优化管线（PROGRESS.md 8.1/8.2：原始大图 → 产物 webp）
 *
 * 用法：npm run assets:optimize [-- --mask-r 0.435 | --no-mask]
 *
 * - assets-src/mirrors/<id>/{front,back}.{png,jpg,webp}
 *     → 缩放至 1200×1200（contain 透明填充）→ 默认按圆形蒙版抠成透明底
 *       （半径 = mask-r × 边长，默认 0.435 即镜体占 87%）→ webp q85
 *     → assets/mirrors/<id>/{front,back}.webp
 * - assets-src/backgrounds/*.{png,jpg,webp} → 1080×2340 cover → webp q80
 *     → assets/backgrounds/<名>.webp
 *
 * 原图越大越好，不用管压缩；产物超预算（镜面 300KB / 背景 250KB）时脚本会告警。
 */
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC = path.join(ROOT, 'assets-src')
const OUT = path.join(ROOT, 'assets')

// ---- 简易参数 ----
const args = process.argv.slice(2)
const getArg = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 && args[i + 1] ? Number(args[i + 1]) : fallback
}
const MASK_R = getArg('mask-r', 0.435) // 圆形蒙版半径 / 画布边长
const NO_MASK = args.includes('--no-mask')
const MIRROR_SIZE = getArg('mirror-size', 1200)
const MIRROR_Q = getArg('mirror-q', 85)
const BG_W = getArg('bg-w', 1080)
const BG_H = getArg('bg-h', 2340)
const BG_Q = getArg('bg-q', 80)

const EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp']
const MIRROR_BUDGET = 300 * 1024
const BG_BUDGET = 250 * 1024

const fmt = (bytes) => `${(bytes / 1024).toFixed(0)}KB`

async function findFile(dir, base) {
  for (const ext of EXTENSIONS) {
    try {
      const f = path.join(dir, base + ext)
      await readFile(f)
      return f
    } catch {
      /* try next */
    }
  }
  return null
}

async function optimizeMirrors() {
  const srcDir = path.join(SRC, 'mirrors')
  let ids
  try {
    ids = await readdir(srcDir)
  } catch {
    console.log(`提示：${srcDir} 不存在，跳过镜面处理（目录结构见文件头注释）`)
    return 0
  }
  const circleMask = Buffer.from(
    `<svg width="${MIRROR_SIZE}" height="${MIRROR_SIZE}"><circle cx="${MIRROR_SIZE / 2}" cy="${MIRROR_SIZE / 2}" r="${MIRROR_SIZE * MASK_R}" fill="#fff"/></svg>`,
  )
  let count = 0
  for (const id of ids) {
    const dynastyDir = path.join(srcDir, id)
    for (const face of ['front', 'back']) {
      const input = await findFile(dynastyDir, face)
      if (!input) continue
      let pipeline = sharp(input)
        .resize(MIRROR_SIZE, MIRROR_SIZE, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      if (!NO_MASK) pipeline = pipeline.composite([{ input: circleMask, blend: 'dest-in' }])
      const output = await pipeline.webp({ quality: MIRROR_Q, alphaQuality: 90 }).toBuffer()
      const outDir = path.join(OUT, 'mirrors', id)
      await mkdir(outDir, { recursive: true })
      const outPath = path.join(outDir, `${face}.webp`)
      await writeFile(outPath, output)
      const warn = output.length > MIRROR_BUDGET ? ' ⚠ 超出 300KB 预算，建议降 --mirror-q' : ''
      console.log(`mirrors/${id}/${face}.webp: ${fmt(output.length)}${warn}`)
      count++
    }
  }
  return count
}

async function optimizeBackgrounds() {
  const srcDir = path.join(SRC, 'backgrounds')
  let count = 0
  let ids
  try {
    ids = await readdir(srcDir)
  } catch {
    return 0
  }
  await mkdir(path.join(OUT, 'backgrounds'), { recursive: true })
  for (const name of ids) {
    const ext = path.extname(name).toLowerCase()
    if (!EXTENSIONS.includes(ext)) continue
    const base = path.basename(name, ext)
    const output = await sharp(path.join(srcDir, name))
      .resize(BG_W, BG_H, { fit: 'cover', position: 'attention' })
      .webp({ quality: BG_Q })
      .toBuffer()
    await writeFile(path.join(OUT, 'backgrounds', `${base}.webp`), output)
    const warn = output.length > BG_BUDGET ? ' ⚠ 超出 250KB 预算，建议降 --bg-q' : ''
    console.log(`backgrounds/${base}.webp: ${fmt(output.length)}${warn}`)
    count++
  }
  return count
}

const m = await optimizeMirrors()
const b = await optimizeBackgrounds()
console.log(`\ndone: ${m} mirror(s), ${b} background(s)`)
