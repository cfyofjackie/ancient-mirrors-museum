// Local-only performance harness; it does not change the shipped application.
import { createServer } from 'vite'
import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const resultDir = path.join(root, 'scripts/diagnostics/results')
// 默认仍为 6180；被常驻 dev server 占用时可用 DIAG_PORT 换端口运行诊断
const port = Number(process.env.DIAG_PORT) || 6180
const server = await createServer({
  root,
  server: { host: '127.0.0.1', port, strictPort: true },
  plugins: [{
    name: 'local-performance-probe',
    enforce: 'pre',
    transformIndexHtml() {
      return [{ tag: 'script', attrs: { src: '/__perf.js' }, injectTo: 'head-prepend' }]
    },
    transform(code, id) {
      if (!id.endsWith('/src/components/Mirror3D.tsx') && !id.endsWith('/src/rendering/mirrorScene.ts')) return
      code = code.replace('renderer.initTexture(t)', 'window.__mirrorProbe.measure("initTexture", () => renderer.initTexture(t))')
      code = code.replace('const resource = await prepare(art)', 'if (new URLSearchParams(location.search).has("slow-art") && art.flat.includes("tang")) await new Promise(resolve => setTimeout(resolve, 800)); if (new URLSearchParams(location.search).has("fail-art") && art.flat.includes("tang")) throw new Error("Injected texture failure"); const resource = await prepare(art)')
      code = code.replaceAll('renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))', "renderer.setPixelRatio(new URLSearchParams(location.search).has('dpr2') ? 2 : Math.min(window.devicePixelRatio, 2))")
      code = code.replace('renderer.render(scene, camera)', 'window.__mirrorProbe.measure("render", () => renderer.render(scene, camera)); window.__mirrorProbe.rendererInfo = { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, textures: renderer.info.memory.textures, programs: renderer.info.programs?.length, normalMap: !!mats.back.normalMap, discY: disc.position.y, flip: flip.value, spin: spin.value, flat: mats.back.map?.image?.src, canvas: [canvas.width, canvas.height] }')
      return code
    },
    configureServer(vite) {
      vite.middlewares.use(async (req, res, next) => {
        if (req.url === '/__interactions.js') {
          res.setHeader('Content-Type', 'application/javascript')
          res.end(await fs.readFile(path.join(root, 'scripts/diagnostics/interactions.js'), 'utf8'))
        } else if (req.url === '/__perf.js') {
          res.setHeader('Content-Type', 'application/javascript')
          res.end(await fs.readFile(path.join(root, 'scripts/diagnostics/probe.js'), 'utf8'))
        } else if (req.url.startsWith('/__production/')) {
          const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname)
          const relative = pathname.slice('/__production/'.length) || 'index.html'
          const distRoot = path.join(root, 'dist')
          const file = path.resolve(distRoot, relative)
          if (!file.startsWith(distRoot + path.sep)) { res.statusCode = 403; res.end(); return }
          try {
            let data = await fs.readFile(file)
            const ext = path.extname(file)
            res.setHeader('Content-Type', ({'.html':'text/html; charset=utf-8','.js':'application/javascript','.css':'text/css','.woff2':'font/woff2','.webp':'image/webp','.svg':'image/svg+xml'})[ext] || 'application/octet-stream')
            if (ext === '.html') data = data.toString().replace('<head>', '<head><script src="/__perf.js"></script>')
            res.end(data)
          } catch { res.statusCode = 404; res.end('Not found') }
        } else if (req.url === '/__perf-results' && req.method === 'POST') {
          let body = ''
          for await (const chunk of req) body += chunk
          const result = JSON.parse(body)
          await fs.mkdir(resultDir, { recursive: true })
          const name = `${result.variant}-${result.viewport.join('x')}-${Date.now()}.json`
          await fs.writeFile(path.join(resultDir, name), JSON.stringify(result, null, 2))
          console.log(JSON.stringify({ file: name, ...result.summary }))
          res.end('saved')
        } else next()
      })
    },
  }],
})
await server.listen()
server.printUrls()
