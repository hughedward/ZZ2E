import { defineConfig } from 'vitepress'

import { sidebar } from './sidebar'
import { nav } from './nav'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "月之回响·ZZ2E",
  description: "ZZ2E",
  srcDir: "./docs",
  base: "/ZZ2E/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo2.png",
    search: {
      provider: 'local'
    },
    footer: {
      message: '页面内容版权归原作者所有，📮：hughadward123@gmail.com',
      copyright: '备案号：<a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">苏ICP备2025158486号-1</a>'
    },
    nav: nav,
    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hughedward' }
    ]
  }
})
