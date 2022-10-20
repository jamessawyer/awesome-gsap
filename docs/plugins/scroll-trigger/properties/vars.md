---
title: vars Property
---



📚 定义：

`.vars: {Object}` 用于创建ScrollTrigger实例的配置对象

- 只读，可选


🌰

```js {7}
const st = ScrollTrigger.create({
  trigger: '.trigger',
  start: 'top center',
  end: '+=500',
})

console.log(st.vars) // {trigger: '.trigger', start: 'top center', end: '+=500'}
```

你可以在 `vars` 对象中存储任意你想要的数据，ScrollTrigger会忽略它不认识的属性。因此，比如，你添加了一个 `"group"` 属性，使你能给你的ScrollTriggers进行分组，之后使用 `kill()` 杀掉所有的特定组别的ScrollTrigger实例，你可以这样做：
```js
// 辅助函数
let getGroup = group => ScrollTrigger.getAll().filter(t => t.vars.group === 'group')

// 之后 kill() 所有 'my-group' 组
getGroup('my-group').forEach(t => t.kill())
```

文档地址：

- [ScrollTrigger - vars](https://greensock.com/docs/v3/Plugins/ScrollTrigger/vars)

2022年10月20日14:08:03
