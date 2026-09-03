# 交接文档（HANDOFF）

> 给接手的 agent/开发者。目标：快速上手，调整"朝代切换"的交互手感。主开发仍由原 agent 继续，本文档聚焦现状与注意点。完整背景见 [PROGRESS.md](PROGRESS.md) 与 [SLC.md](SLC.md)。

## 这是什么项目

"照见千年"——铜镜 × 朝代审美变化的互动小工具。竖屏移动端优先，最终目标平台是**小红书小工具**（标准 Web 沙箱：**零网络请求**，所有资源本地打包）。

- 技术栈：Vite + React 18 + TS + Framer Motion + three.js（无 UI 框架）
- 本地运行：`npm run dev` → http://localhost:6180
- 部署：`npm run deploy`（构建 + 推 gh-pages → https://cfyofjackie.github.io/ancient-mirrors-museum/ ）
- 页面结构：**标题固定在顶部，铜镜（3D）居中于空带，朝代介绍文字在底部**——不要破坏这个布局

## 当前状态与正在解决的问题

核心功能全部可用：上下滑动切换朝代（循环）、点击镜子翻面、热点说明卡、史实资料卡、翻页按钮兜底。

**未决问题**：用户（小米 13 + Chrome，桌面端同样）感觉**切换朝代的过渡仍然别扭**。近期已做但未达预期的尝试：

1. 渲染器常驻 + 纹理 GPU 预热（切换零重建/零解码/零上传）
2. 换展两段式 3D 动画（旧镜降下→新镜升起）——已删，改由整页滑动过渡
3. `will-change: transform`、移除 canvas drop-shadow、window 级指针手势

**用户的最新描述**：切换有"翻页感"了（顺方向甩出/滑入），但整体仍偏卡/偏生硬。可能的方向：过渡时长与缓动曲线、甩出/滑入幅度（`SWITCH_OFFSET` 84px 是否太小）、3D 材质参数（金属度过高显"飘"）、或还没找到的未知因素。**欢迎全新思路，不必延续旧路径。**

## 关键架构（5 分钟版）

```
App.tsx        ← 全屏手势（window 级 pointer 监听 + dragY MotionValue）
                 go() = 切换编排：整页滑出 → setIndex → 对侧滑入
MirrorStage    ← 视觉层：.mirror-stage（flex:1 空带）内 canvas + 热点 + 翻页按钮
Mirror3D       ← three.js 场景（渲染器常驻；纹理缓存 textureCache 已 initTexture 驻留 GPU）
mirrors.ts     ← 四朝内容数据（文案/热点坐标/art3d 路径）——内容全数据驱动
```

- **拖拽跟手**：`dragY`（MotionValue）由 App 的 window pointermove 驱动；`.page` 与手势层共享它
- **切换编排**：`go()` 里 `animate(dragY, …)` 滑出 → `setIndex` → 从对侧滑入；`switchGen` 代数保护防半途打架
- **翻面判定**：pointerup 时位移 <12px 且 `closest('.mirror-3d-wrap')` → 翻面
- **纹理热替换**：`textureCache`（URL→Texture，已 initTexture 驻留 GPU），`applyArt` 只换指针

## 改动时的红线（踩过的坑）

1. **不要恢复"每次切换重建渲染器"**——这是早期卡顿的根因；纹理/几何只做热替换
2. **`mats.back.needsUpdate = true` 只在 map 从 null→纹理时设置**——每次换纹理都设会强制着色器重编译（切换瞬间大 hitch）
3. **小红书沙箱零网络请求**——不要引入任何 CDN/外链/在线字体；新资源放 `src/textures/` 或 `assets/`
4. **单写入者原则**——`dragY` 同一时刻只允许一个来源（拖拽跟手 或 切换动画）；pointerdown 时先 `dragY.stop()`，否则两个动画打架 = 跳帧
5. **测试陷阱**：内置预览切到后台时 rAF/React 提交会被冻结，一切动态行为"失效"是假象——请在真实前台浏览器验证
6. 相对路径 `base: './'` 是为 gh-pages 子路径和小红书 zip 服务的，不要改成绝对路径

## 快速验证清单

- [ ] 手机/桌面：任意位置上下滑动 → 翻页，镜+文字整体联动
- [ ] 点击镜子本体 → 翻面；点镜子外 → 不翻面
- [ ] 右侧 ↑↓ 按钮 → 切换；"史实资料" → 卡片
- [ ] 连续快速滑动 → 无跳帧、无卡顿
- [ ] `npm run build` 通过；`npm run deploy` 后 github.io 正常

## 待办主线（与本次问题无关，供后续）

- 汉·四神博局纹镜按新规范重出图（唐/宋/明已接入）
- "金过头"材质微调（分区粗糙度：纹样亮、底子哑光）
- 小红书打包适配 + 真机 webview 验证（R3）
