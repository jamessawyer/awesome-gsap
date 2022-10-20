---
title: pin Property
---


📚 定义：

`.pin: Element | undefined` 被固定的元素。如果使用选择器，比如 `'.pin'`，返回的仍是元素本身，而不是选择器文本
- 只读



🌰
```js
let st = ScrollTrigger.create({
  trigger: '.trigger',
  pin: '.pin',
  start: 'top center',
  end: '+=500'
})

console.log(st.pin) // <div class="pin"></div> 元素
```

文档地址：

- [ScrollTrigger - pin](https://greensock.com/docs/v3/Plugins/ScrollTrigger/pin)


2022年10月20日13:42:23
