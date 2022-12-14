---
title: gsap.utils.pipe()
---

ð ä¹åå·¥å·ç±»ä¸­å·²ç»çå°è¿è¿ä¸ªå·¥å·æ¹æ³äºï¼è¿ä¸ªå°±æ¯å½æ°ç¼ç¨çç¨æ³ï¼ä¼ å¥å¤ä¸ªå½æ°ï¼å½æ° `ä»å·¦åå³` ä¾æ¬¡è°ç¨ï¼åä¸ä¸ªå½æ°çæ¾åç»ææ¯åä¸ä¸ªå½æ°çè¾å¥å¼ã

å®å­å¨ä¸ç§å½¢å¼ï¼
 - æ¥æ¶ä»»æå¤ä¸ª `functions` ä½ä¸ºå¶åæ°ï¼è¿åä¸ä¸ªå½æ°

ð°
```js {9}
// ä¸ä½¿ç¨ pipe()
const result1 = func1(value)
const result2 = func2(result1)
const result3 = func3(result2)

// æèåå¨ä¸èµ· ð
func3(func2(func1(value)))

// ä½¿ç¨ pipe() ä¼é ð
const transformer = gsap.utils.pipe(
  func1,
  func2,
  func3
)
// è°ç¨
transformer(value)
```

ð é«çº§ç¨æ³ï¼ä½¿ç¨ pipe è¿è¡å½æ°ç¼ç¨ï¼

```js {2,4,9}
const transformer = gsap.utils.pipe(
  // å°è¾å¥å¼éå®å¨ [0, 100] ä¹é´
  gsap.utils.clamp(0, 100),
  // ç¶åè¿è¡åºé´æ å° [0, 100] -> [0, window.innerWidth]
  gsap.utils.mapRange(
    0, 100,
    0, window.innerWidth
  ),
  // æåä»¥ 20 çå¢éè¿è¡æè·ï¼æèå¸éï¼
  gsap.utils.snap(20)
)

transformer(25.678) // æåç»æå window.innerWidth ç¸å³
```

ææ¡£å°åï¼
 - [gsap.utils.pipe()](https://greensock.com/docs/v3/GSAP/UtilityMethods/pipe())

::: details ðTSå®ä¹
```typescript
/**
 * Strings together multiple function calls, passing the result from one to the next. 
 * You can pass in as many function references as you'd like!
 * 
 * ```js
 * const transfrom = gsap.utils.pipe(func1, func2, func3); // reusable function
 * const output = transform(input);
 * ```
 *
 * @param {Function} ab
 * @param {Function} bc
 * @param {Function} [cd]
 * @returns {Function} The function that pipes values from function to function given
 * @memberof gsap.utils
 */
function pipe<A extends Array<unknown>, B>(
  ab: (...a: A) => B
): (...a: A) => B;
function pipe<A extends Array<unknown>, B, C>(
  ab: (...a: A) => B, 
  bc: (b: B) => C
): (...a: A) => C
function pipe<A extends Array<unknown>, B, C, D>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D
): (...a: A) => D;
function pipe<A extends Array<unknown>, B, C, D, E>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E
): (...a: A) => E;
function pipe<A extends Array<unknown>, B, C, D, E, F>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F
): (...a: A) => F;
function pipe<A extends Array<unknown>, B, C, D, E, F, G>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G
): (...a: A) => G;
function pipe<A extends Array<unknown>, B, C, D, E, F, G, H>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H
): (...a: A) => H;
function pipe<A extends Array<unknown>, B, C, D, E, F, G, H, I>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I
): (...a: A) => I;
function pipe<A extends Array<unknown>, B, C, D, E, F, G, H, I, J>(
  ab: (...a: A) => B,
  bc: (b: B) => C,
  cd: (c: C) => D,
  de: (d: D) => E,
  ef: (e: E) => F,
  fg: (f: F) => G,
  gh: (g: G) => H,
  hi: (h: H) => I,
  ij: (i: I) => J
): (...a: A) => J;
```
:::

2022å¹´11æ09æ¥17:55:35
