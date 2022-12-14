---
title: gsap.utils.wrap()
---

ð è¿ä¸ªå·¥å·ä½¿è¿åç»æéå®å¨æä¸ªèå´æèæå®æ°ç»å
 - å¦æè¶è¿è¯¥èå´å **éå¤´åå¼å§**ï¼å¦æä½äºè¯¥èå´ï¼åååéæ¥ï¼å·ä½è®¡ç®å¬å¼ä¸é¢ç¤ºä¾ä¸­å·²ç»åºð
 - éå®å¨æå®åºé´èå´æç¹ç±»ä¼¼äº [clamp()](./clamp)ï¼å®ä»¬çå·®å¼å¨äºï¼`wrap()` ä¼å¯¹è¶åºé¨åå¾ªç¯å¾å¤ï¼è `clamp()` åç´æ¥å°è¶åºçé¨åè®¾ç½®ä¸ºæå°å¼ææå¤§å¼

å®å­å¨ `2` ç§å½¢å¼ï¼

1. `wrap(minimum, maximum[, input])` å°ç»æéå®å¨ `[minimum, maximum - 1]` èå´å
   - `minimum: Number` æå°å¼
   - `maximum: Number` æå¤§å¼ï¼ð¨è¯·æ³¨æï¼åºé´æ¯`ä¸åå«`æå¤§å¼ç
   - `input: Number` å¯éï¼è¾å¥çå¼
     - å¦æä¸å¡«åè¿ä¸ªåæ°ï¼åå¶å®å·¥å·å½æ°ä¸æ ·ï¼wrap()å°è¿åä¸ä¸ªå¯å¤ç¨å¾å½æ°
     - å¦æå¡«åè¿ä¸ªåæ°ï¼åç´æ¥è¿åç»æï¼å¦æè¾å¥çå¼ `>= maximum` ï¼åéå¤´å¼å§è®¡ç®ï¼å¦æè¾å¥çå¼ `<minimum` åéåæ¹åå¼å§è®¡ç®
2. `wrap(array[, index])` å°ç»æéå®å¨æ°ç»åºé´
   - `array: Array` - æ°ç»åç´ 
   - `index: Number` - å¯éï¼æ°ç»ç´¢å¼ã



1ï¸â£ `æä¾æå°å¼åæå¤§å¼`

```js {1-3,8,17,20}
// 1ï¸â£ è¶è¿æå¤§å¼ï¼éå¤´æ¥
// éå®åºé´ä¸º [5, 9]ï¼ä¸åå«10
// ð 12 æ¯ æå¤§å¼10 å¤2ï¼å æ­¤éå¤´æ¥ï¼å¾å° 5 + (12 % 10) = 7
//  5 6 7 8 9 10 11 12 13 14   <--- è¾å¥å¼
//  5 6 7 8 9 5   6  7  8  9   <--- å¯çè§£ä¸º [5-9] ä¸åå°å¾ªç¯
gsap.utils.wrap(5, 10, 12) // 7

// 2ï¸â£ ä½äºæå°å¼ï¼ååéæ¥
// -3 æ¯ æå°å¼5è¿è¦å°ï¼å®ä»æå¤§å¼å¼å§å¾åæ°
// ð è®¡ç®æ¹å¼ 9 + (-3 % 5) = 7
//                       â¬ï¸
// -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 10    <--- è¾å¥å¼
//  6  7  8  9 5 6 7 8 9 5 6 7 8 9 5     <--- å¯çè§£ä¸º [5-9] ä¸åå°å¾ªç¯
gsap.utils.wrap(5, 10, -3) // 7


// 3ï¸â£ å¨åºé´åçå¼ ç´æ¥è¿åå³å¯
gsap.utils.wrap(5, 10, 6) // 6

// 4ï¸â£ å¯å¤ç¨å½æ°å½¢å¼
const wrap = gsap.utils.wrap(5, 10)
wrap(8)  // 8  èå´åç´æ¥è¿å
wrap(10) // 5 = 5 + (10 % 10)
wrap(13) // 8 = 5 + (13 % 10)
wrap(-4) // 6 = 10 + (-4 % 5)
```

::: tip ð

`wrap(minimum, maximum, input)` æå°å¼ä¸º `minimum`ï¼ æå¤§å¼ä¸º `maximum - 1` ï¼æ³¨æè¿ä¸ªåå¼èå´ï¼

å¶è®¡ç®å½æ°ä¸ºï¼

```js
function wrap(min, max, value) {
    const range = max - min
    return (range + (value - min) % range) % range + min
}
```

:::



2ï¸â£ `æ°ç»å½¢å¼`

```js {1,6,9}
// 1ï¸â£ èå´åï¼è¿åå¯¹åºçç´¢å¼ä½ç½®
// 0 1 2 3 4 5 6  <--- ç´¢å¼ä½ç½®ï¼ç´¢å¼ä»0å¼å§
// r g b r g b r  <--- éå¤æ°ç»
gsap.utils.wrap(['r', 'g', 'b'], 1) // 'g'

// 2ï¸â£ è¶åºç´¢å¼ ðè®¡ç®å¬å¼ index % arr.length
gsap.utils.wrap(['r', 'g', 'b'], 5) // 'b'  5 % 3 = 2 ç´¢å¼ä¸º2

// 3ï¸â£ å¤ç¨å½æ°å½¢å¼
const wrap = gsap.utils.wrap(['r', 'g', 'b'])
wrap(0) // 'r'
wrap(3) // 'r'
wrap(4) // 'g'
```

::: tip ð

å¯¹äºè¶è¿æ°ç»é¿åº¦çç´¢å¼çè®¡ç®å¬å¼ä¸º `arr[index % arr.length]`

:::



[wrap vs wrapYoyo - @codepen](https://codepen.io/GreenSock/pen/WNeWZWb/5364a46c2767c6258132f7805ea0035e)



```js {5,15}
gsap.to("#ball1", {
  x: 10000,
  modifiers: {
    x: gsap.utils.unitize(
      gsap.utils.wrap(0, window.innerWidth),
      'px'
    )
  }
});

gsap.to("#ball2", {
  x: 10000,
  modifiers: {
    x: gsap.utils.unitize(
      gsap.utils.wrapYoyo(0, window.innerWidth),
      'px'
    )
  }
})
```

è§é¢æç¨ï¼[GSAP3è¿é¶ - gsap.utils.wrap()](https://www.bilibili.com/video/BV1T8411b7sc)

<iframe width="560" height="450" src="//player.bilibili.com/player.html?aid=218250566&bvid=BV1T8411b7sc&cid=840794893&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

codepen: [GSAP utils wrap & wrapYoyo](https://codepen.io/JamesSawyer/pen/XWEjqBp)
<iframe height="300" style="width: 100%;" scrolling="no" title="16 - GSAP utils wrap &amp; wrapYoyo" src="https://codepen.io/JamesSawyer/embed/preview/XWEjqBp?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/XWEjqBp">
  16 - GSAP utils wrap &amp; wrapYoyo</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ææ¡£å°åï¼

- [gsap.utils.wrap()](https://greensock.com/docs/v3/GSAP/UtilityMethods/wrap())


::: details ðTSå®ä¹
```typescript
/**
 * Returns the next number in a range after the given index, jumping to the start after the end has been reached.
 * 
 * ```js
 * let color = gsap.utils.wrap(["red", "green", "yellow"], 5); // "yellow"
 * 
 * let wrapper = gsap.utils.wrap(["red", "green", "yellow"]); // no value = reusable function
 * let color = wrapper(5) // "yellow"
 * ```
 *
 * @param {number} value1
 * @param {number} value2
 * @param {number} [index]
 * @returns {string} The wrapped value or wrap function
 * @memberof gsap.utils
 */
function wrap(value1: number, value2: number, index: number): number;
function wrap(value1: number, value2: number): (index: number) => number;
/**
 * Returns the next item in an array after the given index, jumping to the start after the end has been reached.
 * 
 * ```js
 * let color = gsap.utils.wrap(["red", "green", "yellow"], 5); // "yellow"
 * 
 * let wrapper = gsap.utils.wrap(["red", "green", "yellow"]); // no value = reusable function
 * let color = wrapper(5) // "yellow"
 * ```
 *
 * @param {T[]} values
 * @param {number} [index]
 * @returns {string} The wrapper value or wrap function
 * @memberof gsap.utils
 */
function wrap<T>(values: T[], index: number): T;
function wrap<T>(values: T[]): (index: number) => T;
```
:::

2022å¹´11æ13æ¥20:13:38

