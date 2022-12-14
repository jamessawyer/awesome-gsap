---
title: gsap.utils.snap()
---

ð æè·ï¼æèå¸éå°ï¼ç¹å®çå¢éæèæ¯æ°ç»ä¸­ææ¥è¿çå¼ï¼

- è¿å¯ä»¥æä¾ä¸ä¸ªå¯éç `åå¾ï¼radiusï¼`
- è¿æ2ç»´æ°æ®ï¼åæ ç¹è¿è¡å¸é
- ä¹æ¯å­å¨2ç§å½¢å¼ï¼ä¸ç§ç´æ¥è¿åç»æï¼ä¸ç§æ¯è¿åä¸ä¸ªå¯å¤ç¨çå½æ°

å®æ `6` ç§å½¢å¼ï¼ä½å¯ä»¥åä¸º3ç»ï¼ï¼ï¼ç¨æ³ç¡®å®æ¯è¾å¤ï¼çè§£èµ·æ¥ä¹æç¹ç»ðï¼

1. `snap(snapIncrement, valueToSnap)` ç´æ¥è¿åç»æ
   - `snapIncrement: Number` - æè·çå¢éï¼æ¯å¦ `snapIncrement` è®¾ç½®ä¸º `5`ï¼è¡¨ç¤ºå¢éä¸º `5` çåæ°ï¼å³ `[0, 5, 10, ...25 ..., 95...]` ç­ç­
   - `valueToSnap: Number` - ç»æå¼ï¼å¯ä»¥æ¯ä»»ä½æ°æ®ç±»åï¼åªè¦å®å `startValue` å¹é
2. `snap(snapIncrment)` è¿åä¸ä¸ªå¯å¤ç¨çå½æ°
   - `snapIncrement: Number` - åä¸
3. `snap(array, valueToSnap)` valueToSnap å¹éarrayä¸­ææ¥è¿çå¼ï¼ç´æ¥è¿åç»æ
   - `array: Array` - æè·çæ°ç»å¼
   - `valueToSnap: Number` - å¾æè·çå¼
4. `snap(array)` è¿åä¸ä¸ªå¯å¤ç¨çå½æ°
   - `array: Array` - åä¸
5. `snap(objectWithRadius, valueToSnap)` åå« `radius` çæè·æ¹å¼ï¼å¦ææ²¡æè¢«æè·å°ï¼åç´æ¥è¿ååæ¥çå¼ï¼æå¤æçä¸ç§ç¨æ³ð¤©ï¼ç´æ¥è¿åç»æ
   - `objectWithRadius: Object` - å¯ä»¥æ¯ `{values: [0, 20, 60], radius: 5}` æèæ¯ `{increment: 100, radius: 50}` è¿ç§å½¢å¼ï¼**valuesè¿å¯ä»¥æ¯å¯¹è±¡æ°ç»ï¼åå« `x` & `y`ï¼ å¯¹2Dåæ ç¹è¿è¡æè·**
   - `valueToSnap: Number` - å¾æè·çå¼
6. `snap(objectWithRadius)` è¿åå¯å¤ç¨çå½æ°
   - `objectWithRadius: Object` - åä¸



1ï¸â£ `åå«snapIncrement` çå½¢å¼

ð° ç´æ¥è¿åç»æ

```js {1-3}
// ð¡ ç¸å½äºå¯ä»¥æè·çå¼ä¸º `10` çæ´æ°å
// ... -10 0 10 20 30 ...
// `23.5` ç¦» `20` æè¿ å æ­¤è¢«æè·ï¼è¿åç»æä¸º `20`
gsap.utils.snap(10, 23.5) // 20
```

è¿åå¯å¤ç¨å¾å½æ°

```js
const snap = gsap.utils.snap(2)

snap(9.5) // 10
snap(-3.2) // -4
```



2ï¸â£ `åå«æ°ç»` çå½¢å¼

ð° ç´æ¥è¿åç»æ

```js {1}
// ð¡ æ°ç»ä¸­ç¦» `65` æè¿çæ¯ `50` å æ­¤è¢« `50` æè·
gsap.utils.snap([100, 50, 500], 65) // 50

gsap.utils.snap([100, 50, 500], 315) // 500
```

è¿åå¯å¤ç¨å¾å½æ°

```js
const snap = gsap.utils.snap([100, 50, 500])

snap(85)  // 100
snap(415) // 500
```



3ï¸â£ `åå« objectWithRadius` éç½®å½¢å¼



> 1. `valuesæ°ç» + radius`

```js
// æ²¡æè¢«æè·ï¼ç´æ¥è¿ååå¼
gsap.utils.snap({
  values: [0, 100, 300],
  radius: 20
}, 30.5) // 30.5

// è¢« 100æè·ï¼è¿å 100
gsap.utils.snap({
  values: [0, 100, 300],
  radius: 20
}, 85) // 100
```

æ°ç»æè·çåå¾ä¸º `20`ï¼æ°ç»ä¸­è½æè·çèå´å¦ä¸å¾ååæç¤ºï¼è `30.5` ä¸å¨3ä¸ªæè·åä¸­ï¼å æ­¤æ²¡æè¢«æè·ï¼åè·¯ç´æ¥è¿å `30.5`ï¼è `85` åè¢« `100` çæè·åæè·ï¼å æ­¤è¿å `100`

![snap-radius](./imgs/snap-radius.png)







> 2. `valueså¯¹è±¡æ°ç» + radius` å¯¹äºç»´ç¹è¿è¡æè·

è¿ä¸ªåçå¶å®åä¸é¢çç±»ä¼¼ï¼ä¹æ¯å»ºç«ä¸ä¸ªæè·åï¼ç¶åçç¹æ¯å¦å¨æä¸ªåå

```js
// è¢«æè·
const point = { x: 8, y: 8}
gsap.utils.snap({
  values: [
    {x: 0, y: 0},
    {x: 10, y: 10},
    {x: 20, y: 20}
  ],
  radius: 5
}, point) // {x: 10, y: 10}

// æ²¡æè¢«æè·ï¼ç´æ¥è¿ååæ¥çå¼ {x: 14, y: 16}
gsap.utils.snap({
  values: [
    {x: 0, y: 0},
    {x: 10, y: 10},
    {x: 20, y: 20}
  ],
  radius: 5
}, {x: 14, y: 16})
```

å¦å¾æç¤ºï¼`(8, 8)` åæ ç¹è¢« `(10, 10)`ä¸ºä¸­å¿ï¼åå¾ä¸º `5` çæè·åæè·ï¼å æ­¤è¿å `{x: 10, y: 10}`

![snap-points](./imgs/snap-points.png)



> 3. `increment + radius` å¯¹è±¡å½¢å¼

è¿ä¸ªå¶å®å `snap(snapIncrement, valueToSnap)` ç±»ä¼¼ï¼ä½æ¯å®åç»åäº `values` æè·åçæ¦å¿µï¼

```js {1-4}
// çè§£
// å¯ä»¥çè§£ä¸º values: [..., -500, 0, 500, 1000, ...]
// åå¾ä¸º 150
// `975` å¨ (1000, 0)ä¸­å¿ï¼åå¾ä¸º 150 çæè·åä¸­
gsap.utils.snap({
  increment: 500,
  radius: 150
}, 975) // 1000
```



å¤ç¨å½æ°çåæ³ï¼è¿éçç¥ï¼å¤§åå°å¼ã


ææ¡£å°åï¼

- [gsap.utils.snap()](https://greensock.com/docs/v3/GSAP/UtilityMethods/snap())

::: details ðTSå®ä¹
```typescript
type Point2D = { x: number, y: number };

interface SnapNumberConfig {
  increment?: number;
  values?: number[];
  radius: number;
}

interface SnapPoint2DConfig {
  values: Point2D[];
  radius: number;
}

/**
 * Snaps a value to the nearest increment of the number provided.
 * Or snaps to a value in the given array.
 * Or snaps to a value within the given radius (if an object is provided).
 * Or returns a function that does the above (if the second value is not provided).
 * 
 * ```js
 * gsap.utils.snap(10, 23.5); // 20
 * gsap.utils.snap([100, 50, 500], 65); // 50
 * gsap.utils.snap({values:[0, 100, 300], radius:20}, 30.5); // 30.5
 * gsap.utils.snap({increment:500, radius:150}, 310); // 310
 *
 * const snap = gsap.utils.snap(5); // no value = reusable function
 * console.log( snap(0.5) ); // 0
 * ```
 *
 * @param {SnapNumberConfig} snapConfig
 * @param {number} [valueToSnap]
 * @returns {number | Function} The snapped number or snap function
 * @memberof gsap.utils
 */
function snap(snapConfig: number | number[] | SnapNumberConfig, valueToSnap: number): number;
function snap(snapConfig: number | number[] | SnapNumberConfig): (valueToSnap: number) => number;
/**
 * Snaps a value if within the given radius of a points (objects with "x" and "y" properties).
 * Or returns a function that does the above (if the second value is not provided).
 * 
 * ```js
 * 
 * gsap.utils.snap({values:[0, 100, 300], radius:20}, 85); // 100
 * 
 * const snap = gsap.utils.snap({values:[{x:0, y:0}, {x:10, y:10}, {x:20, y:20}], radius:5}); // no value = reusable function
 * console.log( snap({x:8, y:8}) ); // {x:10, y:10}
 * ```
 *
 * @param {SnapPoint2DConfig} snapConfig
 * @param {number} [valueToSnap]
 * @returns {Point2D | Function} The snapped number or snap function
 * @memberof gsap.utils
 */
function snap(snapConfig: SnapPoint2DConfig, valueToSnap: Point2D): Point2D;
function snap(snapConfig: SnapPoint2DConfig): (valueToSnap: Point2D) => Point2D;
```
:::

2022å¹´11æ11æ¥16:11:41

