// Opt-in local probe. This file is never imported by the application build.
const selectors = ['html', 'body', '#root', '.app', '.app-header', '.page', '.mirror-stage', '.mirror-slide', '.mirror-3d-wrap', 'canvas', '.app-footer', '.dynasty-name', '.mirror-name', '.mirror-desc', '.hint']
const properties = ['display', 'height', 'min-height', 'max-height', 'flex', 'flex-basis', 'flex-shrink', 'grid-template-rows', 'container-type', 'font-size', 'line-height', 'text-size-adjust', '-webkit-text-size-adjust', 'transform', 'overflow']
let sequence = 0
let timer
async function capture(reason) {
  // Loading and intentional page transitions are not idle-layout failures.
  const phase = document.querySelector('.page')?.dataset.phase
  if (phase !== 'idle' || !document.querySelector('.app-footer')) return
  const viewport = window.visualViewport
  const nodes = selectors.map(selector => {
    const element = document.querySelector(selector)
    if (!element) return { selector }
    const style = getComputedStyle(element)
    return { selector, rect: element.getBoundingClientRect().toJSON(), style: Object.fromEntries(properties.map(name => [name, style.getPropertyValue(name)])), scrollHeight: element.scrollHeight }
  })
  const visibleBottom = (viewport?.offsetTop || 0) + (viewport?.height || innerHeight)
  const footer = document.querySelector('.app-footer')?.getBoundingClientRect()
  const payload = {
    variant: new URLSearchParams(location.search).get('label') || 'mobile-layout', reason, sequence: ++sequence,
    userAgent: navigator.userAgent, viewport: [innerWidth, innerHeight], dpr: devicePixelRatio,
    visualViewport: viewport && { width: viewport.width, height: viewport.height, scale: viewport.scale, offsetTop: viewport.offsetTop },
    supports: { dvh: CSS.supports('height', '100dvh'), cqh: CSS.supports('width', '1cqh'), container: CSS.supports('container-type', 'size') },
    phase, nodes,
    assets: Array.from(document.querySelectorAll('script[src], link[rel="stylesheet"]')).map(element => element.getAttribute('src') || element.getAttribute('href')),
    summary: { verdict: footer && footer.bottom <= visibleBottom + 1 && footer.top >= 0 ? 'PASS' : 'FAIL', footerBottom: footer?.bottom, visibleBottom },
  }
  await fetch('/__layout-result', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
  document.documentElement.dataset.layoutCheck = payload.summary.verdict
  return payload
}
function schedule(reason) {
  clearTimeout(timer)
  timer = setTimeout(() => capture(reason), 1200)
}
addEventListener('load', async () => {
  await document.fonts.ready
  schedule('load')
})
addEventListener('pageshow', event => { if (event.persisted) schedule('page-restored') })
addEventListener('resize', () => schedule('resize'))
visualViewport?.addEventListener('resize', () => schedule('visual-resize'))
addEventListener('pointerup', () => schedule('gesture'))
addEventListener('keyup', () => schedule('keyboard'))
