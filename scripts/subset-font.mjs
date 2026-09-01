/**
 * 霞鹜文楷子集化脚本（决策 D5，PROGRESS.md 4.4）
 *
 * 扫描 src/ 与 index.html 中实际用到的全部字符（另含 ASCII 与常用中文标点兜底），
 * 用 subset-font（harfbuzz）从完整 TTF 生成子集 woff2，输出到 src/fonts/。
 *
 * 新增文案后重跑 `npm run font:subset` 即可，无需人工挑字。
 * 前置：lxgw-regular.ttf / lxgw-medium.ttf（v1.522）放在项目根目录。
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { glob } from 'node:fs/promises' // Node 22+; 若不可用则回退 readdir 手写遍历
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import subsetFont from 'subset-font'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_DIR = path.join(ROOT, 'src', 'fonts')

// 兜底字符集：ASCII 可打印 + 常用中英标点（文案之外的界面符号、未来小改不立即缺字）
const FALLBACK_CHARS =
  Array.from({ length: 0x7e - 0x20 + 1 }, (_, i) => String.fromCharCode(0x20 + i)).join('') +
  '，。！？：；、「」『』·—…（）《》〈〉“”‘’～％℃①②③④⑤⑥⑦⑧⑨⑩'

async function collectSourceText() {
  let text = ''
  for await (const entry of glob('src/**/*.{ts,tsx}', { cwd: ROOT })) {
    text += await readFile(path.join(ROOT, entry), 'utf8')
  }
  text += await readFile(path.join(ROOT, 'index.html'), 'utf8')
  return text
}

async function subset(weight) {
  const input = path.join(ROOT, weight === 'regular' ? 'lxgw-regular.ttf' : 'lxgw-medium.ttf')
  const chars = [...new Set(FALLBACK_CHARS + (await collectSourceText()))].join('')
  const inputBuffer = await readFile(input)
  const output = await subsetFont(inputBuffer, chars, { targetFormat: 'woff2' })
  const outPath = path.join(OUT_DIR, `lxgw-wenkai-${weight}.woff2`)
  await writeFile(outPath, output)
  console.log(
    `${weight}: ${chars.length} chars, ${(inputBuffer.length / 1048576).toFixed(1)}MB -> ` +
      `${(output.length / 1024).toFixed(0)}KB (src/fonts/lxgw-wenkai-${weight}.woff2)`,
  )
}

await mkdir(OUT_DIR, { recursive: true })
await subset('regular')
await subset('medium')
