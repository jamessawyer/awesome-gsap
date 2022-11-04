---
title: gsap.utils.getUnit()
---

返回给定字符串（`数字 + 单位` 形式）的的 `单位`（本质上就是一个正则匹配😁）

🌰：
```js
// 返回CSS值的单位
gsap.utils.getUnit('100%')  // '%''
gsap.utils.getUnit('100vw') // 'vw'

// 对于非正常单位 也能返回
gsap.utils.getUnit('100x') // 'x'

// 非数字开头的
gsap.utils.getUnit('ab100') // ''
```

文档地址：
- [gsap.utils.getUnit()](https://greensock.com/docs/v3/GSAP/UtilityMethods/getUnit())

2022年11月04日09:45:47
