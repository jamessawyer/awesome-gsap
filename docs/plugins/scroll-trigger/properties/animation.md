---
title: animation Property
---



📚 定义：

`.animation: Tween | Timeline | undefined` 与ScrollTrigger实例相关联的 [Tween](https://greensock.com/docs/v3/GSAP/Tween) 或 [Timeline](https://greensock.com/docs/v3/GSAP/Timeline) (如果存在的话)

- 只读，可选
- 返回 `Tween | Timeline | undefined` 与ScrollTrigger实例相关联的Tween或Timeline(如果存在的话)
- ScrollTrigger不必存在与之关联的动画，此时，`animation` 为 `undefined`



🌰

嵌入写法：

```js {4}
let tween = gsap.to('.class', {
  x: 100,
  id: 'example',
  scrollTrigger: '.trigger'
})
console.log(ScrollTrigger.getById('example').animation) // tween
```

单独写法：

```js {7}
let tween = gsap.to('.class', { x: 100 })

const st = ScrollTrigger.create({
  trigger: '.trigger',
  start: 'top center',
  end: '+=500',
  animation: tween
})

console.log(st.animation) // tween
```



文档地址：

- [ScrollTrigger - animation](https://greensock.com/docs/v3/Plugins/ScrollTrigger/animation)



2022年10月20日11:30:04



