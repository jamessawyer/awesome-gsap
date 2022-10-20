---
title: end Property
---


📚 定义：

`.end: Number` ScrollTrigger结束滚动的位置，数字类型，单位 `pixels`

- 这个值在ScrollTrigger刷新的时候被计算，因此当window/scroller resize时会重新计算
- ScrollTrigger的 `start` & `end` 属性始终都是数字类型，单位pixels，反应滚动位置


🌰

假设 trigger 元素在viewport 100px下（out of view），ScrollTrigger的 [vars](https://greensock.com/docs/v3/Plugins/ScrollTrigger/vars) 定义为 `end: 'top bottom'`，则ScrollTrigger计算的 `end` 属性将是 `100`（即再滚动100px到达结束点）


文档地址：

- [ScrollTrigger - end](https://greensock.com/docs/v3/Plugins/ScrollTrigger/end)


2022年10月20日11:40:46
