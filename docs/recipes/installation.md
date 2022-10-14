[CheetSheet地址](https://greensock.com/cheatsheet/)

导入和注册GSAP：不同模块导入的路径是不一样的

1️⃣ `ESM` 模块
```js
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)
```

2️⃣ `UMD/CommonJS` 模块
```js
import { gsap } from 'gsap/dist/gsap'
import { DrawSVGPlugin } from 'gsap/dist/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)
```
