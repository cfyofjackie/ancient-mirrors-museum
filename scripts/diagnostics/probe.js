(() => {
  const query = new URLSearchParams(location.search)
  const variant = query.get('perf') || 'baseline'
  const samples = []
  const timings = {}
  const longTasks = []
  let collecting = query.has('perf')
  const probe = window.__mirrorProbe = {
    record(name, ms) { if (collecting) (timings[name] ||= []).push({ t: performance.now(), ms }) },
    measure(name, fn) { const t = performance.now(); const value = fn(); this.record(name, performance.now() - t); return value },
  }
  if (query.has('fallback')) {
    const original = HTMLCanvasElement.prototype.getContext
    HTMLCanvasElement.prototype.getContext = function(type, ...args) { return type.startsWith('webgl') ? null : original.call(this, type, ...args) }
  }
  if (query.has('interactions')) {
    addEventListener('load', () => import('/__interactions.js'))
    return
  }
  if (!query.has('perf')) return
  const observer = new PerformanceObserver(list => longTasks.push(...list.getEntries().map(e => ({t:e.startTime,ms:e.duration}))))
  observer.observe({ type:'longtask', buffered:true })
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
  const quantile = (xs, q) => [...xs].sort((a,b)=>a-b)[Math.min(xs.length-1, Math.floor(xs.length*q))] || 0
  const summarize = xs => ({count:xs.length,p50:+quantile(xs,.5).toFixed(2),p95:+quantile(xs,.95).toFixed(2),max:+Math.max(0,...xs).toFixed(2)})
  addEventListener('load', async () => {
    const status = document.createElement('pre')
    status.id = 'perf-status'
    status.style.cssText = 'position:fixed;top:0;left:0;z-index:10000;background:#000b;color:white;font:11px monospace;pointer-events:none;max-width:100vw;white-space:pre-wrap'
    status.textContent = 'Performance probe: waiting for textures and fonts…'
    document.body.append(status)
    await document.fonts.ready
    await delay(3500)
    // 序厅两页已并入翻页序列（index 0/1）：perf 用例先通过三幕交接进入主展厅（商镜）再开始计切换
    for (let i = 0; i < 3 && document.querySelector('.page')?.dataset.kind === 'opening'; i++) {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }))
      await delay(2200)
    }
    if (variant === 'no-grain') document.body.style.backgroundImage = 'none'
    if (variant === 'no-tint') document.querySelector('.bg-tint').style.display = 'none'
    const start = performance.now()
    let active = true
    const frame = t => {
      if (!active) return
      const page = document.querySelector('.page')
      const canvas = document.querySelector('.mirror-3d-wrap canvas')
      const bounds = page.getBoundingClientRect()
      const matrix = new DOMMatrixReadOnly(getComputedStyle(page).transform)
      const mirror = document.querySelector('.mirror-3d-wrap').getBoundingClientRect()
      samples.push({t, y:matrix.m42, opacity:Number(getComputedStyle(page).opacity), phase:page.dataset.phase, top:bounds.top,bottom:bounds.bottom, mirrorTop:mirror.top,mirrorBottom:mirror.bottom, dynasty:document.querySelector('.dynasty-name').textContent, renderer:probe.rendererInfo, canvas:canvas ? [canvas.width,canvas.height] : null})
      requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
    await delay(1000)
    const inputs = []
    for (let i=0;i<8;i++) {
      status.textContent = `Performance probe ${variant}: switch ${i+1}/8`
      inputs.push(performance.now())
      if (variant === 'short-flick' || variant === 'long-swipe') {
        const target = document.querySelector('.mirror-3d-wrap canvas, .mirror-face')
        const distance = variant === 'short-flick' ? 50 : 100
        target.dispatchEvent(new PointerEvent('pointerdown',{clientX:innerWidth/2,clientY:350,pointerId:1,pointerType:'touch',isPrimary:true,bubbles:true}))
        await delay(80)
        target.dispatchEvent(new PointerEvent('pointermove',{clientX:innerWidth/2,clientY:350-distance,pointerId:1,pointerType:'touch',isPrimary:true,bubbles:true}))
        target.dispatchEvent(new PointerEvent('pointerup',{clientX:innerWidth/2,clientY:350-distance,pointerId:1,pointerType:'touch',isPrimary:true,bubbles:true}))
      } else window.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true}))
      await delay(1100)
    }
    active = false
    const changes = []
    for(let i=1;i<samples.length;i++) {
      const a=samples[i-1],b=samples[i]
      if(a.dynasty!==b.dynasty || Math.abs(b.y-a.y)>innerHeight*.75) changes.push({from:a,to:b,jump:Math.round(b.y-a.y),oldContentVisible:a.opacity>0.05 && b.opacity>0.05 && a.top<innerHeight && a.bottom>0})
    }
    const gaps = samples.slice(1).map((s,i)=>s.t-samples[i].t)
    const switchGaps = samples.slice(1).filter(s=>inputs.some(t=>s.t>=t && s.t<t+700)).map(s=>s.t-samples[samples.indexOf(s)-1].t)
    const completedSwitches = changes.filter(c=>c.from.dynasty!==c.to.dynasty).length
    const teleport = changes.some(c=>c.oldContentVisible && (c.from.dynasty!==c.to.dynasty || Math.abs(c.jump)>innerHeight*.75))
    const verdict = variant === 'short-flick' && completedSwitches === 0
      ? 'FAIL: all eight fast short swipes snapped back without switching'
      : completedSwitches < 8 ? 'INCONCLUSIVE: fewer than eight switches completed'
      : teleport ? 'FAIL: visible content teleports during page switch' : 'PASS: no visible content teleport'
    const summary = {
      verdict,
      completedSwitches,
      frames:summarize(gaps),switchFrames:summarize(switchGaps),framesOver50ms:gaps.filter(n=>n>50).length,
      changes:changes.map(c=>({from:c.from.dynasty,to:c.to.dynasty,jump:c.jump,oldBottom:Math.round(c.from.bottom),oldContentVisible:c.oldContentVisible})),
      timings:Object.fromEntries(Object.entries(timings).map(([k,v])=>[k,summarize(v.filter(s=>s.t>=start).map(s=>s.ms))])),
      idleRenders:(timings.render || []).filter(s=>s.t>=start && s.t<inputs[0]).length,
      finalPhase:document.querySelector('.page').dataset.phase,
      longTasks:longTasks.filter(t=>t.t>=start),renderer:probe.rendererInfo,
      startup:{timings:Object.fromEntries(Object.entries(timings).map(([k,v])=>[k,summarize(v.filter(s=>s.t<start).map(s=>s.ms))])),longTasks:longTasks.filter(t=>t.t<start)},
    }
    const result = {variant,viewport:[innerWidth,innerHeight],dpr:devicePixelRatio,visibility:document.visibilityState,userAgent:navigator.userAgent,summary,samples,inputs,resources:performance.getEntriesByType('resource').map(r=>({name:r.name,start:r.startTime,duration:r.duration,bytes:r.transferSize}))}
    status.textContent=JSON.stringify(summary,null,2)
    collecting = false
    observer.disconnect()
    await fetch('/__perf-results',{method:'POST',body:JSON.stringify(result)})
  })
})()
