---
title: gsap.utils.distribute()
---

`返回一个函数`，基于给定输入值，对数组值进行分布（`distribute`）
- 根据各种配置选项在数组中的元素之间分配数量。
- 它也是 [Advanced Staggers](https://greensock.com/docs/v3/Staggers) 内部使用的工具函数，但是你可以将它用于任何值😎
- 他本质上就是基于元素在数组中的位置进行赋值📚



📚 `gsap.utils.distribute(config: Object): Function`

- 参数 `config`: 输入值如何被分布的配置对象，所有属性都可选
  - `base: {Number}` - 起始的基础值，默认是 `0`
  - `amount: {Number}` - 给所有目标进行分布的总量（这个量在返回时被添加到 `base` 中）。假设 `amount: 1`， 有 `100` 个目标元素，则每个返回值之间有 `1 / 100 = 0.01` 的差异。如果你喜欢指定每个目标之间差异量，可以使用 `each` 属性
  - `each: {Number}` - 添加给每个目标的量（这个量在返回时被添加到 `base` 中）。假设 `each: 1`，有 `4` 个目标元素，因此会返回 `0, 1, 2, 3`。如果你喜欢分配的`总量`，你可以使用上面的 `amount` 属性
  - `from: {Number | String | Array}` - 目标元素起始位置，可以是一个索引；或者 'start' | 'center' | 'end' | 'edges' | 'random' 这样的关键词；又或者 沿着x轴和y轴的比率数组, eg: [0.25, 0.75]；默认是 `0`
  - `grid: {String | Array}` - 基于元素在网格`[行，列]`中的位置进行分布，如[5,10]，而不是平面数组。可以使用 `auto` 让GSAP尝试自动检测DOM元素的列和行数
  - `axis: {String}` - 对于基于网格的分布，可以将测量限制在一个轴上（`'x' | 'y'`）
  - `ease: {Ease}` - 分布的缓动函数；默认 `none`



🌰
```js {2,5,8,14,18,21}
let distributor = gsap.utils.distribute({
  // 起始的基础值（默认是 0）
  base: 50,

  // 分配给目标的总量（这个数量在返回时被添加到 “base” 中）
  amount: 100,

  // 目标数组中开始位置 默认 0
  // 可以是一个索引
  // 或者 'start' | 'center' | 'end' | 'edges' | 'random' 这样的关键词
  // 或者 沿着x轴和y轴的比率数组, eg: [0.25, 0.75]
  from: 'center',

  // 基于元素在网格[rows，columns]中的位置而不是平面数组中的位置进行分布
  // 你也可以以数组形式定义rows & columns. eg: [5, 10]
  grid: 'auto',

  // 对于基于网格进行分布的，你可以将测量限定在某个轴 'x' | 'y'
  axis: 'y',

  // 分布缓动函数
  ease: 'power1.inOut'
})

// 获取 class="box" 的元素数组
let targets = gsap.utils.toArray('.box')

// 现在，对于任何目标元素，我们只需从targets数组(以及目标和数组)中输入它的索引,
// 它将执行所有的计算并返回适当的数量:
let distributedValue = distributor(2, target[2], targets)
```

**它可以直接用于Tween中**：

```js
// 对所有 '.class' 元素进行缩放动画
// 中间元素为 0.5，最外层元素缩放为 3 （2.5 + 0.5）
gsap.to('.class', {
  scale: gsap.utils.distribute({
    base: 0.5,
    amount: 2.5,
    from: 'center'
  })
})
```

视频教程： [gsap.utils.distribute - @youtube](https://youtu.be/PxcnwTLClnI)



<iframe width="560" height="450" src="//player.bilibili.com/player.html?aid=430809744&bvid=BV1EG411g7bt&cid=840813685&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>



<iframe width="560" height="450" src="//player.bilibili.com/player.html?aid=900818149&bvid=BV1FN4y1K78G&cid=840813870&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>



[distributor demo - @codepen](https://codepen.io/GreenSock/pen/qBVyZmd)



文档地址：

\- [gsap.utils.distribute()](https://greensock.com/docs/v3/GSAP/UtilityMethods/distribute())



2022年11月04日10:34:35

