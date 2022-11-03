---
title: Draggable
---

示例文档：
 - [draggable - gsap](https://greensock.com/draggable/)

提供了一种令人惊讶的简单方法，使用鼠标和/或触摸事件使几乎任何DOM元素都可拖动(`draggable`)、可旋转(`spinnable`)、可抛出(`tossable`)，甚至可滑动滚动，并且Draggable还可以和 `InertiaPlugin` 结合使用，这样用户可以根据动量平滑地减速。

特色功能：
- `支持Touch`： 可以用于平板，手机和桌面端浏览器
- `非常平滑`：GPU加速和 `requestAnimationFrame` - 最大化性能优化。对比其它工具，Draggable更加的自然和流畅，特别是在添加边界和动量时
- `基于动量（Momentum-based）动画`：如果你使用了 `InertiaPlugin` 插件，你只需在 `config` 对象中添加 `inertia: true` 即可😎，它会自动在鼠标和touch释放后添加自然的，基于动量的动作，使物体顺滑的停下。你还可以控制 `resistance`（阻尼） 的量，以及最大或最小的 `duration` 等等
- `⭐ 添加边界`：告诉可拖动元素限定在另一个DOM元素（容器）边界内，设置方式也很简单，比如以下几种方式：
  - `bounds: '#container'`
  - `bounds: { top: 100, left: 0, width: 1000, height: 800 }`
  - `bounds: { minRotation: 0, maxRotation: 270 }`
- `⭐ 使用 hitTest() 感知重叠`：查看一个元素是否和另一个元素存在重叠，或使用非常灵活的 `Draggable.hitTest()` 方法设置一个忍耐阈值（比如至少20px 或者 每个元素总表面区域的25%），参数为mouse event，它会告诉你是否鼠标经过了该元素
- `定义触发元素`：你可能想要只在特定区域触发拖动（比如window的顶部） - 设置很简单，比如 `trigger: '#topBar'`
- `拖动位置或旋转`：多种拖动类型可以选择
  - `['x,y' | 'top,left' | 'rotation' | 'x' | 'y' | 'top' | 'left']`
- `⭐ 锁定特定轴`：设置 `lockAxis: true`，Draggable会观察用户开始拖动的方向，然后将其限制在该轴。或者如果你只想允许垂直或水平方向的运动，就可以使用下面这些类型
  - `type: "top"` | `type: "y"` 只允许垂直方向的运行
  - `type: "left"` | `type: "x"` 只允许水平方向的运动
- `使用transform origin改变旋转轴心`：默认情况，旋转的元素会以它们的中心进行旋转，但是你可以设置 `transformOrigin` 改变轴心点
  - 在拖动前调用 `gsap.set(yourElement, { transformOrigin: 'top left' })`，它将以左上角为轴心进行旋转
  - 或使用 `% | px` 设置 `transformOrigin` 都是可以的
- `⭐ 丰富的回调系统和时事件分发`：可以使用下面这些回调 `onPress | onDragStart | onDrag | onDragEnd | onRelease | onLockAxis | onClick`，在回调内，`this` 指向Draggable实例本身，因此可以轻松的访问 `target | bounds` 等属性。如果你更喜欢事件监听，Draggable也对事件进行了分发，比如 `yourDraggable.addEventListener('dragend', yourFunc)`
- `能很好的和SVG一起工作`
- `对transformed容器也能使用` - 想拖动旋转或者缩放容器中的元素？没有问题。其余工具处理这个很困难😎
- `自动滚动，即使在多个容器中` - 设置 `autoScroll: 1` 表示正常速度的自动滚动；`autoScroll: 2` 表示2倍滚动速度，等等。你朝边界移动得越近，滚动越快
- `当元素移动少于3px时，感知点击` - 一个很常见的挑战是，识别用户是点击或者tap物体还是拖动物体，因此如果 `mouse | touch` 事件从开始位置移动少于3px，则认为是点击，`onClick` 回调会被触发，你也可以使用 `minimumMovement` 定义一个不同的阈值，比如 `minimumMovement: 6` 表示 `6px`

## 1️⃣ 使用
使一个元素可拖动（水平和垂直）最简单形式如下：
```js
Draggable.create('#yourID')
```
这会简单的找到ID为 `yourID` 的元素，使其变得可拖动，没有边界，释放后也没有任何动量动作，除了选择器外，你还以传入DOM元素或者jQuery对象。
使用 `vars` 参数配置各种配置选项。比如，使用 `y` transform限定物体只能在垂直方向拖动，或者限定拖动的边界，各种回调：
```js
Draggable.create('#yourID', {
  type: 'y',
  bounds: document.getElementById('container'),
  inertia: true, // 使用 InertiaPlugin，该插件是付费的
  onClick: function() {
    console.log('clicked')
  },
  onDragEnd: function() {
    console.log('drag end')
  }
})
```
或者使物体 **旋转**（拖动旋转元素）：
```js {2}
Draggable.create('#yourID', {
  type: 'rotation',
  inertia: true,
})
```
并且可以在mouse/touch释放后添加捕获 `90°`，可使用snap配置项：
```js {4}
Draggable.create('#yourID', {
  type: 'rotation',
  inertia: true,
  snap: function(value) { // 📚 snap可理解为 "捕获" 或者 "吸附"
    // 当鼠标/手指被释放时，这个函数被InertiaPlugin调用，
    // 它表示旋转应该结束的位置，我们可以改变那个值并返回一个新的值。
    // 这为我们提供了一种简单的方法，可以使用我们想要的任何逻辑应用自定义捕获行为。
    // 在本例中，我们只是确保结束值以90度的增量进行捕获（snap）
    return Math.round(value / 90) * 90
  }
})
```

## 2️⃣ 配置对象属性

### `activeCursor: {String}`
按压和释放potiner或mouse时`cursor`的CSS值。可以是不同的普通cursor值，比如 `cursor: "grab"`, `activeCursor: "grabbing"`

### `allowContextMenu: {Boolean}`
默认是 `false`

如果为 `true`，Draggable允许上下文菜单（比如用户右击或者长触摸）。一般在拖动的过程中，这个是被禁用的（特别是触摸设备）。

### `allowNativeTouchScrolling: {Boolean}`
默认是 `true`

默认情况下，允许你在相反的方向原生触摸滚动就好像Draggables被限制在一个轴。比如，使用了 `type: 'x' | type: 'left'` 的Draggable，允许在垂直方向的原生触摸滚动，而 `type: 'y' | type: 'top'` 允许在水平方向的触摸滚动。

### `autoScroll: {Number}`
默认值是 `0`，即不会自动滚动

当被拖动物体在可滚动容器的 `40px` 边界时开始自动滚动，将其设置为一个非0值，`1` 表示正常速度，`2` 表示2倍速度等。为了更自然的体验，当鼠标越靠近边缘，滚动速度也越快

### `⭐bounds: {Element|String|Object}`
使可拖动对象限定在某个DOM元素（比如容器）边界。可以传入一个元素，比如 `bounds: document.getElementById('container')`或者jQuery对象，或者选择器 `#container`.

还可以定义矩形边界：`bounds: { top: 100, left: 0, width: 1000, height: 800 }`，它是基于父元素的坐标系统的

或者定义特定的最大和最小值，比如 `bounds: { minX: 10, maxX: 300, minY: 50, maxY: 500 }` 或者 `bounds: { minRotation: 0, maxRotation: 270 }`

### `callbackScope: {Object}`
用于所有回调（`onDrag`, `onDragEnd`等）的作用域。这个作用域是回调内 `this` 的指向

### `clickableTest: {Function}`
拖动对象可能包含可点击的子元素，比如 `<a>`标签链接， `<button>` 或者 `<input>`元素等。

默认情况，对这些元素的点击或者tap处理是不同的，不允许用户对其进行拖拽。你可以设置 `dragClickables: false` 覆盖这种行为，但是如果能控制这些可点击元素的行为那就更棒了，使用这个函数你可以接收该可点击元素作为唯一参数，返回 `true | false`。Draggable会在用户按压鼠标或者手指按压可拖动元素时，调用这个函数

### `⭐cursor: {String}`
默认（除了 `type: 'rotation'` 情况）CSS属性为 `cursor: move`。你也可以将其设置为 `cursor: 'pointer'`
- [devdocs.io/cursor](https://devdocs.io/css/cursor)


### `dragClickables: {Boolean}`
默认情况，Draggable可对很多种元素都能生效，但有时你可能想点击 `<a> | <button> | <select> | <button> | <textarea>` 元素（或者任何带有 `data-clickable="true"` 的元素）,而不触发拖拽，而是使用浏览器默认的行为，比如点击input，聚焦到该元素，因此你可能想要Draggable忽略这些点击，从而允许默认的行为，则可以设置为 `dragClickables: false`

### `⭐dragResistance: {Number}`
`0-1`之间的数值，表示拖动元素的抗性，`1` 表示完全不允许拖动，`0.75` 应用更多抵抗性（使对象以1/4速度运动）， `0.5` 表示半速。**这同样适用于 `rotation` 情况**

### `edgeResistance: {Number}`
一个介于0到1之间的数字，它控制在元素超出边界(如果施加了任何阻力)时施加到元素上的阻力的程度。
- `1`不允许物体被拖出边界时，
- `0.75`会施加很大的阻力(让物体在拖出边界时以四分之一的速度移动)，
- `0.5`则会以一半的速度移动，以此类推。
- **这同样适用于 `rotation` 情况**

### `force3D: {Boolean}`
默认情况使用3D transform，为了强制元素在自己图层使用GPU，加速合成。一般这可以提供最佳性能，但是你可以通过 `force3D: false` 禁用。这对你拖动的元素包含动画元素的场景比较好。

### `inertia: {Boolean | Object}`
InertiaPlugin是用户鼠标（或touch）释放之后基于动量动画动效的关键。为了让可拖动物体自动添加一个InertiaPlugin tween动画，你可以设置 `inertia: true`。

对于更加高级的效果，你可以定义inertia对象，它将反馈给tween，比如，`inertia: { top: {min: 0, max: 1000, end: [0, 200, 400, 600]} }`。然而，如果你想完全控制InertiaPlugin Tween, 你可以使用 `onDragEnd` 调用你自定义函数，该函数可以创建一个tween进行动画😎
```js
Draggable.create(box, {
  bounds: window,
  onDragEnd: () => {
    console.log('onDragEnd');
    gsap.to(box, {
      x: 300,
    })
  }
})
```
::: warning
🚨 `InertiaPlugin` 是会员插件。
:::
如果你定义了 `inertia: true`，你也可以使用以下任何配置属性，应用于鼠标/触摸释放后的移动:

> `⭐ snap: {Function | Object | Array}`

允许你定义元素被释放后可以落在哪里的规则。比如，你想总是以90度的增量进行旋转，或者 `x` | `y` 值刚好吸附到某个网格中（单元格最近的落点）或者落在特定的位置，可以有几种方式定义这个属性：
 - **函数形式**：这个函数将被传递一个数值参数，即自然结束值。函数必须返回新的结束值(你可以在函数内运行任何你想要的逻辑并返回值)。例如，要使值对齐到最接近的增量50，可以：

   ```js
   {
     snap: function(endValue) {
       return Math.round(endValue / 50) * 50
     }
   }
   ```

 - **数组形式**：如果使用值数组，InertiaPlugin将首先绘制自然着落位置，然后遍历数组并找到最接近的数字(只要它不超出您定义的任何边界)。例如，让它从10、50、200和450中选择最接近的数字

   ```js
   {
     snap: [10, 50, 200, 450]
   }
   ```

 - **对象形式**：如果你想对每个属性使用不同的逻辑

   ```js
   // 1️⃣ 如果`type: "x,y"`你想让`x`部分固定到一组值，而`y`部分固定到另一组值，你可以使用一个具有匹配属性的对象
   {
     snap: {
       x: [5, 20, 80, 400],
       y: [10, 60, 80, 500]
     }
   }
   
   // 2️⃣ 如果 `type: "top,left"`，你想对每个值使用不同的函数
   {
     snap: {
       top: function(endValue) {
         return Math.round(endValue/ 50) * 50;
       },
       left: function(endValue) {
         return Math.round(endValue/ 100) * 100;
       },
     }
   }
   
   // 3️⃣ 你可以在这个对象中定义点属性，结合 x 和 y
   //  它会在20px(距离)范围内的数组中任意点上对齐
   {
     liveSnap: {
       points: [{x: 0, y: 0}, {x: 100, y: 0}],
       radius: 20
     }
   }
   
   // 4️⃣ 你甚至可以使用基于函数的值来运行自己的捕获逻辑
   {
     liveSnap: {
       points: function(point) {
         // 自定义逻辑
       }
     }
   }
   ```



> `onThrowUpdate: {Function}`

每次InertiaPlugin补间更新/渲染时都应该调用的函数(基本上是在补间激活时引擎的每次“Tick”)。这只适用于在用户释放鼠标/触摸后生成的补间—在用户拖动元素时不会调用该函数（这正是 `onDrag` 函数的作用）。

默认情况，`onThrowUpdate` 作用域是Draggable实例自身，但是你也可以像其他Tween一样定义 `callbackScope`



> `onThrowComplete: {Function}`

当InertiaPlugin补间完成时应该调用的函数。这只适用于在用户释放鼠标/触摸后生成的补间——当用户释放鼠标/触摸时，该函数不会立即调用 - 这正是 `onDragEnd` 的作用。

默认情况，`onThrowComplete` 作用域是Draggable实例自身，但是你也可以像其他Tween一样定义 `callbackScope`



> `throwResistance: {Number}`

一个数字(默认为1000)，用于控制在释放鼠标/触摸和启用基于动量的运动时的阻力或摩擦力（通过设置 `inertia: true`）。数值越大，阻力越大，运动减速越快。（需要InertiaPlugin并设置`inertia: true`，否则`throwResistance`将被忽略。）



> `maxDuration: {Number}`

基于动力的惯性间的最大持续时间(以秒为单位)。InertiaPlugin将自动分析速度和边界，并确定适当的持续时间(更快的移动通常会导致更长的过渡时间来减速)，但你可以通过定义maxDuration来限制持续时间。

默认值是10秒。这与用户可以拖动对象的最长时间无关——这只是在他们释放鼠标/触摸后产生的惯性补间。（需要InertiaPlugin并设置`inertia: true`，否则`maxDuration`将被忽略。）



> `minDuration: {Number}`

基于动力的惯性间应持续的最小持续时间(以秒为单位)。InertiaPlugin将自动分析速度和边界并确定适当的持续时间(更快的移动通常会导致更长的补间时间来减速)，但你可以通过定义minDuration来强制补间至少需要一定的时间。

默认值是0.2秒。这与用户可以拖动对象的最短时间无关——这只是在他们释放鼠标/触摸后产生的惯性补间。（需要InertiaPlugin并设置`inertia: true`，否则`minDuration`将被忽略。）



> `overshootTolerance: {Number}`

影响在渐变结束时平滑返回到静止位置之前允许的超过量。当弹动的初始速度通常会导致它超过`边界/最小值/最大值`时，就会发生这种情况。`overshotTolerance`公差越大，在必要的情况下，补间有更多的余地临时超过最大/最小。

默认值为1。如果不允许任何overshooting，可以将其设置为0。





### `⭐ liveSnap: {Function | Boolean | Array | Object}`

允许你定义当元素正在被拖动时的规则（而普通的snap只会影响到其`最终值`，即拖拽释放后元素将移动到哪里）。比如，你想每次旋转 `10°` 的增量或者 `x & y` 吸附到最近的网格。则可以通过下面定义这个属性：

- **函数形式**：这个函数将被传递一个数值参数，即自然结束值。函数必须返回新的结束值(你可以在函数内运行任何你想要的逻辑并返回值)。例如，要使值对齐到最接近的增量50，可以：

  ```js
  {
    liveSnap: function(endValue) {
      return Math.round(endValue / 50) * 50
    }
  }
  ```

- **数组形式**：如果使用值数组，InertiaPlugin将首先绘制自然着落位置，然后遍历数组并找到最接近的数字(只要它不超出您定义的任何边界)。例如，让它从10、50、200和450中选择最接近的数字

  ```js
  {
    snap: [10, 50, 200, 450]
  }
  ```

- **对象形式**：如果你想对每个属性使用不同的逻辑

  ```js
  // 1️⃣ 如果`type: "x,y"`你想让`x`部分固定到一组值，而`y`部分固定到另一组值，你可以使用一个具有匹配属性的对象
  {
    snap: {
      x: [5, 20, 80, 400],
      y: [10, 60, 80, 500]
    }
  }
  
  // 2️⃣ 如果 `type: "top,left"`，你想对每个值使用不同的函数
  {
    snap: {
      top: function(endValue) {
        return Math.round(endValue/ 50) * 50;
      },
      left: function(endValue) {
        return Math.round(endValue/ 100) * 100;
      },
    }
  }
  
  // 3️⃣ 你可以在这个对象中定义点属性，结合 x 和 y
  //  它会在20px(距离)范围内的数组中任意点上对齐
  {
    liveSnap: {
      points: [{x: 0, y: 0}, {x: 100, y: 0}],
      radius: 20
    }
  }
  
  // 4️⃣ 你甚至可以使用基于函数的值来运行自己的捕获逻辑
  {
    liveSnap: {
      points: function(point) {
        // 自定义逻辑
      }
    }
  }
  ```

- **布尔值（true）**：live snapping 将使用定义的 `snap` 值（它在拖动是实时的，而不仅仅针对最终值😎）



### `⭐ lockAxis: {Boolean}`

如果为 `true`，只要在某个方向（水平或者垂直方向）移动超过 `2px`，就会锁定为该方向。不允许对角线的移动。

很明显这只适用于 `type` 为 `x,y` 或者 `top,left` ：

- 如果只允许垂直方向的移动，则 `type` 设置为 `y` 或者 `top`
- 如果只允许水平方向的移动，则 `type` 设置为 `x` 或者 `left`



### `minimumMovement: {Number}`

默认情况下，Draggable需要被拖动元素移动超过 `2px` 才被认为是拖动操作，但是你可以通过 `minimumMovement` 改变这个阈值。

- `minimumMovement: 6` 表示超过 `6px` 才认为是拖动操作



### `onClick: {Function}`

当点击元素，释放前没有移动超过 `3px` 时被被当做点击处理，这个函数被调用。**这用于分辨用户意图：`点击还是拖动`**。

函数内部， `this` 指向Draggable示例（除非你用 `callbackScope` 特意设置作用域），通过 `this.target` 可以轻松的访问目标元素，或者边界坐标（`this.maxX` | `this.minX` | `this,maxY` | `this.minY`）😎

默认情况，`pointerEvent` 是回调的唯一参数，通过它可以访问 `pageX | pageY | target | currentTarget` 等等。



### `onClickParams: {Array}`

给 `onClick` 函数提供的可选参数数组。比如：

```js
{
  onClickParams: ['clicked', 5],
  onClick: function(message, num) {
    console.log(`${message} ${num}`) // 'click 5'
  }
}
```



### `⭐ onDrag: {Function}`

只要拖拽目标时就会一直触发这个函数。

函数内部 `this` 指向同其它回调函数（比如 `onClick`）

::: tip

这个每次 requestAnimationFrame 时调用，性能最大化😎。

:::



### `onDragParams: {Array}`

同 `onClickParams`，它给 `onDrag` 提供额外的参数



### `⭐ onDragEnd: {Function}`

拖拽 `释放时` 调用的回调函数 。🚨即使目标没有移动，`onDragEnd` 也会被触发，而 `onClick` 只在目标移动少于 `3px` 时才触发。

函数内部 `this` 指向同其它回调函数（比如 `onClick`）



### `onDragEndParams: {Array}`

同 `onDragParams`。



### `⭐ onDragStart: {Function}`

当目标移动超过 `2px` 时就会触发，意味着拖动开始了。

函数内部 `this` 指向同其它回调函数（比如 `onClick`）



### `onDragStartParams: {Array}`

同 `onDragParams`



### `onLockAxis: {Function}`

只要移动被锁定就会立马触发这个函数。前提是 `lockAxis: true`，并且被认定在拖动目标。

函数内部 `this` 指向同其它回调函数（比如 `onClick`）

### `onMove: {Function}`

每次鼠标在拖拽时移动就会触发这个函数。

函数内部 `this` 指向同其它回调函数（比如 `onClick`）

::: tip

通常，最好使用 `onDrag` ，但是如果你需要拖拽事件中的 `.stopPropogation | .stopImmediatePropogation` 时，可以用这个函数

:::



### `onPress: {Function}`

鼠标按压下去时就会触发这个函数。

函数内部 `this` 指向同其它回调函数（比如 `onClick`）



### `onPressInit: {Function}`

一个应该在onPress中记录起始值之前调用的函数，允许你在任何拖动发生之前进行更改。

::: tip

`onPressInit` 总是在 `onPress` 之前触发。

:::

🌰：

- [Draggable onPressInit Demo - @codepen](https://codepen.io/GreenSock/pen/gdPLqZ/62fd4014cf86a9a87e632c8b4f967ed4)



### `onPressParmas: {Array}`

同 `onDragParams`



### `onRelease: {Function}`

鼠标按压在目标元素上，释放时触发此函数，不论是否拖动。

函数内部 `this` 指向同其它回调函数（比如 `onClick`）



### `onReleaseParams: {Array}`

同 `onDragParams`





### `⭐ trigger: {Element | String | Object}`

如果你只想某个特定区域（比如window的top bar位置）触发拖动而不是整个元素，你可以定义一个子元素作为trigger，比如:

```js
{
  trigger: yourElement
}

{
  trigger: '#topBar'
}

{
  trigger: '$('#yourID')'
}
```

可以是元素，选择器或者jQuery对象。





### `⭐ type: {String}`

表示拖动的类型（即拖动影响的属性值）。

下面几种情况都是可以的：

```js

type: 'x,y' // 即 translateX & translateY
type: 'x'
type: 'y'

type: 'left,top'
type: 'left'
type: 'top'

type: 'rotation'
```

默认是 `type: 'x,y'`

### `zIndexBoost: {Boolean}`

默认情况下，对于水平或者垂直方向拖动，当一个元素被按压时，它的 `zIndex` 会设置为一个比较高的值（默认 `1000`）。并且数值也会随着新的按压元素增加，这样堆叠顺序看起来是正确的(新按下的对象上升到顶部)，但是你可以通过 `zIndexBoost: false` 跳过这种行为。 



## 3️⃣ Snapping 用法

这个词可以理解为 `吸附 或者 捕获`。

Draggable拥有高级的捕获能力。可以在 `config` 中定义 `snap` 值来控制元素拖拽`释放后`的位置，或者你可以定义 `liveSnap` 定义`拖动时` 实时捕获。可以通过下面方式定义：



### 数组形式捕获

```js
Draggable.create('#id', {
  type: 'x,y',
  liveSnap: {
    // 吸附到数组中最近的点，但只能在 `15px` 范围内
    points: [{x: 0, y: 0}, {x: 100, y: 0}, {x: 200, y: 50}],
    radius: 15
  }
})
```

`points` 是一个特殊的属性，允许你在单一地方结合 `x` 和 `y` 的逻辑。你也可以将它们分开：

```js
Draggable.create('#id', {
  type: 'x,y',
  liveSnap: {
    // x & y（或者 top & left）可以都有自己的吸附数组
    x: [0, 100, 200, 300],
    y: [0, 50, 100, 150]
  }
})
```



### 函数形式自定义逻辑

```js {6,9}
Draggable.create('#id', {
  type: 'x,y',
  liveSnap: {
    // 吸附到数组中最近的点，但只能在 `15px` 范围内
    points: function(point) {
      // 如果在100px内，吸附到 500,250 位置
      const dx = point.x - 500
      const dy = point.y - 250
      if (Matt.sqrt(dx * dx, dy * dy) < 100) { // 100px半径内
        return { x: 500, y: 250}
      }
      return point // 否则不做任何改变
    }
  }
})
```

或者单独设置每个属性：

```js
Draggable.create('#id', {
  type: 'x,y',
  liveSnap: {
    x: function(value) {
      // x方向吸附增量为 50
      return Math.round(value / 50) * 50
    },
    y: function(value) {
      // y方向吸附增量为 25
      return Math.round(value / 25) * 2s5
    }
  }
})
```

🎉 `rotation` 也是一样的简单:

```js {2,5}
Draggable.create('#id', {
  type: 'rotation',
  liveSnap: {
    rotation: function(value) {
      // 旋转吸附增量为 10
      return Math.round(value / 10) * 10
    }
  }
})
```



### 获取速度

只要你加载了 `InertiaPlugin` （收费😅）并设置了 `inertia: true`，你就可以使用 `InertiaPlugin.getVelocity()` 方法。Draggable会自动基于 `type` 值（type: 'x,y' 将追踪 `x & y`; `type: 'rotation'` 将追踪rotation）开始追踪必要的属性.

```js
Draggable.create('#movableID', {
  type: 'x,y',
  inertia: true,
  onDragEnd: function() {
    console.log('x velocity is: ' + InertiaPlugin.getVelocity(this.target, 'x'))
    console.log('y velocity is: ' + InertiaPlugin.getVelocity(this.target, 'y')
  }
})
```



### 注意事项 & 依赖 & 限制

- 大多数情况，应当使用 [.pointerX](https://greensock.com/docs/v3/Plugins/DraggablePlugin/pointerX) & [.pointerY](https://greensock.com/docs/v3/Plugins/DraggablePlugin/pointerY)，而不是event的位置（比如 `.pageX | .pageY`），因为GSAP对position在所有浏览器进行了范式化

- 如果你想特殊的元素可点击，并被 Draggable所忽略，只需给该元素添加 `data-clickable="true"`，或者添加 `onclick`。默认情况，Draggable会自动忽略 `<a> & <input> & <select> & <button> & <textarea>` 元素的点击。如果你想运行自定义逻辑来决定一个对象是否被认定为 `可点击`，可以设置 `clickableTest` 配置属性，通过该函数返回 `true | false` 来判断。

- Draggable可以不依赖 `InertiaPlugin`，但没有 `InertiaPlugin` 插件，会禁用任何基于动量的动效（比如可以轻弹物体，并让它们在减速的同时继续）。`InertiaPlugin` 是会员插件😅

- 为了使物体基于 `top & left` CSS属性移动，你必须确保它们的 `position` 属性为 `relative | absolute` 📚

- 默认情况下，任何回到函数 + `snap` + `liveSnap` 函数都和Draggable实例关联，因此 `this` 指向Draggable实例。你可以在函数内通过 `this.x & this.y` 获取当前水平和垂直方向的值。如果你使用了边界（`bounds`），你可以使用 `this.maxX & this.minX & this.maxY & this.minY` 获取最大最小值

- 如果使用元素作为边界，它的旋转不应与目标元素不同。

- 如果你混用timelines 和 draggable，你需要使用代理元素

  <iframe height="300" style="width: 100%;" scrolling="no" title="Draggable interfering with Timeline &amp; visa versa" src="https://codepen.io/GreenSock/embed/preview/WNedayo?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href="https://codepen.io/GreenSock/pen/WNedayo">
    Draggable interfering with Timeline &amp; visa versa</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </iframe>

- 不依赖jQuery和其他任何框架



## 4️⃣ Draggable 示例

- [Draggable Showcases - codepen](https://codepen.io/collection/DrQGpM)
- [Draggable How-To Demos](https://codepen.io/collection/XoGKyX?cursor=eyJjb2xsZWN0aW9uX2lkIjoiWG9HS3lYIiwiY29sbGVjdGlvbl90b2tlbiI6bnVsbCwibGltaXQiOjQsIm1heF9pdGVtcyI6MzMsIm9mZnNldCI6OCwicGFnZSI6Mywic29ydF9ieSI6InBvc2l0aW9uIiwic29ydF9vcmRlciI6IkFzYyJ9)

 

原文档地址：

- [Draggable - plugin](https://greensock.com/docs/v3/Plugins/Draggable)



2022年11月02日20:59:48

