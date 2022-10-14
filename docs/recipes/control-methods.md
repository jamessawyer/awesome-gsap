可以通过动画实例，使用方法（或者直接赋值）对动画进行控制：
```js {1,4,16,23}
// 保留动画引用，以便之后进行控制
let anim = gsap.to(...) // 或者 gsap.timeline(...)

// 1️⃣ 大多数方法也可以通过 `getters` || `setters` 方式使用（即直接赋值）
anim.play()           // 播放
  .pause()
  .resume()           // 恢复动画，保留方向
  .reverse()
  .restart()
  .timeScale()        // 2 -> 2倍速度，0.5 -> 0.5倍速
  .seek(1.5)          // 跳转到时间点（单位 s）或者指定label位置
  .progress(0.5)      // 跳到动画一般进度位置
  .totalProgress(0.8) // 包含 repeats
  // 当用作setter，返回animation（用于链式调用）

  // 2️⃣ 其它有用方法（Tweens & Timeines）
  .kill()          // 立即销毁动画
  .isActive()      // 如果正在动画，则返回true
  .then()          // Promise
  .invalidate()    // 清除记录的 start/end 值
  .eventCallback() // get/set 一个事件回调

  // 3️⃣ timelines特有方法
  // 添加 label, tween, timeline 或 callback
  .add(thing, position)
  // 在给定位置调用函数
  .call(func, params, position)
  // 获取timeline子tween|timeline数组
  .getChildren()
  // 清空时间轴
  .clear()
  // 线性的动画到指定位置 
  .tweenTo(timeOrLabel, {vars})
  // 同时包含开始和结束位置
  .tweenFromTo(from, to, {vars})
```

2022年10月14日15:56:14
