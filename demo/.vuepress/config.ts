import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'en-US',
  title: 'treebear ui',
  description: 'Just playing around',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar:[
        {
            text:'首页',
            link:'/'
        },
        {
            text:'文档',
            link:'/docs'
        },
        {
            text:'组件',
            link:'/components'
        }
    ],
    sidebar:{
        '/components':[
            {
                text:'组件',
                children:[
                    '/components/button.md'
                ]
            }
        ]
    },
    sidebarDepth:3
  },
})