import { Component, StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './polyfills' // 必须最先：兜住旧内核缺 API + 把运行时错误渲染到屏幕
import './index.css'
import App from './App'
import CalibrateMode from './components/CalibrateMode'
import { startProbe } from './probe' // 临时：性能诊断 HUD（定位后删除）

/** 渲染错误边界：出错时在屏幕上展示错误信息（而非黑屏），便于扫码后定位。 */
class ErrorBoundary extends Component<{ children: ReactNode }, { err: Error | null }> {
  state = { err: null as Error | null }
  static getDerivedStateFromError(err: Error) {
    return { err }
  }
  componentDidCatch(err: Error) {
    try {
      const el = document.createElement('div')
      el.style.cssText =
        'position:fixed;inset:0;z-index:99999;padding:24px;background:#12141a;color:#ff6b6b;' +
        'font:13px/1.7 ui-monospace,Menlo,Consolas,monospace;overflow:auto;white-space:pre-wrap;text-align:left;'
      el.textContent = 'RENDER ERROR:\n' + (err.stack || err.message)
      document.body.appendChild(el)
    } catch {
      /* ignore */
    }
  }
  render() {
    return this.state.err ? null : this.props.children
  }
}

// ?calibrate 进入热点标定开发模式（换素材后取百分比坐标用）
// ?poc3d 进入立体化 POC（决策 D9 验证，动态 import 避免污染主包）
const params = new URLSearchParams(window.location.search)
const calibrate = params.has('calibrate')

const render = (ui: ReactNode) =>
  createRoot(document.getElementById('root')!).render(<ErrorBoundary>{ui}</ErrorBoundary>)

// 兜底：若脚本仍在 #root 解析前执行（defer 已规避，但再防一手），等 DOM 就绪再渲染
function start() {
  const rootEl = document.getElementById('root')
  if (!rootEl) {
    document.addEventListener('DOMContentLoaded', start)
    return
  }
  if (calibrate) {
    render(<CalibrateMode />)
  } else if (params.has('poc3d')) {
    import('./components/Mirror3DPoc').then(({ default: Mirror3DPoc }) => {
      render(<Mirror3DPoc />)
    })
  } else {
    startProbe() // 临时性能诊断 HUD
    render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  }
}
start()
