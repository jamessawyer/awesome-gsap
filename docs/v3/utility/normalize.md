---
title: gasp.utils.normalize()
---

📚 将提供的值，映射为区间的比例，有点类似 [mapRange](./mapRange)

- 一般将其映射到 `0-1`，类似 `progress` 进度值
- 但是如果超出了区间，也能进行映射



它存在2种形式：

1. 传入`3`个参数，直接返回结果 `normalize(minimum, maximum, valueToNormalize)`:
   - `minimum: Number` - 区间的下限值
   - `maximum: Number` - 区间的上限值
   - `valueToNormalize: Number` - 待范式化的值
2. 传入`2`个参数，返回一个可复用的函数，这个函数接收 `valueToNormalize` 作为其参数 - `normalize(minimum, maximum)`



1️⃣ 传入`3`个参数，直接返回结果

🌰 

```js {1,6}
gsap.utils.normalize(-10, 10, 0) // 中点位置对应 0.5

gsap.utils.normalize(0, 100, 25) // 0.25


// 🚨 超出映射访问也能进行映射
gsap.utils.normalize(0, 100, 200) // 200 / (100 - 0) = 2

gsap.utils.normalize(0, 100, -50) // -50 / (100 - 0) = -0.5
```



2️⃣ 传入`2`个参数，得到可复用的函数

🌰

```js {1}
// 总是对区间 [0, 100] 进行映射
const clamper = gsap.utils.normalize(0, 100)

clamper(50) // 0.5
clamper(10) // 0.1
clamper(75) // 0.75
```



🚀 高级用法，使用 `pipe` 进行函数编程：

```js
const transformer = gsap.utils.pipe(
  gsap.utils.clamp(0, 100),
  gsap.utils.normalize(0, 100)
)

transformer(125) // 1
transformer(25)  // 0.25
```




文档地址：

- [gsap.utils.normalize()](https://greensock.com/docs/v3/GSAP/UtilityMethods/normalize())

::: details 📚TS定义
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

2022年11月08日14:54:58

