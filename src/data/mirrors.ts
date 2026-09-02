/**
 * 铜镜内容配置（SLC 第四节：所有文字、图片路径、热点位置都从本文件读取，不硬编码在组件里）
 *
 * - hotspot 的 x/y 为相对镜面素材画布的百分比坐标（0–100），换正式素材后只需在此标定微调
 * - 图片路径相对 publicDir（assets/），即 URL 为 base + 'mirrors/<朝代>/front|back.webp'
 * - reference 为史实资料预留位（M3）：imageUrl 缺省时 UI 显示占位块，后续补充馆藏图即可
 */

export interface Hotspot {
  /** 相对画布宽度百分比 0–100 */
  x: number
  /** 相对画布高度百分比 0–100 */
  y: number
  title: string
  description: string
}

/** 史实资料 / 馆藏参考（预留结构；imageUrl 为空时前端渲染「待补充」占位块） */
export interface Reference {
  title: string
  detail: string
  imageUrl?: string
  source?: string
  sourceUrl?: string
}

/** 3D 素材（决策 D9 管线产物：`npm run normal` 从平涂图生成） */
export type Shape3D =
  | { type: 'circle' }
  | { type: 'polygon'; sides: number }
  | { type: 'lobed'; lobes: number; depth: number }

export interface Art3D {
  /** 平涂彩图（表面色） */
  flat: string
  /** 法线贴图（凹凸起伏） */
  normal: string
  /** 镜体轮廓 */
  shape: Shape3D
}

export interface Mirror {
  /** 目录名 / 稳定 id，如 'han' */
  id: string
  dynasty: string
  name: string
  shortDescription: string
  /** 该朝代的主题色（极低透明度背景微染，SLC 第二节：背景可有非常轻微的颜色变化） */
  tint: string
  frontImage: string
  backImage: string
  /** 展示镜背时的热点（SLC：热点设在背面） */
  hotspots: Hotspot[]
  /** 史实资料（M3 新增，可为空表示尚未整理） */
  reference?: Reference
  /** 3D 渲染素材（D9）；缺省时回退 CSS 平面翻面 */
  art3d?: Art3D
}

const mirrors: Mirror[] = [
  {
    id: 'han',
    dynasty: '汉',
    name: '四神博局纹镜',
    shortDescription:
      '汉代铜镜规矩方正，博局纹与四神纹样讲求对称，映照出汉人眼中的天地秩序。',
    tint: '#8a6a4f',
    frontImage: 'mirrors/han/front.webp',
    backImage: 'mirrors/han/back.webp',
    hotspots: [
      {
        x: 50,
        y: 50,
        title: '中央镜钮',
        description: '镜钮居中，可穿绶带持握或悬挂，是铜镜最稳定的结构核心。',
      },
      {
        x: 50,
        y: 26,
        title: '博局纹',
        description:
          '博局纹又称 TLV 纹，源自六博棋盘，与四神方位相配，寓意法天象地。',
      },
    ],
    reference: {
      title: '四神博局式青铜镜',
      detail:
        '东汉至西汉末（公元 9–100 年），青铜，直径 19 厘米。镜背是一幅宇宙图式：同心圆环与云气纹象征天，钮座方框象征地，四神居天地之间。',
      imageUrl: 'references/han.webp',
      source: '克利夫兰艺术博物馆（CC0）',
      sourceUrl: 'https://clevelandart.org/art/1995.301',
    },
    art3d: { flat: 'poc3d/han/sishou.flat.webp', normal: 'poc3d/han/sishou.normal.webp', shape: { type: 'circle' } },
  },
  {
    id: 'tang',
    dynasty: '唐',
    name: '海兽葡萄纹镜',
    shortDescription:
      '唐代铜镜装饰华丽奔放，海兽与葡萄蔓枝交织成饱满的浮雕，映出盛世的雍容气度。',
    tint: '#a8823f',
    frontImage: 'mirrors/tang/front.webp',
    backImage: 'mirrors/tang/back.webp',
    hotspots: [
      {
        x: 50,
        y: 50,
        title: '中央镜钮',
        description: '高浮雕纹样在镜钮四周层层铺开，唐镜以厚重的手感与华贵的纹饰著称。',
      },
      {
        x: 44,
        y: 36,
        title: '海兽葡萄纹',
        description:
          '葡萄蔓枝缠绕、瑞兽穿行其间，是唐代铜镜最具代表性的纹饰组合。',
      },
    ],
    reference: {
      title: '瑞兽葡萄镜',
      detail:
        '唐中期（7 世纪中叶），青铜，直径仅 8.2 厘米。瑞兽与葡萄蔓枝以高浮雕在方寸之间层层铺展，是盛唐华丽审美的缩影。',
      imageUrl: 'references/tang.webp',
      source: '克利夫兰艺术博物馆（CC0）',
      sourceUrl: 'https://clevelandart.org/art/1995.356',
    },
    art3d: { flat: 'poc3d/tang/octagon.flat.webp', normal: 'poc3d/tang/octagon.normal.webp', shape: { type: 'polygon', sides: 8 } },
  },
  {
    id: 'song',
    dynasty: '宋',
    name: '湖州石家铭文镜',
    shortDescription:
      '宋代铜镜趋于素雅，纹饰退位给铭文，一句「湖州真石家念二叔照子」，透出市井商业的烟火气。',
    tint: '#6f7a72',
    frontImage: 'mirrors/song/front.webp',
    backImage: 'mirrors/song/back.webp',
    hotspots: [
      {
        x: 50,
        y: 30,
        title: '商标铭文',
        description:
          '铸镜匠号的商标式铭文是宋镜的标志——制镜成了品牌生意，审美从神怪纹样转向务实素雅。',
      },
    ],
    reference: {
      title: '湖州石家镜 · 馆藏实物图待补',
      detail:
        '宋代湖州石家铸镜盛极一时，镜背多铸「湖州真石家念二叔照子」等商标式铭文，是古代早期品牌意识的实物例证。',
    },
    art3d: { flat: 'poc3d/song/kuihua.flat.webp', normal: 'poc3d/song/kuihua.normal.webp', shape: { type: 'lobed', lobes: 8, depth: 0.11 } },
  },
  {
    id: 'ming',
    dynasty: '明',
    name: '五子登科镜',
    shortDescription:
      '明代铜镜仿古与吉祥铭文并行，一句「五子登科」，照见的是寻常人家的朴素祈愿。',
    tint: '#7d5450',
    frontImage: 'mirrors/ming/front.webp',
    backImage: 'mirrors/ming/back.webp',
    hotspots: [
      {
        x: 50,
        y: 50,
        title: '中央镜钮',
        description: '明镜钮制多承古法，形制上可见对汉唐旧式的追摹。',
      },
      {
        x: 50,
        y: 28,
        title: '吉祥铭文',
        description:
          '「五子登科」四字直白吉庆，铜镜从文人之雅走向寻常人家的祝福。',
      },
    ],
    reference: {
      title: '五子登科镜 · 馆藏实物图待补',
      detail:
        '「五子登科」吉祥铭文镜流行于明代，多为圆形圆钮，铭文环钮而铸，寄托科举登第、多子多福的朴素愿望。',
    },
    art3d: { flat: 'poc3d/ming/wuzidengke.flat.webp', normal: 'poc3d/ming/wuzidengke.normal.webp', shape: { type: 'circle' } },
  },
]

export default mirrors
