# 交接文档（2026-09-03 修复版）

项目：照见千年，四朝铜镜互动展览。Vite / React 18 / TypeScript / Framer Motion / Three.js。顶部标题固定，镜子与底部介绍作为整体翻页。保留全部本地资源与相对路径，后续仍需小红书真机验证。

给 zcode 的简版说明：[本次查到的问题、解决办法与排查过程](docs/zcode-handoff-2026-09-03.md)。用户已确认 GitHub Pages 手机体验正常，首次打开铜镜仍有加载过程。

## 当前状态

本地已完成翻页断跳、手势和按需渲染修复。分支为 `codex/fix-mirror-transitions`。已完成的诊断和验证见：

- `docs/performance-diagnosis-2026-09-03.md`：修复前证据（历史快照）。
- `docs/performance-fix-2026-09-03.md`：修复设计、测试结果和待验收项。

用户手机体验验收已通过。2026-09-03 已将修复提交 `b8f4a18` 推送到 `main` 并部署 GitHub Pages：[线上展览](https://cfyofjackie.github.io/ancient-mirrors-museum/)。Pages 部署任务成功，线上资源指纹与本地构建一致；手机尺寸下四朝循环与页脚可见性检查通过。

用户已反馈手机翻页不卡。Firefox 曾出现首屏文字在屏外，重新打开同构建检查入口后恢复正常，真机高度数据通过，用户也确认普通 `/` 刷新后正常；本次没有修改布局，原因未确证。保留 `scripts/diagnostics/layout-server.mjs` 和 `check-layout.mjs` 供再次出现时采集，详见修复报告。

2026-09-03 晚一批小改：移除右侧 ↑↓ 翻页按钮；朝代圆点改为屏幕右缘垂直居中的纯指示器（不可点击、不随拖拽位移）；底部提示行加大加装饰线。诊断脚本 interactions.js 同步更新（九朝数据顺序、滚轮用例替代按钮用例）。注意：`scripts/diagnostics/server.mjs` 默认仍用 6180，被常驻 dev server 占用时可 `DIAG_PORT=其他端口` 运行。

2026-09-03 深夜：曾加入"翻页落定后展示自转一圈"（9s、限 ~30fps），真机（小米 13）滑动掉帧明显，无头实测确认自转期间持续渲染（静置 ~28fps、翻页后渲染循环再延续 ~9.6s、与滑动手势竞争主线程）且 30fps 跳帧节奏不齐（约 16% 渲染间隔超 40ms）产生顿挫；用户也不喜欢该效果，已整体移除，回到纯按需渲染（只有翻面/倾斜/换素材/尺寸变化时绘制，静止零绘制）。同批新增无头诊断 `scripts/diagnostics/spin-probe.mjs`（状态分段对照 rAF 间隔与渲染次数）。

## 关键代码

- `src/App.tsx`：展示、资料卡、翻面状态、热点延时及加载提示。
- `src/interaction/usePageNavigation.ts`：唯一的翻页/拖动状态控制器，`idle → exiting → waiting → entering → idle`，拖拽可中断过渡；等待素材时只保留最近一次方向。
- `src/components/MirrorStage.tsx`：3D / CSS 回退与热点层；两条路径均报告素材就绪。
- `src/components/Mirror3D.tsx`：React 与常驻场景的生命周期桥接。
- `src/rendering/mirrorScene.ts`：每个 renderer 自己拥有纹理 Promise 缓存、轮廓几何缓存、材质与按需绘制循环；交互结束不持续绘制。

## 必须保持的约束

1. 素材交换时整页 opacity 必须为 0；新镜实际绘制之后才能进入。不要恢复在可见时 `jump()` 到另一侧的逻辑。
2. 过渡必须有一个写入者。取消依赖控制器和代数失效，不等待已 stop 的动画 Promise。
3. 不要按朝代 key 重建 renderer。纹理缓存必须包含正在加载的 Promise，并与 renderer 同生命周期；不能把已 dispose 的 Texture 留在跨 renderer 缓存中。
4. `map` 与 `normalMap` 必须同时应用；只在从无图变成有图时更新 shader 特性。
5. 静止时不提交新的 3D 帧；翻面/鼠标倾斜/尺寸变化/素材变化触发绘制。触摸拖拽不驱动 3D 倾斜。
6. StrictMode 在同一个已连接的 canvas 上执行清理再挂载；此时不能 forceContextLoss，否则新场景会误收到 contextlost。真正卸载才释放上下文。
7. 资料卡打开时屏蔽背景翻页。快速短滑用速度判定，pointercancel 不视为松手提交。（2026-09-03 晚：右侧 ↑↓ 翻页按钮已按需求移除，切换只走滑动/滚轮/键盘手势。）
8. `base: './'` 保持不变，不引入外部 CDN、字体或运行时 API。

## 运行与测试

```powershell
npm ci --ignore-scripts --no-audit --no-fund
npm run dev
npm run build
npm run preview
```

诊断：`node scripts/diagnostics/server.mjs`（与 dev 共用 6180，先停止其中一个）。入口和判定命令见 `scripts/diagnostics/README.md`。性能页必须在前台运行，手机尺寸不等于手机 GPU。

## 待办

- GitHub Pages 已发布本次修复，用户接下来复测线上手机体验。
- 如手机仍掉帧，再用真机数据决定 DPR 和贴图分辨率；目前保持 DPR 上限 2。
- dist 中仍有未引用的原始大图与高度图，未来离线包需清理；本次没有修改资产目录。
- 美术与内容原有待办仍见 PROGRESS.md（汉图、美术质感、馆藏图、小红书打包）。
