import shangUrl from '../textures/reflections/shang-figure.webp'
import chunqiuUrl from '../textures/reflections/chunqiu-figure.webp'
import zhanguoUrl from '../textures/reflections/zhanguo-woman.webp'
import hanUrl from '../textures/reflections/han-attendant.webp'
import suiUrl from '../textures/reflections/sui-donor.webp'
import tangUrl from '../textures/reflections/tang-woman.webp'
import songUrl from '../textures/reflections/song-lady.webp'
import yuanUrl from '../textures/reflections/yuan-court-lady.webp'
import mingUrl from '../textures/reflections/ming-lady.webp'

export type ReflectionProfile = {
  imageUrl: string
  label: string
  opacity: number
  scale?: number
  offsetY?: number
}

/**
 * 史料越早，人物越抽象、显影越淡。详细视觉依据与授权边界见
 * docs/dynasty-reflection-sources-2026-09-09.md。
 */
export const REFLECTIONS: Record<string, ReflectionProfile> = {
  shang: { imageUrl: shangUrl, label: '商代人物意象', opacity: 0.42, scale: 0.93 },
  chunqiu: { imageUrl: chunqiuUrl, label: '春秋人物意象', opacity: 0.38, scale: 0.94 },
  zhanguo: { imageUrl: zhanguoUrl, label: '战国楚地女子意象', opacity: 0.46, scale: 0.92 },
  han: { imageUrl: hanUrl, label: '西汉女子意象', opacity: 0.52, scale: 0.92 },
  sui: { imageUrl: suiUrl, label: '隋代女供养人意象', opacity: 0.54, scale: 0.9 },
  tang: { imageUrl: tangUrl, label: '唐代仕女意象', opacity: 0.6 },
  song: { imageUrl: songUrl, label: '宋代女子意象', opacity: 0.55, scale: 1.02, offsetY: 2 },
  yuan: { imageUrl: yuanUrl, label: '元代皇室女性意象', opacity: 0.54, scale: 0.84, offsetY: 2 },
  ming: { imageUrl: mingUrl, label: '晚明仕女意象', opacity: 0.57, scale: 0.94 },
}
