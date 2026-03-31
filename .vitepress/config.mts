import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/knowledge-base/",
  title: "个人知识库",
  description: "分享并记录自己的学习过程，对相应的知识点进行总结与记录，方便日后使用时查阅，也供大家共用学习参考。",
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/knowledge-base/' },
      { text: 'Examples', link: '/knowledge-base/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/knowledge-base/markdown-examples' },
          { text: 'Runtime API Examples', link: '/knowledge-base/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})