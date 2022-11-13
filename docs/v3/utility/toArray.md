---
title: gsap.utils.toArray()
---

📚将选择器文本，对象数组，NodeList或者元素对象，以及所有类数组对象（比如jQuery选择器返回的对象）获取到的元素转换为扁平化的数组

- 这个工具函数用的还比较多



它存在 `1` 种形式：

1. `toArray(targets[, scope])` 返回一个数组
   - `targets: Object|String|NodeList|Array` - 你想要包装进扁平数组的目标
   - `scope: Element|Ref` - 可选！用于限定选择的范围，可以是一个元素或者React Ref。**这只对`targets`为选择器文本（eg. `.box`）才生效🚨**

🌰

```js {10}
// 1️⃣ 选择器文本
let targets = gsap.utils.toArray('.class')

// 2️⃣ 元素对象
let targets = gsap.utils.toArray(myElement)

// 3️⃣ 选择器数组
let targets = gsap.utils.toArray(['.class1', ',class2', '#my-id'])

// 4️⃣ 限定选择的返回；只选择 myElement 的子代元素中的 `.class` 元素 😎
let targets = gsap.utils.toArray('.class', myElement)
```



文档地址：

- [gsap.utils.toArray()](https://greensock.com/docs/v3/GSAP/UtilityMethods/toArray())



2022年11月13日18:05:32

