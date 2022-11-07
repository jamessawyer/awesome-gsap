import{_ as s,c as n,o as a,a as p}from"./app.bd7f7ccb.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"recipes/utility-methods.md","lastUpdated":1667803527000}'),l={name:"recipes/utility-methods.md"},e=p(`<p>GSAP\u63D0\u4F9B\u7684\u4E00\u4E9B\u5DE5\u5177\u65B9\u6CD5\uFF0C\u901A\u8FC7 <code>gsap.utils.xxx()</code> \u65B9\u5F0F\u4F7F\u7528</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u5C5E\u6027\u76F8\u5173\u6D4F\u89C8\u5668\u524D\u7F00\uFF0C\u6BD4\u5982\u83B7\u53D6 \`filter\`\u5C5E\u6027 &#39;WebkitFilter&#39;, &#39;MozFilter&#39;</span></span>
<span class="line"><span style="color:#676E95;">// checkPrefix(&#39;transform&#39;) -&gt; &#39;msTransform&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">checkPrefix</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5F97\u5230\u533A\u95F4\u5185\u7684\u503C\uFF0C\u6BD4\u5982\u989C\u8272\u503C0-255\uFF0C\u8D85\u8FC7255\u53D6255\uFF0C\u5C0F\u4E8E0\u53D60 clamp(0, 255)</span></span>
<span class="line"><span style="color:#676E95;">// clamp(0, 100, -12) -&gt; 0</span></span>
<span class="line"><span style="color:#82AAFF;">clamp</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u6839\u636E\u4F60\u63D0\u4F9B\u7684\u8F93\u5165\u5206\u914D\u4E00\u4E2A\u503C\u6570\u7EC4\u3002</span></span>
<span class="line"><span style="color:#82AAFF;">distribute</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u5B57\u7B26\u4E32\u5355\u4F4D</span></span>
<span class="line"><span style="color:#676E95;">// gsap.utils.getUnit(&quot;50%&quot;) -&gt; &#39;%&#39;</span></span>
<span class="line"><span style="color:#676E95;">// gsap.utils.getUnit(&quot;100vw&quot;) -&gt; &#39;vw&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">getUnit</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5728\u503C\u4E4B\u95F4\u8FDB\u884C\u63D2\u503C\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#676E95;">// interpolate(&#39;red&#39;, &#39;blue&#39;, &#39;0.5&#39;) -&gt; &#39;rgba(128,0,128,1&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">interpolate</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5C06\u4E00\u4E2A\u533A\u95F4\u6620\u5C04\u4E3A\u53E6\u4E00\u4E2A\u533A\u95F4</span></span>
<span class="line"><span style="color:#676E95;">// mapRange(-10, 10, 0, 100, 5) -&gt; 75</span></span>
<span class="line"><span style="color:#82AAFF;">mapRange</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5C06\u4E00\u4E2A\u533A\u95F4\u6620\u5C04\u4E3A 0-1 \u533A\u95F4</span></span>
<span class="line"><span style="color:#676E95;">// normalize(100, 200, 150) -&gt; 0.5</span></span>
<span class="line"><span style="color:#82AAFF;">normalize</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5E8F\u5217\u5316\u51FD\u6570\u8C03\u7528</span></span>
<span class="line"><span style="color:#676E95;">// pipe(clamp(0, 100), snap(5))(8) -&gt; 10</span></span>
<span class="line"><span style="color:#82AAFF;">pipe</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u751F\u6210\u4E00\u4E2A\u968F\u673A\u503C</span></span>
<span class="line"><span style="color:#676E95;">// random([&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;]) -&gt; &#39;blue&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">random</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u83B7\u53D6\u4E00\u4E2A\u4F5C\u7528\u57DF\u9009\u62E9\u5668\u51FD\u6570</span></span>
<span class="line"><span style="color:#676E95;">// selector(myElement)</span></span>
<span class="line"><span style="color:#82AAFF;">selector</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u968F\u673A\u6253\u4E71\u6570\u7EC4</span></span>
<span class="line"><span style="color:#676E95;">// shuffle([1, 2, 3, 4, 5]) --&gt; [4, 2, 1, 5, 3]</span></span>
<span class="line"><span style="color:#82AAFF;">shuffle</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u589E\u52A0\u9760\u8FD1\u67D0\u4E2A\u503C\u6216\u9760\u8FD1\u67D0\u4E2A\u6570\u7EC4\u4E2D\u6700\u63A5\u8FD1\u7684\u503C</span></span>
<span class="line"><span style="color:#676E95;">// snap(5, 13) -&gt; 15</span></span>
<span class="line"><span style="color:#676E95;">// snap([0\uFF0C 5\uFF0C 10]\uFF0C 7) -&gt; 5</span></span>
<span class="line"><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u62C6\u5206\u4E3ARGB\u6570\u7EC4</span></span>
<span class="line"><span style="color:#676E95;">// splitColor(&#39;red&#39;) -&gt; [255, 0, 0]</span></span>
<span class="line"><span style="color:#82AAFF;">splitColor</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u2B50 \u5C06\u7C7B\u6570\u7EC4\u8F6C\u6362\u4E3A\u6570\u7EC4</span></span>
<span class="line"><span style="color:#676E95;">// \u6BD4\u5982\u9009\u62E9\u67D0\u4E2A\u7C7B\u5143\u7D20</span></span>
<span class="line"><span style="color:#676E95;">// toArray(&#39;.class&#39;) -&gt; [element1, element2]</span></span>
<span class="line"><span style="color:#82AAFF;">toArray</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5305\u88F9\u5176\u5B83\u7684\u5DE5\u5177\u51FD\u6570\uFF0C\u5141\u8BB8\u63A5\u6536\u5305\u542B\u5355\u4F4D\u7684\u503C\uFF0C\u53BB\u6389\u5176\u5355\u4F4D</span></span>
<span class="line"><span style="color:#676E95;">// var wrap gsap.utils.unitize(gsap.utils.wrap(0,100))</span></span>
<span class="line"><span style="color:#676E95;">// wrap(&#39;150px&#39;) -&gt; &#39;50px&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">unitize</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u2B50 \u5C06\u4E00\u4E2A\u6570\u5B57\u653E\u5165\u6307\u5B9A\u7684\u8303\u56F4\u5185\uFF0C\u5F53\u5B83\u8D85\u8FC7\u6700\u5927\u503C\u65F6\uFF0C\u5C06\u8FD4\u56DE\u5F00\u59CB\u4F4D\u7F6E\uFF0C</span></span>
<span class="line"><span style="color:#676E95;">//   \u5982\u679C\u5C0F\u4E8E\u6700\u5C0F\u503C\uFF0C\u5219\u8FD4\u56DE\u7ED3\u675F\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#676E95;">// wrap(5, 10, 12) -&gt; 7</span></span>
<span class="line"><span style="color:#676E95;">// \u6216\u5219 \u5FAA\u73AF\u904D\u5386\u6570\u7EC4\uFF0C\u8FD9\u6837\u5F53\u63D0\u4F9B\u7684\u7D22\u5F15\u5927\u4E8E\u6570\u7EC4\u7684\u957F\u5EA6\u65F6\uFF0C\u5B83\u5C31\u8FD4\u56DE\u5230\u5F00\u59CB\u4F4D\u7F6E</span></span>
<span class="line"><span style="color:#676E95;">// \u7D22\u5F15\u4E3A4\uFF0C\u51715\u4E2A\u503C\uFF0C\u5FAA\u73AF 0 - 1 - 2 - 0 - 1</span></span>
<span class="line"><span style="color:#676E95;">// wrap([0, 10, 20], 4) --&gt; 10</span></span>
<span class="line"><span style="color:#82AAFF;">wrap</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u2B50 \u5C06\u4E00\u4E2A\u6570\u5B57\u653E\u5728\u4E00\u4E2A\u6307\u5B9A\u7684\u8303\u56F4\u5185\uFF0C\u5F53\u5B83\u8D85\u8FC7\u6700\u5927\u503C\u65F6\uFF0C</span></span>
<span class="line"><span style="color:#676E95;">//    \u5B83\u5C31\u5411\u5F00\u59CB\u65B9\u5411\u65CB\u8F6C\uFF0C\u5982\u679C\u5B83\u5C0F\u4E8E\u6700\u5C0F\u503C\uFF0C\u5B83\u5C31\u5411\u524D\u65CB\u8F6C\u5230\u7ED3\u675F</span></span>
<span class="line"><span style="color:#676E95;">//    wrapYoyo(5, 10, 12)  -&gt; 8</span></span>
<span class="line"><span style="color:#676E95;">// \u6216\u5219 \u5FAA\u73AF\u6570\u7EC4\uFF0C\u8FD9\u6837\u5F53\u63D0\u4F9B\u7684\u7D22\u5F15\u5927\u4E8E\u6570\u7EC4\u7684\u957F\u5EA6\u65F6\uFF0C\u5B83\u5C31\u4F1A\u56DE\u5230\u8D77\u70B9</span></span>
<span class="line"><span style="color:#676E95;">// \u7D22\u5F15\u4E3A4\uFF0C\u51715\u4E2A\u503C\uFF0C\u5FAA\u73AF 0 - 1 - 2 - 3 - 2</span></span>
<span class="line"><span style="color:#676E95;">//   wrapYoyo([0, 10, 20, 30], 4) --&gt; 20</span></span>
<span class="line"><span style="color:#82AAFF;">wrapYoyo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>\u53EF\u67E5\u770B <a href="https://greensock.com/docs/v3/GSAP/UtilityMethods" target="_blank" rel="noreferrer">GSAP - Utility Methods</a></p>`,3),o=[e];function c(t,r,i,y,A,E){return a(),n("div",null,o)}const F=s(l,[["render",c]]);export{g as __pageData,F as default};
