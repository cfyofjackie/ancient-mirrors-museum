import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import CalibrateMode from './components/CalibrateMode'

// ?calibrate 进入热点标定开发模式（换素材后取百分比坐标用）
const calibrate = new URLSearchParams(window.location.search).has('calibrate')

createRoot(document.getElementById('root')!).render(
  calibrate ? (
    <CalibrateMode />
  ) : (
    <StrictMode>
      <App />
    </StrictMode>
  ),
)
