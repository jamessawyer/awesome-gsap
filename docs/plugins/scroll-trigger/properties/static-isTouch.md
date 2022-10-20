---
title: ScrollTrigger.isTouch Property
---



📚 定义：

`ScrollTrigger.isTouch: Number` 识别当前设备touch能力的方式

- `0` 表示只能 `mouse/pointer` 没有touch

 - `1` 只能touch
 - `2` 鼠标 + touch 比如平板


🌰

```js
if (ScrollTrigger.isTouch) {
  // touch 设备
}

// 或使用具体值
if (ScrollTrigger.isTouch === 1) {
  // touch-only
}
```



文档地址：

- [ScrollTrigger.isTouch](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.isTouch)



2022年10月20日11:49:21

