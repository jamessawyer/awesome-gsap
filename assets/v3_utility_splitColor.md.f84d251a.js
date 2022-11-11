import{_ as s,c as l,o as a,a as o}from"./app.6f212db6.js";const A=JSON.parse('{"title":"gsap.utils.splitColor()","description":"","frontmatter":{"title":"gsap.utils.splitColor()"},"headers":[],"relativePath":"v3/utility/splitColor.md","lastUpdated":1668156887000}'),n={name:"v3/utility/splitColor.md"},p=o(`<p>\u{1F4DA} \u5BF9 <code>rgb()</code> | <code>rgba()</code> | <code>hsl()</code> | <code>hsla()</code> | \u989C\u8272\u5B57\u7B26\u4E32\uFF08\u6BD4\u5982 <code>&#39;red&#39;</code>\uFF09\u8FDB\u884C\u5904\u7406\uFF0C\u62C6\u5206\u4E3A <code>[red, green, blue]</code> \u6216\u8005 <code>[red, green, blue, alpha]</code> \u5F62\u5F0F\u3002</p><p>\u5B83\u5B58\u5728 <code>1</code> \u79CD\u5F62\u5F0F\uFF1A</p><ol><li><code>splitColor(color[, returnHSL])</code> \u5BF9\u989C\u8272\u8FDB\u884C\u62C6\u5206\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4 <ul><li><code>color: String</code> - \u5F85\u62C6\u5206\u7684\u989C\u8272\u503C</li><li><code>returnHSL: Boolean</code> - \u662F\u5426\u8FD4\u56DE <code>HSL</code>\uFF08hue, saturation, lightness, \u5373\u8272\u5F69\uFF0C\u9971\u548C\u5EA6\uFF0C\u660E\u4EAE\u5EA6\uFF09 \u5F62\u5F0F</li></ul></li></ol><p>\u{1F330}</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// 1\uFE0F\u20E3 \u5BF9 \u989C\u8272 \u5173\u952E\u8BCD \u8FDB\u884C\u62C6\u5206</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splitColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">red</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// [255, 0, 0]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 2\uFE0F\u20E3 \u5BF9 Hex \u989C\u8272\u8FDB\u884C\u62C6\u5206</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splitColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#6fb936</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// [111, 185, 54]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 3\uFE0F\u20E3 \u5305\u542Balpha\u503C</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splitColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">rgba(204, 153, 51, 0.5)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// [204, 153, 51, 0.5]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 4\uFE0F\u20E3 \u4F20\u5165\u7B2C2\u4E2A\u53C2\u6570 \u662F\u5426\u8FD4\u56DEHSL\uFF0C\u800C\u4E0D\u662FRGB</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splitColor</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#6fb936</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// [94, 55, 77]</span></span>
<span class="line"></span></code></pre></div><p>\u6587\u6863\u5730\u5740\uFF1A</p><ul><li><a href="https://greensock.com/docs/v3/GSAP/UtilityMethods/splitColor()" target="_blank" rel="noreferrer">gsap.utils.splitColor()</a></li></ul><p>2022\u5E7411\u670811\u65E516:53:11</p>`,8),e=[p];function t(c,r,i,D,y,C){return a(),l("div",null,e)}const F=s(n,[["render",t]]);export{A as __pageData,F as default};