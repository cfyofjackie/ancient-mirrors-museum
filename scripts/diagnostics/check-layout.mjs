import fs from 'node:fs/promises'

const label = process.argv[2] || 'mobile-layout'
const dir = new URL('./results/', import.meta.url)
const files = (await fs.readdir(dir)).filter(name => name.startsWith(`layout-${label}-`) && name.endsWith('.json')).sort()
if (!files.length) throw new Error(`No layout capture for ${label}`)
const file = files.at(-1)
const result = JSON.parse(await fs.readFile(new URL(file, dir), 'utf8'))
console.log(JSON.stringify({ file, userAgent: result.userAgent, phase: result.phase, viewport: result.viewport, visualViewport: result.visualViewport, supports: result.supports, ...result.summary,
  nodes: result.nodes.filter(n => ['.app', '.page', '.mirror-stage', '.app-footer', '.mirror-desc'].includes(n.selector)).map(n => ({ selector: n.selector, height: n.rect.height, top: n.rect.top, bottom: n.rect.bottom, flex: n.style.flex, transform: n.style.transform, fontSize: n.style['font-size'] })),
}, null, 2))
process.exitCode = result.summary.verdict === 'PASS' ? 0 : 1
