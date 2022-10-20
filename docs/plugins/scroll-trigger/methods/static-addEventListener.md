
---
title: ScrollTrigger.addEventListener
---



📚 定义：

`ScrollTrigger.addEventListener(type: String, callback: Function): null` 
- 对 `"scrollStart" | "scrollEnd" | "refreshInit" | "revert" | "matchMedia" | "refresh"` 全局事件进行监听，不绑定特定的ScrollTrigger实例
- 参数
  - `type: String` : 事件类型，`"scrollStart" | "scrollEnd" | "refreshInit" | "revert" | "matchMedia" | "refresh"`
  - `callback: Function`：事件回调函数

详细：
- `"matchMedia"` - 当达到 ScrollTrigger.matchMedia() 断点，并完成执行时触发
- `"refreshInit"` - 当resize发生后，ScrollTrigger重新计算start & end值之前触发。或者你直接调用 [ScrollTrigger.refresh()](./static-refresh)方法时，也会触发这个事件
- `"refresh"` - 当refresh发生时，ScrollTrigger完成所有start & end值计算后，触发此事件（通常是resize后或直接调用crollTrigger.refresh()方法时）
- `"revert"` - 当ScrollTrigger回退到原始状态，或在它移除所有pingning spacers等触发。一般在 `refreshInit` 和 `refresh` 事件之间
- `"scrollStart"` - 当ScrollTrigger相关的scroller开始滚动时触发
- `"scrollEnd"` - 当ScrollTrigger相关的scroller停止滚动（当自从上次滚动东事件发生后200ms后，并且用户鼠标没有按压在滚动条/文档上）


这些事件都是 `全局` 发送的，而不是绑定某个特定ScrollTrigger的
🌰
```js
ScrollTrigger.addEventListener(
  'scrollEnd',
  () => console.log('Scrolling Ended!')
)
```


文档地址：

- [ScrollTrigger.addEventListener](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.addEventListener())



2022年10月20日14:24:45
