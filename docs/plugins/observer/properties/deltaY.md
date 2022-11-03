---
title: deltaY
---


📚 定义：

`.deltaY: Number` 自上次在该轴上触发回调以来的垂直变化量(以像素为单位)。比如：
- `onChangeY` | `onDown`
- 它只会影响Observer观察的事件类型。 比如 `type: "wheel,touch"` 只追踪滚轮和touch事件的delta值
- 默认情况下，touch & pointer 事件只在 **`按压或拖动`** 时才被追踪
- 但是如果你定义了 `onMove` 回调（追踪 `pointermove | mousemove` 事件）,deltaY会在悬浮在目标元素上时也被追踪




文档地址：

- [Observer - deltaY](https://greensock.com/docs/v3/Plugins/Observer/deltaY)



2022年11月03日17:38:04

