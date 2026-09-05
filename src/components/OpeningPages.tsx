import type { Ref } from 'react'
import mojingUrl from '../textures/opening/mojing.webp'
import shinvUrl from '../textures/opening/shinv.webp'
import './OpeningPages.css'

interface OpeningPagesProps {
  /** 当前应显示的序厅页（1 磨镜页 / 2 仕女页） */
  page: 1 | 2
  /** 当前序列项是否为序厅页（非序厅页整体隐藏，不再拦截指针） */
  active: boolean
  /** 三幕交接第一幕：内容淡出让位，画中镜桥接层单独放大 */
  yielding: boolean
  /** 仕女页画框槽位 ref：交接时刻测量画中镜裁切位置 */
  slotRef: Ref<HTMLDivElement>
}

/**
 * 序厅两页的视觉（原 OpeningOverlay 两页视觉平移入主翻页序列）：
 * 第 1 页《磨镜图》+「以铜为镜」，第 2 页《对镜仕女图》+「可以正衣冠」。
 * 纯 DOM（无 WebGL 也正常显示），挂在主序列 .page 位移容器内，
 * 手势全部由 usePageNavigation 的 window 级监听统一处理，本组件不持有任何监听/motion value。
 */
export default function OpeningPages({ page, active, yielding, slotRef }: OpeningPagesProps) {
  return (
    <div
      className={`opening-layer${active ? '' : ' is-hidden'}${yielding ? ' is-yielding' : ''}`}
      aria-hidden="true"
    >
      {/* 第 1 页：磨镜页 */}
      <section className={`opening-page${page === 1 ? ' is-current' : ''}`}>
        <div className="painting-slot">
          <img className="opening-img" src={mojingUrl} alt="" draggable={false} />
        </div>
        <div className="opening-copy">
          <p className="opening-line1">以铜为镜</p>
        </div>
        <p className="opening-hint">向上滑动，开始观展</p>
      </section>

      {/* 第 2 页：对镜页（painting-slot 供交接时刻测量画中镜裁切位置） */}
      <section className={`opening-page${page === 2 ? ' is-current' : ''}`}>
        <div className="painting-slot" ref={slotRef}>
          <img className="opening-img" src={shinvUrl} alt="" draggable={false} />
        </div>
        <div className="opening-copy">
          <p className="opening-line2">可以正衣冠</p>
        </div>
        <p className="opening-hint">向上滑动，进入展厅</p>
      </section>
    </div>
  )
}
