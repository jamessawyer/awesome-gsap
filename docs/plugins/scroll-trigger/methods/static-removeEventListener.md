---
title: ScrollTrigger.removeEventListener
---



📚 定义：

`ScrollTrigger.removeEventListener(type: String, callback: Function)` 
- 移除所有事件监听
- 参数
  - `type: String` : 事件类型，`"scrollStart" | "scrollEnd" | "refreshInit" | "revert" | "matchMedia" | "refresh"`
  - `callback: Function`：事件回调函数

详细：
- `"refreshInit"` - 当resize发生后，ScrollTrigger重新计算start & end值之前触发。或者你直接调用 [ScrollTrigger.refresh()](./static-refresh)方法时，也会触发这个事件
- `"refresh"` - 当refresh发生时，ScrollTrigger完成所有start & end值计算后，触发此事件（通常是resize后或直接调用crollTrigger.refresh()方法时）
- `"scrollStart"` - 当ScrollTrigger相关的scroller开始滚动时触发
- `"scrollEnd"` - 当ScrollTrigger相关的scroller停止滚动（当自从上次滚动东事件发生后200ms后，并且用户鼠标没有按压在滚动条/文档上）

🌰
```js
ScrollTrigger.removeEventListener(
  'scrollEnd',
  yourCallbackFunc
)
```

文档地址：

- [ScrollTrigger.removeEventListener()](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.removeEventListener())

2022年10月20日17:47:13
