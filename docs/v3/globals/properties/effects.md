---
title: gsap.effects
---

ð è¿ä¸ªç¨äºè®¿é® [gasp.registerEffect](../methods/registerEffect) æ¹æ³ä¸æ³¨åçå¨ææä»¶ã

::: tip

ç®æåå»ç [gsap.registerEffect()](../methods/registerEffect) äºè§£å¦ä½æ³¨åå¨ææä»¶ï¼åæ¥çå¦ä½ä½¿ç¨æä»¶ã

:::



ð°1ï¸â£

åè®¾æ³¨åäºä¸ä¸ª `explode` å¨æï¼åå¯ä»¥ç´æ¥éè¿ `gsap.effects.motionName` æ¹å¼ä½¿ç¨è¯¥å¨æï¼

```js
gsap.effects.explode('.box', {
  // è¿äºå±æ§é½æ¯ gsap.registerEffect() ä¸­å®ä¹ç
  direction: 'up',
  duration: 3
})
```

ð°2ï¸â£ 

å¦ææ³¨åçæ¶åï¼ä½¿ç¨äº `extendTimeline: true` åå¯ä»¥ç´æ¥å¨Timeline(`æ¶é´è½´`)å®ä¾ä¸ä½¿ç¨è¯¥å¨æðï¼åè®¾æ³¨åäºä¸ä¸ª `fade` å¨æï¼

```js {13}
// æ³¨åå¯å¤ç¨å¨æ
gsap.registerEffect({
  name: 'fade',
  effect: (targets, config) => {
    return gsap.to(targets, { duration: config.duration, opacity: 0 })
  },
  defaults: {duration: 2},
  extendTimeline: true, // [!code ++]
})

// ä½¿ç¨ `tl.fade` ç´æ¥ä½¿ç¨è¯¥å¨æ
const tl = gsap.timeline()
tl.fade('.box1', {duration: 3})
  .fade('.box2', {duration: 1}, '+=2')
  .to('.box3', {x: 100})

// ð¡å¦ææ²¡æ `extendTimeline: true` é£ä¹æä»¬éè¦ `timeline.add()` æ¹æ³æ·»å å¨æ
tl.add(gsap.effects.fade('.box1', {duration: 4}))
```



ææ¡£å°åï¼

- [gsap.effects](https://greensock.com/docs/v3/GSAP/gsap.effects)

 

2022å¹´11æ18æ¥16:41:18

