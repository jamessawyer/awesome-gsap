---
title: gsap.utils.checkPrefix()
---
ð:

`checkPrefix(propertyName: String): String|undefined`
- ç» `checkPrefix()` æä¾CSSå±æ§åï¼å®ä¼ä¾æ®ä½¿ç¨çæµè§å¨è¿åè¯¥å±æ§åç¼çæ¬ï¼å¦æå±æ§ä¸å­å¨åç¼ï¼åè¿ååæ¥çå±æ§åï¼å¦æå±æ§ä¸å­å¨ï¼è¿å `undefined`

```js
// ä¾æ®æµè§å¨å¯è½è¿å 
// 'filter' | 'WebkitFilter' | 'MozFilter'
const filterProperty = gsap.utils.checkPrefix('filter')
```


ææ¡£å°åï¼
- [gsap.utils.checkPrefix()](https://greensock.com/docs/v3/GSAP/UtilityMethods/checkPrefix())

::: details ðTSå®ä¹
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

2022å¹´11æ03æ¥21:28:51