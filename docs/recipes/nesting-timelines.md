可以通过主时间轴添加多个子时间轴，对时间轴进行组合和控制：

```js {17}
function scene1() {
  let tl = gsap.timeline()
  // 构建场景1
  tl.to(...)
    .to(...)
  return tl // 返回时间轴
}

function scene2() {
  let tl = gsap.timeline()
  // 构建场景2
  tl.to(...)
    .to(...)
  return tl // 返回时间轴
}

// 😎 主时间轴，通过 `add()` 添加别的时间轴
let masterTl = gsap.timeline()
  .add(scene1())
  .add(scene2(), '-=0.5') // 轻微重叠
```

2022年10月14日15:38:42
