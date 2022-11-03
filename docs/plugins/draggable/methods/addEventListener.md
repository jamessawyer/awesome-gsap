---
title: .addEventListener
---



📚 定义：

`.addEventListener()` 
- 注册函数，每次特定类型的事件发生时触发该函数。函数内部 `this` 指向Draggable实例

支持事件：
- `press`
- `click`
- `dragstart`
- `drag`
- `dragend`
- `release`
- `throwcomplete`
- `throwupdate`


🌰 [Draggable addEventListener](https://codepen.io/JamesSawyer/pen/vYrGRoZ)
```js {3}
gsap.registerPlugin(Draggable)

const myDraggable = Draggable.create('#box', {
  bounds: '#container'
})[0]


myDraggable.addEventListener('press', onPress)

function onPress() {
  console.log('pressed', this) // this 表示 draggable实例
  // this.target 表示被拖动的元素
  gsap.to(this.target, { duration: 2, backgroundColor: 'purple' })
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/JamesSawyer/embed/preview/vYrGRoZ?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/vYrGRoZ">
  Untitled</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


文档地址：

- [.addEventListener](https://greensock.com/docs/v3/Plugins/Draggable/addEventListener())



2022年10月20日14:24:45
