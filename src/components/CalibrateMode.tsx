import { useCallback, useEffect, useState } from 'react'
import mirrors from '../data/mirrors'
import type { Hotspot } from '../data/mirrors'

/**
 * 热点标定工具（开发模式，?calibrate 进入）：
 * 换新美术素材后，在镜背图上点选热点位置，输出百分比坐标 JSON，
 * 复制回 src/data/mirrors.ts 的 hotspots 字段即可。
 */
export default function CalibrateMode() {
  const [index, setIndex] = useState(0)
  const [points, setPoints] = useState<Hotspot[]>([])
  const [copied, setCopied] = useState(false)
  const mirror = mirrors[index]

  // 切换朝代时载入该镜现有热点作为起点（可增删）
  useEffect(() => {
    setPoints(mirrors[index].hotspots.map((h) => ({ ...h })))
  }, [index])

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Number((((e.clientX - rect.left) / rect.width) * 100).toFixed(1))
    const y = Number((((e.clientY - rect.top) / rect.height) * 100).toFixed(1))
    setPoints((p) => [...p, { x, y, title: `热点${p.length + 1}`, description: '待填写' }])
  }, [])

  const removePoint = (i: number) => setPoints((p) => p.filter((_, idx) => idx !== i))

  const json = JSON.stringify(
    points.map((p) => ({ x: p.x, y: p.y, title: p.title, description: p.description })),
    null,
    2,
  )

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(json)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      /* 沙箱/权限受限时手动选择文本复制 */
    }
  }

  return (
    <div className="cal-root">
      <header className="cal-bar">
        <div className="cal-tabs">
          {mirrors.map((m, i) => (
            <button
              key={m.id}
              type="button"
              className={i === index ? 'active' : undefined}
              onClick={() => setIndex(i)}
            >
              {m.dynasty}
            </button>
          ))}
        </div>
        <span className="cal-hint">点击图片加点 · 点圆点删除</span>
        <button type="button" className="cal-copy" onClick={copy}>
          {copied ? '已复制 ✓' : '复制 JSON'}
        </button>
      </header>

      <div className="cal-img-wrap" onClick={handleClick}>
        <img src={mirror.backImage} alt={mirror.name} draggable={false} />
        {points.map((p, i) => (
          <button
            key={`${p.x},${p.y},${i}`}
            type="button"
            className="cal-point"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            onClick={(e) => {
              e.stopPropagation()
              removePoint(i)
            }}
            title={`${p.title}（点击删除）`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <pre className="cal-json">
        {`// ${mirror.dynasty} · ${mirror.name} → mirrors.ts hotspots\n${json}`}
      </pre>
    </div>
  )
}
