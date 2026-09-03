# 交接文档（2026-09-03 修复版）

项目：照见千年，四朝铜镜互动展览。Vite / React 18 / TypeScript / Framer Motion / Three.js。顶部标题固定，镜子与底部介绍作为整体翻页。保留全部本地资源与相对路径，后续仍需小红书真机验证。

## 当前状态

本地已完成翻页断跳、手势和按需渲染修复。分支为 `codex/fix-mirror-transitions`。已完成的诊断和验证见：

- `docs/performance-diagnosis-2026-09-03.md`：修复前证据（历史快照）。
- `docs/performance-fix-2026-09-03.md`：修复设计、测试结果和待验收项。

用户手机体验验收已通过，GitHub Pages 尚未更新；不要把本地修复状态误当成已上线。

用户已反馈手机翻页不卡。Firefox 曾出现首屏文字在屏外，重新打开同构建检查入口后恢复正常，真机高度数据通过，用户也确认普通 `/` 刷新后正常；本次没有修改布局，原因未确证。保留 `scripts/diagnostics/layout-server.mjs` 和 `check-layout.mjs` 供再次出现时采集，详见修复报告。

## 关键代码

- `src/App.tsx`：展示、资料卡、翻面状态、热点延时及加载提示。
- `src/interaction/usePageNavigation.ts`：唯一的翻页/拖动状态控制器，`idle → exiting → waiting → entering → idle`，拖拽可中断过渡；等待素材时只保留最近一次方向。
- `src/components/MirrorStage.tsx`：3D / CSS 回退、热点与翻页按钮；两条路径均报告素材就绪。
- `src/components/Mirror3D.tsx`：React 与常驻场景的生命周期桥接。
- `src/rendering/mirrorScene.ts`：每个 renderer 自己拥有纹理 Promise 缓存、轮廓几何缓存、材质与按需绘制循环；交互结束不持续绘制。

## 必须保持的约束

1. 素材交换时整页 opacity 必须为 0；新镜实际绘制之后才能进入。不要恢复在可见时 `jump()` 到另一侧的逻辑。
2. 过渡必须有一个写入者。取消依赖控制器和代数失效，不等待已 stop 的动画 Promise。
3. 不要按朝代 key 重建 renderer。纹理缓存必须包含正在加载的 Promise，并与 renderer 同生命周期；不能把已 dispose 的 Texture 留在跨 renderer 缓存中。
4. `map` 与 `normalMap` 必须同时应用；只在从无图变成有图时更新 shader 特性。
5. 静止时不提交新的 3D 帧；翻面/鼠标倾斜/尺寸变化/素材变化触发绘制。触摸拖拽不驱动 3D 倾斜。
6. StrictMode 在同一个已连接的 canvas 上执行清理再挂载；此时不能 forceContextLoss，否则新场景会误收到 contextlost。真正卸载才释放上下文。
7. 按钮必须能命中；资料卡打开时屏蔽背景翻页。快速短滑用速度判定，pointercancel 不视为松手提交。
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

- 手机体验已获用户确认；GitHub Pages 发布待后续执行。
- 如手机仍掉帧，再用真机数据决定 DPR 和贴图分辨率；目前保持 DPR 上限 2。
- dist 中仍有未引用的原始大图与高度图，未来离线包需清理；本次没有修改资产目录。
- 美术与内容原有待办仍见 PROGRESS.md（汉图、美术质感、馆藏图、小红书打包）。
