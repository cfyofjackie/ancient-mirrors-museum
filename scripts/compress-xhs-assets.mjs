/**
 * 小红书小工具产地压缩（在 dist-xhs 上运行，压缩 webp 图片质量以让 zip < 10MiB）。
 *
 *   node scripts/compress-xhs-assets.mjs <源=dist-xhs> --out <目标=dist-xhs-pkg>
 *
 * 源目录的 webp 按用途质量重新压缩后写入「全新的输出目录」（非 webp 原样拷贝）；
 * 输出目录每次清空重建，避免覆盖已存在构建产物时被文件系统拒绝。
 */
import { cp, mkdir, readdir, rm, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const args = process.argv.slice(2)

const argVal = (name, fallback) => {
  const i = args.indexOf(`--${name}`)
  return i >= 0 && args[i + 1] !== undefined ? args[i + 1] : fallback
}
const DIR = path.resolve(ROOT, argVal('in', args.find((a) => !a.startsWith('--')) || 'dist-xhs'))
const OUT = path.resolve(ROOT, argVal('out', 'dist-xhs-pkg'))
const getQ = (name, fallback) => {
  const i = args.indexOf(`--q-${name}`)
  return i >= 0 ? Number(args[i + 1]) : fallback
}

const QUALITY = {
  normal: getQ('normal', 74),
  flat: getQ('flat', 78),
  back: getQ('back', 76),
  front: getQ('front', 82),
  page: getQ('page', 72),
  ref: getQ('ref', 78),
}

const rating = (rel) => {
  if (/^poc3d\/.*\.normal\.webp$/.test(rel)) return 'normal'
  if (/^poc3d\/.*\.flat\.webp$/.test(rel)) return 'flat'
  if (/^mirrors\/.*\/back\.webp$/.test(rel)) return 'back'
  if (/^mirrors\/.*\/front\.webp$/.test(rel)) return 'front'
  if (/^references\/.*\.webp$/.test(rel)) return 'ref'
  if (/^assets\/.*\.webp$/.test(rel)) return 'page'
  return null
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(p)
    else yield p
  }
}

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })

let before = 0
let after = 0
let compressed = 0
for await (const abs of walk(DIR)) {
  const rel = abs.replace(`${DIR}${path.sep}`, '').replace(/\\/g, '/')
  const dest = path.join(OUT, rel)
  const cat = rating(rel)
  if (!cat) {
    await cp(abs, dest) // 非目标 webp / 非图资源：原样拷贝（JS/CSS/字体/HTML 等）
    continue
  }
  const inSz = (await stat(abs)).size
  before += inSz
  await mkdir(path.dirname(dest), { recursive: true })
  await sharp(abs).webp({ quality: QUALITY[cat], effort: 5 }).toFile(dest)
  const outSz = (await stat(dest)).size
  after += outSz
  compressed++
  console.log(`${cat.padEnd(6)} ${(QUALITY[cat] + '').padStart(2)} ${(inSz / 1024).toFixed(0).padStart(5)}KB -> ${(outSz / 1024).toFixed(0).padStart(5)}KB  ${rel}`)
}
console.log(`\ncompressed ${compressed} webp: image bytes ${(before / 1048576).toFixed(2)}MiB -> ${(after / 1048576).toFixed(2)}MiB`)
