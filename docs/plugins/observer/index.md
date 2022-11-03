---
title: Observer插件
---

超级灵活，统一化方式感知跨设备（`touch & mouse & pointer`） 各种事件的插件，不用再纠结实现细节🚀。

🎉有可能你想响应 `类滚动（scroll-like）` 用户行为，比如

- 鼠标滚轮滚动
- 手指滑动触摸设备
- 滚动条拖拽
- pointer点击和拖拽
- 方向和速度信息

上面所有的这一切，都只需要告诉Observer你想观察哪个事件（`wheel`, `touch`, `pointer`, `scroll`）即可，它会在每次requestAnimationFrame tick（为了性能进行[debounced](https://css-tricks.com/debouncing-throttling-explained-examples/)）过程中收集偏移值，并且自动找出最大偏移量，然后触发合适的回调：`onUp`, `onDown`, `onDrag` 等等😎。

来看看下面例子，我们可以基于用户向上或向下或者鼠标滚轮滚动行为，十分轻松的触发 `next() | previous()` 函数：

```js
Observer.create({
  target: window,         // 可以是任何元素（或者选择器）
  type: 'wheel,touch',    // 用 `,` 分割你想监听的事件 `wheel,touch,scroll,pointer`
  onUp: () => previouse(),
  onDown: () => next(),
})
```

🌰 [Animated Continuous Sections with GSAP Observer - codepen](https://codepen.io/GreenSock/pen/XWzRraJ)

注意这个例子并没有实际上的滚动，但是你可以用鼠标滚轮或者触摸设备swipe来开启动画，就好像在滚动一样😁

<iframe height="300" style="width: 100%;" scrolling="no" title="Animated Continuous Sections with GSAP Observer" src="https://codepen.io/GreenSock/embed/preview/XWzRraJ?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/XWzRraJ">
  Animated Continuous Sections with GSAP Observer</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

```js
Observer.create({
  type: "wheel,touch,pointer",
  wheelSpeed: -1,
  onDown: () => !animating && gotoSection(currentIndex - 1, -1),
  onUp: () => !animating && gotoSection(currentIndex + 1, 1),
  tolerance: 10,
  preventDefault: true
})
```

特色功能：

- `⭐ 丰富回调系统`： 包括 `onDown & onUp & onLeft & onRight & onDrag & onDragStart & onDragEnd & onHover & onHoverEnd & onToggleY & onToggleX & onChangeX & onChangeY & onChange & onClick & onPress & onRelease & onMove & onWheel & onStop`
- `默认debounced`： 性能最大化，可以通过 `debounce: false` 关闭
- 使用最大偏移量（`largest delta`） 自动优化事件（就好像wheel和scroll和touch事件在相同的debounced期间发生一样）
- 忽略特定元素，比如 `.ignore: '.deadzone'`
- 获取 **`速度`** (分别对 `x` & `y` 轴)，同时获取 `clientX` & `clientY` 坐标系（针对 touch/pointer事件）
- 对 **`拖拽设置最小阈值`**，比如 `dragMinimum: 5` 只有用户移动超过 `5px` 才触发 `onDragStart | onDrag | onDragEnd` 回调
- 设置一个 `tolerance`，只有当最小偏移量达到时才触发动作相关（`movement-related`）的回调，比如 `tolerance: 50` ，将等到至少 `50px` 变量才触发回调，然后一旦触发再重新来过
- 如果你想改变滚轮相关的偏移量，设置 `wheelSpeed` 乘法系数（加速或者减速）
- [ScrollTrigger](../scroll-trigger/index) 插件内置了 `Observer` 插件 - `ScrollTrigger.observe()`
- gzip后大约 `3.5kb`



## 1️⃣ 配置属性

下面属性都是传入到 `Observer.create(var: Object)` 配置对象中的。





### `id: {String}`

任意字符串ID，可被 `Observer.getById()` 获取指定的 `Observer`





### `⭐ type: {String}`

逗号分割的要监听的事件类型列表，可以包含 `"wheel,touch,scroll,pointer"` 任意一种或者几种

- `"touch"` 只针对触摸设备
- `"pointer"` 覆盖任何非触摸的 `pointer|mouse` & `press|drag|swipe` 动作
- `"wheel"` 针对鼠标滚轮（或者mac的触摸板滑动）
- `"scroll"` 滚动事件
- 默认是 `type: "wheel,touch,pointer"`



### `axis: {String}`

当设置了 `lockAxis: true`，每次press后的第一次拖动动作（使用 `type: "pointer"` |& `"touch"`）将设置 `axis` 属性为 `"x"` | `"y"`，取决于用户移动的方向。你可以使用 `onLockAxis()` 回调获取设置的 `axis` 的值



### `⭐ lockAxis: {Boolean}`

如果设置为 `true`，Observer将在用户每次按下(type: `"pointer"` |& `"touch"`)后观察第一次拖动移动的方向，并锁定在该方向，直到用户释放pointer/touch。因此，如果第一次拖动是水平的，那么只有水平相关的回调，如`onChangeX()`将被触发，直到pointer/touch被释放。还有一个 `onLockAxis` 回调你可以绑定



### `onLockAxis: {Function}`

当轴被锁定时调用（需要设置 `lockAxis: true`）

- 你可以通过Observer的 `axis: "x"` | `axis: "y"` 检测指定的轴



### `capture: {Boolean}`

如果设置为 `true`，则 `touch|pointer` 相关的监听函数将使用捕获阶段，好像 `addEventListener('[type]', func, { capture: true })` 一样



### `debounce: {Boolean}`

默认情况，Observer会debounce事件，因此deltas会在每次requestAnimationFramer()过程中进行累加，以最大化性能，但你可以使用 `debounce: false` 禁用这个，这样每个事件都会立刻检测。

- `onPress` & `onRelease` & `onHover` & `onHoverEnd` & `onClick` & `onDragStart` & `onDragEnd` 这些和delta不相关的事件，不会受到这个属性的影响😁



### `ignore: {Element | String | Array}`

被 `忽略` 观察的元素，因此，当一个`滚动/触摸/指针/鼠标`事件被这些元素触发时，它会被完全忽略。

它会检测 `event.target` 来分辨是否事件应该被忽略。可以定义元素，选择器或者元素数组





### `⭐ onChange: {Function}`

存在垂直（`y-axis`） 或者 水平（`x-axis`） 动作就会触发这个回调。只要移动继续，它就会继续调用函数(受制于任何 `tolerance` 阈值)





### `onChangeX: {Function}`

水平方向（`x-axis`） 动作就会触发这个回调。只要移动继续，它就会继续调用函数(受制于任何 `tolerance` 阈值)



### `onChangeY: {Function}`

垂直方向（`y-axis`） 动作就会触发这个回调。只要移动继续，它就会继续调用函数(受制于任何 `tolerance` 阈值)



### `onClick: {Function}`

当目标被点击时触发



### `⭐ onDown: {Function}`

向下（`DOWNWARD`）动作被检测到时，调用这个函数，意味着delta值增加（就好像你 `向下` 拖动手指或者鼠标，这会使 `y` 坐标增加📚）。如果你只想反向鼠标滚轮delta，你可以设置 `wheelSpeed: -1`， 它是一个乘法系数



### `⭐ onUp: {Function}`

向上（`UPWARD`）动作被检测到时，调用这个函数，意味着delta值减少（就好像你 `向上` 拖动手指或者鼠标，这会使 `y` 坐标减少📚）。如果你只想反向鼠标滚轮delta，你可以设置 `wheelSpeed: -1`， 它是一个乘法系数



### `onLeft: {Function}`

当动作被检测到向左移动时，调用这个函数



### `onRight: {Function}`

当动作被检测到向右移动时，调用这个函数



### `onWheel: {Function}`

移动鼠标滚动时触发此回调



### `wheelSpeed: {Number}`

滚轮滚动delta的乘法系数。默认情况下，它只是传递浏览器报告的滚轮事件的增量，但可能它看起来比用指针 press|drag 时更快/更慢，你需要一种方法使它们更相似。

- `wheelSpeed: 0.5` 表示使滚轮的delta值为正常值的一半
- `wheelSpeed: -1` 反转delta值，即本该调用 `onUp` 的，会去调用 `onDown` 回调，反之亦然

::: warning

还有一个 `scrollSpeed` 选项只应用于 `scroll` 事件

:::



### `scrollSpeed: {Number}`

滚动delta值的乘法系数。

- 只应用于 `scroll` 事件，不同于 `wheel` 事件
- `scrollSpeed: -1` 反转delta值，即本该调用 `onUp` 的，会去调用 `onDown` 回调，反之亦然
- `scrollSpeed: 0.5` 表示使滚动的delta值为正常值的一半

::: warning

还有一个 `wheelSpeed` 选项只应用于 `wheel` 事件

:::



### `dragMinimum: {Number}`

被认定为 `drag` 动作的最小距离，单位 `px`。这可以阻止不小心微小的动作（特别是touch设备）。比如，用户按压了手机，不小心移动了几像素，但用户并不认为是拖动操作。`dragMinimum` 只应用于按压后的初始动作，但在此之后继续拖拽只能受制于 `tolerance` 节流。

### `onDragStart: {Function}`

当用户按压目标，开始拖动时调用这个函数（受限于 `dragMinimum`）

- 这只适用于 `touch` &| `pointer` 类型事件



### `⭐ onDrag: {Function}`

当用户一直按压目标元素移动 `pointer | touch | mouse` 时触发

- 这只适用于 `touch` &| `pointer` 类型事件



### `onDragEnd: {Function}`

用户停止拖动目标元素时调用调用

- 这只适用于 `touch` &| `pointer` 类型事件



### `onPress: {Function}`

当用户按压目标元素时调用

- 这只适用于 `touch` &| `pointer` 类型事件



### `onRelease: {Function}`

当 pointer|mouse释放时调用，它在 `onPress` 之后调用

- 这只适用于 `touch` &| `pointer` 类型事件



### `onHover: {Function}`

当pointer或mouse移动在目标元素上时调用

- `pointerenter` | `mouseenter` 事件



### `onHoverEnd: {Function}`

当pointer或mouse移处目标元素上时调用

- `pointerleave` | `mouseleave` 事件



### `onMove: {Function}`

当用户将鼠标悬停在目标元素上时移动指针/鼠标时调用的函数(仅适用于 `pointer` 类型)。

- 它内部监听 `pointermove | mousemove` 事件
- 如果你想只在 按压然后拖动 触发事件，请使用 `onDrag` 回调

注意，当你定义onMove时，它会使Observer在悬停在目标上时测量增量值，从而触发适当的移动相关回调，比如 `onUp`, `onDown`, `onChange` 等，对于任何指针/鼠标在目标上的移动。

正常情况下，移动相关的回调只在用户 **`按压且拖动`** 情况下触发。





### `onStop: {Function}`

当至少停止 `0.25s` 后调用（可配置 `onStopDelay`）



### `onStopDelay: {Number}`

配置停止后多长时间调用 `onStop` 回调

- 默认 `0.25s`



### `⭐ onToggleX: {Function}`

当运动在X轴方向（水平）`转变方向`时调用



### `onToggleY: {Function}`

当运动在Y轴方向（垂直）`转变方向`时调用





## 2️⃣ 回调数据

每个回调都将Observer实例作为唯一参数进行传递，因此你可以很轻松的访问到 `self.velocityX` & `self.velocityY` & `self.deltaX` & `self.deltaY` & `self.x` & `self.y` 等等，具体属性可以查看 插件属性。

```js
Observer.create({
  onChange: (self) => {
    console.log('velocity: ', self.velocityX, self.velocityY)
    console.log('delta: ', self.deltaX, self.deltaY)
    console.log('target element: ', self.target)
    console.log('last event: ', self.event)
  }
})
```



## 3️⃣ Observer也包含在ScrollTrigger插件中

📚`ScrollTrigger.observe()` 方法等价于 `Observer.create()`。因为ScrollTrigger的 [normalizeScroll()](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.normalizeScroll()) 功能底层利用了Observer，避免使用ScrollTrigger的项目中，避免重复加载Observer插件，因此在ScrollTrigger中暴露Observer功能就很合理。



## 4️⃣ Observer 示例

- [Observer demos - GreenSock@codepen](https://codepen.io/collection/KpNYOd)



2022年11月03日17:31:59
