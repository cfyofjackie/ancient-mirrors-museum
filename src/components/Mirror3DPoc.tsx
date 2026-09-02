import { useState } from 'react'
import mirrors from '../data/mirrors'
import Mirror3D from './Mirror3D'

const LABELS: Record<string, string> = { han: '汉', tang: '唐', song: '宋', ming: '明' }

/**
 * 立体化 POC（决策 D9）：四朝铜镜 × 两种渲染模式对比。
 * 访问 ?poc3d 进入。复用主页面组件 Mirror3D（非受控模式：点击自翻）。
 */
export default function Mirror3DPoc() {
  const [index, setIndex] = useState(0)
  const [mode, setMode] = useState<'pbr' | 'toon'>('pbr')
  const mirror = mirrors[index]

  return (
    <div className="poc3d-root">
      <h1 className="poc3d-title">立体化 POC · 四朝铜镜</h1>
      <div className="poc3d-controls">
        <div className="poc3d-tabs">
          {mirrors.map((m, i) => (
            <button key={m.id} type="button" className={i === index ? 'active' : undefined} onClick={() => setIndex(i)}>
              {LABELS[m.id] ?? m.id}
            </button>
          ))}
        </div>
        <div className="poc3d-tabs">
          <button type="button" className={mode === 'pbr' ? 'active' : undefined} onClick={() => setMode('pbr')}>
            写实 PBR
          </button>
          <button type="button" className={mode === 'toon' ? 'active' : undefined} onClick={() => setMode('toon')}>
            风格化
          </button>
        </div>
      </div>
      {mirror.art3d ? (
        <Mirror3D key={`${mirror.id}-${mode}`} art={mirror.art3d} mode={mode} className="poc3d-canvas" />
      ) : (
        <p className="poc3d-error">该镜子暂无 3D 素材</p>
      )}
      <p className="poc3d-hint">
        {LABELS[mirror.id]} · {mirror.name} · 点击铜镜翻面 · 移动指针让光线流动
      </p>
    </div>
  )
}
