/**
 * 小红书包体兼容 polyfill + 可视错误上报。
 *
 * 容器（尤其 PC 模拟器 / 旧内核 WebView，基线 ~Android 8.1 / Chrome 61）可能缺失部分
 * 运行时 API，esbuild 只降语法不补这些；这里「缺才补」，现代环境完全无副作用。
 * 同时挂 window.onerror / unhandledrejection，把运行时/初始化错误渲染到屏幕上，
 * 便于真机扫码后截图定位（而不是只看到一片黑）。
 */
const w = window as any

function guard(name: string, init: () => void) {
  try {
    if (typeof w[name] === 'undefined') init()
  } catch {
    /* 忽略，不影响主逻辑 */
  }
}

// queueMicrotask（Chrome 71+）
guard('queueMicrotask', () => {
  w.queueMicrotask = (fn: () => void) => Promise.resolve().then(fn)
})

// ResizeObserver（Chrome 64+）：旧内核给一个最小可用回调实现（缺回调不致命）
guard('ResizeObserver', () => {
  w.ResizeObserver = class {
    cb: any
    targets = new Set()
    frame = 0
    constructor(cb: any) {
      this.cb = cb
    }
    observe(el: any) {
      this.targets.add(el)
      if (!this.frame)
        this.frame = w.requestAnimationFrame(() => {
          this.frame = 0
          this.cb(
            [...this.targets].map((t: any) => ({
              target: t,
              contentRect: t.getBoundingClientRect(),
              borderBoxSize: [{ inlineSize: 0, blockSize: 0 }],
            })),
          )
        })
    }
    unobserve(el: any) {
      this.targets.delete(el)
    }
    disconnect() {
      this.targets.clear()
    }
  }
})

// AbortController（Chrome 66+）
guard('AbortController', () => {
  w.AbortController = class {
    signal: any
    constructor() {
      this.signal = { aborted: false, listeners: [] }
    }
    abort() {
      this.signal.aborted = true
      this.signal.listeners.forEach((f: any) => f())
    }
  }
})

// Promise.prototype.finally（Chrome 63+）
if (!(Promise.prototype as any).finally) {
  Object.defineProperty(Promise.prototype, 'finally', {
    value: function (this: any, onFinally?: any) {
      const C = this.constructor
      return this.then(
        (v: any) => C.resolve(typeof onFinally === 'function' ? onFinally() : onFinally).then(() => v),
        (e: any) => C.resolve(typeof onFinally === 'function' ? onFinally() : onFinally).then(() => {
          throw e
        }),
      )
    },
  })
}

// Array.prototype.flat / flatMap（Chrome 69+）
if (!(Array.prototype as any).flat) {
  Object.defineProperty(Array.prototype, 'flat', {
    value: function (this: any, d: any = 1) {
      const arr = this
      return d > 0
        ? arr.reduce((acc: any, v: any) => acc.concat(Array.isArray(v) ? (Array.prototype.flat as any).call(v, d - 1) : v), [])
        : arr.slice()
    },
  })
}

// Object.fromEntries（Chrome 73+）
if (!(Object as any).fromEntries) {
  Object.defineProperty(Object, 'fromEntries', {
    value: (entries: any) => {
      const obj: any = {}
      for (const [k, v] of entries) obj[k] = v
      return obj
    },
  })
}

// String.prototype.replaceAll（Chrome 85+）
if (!(String.prototype as any).replaceAll) {
  Object.defineProperty(String.prototype, 'replaceAll', {
    value: function (this: any, pat: any, repl: any) {
      const s = String(this)
      const re =
        pat instanceof RegExp
          ? new RegExp(pat.source, 'g' + pat.flags.replace('g', ''))
          : new RegExp(String(pat).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')
      return s.replace(re, repl)
    },
  })
}

// ---- 可视错误上报：任何运行时/初始化错误都渲染出来，便于截图 ----
function showError(msg: string) {
  try {
    let el = document.getElementById('__app_error__') as HTMLDivElement | null
    if (!el) {
      el = document.createElement('div')
      el.id = '__app_error__'
      el.style.cssText =
        'position:fixed;inset:0;z-index:99999;padding:24px;background:#12141a;color:#ff6b6b;' +
        'font:13px/1.7 ui-monospace,Menlo,Consolas,monospace;overflow:auto;white-space:pre-wrap;text-align:left;'
      document.body.appendChild(el)
    }
    el.textContent = (el.textContent ? el.textContent + '\n' : '') + String(msg)
  } catch {
    /* ignore */
  }
}
window.addEventListener('error', (e) => showError('ERROR: ' + (e.message || String(e.error))))
window.addEventListener('unhandledrejection', (e) =>
  showError('REJECTION: ' + String((e.reason && (e.reason.message || e.reason)) || e.reason)),
)
