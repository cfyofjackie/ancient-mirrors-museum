// Serves the production build. Only ?layout-check opts in to local measurements.
import { preview } from 'vite'
import fs from 'node:fs/promises'
import path from 'node:path'

const root = process.cwd()
const server = await preview({
  plugins: [{
    name: 'local-layout-check',
    configurePreviewServer(vite) {
      vite.middlewares.use(async (req, res, next) => {
        const url = new URL(req.url, 'http://localhost')
        if (url.pathname === '/' && url.searchParams.has('layout-check')) {
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          res.setHeader('Cache-Control', 'no-store')
          const html = await fs.readFile(path.join(root, 'dist/index.html'), 'utf8')
          res.end(html.replace('<head>', '<head><script src="/__layout.js"></script>'))
        } else if (url.pathname === '/__layout.js') {
          res.setHeader('Content-Type', 'application/javascript')
          res.setHeader('Cache-Control', 'no-store')
          res.end(await fs.readFile(path.join(root, 'scripts/diagnostics/layout.js'), 'utf8'))
        } else if (url.pathname === '/__layout-result' && req.method === 'POST') {
          let body = ''
          for await (const chunk of req) {
            body += chunk
            if (body.length > 100_000) { res.statusCode = 413; res.end(); return }
          }
          const result = JSON.parse(body)
          const dir = path.join(root, 'scripts/diagnostics/results')
          await fs.mkdir(dir, { recursive: true })
          const label = String(result.variant).replace(/[^a-z0-9-]/gi, '')
          const file = `layout-${label}-${Date.now()}.json`
          await fs.writeFile(path.join(dir, file), JSON.stringify(result, null, 2))
          console.log(JSON.stringify({ file, ...result.summary }))
          res.end('saved')
        } else next()
      })
    },
  }],
})
server.printUrls()
