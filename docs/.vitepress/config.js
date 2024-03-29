import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

const nav = [
  { text: '🧾 Recipes', activeMatch: `^/recipes/`, link: '/recipes/installation' },
  {
    text: '📖 V3文档',
    items: [
      { text: '🌐 Globals', link: '/v3/globals/properties/effects' },
      { text: '🛠️ Utility', link: '/v3/utility/index' },
    ]
  },
  {
    text: '🪄 插件',
    items: [
      { text: 'ScrollTrigger', link: '/plugins/scroll-trigger/index' },
      { text: 'Draggable', link: '/plugins/draggable/index' },
      { text: 'Observer', link: '/plugins/observer/index' },
    ]
  },
  {
    text: '📒 Blogs',
    items: [
      { text: 'React❤️‍🔥GSAP', link: '/blogs/react/index' },
    ]
  },
]

const sidebar_recipes = {
  '/recipes/': [ // Node v18.x 中文文档
    {
      text: 'GSAP Recipes',
      items: [
        { text: 'Installation', link: '/recipes/installation' },
        { text: 'Basics', link: '/recipes/basics' },
        { text: 'Miscellaneous', link: '/recipes/miscellaneous' },
        { text: 'Timelines', link: '/recipes/timelines' },
        { text: 'Nesting Timelines', link: '/recipes/nesting-timelines' },
        { text: 'Control Methods', link: '/recipes/control-methods' },
        { text: 'Utility Methods', link: '/recipes/utility-methods' },
        { text: 'Eases', link: '/recipes/eases' },
        { text: 'ScrollTrigger', link: '/recipes/scroll-trigger' },
        { text: 'Other Plugins', link: '/recipes/other-plugins' },
      ]
    }
  ],
}
const sidebar_blogs = {
  '/blogs/react': [
    { 
      text: 'GSAP+React',
      items: [
        { text: '教程', link: '/blogs/react/index' },
      ]
    },
    {
      text: '文章',
      collapsible: true,
      items: [
        { text: 'React+GSAP起步', link: '/blogs/react/getting-start-with-gsap-and-react' },
      ]
    },
  ],
}


const sidebar_v3 = {
  '/v3/utility': [
    { 
      text: '工具方法(gsap.utils.xxx)',
      items: [
        { text: '简介&TS定义', link: '/v3/utility/index' },
        { text: 'checkPrefix', link: '/v3/utility/checkPrefix' },
        { text: '⚡ clamp', link: '/v3/utility/clamp' },
        { text: 'distribute', link: '/v3/utility/distribute' },
        { text: 'getUnit', link: '/v3/utility/getUnit' },
        { text: '⚡ interpolate', link: '/v3/utility/interpolate' },
        { text: '⚡ mapRange', link: '/v3/utility/mapRange' },
        { text: 'normalize', link: '/v3/utility/normalize' },
        { text: '⚡ pipe', link: '/v3/utility/pipe' },
        { text: 'random', link: '/v3/utility/random' },
        { text: 'selector', link: '/v3/utility/selector' },
        { text: 'shuffle', link: '/v3/utility/shuffle' },
        { text: 'snap', link: '/v3/utility/snap' },
        { text: 'splitColor', link: '/v3/utility/splitColor' },
        { text: '⚡ toArray', link: '/v3/utility/toArray' },
        { text: 'unitize', link: '/v3/utility/unitize' },
        { text: 'wrap', link: '/v3/utility/wrap' },
        { text: 'wrapYoyo', link: '/v3/utility/wrapYoyo' },
      ]
    },
  ],
  '/v3/globals': [
    {
      text: '全局属性',
      collapsible: true,
      items: [
        { text: '.effects', link: '/v3/globals/properties/effects' },
        { text: '.globalTimeline', link: '/v3/globals/properties/globalTimeline' },
        { text: '.ticker', link: '/v3/globals/properties/ticker' },
        { text: '.utils', link: '/v3/globals/properties/utils' },
        { text: '.version', link: '/v3/globals/properties/version' },
      ]
    },
    {
      text: '全局方法',
      collapsible: true,
      items: [
        { text: '.delayedCall', link: '/v3/globals/methods/delayedCall' },
        { text: '.exportRoot', link: '/v3/globals/methods/exportRoot' },
        { text: '.registerEffect', link: '/v3/globals/methods/registerEffect' },
        { text: '.killTweensOf', link: '/v3/globals/methods/killTweensOf' },
      ]
    },
  ]
}
const sidebar_plugins = {
  '/plugins/scroll-trigger': [
    { 
      text: 'ScrollTrigger',
      items: [
        {
          text: '插件介绍',
          link: '/plugins/scroll-trigger/index',
        },
      ]
    },
    {
      text: '插件属性',
      collapsible: true,
      items: [
        { text: '.animation', link: '/plugins/scroll-trigger/properties/animation' },
        { text: '.direction', link: '/plugins/scroll-trigger/properties/direction' },
        { text: '.end', link: '/plugins/scroll-trigger/properties/end' },
        { text: '.isActive', link: '/plugins/scroll-trigger/properties/isActive' },
        { text: 'ScrollTrigger.isTouch', link: '/plugins/scroll-trigger/properties/static-isTouch' },
        { text: '.pin', link: '/plugins/scroll-trigger/properties/pin' },
        { text: '.progress', link: '/plugins/scroll-trigger/properties/progress' },
        { text: '.scrollor', link: '/plugins/scroll-trigger/properties/scrollor' },
        { text: '.start', link: '/plugins/scroll-trigger/properties/start' },
        { text: '.trigger', link: '/plugins/scroll-trigger/properties/trigger' },
        { text: '.vars', link: '/plugins/scroll-trigger/properties/vars' },
      ]
    },
    {
      text: '插件方法',
      collapsible: true,
      items: [
        { text: 'ScrollTrigger.addEventListener', link: '/plugins/scroll-trigger/methods/static-addEventListener' },
        { text: 'ScrollTrigger.removeEventListener', link: '/plugins/scroll-trigger/methods/static-removeEventListener' },
        { text: 'ScrollTrigger.refresh', link: '/plugins/scroll-trigger/methods/static-refresh' },
      ]
    },
  ],
  '/plugins/draggable': [
    { 
      text: 'Draggable',
      items: [
        {
          text: '插件介绍',
          link: '/plugins/draggable/index',
        },
      ]
    },
    {
      text: '插件属性',
      collapsible: true,
      items: [
        { text: '.autoScroll', link: '/plugins/draggable/properties/autoScroll' },
        { text: '.deltaX', link: '/plugins/draggable/properties/deltaX' },
        { text: '.deltaY', link: '/plugins/draggable/properties/deltaY' },
      ]
    },
    {
      text: '插件方法',
      collapsible: true,
      items: [
        { text: '.addEventListener', link: '/plugins/draggable/methods/addEventListener' },
        { text: '⚡Draggble.hitTest', link: '/plugins/draggable/methods/static-hitTest' },
      ]
    },
  ],
  '/plugins/observer': [
    { 
      text: 'Observer',
      items: [
        {
          text: '插件介绍',
          link: '/plugins/observer/index',
        },
      ]
    },
    {
      text: '插件属性',
      collapsible: true,
      items: [
        { text: '.deltaX', link: '/plugins/observer/properties/deltaX' },
        { text: '.deltaY', link: '/plugins/observer/properties/deltaY' },
      ]
    },
    {
      text: '插件方法',
      collapsible: true,
      items: [
        { text: 'Observer.create', link: '/plugins/observer/methods/static-create' },
      ]
    },
  ],
}

const sidebar = {
  ...sidebar_recipes,
  ...sidebar_v3,
  ...sidebar_plugins,
  ...sidebar_blogs,
}

export default withPwa(defineConfig({
  title: 'Awesome GSAP',
  description: 'GSAP 动画🚀🎉',
  lastUpdated: true,
  base: '/awesome-gsap/', // 非常重要这个属性！！！
  
  head:[
    ['link', { rel: 'icon', href: '/awesome-gsap/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', href: '/awesome-gsap/pwa-192x192.png', sizes: '192x192' }],
    ['meta', {
      name: 'keywords',
      content: 'GSAP, Animations',
    }],
  ],
  
  themeConfig: {
    logo: '/logo.svg',
    outlineTitle: '目录',
    outline: [2, 3],
    editLink: {
      text: '在GitHub编辑此页',
      pattern: 'https://github.com/jamessawyer/awesome-gsap/edit/main/docs/:path'
    },
    nav,
    sidebar
  },
  markdown: {
    // lineNumbers: true, // 是否显示行号
    // options for markdown-it-toc-done-right
    toc: { level: [1, 2, 3] },
  },
  pwa: {
    // https://github.com/vite-pwa/vitepress/blob/main/examples/pwa-simple/.vitepress/config.ts
    registerType: 'autoUpdate',
    includeAssets: ['favicon.ico', 'logo.svg'],
    manifest: {
      name: 'Awesome Gsap',
      short_name: 'GsapPWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    devOptions: {
      enabled: true,
      navigateFallback: '/',
    },
  }
}))
