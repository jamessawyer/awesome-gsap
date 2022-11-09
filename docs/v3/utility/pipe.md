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


2022年11月09日17:55:35
