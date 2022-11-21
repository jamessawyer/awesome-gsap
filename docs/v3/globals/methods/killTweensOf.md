---
title: gsap.killTweensOf()
---

📚 可以杀掉以下几种情形的补间动画：

1. 杀掉指定对象所有的补间动画(`Tweens`)
2. 杀掉指定对象特定的补间动画属性
3. 杀掉指定的 `delayedCalled` 函数



🌰1️⃣ 杀掉包含 `.myClass` 的元素的所有补间动画：

```js
gsap.killTweensOf('.myClass')
```

🌰2️⃣ 杀掉指定对象上补间动画的特定补间属性，比如下面去掉 `myObject` 对象上的 `.opacity` & `.x` 补间属性：使用 `,` 分割多个属性📚

```js
gsap.killTweensOf(myObject, 'opacity,x')
```

🌰3️⃣ 杀掉所有 `gsap.delayedCall(5, myFunction)` 创建的 `delayedCalls`：

```js
gsap.killTweensOf(myFunction)
```

::: tip 👩‍🏫

`gsap.delayedCall()` 的本质还是一种 `Tween`，只不过它的 `targets` & `onComplete` 设置为了 `myFunction`，即：

```js
function myDelayedFunction() {}
gsap.delayedCall(5, myDelayedFunction)

// 类似于下面形式
gsap.to(myDelayedFunction, {
  onComplete: myDelayedFunction,
  duration: 5
})
```

:::

🌰4️⃣ 还可以传入选择器文本:

```js
// 杀掉ID为 `box` 的元素上的补间动画
gsap.killTweensOf('#box')

// 🎉 杀掉所有DOM目标上的补间动画
gsap.killTweensOf('*')
```



::: warning

`killTweensOf()` 还会影响还没有开始的Tweens。比如，`myObject` 的补间动画延迟(`delay`) `5s`开始，但在`2s`时你调用了 `gsap.killTweensOf(myObject)`，即使Tween还没有开始，它也会被杀掉😎。

:::



文档地址：

- [gsap.killTweensOf()](https://greensock.com/docs/v3/GSAP/gsap.killTweensOf())



2022年11月21日13:54:29



