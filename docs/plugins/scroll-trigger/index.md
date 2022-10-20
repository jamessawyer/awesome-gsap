---
title: ScrollTriggle
---

[[toc]]



文档地址：[GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)







原文地址： [ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)



::: tip

务必先观看原文档中提供的视频教程！！！

使用ScrollTrigger小技巧：

- 先完成动画部分
- 在和ScrollTrigger进行结合
- [ScrollTrigger Recipes 用法快速预览](../../recipes/scroll-trigger)

:::



ScrollTrigger 可以触发任何和滚动相关的东西，即使和动画没有关系。

ScrollTrigger的高光功能：

- **`将任意动画与特定元素链接起来`** 因此只在改元素进入视窗（`viewport`）时才开始动画。这能提升性能，并确保你能看到你设定的动画
- 🤩 ScrollTriggers在target`进入或离开`指定区域时，能对target执行动画动作（`play | pause | resume | restart | reverse | complete | reset`）或者直接和滚动条链接起来，使其表现得像一个滚筒洗衣机（`scrub: true`）😎
- 🤩 **`软化动画和滚动条之间的关联`**， 因此使其花费特定时间去 **`追赶`** 滚动条，比如 `scrub: 1` 表示target花费（滞后）1s追赶滚动条
- **与 [ScrollSmoother](https://greensock.com/docs/v3/Plugins/ScrollSmoother) 集成**。GreenSock构建在原生滚动技术基础上的光滑滚动(`会员Only`)
- **基于速度捕捉（`snap to`）动画中的特定点**。事实上，你随时都可通过 `getVelocity()` 获取滚动速度。对其时间轴中最近的label或数组中进度值，或者运行你自己的基于函数的自定义逻辑进行捕获
- **可直接嵌入任何GSAP动画（包括时间轴）** 或 创建 **独立实例**，使用丰富的回调系统做任何你想要做的事情
- 🤩 **高级Pinning能力** ，可使target锁定在特定滚动位置。Padding会自动添加，以相应地将其他元素向下推，因此当元素被松开时，它们会赶上（通过 `pinSpacing: false` 禁用Padding）。你还可以对同一个元素在不同点固定多次
- 🤩 **滚动位置定义超级灵活** - 比如 *当元素的中心位置到达视窗的中心点是开始动画，又或者当`另一个元素`的底部到达视窗的底部时*。使用关键词 （`top | bottom | center | left | right`）,百分比，像素，甚至相对位置 `+=300px`。一旦你适应了这种语法，你就会觉得它十分的直观
- 适应`垂直或水平滚动`
- 🤩 **`丰富的回调系统`**
  - onEnter & onEnterBack
  - onLeave & onLeaveBack
  - onToggle
  - onUpdate
  - onScrubComplete
  - onRefresh
- **当windows resize时，自动重新计算位置**
- **切换 CSS 类**。比如 `toggleClass: 'active'` 在ScrollTrigger触发时，会给trigger元素添加 `active` 类。你也可以影响其它元素
- **响应式** - 使用 [gsap.matchMedia()](https://greensock.com/docs/v3/GSAP/gsap.matchMedia()) 对不同的屏幕尺寸进行不同的动画设置，它使用标准的媒体查询
- **自定义容器** - 你可以不使用视窗（`viewport`）；比如定义一个 `<div>` 作为自定义滚动器
- **高度性能优化** - 滚动事件会debounced，更新与GSAP和屏幕刷新同步，调整大小重新计算被throttled，等等。
- **不会出现滚动卡顿** - 它可以结合原生的CSS scroll snapping技术。如果你平滑的滚动，可以丝滑的在ScrollTrigger中接入 [ScrollSmoother](https://greensock.com/docs/v3/Plugins/ScrollSmoother)，或者使用 [scrollerProxy](https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.scrollerProxy()) 方法继承第3方的平滑滚动库（比如 [lecomotive-scroll](https://github.com/locomotivemtl/locomotive-scroll) & [lenis](https://github.com/studio-freight/lenis)）



## 简单示例

```js {2}
gasp.to('box', {
  scrollTrigger: '.box', // 当 '.box' 进入viewport时开始动画（只动画一次）
  x: 500,
  background: 'purple',
  duration: 3,
})
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/JamesSawyer/embed/preview/MWGxWoN?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/MWGxWoN">
  Untitled</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## 高级示例

```js
let tl = gsap.timeline({
  // 😎 没错，ScrollTrigger还可以添加到Timeline中
  scrollTrigger: {
    trigger: '.container',
    pin: true, // 当动画激活时，固定trigger元素
    start: 'top top', // 当触发元素的顶部到达viewport的顶部时，开始动画
    end: '+=500', // 相对于trigger元素开始位置的500px位置，停止动画
    scrub: 1, // 平滑滚动，花费1s追赶滚动条
    snap: {
      snapTo: 'labels', // 捕获最近的时间轴自定义标签
      duration: { min: 0.2, max: 3 }, // 捕获动画至少0.2s，最多3s，由滚动速度决定
      delay: 0.2, // 从最后一个滚动事件开始等待0.2秒，然后再进行捕获
      ease: 'power1.inOut', // 捕获动画缓动函数（默认 'power3'）
    }
  }
})

// 在时间轴上添加动画和labels
tl.addLabel('start')
	.from('.box p', { scale: 0.3, rotation: 45, autoAlpha: 0 })
	.addLabel('color')
	.from('.box', {backgroundColor: '#28a92b'})
	.addLabel('spin')
	.to('.box', {rotation: 360})
	.addLabel('end')
```



## 独立或自定义示例

你不必将ScrollTriggers直接放在动画中（尽管这是最常见的一种做法😅）。使用回调最任何想做的事情：

```js
ScrollTrigger.create({
  trigger: '#id',
  start: 'top top',
  endTrigger: '#otherID',
  end: 'bottom 50%+=100px',
  onToggle: self => console.log('toggled, isActive:', self.isActive),
  onUpdate: self => {
    console.log('progress:', self.progress.toFixed(3), 'direction:', self.direction, 'velocity', self.getVelocity())
  }
})
```



## ⚡ 使用 & 特殊属性

`scrollTrigger` 可以简写为 `trigger` 或者 配置写成一个对象，配置对象有如下属性



### ⭐ `animation`: `{Tween | Timeline}`

被ScrollTrigger控制的GSAP [Tween](https://greensock.com/docs/v3/GSAP/Tween) 或 [Timeline](https://greensock.com/docs/v3/GSAP/Timeline) 实例。每个ScrollTrigger只能控制一个动画，但是你可以将所有动画都通过一个时间轴包装起来（best💡）或者 如果你喜欢的话，也可以创建多个ScrollTrigger。



### `anticipatePin: {Number}`

如果你固定大的区域/面板，你可能会注意到，当你快速滚动时，固定看起来有点延迟。这是因为大多数现代浏览器在单独的线程上处理滚动重绘，因此，在固定的时刻，浏览器可能已经绘制了预先固定的内容，使其可见大约1/60秒。`解决这一问题的唯一方法是让ScrollTrigger监视滚动速度并预测固定位置，稍早地应用它以避免未固定内容的闪烁。` 使用 `anticipatePin: 1`一般就可以了，但是你可以减少或增加这个数字来控制它的固定时间。然而，在许多情况下，你不需要任何使用这个属性(默认值为0)。





### `containerAnimation: {Tween | Timeline}`

一种流行的效果：水平移动区域绑定垂直滚动，但是因为水平滚动不是原生滚动，普通的ScrollTrigger是不知道水平方向的元素什么时候进入视野的，因此你必须告诉ScrollTrigger监控容器的 `水平方向` 的动画，以便使target触发，例如 `containerAnimation: yourTween`。可参考如下示例：

<iframe height="300" style="width: 100%;" scrolling="no" title="Horizontal &quot;containerAnimation&quot; - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/WNjaxKp?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/WNjaxKp">
  Horizontal &quot;containerAnimation&quot; - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

以及更详细的 [containerAnimation](https://greensock.com/3-8/#containerAnimation)。

::: warning

🚨 缺陷：

1. 容器动画必须使用 **线性动画（即 `ease: 'none'`）**
2. Pinning & snapping对基于containerAnimation的ScrollTrigger中是不能使用的
3. 你应该避免对 `trigger` 元素进行水平动画，如果你一定要给trigger元素添加水平方向的动画，则请依据trigger元素水平移动的距离来偏移 `start | end` 值

:::





### ⭐ `start: {String | Number | Function}`

决定ScrollTrigger的开始位置，可以是如下类型，默认值是 `top bottom`，但当设置了 `pin: true` 时，默认值变为 `top top`

- `String` - 描述位置， `trigger` 和 `scroller` 的开始位置，当 `trigger` 的开始位置和 `scroller` 的开始位置重合时，就会触发ScrollTrigger，🌰

  ```js
  // 1️⃣
  // 表示当trigger的top触碰到scroller（默认是 `viewport`）的center时，触发ScrollTrigger
  start: 'top center'
  
  // 2️⃣
  // 表示当trigger的button触碰到scroller（默认是 `viewport`）的 '80%' 位置（从上向下）时，触发ScrollTrigger
  start: 'bottom 80%'
  
  // 3️⃣ 还可以使用 'top' | 'bottom' | 'center' 等值
  
  // 4️⃣ 百分比和像素值 总是相对于trigger/scroller的 top/left 位置
  // 当trigger的top触碰到viewport/scroller的100px位置时，触发ScrollTrigger
  start: 'top bottom-=100px'
  ```

- `Number` - 准确的滚动值，比如 `200` 表示当 `Scroller|Viewport` 恰好滚动200px时触发

- `Function` - 当ScrollTrigger计算其位置时调用的函数（一般是ScrollTrigger创建和页面resize时）。它要返回一个String | Number。这使得动态计算值变得容易。与所有回调函数一样，该函数接收ScrollTrigger实例本身作为唯一参数。因此，你可以基于先前ScrollTrigger的 `end` 位置，比如 `start: self => self.previous().end`

这是一个`静态`位置，在创建ScrollTrigger和调整滚动器大小时，根据正常文档流中的内容位置计算该位置。它不会不断地重新计算，因此，例如，🚨如果你对 `trigger|endTrigger` 进行动画，它不会不断更新相应的`开始/结束值`，因为ScrollTrigger在性能方面进行了高度优化。你可以使用 `ScrollTrigger.refresh()` 强制重新计算。





### ⭐ `end: {String | Number | Function}`

决定ScrollTrigger结束位置。可以是如下类型，默认值是 `bottom top`

1. `String`: 描述 `endTrigger` (如果没有定义此属性，则使用 `trigger`) 位置和 `Scroller` 的结束位置，此属性用于结束ScrollTrigger，🌰

   ```js {2}
   // 1️⃣
   // 表示当 endTrigger的bottom位置 触碰到 Scroller 的 center位置时 结束ScrollTrigger
   end: 'bottom center'
   
   // 2️⃣ 假设垂直方向滚动
   // 表示当 endTrigger的center位置 触碰到 Scroller 的从上往下100px位置时
   end: 'center 100px' 
   ```

   ::: tip 💡
   你还可以看到

   1.  `top | bottom | center`，
   2. 又或者 当 `horizontal: 'true'` 时的 `left | right`，
   3. 以及 百分比 `80%` 或者 像素值 `100px`
   4. 或者`单个相对值`, 比如 `+=300`，表示距离其开始位置300px外；或者 `+=100%` 表示距离开始位置相对于Scroller高度外的位置
   5. `"max"` 是个特殊值，表示最大滚动位置

   :::

2. `Number`：准确的滚动值，比如 `200` 表示当 `Scroller|Viewport` 恰好滚动200px时触发

3. `Function`：每当ScrollTrigger刷新并计算其位置时(通常是在创建时和滚动器调整大小时)调用的函数。它应该返回一个如上所述的String或Number。这使得动态计算值变得容易。与所有回调函数一样，该函数接收ScrollTrigger实例本身作为唯一参数。

这是一个`静态`位置，在创建ScrollTrigger和调整滚动器大小时，根据正常文档流中的内容位置计算该位置。它不会不断地重新计算，因此，例如，🚨如果你对 `trigger|endTrigger` 进行动画，它不会不断更新相应的`开始/结束值`，因为ScrollTrigger在性能方面进行了高度优化。你可以使用 `ScrollTrigger.refresh()` 强制重新计算。



### `endTrigger: {String | Element}`

在正常文档流中的位置，用于计算ScrollTrigger结束位置的元素(或元素的选择器文本)。

除非 `endTrigger` 不同于 `trigger` 时，才会定义这个属性，默认的`endTrigger`就是 `trigger` 元素自身😁。



### `fastScrollEnd: {Boolean | Number}`

如果为true，它将强制当前ScrollTrigger的动画完成，如果你离开它的触发区域的速度超过一定的速度(默认为`2500px/s`)。这有助于在用户快速滚动时避免重叠的动画。你可以为最小速度指定一个数字。比如 `fastScrollEnd: 3000` 表示当速度超过 `3000px/s` 时才会激活此效果。

<iframe height="300" style="width: 100%;" scrolling="no" title="preventOverlaps and fastScrollEnd | ScrollTrigger | GSAP" src="https://codepen.io/GreenSock/embed/preview/ZEyXPGj?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/ZEyXPGj">
  preventOverlaps and fastScrollEnd | ScrollTrigger | GSAP</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



### `horizontal: {Boolean}`

默认情况都是假设针对的是垂直方向的滚动，而如果想设置水平方向的滚动，则使用 `horizontal: true`



### `id: {String}`

任意唯一字符串，用于ScrollTrigger实例。2个作用：

1. 可通过 `ScrollTrigger.getById()` 获取该ScrollTrigger实例
2. 添加到 `markers` 中，便于调试😎



### `invalidateOnRefresh: {Boolean}`

如果为`true`，与ScrollTrigger关联的动画将在`refresh()`发生时(通常是在resize时)调用它的`invalidate()`方法。这将刷新任何内部记录的开始值。



### ⭐ `markers: {Object | Boolean}`

开发阶段添加markers，便于调试。

1. `markers: true` 将设置默认的样式 `(startColor: "green", endColor: "red", fontSize: "16px", fontWeigth: "normal", indent: 0)`
2. 可以自定义一个对象，eg: `markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20}`



### `Once: {Boolean}`

如果为`true`, ScrollTrigger将在到达`一次`结束位置后立即`kill()`自身。这将导致它停止监听滚动事件，并符合垃圾收集的条件。这将只调用`onEnter`最多一次。`它不会杀死相关的动画`。当你只希望一个动画在向前滚动时播放一次，永远不会重置或重放时，它是完美的😎。它还将`toggleActions`设置为 `"play none none none"`。





### ⭐ `onEnter: {Function}`

当滚动位置向前滚动超过 `start` 位置时的回调函数（一般是当 `trigger` 滚动进入视野时）。它接收一个参数 - ScrollTrigger实例本身，实例包含 `progress & direction & getVelocity() & isActive` 等等属性和方法：

```js
{
  onEnter: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Callbacks - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/qBdeVJY?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/qBdeVJY">
  Callbacks - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: tip

理解： 假设向上⬆️滚动是 move forward

- onEnter: `trigger-Start` 到达 `scrollor-End` 滚动方向 ⬆️ forward
- onLeave: `trigger-End` 超过 `scrollor-End`   滚动方向 ⬆️ forward
- onEnterBack: `trigger-End` 回到 `scrollor-End` 下面     滚动方向 ⬇️ backward
- onLeaveBack: `trigger-Start` 回到 `scrollor-Start` 下面 滚动方向 ⬇️ backward
- onUpdate: `trigger` 在 `scrollor` 之间进行滚动时，持续触发，即 `trigger-Start` 超过 `scrollor-Start`，而 `trigger-End` 在 `scrollor-End` 下面
- onRefresh: 页面布局完成时，又或者resize页面之后布局完成时触发

:::



### `onEnterBack: {Function}`

当滚动位置向后移动超过 `end` 时的回调(通常是当 `trigger` 滚动回视野时)。

- `trigger-End` 回到 `scrollor-End` 下面  滚动方向 ⬇️ backward

参数部分同 `onEnter`：

```js
{
  onEnterBack: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
}
```



###  `onLeave: {Function}`

`trigger-End` 超过 `scrollor-End`   滚动方向 ⬆️ forward (通常是当 `trigger` 滚动离开视野时)。参数部分：

```js
{
  onLeave: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
}
```



### `onLeaveBack: {Function}`

`trigger-Start` 回到 `scrollor-Start` 下面 滚动方向 ⬇️ backward。参数同上



### `onRefresh: {Function}`

刷新发生时的回调(通常是`resize`事件)，它强制ScrollTrigger重新计算它的所有位置。参数同上





### `onUpdate: {Function}`

每当ScrollTrigger的进度发生变化(即滚动位置发生变化)时调用的回调。

如果你使用了数字类型的 `scrub`，例如 `scrub: 1`，请注意，在滚动位置停止后，相关的动画将继续运动一段时间，所以如果你的目标是在动画更新时更新某些内容，最好对动画本身使用 `onUpdate`，而不是对ScrollTrigger💡。可参考如下demo

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/JamesSawyer/embed/preview/mdLomKr?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/mdLomKr">
  Untitled</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



### `onScrubComplete: {Function}`

当 **数值类型 `scrub`** 完成时的回调函数。只对数值类型的 `scrub` 才有效，比如 `scrub: 1`。回调接收参数同上：

```js
{
  scrub: 0.5,
  onScrubComplete: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
}
```



### `onSnappingComplete: {Function}`

当捕捉位置(`snapping`)完成时的回调函数。只有定义了 `snap` 配置时才生效。如果当用户取消snap，这个回调函数不会触发。回调接收参数同上：

```js
{
  snap: 0.1, // 每次以 10% 进行位置捕获
  onSnapComplete: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
}
```



### `onToggle: {Function}`

当ScrollTrigger从 `active` 变为 `inactive`，或者 `inactive` 变为 `active` 时触发的回调函数。这通常是当滚动位置移动到“开始”或“结束”的任何一个方向时，但如果它在同一Tick中超过“开始”或“结束”，比如如果用户滚动非常快，onToggle将不会触发，因为状态没有改变🚨。

你可以在 `onEnter | onLeave | onEnterBack | onLeaveBack` 回调中使用 `isActive` 属性来进行切换操作。回调接收参数同上：

```js
{
  onToggle: ({progress, direction, isActive}) => console.log(progress, direction, isActive)
}
```



### ⭐ `pin: {Boolean | String | Element}`

元素或者元素选择器，表示ScrollTrigger激活时，该元素固定（`pinned`）在 `start` 位置，而其余部分则继续滚动。

- 只允许固定一个元素，不过你可用这个元素包含任意元素
- `pin: true` - 表示固定 `trigger` 元素
- 🚨警告 - 不要对固定元素进行动画，因为那样会丢失测量结果(ScrollTrigger在性能方面进行了高度优化，并尽可能地预先计算)
- 💡相反，你可以嵌套一些东西，以便只对固定元素内部的元素进行动画处理😎。

::: warning

如果你要固定的元素嵌套在另一个固定元素内部，请确保定义 `pinnedContainer`，这样ScrollTrigger就知道相应地偏移开始/结束位置。

:::



### `pinnedContainer: {Element | String}`



如果你的ScrollTrigger的 `trigger | endTrigger` 元素在另一个ScrollTrigger元素内，该元素也被pinned（很不常见的一种用法），这将导致开始/结束位置被抛出，不管pin持续多长时间，所以你可以设置 `pinnedContainer` 的父/容器元素，让ScrollTrigger计算相应的偏移量。再次强调，这种场景很少见。

🚨不支持嵌套固定，因此该特性只适用于不固定的ScrollTriggers。



### `pinReparent: {Boolean}`

如果为 `true`，则固定元素的在激活时，其父容器将变为 `<body>`，这样使该固定元素脱离原父元素。如果在固定时，你看到了奇怪的现象，比如固定的元素突然移动，然后随着滚动移动，你可能在固定元素的父元素上设置了 `will-change | transform` 属性，这破坏了 [position: fixed](https://stackoverflow.com/questions/15194313/transform3d-not-working-with-position-fixed-children%22) 行为（这是浏览器的问题，不是ScrollTrigger）。

最好设置你的项目来避免这些问题，因为Reparent可能是很消耗性能的，但如果你不能避免它们，pinReparent: true可以帮助你。

::: warning

只有在必须时才使用此功能。

警告：如果你的CSS规则依赖于特定的嵌套，会受到Reparent的影响，它们就会被打破。

🌰，如果你用`pinReparent: true`固定`.panel`元素，像`.section .panel p {color: white}`这样的CSS规则将不再适用于嵌套的`<p>`，因为在固定期间，它将不再在`<section>`中，所以确保你编写的CSS规则能够适应Reparent。

:::



### `pinSpacer: {Element}`

默认情况下，ScrollTrigger会用 `<div>` 对固定的元素进行包裹。但在一种极少见的使用场景中，比如你在固定元素中加载一个 `iframe`，当ScrollTrigger因为resize等原因刷新时，可能导致 `iframe` 也进行刷新，因此这个属性的功能就是，允许你指定一个元素作为Spacer，而不是使用默认生成的 `<div>`。这样的话，在ScrollTrigger刷新时，不会移除或添加该Spacer，这使得iframe不会受到ScrollTrigger刷新的影响。



### ⭐ `pinSpacing: {Boolean | String}`

默认情况下，会给固定元素底部添加一个padding（`horizontal: true` 时给固定元素右侧添加），使其它元素向下移动，这样在固定元素不再固定时，后面的元素内容能完美的填补上该padding。

你可以通过 `pinSpacing: false` 告诉ScrollTrigger不要添加任何Padding。如果你想使用margin而不是padding，则可以使用 `pinSpacing: "margin"` 设置。

注意，`pinSpacing` 大多数情况下都是能正常工作的，但它还是会依赖你设置DOM和CSS的方式。例如，如果你在带有`display: flex`或`position: absolute`的父元素中固定了一些内容，额外的Padding不会将其他元素向下/右推，所以你可能需要手动将内容分隔开来。pinSpacing只是在大多数情况下工作的便利工具。

::: warning

如果容器是 `display: flex`，则 `pinSpacing` 默认会设置为 `false`。因为这通常是你想要的，因为Padding在该上下文中的工作方式不同。

:::



### `pinType: {'fixed' | 'transform'}`

当scrollor是 `body` 时，为 `fixed`，其余情况都为 `transform`(因为 `position: fixed` 在大多数嵌套的场景中都不能正常工作)，但你可以使用 `pinType: 'fixed'` **强制** ScrollTrigger使用 `position: fixed`。

通常这不是必需的或者有用的。请注意如果你设置了 `will-change: transform` CSS属性，浏览器会把它当做就好像使用了transform一样的，会破坏 `position: fixed` 元素（这和GSAP ScrollTrigger是没有关系的😅） 。



### `preventOverlaps: {Boolean | String}`



当ScrollTrigger将触发动画时，这个功能激活；它会找到先前的基于ScrollTrigger的动画，强制这些先前的动画为其终止（`end`）状态 - 避免丑陋的重叠。

- 如果为 `true`，它将影响所有先前的ScrollTrigger📚
- 可以使用任意字符串将其效果限制为仅具有匹配字符串的其他字符串，因此 `preventOverlaps: 'group1'` 将只影响到其它 `preventOverlaps` 为 `'group1'` 的ScrollTrigger

<iframe height="300" style="width: 100%;" scrolling="no" title="preventOverlaps and fastScrollEnd | ScrollTrigger | GSAP" src="https://codepen.io/GreenSock/embed/preview/ZEyXPGj?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/ZEyXPGj">
  preventOverlaps and fastScrollEnd | ScrollTrigger | GSAP</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>





### `refreshPriotity: {number}`

基本上你是用不到这个属性的😅，只要你 **`从上到下 | 从左到右`** 的滚动发生顺序创建ScrollTiggers，这也是强烈推荐的做法。否则，使用refreshPriority来影响刷新ScrollTriggers的顺序，以确保将固定距离（`pinning distance`）添加到页面更下面的后续ScrollTriggers的起始/结束值(这就是顺序很重要的原因)。`refreshPriority: 1` 的ScrollTrigger要比 `refreshPriority: 0` （默认值）的ScrollTrigger刷新更早，你也可以给多个ScrollTrigger添加相同的 `refreshPriority` 值。



### ⭐ `scroller: {String | Element}`

默认情况下，scroller是 `viewport`（视窗）本身，但是，如果你想给一个可滚动的 `<div class="container">` 添加一个ScrollTrigger，则可以直接定义 `scroller: '.container'` 即可。



### ⭐ `scrub: {Boolean | Number}`

将动画的进度直接和`scrollbar`链接起来，因此看起来就像一个清洗机（Scrubber）一样。你还可以使用数字类型，使动画头出现延迟追赶滚动条的效果。

- `Boolean` - `scrub: true` 直接将动画进度与ScrollTrigger的进度联系起来
- `Number` - `scrub: 0.5` 追赶的时间长度，单位s。这里的 `0.5` 表示动画花费0.5s追赶滚动条的位置



### ⭐ `snap: {Number | Array | Function | Object | 'labels' | 'labelsDirectional'}`



📚**允许你在滚动停止后，捕获特定的进度值（0-1之间）**。比如： `snap: 0.1` 表示每次按 `0.1` 增量捕获（10%，20%，30%等等）。 `snap: [0, 0.1, 0.5, 0.8, 1]` 则表示捕获具体的进度值。它可以是以下任何一种：

- `Number` - `snap: 0.1` 按照每次10%的增量进行捕获。如果你有特定数量的sections，可以使用 `snap: 1 / (sections - 1)` 💡
- `Array` - `snap: [0, 0.1, 0.5, 1]` 捕获到数组中最近的进度值，以最近一次滚动的方向（触发你设置了 `directional: false`）
- `Function` - `snap: (value) => Math.round(value / 0.2) * 0.2` 将自然目标值(基于速度)输入到函数中，并使用返回的任何值作为最终进度值（这里是0.2增量），这里可添加任何你想要的逻辑。`这些值应该总是在0和1之间，表示动画的进度，所以0.5应该在中间。`
- `"labels"` - `snap: "labels"` 捕获到时间轴上最近的标签（当然，动画必须是带有labels的时间轴😅）
- ⚡ `"labelsDirectional"` - `snap: "labelsDirectional"` 捕获到时间轴中最近滚动方向上的最近标签。因此，如果你向下一个标签滚动一点(并停止)，即使当前滚动位置技术上最接近当前/最后一个标签，它也会在该方向上捕捉到下一个标签。 这更符合用户直觉😁
- `Object` - 比如 `{snapTo: 'labels', duration: 0.3, delay: 0.1, ease: 'power1.inOut'}`，使用下面属性完全自定义化（`snapTo` 属性是配置必须的）：
  - `snapTo[Number|Array|Function|"labels"]` - 决定捕获逻辑（同上面）
  - `delay[Number]` - 上一次滚动事件和snapping动画开始之间的延迟（单位s）。默认是`scrub` 时间的一半（或 `scrub: true` 时，为 `0.1`）
  - `directional[Boolean]` - snapping方向默认是用户上一次滚动的方向，可以通过 `directional: false` 禁用
  - `duration[Number|Object]` - snapping动画的时间，单位s。`duration: 0.3` 表示花费0.3s，你也可以定义一个区间对象，比如 `duration: {min: 0.2, max: 3}` ，用于基于速度对提供的区间进行clamp。这样，当用户停止滚动到一个snapping point，如果自然停止点离snapping point很远，那么snapping point所需的时间就会更短。
  - `ease[String|Function]` - snapping动画的 [ease](https://greensock.com/docs/v3/Eases) 函数，默认是 `"powder3"。`
  - `ineratia[Boolean]` - 告诉ScrollTrigger不考虑惯性因素，将 `inertia: false`
  - `onStart[Function]` - 当Snapping开始时的回调
  - `onInterrupt[Function]` - snapping被终端时的回调，比如用户滚动到到mid-snap点
  - `onComplete[Function]` - snapping完成时的回调

::: tip

关于什么是Snapping，可以参考MDN: 表示一个强制滚动位置

- [CSS Scroll Snap - MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Scroll_Snap)

:::



### ⭐ `toggleActions: {String}`

决定关联动画4个阶段 `onEnter & onLeave & onEnterBack & onLeaveBack` 按顺序如何被控制。默认是 `play none none none`。

```js
{
  // 表示
  // onEnter 时 play 进入时播放动画  trigger-start -> scrollor-start ⬆️
  // onLeave 时 pause 离开时暂停动画 trigger-end -> scrollor-end     ⬆️
  // onEnterBack 时 resume 重新返回时 恢复动画  trigger-end -> scrollor-start  ⬇️
  // onLeaveBack 时 reset 再次离开时 重置动画   trigger-start -> scrollor-end  ⬇️
  toggleActions: 'play pause resume reset'
}
```

每个action可能值有：

- `play`
- `pause`
- `resume`
- `reset`
- `restart`
- `complete`
- `reverse`
- `none`



### `toggleClass: {String | Object}`

当ScrollTrigger 切换 `active | inactive` 时，给一个或多个元素 `添加|移除` 类。可以是下面形式：

- `String` - 添加给 `trigger` 元素的类名，比如 `toggleClass: 'active'`
- `Object` - 不仅仅给 `trigger` 元素切换类，使用对象语法：`{targets: '.my-selector', className: 'active' }`。`targets` 可以是选择器或者对元素的引用，或元素数组

::: warning

注意 `toggleActions` 不会应用 `toggleClass`。要以不同的方式切换类名，请使用回调函数（`onEnter` | `onLeave` | `onLeaveBack` | `onEnterBack`）

:::



### `trigger: {String | Element}`

当ScrollTrigger激活时，被用于计算的在正常文档流中的元素或元素选择器。





## ScrollTrigger工作原理？它和IntersectionObserver类似？

ScrollTrigger **不会持续** 在每一Tick都监控每个元素，以及检测其在viewport中的位置。因为我们对性能的要求达到了痴迷程度。相反，ScrollTrigger会提前初期，理清在自然文档流中 `start|end` 点的位置。换句话说，`ScrollTrigger会在scrollbar在 xxx 和 yyy 之间会被激活`。然后它会debounce scroll事件，只在下一次 `requestAnimationFrame`(Tick) 时更新，完美将GSAP与屏幕刷新进行同步。它 **`只`** 间歇性的监控滚动位置，这也意味着它性能很好🚀 。



ScrollTrigger会自动监听 `viewport/scrollor` `resize`事件，并重新计算所有的 `start/end` 位置（`onRefresh`）。事实上，因为resizing/refreshing是CPU密集的，它会在resize事件开始前等待200ms间隔。没错，我们寻求最大化性能。

[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) 是一个现代浏览器中的原生功能，它和ScrollTrigger差异：

- 它会持续监控元素来感知它们的进入或离开，无论是否在滚动
- 它对追踪元素在2点之间的位置是没有帮助的，比如scrubbing动画
- 它允许你监控多个元素，并有一个回调触发，可以通过循环，并在进入的元素上触发交错的（Stagger）动画

ScrollTrigger没有在底层使用IntersectionObserver，因为它缺乏必要的功能和兼容性。你当然可以同时使用IntersectionObserver和ScrollTrigger。





## Pinning功能底层实现原理是什么？

- 固定的元素（`pinned element`）立即被一个与之匹配的 `固定` 宽高的 `<div>` 包裹起来。包装元素会添加一个 `pin-spacer` 类。可以把它想象成一个代理元素，它打开了DOM中固定元素所在的空间，这样当它翻转到固定位置时就不会合并。
- 当ScrollTrigger激活时（即滚动位置在 start - end 之间），它将固定元素设置为 `position: fixed`，并通过 `top | left | width | height` 值对元素进行定位。。。除非scroller不是viewport，这种情况下是不会使用 `position: fixed` 的，这会破坏sub-scrolling，它只会用纯粹的transforms。如果将 `pinReparent` 设置为 `true`（我们推荐尽量避免这样做），固定元素将添加到 `<body>` 下，并且样式会内联，确保样式得以维持。
- 当ScrollTrigger变为非活动状态时，固定元素将变为原来的 `position` 值，并使用 `transform`，以正确放置元素
- 当窗口/滚动器被调整大小时，所有ScrollTriggers重新计算它们的开始/结束位置(onRefresh)。作为该过程的一部分，将从DOM中删除 `pin-spacer`，并将 `pin-spacer` 换回，以便测量结果与原始CSS一致。然后将 `pin-spacer` 交换回作为包装器。

为什么不只使用transforms，避免使用 `position: fixed`？许多浏览器使用这种技术时，渲染会出现不一致的情况。在大多数现代浏览器中，滚动重绘是在不同的线程上处理的，这导致了令人讨厌的视觉故障。令人惊讶的是，`position: fixed` 似乎提供了更好的整体表现。性能对于滚动非常重要。



## scrub: true和duration如何一起使用？

如果ScrollTrigger 设置了 `scrub: true`，并且ScrollTrigger有一个与之相关的timeline或tween动画，那么该动画的时间将作为补间将播放的总距离的比例。动画移动距离的比例是和动画的总时长相关的。

🌰 假设你有个一个timeline，包含3个tweens：1个1s的tween，1个3s的，另一个也是1s的tween。ScrollTrigger移动整个viewport高度的距离（或者trigger使用 `start: 'center bottom' ` & `end: 'center top'`）。

如果使用 `scrub: true`（或者数字），第一个tween占据 `1/5`（`1s / (1s + 3s + 1s)`）因此其滚动的距离为 `100% - 80%` 部分；第2个tween占据 `3/5`，因此其滚动的距离为 `80% - 20%`，第3个tween则占据 `1/5`，滚动的距离为 `20% - 0%`

<iframe height="300" style="width: 100%;" scrolling="no" title="GSAP Starter Pen" src="https://codepen.io/GreenSock/embed/preview/yLegBwO?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/yLegBwO">
  GSAP Starter Pen</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

假如你将3个tweens的时间设置为一样，比如 `1s`，则其百分比将一样：`100%->66% & 66%->33% & 33%-0%`，都为 `1/3`。

::: tip

换句话说，时间轴中的tween的时间值不重要，重要是其占据的比例。因为滚动距离是一定的，每个tween运动的距离取决于其比例。

💡如果你想让动画需要更长的滚动距离来完成，则将 `start` 到 `end` 的距离设置更长，比如 `end: '+=4000'` 使其滚动更长完成。

:::



## 想要 smooth scrolling？

GreenSock的 [ScrollSmoother](https://greensock.com/docs/v3/Plugins/ScrollSmoother) 工具是构建在ScrollTrigger基础上的，因此它很容易集成和使用。它建立在原生滚动技术之上，避免了困扰其他平滑滚动库的大多数可访问性问题。会员专享插件😅





## FAQ

1. lottie如何结合ScrollTrigger？ [使用辅助函数](https://greensock.com/docs/v3/HelperFunctions#lottie)

其余省略，看原文档



## ⚡ 资源和Demos

- [StriggerScroll Demos 带有预览 - @GreenSock](https://greensock.com/st-demos/)

> 理解ScrollTrigger示例：

1️⃣ [Demo playground](https://codepen.io/GreenSock/pen/f0119d684b35e881e86e4d6eb5ad2cc9)

<iframe height="300" style="width: 100%;" scrolling="no" title="Simple Demo - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/RwPXQOQ?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/RwPXQOQ">
  Simple Demo - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

2️⃣ [Basic Tweening on scroll](https://codepen.io/GreenSock/pen/32672d461f522729c40fd89004a37dd5)

<iframe height="300" style="width: 100%;" scrolling="no" title="Basic Tween - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/abOPrBj?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/abOPrBj">
  Basic Tween - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

3️⃣ [toggleActions](https://codepen.io/GreenSock/pen/97d51a6681967e078a35f4a9e87954ea)

<iframe height="300" style="width: 100%;" scrolling="no" title="toggleActions - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/LYVKWGo?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/LYVKWGo">
  toggleActions - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

4️⃣ [Scrubbing](https://codepen.io/GreenSock/pen/c9448e33cdca10f9d18adb3ce47c6f87)

<iframe height="300" style="width: 100%;" scrolling="no" title="toggleActions - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/LYVKWGo?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/LYVKWGo">
  toggleActions - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

5️⃣ [Pinning](https://codepen.io/GreenSock/pen/e86d485feaf4d13a38ae950a2e122e61)

<iframe height="300" style="width: 100%;" scrolling="no" title="Basic Pin - ScrollTrigger" src="https://codepen.io/JamesSawyer/embed/preview/abGrxGB?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/abGrxGB">
  Basic Pin - ScrollTrigger</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

6️⃣ ⭐ [ScrollTrigger Callbacks](https://codepen.io/GreenSock/pen/qBdeVJY)

<iframe height="300" style="width: 100%;" scrolling="no" title="Callbacks - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/qBdeVJY?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/qBdeVJY">
  Callbacks - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



> Navigation Content

1️⃣ [Layered pinning - ScrollTrigger](https://codepen.io/GreenSock/pen/KKpLdWW)

<iframe height="300" style="width: 100%;" scrolling="no" title="Layered pinning - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/KKpLdWW?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/KKpLdWW">
  Layered pinning - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

<iframe height="300" style="width: 100%;" scrolling="no" title="Layered Pinning From Bottom - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/BaowPwo?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/BaowPwo">
  Layered Pinning From Bottom - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

2️⃣ [Horizontal Scroll with Snapping](https://codepen.io/GreenSock/pen/YzygYvM) ([Advanced example](https://codepen.io/GreenSock/pen/09859305f9c8fa20b9d3ed759384ce50))

<iframe height="300" style="width: 100%;" scrolling="no" title="Horizontal snapping sections (simple) - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/YzygYvM?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/YzygYvM">
  Horizontal snapping sections (simple) - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

3️⃣ [Single horizontal scrolling section](https://codepen.io/GreenSock/pen/00a7aa90a17e39253d712438df20fe6a)

<iframe height="300" style="width: 100%;" scrolling="no" title="Horizontal section scrolling - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/eYpOZvX?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/eYpOZvX">
  Horizontal section scrolling - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

4️⃣ [Horizontal carousel](https://codepen.io/GreenSock/pen/11d4bcb2a0f76bf753d10be8f4e4d2a6)

<iframe height="300" style="width: 100%;" scrolling="no" title="Horizontal parallax effect - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/JjYPgdp?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/JjYPgdp">
  Horizontal parallax effect - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



> ⭐ Parallax Effects

1️⃣ [Parallax with data-speed](https://codepen.io/GreenSock/pen/RwVGNea)

<iframe height="300" style="width: 100%;" scrolling="no" title="ScrollTrigger Parallax with data-speed attribute" src="https://codepen.io/GreenSock/embed/preview/RwVGNea?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/RwVGNea">
  ScrollTrigger Parallax with data-speed attribute</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

2️⃣ [Parallax header](https://codepen.io/GreenSock/pen/8e9dd88cdd432a91ec2d59b874fb8f28)

<iframe height="300" style="width: 100%;" scrolling="no" title="Parallax header  - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/OJyPmgX?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/OJyPmgX">
  Parallax header  - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

3️⃣ [Parallax scene](https://codepen.io/GreenSock/pen/e785396ee2b11ab85d33b4bebdd4997f?editors=0010)

<iframe height="300" style="width: 100%;" scrolling="no" title="Parallax scene on scroll -  ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/vYNNvMj?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/vYNNvMj">
  Parallax scene on scroll -  ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> Pairing with native scroll technoligies

1️⃣ [ScrollTrigger + Navigation Links](https://codepen.io/GreenSock/pen/c4691a379cfd1a9664e381777055a7fa) 感觉效果有点怪



2️⃣ [ScrollTrigger + CSS scroll snapping](https://codepen.io/GreenSock/pen/1e61806b532ea3289cc41c6693c50125)

<iframe height="300" style="width: 100%;" scrolling="no" title="Pair with CSS Scroll Snapping - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/YzyaKrq?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/YzyaKrq">
  Pair with CSS Scroll Snapping - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

> 🚀 其它效果

1. [Airpods image swap on scroll](https://codepen.io/osublake/pen/2152a28cffe2c2c0cca8a3e47f7b21c6?editors=0010) 👍 frames 帧动画 + 滚动 效果很赞

   <iframe height="300" style="width: 100%;" scrolling="no" title="ScrollTrigger onUpdate Airpods" src="https://codepen.io/JamesSawyer/embed/preview/mdLomKr?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href="https://codepen.io/JamesSawyer/pen/mdLomKr">
     ScrollTrigger onUpdate Airpods</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
     on <a href="https://codepen.io">CodePen</a>.
   </iframe>

2. [Scroll to build something](https://codepen.io/GreenSock/pen/250ee0b1ec278d8f866bd3424f997ea9) （或 [scroll to deconstruct](https://codepen.io/GreenSock/pen/f9d9c0d5ab998fb65c71fbeeb7f41634)）

3. [Different animations based on the scroll direction](https://codepen.io/GreenSock/pen/dba67454108dde8a39323b644c6f9fa4) 很常见的一种滚动元素动画效果

4. [Path drawn on scroll](https://codepen.io/GreenSock/pen/857f9479067b7089280f2d23f641f8f2) 👍 SVG + MotionPath + ScrollTrigger  (VIP课程效果😁)

   <iframe height="300" style="width: 100%;" scrolling="no" title="Animate path on scroll - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/rNOBLBV?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href="https://codepen.io/GreenSock/pen/rNOBLBV">
     Animate path on scroll - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
     on <a href="https://codepen.io">CodePen</a>.
   </iframe>

5. [Infinite sections on scroll](https://codepen.io/kdbkapsere/pen/514f4d19e03ced84b60dfdacc382adce) 使用 `ScrollTrigger.refresh()` + `onUpdate()` + `progress` 动态创建sections

6. [Different contents shown based on section scrolled to](https://codepen.io/GreenSock/pen/29abddb42a9e48b41b9bbd851a93daf3) 根据滚动，左侧内容不停的变化

7. [Pinned elements animated on scroll](https://codepen.io/GreenSock/pen/3748602f451c269faa3f1d1be1c5bfe5?editors=0100) 很有意思的动画效果 + MotionPath

8. [Intensify on scroll](https://codepen.io/GreenSock/pen/03a0bf209de49a8cef8fffb1b0eb4eab) 滚动的越快，文本左右晃动的越剧烈

9. [Skew content based on scroll velocity](https://codepen.io/GreenSock/pen/eYpGLYL) 👍 根据滚动速度调整图片skew效果（虽然图挂了，但效果很好）

   <iframe height="300" style="width: 100%;" scrolling="no" title="Skew on scroll using scroll velocity - ScrollTrigger" src="https://codepen.io/GreenSock/embed/preview/eYpGLYL?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
     See the Pen <a href="https://codepen.io/GreenSock/pen/eYpGLYL">
     Skew on scroll using scroll velocity - ScrollTrigger</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
     on <a href="https://codepen.io">CodePen</a>.
   </iframe>

10. [Gallery revealed on Scroll](https://codepen.io/GreenSock/pen/7d8fb6967cd8dc7cdfbdc91fd4247dbe?editors=0100)

11. [Before/after images revealed on scroll](https://codepen.io/GreenSock/pen/aeb6d5e3af5c913c98cf3a8f17657aba)

12. [Horizontal translation sections on scroll](https://codepen.io/noeldelgado/pen/4d5d66751a93cbc8c9fdbdc5fe29fbda) 👍 水平交叉滚动效果，使用 [imagesloaded](https://github.com/desandro/imagesloaded) 确保所有图片都加载完成

    <iframe height="300" style="width: 100%;" scrolling="no" title="GSAP ScrollTrigger - Demo" src="https://codepen.io/noeldelgado/embed/preview/BaogqYy?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
      See the Pen <a href="https://codepen.io/noeldelgado/pen/BaogqYy">
      GSAP ScrollTrigger - Demo</a> by Noel Delgado (<a href="https://codepen.io/noeldelgado">@noeldelgado</a>)
      on <a href="https://codepen.io">CodePen</a>.
    </iframe>



GreenSock官方CodePen仓库：

- [GreenSock ScrollTrigger](https://codepen.io/GreenSock/pens/tags/?selected_tag=scrolltrigger) 约200多个仓库



2022年10月20日11:13:24
