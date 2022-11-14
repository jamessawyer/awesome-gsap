---
title: gsap.utils.splitColor()
---

📚 对 `rgb()` | `rgba()` | `hsl()` | `hsla()` | 颜色字符串（比如 `'red'`）进行处理，拆分为 `[red, green, blue]` 或者 `[red, green, blue, alpha]` 形式。



它存在 `1` 种形式：

1. `splitColor(color[, returnHSL])` 对颜色进行拆分，返回一个数组
   - `color: String` - 待拆分的颜色值
   - `returnHSL: Boolean` - 是否返回 `HSL`（hue, saturation, lightness, 即色彩，饱和度，明亮度） 形式



🌰

```js
// 1️⃣ 对 颜色 关键词 进行拆分
gsap.utils.splitColor('red') // [255, 0, 0]

// 2️⃣ 对 Hex 颜色进行拆分
gsap.utils.splitColor('#6fb936') // [111, 185, 54]

// 3️⃣ 包含alpha值
gsap.utils.splitColor('rgba(204, 153, 51, 0.5)') // [204, 153, 51, 0.5]

// 4️⃣ 传入第2个参数 是否返回HSL，而不是RGB
gsap.utils.splitColor('#6fb936', true) // [94, 55, 77]
```




文档地址：

- [gsap.utils.splitColor()](https://greensock.com/docs/v3/GSAP/UtilityMethods/splitColor())

::: details 📚TS定义
```typescript
/**
* Converts a string-based color value into an array consisting of RGB(A) or HSL values.
* 
* ```js
* gsap.utils.splitColor("red"); // [255, 0, 0]
* gsap.utils.splitColor("rgba(204, 153, 51, 0.5)"); // [204, 153, 51, 0.5]
*
* gsap.utils.splitColor("#6fb936", true); // [94, 55, 47] - HSL value
* ```
*
* @param {string} color
* @param {boolean} [hsl]
* @returns {[number, number, number] | [number, number, number, number]} The converted color array
* @memberof gsap.utils
*/
function splitColor(color: string, hsl?: boolean): [number, number, number] | [number, number, number, number];
```
:::

2022年11月11日16:53:11

