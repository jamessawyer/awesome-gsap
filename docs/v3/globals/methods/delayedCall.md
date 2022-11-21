---
title: gsap.delayedCall()
---

📚 提供一种简单的方式在特定时间后调用函数
- 完全与整个渲染循环同步😎，不同于 `setTimeout()`，setTimeout可能在浏览器屏幕刷新周期外触发
- 还可以给函数传入任意数量的参数

🌰1️⃣ 1s后调用函数，并给函数传入2个参数：

```js {1}
gsap.delayedCall(1, myFunction, ['param1', 'param2'])

function myFunction(param1, param2) {
  // do stuff
}
```

📚🌰2️⃣ 保存引用，然后调用 `.kill()` 可以取消或者清除延迟调用：

```js {4}
const delayedCall = gsap.delayedCall(1, myFunction)

// 之后某个时间点 取消掉延迟调用
delayedCall.kill()
```

📚🌰3️⃣ 或者不保存引用，使用 [gsap.killTweensOf()](./killTweensOf) 方法清除 `delayedCall()`，delayedCall本质上是 `Tween` （补间动画）的另一种写法：（详细可查看[gsap.killTweensOf()](./killTweensOf)）

```js
gsap.delayedCall(1, myFunction)

// 之后某个时间点 取消掉延迟调用
gsap.killTweensOf(myFunction)
```



文档地址：

- [gsap.delayedCall()](https://greensock.com/docs/v3/GSAP/gsap.delayedCall())



2022年11月21日14:56:46

