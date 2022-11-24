---
title: gsap.globalTimeline
---

📚 `gsap.globalTimeline` 是根时间轴实例，它用于驱动GSAP所有的内容，使其成为 **`一次性`** 影响所有动画的强大方式😎。

- 记住，[gsap.delayedCall()](../methods/delayedCall)方法本质上还是补间动画，因此，如果你对 `globalTimeline` 使用 [pause()](https://greensock.com/docs/v3/GSAP/Timeline/pause()) 或 [timeScale()](https://greensock.com/docs/v3/GSAP/Timeline/timeScale())方法，是会影响到delayedCalls()的
- 如果你想忽略对delayedCalls或者其他tweens或timelines的影响，可以使用 [gsap.exportRoot()](../methods/exportRoot)

有用的方法：`全局时间轴本质上也是一个时间轴，因此它的方法本质上就是时间轴方法`

1. [gsap.globalTimeline.pause()](https://greensock.com/docs/v3/GSAP/Timeline/pause()) - 暂停全局时间轴会影响到**所有的**动画。这个方法返回自身（`this`）

2. [gsap.globalTimeline.play()](https://greensock.com/docs/v3/GSAP/Timeline/play()) - 恢复全局时间轴会影响到 **所有的** 动画。这个方法返回自身（`this`）

3. [gsap.globalTimeline.paused()](https://greensock.com/docs/v3/GSAP/Timeline/paused()) - 判断是否暂停了全局时间轴，暂停了返回 `true`；没有暂停返回 `false`

4. [⚡gsap.globalTimeline.timeScale()](https://greensock.com/docs/v3/GSAP/Timeline/timeScale()) - 获取或设置全局时间刻度（`scale`），它是影响所有动画的乘法系数。它不是去对每个单独的tweens或timelines的 `timeScale()` 进行设置，而是对根时间轴（包含所有的tweens & timelines）的时间刻度进行设置。`通过它对所有动画一次性的进行加速或者减速`🤩，比如：

   ```js
   gsap.globalTimeline.timeScale(0.5) // 0.5倍速播放 `所有` 动画
   gsap.globalTimeline.timeScale(2)   // 2倍速播放 `所有` 动画
   
   // 获取当前时间刻度
   const currentTimeScale = gsap.globalTimeline.timeScale()
   ```

   

::: info

因为全局时间轴用于运行所有的Tweens & Timelines，因此无论是否存在任何tweens或者timelines处于激活状态，`gsap.globalTimeline.isActive()` 总是返回 `true`。可以将其理解为gsap里面的主线程😎。

:::



::: tip

快速理解：globalTimeline属性上的方法可一次性对所有动画进行暂停，恢复播放，减速加速播放

:::



文档地址：

- [gsap.globalTimeline](https://greensock.com/docs/v3/GSAP/gsap.globalTimeline)



2022年11月24日10:24:51

