---
title: gsap.utils.random()
---

📚 获取一个随机值或者可复用的函数，调用该函数得到一个随机值。

它存在 `3` 种形式：

1. `random(minimum, maximum[, snapIncrement, returnFunction])`
   - `minimum: Number` - 随机的最小值
   - `maximum: Number` - 随机的最大值
   - `snapIncrement: Number` - 可选！随机的增量，如果随机增量为 `5` 则随机的值都是5的倍数😎
   - `returnFunction: Boolean` - 可选！是否返回一个可复用的函数，默认值为 `false`，即直接返回随机的结果
2. `random(array[, returnFunction])`
   - `array: Array` - 随机从数组中选出一个值
   - `returnFunction: Boolean` - 可选！是否返回一个可复用的函数，默认值为 `false`，即直接返回随机的结果
3. `random(minimum, maximum[, returnFunction])` 
   - 同第一种形式，只是它最多3个参数，没有 `snapIncrement` 这个可选值



1️⃣ `最多4个参数，直接返回一个值或者复用函数` - 包含增量

🌰



```js {1,4,7-8}
// 直接返回一个 [-100, 100] 之间的随机值
gsap.utils.random(-100, 100) // 比如随机一个 77 | -20 等等

// 以5的增量返回一个随机值，返回值为 `5` 的倍数
gsap.utils.random(-100, 100, 5) // 返回5的倍数随机值，比如 25 | -15 | 80 | 0等等

// 返回一个可以复用的函数
// 这里会返回 10 的倍数的随机值
const random = gsap.utils.random(-100, 100, 10, true)
random() // 20
random() // -10
random() // -100
```



2️⃣ `从数组中随机挑选一个值或者复用函数`

🌰

```js {1,5}
// 随机返回一个数组中的值
gsap.utils.random(['red', 'blue', 'yellow']) // 'yellow'
gsap.utils.random(['red', 'blue', 'yellow']) // 'red'

// 返回一个可复用的函数，该函数始终从数组中挑选随机值
const random = gsap.utils.random(['red', 'blue', 'yellow'], true)
random() // 'red'
random() // 'blue'
```



3️⃣ `最多3个参数，直接返回一个值或者复用函数` - 不包含增量

🌰

```js {1,4}
// 直接返回一个随机值
gsap.utils.random(10, 300) // 比如 199

// 返回一个可复用的函数
const random = gsap.utils.random(10, 300, true)
random() // 19
random() // 33
```



::: tip BONUS🎉

`random` 还可以用于Tween的 `vars` 配置对象中，以 `"random(-100, 200)"` | `"random([red, blue, green])"` 这种字符串的形式：

```js {2,7}
gsap.to('.class', {
  // 从数组中随机挑选一个值返回
  x: 'random([0, 100, 200, 500])'
})

gsap.to('.class', {
  // 返回一个 5 的倍数的随机值
  x: 'random(-100, 100, 5)'
})
```

:::



当然它也可以用于 `pipe()` 函数中，进行函数编程。



文档地址：

- [gsap.utils.random()](https://greensock.com/docs/v3/GSAP/UtilityMethods/random())

::: details 📚TS定义
```typescript
/**
* Get a random number within a range, optionally rounding to an increment you provide.
* 
* ```js
* gsap.utils.random(-100, 100);
* gsap.utils.random(0, 500, 5); // snapped to the nearest value of 5
*
* const random = gsap.utils.random(-200, 500, 10, true); // reusable function
* console.log( random() ); 
* ```
*
* @param {number} minValue
* @param {number} maxValue
* @param {number} [snapIncrement]
* @param {boolean} [returnFunction]
* @returns {number | Function} The random number or random number generator function
* @memberof gsap.utils
*/
function random(minValue: number, maxValue: number, snapIncrement?: number): number;
function random<T extends boolean>(minValue: number, maxValue: number, returnFunction?: T): T extends true ? () => number : number;
function random<T extends boolean>(minValue: number, maxValue: number, snapIncrement: number, returnFunction?: T): T extends true ? () => number : number;
/**
* Get a random random element in an array.
* 
* ```js
* gsap.utils.random(["red", "blue", "green"]); //"red", "blue", or "green"
*
* const random = gsap.utils.random([0, 100, 200], true);
* console.log( random() ); // 0, 100, or 200 (randomly selected)
* ```
*
* @param {T[]} array
* @param {boolean} [returnFunction]
* @returns {number | Function} The random number or random number generator function
* @memberof gsap.utils
*/
function random<T>(array: T[]): T;
function random<T, U extends boolean>(array: T[], returnFunction?: U): U extends true ? () => T : T;
```
:::

2022年11月09日19:02:31

