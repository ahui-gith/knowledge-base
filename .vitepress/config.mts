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

      // ===========================知识笔记===========================
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

      // ===========================BUG 记录===========================
      {
        text: 'BUG 记录',
        collapsed: true,
        items: [

        ]
      },

      // ===========================开发工具===========================
      {
        text: '开发工具',
        collapsed: true,
        items: [
          {
            text: '前言',
            collapsed: false,
            link: '/tools/index'
          },
          // {
          //   text: '代码编辑器 / IDE',
          //   collapsed: true,
          //   items: [
          //     { text: 'VS Code', link: '/tools/ide-editor/vscode' },
          //     { text: 'PyCharm', link: '/tools/ide-editor/pycharm' },
          //     { text: 'IntelliJ IDEA', link: '/tools/ide-editor/idea' },
          //     { text: 'WebStorm / HBuilderX', link: '/tools/ide-editor/webstorm' }
          //   ]
          // },
          // {
          //   text: '版本控制 & 协作',
          //   collapsed: true,
          //   items: [
          //     { text: 'Git 基础命令', link: '/tools/git-vcs/git-base' },
          //     { text: 'Git 进阶使用', link: '/tools/git-vcs/git-advance' },
          //     { text: 'GitHub / Gitee', link: '/tools/git-vcs/github' },
          //     { text: '.gitignore 配置', link: '/tools/git-vcs/gitignore' }
          //   ]
          // },
          // {
          //   text: '终端 & 命令行',
          //   collapsed: true,
          //   items: [
          //     { text: 'Windows 终端', link: '/tools/terminal-cli/windows' },
          //     { text: 'Linux 常用命令', link: '/tools/terminal-cli/linux' },
          //     { text: 'Shell 脚本基础', link: '/tools/terminal-cli/shell' }
          //   ]
          // },
          // {
          //   text: '接口 & 调试工具',
          //   collapsed: true,
          //   items: [
          //     { text: 'Postman / Apifox', link: '/tools/api-debug/postman' },
          //     { text: 'curl 调试', link: '/tools/api-debug/curl' },
          //     { text: 'Chrome 开发者工具', link: '/tools/api-debug/chrome-devtools' },
          //     { text: 'JSON / YAML 校验', link: '/tools/api-debug/json-yaml' }
          //   ]
          // },
          // {
          //   text: '设计 & 画图 & 文档',
          //   collapsed: true,
          //   items: [
          //     { text: 'XMind 思维导图', link: '/tools/draw-doc/xmind' },
          //     { text: 'DrawIO / ProcessOn', link: '/tools/draw-doc/drawio' },
          //     { text: 'Markdown 语法', link: '/tools/draw-doc/markdown' },
          //     { text: '图标与图片处理', link: '/tools/draw-doc/image' }
          //   ]
          // },
          {
            text: '环境 & 依赖管理',
            collapsed: true,
            items: [
              { text: 'Conda', link: '/tools/env-package/conda' },
              // { text: 'Conda 环境命令', link: '/tools/env-package/conda' },
              // { text: 'Pip 依赖管理', link: '/tools/env-package/pip' },
              // { text: 'Node 包管理', link: '/tools/env-package/node' }
            ]
          },
          // {
          //   text: '服务器 & 运维工具',
          //   collapsed: true,
          //   items: [
          //     { text: 'Xshell / FinalShell', link: '/tools/server-ops/xshell' },
          //     { text: 'FileZilla / SFTP', link: '/tools/server-ops/sftp' },
          //     { text: 'Nginx 工具', link: '/tools/server-ops/nginx' },
          //     { text: 'Docker 工具', link: '/tools/server-ops/docker' }
          //   ]
          // },
          // {
          //   text: '效率辅助 & 系统工具',
          //   collapsed: true,
          //   items: [
          //     { text: '效率工具', link: '/tools/efficiency-system/efficiency' },
          //     { text: '文件工具', link: '/tools/efficiency-system/file' },
          //     { text: '屏幕录制 & GIF', link: '/tools/efficiency-system/record' },
          //     { text: '系统优化', link: '/tools/efficiency-system/system' }
          //   ]
          // }
        ]
      },

      // ===========================心得体会===========================
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