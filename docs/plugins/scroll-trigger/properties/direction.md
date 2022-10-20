---
title: direction Property
---



📚 定义：

`.direction: Number` 反应当前滚动的方向 - `1` 向前滚动；`-1` 向后滚动





🌰

```js {7}
ScrollTrigger.create({
  trigger: '.trigger',
  start: 'top center',
  end: '+=500',
  onUpdate: self => console.log('direction:', self.direction)
})
```



文档地址：

- [ScrollTrigger - direction](https://greensock.com/docs/v3/Plugins/ScrollTrigger/direction)



2022年10月20日11:34:10

