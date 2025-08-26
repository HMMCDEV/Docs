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
        text: '绘梦我的世界' ,
        items: [
          { text: '服务器状态', link: '/motd' },
          { text: '子服概览' ,
                items: [
                        {text: "基岩版",link: '/基岩版'},
                        {text: "Java版",link: '/Java版'}]}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
