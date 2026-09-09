import shangDesktop from '../textures/tableaux/shang-scroll.webp'
import shangMobile from '../textures/tableaux/shang-scroll-mobile.webp'
import chunqiuDesktop from '../textures/tableaux/chunqiu-scroll.webp'
import chunqiuMobile from '../textures/tableaux/chunqiu-scroll-mobile.webp'
import zhanguoDesktop from '../textures/tableaux/zhanguo-scroll.webp'
import zhanguoMobile from '../textures/tableaux/zhanguo-scroll-mobile.webp'
import hanDesktop from '../textures/tableaux/han-scroll.webp'
import hanMobile from '../textures/tableaux/han-scroll-mobile.webp'
import suiDesktop from '../textures/tableaux/sui-scroll.webp'
import suiMobile from '../textures/tableaux/sui-scroll-mobile.webp'
import tangDesktop from '../textures/tableaux/tang-scroll.webp'
import tangMobile from '../textures/tableaux/tang-scroll-mobile.webp'
import songDesktop from '../textures/tableaux/song-scroll.webp'
import songMobile from '../textures/tableaux/song-scroll-mobile.webp'
import yuanDesktop from '../textures/tableaux/yuan-scroll.webp'
import yuanMobile from '../textures/tableaux/yuan-scroll-mobile.webp'
import mingDesktop from '../textures/tableaux/ming-scroll.webp'
import mingMobile from '../textures/tableaux/ming-scroll-mobile.webp'

export type TableauProfile = {
  desktop: string
  mobile: string
}

/** 每朝各用一张横卷与一张竖卷，浏览器只会请求当前断点实际采用的图片。 */
export const TABLEAUX: Record<string, TableauProfile> = {
  shang: { desktop: shangDesktop, mobile: shangMobile },
  chunqiu: { desktop: chunqiuDesktop, mobile: chunqiuMobile },
  zhanguo: { desktop: zhanguoDesktop, mobile: zhanguoMobile },
  han: { desktop: hanDesktop, mobile: hanMobile },
  sui: { desktop: suiDesktop, mobile: suiMobile },
  tang: { desktop: tangDesktop, mobile: tangMobile },
  song: { desktop: songDesktop, mobile: songMobile },
  yuan: { desktop: yuanDesktop, mobile: yuanMobile },
  ming: { desktop: mingDesktop, mobile: mingMobile },
}
