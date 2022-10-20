---
title: ScrollTrigger.refresh
---
[[toc]]


📚 定义：

`ScrollTrigger.addEventListener(safe: Boolean)` 
- 对页面中所有的ScrollTrigger都重新计算位置。当window/scroller resize时，它会自动发生。但是你也可以通过调用 `ScrollTrigger.refresh()` 强制刷新。例如，如果你对DOM进行更改，将导致回流和位置更改(如展开内容)。
- 参数
  - `safe: Boolean` : 如果为 `true`，它至少等待一个requestAnimationFrame tick，大约200ms后开始刷新。这很有用，因为有时浏览器实际上不会立即呈现dom相关的更改，从而导致测量不准确。
  - 例如，如果你给一个可以展开其内容的元素添加 `click` 事件，并且你在事件回调中调用 `ScrollTrigger.refresh()`，这个改变可能在那个时间点还没有完全渲染，因此这里是很适合开启 `safe` 😎


## 刷新时会发生什么？
每个ScrollTrigger都会进行如下步骤（按实例创建的顺序）：
1. `refreshInit` 事件被触发
2. 任何固定元素（`pinned elements`）会临时回退到它们非固定状态（它们在文档中的自然位置）
3. 如果使用了 `scrub`，动画会临时重置到开始状态
4. ScrollTrigger的start & end位置会基于其当前DOM(自然流)进行重新计算。这也意味着，如果你使用了基于函数的 `start` | `end` 值，它们也会被调用🤩
5. 任何固定元素和动画会依据它们的新的位置或进度重启（re-enable）
6. 如果进度（progress）发生变化，`update()`回调函数会被调用
7. ScrollTrigger实例的 `onRefresh` 回调被触发


## 高级：监听 refresh|refreshInit 事件
ScrollTrigger会在所有ScrollTriggers刷新前立即执行 `refreshInit` 事件，在所有ScrollTriggers刷新后立即执行 `refresh` 事件。 你可以添加一个 [事件监听器](./static-addEventListener)：
```js {2,6}
ScrollTrigger.addEventListener('refreshInit', function() {
  // 这个事件在刷新前调用
})

ScrollTrigger.addEventListener('refresh', function() {
  // 这个事件在所有ScrollTriggers刷新后调用
})
```

这些事件都是 `全局` 发送的，而不是绑定某个特定ScrollTrigger的
🌰
```js
ScrollTrigger.addEventListener(
  'scrollEnd',
  () => console.log('Scrolling Ended!')
)
```
同时还有一个[移除事件监听](./static-removeEventListener)的方法。注意，这些方法都是 `静态的`


## refresh() 和 update() 的区别是什么？
`refresh()` 是关于ScrollTrigger `start | end` 位置依据当前DOM重新计算；而 `update()` 简单的检查scroller滚动位置并更新相关联的动画和触发回调（如果必要的话）。
因此，`refresh()` 设计更多的工作，它也会最终调用 `update()`。 当DOM改变或者你需要强制重新计算 `start|end` 位置时，你才会去调用 `refresh()`。


文档地址：

- [ScrollTrigger.refresh()](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.refresh())


2022年10月20日17:40:12
