---
title: gasp.utils.normalize()
---

ð å°æä¾çå¼ï¼æ å°ä¸ºåºé´çæ¯ä¾ï¼æç¹ç±»ä¼¼ [mapRange](./mapRange)

- ä¸è¬å°å¶æ å°å° `0-1`ï¼ç±»ä¼¼ `progress` è¿åº¦å¼
- ä½æ¯å¦æè¶åºäºåºé´ï¼ä¹è½è¿è¡æ å°



å®å­å¨2ç§å½¢å¼ï¼

1. ä¼ å¥`3`ä¸ªåæ°ï¼ç´æ¥è¿åç»æ `normalize(minimum, maximum, valueToNormalize)`:
   - `minimum: Number` - åºé´çä¸éå¼
   - `maximum: Number` - åºé´çä¸éå¼
   - `valueToNormalize: Number` - å¾èå¼åçå¼
2. ä¼ å¥`2`ä¸ªåæ°ï¼è¿åä¸ä¸ªå¯å¤ç¨çå½æ°ï¼è¿ä¸ªå½æ°æ¥æ¶ `valueToNormalize` ä½ä¸ºå¶åæ° - `normalize(minimum, maximum)`



1ï¸â£ ä¼ å¥`3`ä¸ªåæ°ï¼ç´æ¥è¿åç»æ

ð° 

```js {1,6}
gsap.utils.normalize(-10, 10, 0) // ä¸­ç¹ä½ç½®å¯¹åº 0.5

gsap.utils.normalize(0, 100, 25) // 0.25


// ð¨ è¶åºæ å°è®¿é®ä¹è½è¿è¡æ å°
gsap.utils.normalize(0, 100, 200) // 200 / (100 - 0) = 2

gsap.utils.normalize(0, 100, -50) // -50 / (100 - 0) = -0.5
```



2ï¸â£ ä¼ å¥`2`ä¸ªåæ°ï¼å¾å°å¯å¤ç¨çå½æ°

ð°

```js {1}
// æ»æ¯å¯¹åºé´ [0, 100] è¿è¡æ å°
const clamper = gsap.utils.normalize(0, 100)

clamper(50) // 0.5
clamper(10) // 0.1
clamper(75) // 0.75
```



ð é«çº§ç¨æ³ï¼ä½¿ç¨ `pipe` è¿è¡å½æ°ç¼ç¨ï¼

```js
const transformer = gsap.utils.pipe(
  gsap.utils.clamp(0, 100),
  gsap.utils.normalize(0, 100)
)

transformer(125) // 1
transformer(25)  // 0.25
```




ææ¡£å°åï¼

- [gsap.utils.normalize()](https://greensock.com/docs/v3/GSAP/UtilityMethods/normalize())

::: details ðTSå®ä¹
```typescript
/**
 * Maps a value within a provided range to the corresponding position in the range between 0 and 1.
 * 
 * ```js
 * gsap.utils.normalize(-10, 10, 0); // 0.5
 * 
 * const clamper = gsap.utils.normalize(0, 100); // no value = reusable function
 * console.log( clamper(50) ); // 0.5
 * ```
 *
 * @param {number} inMin
 * @param {number} inMax
 * @param {number} [value]
 * @returns {number | Function} The normalized value or normalizer function
 * @memberof gsap.utils
 */
function normalize(inMin: number, inMax: number, value: number): number;
function normalize(inMin: number, inMax: number): (value: number) => number;
```
:::

2022å¹´11æ08æ¥14:54:58

