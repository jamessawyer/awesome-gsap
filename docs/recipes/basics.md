最基本的用法：
```js
// 'to' tween （根据配置动画到指定状态）
gsap.to('.selector', { // selector 文本，数组，或对象
  x: 100, // 任何属性（不仅限于CSS）
  backgroundColor: 'red', // 属性用camelCase方式
  duration: 1,            // 单位 seconds
  delay: 0.5,
  ease: 'power2.inOut',
  stagger: 0.1,           // stagger动画时间间隔
  paused: true,           // 是否暂停动画，默认 `false`
  
  // 如果为真，那么所有相同目标的补间将立即被杀死，
  // 而不管它们影响的是什么属性。如果为“auto”，当补间第一次呈现时，
  // 它会查找激活动画中的任何冲突(动画相同目标的相同属性)，
  // 并只杀死其他补间的那些部分。非冲突部分保持完整。
  // 如果为false，则不使用覆盖策略。默认值:false。
  overwrite: 'auto',
  repeat: 2,           // 重复次数（-1 表示无限重复）
  repeatDelay: 1,      // 重复时间隔时间
  repeatRefresh: true, // 使每次重复时都无效
  yoyo: true,          // 如果为true 则动画形式为A-B-B-A；如果为false 则A-B-A-B
  yoyoEase: true,      // 或则使用其它缓动函数 eg. 'power2'
  
  // 通常情况下，tween会等待第一次呈现直到下一个tick(更新周期)，除非你指定一个延迟。
  // 设置immediateRender: true强制它在实例化时立即呈现。
  // 默认值:
  //  对`to()`补间为false，
  //  对`from()`和`fromTo()`补间或任何使用了`scrollTrigger`的为true。
  immediateRender: false,
  onComplete: myFunc,
  // 其它一些回调函数
  // onStart, onUpdate, onRepeat, onReverseComplete
  // 每个回调都有一个参数属性版本
  // 比如 onUpdateParams onRepeatParams ...
})
```



2022年10月14日14:35:11