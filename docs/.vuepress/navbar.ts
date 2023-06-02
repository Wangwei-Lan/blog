import { navbar } from 'vuepress-theme-hope'

export default navbar([
  { text: 'Notes', link: '/', activeMatch: '^/(?!nav).*' },
  { text: 'External Links', link: '/nav' },
  // {text: '文章', link: '/article', activeMatch: '^/'},
  // { text: '导航', link: '/home', activeMatch: '^/home' },
])
