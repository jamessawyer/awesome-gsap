import{_ as s,c as n,o as a,a as p}from"./app.4442c820.js";const i=JSON.parse('{"title":"gsap.utils.unitize()","description":"","frontmatter":{"title":"gsap.utils.unitize()"},"headers":[],"relativePath":"v3/utility/unitize.md","lastUpdated":1668763619000}'),l={name:"v3/utility/unitize.md"},o=p(`<p>\u{1F4DA}\u8FD9\u4E2A\u5DE5\u5177\u5C31\u662F\u7528\u4E8E\u5305\u88C5\u5176\u5B83\u51FD\u6570\uFF0C\u5BF9\u8F93\u51FA\u7ED3\u679C\u6DFB\u52A0\u6307\u5B9A\u7684\u5355\u4F4D\u3002</p><p>\u5B83\u5B58\u5728 <code>1</code> \u79CD\u5F62\u5F0F\uFF1A</p><ol><li><code>unitize(function[, unit])</code> \u5305\u88C5\u6307\u5B9A\u7684\u51FD\u6570\uFF0C\u7ED9\u8BE5\u51FD\u6570\u8FD4\u56DE\u7684\u7ED3\u679C\u6DFB\u52A0\u5355\u4F4D <ul><li><code>function: Function</code> - \u88AB\u5305\u88C5\u7684\u51FD\u6570</li><li><code>unit: String</code> - \u53EF\u9009\uFF01\u6307\u5B9A\u6DFB\u52A0\u7684\u5355\u4F4D\u3002\u5982\u679C\u5FFD\u7565\u8FD9\u4E2A\u53C2\u6570\uFF0C\u539F\u59CB\u8F93\u5165\u7684\u5355\u4F4D\u5C06\u4F5C\u4E3A\u6700\u540E\u6DFB\u52A0\u7684\u5355\u4F4D\u{1F60E}</li></ul></li></ol><p>\u{1F330}</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki has-highlighted-lines"><code><span class="line highlighted"><span style="color:#676E95;">// 1\uFE0F\u20E3 \u7ED9clamp()\u51FD\u6570\u8FD4\u56DE\u7684\u7ED3\u679C\u6DFB\u52A0 \`px\` \u5355\u4F4D</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> clamp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unitize</span><span style="color:#A6ACCD;">(gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">clamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">132</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// &#39;100px&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">clamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">67</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;">// &#39;67px&#39;</span></span>
<span class="line highlighted"><span style="color:#82AAFF;">clamp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">-20%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// &#39;0px&#39; \u8F93\u5165\u7684\u5355\u4F4D\u5C06\u88AB\u53BB\u6389\uFF0C\u8FD4\u56DE\u7ED3\u679C\u6DFB\u52A0\u6307\u5B9A\u7684\u5355\u4F4D</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;">// 2\uFE0F\u20E3 \u{1F4A1}\u6CA1\u6709\u6307\u5B9A\u6DFB\u52A0\u7684\u5355\u4F4D\uFF0C\u5219\u4F7F\u7528\u8F93\u5165\u7684\u5355\u4F4D</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> wrap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unitize</span><span style="color:#A6ACCD;">(gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wrap</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#82AAFF;">wrap</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">150px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// &#39;50px&#39;   \u4F7F\u7528\u8F93\u5165\u7684 \`px\` \u4F5C\u4E3A\u8FD4\u56DE\u7ED3\u679C\u7684\u5355\u4F4D</span></span>
<span class="line"><span style="color:#82AAFF;">wrap</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">130%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;">// 30%      \u4F7F\u7528\u8F93\u5165\u7684 \`%\` \u4F5C\u4E3A\u8FD4\u56DE\u7ED3\u679C\u7684\u5355\u4F4D</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#676E95;">// 3\uFE0F\u20E3 \u5F3A\u5236\u4F7F\u7528\u67D0\u4E2A\u5355\u4F4D\uFF0C\u6BD4\u5982 \`%\`</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> map </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unitize</span><span style="color:#A6ACCD;">(gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mapRange</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">)     </span><span style="color:#676E95;">// &#39;50%&#39;</span></span>
<span class="line highlighted"><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">5px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// &#39;75%&#39;  \u{1F4DA}\u8F93\u5165\u503C\u4F1A\u5148\u88AB\u53BB\u6389\u5355\u4F4D</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// 4\uFE0F\u20E3 modifier\u51FD\u6570\u4E2D\u6709\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">to</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.class</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1000</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">modifier</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u{1F4DA}\u8F93\u5165\u7684\u503C\u662F\u5E26\u5355\u4F4D\u7684</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u4F46\u662F \`unitize\` \u4F1A\u5148\u5C06\u5176\u5355\u4F4D\u53BB\u6389\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u518D\u6DFB\u52A0\u6307\u5B9A\u7684\u5355\u4F4D\u6216\u8005\u539F\u5355\u4F4D</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unitize</span><span style="color:#A6ACCD;">(gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">wrap</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerWidth)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u672C\u8D28\u4E0A\uFF0Cunitize()\u4F1A\u4F7F\u7528 <code>parseFloat()</code> \u5BF9\u8F93\u5165\u7684\u503C\u8FDB\u884C\u5904\u7406\uFF0C\u5F97\u5230\u6570\u5B57\u90E8\u5206\uFF0C\u56E0\u6B64\uFF0C\u5982\u679C\u8F93\u5165\u7684\u53C2\u6570\u4E0D\u662F\u6570\u5B57\u5F00\u5934\uFF0C\u5219\u53EF\u80FD\u51FA\u73B0\u95EE\u9898</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> clamp </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unitize</span><span style="color:#A6ACCD;">(gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">clamp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// \u2705 &#39;1px&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">clamp</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// \u{1F605} &#39;NaNpx&#39;</span></span>
<span class="line"></span></code></pre></div></div><p>\u6587\u6863\u5730\u5740\uFF1A</p><ul><li><a href="https://greensock.com/docs/v3/GSAP/UtilityMethods/unitize()" target="_blank" rel="noreferrer">gsap.utils.unitize()</a></li></ul><details class="details custom-block"><summary>\u{1F4DA}TS\u5B9A\u4E49</summary><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Ensures that a specific unit gets applied.</span></span>
<span class="line"><span style="color:#676E95;"> * </span></span>
<span class="line"><span style="color:#676E95;"> * \`\`\`js</span></span>
<span class="line"><span style="color:#676E95;"> * const clamp = gsap.utils.unitize( gsap.utils.clamp(0, 100), &quot;px&quot;);</span></span>
<span class="line"><span style="color:#676E95;"> * clamp(132); // &quot;100px&quot;</span></span>
<span class="line"><span style="color:#676E95;"> * </span></span>
<span class="line"><span style="color:#676E95;"> * gsap.to(&quot;.class&quot;, {</span></span>
<span class="line"><span style="color:#676E95;"> *   x: 1000,</span></span>
<span class="line"><span style="color:#676E95;"> *   modifiers: {</span></span>
<span class="line"><span style="color:#676E95;"> *     x: gsap.utils.unitize( gsap.utils.wrap(0, window.innerWidth), &quot;px&quot;) </span></span>
<span class="line"><span style="color:#676E95;"> *   }</span></span>
<span class="line"><span style="color:#676E95;"> * });</span></span>
<span class="line"><span style="color:#676E95;"> * \`\`\`</span></span>
<span class="line"><span style="color:#676E95;"> *</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">Function</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">fn</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">unit</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">returns</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> The value with unit added</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">memberof</span><span style="color:#676E95;"> </span><span style="color:#FFCB6B;">gsap.utils</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">unitize</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">&gt;&gt;(</span><span style="color:#82AAFF;">fn</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">unknown</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">unit</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(...</span><span style="color:#A6ACCD;">args</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></details><p>2022\u5E7411\u670813\u65E518:57:21</p>`,10),e=[o];function t(c,r,y,D,F,C){return a(),n("div",null,e)}const u=s(l,[["render",t]]);export{i as __pageData,u as default};