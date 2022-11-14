---
title: gsap.utils.clamp()
---

将一个数（假设 `num`）钳制（`clamp`）在某个区间（最小值`min` - 最大值`max`）：

- `num < min`, 返回 `min`
- `num > max`， 返回 `max`
- `min <= num <= max `，返回 `num`

它存在2种形式：

1. 传入3个参数，直接得到结果 `clamp(min, max, num)`
2. 传入2个参数，得到一个复用函数，该函数会记住 `min` & `max`，这样得到另一个工具函数，用于动态传入 `num` 😎 ，比如 `const clampNum = clamp(min, max)`，然后 `clampNum(num)`



🌰 

1️⃣ 直接返回结果的形式：

```js {1-2}
// 区间为 [0, 100], 105 > 100
// 因此返回最大值 100
gsap.utils.clamp(0, 100, 105) // 105

// -50 < 0 小于最小值， 因此返回0
gasp.utils.clamp(0, 100, -50) // 0

// 20 在 [0, 100] 之间，因此直接返回
gsap.utils.clamp(0, 100, 20) // 20
```

2️⃣ 作为函数复用😎

```js
// clamper函数总是将输入值限定在 [0, 100]区间
const clamper = gsap.utils.clamp(0, 100)

clamper(105) // 100
clamper(-50) // 0
clamper(20) // 20
```

🎉 **`tricks： 结合其它函数组成强大的转换工具函数`** 

::: tip

利用函数编程的范式，使用 `gsap.utils.pipe()` 将多个函数组合起来一起使用：

```js {1}
// pipe 从左到右执行顺序
const transformer = gsap.utils.pipe(
  // 先钳制在 [0, 100] 区间
  gsap.utils.clamp(0, 100),
  // 然后上面得到的值（假设X），映射为对应的屏幕宽度的位置
  // X / 100 = Y / window.innerWidth
  // 结果 Y = X / 100 * window.innerWidth
  gsap.utils.mapRange(0, 100, 0, window.innerWidth),
  // 最后 以20增量进行捕获
  gsap.utils.snap(20)
)

// 使用该工具函数
transformer(25.789)
```

:::



文档地址：

- [gsap.utils.clamp()](https://greensock.com/docs/v3/GSAP/UtilityMethods/clamp())


::: details 📚TS定义
```typescript
/**
 * Clamps a number between a given minimum and maximum. 
 * 
 * ```js
 * gsap.utils.clamp(0, 100, 105); // returns 100
 * 
 * const clamper = gsap.utils.clamp(0, 100); // no value = reusable function
 * console.log(clamper(105)); // returns 100
 * ```
 *
 * @param {number} minimum
 * @param {number} maximum
 * @param {number} [valueToClamp]
 * @returns {number | Function} The clamped number or function to clamp to given range
 * @memberof gsap.utils
 */
function clamp(minimum: number, maximum: number, valueToClamp: number): number;
function clamp(minimum: number, maximum: number): (valueToClamp: number) => number;
```
:::

2022年11月03日22:13:42
