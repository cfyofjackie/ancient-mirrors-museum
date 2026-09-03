import fs from 'node:fs/promises'
const variant = process.argv[2] || 'baseline'
const directory = new URL('./results/', import.meta.url)
const files = (await fs.readdir(directory)).filter(f=>f.startsWith(`${variant}-`) && f.endsWith('.json')).sort((a,b)=>Number(a.match(/-(\d+)\.json$/)[1])-Number(b.match(/-(\d+)\.json$/)[1]))
if (!files.length) throw new Error(`Run http://127.0.0.1:6180/?perf=${variant} first`)
const file = files.at(-1)
const result = JSON.parse(await fs.readFile(new URL(file, directory), 'utf8'))
if (!variant.startsWith('interactions') && (result.visibility !== 'visible' || result.summary.changes.length < 8)) throw new Error('Inconclusive: a visible, complete eight-switch run is required')
console.log(`${file}: ${result.summary.verdict}`)
if (result.summary.switchFrames) console.log(`Switch frame intervals: ${JSON.stringify(result.summary.switchFrames)}`)
else console.log(JSON.stringify(result.summary.results))
process.exitCode = result.summary.verdict.startsWith('PASS') ? 0 : 1
