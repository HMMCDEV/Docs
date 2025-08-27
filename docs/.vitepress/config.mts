import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh_CN", 
  title: "绘梦我的世界",
  description: "绘梦我的世界服务器文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '加入群聊', link: '/加入群聊' },
      { text: '捐赠名单', link: '/捐赠名单' },
      { 
        text: 'MC版本库', link: 'https://bbk.endyun.ltd/' },
      { 
        text: 'Minecraft中文WIKI', link: 'https://zh.minecraft.wiki/'
      },
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
      { icon: 'github', link: 'https://github.com/HMMCDEV/Docs' }
    ],
    footer: {
      message: '绘梦我的世界',
      copyright: 'Copyright © 2020-2024'
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    returnToTopLabel: "回到顶部",
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
