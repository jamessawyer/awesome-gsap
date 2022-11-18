---
title: gsap.registerEffect()
---



📚 这个方法类似于 `组件化或者插件` 的方式，生成可复用的动效插件，另外可以通过 `extendTimeline` 配置，直接将动效注册到Timeline原型链上：

- 注册的动效插件，可通过 [gsap.effects.yourEffect](../properties/effects) 访问
- 如果设置了 `extendTimeline: true`，则可以使用 `timeline.yourEffect` 的方式在时间轴上使用该动效插件，它会将动效注册到 `Timeline` 原型链上，类似于jQuery的插件机制



语法：

```js
gsap.registerEffect({
  name: String,                    // 插件名，请确保唯一
  effect: (targets, config) => {   // 动效核心逻辑
    // ...
  },
  defaults: {configProp: Object},  // 对上面 effect 函数中的 `config` 提供默认值
  extendTimeline: boolean,         // 是否将该插件注册到Timeline原型链上
})
```

说明：

1. gsap会将 `targets` 解析为元素数组
2. 可以通过 `defaults` 对 `config` 对象中的属性提供默认值
3. 如果 `extendTimeline: true`，则 `effect` 函数`必须`返回一个GSAP兼容的动画，比如 `Tween` 或者 `Timeline` 🚨



🌰 `基本用法`

```js
gsap.registerEffect({
  name: 'fade',
  effect: (targets, config) => {
    return gsap.to(targets, {opacity: 0, duration: config.duration})
  },
  defaults: { duration: 2 }
})

// 使用
gsap.effects.fade('.box') // duration 默认使用 `2s`
gsap.effects.fade('.box', {duration: 3}) // 传入自定义配置
```

🌰 使用 `extendTimeline: true`

```js {4,13}
gsap.registerEffect({
  name: 'fade',
  effect: (targets, config) => {
    // 返回一个 Tween
    return gsap.to(targets, {opacity: 0, duration: config.duration})
  },
  defaults: { duration: 2 },
  extendTimeline: true, // [!code ++]
})

// 普通使用
gsap.effects.fade('.box')
// 🤩 在时间轴上使用
const tl = gsap.timeline()
tl.fade('.box1')
  .fade('.box2', {duration: 1}, '+=2')
  .to('.box3', {x: 100})

// 如果没有使用 extendTimeline: true
// 则可以使用 下面方式
tl.add(gsap.effects.fade, {duration: 4}, '+=1')
```

🌰 [一次性注册多个effects - @codepen](https://codepen.io/GreenSock/pen/Rwajpyb)

```js
const gsapEffects = [
  {
    id: 'fadeSlideTo',
    props: {opacity: 0.5, x: 300, yoyo: true, repeat: -1},
  },
  {
    id: 'fadeSlideFrom',
    animate: 'from',
    props: {opacity: 0.25, x: 300, yoyo: true, repeat: -1},
  },
  {
    id: 'fadeSlideFromTo',
    animate: 'fromTo',
    props: {opacity: 0.1, x: 300},
    props2: {opacity: 1, x: 600, yoyo: true, repeat: -1},
  },
]

gsapEffects.forEach(effect => {
  gsap.registerEffect({
    name: effect.id,
    defaults: { duration: 1 },
    extendTimeline: true,
    effect: (targets, config) => {
      if (effect.animate === 'from') {
        return gsap.from(targets, { ...effect.props, ...config })
      } else if (effect.animate === 'fromTo') {
        return gsap.fromTo(targets, {...effect.props, ...config}, {...effect.props})
      } else {
        return gsap.to(targets, {...effect.props, ...config})
      }
    }
  })
})

let tl = gsap.timeline();
tl.fadeSlideTo(".fadeSlideTo")
  .fadeSlideFrom(".fadeSlideFrom", 0)
  .fadeSlideFromTo(".fadeSlideFromTo", 0)
```



<iframe height="300" style="width: 100%;" scrolling="no" title="Multiple pre-made effects" src="https://codepen.io/GreenSock/embed/preview/Rwajpyb?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/Rwajpyb">
  Multiple pre-made effects</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



视频教程：[GSAP3进阶-2-超越文档-5-gsap.registerEffect()](https://www.bilibili.com/video/BV1MB4y1J7qY/?share_source=copy_web&vd_source=5438716d1c10000afcb8a843dea5c8c2)

<iframe width="560" height="450" src="//player.bilibili.com/player.html?aid=603301323&bvid=BV1MB4y1J7qY&cid=840795235&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>



资源：

- [GSAP Effects - @codepen](https://codepen.io/collection/DJzKpP/bdffa09755cbd27a69b22771bd98e565?cursor=eyJjb2xsZWN0aW9uX2lkIjoiREp6S3BQIiwiY29sbGVjdGlvbl90b2tlbiI6ImJkZmZhMDk3NTVjYmQyN2E2OWIyMjc3MWJkOThlNTY1IiwibGltaXQiOjQsIm1heF9pdGVtcyI6Niwib2Zmc2V0IjowLCJwYWdlIjoxLCJzb3J0X2J5IjoicG9zaXRpb24iLCJzb3J0X29yZGVyIjoiQXNjIn0=)

文档地址：

- [gsap.registerEffect()](https://greensock.com/docs/v3/GSAP/gsap.registerEffect())