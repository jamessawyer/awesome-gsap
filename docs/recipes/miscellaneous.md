一些杂项用法：

1️⃣ 获取当前属性值：
```js
gsap.getProperty('#id', 'x') // 20
gsap.getProperty('#id', 'x', 'px') // '20px'
```

2️⃣ 设置GSAP全局Tween 默认值：
```js
gsap.defaults({ease: 'power2.in', duration: 1})
```

3️⃣ 配置GSAP非补间动画相关的设置：
```js
gsap.config({
  autoSleep: 60,
  force3D: false,
  nullTargetWarn: false,
  trialWarn: false,
  units: {left: '%', top: '%', rotation: 'rad'}
})
```

4️⃣ 注册一个 `effect` 以便复用：
```js
gsap.registerEffect({
  name: 'fade',
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      opacity: 0,
    })
  },
  defaults: { duration: 2 },
  extendTimeline: true,
})

// 使用注册的effect
gsap.effects.fade('.box')

// 或者 直接在timeline上使用
tl.fade('.box', { duration: 3 })
```

5️⃣ 添加 Listener
```js
gsap.ticker.add(myFunction)
function myFunction() {
  // 在核心引擎每次tick更新后执行
}

// 之后移除listener
gsap.ticker.remove(myFunction)
```

6️⃣ 不使用 `.set()` 方法快速重复设置属性：
```js
const setX = gsap.quickSetter('#id', 'x', 'px')
document.addEventListener('pointermove', e => setX(e.clientX))
```

2022年10月14日17:20:01
