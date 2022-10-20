const nav = [
  { text: '📄Recipes', activeMatch: `^/recipes/`, link: '/recipes/installation' },
  {
    text: '🪄 插件',
    items: [
      { text: 'ScrollTrigger', link: '../plugins/scroll-trigger/index' },
    ]
  },
]

const sidebar_recipes = {
  '/recipes/': [ // Node v18.x 中文文档
    {
      text: 'GSAP Recipes',
      items: [
        {
          text: 'Installation',
          link: '/recipes/installation',
        },
        {
          text: 'Basics',
          link: '/recipes/basics',
        },
        {
          text: 'Miscellaneous',
          link: '/recipes/miscellaneous',
        },
        {
          text: 'Timelines',
          link: '/recipes/timelines',
        },
        {
          text: 'Nesting Timelines',
          link: '/recipes/nesting-timelines',
        },
        {
          text: 'Control Methods',
          link: '/recipes/control-methods',
        },
        {
          text: 'Utility Methods',
          link: '/recipes/utility-methods',
        },
        {
          text: 'Eases',
          link: '/recipes/eases',
        },
        {
          text: 'ScrollTrigger',
          link: '/recipes/scroll-trigger',
        },
        {
          text: 'Other Plugins',
          link: '/recipes/other-plugins',
        },
      ]
    }
  ],
}
// const sidebar_blog = {
//   '/blog/': [
//     {
//       text: 'blog',
//       items: [
//         {
//           text: '第一篇blog',
//           link: '/blog/first',
//         }
//       ]
//     },
//     { 
//       text: '🚀 好文翻译',
//       collapsible: true,
//       items: [
//         {
//           text: 'Path & URL的用法',
//           link: '/blog/translate/file-system-paths'
//         },
//         {
//           text: 'FS in Node',
//           link: '/blog/translate/fs-in-node'
//         },
//         {
//           text: 'Web Streams on Node',
//           link: '/blog/translate/web-streams-on-node'
//         },
//       ]
//     }
//   ],
// }
// const sidebar_books = {
//   '/book/patterns': [ // 设计模式
//     { 
//       text: 'Node设计模式',
//       items: [
//         {
//           text: 'the node platform',
//           link: '/book/patterns/the-node-platform',
//         },
        
//         {
//           text: 'callback and events',
//           link: '/book/patterns/callback-and-events',
//         },
//       ]
//     },
//     {
//       text: 'Ⅱ.模块系统',
//       collapsible: true,
//       items: [
//         { text: '介绍', link: '/book/patterns/module-system/index' },
//         { text: '模块系统的必要性', link: '/book/patterns/module-system/the-need-for-modules' },
//         { text: 'JS和Node中的模块系统', link: '/book/patterns/module-system/module-system-in-js-and-node' },
//       ]
//     },
//   ],
// }
// const sidebar_lib = {
//   '/lib/fs-extra': [
//     {
//       text: 'fs-extra',
//       items: [
//         {
//           text: 'README',
//           link: '/lib/fs-extra/index'
//         },
//         {
//           text: 'copy',
//           link: '/lib/fs-extra/copy'
//         },
//         {
//           text: 'emptyDir',
//           link: '/lib/fs-extra/emptyDir'
//         },
//         {
//           text: 'ensureFile',
//           link: '/lib/fs-extra/ensureFile'
//         },
//         {
//           text: 'ensureDir',
//           link: '/lib/fs-extra/ensureDir'
//         },
//         {
//           text: 'ensureLink',
//           link: '/lib/fs-extra/ensureLink'
//         },
//         {
//           text: 'ensureSymlink',
//           link: '/lib/fs-extra/ensureSymlink'
//         },
//         {
//           text: 'move',
//           link: '/lib/fs-extra/move'
//         },
//         {
//           text: 'outputFile',
//           link: '/lib/fs-extra/outputFile'
//         },
//         {
//           text: 'pathExists',
//           link: '/lib/fs-extra/pathExists'
//         },
//         {
//           text: 'readJson',
//           link: '/lib/fs-extra/readJson'
//         },
//         {
//           text: 'remove',
//           link: '/lib/fs-extra/remove'
//         },
//         {
//           text: 'outputJson',
//           link: '/lib/fs-extra/outputJson'
//         },
//         {
//           text: 'writeJson',
//           link: '/lib/fs-extra/writeJson'
//         },
//         {
//           text: 'fs-write-read-writev',
//           link: '/lib/fs-extra/fs-write-read-writev'
//         },
//       ]
//     }
//   ],
// }
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
      ]
    },
  ],
}

const sidebar = {
  ...sidebar_recipes,
  ...sidebar_plugins,
}

export default {
  title: 'Awesome GSAP',
  description: 'GSAP 动画🚀🎉',
  lastUpdated: true,
  base: '/awesome-gsap/', // 非常重要这个属性！！！
  
  head:[
    ['link', { rel: 'icon', href: '/awesome-gsap/favicon.ico' }]
  ],
  
  themeConfig: {
    logo: '/logo.svg',
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
  }
}
