// Deterministic integration replay against the real mounted app; local only.
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const until = async (predicate, message, timeout = 5000) => {
  const deadline = performance.now() + timeout
  while (!predicate()) { if (performance.now() > deadline) throw new Error(message); await delay(16) }
}
const assert = (condition, message) => { if (!condition) throw new Error(message) }
const page = () => document.querySelector('.page')
const dynasty = () => document.querySelector('.dynasty-name').textContent
const idle = () => page().dataset.phase === 'idle' && Number(getComputedStyle(page()).opacity) > .99
const key = direction => window.dispatchEvent(new KeyboardEvent('keydown', { key:direction > 0 ? 'ArrowDown' : 'ArrowUp', bubbles:true }))
const mirror = () => document.querySelector('.mirror-3d-wrap canvas, .mirror-face')
const pointer = (type, y, extras = {}) => mirror().dispatchEvent(new PointerEvent(type, { pointerId:1, isPrimary:true, pointerType:'touch', button:0, clientX:innerWidth/2,clientY:y,bubbles:true,...extras }))
const swipe = async (dy, cancelled = false) => {
  pointer('pointerdown',350)
  await delay(80)
  pointer('pointermove',350+dy)
  pointer(cancelled ? 'pointercancel' : 'pointerup',350+dy)
}
const settledAt = async name => { await until(()=>idle() && dynasty()===name, `Did not settle on ${name}; got ${dynasty()} / ${page().dataset.phase}`) }
const results = []
const status = document.createElement('pre')
status.id='interaction-status'
status.style.cssText='position:fixed;inset:0 auto auto 0;z-index:10000;pointer-events:none;background:#000c;color:white;font:12px monospace;white-space:pre-wrap;max-width:100vw'
document.body.append(status)
const test = async (name, fn) => {
  status.textContent = `Testing: ${name}`
  try { await fn(); results.push({name,pass:true}) } catch(error) { results.push({name,pass:false,error:error.message}); throw error }
}
try {
  await document.fonts.ready
  await delay(3500)
  // 序厅两页已并入主翻页序列（index 0/1，与铜镜共用同一手势体系，无遮罩组件）：
  // 先滑到仕女页，再上滑触发三幕交接进入主展厅（商镜）。
  assert(document.querySelectorAll('.dynasty-dots span').length === 11, 'Dots indicator is not 11 items')
  assert(page().dataset.page === '0' && page().dataset.kind === 'opening', 'App did not start on the first opening page')
  await swipe(-150) // 磨镜页 → 仕女页
  await until(() => page().dataset.page === '1', 'Did not reach second opening page')
  await delay(600)
  await swipe(-150) // 仕女页 → 三幕交接 → 商镜
  await until(() => page().dataset.page === '2' && page().dataset.kind === 'mirror' && idle(), 'Three-act handover did not land on the hall')
  await settledAt('商')
  await delay(400)
  // 数据现为九朝，按年代排序：商 春秋 战国 汉 隋 唐 宋 元 明（商为序列第 3 项）。
  await test('wheel navigation switches dynasties both directions', async () => {
    window.dispatchEvent(new WheelEvent('wheel',{deltaY:120,bubbles:true}))
    await settledAt('春秋')
    await delay(700) // 翻页输入 650ms 节流
    window.dispatchEvent(new WheelEvent('wheel',{deltaY:-120,bubbles:true}))
    await settledAt('商')
  })
  await test('fast short swipes both directions', async () => {
    await swipe(-50); await settledAt('春秋')
    await swipe(50); await settledAt('商')
  })
  await test('pointercancel restores current page', async () => {
    await swipe(-120,true); await delay(400); await settledAt('商')
  })
  await test('non-primary pointer does not navigate', async () => {
    pointer('pointerdown',350,{pointerId:2,isPrimary:false})
    pointer('pointermove',180,{pointerId:2,isPrimary:false})
    pointer('pointerup',180,{pointerId:2,isPrimary:false})
    await delay(500); await settledAt('商')
  })
  await test('horizontal movement is not a tap or a vertical swipe', async () => {
    pointer('pointerdown',350)
    pointer('pointermove',350,{clientX:innerWidth/2+100})
    pointer('pointerup',350,{clientX:innerWidth/2+100})
    await delay(750); await settledAt('商')
    if(mirror().tagName==='CANVAS') assert(Math.abs(window.__mirrorProbe.rendererInfo.flip)<.02,'Horizontal drag flipped mirror')
  })
  await test('reverse input during exit keeps the latest intent', async () => {
    key(1); await delay(40); key(-1)
    await delay(1100); await settledAt('商')
  })
  await test('drag interrupts entry without stuck opacity or lock', async () => {
    key(1)
    await until(()=>page().dataset.phase==='entering','Never entered incoming phase')
    await swipe(-50); await settledAt('战国')
  })
  await test('drag interrupts exit before committing the old direction', async () => {
    key(1); await delay(40)
    await swipe(100); await settledAt('春秋')
  })
  await test('flip reverses and page switch resets to the decorated back', async () => {
    pointer('pointerdown',350); pointer('pointerup',350)
    await delay(750)
    if(mirror().tagName==='CANVAS' && window.__mirrorProbe.rendererInfo) assert(Math.abs(window.__mirrorProbe.rendererInfo.flip-Math.PI)<.02,'Mirror did not flip')
    else assert(getComputedStyle(document.querySelector('.mirror-flip')).transform!=='none','Fallback did not flip')
    pointer('pointerdown',350); pointer('pointerup',350)
    await delay(100)
    key(1); await settledAt('战国')
    await delay(750)
    if(mirror().tagName==='CANVAS' && window.__mirrorProbe.rendererInfo) assert(Math.abs(window.__mirrorProbe.rendererInfo.flip)<.02,'New mirror retained old flip')
  })
  await test('reference sheet blocks background wheel and keyboard navigation', async () => {
    document.querySelector('.ref-entry').click()
    await until(()=>document.querySelector('.sheet'),'Reference sheet did not open')
    key(1)
    window.dispatchEvent(new WheelEvent('wheel',{deltaY:120,bubbles:true}))
    await delay(500)
    assert(dynasty()==='战国','Sheet scrolled the background page')
    document.querySelector('.sheet-close').click()
    await until(()=>!document.querySelector('.sheet'),'Reference sheet did not close')
  })
  await test('hotspots return after navigation and open their information card', async () => {
    await until(()=>document.querySelector('.hotspot'),'Hotspot did not return',5000)
    document.querySelector('.hotspot').click()
    await until(()=>document.querySelector('.sheet'),'Hotspot card did not open')
    document.querySelector('.sheet-close').click()
    await until(()=>!document.querySelector('.sheet'),'Hotspot card did not close')
  })
} catch { /* Preserve the first failing scenario and its exact message. */ }
const summary = {verdict:results.length===11 && results.every(r=>r.pass)?'PASS':'FAIL',results,finalDynasty:dynasty(),finalPhase:page().dataset.phase,renderer:window.__mirrorProbe.rendererInfo}
status.textContent=JSON.stringify(summary,null,2)
const flags = ['fallback','slow-art','fail-art'].filter(flag=>new URLSearchParams(location.search).has(flag))
await fetch('/__perf-results',{method:'POST',body:JSON.stringify({variant:['interactions',...flags].join('-'),viewport:[innerWidth,innerHeight],summary})})
