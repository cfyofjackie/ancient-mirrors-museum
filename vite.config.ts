import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './'：构建产物使用相对路径，保证小红书 zip 包内离线可用（PROGRESS.md 3.3）
// publicDir 指向 assets/：镜面素材按 SLC 第五节目录结构存放，URL 为 /mirrors/<朝代>/front|back.webp
export default defineConfig({
  base: './',
  publicDir: 'assets',
  plugins: [react()],
  // 另一个项目的 dev server 会动态占用 5273 附近的端口：dev 用 6180，preview 用 6181；strictPort 防止被占时静默跳端口
  server: { port: 6180, strictPort: true },
  preview: { port: 6181, strictPort: true },
})
