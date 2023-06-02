import { hopeTheme } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'
import {getDirname, path} from '@vuepress/utils'
const __dirname = getDirname(import.meta.url);

export default hopeTheme({
  hostname: 'https://Wangwei-Lan.github.io/blog/',

  author: {
    name: 'Wangwei',
    url: 'https://github.com/Wangwei-Lan',
  },

  iconPrefix: 'iconfont icon-',

  logo: '/avatar.jpg',

  repo: 'https://github.com/Wangwei-Lan/blog',

  docsBranch: 'master',

  docsDir: '/docs',

  navbar: navbar,

  sidebar: false,
  // sidebar: sidebar,
  blog: {
    description: 'Developer',
    // intro: '/intro.html',
    medias: {
      GitHub: 'https://github.com/Wangwei-Lan',
    },
  },

  footer: 'hahahhaha',

  displayFooter: true,

  pageInfo: ['Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  lastUpdated: true,

  editLink: true,

  // locales: {
  //   '/': {
  //     navbar: false,

  //     sidebar: false
  //   }
  // },

  encrypt: {
    config: {
      '/guide/encrypt.html': ['wangweilan'],
    },
  },

  plugins: {
    autoCatalog :false,
    blog: {
      excerpt: false,
      excerptLength: 0,
      article: '/',
    },
    seo: false,
    pwa: {
      favicon: '/blog/logo.ico',
    },

    // 评论插件配置
    comment: {
      provider: 'Giscus',
      comment: true,
      repo:"Wangwei-Lan/blog",

      repoId:"R_kgDOJqgRcQ",
      category:"Q&A",
      categoryId:"DIC_kwDOJqgRcc4CW6Gf",
    },
    mdEnhance: {
      // enableAll: true,
      //demo: true,  // 代码演示
      //vuePlayground: true,  // Vue 交互演示
      //playground: {
      //  // 添加预设
      //  //presets: [
      //  //  "ts",
      //  //  "vue",
      //  //],
      //  // 设置内置预设 (可选)
      //  config: {
      //    ts: {
      //      // ...
      //    },
      //    vue: {
      //      // ...
      //    },
      //  },
      //},
      include: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
      },
    },
  },
}, {custom: true})
