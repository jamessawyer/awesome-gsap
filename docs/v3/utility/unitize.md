---
title: gsap.utils.unitize()
---

ðè¿ä¸ªå·¥å·å°±æ¯ç¨äºåè£å¶å®å½æ°ï¼å¯¹è¾åºç»ææ·»å æå®çåä½ã

å®å­å¨ `1` ç§å½¢å¼ï¼

1. `unitize(function[, unit])` åè£æå®çå½æ°ï¼ç»è¯¥å½æ°è¿åçç»ææ·»å åä½
   - `function: Function` - è¢«åè£çå½æ°
   - `unit: String` - å¯éï¼æå®æ·»å çåä½ãå¦æå¿½ç¥è¿ä¸ªåæ°ï¼åå§è¾å¥çåä½å°ä½ä¸ºæåæ·»å çåä½ð



ð°

```js {1,5,7,12,15,21}
// 1ï¸â£ ç»clamp()å½æ°è¿åçç»ææ·»å  `px` åä½
const clamp = gsap.utils.unitize(gsap.utils.clamp(0, 100), 'px')
clamp(132) // '100px'
clamp(67)  // '67px'
clamp('-20%') // '0px' è¾å¥çåä½å°è¢«å»æï¼è¿åç»ææ·»å æå®çåä½

// 2ï¸â£ ð¡æ²¡ææå®æ·»å çåä½ï¼åä½¿ç¨è¾å¥çåä½
const wrap = gsap.utils.unitize(gsap.utils.wrap(0, 100))
wrap('150px') // '50px'   ä½¿ç¨è¾å¥ç `px` ä½ä¸ºè¿åç»æçåä½
wrap('130%')  // 30%      ä½¿ç¨è¾å¥ç `%` ä½ä¸ºè¿åç»æçåä½

// 3ï¸â£ å¼ºå¶ä½¿ç¨æä¸ªåä½ï¼æ¯å¦ `%`
const map = gsap.utils.unitize(gsap.utils.mapRange(-10, 10, 0, 100), '%')
map(0)     // '50%'
map('5px') // '75%'  ðè¾å¥å¼ä¼åè¢«å»æåä½

// 4ï¸â£ modifierå½æ°ä¸­æç¨
gsap.to('.class', {
  x: 1000,
  modifier: {
    // ðè¾å¥çå¼æ¯å¸¦åä½ç
    // ä½æ¯ `unitize` ä¼åå°å¶åä½å»æï¼å¾å°çç»æåæ·»å æå®çåä½æèååä½
    x: gsap.utils.unitize(gsap.utils.wrap(0, window.innerWidth), 'px')
  }
})
```



::: tip



æ¬è´¨ä¸ï¼unitize()ä¼ä½¿ç¨ `parseFloat()` å¯¹è¾å¥çå¼è¿è¡å¤çï¼å¾å°æ°å­é¨åï¼å æ­¤ï¼å¦æè¾å¥çåæ°ä¸æ¯æ°å­å¼å¤´ï¼åå¯è½åºç°é®é¢

```js
const clamp = gsap.utils.unitize(gsap.utils.clamp(0, 100), 'px')

clamp('1abc') // â '1px'
clamp('abc1') // ð 'NaNpx'
```

:::

ææ¡£å°åï¼

- [gsap.utils.unitize()](https://greensock.com/docs/v3/GSAP/UtilityMethods/unitize())


::: details ðTSå®ä¹
```typescript
/**
 * Ensures that a specific unit gets applied.
 * 
 * ```js
 * const clamp = gsap.utils.unitize( gsap.utils.clamp(0, 100), "px");
 * clamp(132); // "100px"
 * 
 * gsap.to(".class", {
 *   x: 1000,
 *   modifiers: {
 *     x: gsap.utils.unitize( gsap.utils.wrap(0, window.innerWidth), "px") 
 *   }
 * });
 * ```
 *
 * @param {Function} fn
 * @param {string} [unit]
 * @returns {string} The value with unit added
 * @memberof gsap.utils
 */
function unitize<T extends Array<unknown>>(fn: (...args: T) => unknown, unit?: string): (...args: T) => string;
```
:::

2022å¹´11æ13æ¥18:57:21
