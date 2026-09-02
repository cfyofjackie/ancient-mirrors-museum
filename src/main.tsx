import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import CalibrateMode from './components/CalibrateMode'

// ?calibrate 进入热点标定开发模式（换素材后取百分比坐标用）
// ?poc3d 进入立体化 POC（决策 D9 验证，动态 import 避免污染主包）
const params = new URLSearchParams(window.location.search)
const calibrate = params.has('calibrate')

const root = createRoot(document.getElementById('root')!)
if (calibrate) {
  root.render(<CalibrateMode />)
} else if (params.has('poc3d')) {
  import('./components/Mirror3DPoc').then(({ default: Mirror3DPoc }) => {
    root.render(<Mirror3DPoc />)
  })
} else {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
