# 交接：小红书容器内滑动卡顿排查（未解决，待接手）

> 面向接手者（Codex）。本文只记录**已实测的事实**与**已排除项**，结论未定，请不要凭直觉直接改视觉/素材。
> 相关历史：`HANDOFF.md`（项目现状与红线）、`.skill/minitool-zip-builder/`（小红书官方打包规范）。

## 0. 一句话现状

小红书小工具容器内（WebView）**手指滑动仍有明显卡顿**，尤其在**进馆、3D 铜镜加载之后**；**Firefox 手机端不卡**。
已用三轮屏幕探针 + 四段真机录屏定位，**排除了 GPU 负载、软件渲染、显存、纹理上传、3D 就绪等待**等假设，并修掉了一个**已证实的成因（换页时画卷大图解码阻塞主线程）**，但**主观卡顿仍存在**。

---

## 1. 环境与约束（会影响可用的手段）

- 目标平台：小红书 **Builder Hub「小工具」**——离线 H5 zip，**纯本地、不联网**，容器 CSP 禁内联脚本 / 禁 `type="module"`；**Web Worker / WASM / 传感器 / 外链 均不可用**。
- 官方规范（已下载）：`.skill/minitool-zip-builder/minitool-zip-builder/`
  - `references/performance-budget.md`：**zip ≤ 10 MiB（硬上限，建议 2 MiB）**；WebGL 预算 **DPR ≤1.5（低档 1）**、纹理边长 ≤2048、纹理显存 ≤64 MiB（低档 32 MiB）、draw call ≤100、三角形 ≤100k；**要求运行时降档**。
  - `references/zip-artifact-spec.md`：`index.html` 必须在 zip 根、经典脚本、无内联、仅允许 jpg/css/gif/svg/png/js/jpeg/json/html/woff2/webp/woff。
- 真机：**Adreno (TM) 740 / Qualcomm**，`dpr=2.75`，WebGL 1.0（Chromium）。

## 2. 现象与复现

1. 构建打包（见 §7）→ 上传 Builder Hub → 扫码预览。
2. 进入展厅（过序厅两页），**等 3D 铜镜加载出来**。
3. **手指按住页面向下滑**（下滑=上一个朝代）：卡顿感明显；Firefox 同一站点不卡。

> 注意：用户描述是**"手指往下滑"（拖拽过程）**，而目前探针只量了**松手之后的翻页过渡**——**拖拽阶段尚未插桩**（见 §6 第 1 条）。

## 3. 已实测数据

### 3.1 探针（屏幕 HUD，容器内看不到 console 所以画在屏上）

| 读数 | 值 | 含义 |
|---|---|---|
| GPU / vendor | Adreno (TM) 740 / Qualcomm | **硬件 GPU，非软件渲染** |
| canvas | 460×460（渲染器 DPR 已封顶 1.5） | 画布面积 21 万像素，远低于 200 万预算 |
| calls / tri / tex / geo | 3 / 512 / 23 / 14–18 | **3D 绘制量可忽略** |
| fps | 48 ～ 121（波动大） | 平时很高，掉帧以**尖刺**形式出现 |
| worst2s（近 1 秒最差帧间隔） | **8ms ～ 182ms** | 存在"浏览器没产出新帧"的空档 |
| long>33 / >50 | 持续累加 | 长帧约每秒 1–2 次 |

### 3.2 每次翻页的耗时拆解（探针二/三版）

字段：`total`=触发起手→落定；`exit`=退出动画；`wait`=换页提交→新镜就绪；`art(prep)`=`applyArt`(其中等纹理)；`tab`=新画卷图解码；`up`=纹理上传；`LT[偏移/时长]`=落在本次翻页窗口内的主线程长任务。

**视频 3（修复前）关键行：**
```
total=203 exit=101 wait=2 art=1(prep 0) tab=0   up=0×0ms LT[...]=-       ← 顺
total=207 exit=105 wait=2 art=1(prep 0) tab=37  up=0×0ms LT[...]=-       ← 顺
total=205 exit=101 wait=2 art=1(prep 0) tab=103 up=0×0ms LT[+144/60]     ← ★ 卡：解码 103ms + 60ms 长任务
```
**视频 4（画卷预热修复后）：**
```
total=203 exit=101 wait=2 art=1(prep 0) tab=0 up=0×0ms LT[...]=-   （每一次 tab 都是 0）
fps 112.5 / 121.0   worst2s 83ms / 8ms
LT(最近4)=98ms 56ms 61ms 50ms   ← 这些落在"翻页之间"，未落在翻页窗口内
```

### 3.3 FFmpeg 分析（录屏）

- `lagging/1.mp4`、`2.mp4`、`3.mp4`、`4.mp4`（576×1280 / 432×960，恒定 23fps）。
- `freezedetect=n=-60dB:d=0.12` 显示**全片布满 0.13–0.9s 的画面冻结**，与探针的 `worst2s` 尖刺一致。
- 注意：录屏是 CFR 23fps，**不能**用帧时间戳判断抖动，只能用"连续重复帧=冻结"来判断。

## 4. 已排除（都有数据支撑，别再重复走）

| 假设 | 排除依据 |
|---|---|
| 软件渲染（SwiftShader）导致慢 | GPU = Adreno 740，HUD 明示"硬件 GPU（非软件）" |
| GPU 负载高（draw call / 三角形） | `calls=3 / tri=512`，可忽略 |
| 显存压力（9 镜 1024² 纹理 ≈72MB） | 加 Adreno 740 上毫无压力；且 `tex=23` 全程不变 |
| 纹理上传阻塞 | `up=0×0ms`——翻页期间根本没有上传发生 |
| 等待 3D 就绪（`waiting` 相位） | **`wait=2–7ms`**——新镜 2 毫秒就就绪 |
| `applyArt` 本身重 | `art=1ms`、`prep=0–1ms` |
| 沉睡药丸的 `backdrop-filter` | 已移除（`291c8a6`），卡顿仍在 |
| WebGL DPR 过高 | 已从 `min(dpr,2)` 降到 1.5（`3037918`），卡顿仍在 |
| 平台打包问题导致行为异常 | 打包已全合规：zip 8.49 MiB、正斜杠、无 .md、经典脚本+defer、ES2017、polyfill（`3037918`→`c8b3296`） |

## 5. 已做的改动与结果

| 提交 | 内容 | 结果 |
|---|---|---|
| `c8b3296` | 入口脚本加 `defer`（经典脚本在 `<head>` 无 defer 会在 `#root` 前执行 → `createRoot(null)` 崩溃=黑屏） | **修复黑屏**，应用能跑了 |
| `07025c9` | 旧内核缺省 polyfill + 可视错误上报 | 兼容性兜底 |
| `3037918` | xhs 合规构建（经典脚本/ES2017/DPR1.5） | 通过平台校验 |
| `27161f5` | **画卷图空闲预热**：落定后空闲时提前解码上一/下一镜全屏画卷（`src/interaction/tableauWarmup.ts`） | **`tab` 103→0、翻页窗口内 `LT` 消失、fps 回到 112–121**；**但用户主观仍觉卡** |

## 6. 剩余假设与建议的下一步（按优先级）

1. **拖拽阶段没有插桩（最该先做）**——用户说的是"手指往下滑"那一下。现有探针只覆盖"松手后的过渡"。
   建议：在 `src/interaction/usePageNavigation.ts` 的 `pointerdown→pointerup` 之间加：每帧 `y` 跟随延迟、`pointermove` 处理耗时、以及该窗口内的 `longtask`/`long-animation-frame`。**没有这段数据，无法确认卡在拖拽还是过渡。**
2. **用 `long-animation-frame`（LoAF）替换/补充 `longtask`**——Chromium 支持 `PerformanceObserver({type:'long-animation-frame'})`，能给出**单帧的 script/style/layout/render 归因**，直接回答"那 60–180ms 花在脚本还是样式/布局/渲染"。当前 `longtask` 只有时长没有归因，且**存在投递晚于 `perf.finish()` 的漏记风险**（`LT[...]=-` 可能是假阴性）。
3. **合成/光栅侧代价（主线程探针看不到）**——`.page` 在过渡时同时动画 `transform` 与 **`opacity`**，而它内部含 **`alpha:true` 的 WebGL canvas + 全屏画卷图**。Chromium 下对含 canvas 的子树做透明度动画可能产生**离屏 render surface 逐帧合成**，表现为 `worst2s` 掉帧而主线程不忙（正是"有 8ms 也有 182ms"的样子）。
   建议做 A/B：**只去掉过渡的 `opacity` 动画（保留位移）**，或换页时对 canvas 层单独处理；看主观与 `worst2s` 是否变化。**这是零视觉代价的对照实验**。
4. **探针自身的干扰未评估**——探针有**每帧 rAF 循环**与**每 250ms 更新的大块 HUD 文本**（覆盖在 WebGL canvas 之上）。视频 3 录到 `fps≈50`、视频 4 录到 `fps≈112`，差异可疑。
   建议：**先删探针**跑一版，确认"有探针 vs 无探针"的主观差异；也排除探针对 `fps` 读数的污染。
5. **换页过渡本身偏长**——`exit≈101ms` + 入场 tween（标称 280ms），合计数百毫秒。若主观是"慢"而非"抖"，可考虑缩短/改为更轻的过渡；但**先分清是"抖"还是"慢"**。
6. **`重` 的静态层**：`.page` 内含全屏画卷 `<img>`、`.flat-mirror` 平铺图、镜面 canvas。可核查是否所有层都被提升为独立合成层、是否有不必要的全屏重光栅。

## 7. 复现与验证方法

### 7.1 构建 / 压缩 / 打包（小红书 zip）
```powershell
npm run build:xhs                                   # 产出 dist-xhs（经典脚本、ES2017、无内联）
node scripts/compress-xhs-assets.mjs dist-xhs --out dist-xhs-pkg `
  --q-normal 70 --q-flat 74 --q-back 72 --q-front 80 --q-page 68 --q-ref 74
python scripts/package-xhs-zip.py dist-xhs-pkg ancient-mirrors-museum-xhs.zip   # 正斜杠、index.html 在根
node ".skill/minitool-zip-builder/minitool-zip-builder/scripts/audit_artifact.mjs" ./ancient-mirrors-museum-xhs.zip
```
产物：`ancient-mirrors-museum-xhs.zip`（当前 **8.49 MiB**，审计 PASS）。

### 7.2 网站版（对照：Firefox 不卡）
```powershell
npm run build && npm run deploy      # 发到 gh-pages
```

### 7.3 探针（当前代码里已内置，屏幕左上角 HUD）
- 读法：`wait`=等新镜就绪；`art(prep)`=`applyArt`(等纹理)；`tab`=画卷图解码；`up`=纹理上传；`LT[偏移/时长]`=该次翻页窗口内的长任务。
- 截图判读：`tab` 大 + `LT` 非 `-` → 解码阻塞；`wait`/`prep` 大 → 3D 侧；全小但 `worst2s` 大 → 合成/渲染侧。

### 7.4 真机录屏分析
```powershell
ffmpeg -i lagging\N.mp4 -vf fps=1 lagging\fN\k_%03d.png                 # 抽帧
ffmpeg -y -i lagging\fN\k_012.png -vf "crop=576:400:0:0,scale=1440:1000" hud.png   # 裁 HUD 放大读
ffmpeg -i lagging\N.mp4 -vf "freezedetect=n=-60dB:d=0.12" -an -f null -  # 找画面冻结
```

## 8. 当前代码状态（接手前必读）

- **已提交、已推 `origin/main`**（`main...origin/main` 同步）。
- **未跟踪**：`lagging/`（四段录屏 + 抽帧）、`design/`（logo/图标，勿进包）。
- **临时代码（诊断完请删除）**：
  - `src/probe.ts`（HUD 全量）、`src/perf.ts`（打点 + `observeLongTasks`）
  - `src/main.tsx`：`import { startProbe }` + `startProbe()`（第 7、54 行）
  - `src/interaction/usePageNavigation.ts`：`perf.mark('swipe'|'commit'|'settle')` + `perf.finish()`
  - `src/App.tsx`：`perf.mark('ready')`、画卷解码计时 effect、`tableauImgRef`
  - `src/rendering/mirrorScene.ts`：`perf.mark('artStart'|'artPrep'|'artApplied')`、`perf.upload()`、`window.__mirrorSceneInfo`（含 dispose 清理）
- **保留的正式修复**（不要回退）：`defer` 入口脚本、polyfill、DPR 1.5、xhs 合规构建、`src/interaction/tableauWarmup.ts` 画卷预热。

## 9. 红线（改任何东西前先确认不破）

1. 内容可见时不得交换镜面素材；旧页完全淡出、新镜实际绘制后再进入。
2. 页面位移只有 `usePageNavigation` 一个写入者。
3. renderer 常驻，**不得按朝代重建**；纹理缓存与 renderer 同生命周期。
4. **静止时零持续绘制**：只有翻面、鼠标倾斜、换素材、尺寸变化才出帧；触摸拖拽不驱动 3D 倾斜。
5. 用户交互期间不得启动下一镜/其余镜的后台 GPU 上传。
6. 保持 `base: './'`、零网络请求、全部资源本地。
7. xhs 产物：`index.html` 在 zip 根、经典脚本 + `defer`、无内联脚本、只含允许的文件类型、**zip ≤10 MiB**。

## 10. 关键文件索引

| 文件 | 作用 |
|---|---|
| `src/interaction/usePageNavigation.ts` | 唯一翻页状态机（拖拽/退出/等待/入场） |
| `src/interaction/tableauWarmup.ts` | 画卷图空闲预热（本次新增的修复） |
| `src/rendering/mirrorScene.ts` | 3D 场景：按需渲染、纹理优先级/预热/上传、DPR、环境反射、倒影层 |
| `src/components/MirrorStage.tsx` / `Mirror3D.tsx` / `MirrorFlip.tsx` | 3D/CSS 回退与"就绪"契约 |
| `src/App.tsx` | 页面编排、waiting 放行、展厅三区、画卷/展签/资料卡 |
| `src/index.css` | `.page`（`will-change: transform`）、`.tableau-backdrop`、`.mirror-3d-wrap`、资料卡等 |
| `vite.xhs.config.ts` | xhs 专用构建（IIFE、ES2017、去 module、加 defer） |
| `scripts/compress-xhs-assets.mjs` / `scripts/package-xhs-zip.py` | 产地压缩 / 正斜杠打包 |
| `docs/handoff-perf-jank.md` | **本文** |

## 11. 一句话给接手者

**"3D 加载后就卡、Firefox 不卡"目前最可能落在两处：① 拖拽阶段的逐帧位移被主线程长任务打断（尚未插桩）；② 过渡时含 WebGL canvas 的 `.page` 做透明度动画导致的 Chromium 合成代价（主线程探针看不到）。**
请先补 §6-1 的拖拽插桩与 §6-2 的 LoAF 归因，并做 §6-3 的"去 opacity 动画"A/B 对照，再决定改法。
