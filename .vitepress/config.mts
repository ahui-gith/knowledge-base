import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "个人知识库",
  description: "分享并记录自己的学习过程，对相应的知识点进行总结与记录，方便日后使用时查阅，也供大家共用学习参考。",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: "/knowledge-base/",
  srcDir: 'docs',
  
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '前端笔记', link: '/frontend/' },
    ],

    sidebar: [
      {
          text: '前端基础',
          items: [
            { text: 'HTML 基础', link: '/frontend/html' },
            { text: 'CSS 基础', link: '/frontend/css' },
            { text: 'JavaScript 基础', link: '/frontend/js' }
          ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})