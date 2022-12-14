---
title: gsap.utils.selector()
---

ð è¿ä¸ªå·¥å·ä¼è¿åä¸ä¸ª **`å½æ°`**ï¼è¯¥å½æ°åå½éæ©å¨ï¼å®å¯ç¨äºæå®å¨ç»ç®æ çä½ç¨åð:

- å®ä¸åäº `document.querySelectorAll()` çå°æ¹å¨äºï¼å®ç¸å½äº `scopedElement.querySelectorAll()` åªä¼å¶éæ©åä»£åç´ 
- å®è¿åçæ¯ `æ°ç»` èä¸æ¯ `NodeList`ï¼è¿æå³çå®å¯ä»¥ç´æ¥ä½¿ç¨æ°ç»çæ¹æ³ï¼æ¯å¦ `map | forEach | filter` ç­
- ä½ å¯ä»¥ä¼ å¥ä¸ä¸ª [React Ref](https://reactjs.org/docs/refs-and-the-dom.html) æè [Angular ElementRef](https://angular.io/api/core/ElementRef)ãå®ä¼èªå¨æ£æµ `.current / .nativeElement`ï¼ðReactä¸­æ¨èä½¿ç¨ [gsap.context()](https://greensock.com/docs/v3/GSAP/gsap.context())ï¼

å®åªæ `1` ç§å½¢å¼ï¼

1. `selector([scope])` å®è¿åçæ¯ä¸ä¸ªå½æ°ï¼èä¸æ¯ç´æ¥è¿åç»æð¨
   - `scope: Element|String|Object` - å¯éï¼åç´ æèéæ©å¨æèReact RefæèAngular ElementRefï¼ç¨äºéå®éæ©çä½ç¨åï¼ç±»ä¼¼ `scopeElement.querySelectorAll([selector-text])` èä¸æ¯ `document.querySelectorAll()`



1ï¸â£ `åçJS`

ð°

```js {2,5}
let q = gsap.utils.selector(myElement) // æèéæ©å¨ '.class' | '#some-id'
// æ¾åº myElement åææç '.box' åç´ 
let boxes = q('.box')

// æèç´æ¥æ·»å å°å¨ç»ä¸­
gsap.to(q('.circle'), { x: 100 })
```



2ï¸â£ `React ref`

ð°

```jsx {2,6}
let el = useRef()
// ð¨ è¿éä¸ç¨ä¼ å¥ `el.current` å®ä¼èªå¨æ£æµ `.current` ð
let q = gsap.utils.selector(el)

useEffect(() => {
  // åé¨ç¸å½äºä½¿ç¨ el.current.querySelectorAll()
  gsap.to(q('.box'), {x: 100})
}, [])
```



3ï¸â£ `Angular ElementRef`

ð°

```typescript {8}
@Component({...})
class MyComponent implements OnInit {
  constructor(private el: ElementRef) {
    this.q = gsap.utils.selector(el)
  }

  ngOnInit() {
    // åé¨ç¸å½äºä½¿ç¨ this.el.nativeElement.querySelectorAll()
    gsap.to(this.q('.box'), {x: 100})
  }
}
```

4ï¸â£ `Vue2`

```vue {8}
{
  mounted() {
    this.$nextTick(() => this.animate())
  },
  methods() {
    animate() {
      let q = gsap.utils.selector(this.$el)
      // åé¨ç¸å½äºä½¿ç¨ this.$el.querySelectorAll()
      gsap.to(q('.box'), {x: 100})
    }
  }
}
```



## Reactç¤ºä¾è¿è¡å¯¹æ¯selectorçä¼å¿

React Ref ç¤ºä¾ï¼**éå¸¸ä¼ç»æ¯ä¸ªæ³è¦å¨ç»çåç´ æ·»å ä¸ä¸ª `ref`**ï¼ä½è¿æ ·ä¼æ¾å¾å¾åé¿ï¼

```jsx {16,19,34}
let data = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4}
]

// è½¬åä»¥ä¾¿å¨ç¶åç´ ä¸­è·åå­åç´ 
let Box = forwardRef((props, ref) => {
  return <div className="box" ref={ref}></div>
})

let App = () => {
  // è¿éå£°æäºä¸ä¸ªæ°ç»refs è¿æ ·å¾åé¿ð
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

ð¤© `å¦æä½¿ç¨ gsap.utils.selector() åæä»¬åªç¨ä½¿ç¨ä¸ä¸ªrefå³å¯`ï¼

```jsx {13,18,31}
let data = [
  {id: 0},
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4}
]

// æ´ç®æ´
let Box = () => <div className="box"></div>

let App = () => {
  // ç´æ¥ç¨ä¸ä¸ªrefå³å¯
  let el = useRef()
  let q = gsap.utils.selector(el)
  
  useEffect(() => {
    // ç»ä»¶å·²ç»è¢«æ¸²æï¼å æ­¤æä»¬å¯ä»¥éæ©è¯¥ç»ä»¶çåä»£ï¼åæ¬åµå¥çé¢è²
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

::: tip ð¡

ç°å¨Reactä¸­ä¸è¬é½ä½¿ç¨ [gsap.context()](../../blogs/react/getting-start-with-gsap-and-react.html) å®æ´å çç®æ´

:::



## ð¤ ä¸ºä»ä¹ä¸è½ç´æ¥ä½¿ç¨ document.querySelectorAll()

åè®¾æä¸ªç»ä»¶ä¸ºï¼

```jsx
<div class="my-component">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

å¨åä¸ä¸ªé¡µé¢ä½¿ç¨3ä¸ªè¯¥ç»ä»¶ï¼

```jsx
<>
  <my-component>
  <my-component>
  <my-component>
</>
```

æç»æ¸²æç»æï¼

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

å¦æä½¿ç¨ `document.querySelectorAll()` ä¼å¯¼è´ç¹å»ä¸ä¸ªç»ä»¶ï¼ä½¿å¶å®2ä¸ªç»ä»¶ä¹åºç°å¨ç»ð:

```jsx
myCompnent.addEventListener('click', () => {
  gsap.to('.my-component .box', {
    x: 100,
    stagger: 0.1
  })
})
```

èä½¿ç¨ `gsap.utils.selector()` åå¯ä»¥éå®éæ©çç»ä»¶æ¯åªä¸ä¸ª:

```jsx
let el = useRef()
let q = gsap.utils.selector(el)

gsap.to(q('.box'), {})
```



å½ç¶ä½ ä¹å¯ä»¥ç´æ¥ä½¿ç¨ä¸é¢å½¢å¼ï¼

```jsx
myComponentRef.current.querySelectorAll('.box')
```



ææ¡£å°åï¼

- [gsap.utils.selector()](https://greensock.com/docs/v3/GSAP/UtilityMethods/selector())

::: details ðTSå®ä¹
```typescript
interface SelectorFunc {
    <K extends keyof HTMLElementTagNameMap>(selectorText: string): Array<HTMLElementTagNameMap[K]>;
    <K extends keyof SVGElementTagNameMap>(selectorText: string): Array<SVGElementTagNameMap[K]>;
    <E extends Element = Element>(selectorText: string): Array<E>;
  }

/**
 * Returns a selector function that is scoped to a particular Element.
 *
 * ```js
 * const q = gsap.utils.selector("#id");
 * const q = gsap.utils.selector(myElement);
 * gsap.to(q(".class"), {x: 100});
 * ```
 *
 * @param {Element | object | string} scope
 * @returns {SelectorFunc} A selector function
 * @memberof gsap.utils
 */
function selector(scope: Element | object | string | null): SelectorFunc;
```
:::

2022å¹´11æ10æ¥10:48:25