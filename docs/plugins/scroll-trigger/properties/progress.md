---
title: progress Property
---


📚 定义：

`.progess: Number` ScrollTrigger实例整体进度
- 只读
- `0` 表示开始； `0.5` 表示中间；`1` 表示结束



🌰
```js {5}
let st = ScrollTrigger.create({
  trigger: '.trigger',
  start: 'top center',
  end: '+=500'
  onUpdate: self => console.log('progress: ' + self.progress)
})
```

文档地址：

- [ScrollTrigger - progress](https://greensock.com/docs/v3/Plugins/ScrollTrigger/progress)


2022年10月20日13:45:10
