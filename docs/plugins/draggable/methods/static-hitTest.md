---
title: Draggable.hitTest()
---



📚 定义：

`Draggable.hitTest(testObject: Object, threshold: [Number|String]): Boolean` 

- 对拖动元素是否与其他元素重叠提供一种简单的方式，可依据你定义的阈值（可选）
- 参数
  - `testObject: Object` : 进行hit测试的对象，可以是下列类型
    -  元素；
    - 包含 `pageX & pageY` 的 `mouse|touch` event；
    - 选择器（`#someElement`）;
    - 定义了矩形的通用对象，即包含 `top left right bottom` 属性
  - `threshold: [Number|String]`：默认为 `0`
    - 可以是数值类型，表示重叠的最小像素
    - 字符串,比如`50%`，重叠百分比
    - `0` 任何重叠
- 返回值
  - 如果感知到了重叠（根据你设置的 `threshold`），返回 `true`, 否则 `false`



🌰

```js {4}
Draggable.create('#element1', {
  type: 'x,y',
  onDragEnd: function(e) {
    // 查看是否与 `#element2` 元素重叠
    if (this.hitTest('#element2')) {
      // do stuff
      // 比如改变 `#element2` 背景色
    }
  }
})
```



默认情况，只要存在重叠，`hitTest()` 就会返回 `true`，但是你可以定义 `threshold` 参数，比如，至少重叠 `20px` 或者 `50%`：

```js
Draggable.create('#element1', {
  type: 'x,y',
  onDragEnd: function(e) {
    // 查看是否与 `#element2` 元素至少重叠 `20px`
    if (this.hitTest('#element2', 20)) {
      // do stuff
      // 比如改变 `#element2` 背景色
    }
    
    // 查看是否与 `#element2` 元素至少重叠 `50%`
    if (this.hitTest('#elements', '50%')) {
      // do stuff
    }
  }
})
```

[Draggable with droppable logic](https://codepen.io/GreenSock/pen/ndBZjZ)

<iframe height="300" style="width: 100%;" scrolling="no" title="Draggable with &quot;droppable&quot; logic" src="https://codepen.io/GreenSock/embed/preview/ndBZjZ?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/ndBZjZ">
  Draggable with &quot;droppable&quot; logic</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



::: tip 💡

你还可以使用 `hitTest(window)` 检测元素是否在viewport内可见。

:::



还有一个静态版本，传入元素和对象和threshold，比如 `Draggable.hitTest(element1, element2, 20)`，示例 [Draggable.hitTest() - codepen](https://codepen.io/GreenSock/pen/ezeRNz)

<iframe height="300" style="width: 100%;" scrolling="no" title="Draggable hitTest()" src="https://codepen.io/GreenSock/embed/preview/ezeRNz?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/ezeRNz">
  Draggable hitTest()</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>





::: warning

🚨对于非矩形形状，像素测量可能不太精准。`hitTest()` 使用浏览器的 `getBoundingClientRect()` 方法获取矩形边界，因此如果你旋转元素或者元素是圆形形状，边界可能比看起来的要更大。

:::



文档地址：

- [hitTest()](https://greensock.com/docs/v3/Plugins/Draggable/static.hitTest())



2022年11月03日11:39:25
