---
title: gsap.exportRoot()
---

📚 无缝的将根时间轴（`root timeline`）上的补间动画（`tweens`），时间轴（`timelines`）和 [delayedCall](./delayedCall) （可选的）转移到一个新的时间轴上。

- 好处：这样相当于拷贝了原来的全局时间轴，之后执行的高级操作不会影响到 `导出后` 创建的补间动画或时间轴

🌰例如：假设一款使用GSAP制作所有动画的游戏，在游戏过程中的某个时刻，你想让所有动画都停止（改变 `timeScale`），同时动画弹出一个新的窗口：

```js {1,3,6}
// 转移globalTimeline上所有的tweens & timelines & delayedCalls
const tl = gsap.exportRoot()
// 对导出的时间轴进行操作 暂停所有动画
gsap.to(tl, { duration: 0.5, timeScale: 0 })

// 💡这个补间动画在 `导出后` 创建的，因此不会受到上面设置的影响
gsap.fromTo(
  myWindow,
  {scale: 0},
  {duration: 1, scale: 1}
)
```

之后可以通过将 `timeScale` 切换回 `1` 恢复动画。又或者，可以使用 `exportRoot()` 将所有动画收集起来，然后使用 `pause()` 暂停它们，处理完弹窗动画后，再使用 `resume()` 恢复动画，甚至还可以 `reverse()` 反向动画。

::: tip 📚

你还可以根据需要多次执行 `exportRoot()`，它所做的就是将所有松散的补间动画，时间轴和delayedCall `包装` 到一个时间轴中，这个时间轴本身被放置到根时间轴中😎，所以如果你再次 `exportRoot()`，这个时间轴将被包装到另一个中。可以按照你的意愿进行 `嵌套` 。

:::



::: warning

`完成的` 补间动画和时间轴会从 `globalTimeline` （全局时间轴）中移除，以便垃圾回收，因此，如果你再某个特定补间动画完成后 `exportRoot()`，那个完成的补间动画是不会包含到导出的新时间轴中的。

:::



文档地址：

- [gsap.exportRoot()](https://greensock.com/docs/v3/GSAP/gsap.exportRoot())



2022年11月24日10:03:32
