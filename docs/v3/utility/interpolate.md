---
title: gsap.utils.interpolate()
---

对2个相似类型（`数字`， `颜色`， `字符串`， `数组`， `包含了数字的复杂字符串`，`有多个属性的对象`等等，几乎任意值😏）进行`线性`插值操作。你可以提供一个 `0-1` 之间的 `progress` 值，比如 `0.5` 表示一半，它将依次返回该插值结果。



它存在3种形式：

1. 传入3个参数，直接得到结果 `interpolate(startValue, endValue, progress)`
   - `startValue: Any` 起始值。可以是任意类型😎（Number, String, Array, complex String, color, Object）
   - `endValue: Any` 终止值，和 `startValue` 相同的类型
   - `progress: Number` - `0-1` 直接的一个值，`0.5` 表示一半，`1` 表示结束
2. 传入2个参数，
   - 如果第一个参数是一个数组，则直接返回结果；
   - 如果第一个和第二个参数表示 `startValue` & `endValue` 则返回一个函数，这个函数接受 `progress` 作为其参数
3. 传入1个参数，参数为数组，则返回一个函数，这个函数接受 `progress` 作为其参数



1️⃣ `传入3个参数`

🌰 startValue + endValue + progress -> 直接返回插值结果

```js {1,4,7,10}
// 数字类型 0-500插值的一半
gsap.utils.interpolate(0, 500, 0.5) // 250

// 字符串类型  '20px' - '40px' 插值的一半
gsap.utils.interpolate('20px', '40px', 0.5) // '30px'

// 颜色值 进行插值
gsap.utils.interpolate('red', 'blue', 0.5) // 'rgba(128, 0, 128, 1)'

// 包含多个属性的对象
gsap.utils.interpolate( 
  {a: 0, b: 10, c: 'red'},
  {a: 100, b: 20, c: 'blue'},
  0.5
) // {a: 50, b: 15, c: "rgba(128,0,128,1)"}

//
```





::: tip

返回的颜色值为 `rgba()` | `hsla()` 形式

:::



2️⃣ `传入2个参数`

🌰 传入数组 + 进度值 -> 直接返回结果

```js
// 数字数组
gsap.utils.interpolate([100, 50, 500], 0.5) // 50
gsap.utils.interpolate([100, 50, 500], 0.75) // 275

// 颜色
gsap.utils.interpolate(['red', 'green', 'blue'], 0.5) // 'green'
gsap.utils.interpolate('red', 'green', 'blue'], 0.25) // 'rgba(128,64,0,1)'
```

🌰 传入 `startValue` + `endValue` -> 返回一个复用函数，该函数接收进度值

```js {1,8}
// 得到一个函数，总是对 0-100 进行插值操作
const interp = gsap.utils.interpolate(0, 100)

interp(0.5) // 50
interp(0.25) // 25
interp(1) // 100

// 😎 对包含多个属性的对象 也可以
const interp2 = gsap.utils.interpolate(
  {a: 0, b: 10, c: 'red'},
  {a: 100, b: 20, c: 'blue'}
)
interp2(0.5) // {a: 50, b: 15, c: 'rgba(128,0,128,1)'}
```



3️⃣ `传入1个参数`

🌰 传入一个数组 -> 返回一个复用函数，该函数接收进度值

```js {1,7}
// 得到一个函数，总是对该数组进行插值操作
const interp = gsap.utils.interpolate([100, 50, 100])

interp(0.5) // 50
interp(0.25) // 75

// 😎 对颜色数组 也可以
const interp1 = gsap.utils.interpolate(['red', 'green', 'blue'])
interp1(0.25) // 'rgba(128,64,0,1)'
```





🚀 高级用法，使用 `pipe` 进行函数编程

```js
const colorizer = gsap.utils.pipe(
  // 先将值钳制在 [0, 100] 中
  gsap.utils.clamp(0, 100),
  // 然后将 [0, 100] 之间的值，转换为进度值 0-1
  gsap.utils.normalize(0, 100),
  // 最后对该值进行插值操作
  gsap.utils.interpolate('red', 'blue')
)

// 现在可以随便填入一个值，进行一系列的转换操作，最后得到插值
colorizer(25.890) // 'rgba(189,0,66,1)'
```



视频：

- [How to interpolate() with GSAP - @youtube](https://youtu.be/x9XUqyvwzwM) 基本用法

  <iframe width="560" height="315" src="https://www.youtube.com/embed/x9XUqyvwzwM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- [GSAP 3 Utility Methods Demo - @youtube](https://youtu.be/NqiF5xIuMd0) 对应上面 `pipe` 高级用法

  <iframe width="560" height="315" src="https://www.youtube.com/embed/NqiF5xIuMd0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

​	

文档地址：

- [gsap.utils.interpolate()](https://greensock.com/docs/v3/GSAP/UtilityMethods/interpolate())


::: details 📚TS定义
```typescript
/**
 * Linearly interpolates between any two values of a similar type.
 * 
 * ```js
 * gsap.utils.interpolate(0, 500, 0.5); // 250
 * 
 * const interp = gsap.utils.interpolate(0, 100); // no value = reusable function
 * console.log( interp(0.5) ); // 50
 * ```
 *
 * @param {T} startValue
 * @param {T} endValue
 * @param {number} [number]
 * @returns {T | Function<number>} The interpolated value or interpolate function
 * @memberof gsap.utils
 */
function interpolate<T>(startValue: T, endValue: T, progress: number): T;
function interpolate<T>(startValue: T, endValue: T): (progress: number) => T;
/**
 * Linearly interpolates between any two values of a similar type.
 * 
 * ```js
 * gsap.utils.interpolate([100, 50, 500], 0.5); // 50
 * 
 * c interp = gsap.utils.interpolate([100, 50, 500]); // no value = reusable function
 * console.log( interp(0.5) ); // 50
 * ```
 *
 * @param {T[]} array
 * @param {number} progress
 * @returns {T | Function} The interpolated value or interpolate function
 * @memberof gsap.utils
 */
function interpolate<T>(array: T[], progress: number): T;
function interpolate<T>(array: T[]): (progress: number) => T;
```
:::


2022年11月07日14:42:10