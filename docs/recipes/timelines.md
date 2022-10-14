创建一个时间轴

```js
let tl = gsap.timeline({
  delay: 0.5,
  paused: true, // 默认为 false
  repeat: 2,
  repeatDelay: 1,
  repeatRefresh: true,
  yoyo: true,
  defaults: {
    duration: 1,
    ease: 'none',
  },
  
  // 控制子动画在时间相关属性动态改变时，是否自动重新定位（改变它们的 `startTime`）以保持流畅的播放
  // 🌰 假设时间轴的播放头在一个完成了75%的子补间上，移动元素从0向左到100，然后调用该补间的reverse()方法,
  // 如果smoothChildTiming为false(除了globalTimeline之外的默认值)，补间将原地翻转，保持startTime的一致性，
  // 因此，时间线的播放头现在将位于补间的25%完成点，而不是75%。
  smoothChildTiming: true,
  // 如果为true，child tweens(补间)和timelines在动画完成后自动被移除
  autoRemoveChildren: true,
  
  onComplete: myFunc,
  // 其它一些回调函数
  // onStart, onUpdate, onRepeat, onReverseComplete
  // 每个回调都有一个参数属性版本
  // 比如 onUpdateParams onRepeatParams ...
})
```

序列化多个Tweens（补间动画）

```js
tl.to('.selector', { duration: 1, x: 50, y: 0 })
  .to('#id', { autoAlpha: 0 })
  .to(elem, { duration: 1, backgroundColor: 'red' })
  .to([elem, elem2], { duration: 3, x: 100 })
```

⚡⚡ 位置参数控制：

```js
tl.to(target, {toVars}, positionParameter)

// positionParameter 可能值
0.7             // 绝对值，时间轴上确切的 0.7s 位置
'-=0.7'         // 相对值，相对于上一个tween结束前0.7s位置，即重叠0.7s
'myLabel'       // 插入到 'myLabel' 位置
'myLabel+=0.2'  // 相对于 'myLabel' 位置 后0.2s位置
'<'             // 相对位置，相对上一个动画的开始位置
'<0.2'          // 相对位置，相对上一个动画的开始位置之后的0.2s
'-=50%'         // 重叠插入动画时长一半的位置
'<25%'          // 上一个动画开始位置的25%位置
```



2022年10月14日15:29:11

