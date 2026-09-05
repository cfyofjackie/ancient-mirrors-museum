import mojingUrl from '../textures/opening/mojing.webp'
import shinvUrl from '../textures/opening/shinv.webp'
import './OpeningPages.css'

interface OpeningPagesProps {
  /** 当前应显示的序厅页（1 磨镜页 / 2 仕女页） */
  page: 1 | 2
  /** 当前序列项是否为序厅页（非序厅页整体隐藏，不再拦截指针） */
  active: boolean
}

/**
 * 序厅两页的视觉——展览扉页化（原「一张居中小图 + 一行字」重排）：
 * 第 1 页《磨镜图》= 展览扉页：标题「照见千年 / 中国古代铜镜展」+ 序言三行 +
 *   画 cover 铺满下半部（渐变遮罩融入背景），页面全屏不透明深色底（主展厅商镜不透出）。
 * 第 2 页《对镜仕女图》= 展览前言：画大幅铺陈 + 前言两行 +「入展」入口指示。
 * 纯 DOM（无 WebGL 也正常显示），挂在主序列 .page 位移容器内，
 * 手势全部由 usePageNavigation 的 window 级监听统一处理，本组件不持有任何监听/motion value。
 */
export default function OpeningPages({ page, active }: OpeningPagesProps) {
  return (
    <div className={`opening-layer${active ? '' : ' is-hidden'}`} aria-hidden="true">
      {/* 第 1 页：展览扉页（磨镜页） */}
      <section className={`opening-page opening-title-page${page === 1 ? ' is-current' : ''}`}>
        <div className="title-page-head">
          <h1 className="title-page-main">照见千年</h1>
          <p className="title-page-sub">中国古代铜镜展</p>
        </div>
        <div className="title-page-preface">
          <p>一面铜镜，</p>
          <p>在反复磨拭中，</p>
          <p>渐渐有了照人的光。</p>
        </div>
        <div className="title-page-painting">
          <img className="opening-img-cover" src={mojingUrl} alt="" draggable={false} />
        </div>
        <p className="opening-caption">磨镜图</p>
        <p className="opening-hint">向上滑动，开始观展</p>
      </section>

      {/* 第 2 页：展览前言（仕女页） */}
      <section className={`opening-page opening-preface-page${page === 2 ? ' is-current' : ''}`}>
        <div className="painting-slot">
          <img className="opening-img" src={shinvUrl} alt="" draggable={false} />
        </div>
        <div className="preface-copy">
          <p>镜中，是一时的衣冠；</p>
          <p>镜背，是千年的纹样。</p>
        </div>
        <p className="opening-caption">对镜仕女图</p>
        <p className="opening-entry">
          入展
          <span className="entry-chevron" />
        </p>
      </section>
    </div>
  )
}
