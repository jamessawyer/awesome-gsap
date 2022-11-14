---
titlt: gsap.utils.shuffle()
---

📚 接收数组，然后随机混淆数组，返回相同的数组，不会创建新的数组。

它只有 `1` 种形式：
1. `shuffle(target)`: 待混淆的数组
   - `target: Array` 数组



🌰

```js {3}
const arr = [1, 2, 3, 4, 5]
gsap.utils.shuffle(arr)
// 随机混淆，返回相同的数组
arr // [5, 4, 1, 3, 2]
```



这个很简单，没什么可讲的。



文档地址：

- [gsap.utils.shuffle()](https://greensock.com/docs/v3/GSAP/UtilityMethods/shuffle())

::: details 📚TS定义
```typescript
/**
* Takes an array and randomly shuffles it, returning the same (but shuffled) array.
* 
* ```js
* gsap.utils.shuffle(array);
* ```
*
* @param {T[]} array
* @returns {T[]} The same shuffled array
* @memberof gsap.utils
*/
function shuffle<T>(array: T[]): T[];
```
:::

2022年11月10日10:57:53





