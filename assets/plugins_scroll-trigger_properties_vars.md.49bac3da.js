import{_ as s,c as a,o as l,a as n}from"./app.174d7492.js";const i=JSON.parse('{"title":"vars Property","description":"","frontmatter":{"title":"vars Property"},"headers":[],"relativePath":"plugins/scroll-trigger/properties/vars.md","lastUpdated":1666259322000}'),p={name:"plugins/scroll-trigger/properties/vars.md"},o=n(`<p>\u{1F4DA} \u5B9A\u4E49\uFF1A</p><p><code>.vars: {Object}</code> \u7528\u4E8E\u521B\u5EFAScrollTrigger\u5B9E\u4F8B\u7684\u914D\u7F6E\u5BF9\u8C61</p><ul><li>\u53EA\u8BFB\uFF0C\u53EF\u9009</li></ul><p>\u{1F330}</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> st </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ScrollTrigger</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">trigger</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">.trigger</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">start</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">top center</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">end</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">+=500</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(st</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vars) </span><span style="color:#676E95;">// {trigger: &#39;.trigger&#39;, start: &#39;top center&#39;, end: &#39;+=500&#39;}</span></span>
<span class="line"></span></code></pre></div><p>\u4F60\u53EF\u4EE5\u5728 <code>vars</code> \u5BF9\u8C61\u4E2D\u5B58\u50A8\u4EFB\u610F\u4F60\u60F3\u8981\u7684\u6570\u636E\uFF0CScrollTrigger\u4F1A\u5FFD\u7565\u5B83\u4E0D\u8BA4\u8BC6\u7684\u5C5E\u6027\u3002\u56E0\u6B64\uFF0C\u6BD4\u5982\uFF0C\u4F60\u6DFB\u52A0\u4E86\u4E00\u4E2A <code>&quot;group&quot;</code> \u5C5E\u6027\uFF0C\u4F7F\u4F60\u80FD\u7ED9\u4F60\u7684ScrollTriggers\u8FDB\u884C\u5206\u7EC4\uFF0C\u4E4B\u540E\u4F7F\u7528 <code>kill()</code> \u6740\u6389\u6240\u6709\u7684\u7279\u5B9A\u7EC4\u522B\u7684ScrollTrigger\u5B9E\u4F8B\uFF0C\u4F60\u53EF\u4EE5\u8FD9\u6837\u505A\uFF1A</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// \u8F85\u52A9\u51FD\u6570</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> getGroup </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">group</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> ScrollTrigger</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAll</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">filter</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">t</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">vars</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">group </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">group</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u4E4B\u540E kill() \u6240\u6709 &#39;my-group&#39; \u7EC4</span></span>
<span class="line"><span style="color:#82AAFF;">getGroup</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">my-group</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;">t</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;">())</span></span>
<span class="line"></span></code></pre></div><p>\u6587\u6863\u5730\u5740\uFF1A</p><ul><li><a href="https://greensock.com/docs/v3/Plugins/ScrollTrigger/vars" target="_blank" rel="noreferrer">ScrollTrigger - vars</a></li></ul><p>2022\u5E7410\u670820\u65E514:08:03</p>`,10),e=[o];function r(t,c,D,y,A,C){return l(),a("div",null,e)}const g=s(p,[["render",r]]);export{i as __pageData,g as default};
