---
title: gsap.killTweensOf()
---

ð å¯ä»¥ææä»¥ä¸å ç§æå½¢çè¡¥é´å¨ç»ï¼

1. æææå®å¯¹è±¡ææçè¡¥é´å¨ç»(`Tweens`)
2. æææå®å¯¹è±¡ç¹å®çè¡¥é´å¨ç»å±æ§
3. æææå®ç `delayedCalled` å½æ°



ð°1ï¸â£ ææåå« `.myClass` çåç´ çææè¡¥é´å¨ç»ï¼

```js
gsap.killTweensOf('.myClass')
```

ð°2ï¸â£ æææå®å¯¹è±¡ä¸è¡¥é´å¨ç»çç¹å®è¡¥é´å±æ§ï¼æ¯å¦ä¸é¢å»æ `myObject` å¯¹è±¡ä¸ç `.opacity` & `.x` è¡¥é´å±æ§ï¼ä½¿ç¨ `,` åå²å¤ä¸ªå±æ§ð

```js
gsap.killTweensOf(myObject, 'opacity,x')
```

ð°3ï¸â£ ææææ `gsap.delayedCall(5, myFunction)` åå»ºç `delayedCalls`ï¼

```js
gsap.killTweensOf(myFunction)
```

::: tip ð©âð«

`gsap.delayedCall()` çæ¬è´¨è¿æ¯ä¸ç§ `Tween`ï¼åªä¸è¿å®ç `targets` & `onComplete` è®¾ç½®ä¸ºäº `myFunction`ï¼å³ï¼

```js
function myDelayedFunction() {}
gsap.delayedCall(5, myDelayedFunction)

// ç±»ä¼¼äºä¸é¢å½¢å¼
gsap.to(myDelayedFunction, {
  onComplete: myDelayedFunction,
  duration: 5
})
```

:::

ð°4ï¸â£ è¿å¯ä»¥ä¼ å¥éæ©å¨ææ¬:

```js
// ææIDä¸º `box` çåç´ ä¸çè¡¥é´å¨ç»
gsap.killTweensOf('#box')

// ð ææææDOMç®æ ä¸çè¡¥é´å¨ç»
gsap.killTweensOf('*')
```



::: warning

`killTweensOf()` è¿ä¼å½±åè¿æ²¡æå¼å§çTweensãæ¯å¦ï¼`myObject` çè¡¥é´å¨ç»å»¶è¿(`delay`) `5s`å¼å§ï¼ä½å¨`2s`æ¶ä½ è°ç¨äº `gsap.killTweensOf(myObject)`ï¼å³ä½¿Tweenè¿æ²¡æå¼å§ï¼å®ä¹ä¼è¢«ææðã

:::



ææ¡£å°åï¼

- [gsap.killTweensOf()](https://greensock.com/docs/v3/GSAP/gsap.killTweensOf())



2022å¹´11æ21æ¥13:54:29



