import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "个人知识库",
  description: "分享并记录自己的学习过程，对相应的知识点进行总结与记录，方便日后使用时查阅，也供大家共用学习参考。",
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  base: "/knowledge-base/",
  srcDir: 'docs',
  appearance: true,

  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: '首页', link: '/' },
      { text: '参考文档', link: 'https://vitepress.dev/zh/reference/site-config' },
      { text: '知识笔记', link: '/note/index' },
    ],

    sidebar: [
      {
        text: '知识笔记',
        collapsed: false,
        items: [
          {
            text: '前言',
            collapsed: false,
            link: '/note/index'
          },
          {
            text: 'python',
            collapsed: true,
            items: [
              { text: 'python', link: '/note/python_basis/python' }
            ]
          }
        ]
      },
      {
        text: 'BUG 记录',
        collapsed: true,
        items: [

        ]
      },
      {
        text: '开发工具',
        collapsed: true,
        items: [

        ]
      },
      {
        text: '心得体会',
        collapsed: true,
        items: [

        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ahui-gith/knowledge-base' }
    ]
  }
})