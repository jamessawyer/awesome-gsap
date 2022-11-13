---
title: gsap.utils.wrap()
---

📚 这个工具使返回结果限定在某个范围或者指定数组内
 - 如果超过该范围则 **重头再开始**，如果低于该范围，则反向重来，具体计算公式下面示例中已给出😎
 - 限定在指定区间范围有点类似于 [clamp()](./clamp)，它们的差异在于，`wrap()` 会对超出部分循环往复，而 `clamp()` 则直接将超出的部分设置为最小值或最大值

它存在 `2` 种形式：

1. `wrap(minimum, maximum[, input])` 将结果限定在 `[minimum, maximum - 1]` 范围内
   - `minimum: Number` 最小值
   - `maximum: Number` 最大值，🚨请注意，区间是`不包含`最大值的
   - `input: Number` 可选！输入的值
     - 如果不填写这个参数，和其它工具函数一样，wrap()将返回一个可复用得函数
     - 如果填写这个参数，则直接返回结果；如果输入的值 `>= maximum` ，则重头开始计算；如果输入的值 `<minimum` 则重反方向开始计算
2. `wrap(array[, index])` 将结果限定在数组区间
   - `array: Array` - 数组元素
   - `index: Number` - 可选；数组索引。



1️⃣ `提供最小值和最大值`

```js {1-3,8,17,20}
// 1️⃣ 超过最大值，重头来
// 限定区间为 [5, 9]，不包含10
// 📚 12 比 最大值10 多2，因此重头来，得到 5 + (12 % 10) = 7
//  5 6 7 8 9 10 11 12 13 14   <--- 输入值
//  5 6 7 8 9 5   6  7  8  9   <--- 可理解为 [5-9] 不停地循环
gsap.utils.wrap(5, 10, 12) // 7

// 2️⃣ 低于最小值，反向重来
// -3 比 最小值5还要小，它从最大值开始往回数
// 📚 计算方式 9 + (-3 % 5) = 7
//                       ⬇️
// -4 -3 -2 -1 0 1 2 3 4 5 6 7 8 9 10    <--- 输入值
//  6  7  8  9 5 6 7 8 9 5 6 7 8 9 5     <--- 可理解为 [5-9] 不停地循环
gsap.utils.wrap(5, 10, -3) // 7


// 3️⃣ 在区间内的值 直接返回即可
gsap.utils.wrap(5, 10, 6) // 6

// 4️⃣ 可复用函数形式
const wrap = gsap.utils.wrap(5, 10)
wrap(8)  // 8  范围内直接返回
wrap(10) // 5 = 5 + (10 % 10)
wrap(13) // 8 = 5 + (13 % 10)
wrap(-4) // 6 = 10 + (-4 % 5)
```

::: tip 📚

`wrap(minimum, maximum, input)` 最小值为 `minimum`， 最大值为 `maximum - 1` ，注意这个取值范围：

其计算函数为：

```js
function wrap(min, max, value) {
    const range = max - min
    return (range + (value - min) % range) % range + min
}
```

:::



2️⃣ `数组形式`

```js {1,6,9}
// 1️⃣ 范围内，返回对应的索引位置
// 0 1 2 3 4 5 6  <--- 索引位置，索引从0开始
// r g b r g b r  <--- 重复数组
gsap.utils.wrap(['r', 'g', 'b'], 1) // 'g'

// 2️⃣ 超出索引 📚计算公式 index % arr.length
gsap.utils.wrap(['r', 'g', 'b'], 5) // 'b'  5 % 3 = 2 索引为2

// 3️⃣ 复用函数形式
const wrap = gsap.utils.wrap(['r', 'g', 'b'])
wrap(0) // 'r'
wrap(3) // 'r'
wrap(4) // 'g'
```

::: tip 📚

对于超过数组长度的索引的计算公式为 `arr[index % arr.length]`

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



文档地址：

- [gsap.utils.wrap()](https://greensock.com/docs/v3/GSAP/UtilityMethods/wrap())

2022年11月13日20:13:38

