---
title: gsap.utils.wrapYoyo()
---

📚 这个基本上和 [wrap()](./wrap) 差不多，唯一区别在于重复的方式不同，它类似动画中的 `yoyo` 效果。定义形式省略，参考 [wrap](./wrap)。

- 还有点差别在于，`wrapYoyo()` `包含` 最大值🚨



下面以例子来对比，这2者之间的区别：

```js
// 重复方式
// a b c d a b c d a b c d
const wrap = gsap.utils.wrap(['a', 'b', 'c', 'd'])

// 重复方式
// a b c d c b a b c d c b a
const wrapYoyo = gsap.utils.wrapYoyo(['a', 'b', 'c', 'd'])
```

将之前 `wrap()` 中的例子用 `wrapYoyo` 看一下差异：



1️⃣  `提供最小值和最大值`

🌰

```js {5,8,11}
// 1️⃣ 超过最大值，重头来
// 限定区间为 [5, 9]，不包含10
// 📚 12 比 最大值10 多2，因此重头来，得到 5 + (12 % 10) = 7
//  5 6 7 8 9 10 11 12 13 14   <--- 输入值
//  5 6 7 8 9 5   6  7  8  9   <--- 不包含最大值 可理解为 [5-9] 不停地`重复`循环
gsap.utils.wrap(5, 10, 12) // 7

// 💡 使用 wrapYoyo, 往复
// 📚 12 比 最大值10 多2，因此往复重来，得到 10 - (12 % 10) = 8
//  5 6 7 8 9 10 11 12 13 14   <--- 输入值
//  5 6 7 8 9 10  9  8  7  6   <--- 包含最大值 可理解为 [5-10] 不停地`往复`循环
gsap.utils.wrap(5, 10, 12) // 8


// 2️⃣ 低于最小值，反向重来
// -3 比 最小值5还要小，它从最大值开始往回数
// 📚 计算方式 9 + (-3 % 5) = 7
//                       ⬇️
// -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 10    <--- 输入值
//  6  7  8  9 5 6 7 8 9 5 6 7 8 9 5     <--- 可理解为 [5-9] 不停地循环
gsap.utils.wrap(5, 10, -3) // 7

// 💡 使用 wrapYoyo, 往复
// -4 -3 -2 -1  0 1 2 3 4 5 6 7 8 9 10    <--- 输入值
//  6  7  8  9 10 9 8 7 6 5 6 7 8 9 10     <--- 可理解为 [5-10] 不停地`往复`循环
gsap.utils.wrapYoyo(5, 10, -3) // 7 = 5 - |-3 % 5|
```

::: tip

`wrapYoyo(minimum, maximum, input)` 最小值为 `minimum`， 最大值为 `maximum`:

```js
function wrapYoyo(min, max, value) {
  const range = max - min
  const toal = range * 2
  const tmp = (total * (value - min) % total) % total || 0
  return min + (tmp > range ? total - tmp : tmp)
}
```

:::



2️⃣ `数组形式`

```js {3,7}
// 1️⃣ 范围内，返回对应的索引位置
// 0 1 2 3 4 5 6  <--- 索引位置，索引从0开始
// r g b r g b r  <--- 重复数组
gsap.utils.wrap(['r', 'g', 'b'], 4) // 'g'

// 0 1 2 3 4 5 6  <--- 索引位置，索引从0开始
// r g b g r g b  <--- 循环往复数组
gsap.utils.wrapYoyo(['r', 'g', 'b'], 4) // 'r'
```


文档地址：

- [gsap.utils.wrapYoyo()](https://greensock.com/docs/v3/GSAP/UtilityMethods/wrapYoyo())

::: details 📚TS定义
```typescript
/**
 * Returns the next number in a range after the given index, wrapping backwards towards the start after the end has been reached.
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
function wrapYoyo(value1: number, value2: number, index: number): number;
function wrapYoyo(value1: number, value2: number): (index: number) => number;
/**
 * Returns the next item in an array after the given index, wrapping backwards towards the start after the end has been reached.
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
function wrapYoyo<T>(values: T[], index: number): T;
function wrapYoyo<T>(values: T[]): (index: number) => T;
```
:::

2022年11月13日21:40:13
