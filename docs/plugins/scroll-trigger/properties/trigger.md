---
title: trigger Property
---



📚 定义：

`.trigger: Element | undefined` 触发元素 (如果定义了的话)。使用选择器，比如 `.trigger`，返回的仍是元素本身

- 只读，可选
- 🚨注意，ScrollTrigger可以不用定义 `trigger` 属性，因为 `start` & `end` 可以是 **`numbers`**，表示具体滚动值，而不需要是基于正常文档流中的元素



🌰

```js {7}

const st = ScrollTrigger.create({
  trigger: '.trigger',
  start: 'top center',
  end: '+=500',
})

console.log(st.trigger) // trigger元素（不是选择器文本）
```



文档地址：

- [ScrollTrigger - trigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger/trigger)



2022年10月20日13:59:20
