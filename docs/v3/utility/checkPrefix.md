---
title: gsap.utils.checkPrefix()
---
📚:

`checkPrefix(propertyName: String): String|undefined`
- 给 `checkPrefix()` 提供CSS属性名，它会依据使用的浏览器返回该属性前缀版本；如果属性不存在前缀，则返回原来的属性名；如果属性不存在，返回 `undefined`

```js
// 依据浏览器可能返回 
// 'filter' | 'WebkitFilter' | 'MozFilter'
const filterProperty = gsap.utils.checkPrefix('filter')
```


文档地址：
- [gsap.utils.checkPrefix()](https://greensock.com/docs/v3/GSAP/UtilityMethods/checkPrefix())

::: details 📚TS定义
```typescript
/**
 * Prefixes the provided CSS property if necessary. Returns null if the property isn't supported at all.
 * 
 * ```js
 * // The following may return "filter", "WebkitFilter", or "MozFilter" depending on the browser
 * let filterProperty = gsap.utils.checkPrefix("filter");
 * ```
 *
 * @param {string} property
 * @returns {string | null} The appropriately prefixed property 
 * @memberof gsap.utils
 */
function checkPrefix(property: string): string;
```
:::

2022年11月03日21:28:51