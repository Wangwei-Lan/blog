// .vuepress/theme/index.ts
import {defineUserConfig, Theme} from 'vuepress'
import {getDirname, path} from '@vuepress/utils'
import themeConfig from './themeConfig'
const __dirname = getDirname(import.meta.url);

const customTheme = (): Theme => {
  return {
    name: 'vuepress-theme-local',
    extends: themeConfig,
    alias: {
      '@theme-hope/modules/blog/components/BlogHome': path.resolve(__dirname, './components/HomePage')
    }
  }
}

export default defineUserConfig({
  base: '/blog/',
  lang: 'zh-CN',
  title: 'Wangwei\'s Blog',
  theme: themeConfig,
  alias: {
    '@theme-hope/modules/blog/components/BlogHome': path.resolve(__dirname, './components/HomePage')
  },
  shouldPrefetch: false,
})
