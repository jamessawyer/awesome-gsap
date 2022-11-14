---
title: gsap.utils.mapRange()
---

📚 将某个数字在第1个区间的相对位置映射到第2个区间对应的位置。
- 比如数字 `50` 在区间 `[0, 100]` 的位置为其中点，那么映射到 `[0, 500]` 对应一半的位置为 `250` 
- 又比如，假设你有一个slider，它的区间为 `[0, 200]`，当你拖动slider时，屏幕上的某个物体会在屏幕上x轴方向移动，映射的数组为 `[0, window.innerWidth]`。那么当slider在 `0` 位置时，物体在最左侧；当slider在 `100` 位置时，物体在 `window.innerWidth / 2` 屏幕中心位置；当slider在 `200` 位置时，物体在 `window.innerWidth`，即最右侧位置 

它存在2种形式：
1. 传入5个参数，直接返回结果 `mapRange(inMin, inMax, outMin, outMax, valueToMap)`:
   - `inMin: Number`: 第1个区间的下限值
   - `inMax: Number`: 第1个区间的上限值
   - `outMin: Number`: 第2个区间的下限值
   - `outMax: Number`: 第2个区间的上限值
   - `valueToMap: Number`: 待映射的值（该值一般在第一个区间 `[inMin, inMax]` 之间，但真的超过了区间也是可以被处理的😅）
2. 传入4个参数，返回一个可复用的函数，这个函数接收 `valueToMap` 作为其参数 - `mapRange(inMin, inMax, outMin, outMax)`



1️⃣ `传入5个参数，直接得到映射结果`

🌰

```js {1-2,16-17}
// 0 在 [-10, 10] 中点
// [100, 200] 中点位置为 150
gsap.utils.mapRange(
  -10, 10,     // 区间1
  100, 200,    // 区间2
  0            // 待映射的值
) // 150


gsap.utils.mapRange(
  0, 100,
  0, 500,
  50
) // 250

// 🚨 虽说被映射的值一般在第1个区间内
// 但如果真的超出区间，也是会被映射的
gsap.utils.mapRange(
  0, 100,
  0, 200,
  150     // 超出 [0, 100]
) // 按比例得到 300

gsap.utils.mapRange(
  0, 100,
  0, 200,
  -50     // 超出 [0, 100]
) // 按比例得到 -100
```



2️⃣ `传入4个参数，得到可复用的函数` 该函数总是对相同的2个区间进行映射

🌰

```js {1}
// 不提供第5个参数 valueToMap 返回一个可复用的函数
const mapper = gsap.utils.mapRange(
  0, 100,
  0, 250
)

mapper(50) // 125
mapper(10) // 25
```

🚀 高级用法，使用 `pipe` 进行函数编程：

```js {2,4,9}
const transformer = gsap.utils.pipe(
  // 将输入值限定在 [0, 100] 之间
  gsap.utils.clamp(0, 100),
  // 然后进行区间映射 [0, 100] -> [0, window.innerWidth]
  gsap.utils.mapRange(
    0, 100,
    0, window.innerWidth
  ),
  // 最后以 20 的增量进行捕获（或者吸附）
  gsap.utils.snap(20)
)

transformer(25.678) // 最后结果和 window.innerWidth 相关
```

视频：

- [GSAP 3 Utility Methods Demo - @youtube](https://youtu.be/NqiF5xIuMd0) 对应上面 `pipe` 高级用法（同 [interpolate](./interpolate) 中底部的视频）



文档地址：

- [gsap.utils.mapRange()](https://greensock.com/docs/v3/GSAP/UtilityMethods/mapRange())

::: details 📚TS定义
```typescript
 /**
 * Maps a number's relative placement within one range to the equivalent position in another range.
 * 
 * ```js
 * gsap.utils.mapRange(-10, 10, 100, 200, 0); // 150
 * 
 * const mapper = gsap.utils.mapRange(0, 100, 0, 250); // no value = reusable function
 * console.log( mapper(50) ); // 250
 * ```
 *
 * @param {number} inMin
 * @param {number} inMax
 * @param {number} outMin
 * @param {number} outMax
 * @param {number} [value]
 * @returns {number | Function} The mapped value or map function
 * @memberof gsap.utils
 */
function mapRange(inMin: number, inMax: number, outMin: number, outMax: number, value: number): number;
function mapRange(inMin: number, inMax: number, outMin: number, outMax: number): (value: number) => number;
```
:::

2022年11月08日14:29:34