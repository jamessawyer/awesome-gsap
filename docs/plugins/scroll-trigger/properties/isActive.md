---
title: isActive Property
---



📚 定义：

`.isActive: Boolean` 只有滚动位置在ScrollTrigger实例的 `start` 和 `end` 之间时为 `true`
 - 只读


🌰

```js {5}
ScrollTrigger.create({
  trigger: '.trigger',
  start: 'top center',
  end: '+=500',
  onUpdate: self => console.log('toggled. active?', self.isActive)
})
```



文档地址：

- [ScrollTrigger - isActive](https://greensock.com/docs/v3/Plugins/ScrollTrigger/isActive)



2022年10月20日11:44:19

