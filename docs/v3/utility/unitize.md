---
title: gsap.utils.unitize()
---

📚这个工具就是用于包装其它函数，对输出结果添加指定的单位。

它存在 `1` 种形式：

1. `unitize(function[, unit])` 包装指定的函数，给该函数返回的结果添加单位
   - `function: Function` - 被包装的函数
   - `unit: String` - 可选！指定添加的单位。如果忽略这个参数，原始输入的单位将作为最后添加的单位😎



🌰

```js {1,5,7,12,15,21}
// 1️⃣ 给clamp()函数返回的结果添加 `px` 单位
const clamp = gsap.utils.unitize(gsap.utils.clamp(0, 100), 'px')
clamp(132) // '100px'
clamp(67)  // '67px'
clamp('-20%') // '0px' 输入的单位将被去掉，返回结果添加指定的单位

// 2️⃣ 💡没有指定添加的单位，则使用输入的单位
const wrap = gsap.utils.unitize(gsap.utils.wrap(0, 100))
wrap('150px') // '50px'   使用输入的 `px` 作为返回结果的单位
wrap('130%')  // 30%      使用输入的 `%` 作为返回结果的单位

// 3️⃣ 强制使用某个单位，比如 `%`
const map = gsap.utils.unitize(gsap.utils.mapRange(-10, 10, 0, 100), '%')
map(0)     // '50%'
map('5px') // '75%'  📚输入值会先被去掉单位

// 4️⃣ modifier函数中有用
gsap.to('.class', {
  x: 1000,
  modifier: {
    // 📚输入的值是带单位的
    // 但是 `unitize` 会先将其单位去掉，得到的结果再添加指定的单位或者原单位
    x: gsap.utils.unitize(gsap.utils.wrap(0, window.innerWidth), 'px')
  }
})
```



::: tip



本质上，unitize()会使用 `parseFloat()` 对输入的值进行处理，得到数字部分，因此，如果输入的参数不是数字开头，则可能出现问题

```js
const clamp = gsap.utils.unitize(gsap.utils.clamp(0, 100), 'px')

clamp('1abc') // ✅ '1px'
clamp('abc1') // 😅 'NaNpx'
```

:::



文档地址：

- [gsap.utils.unitize()](https://greensock.com/docs/v3/GSAP/UtilityMethods/unitize())

2022年11月13日18:57:21
