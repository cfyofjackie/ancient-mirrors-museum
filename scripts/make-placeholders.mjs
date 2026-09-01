/**
 * 占位图生成脚本（决策 D4，PROGRESS.md 4.3）
 *
 * 为 4 个朝代 × 正反面生成统一规格的 webp 占位图：
 * - 1024×1024 正方形画布、透明背景、镜体居中
 * - 每朝代不同的暗色色调，便于开发时肉眼区分
 * - 背面（back）：镜钮 + 纹样环带；正面（front）：素面 + 高光
 *
 * 正式素材到位后直接覆盖同名文件（assets/mirrors/<朝代>/front|back.webp），不改任何代码。
 * 用法：npm run placeholders
 */
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = path.join(ROOT, 'assets', 'mirrors')
const SIZE = 1024
const CX = SIZE / 2
const CY = SIZE / 2
const R = 440 // 镜体外半径

// 每朝代一个差异化的暗色调（占位用途，不代表正式美术方向）
const DYNASTIES = [
  { id: 'han', char: '汉', tint: '#8a6a4f' },
  { id: 'tang', char: '唐', tint: '#a8823f' },
  { id: 'song', char: '宋', tint: '#6f7a72' },
  { id: 'ming', char: '明', tint: '#7d5450' },
]

function mirrorBack({ char, tint }) {
  // 背面：外缘 → 纹样环带（放射短线 + 同心圆）→ 中央镜钮
  const ticks = []
  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * Math.PI * 2
    const r1 = 300
    const r2 = i % 3 === 0 ? 360 : 340
    ticks.push(
      `<line x1="${CX + r1 * Math.cos(a)}" y1="${CY + r1 * Math.sin(a)}" ` +
        `x2="${CX + r2 * Math.cos(a)}" y2="${CY + r2 * Math.sin(a)}" />`,
    )
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}">
  <defs>
    <radialGradient id="bronze" cx="42%" cy="38%" r="75%">
      <stop offset="0%" stop-color="#4a3d30" />
      <stop offset="70%" stop-color="#33291f" />
      <stop offset="100%" stop-color="#241c15" />
    </radialGradient>
  </defs>
  <circle cx="${CX}" cy="${CY}" r="${R}" fill="url(#bronze)" />
  <circle cx="${CX}" cy="${CY}" r="${R - 14}" fill="none" stroke="${tint}" stroke-width="10" opacity="0.75" />
  <circle cx="${CX}" cy="${CY}" r="290" fill="none" stroke="${tint}" stroke-width="4" opacity="0.45" />
  <circle cx="${CX}" cy="${CY}" r="210" fill="none" stroke="${tint}" stroke-width="3" opacity="0.35" stroke-dasharray="14 22" />
  <g stroke="${tint}" stroke-width="5" opacity="0.5">${ticks.join('')}</g>
  <circle cx="${CX}" cy="${CY}" r="86" fill="${tint}" opacity="0.28" />
  <circle cx="${CX}" cy="${CY}" r="70" fill="#241c15" stroke="${tint}" stroke-width="6" opacity="0.9" />
  <text x="${CX}" y="${CY + 8}" text-anchor="middle" dominant-baseline="middle"
        font-family="'Microsoft YaHei', sans-serif" font-size="64" fill="${tint}" opacity="0.55">${char}</text>
</svg>`
}

function mirrorFront({ char }) {
  // 正面：素面镜心 + 弧形高光，仅留极淡的朝代字样供开发辨识
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}">
  <defs>
    <radialGradient id="face" cx="40%" cy="36%" r="80%">
      <stop offset="0%" stop-color="#6d6357" />
      <stop offset="55%" stop-color="#4c443b" />
      <stop offset="100%" stop-color="#2b251e" />
    </radialGradient>
    <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.16" />
      <stop offset="45%" stop-color="#ffffff" stop-opacity="0.02" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
    </linearGradient>
  </defs>
  <circle cx="${CX}" cy="${CY}" r="${R}" fill="url(#face)" />
  <circle cx="${CX}" cy="${CY}" r="${R - 14}" fill="none" stroke="#c9bfa8" stroke-width="6" opacity="0.35" />
  <circle cx="${CX}" cy="${CY}" r="${R}" fill="url(#sheen)" />
  <text x="${CX}" y="${CY + 8}" text-anchor="middle" dominant-baseline="middle"
        font-family="'Microsoft YaHei', sans-serif" font-size="72" fill="#c9bfa8" opacity="0.22">${char}</text>
</svg>`
}

async function main() {
  for (const d of DYNASTIES) {
    const dir = path.join(OUT_DIR, d.id)
    await mkdir(dir, { recursive: true })
    await sharp(Buffer.from(mirrorBack(d)))
      .webp({ quality: 82 })
      .toFile(path.join(dir, 'back.webp'))
    await sharp(Buffer.from(mirrorFront(d)))
      .webp({ quality: 82 })
      .toFile(path.join(dir, 'front.webp'))
    console.log(`generated: assets/mirrors/${d.id}/{front,back}.webp`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
