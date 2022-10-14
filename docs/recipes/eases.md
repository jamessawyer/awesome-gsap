缓动函数：[GSAP Eases](https://greensock.com/docs/v3/Eases)

```js {6-7}
ease: 'none' // 等价于 'linear'

// 基础核心缓动函数
'power1', 'power2', 'power3', 'power4'
'circ', 'expo', 'sine'
// ⭐ 每一种都有 `.in`, `.out`, `.inOut` 扩展
// 比如： 'power1.inOut'

// 表现力强烈的核心缓动函数
'elastic', 'back', 'bounce', 'steps(n)'

// EasePack 插件提供的（非核心）
'rough', 'slow', 'expoScale(1, 2)'

// 会员特有的插件
CustomEase, CustomWiggle, CustomBounce
```