import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// 容器 CSP 禁 module、且离线 zip 上 module 相对 import 解析不可靠；
// 构建产物虽是 IIFE，但 Vite 默认仍给入口 script 打上 type="module"，这里统一去掉，
// 让其成为经典 <script src>（无 module、无 crossorigin）。
function stripModuleScript(): Plugin {
  return {
    name: 'xhs-strip-module-script',
    transformIndexHtml(html) {
      return html.replace(/<script\s+type="module"\s+crossorigin\s+src=/g, '<script src=')
    },
  }
}

// 小红书小工具（Builder Hub）专用构建。
// 与 vite.config.ts 的唯一结构差异：容器 CSP 禁 module 脚本，且离线 zip 无目录服务，
// 模块相对 import 解析不可靠，因此这里强制输出「经典脚本」（IIFE、单 chunk、无 type=module）。
//
//   npm run build:xhs   →  dist-xhs/
//   （在 dist-xhs 内压缩目录内容为 zip，index.html 须位于 zip 根）
export default defineConfig({
  base: './',
  publicDir: 'assets',
  plugins: [react(), stripModuleScript()],
  build: {
    outDir: 'dist-xhs',
    emptyOutDir: true,
    // 最低基线 Chrome 61/ES2017：esbuild 会把可选链、空值合并等 ES2020+ 语法降级，避免真机语法报错。
    target: 'es2017',
    // 经典脚本：不依赖 import/export，避免容器里"页面渲染出来但 JS 不执行"。
    // iife 单 chunk 下 Vite 会把 CSS 内联进 JS、运行时注入 <style>（容器允许内联样式，可正常显示）。
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})

