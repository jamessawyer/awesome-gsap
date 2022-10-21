---
title: GSAP react基本用法
---

[[toc]]



## 创建项目

先创建React项目，Vite或者CRA都可以，下面安装 `gsap`:
```bash
pnpm i gsap
```
使用：
```jsx
import React from 'react'
import { gsap } from 'gsap'

export default function App() {
  return (
    <div className="app">
      <div className="box">Hello</div>
    </div>
  )
}
```

## 在useEffect()中创建动画
大多数时候，你应该将动画放在React的 `useEffect()` 中，因为它在DOM**渲染之后**运行。没有目标DOM，我们元素还不存在。下面是通用结构：
```jsx {4}
const comp = useRef()

useEffect(() => {
  // 这里写动画代码

  return () => {
    // 清理工作（可选）
  }
}, []) // 添加空依赖，避免每次渲染都执行
```

## 目标元素... Refs?
为了动画，我们需要告诉GSAP目标元素是哪一个。React不推荐使用选择器的方式，而是使用 [Refs](https://reactjs.org/docs/refs-and-the-dom.html) 的方式。
```jsx {1,5}
const boxRef = useRef()

return (
    <div className="app">
      <div className="box" ref={boxRef}>Hello</div>
    </div>
  )
```
React的一个核心概念就是模块化代码（自包容）。Refs能对组件中指定的元素DOM进行引用，确保目标元素的存在。
但动画通常会涉及多个DOM元素。假设你stagger10个不同元素，使用选择器我们可以轻松的锁定相同的类，比如 `.elements`。而使用Refs，我们必须为每个DOM节点都创建一个Ref，这会使得我们代码变得很混乱和重复😅。
那么我们该如何在得到Ref的安全性的同时利用选择器的灵活呢？我们可以使用 [React.context()](https://greensock.com/docs/v3/GSAP/gsap.context())

## ⭐ gsap.context() 是你最好的朋友!
`gsap.context()`给React提供了2个超级有用的功能：
1. 你可以传递一个 `element|Ref`，这样所有在里面的选择器（比如 `.my-class`）都会包含在其作用域中，这也意味着，它只会选择该`element|Ref`的 **`后代`**，再也不用给每个元素都创建单独的Ref了🚀。
2. 它会收集所有的GSAP动画和ScrollTriggers，因此你可以很轻松的一次性 `revert()` 所有这些实例。合适的动画清理对React18 **`double-useEffect()-call`** 行为很重要，并且这种模式遵循了 [React最佳实践](https://beta.reactjs.org/learn/synchronizing-with-effects#triggering-animations)📚

代码结构：
```jsx {4-6,12,14}
const comp = useRef()

useEffect(() => {
  // 创建我们的上下文
  // 这个函数会立即调用，所有GSAP动画和创建的ScrollTriggers函数执行期间都会被记录下来
  // 因此我们之后可以调用 revert() 对其进行清理
  let ctx = gsap.context(() => {
    // 所有动画都可以使用选择器，比如 '.box'
    // 并且归属于我们组件作用域
    gsap.to('.box', {...})
    ScrollTrigger.create({ trigger: '#my-id', ... })
  }, comp) // 🚀 重要，用于限定选择器作用域

  return () => ctx.revert() // 清理
}, [])
```
::: warning
gsap.context() 和 [React Context](https://reactjs.org/docs/context.html) 是不同的
:::


## 第一个动画
React先渲染box元素，GSAP然后将box旋转360度
```jsx
import { useLayoutEffect, useRef } from 'react'

function App() {
  const app = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.box', { rotation: '+=360' })
    }, app)

    return () => ctx.revert()
  })

  return (
    <div ref={app} className="app">
      <div className="box">Hello</div>
    </div>
  )
}
```
<iframe height="300" style="width: 100%;" scrolling="no" title="React &amp; GSAP Starter Template" src="https://codepen.io/GreenSock/embed/preview/OJmQvLZ?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/OJmQvLZ">
  React &amp; GSAP Starter Template</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## ⭐ Forwarding refs（转发Refs）
在一个基于组件的系统中，你可能需要对你的目标元素进行更精细的控制。**你可以使用 `refs转发` 的方式获取特定嵌套元素🎉**。
```jsx
import { useLayoutEffect, useRef } from 'react'

const Box = ({ children, className }) => (
  <div className={"box " + className}>{children}</div>
)

const Container = ({ children }) => (
  <div><Box>Don't Animate Me</Box></div>
)

function App() {
  const app = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 针对className 为 `animate` 的元素
      gsap.to('.animate', {
        x: 100,
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      })
    }, app)

    return () => ctx.revert()
  }, [])

  return (
    <div className="app" ref={app}>
      <Box className="animate">Box1</Box>
      <Container />
      <Box className="animate">Box2</Box>
    </div>
  )
}
```
<iframe height="300" style="width: 100%;" scrolling="no" title="Forwarding refs" src="https://codepen.io/GreenSock/embed/preview/RwVBWGW?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/RwVBWGW">
  Forwarding refs</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## ⭐ 创建和控制timelines
目前为止，我们只用refs存储对DOM元素的引用，但是它们不仅仅可用于元素。
📚 `Refs存在于渲染流程之外 - 因此它们可用于存储组件生命周期内持久化的任何值`。

为了避免每次渲染都创建一个新的timeline，在effect中创建timeline，并将其存储在 `ref` 中是很重要的😎。

```jsx {8-9,16}
function Circle({ children }) {
  return <div className="circle">{children}</div>;
}

function App() {
  const [reversed, setReversed] = useState(false);
  const app = useRef();
  // store the timeline in a ref.
  const tl = useRef();
      
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // add a box and circle animation to our timeline and play on first render
    console.log("creating timeline")
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline()
      .to(".box", { rotation: 360 })
      .to(".circle", { x: 100 })
    }, app)
    return () => ctx.revert();
  }, [])
  
  useEffect(() => {
    // toggle the direction of our timeline
    console.log("toggling reverse to", reversed)
    tl.current.reversed(reversed)
  }, [reversed])
   
  return (
    <div className="app" ref={app}>
      <div>
        <button onClick={() => setReversed(!reversed)}>Toggle</button>
      </div>
      <Box>box</Box>
      <Circle>circle</Circle>
    </div>
  );
}
```

这允许我们访问在不同的useEffect中访问同一个时间轴，并改变timeline方向

<iframe height="300" style="width: 100%;" scrolling="no" title="Storing a timeline in a ref." src="https://codepen.io/GreenSock/embed/preview/eYWGeGe?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/eYWGeGe">
  Storing a timeline in a ref.</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## React useEffect触发时机

如果不给 `useEffect` 传入依赖，它每次渲染时都会执行，这一般不是我们想要的。我们可以传入一个空数组 `[]`，使其只在第一次时运行。

```jsx {1,8,15}
// 1️⃣ 只在第一次渲染后运行
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to('.box-1', { rotation: '+=360' })
  }, el)
}, [])

// 2️⃣ 在第一次渲染后运行，以及每次 `someProp` 发生改变时运行
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to('.box-2', { rotation: '+=360' })
  }, el)
}, [someProp])

// 3️⃣ 每次渲染都运行
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to('.box-3', { rotation: '+=360' })
  }, el)
})
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Controlling when React runs an animation - useEffect" src="https://codepen.io/GreenSock/embed/preview/RwVZEMg?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/RwVZEMg">
  Controlling when React runs an animation - useEffect</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## ⭐ 子组件动画

```jsx {6-7,13-14}
function Box({ children, endX }) {    
  const boxRef = useRef()
  const ctx = useRef()

  useEffect(() => {
    // 🚀 nothing initially (we'll add() to the context when endX changes)
    ctx.current = gsap.context(() => {})
    return () => ctx.current.revert()
  }, [])

  // run when `endX` changes
  useEffect(() => {
    // 添加
    ctx.current.add(() => {
      gsap.to(boxRef.current, {
          x: endX
        })
    })
  }, [endX])
  
  return <div className="box" ref={boxRef}>{children}</div>;
}

function App() {
  const [endX, setEndX] = useState(0)
    
  return (
    <div className="app">
      <button onClick={() => setEndX(randomX())}>Pass in a randomized value</button>
      <Box endX={endX}>{endX}</Box>
    </div>
  )
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Reacting to changes in state" src="https://codepen.io/GreenSock/embed/preview/poPrYGa?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/poPrYGa">
  Reacting to changes in state</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 动画交互

使用回调的方式进行交互

```jsx
const onEnter = ({ currentTarget }) => {
  gsap.to(currentTarget, { backgroundColor: '#e77614' })
}

const onLeave = ({ currentTarget }) => {
  gsap.to(currentTarget, { backgroundColor: '#28a92b' })
}

return (
  <div className="box" onMouseEnter={onEnter} onMouseLeave={onLeave}>
    Hover me
  </div>
)
```

<iframe height="300" style="width: 100%;" scrolling="no" title="Animating on interaction with callbacks." src="https://codepen.io/GreenSock/embed/preview/ZEKJPLa?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/ZEKJPLa">
  Animating on interaction with callbacks.</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## ⭐ 避免没有样式的内容闪烁（FOUC）

`useEffect` 在DOM绘制后触发，当对元素进行Fading效果时，可以注意到没有样式的内容的闪烁问题。（原文这里有一个gif示意图）

为了避免闪烁问题，可以使用 `useLayoutEffect` 替代 `useEffect`，它在DOM绘制前执行：



<iframe height="300" style="width: 100%;" scrolling="no" title="Avoiding FOUC with useLayoutEffect()" src="https://codepen.io/JamesSawyer/embed/preview/MWGNayE?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/MWGNayE">
  Avoiding FOUC with useLayoutEffect()</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

`useLayoutEffect` 对于你需要进行DOM测量时很有用，因此对使用GSAP [ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger) 和 [Flip](https://greensock.com/docs/v3/Plugins/Flip) 插件时，推荐使用此hook。

关于useEffect & useLayoutEffect:

- [kentcdodds blog](https://kentcdodds.com/blog/useeffect-vs-uselayouteffect)



## 清理

在effects中返回一个清理函数，用于杀掉任何正在运行的动画和一些可能导致内存泄漏的东西，比如事件监听。

如果一个动画运行很长时间，使用ScrollTriggers或改变组件状态，清理函数就很重要。

这种情形，使用 `gsap.context()` 就很方便，因为它允许我们收集所有动画，并使用 `revert()` 方法杀掉它收集的所有动画。

```jsx
useEffect(() => {
  const ctx = gsap.context(() => {
    const animation1 = gsap.to('.box1', { rotation: '+=360' })
    const animation2 = gsap.to('.box2', {
      scrollTrigger: {
        // ...
      }
    })
  }, el) // scopes all selector text inside the context to this ref（optional， default is document）
  
  const onMove = () => {}
  
  window.addEventListener('pointermove', onMove)
  
  // 清理函数在组件卸载时调用
  return () => {
    ctx.revert() // 清理动画
    window.removeEventListener('pointermove', onMove)
  }
}, [])
```



原文链接：

- [Getting Started with GSAP + React](https://greensock.com/react)



2022年10月21日14:19:52
