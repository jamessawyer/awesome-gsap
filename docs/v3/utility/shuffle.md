---
titlt: gsap.utils.shuffle()
---

ð æ¥æ¶æ°ç»ï¼ç¶åéæºæ··æ·æ°ç»ï¼è¿åç¸åçæ°ç»ï¼ä¸ä¼åå»ºæ°çæ°ç»ã

å®åªæ `1` ç§å½¢å¼ï¼
1. `shuffle(target)`: å¾æ··æ·çæ°ç»
   - `target: Array` æ°ç»



ð°

```js {3}
const arr = [1, 2, 3, 4, 5]
gsap.utils.shuffle(arr)
// éæºæ··æ·ï¼è¿åç¸åçæ°ç»
arr // [5, 4, 1, 3, 2]
```



è¿ä¸ªå¾ç®åï¼æ²¡ä»ä¹å¯è®²çã



ææ¡£å°åï¼

- [gsap.utils.shuffle()](https://greensock.com/docs/v3/GSAP/UtilityMethods/shuffle())

::: details ðTSå®ä¹
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

2022å¹´11æ10æ¥10:57:53





