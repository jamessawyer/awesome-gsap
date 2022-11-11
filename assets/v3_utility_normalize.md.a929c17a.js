import{_ as s,c as a,o as n,a as l}from"./app.6f212db6.js";const F=JSON.parse('{"title":"gasp.utils.normalize()","description":"","frontmatter":{"title":"gasp.utils.normalize()"},"headers":[],"relativePath":"v3/utility/normalize.md","lastUpdated":1668156887000}'),p={name:"v3/utility/normalize.md"},o=l(`<p>\u{1F4DA} \u5C06\u63D0\u4F9B\u7684\u503C\uFF0C\u6620\u5C04\u4E3A\u533A\u95F4\u7684\u6BD4\u4F8B\uFF0C\u6709\u70B9\u7C7B\u4F3C <a href="./mapRange.html">mapRange</a></p><ul><li>\u4E00\u822C\u5C06\u5176\u6620\u5C04\u5230 <code>0-1</code>\uFF0C\u7C7B\u4F3C <code>progress</code> \u8FDB\u5EA6\u503C</li><li>\u4F46\u662F\u5982\u679C\u8D85\u51FA\u4E86\u533A\u95F4\uFF0C\u4E5F\u80FD\u8FDB\u884C\u6620\u5C04</li></ul><p>\u5B83\u5B58\u57282\u79CD\u5F62\u5F0F\uFF1A</p><ol><li>\u4F20\u5165<code>3</code>\u4E2A\u53C2\u6570\uFF0C\u76F4\u63A5\u8FD4\u56DE\u7ED3\u679C <code>normalize(minimum, maximum, valueToNormalize)</code>: <ul><li><code>minimum: Number</code> - \u533A\u95F4\u7684\u4E0B\u9650\u503C</li><li><code>maximum: Number</code> - \u533A\u95F4\u7684\u4E0A\u9650\u503C</li><li><code>valueToNormalize: Number</code> - \u5F85\u8303\u5F0F\u5316\u7684\u503C</li></ul></li><li>\u4F20\u5165<code>2</code>\u4E2A\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u53EF\u590D\u7528\u7684\u51FD\u6570\uFF0C\u8FD9\u4E2A\u51FD\u6570\u63A5\u6536 <code>valueToNormalize</code> \u4F5C\u4E3A\u5176\u53C2\u6570 - <code>normalize(minimum, maximum)</code></li></ol><p>1\uFE0F\u20E3 \u4F20\u5165<code>3</code>\u4E2A\u53C2\u6570\uFF0C\u76F4\u63A5\u8FD4\u56DE\u7ED3\u679C</p><p>\u{1F330}</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-highlighted-lines"><code><span class="line highlighted"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">normalize</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// \u4E2D\u70B9\u4F4D\u7F6E\u5BF9\u5E94 0.5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">normalize</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 0.25</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;">// \u{1F6A8} \u8D85\u51FA\u6620\u5C04\u8BBF\u95EE\u4E5F\u80FD\u8FDB\u884C\u6620\u5C04</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">normalize</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 200 / (100 - 0) = 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">normalize</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">50</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// -50 / (100 - 0) = -0.5</span></span>
<span class="line"></span></code></pre></div><p>2\uFE0F\u20E3 \u4F20\u5165<code>2</code>\u4E2A\u53C2\u6570\uFF0C\u5F97\u5230\u53EF\u590D\u7528\u7684\u51FD\u6570</p><p>\u{1F330}</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-highlighted-lines"><code><span class="line highlighted"><span style="color:#676E95;">// \u603B\u662F\u5BF9\u533A\u95F4 [0, 100] \u8FDB\u884C\u6620\u5C04</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> clamper </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">normalize</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">clamper</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">50</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 0.5</span></span>
<span class="line"><span style="color:#82AAFF;">clamper</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 0.1</span></span>
<span class="line"><span style="color:#82AAFF;">clamper</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">75</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 0.75</span></span>
<span class="line"></span></code></pre></div><p>\u{1F680} \u9AD8\u7EA7\u7528\u6CD5\uFF0C\u4F7F\u7528 <code>pipe</code> \u8FDB\u884C\u51FD\u6570\u7F16\u7A0B\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> transformer </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pipe</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">normalize</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">transformer</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">125</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// 1</span></span>
<span class="line"><span style="color:#82AAFF;">transformer</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">25</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;">// 0.25</span></span>
<span class="line"></span></code></pre></div><p>\u6587\u6863\u5730\u5740\uFF1A</p><ul><li><a href="https://greensock.com/docs/v3/GSAP/UtilityMethods/normalize()" target="_blank" rel="noreferrer">gsap.utils.normalize()</a></li></ul><p>2022\u5E7411\u670808\u65E514:54:58</p>`,15),e=[o];function c(t,r,C,y,A,i){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};