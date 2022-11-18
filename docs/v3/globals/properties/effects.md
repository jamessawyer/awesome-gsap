---
title: gsap.effects
---

📚 这个用于访问 [gasp.registerEffect](../methods/registerEffect) 方法上注册的动效插件。

::: tip

简易先去看 [gsap.registerEffect()](../methods/registerEffect) 了解如何注册动效插件，再来看如何使用插件。

:::



🌰1️⃣

假设注册了一个 `explode` 动效，则可以直接通过 `gsap.effects.motionName` 方式使用该动效：

```js
gsap.effects.explode('.box', {
  // 这些属性都是 gsap.registerEffect() 中定义的
  direction: 'up',
  duration: 3
})
```

🌰2️⃣ 

如果注册的时候，使用了 `extendTimeline: true` 则可以直接在Timeline(`时间轴`)实例上使用该动效😎，假设注册了一个 `fade` 动效：

```js {13}
// 注册可复用动效
gsap.registerEffect({
  name: 'fade',
  effect: (targets, config) => {
    return gsap.to(targets, { duration: config.duration, opacity: 0 })
  },
  defaults: {duration: 2},
  extendTimeline: true, // [!code ++]
})

// 使用 `tl.fade` 直接使用该动效
const tl = gsap.timeline()
tl.fade('.box1', {duration: 3})
  .fade('.box2', {duration: 1}, '+=2')
  .to('.box3', {x: 100})

// 💡如果没有 `extendTimeline: true` 那么我们需要 `timeline.add()` 方法添加动效
tl.add(gsap.effects.fade('.box1', {duration: 4}))
```



文档地址：

- [gsap.effects](https://greensock.com/docs/v3/GSAP/gsap.effects)

 

2022年11月18日16:41:18

