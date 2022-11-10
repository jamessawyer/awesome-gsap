---
title: gsap.utils.selector()
---

📚 这个工具会返回一个 **`函数`**，该函数充当选择器；它可用于指定动画目标的作用域😎:

- 它不同于 `document.querySelectorAll()` 的地方在于，它相当于 `scopedElement.querySelectorAll()` 只会其选择后代元素
- 它返回的是 `数组` 而不是 `NodeList`，这意味着它可以直接使用数组的方法，比如 `map | forEach | filter` 等
- 你可以传入一个 [React Ref](https://reactjs.org/docs/refs-and-the-dom.html) 或者 [Angular ElementRef](https://angular.io/api/core/ElementRef)。它会自动检测 `.current / .nativeElement`（🎉React中推荐使用 [gsap.context()](https://greensock.com/docs/v3/GSAP/gsap.context())）

它只有 `1` 种形式：

1. `selector([scope])` 它返回的是一个函数，而不是直接返回结果🚨
   - `scope: Element|String|Object` - 可选！元素或者选择器或者React Ref或者Angular ElementRef，用于限定选择的作用域，类似 `scopeElement.querySelectorAll([selector-text])` 而不是 `document.querySelectorAll()`



1️⃣ `原生JS`

🌰

```js {2,5}
let q = gsap.utils.selector(myElement) // 或者选择器 '.class' | '#some-id'
// 找出 myElement 内所有的 '.box' 元素
let boxes = q('.box')

// 或者直接添加到动画中
gsap.to(q('.circle'), { x: 100 })
```



2️⃣ `React ref`

🌰

```jsx {2,6}
let el = useRef()
// 🚨 这里不用传入 `el.current` 它会自动检测 `.current` 😏
let q = gsap.utils.selector(el)

useEffect(() => {
  // 内部相当于使用 el.current.querySelectorAll()
  gsap.to(q('.box'), {x: 100})
}, [])
```



3️⃣ `Angular ElementRef`

🌰

```typescript {8}
@Component({...})
class MyComponent implements OnInit {
  constructor(private el: ElementRef) {
    this.q = gsap.utils.selector(el)
  }

  ngOnInit() {
    // 内部相当于使用 this.el.nativeElement.querySelectorAll()
    gsap.to(this.q('.box'), {x: 100})
  }
}
```

4️⃣ `Vue2`

```vue {8}
{
  mounted() {
    this.$nextTick(() => this.animate())
  },
  methods() {
    animate() {
      let q = gsap.utils.selector(this.$el)
      // 内部相当于使用 this.$el.querySelectorAll()
      gsap.to(q('.box'), {x: 100})
    }
  }
}
```



## React示例进行对比selector的优势

React Ref 示例：**通常会给每个想要动画的元素添加一个 `ref`**，但这样会显得很冗长：

```jsx {16,19,34}
let data = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4}
]

// 转发以便在父元素中获取子元素
let Box = forwardRef((props, ref) => {
  return <div className="box" ref={ref}></div>
})

let App = () => {
  // 这里声明了一个数组refs 这样很冗长😅
  let boxRefs = useRef([])
  
  useEffect(() => {
    gsap.to(boxRefs.current, {
      opacity: 1,
     	scale: 1,
      duration: 1,
      stagger: 0.1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    })
  }, [])
  
  return (
  	<div>
      <h1>React forwaring Refs</h1>
      {data.map((item, i) => 
         <Box key={item.id} ref={e => boxRefs.current[i] = e} />
      )}
    </div>
  )
}
```

[React forward Ref - @codepen](https://codepen.io/GreenSock/pen/JjWaJNy)

<iframe height="300" style="width: 100%;" scrolling="no" title="React forwarding refs" src="https://codepen.io/GreenSock/embed/preview/JjWaJNy?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/JjWaJNy">
  React forwarding refs</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

🤩 `如果使用 gsap.utils.selector() 则我们只用使用一个ref即可`：

```jsx {13,18,31}
let data = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4}
]

// 更简洁
let Box = () => <div className="box"></div>

let App = () => {
  // 直接用一个ref即可
  let el = useRef()
  let q = gsap.utils.selector(el)
  
  useEffect(() => {
    // 组件已经被渲染，因此我们可以选择该组件的后代，包括嵌套的颜色
    gsap.to(q('.box'), {
      opacity: 1,
     	scale: 1,
      duration: 1,
      stagger: 0.1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    })
  }, [])
  
  return (
  	<div ref={el}>
      <h1>React forwaring Refs</h1>
      {data.map((item, i) => 
         <Box key={item.id} />
      )}
    </div>
  )
}
```

[React scoped selector - @codepen](https://codepen.io/GreenSock/pen/BaWOZpM)

<iframe height="300" style="width: 100%;" scrolling="no" title="React scoped selector" src="https://codepen.io/GreenSock/embed/preview/BaWOZpM?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/BaWOZpM">
  React scoped selector</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

::: tip 💡

现在React中一般都使用 [gsap.context()](../../blogs/react/getting-start-with-gsap-and-react.html) 它更加的简洁

:::



## 🤔 为什么不能直接使用 document.querySelectorAll()

假设某个组件为：

```jsx
<div class="my-component">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

在同一个页面使用3个该组件：

```jsx
<>
  <my-component>
  <my-component>
  <my-component>
</>
```

最终渲染结果：

```jsx
<div class="my-component">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
<div class="my-component">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
<div class="my-component">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

如果使用 `document.querySelectorAll()` 会导致点击一个组件，使其它2个组件也出现动画😅:

```jsx
myCompnent.addEventListener('click', () => {
  gsap.to('.my-component .box', {
    x: 100,
    stagger: 0.1
  })
})
```

而使用 `gsap.utils.selector()` 则可以限定选择的组件是哪一个:

```jsx
let el = useRef()
let q = gsap.utils.selector(el)

gsap.to(q('.box'), {})
```



当然你也可以直接使用下面形式：

```jsx
myComponentRef.current.querySelectorAll('.box')
```

文档地址：

- [gsap.utils.selector()](https://greensock.com/docs/v3/GSAP/UtilityMethods/selector())



2022年11月10日10:48:25