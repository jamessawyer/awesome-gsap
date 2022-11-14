---
title: gsap.utils.pipe()
---

📚 之前工具类中已经看到过这个工具方法了，这个就是函数编程的用法，传入多个函数，函数 `从左向右` 依次调用，前一个函数的放回结果是后一个函数的输入值。

它存在一种形式：
 - 接收任意多个 `functions` 作为其参数，返回一个函数

🌰
```js {9}
// 不使用 pipe()
const result1 = func1(value)
const result2 = func2(result1)
const result3 = func3(result2)

// 或者写在一起 😅
func3(func2(func1(value)))

// 使用 pipe() 优雅 😏
const transformer = gsap.utils.pipe(
  func1,
  func2,
  func3
)
// 调用
transformer(value)
```

🚀 高级用法，使用 pipe 进行函数编程：

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

文档地址：
 - [gsap.utils.pipe()](https://greensock.com/docs/v3/GSAP/UtilityMethods/pipe())

::: details 📚TS定义
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

2022年11月09日17:55:35
