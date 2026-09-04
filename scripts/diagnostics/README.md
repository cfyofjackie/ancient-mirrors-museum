# 本地翻页诊断工具

这组脚本只用于诊断，不被普通 `npm run build` 引用。详细结论见 `docs/performance-diagnosis-2026-09-03.md`。

```powershell
npm ci --ignore-scripts --no-audit --no-fund
npm run build
node scripts/diagnostics/server.mjs
```

服务器固定 6180 端口（strictPort）。若 6180 被常驻 dev server 占用，可用其他端口运行诊断：`DIAG_PORT=6190 node scripts/diagnostics/server.mjs`（下文地址相应换端口）。

保持测试页在前台，打开下列地址即可自动执行八次输入，约 15 秒后显示结果并保存 JSON 至 `scripts/diagnostics/results/`（原始逐帧数据默认不进版本控制）。不要同时打开多个测试页，切换视口后请重新加载。

- 当前生产构建：`http://127.0.0.1:6180/__production/?perf=fixed-mobile`
- 当前生产构建，快速短滑：`http://127.0.0.1:6180/__production/?perf=short-flick`
- 当前生产构建，长滑：`http://127.0.0.1:6180/__production/?perf=long-swipe`
- 计时版（强制画布 DPR=2）：`http://127.0.0.1:6180/?perf=fixed-dpr2&dpr2`
- 11 项交互回归：`http://127.0.0.1:6180/?interactions&dpr2`
- 无 WebGL 回退：`http://127.0.0.1:6180/?interactions&fallback`
- 注入慢资源：`http://127.0.0.1:6180/?interactions&slow-art`
- 注入加载失败：`http://127.0.0.1:6180/?interactions&fail-art`

开发构建探针在 Vite 内存转换中插入计时。当前版本保留 StrictMode，覆盖开发双挂载；修复前的历史基准取消过双挂载，以接近生产生命周期。`dpr2` 只在计时版中将 WebGL 画布像素比设为 2，不模拟手机硬件。生产入口直接提供当前 dist 文件，只注入 DOM/rAF 观察脚本，不改业务 JS。

单命令检查最近一次指定实验的结果：

```powershell
node scripts/diagnostics/check.mjs fixed-mobile
node scripts/diagnostics/check.mjs fixed-dpr2
node scripts/diagnostics/check.mjs interactions
# 全部通过时退出码 0
```

性能检查器要求页面可见且完成八次切换，并检查可见内容替换/瞬移。交互检查器读取逐项断言结果。rAF 间隔不等于 GPU 实际呈现时长，函数耗时不等于 GPU 执行时间；真机掉帧须另测。

历史 baseline/full-exit/no-drop/no-render 原始结果保存在 results；这些单变量实验针对旧实现，当前服务器不再改写已删除的旧动画。诊断报告中的旧命令读取的是历史结果，不应当作新版本测试。

快速短滑采用确定的 pointer 事件回放（50px / 80ms），长滑为 100px / 80ms；这是应用手势逻辑测试，不模拟浏览器或操作系统的全部触摸行为。

## 手机首屏文字可见性

停止已有的 6181 预览进程后运行：

```powershell
node scripts/diagnostics/layout-server.mjs
```

手机使用终端显示的局域网地址并附加 `/?layout-check`。它提供当前 `dist`，仅该查询入口注入只读尺寸探针，普通 `/` 保持生产页面不变。字体加载后、视口变化和手势结束时，记录 idle 页面各区域边界、可视高度、浏览器版本、资源文件名；数据只回传当前本地服务器并保存在 results 中，不上传外部服务。

```powershell
node scripts/diagnostics/check-layout.mjs
# 可选：入口使用 ?layout-check&label=chromium-before，对应：
node scripts/diagnostics/check-layout.mjs chromium-before
```

判定条件是页脚完整处于可视区域内；加载中及翻页中的位置不算首屏布局失败。这个检查入口不调整高度、不禁用 3D、不替换正式 CSS。2026-09-03 的 Firefox 真机记录通过，原截图异常尚未在采集中复现。检查结束后可以停止此进程并恢复 `npm run preview`。
