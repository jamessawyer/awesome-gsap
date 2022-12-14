---
title: Draggable.hitTest()
---



ð å®ä¹ï¼

`Draggable.hitTest(testObject: Object, threshold: [Number|String]): Boolean` 

- å¯¹æå¨åç´ æ¯å¦ä¸å¶ä»åç´ éå æä¾ä¸ç§ç®åçæ¹å¼ï¼å¯ä¾æ®ä½ å®ä¹çéå¼ï¼å¯éï¼
- åæ°
  - `testObject: Object` : è¿è¡hitæµè¯çå¯¹è±¡ï¼å¯ä»¥æ¯ä¸åç±»å
    -  åç´ ï¼
    - åå« `pageX & pageY` ç `mouse|touch` eventï¼
    - éæ©å¨ï¼`#someElement`ï¼;
    - å®ä¹äºç©å½¢çéç¨å¯¹è±¡ï¼å³åå« `top left right bottom` å±æ§
  - `threshold: [Number|String]`ï¼é»è®¤ä¸º `0`
    - å¯ä»¥æ¯æ°å¼ç±»åï¼è¡¨ç¤ºéå çæå°åç´ 
    - å­ç¬¦ä¸²,æ¯å¦`50%`ï¼éå ç¾åæ¯
    - `0` ä»»ä½éå 
- è¿åå¼
  - å¦ææç¥å°äºéå ï¼æ ¹æ®ä½ è®¾ç½®ç `threshold`ï¼ï¼è¿å `true`, å¦å `false`



ð°

```js {4}
Draggable.create('#element1', {
  type: 'x,y',
  onDragEnd: function(e) {
    // æ¥çæ¯å¦ä¸ `#element2` åç´ éå 
    if (this.hitTest('#element2')) {
      // do stuff
      // æ¯å¦æ¹å `#element2` èæ¯è²
    }
  }
})
```



é»è®¤æåµï¼åªè¦å­å¨éå ï¼`hitTest()` å°±ä¼è¿å `true`ï¼ä½æ¯ä½ å¯ä»¥å®ä¹ `threshold` åæ°ï¼æ¯å¦ï¼è³å°éå  `20px` æè `50%`ï¼

```js
Draggable.create('#element1', {
  type: 'x,y',
  onDragEnd: function(e) {
    // æ¥çæ¯å¦ä¸ `#element2` åç´ è³å°éå  `20px`
    if (this.hitTest('#element2', 20)) {
      // do stuff
      // æ¯å¦æ¹å `#element2` èæ¯è²
    }
    
    // æ¥çæ¯å¦ä¸ `#element2` åç´ è³å°éå  `50%`
    if (this.hitTest('#elements', '50%')) {
      // do stuff
    }
  }
})
```

[Draggable with droppable logic](https://codepen.io/GreenSock/pen/ndBZjZ)

<iframe height="300" style="width: 100%;" scrolling="no" title="Draggable with &quot;droppable&quot; logic" src="https://codepen.io/GreenSock/embed/preview/ndBZjZ?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/ndBZjZ">
  Draggable with &quot;droppable&quot; logic</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



::: tip ð¡

ä½ è¿å¯ä»¥ä½¿ç¨ `hitTest(window)` æ£æµåç´ æ¯å¦å¨viewportåå¯è§ã

:::



è¿æä¸ä¸ªéæçæ¬ï¼ä¼ å¥åç´ åå¯¹è±¡åthresholdï¼æ¯å¦ `Draggable.hitTest(element1, element2, 20)`ï¼ç¤ºä¾ [Draggable.hitTest() - codepen](https://codepen.io/GreenSock/pen/ezeRNz)

<iframe height="300" style="width: 100%;" scrolling="no" title="Draggable hitTest()" src="https://codepen.io/GreenSock/embed/preview/ezeRNz?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/GreenSock/pen/ezeRNz">
  Draggable hitTest()</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>





::: warning

ð¨å¯¹äºéç©å½¢å½¢ç¶ï¼åç´ æµéå¯è½ä¸å¤ªç²¾åã`hitTest()` ä½¿ç¨æµè§å¨ç `getBoundingClientRect()` æ¹æ³è·åç©å½¢è¾¹çï¼å æ­¤å¦æä½ æè½¬åç´ æèåç´ æ¯åå½¢å½¢ç¶ï¼è¾¹çå¯è½æ¯çèµ·æ¥çè¦æ´å¤§ã

:::



ææ¡£å°åï¼

- [hitTest()](https://greensock.com/docs/v3/Plugins/Draggable/static.hitTest())



2022å¹´11æ03æ¥11:39:25
