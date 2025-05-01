import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "绘梦我的世界",
  description: " ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '加入群聊', link: '/加入群聊' }
    ],

    sidebar: [
      {
        text: '服务器',
        items: [
          { text: '服务器状态', link: '/服务器状态' },
          { text: '服务器信息', link: '/服务器信息' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
