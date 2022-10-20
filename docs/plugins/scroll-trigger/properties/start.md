---
title: start Property
---


📚 定义：

`.start: Number` ScrollTrigger开始滚动的位置，数字类型，单位 `pixels`

- 这个值在ScrollTrigger刷新的时候被计算，因此当window/scroller resize时会重新计算
- ScrollTrigger的 `start` & `end` 属性始终都是数字类型，单位pixels，反应滚动位置


🌰

假设 trigger 元素在viewport 100px下（out of view），ScrollTrigger的 [vars](./vars) 定义为 `start: 'top bottom'`，则ScrollTrigger计算的 `start` 属性将是 `100`（即再滚动100px到达开始点）


文档地址：

- [ScrollTrigger - start](https://greensock.com/docs/v3/Plugins/ScrollTrigger/start)


2022年10月20日13:52:12
