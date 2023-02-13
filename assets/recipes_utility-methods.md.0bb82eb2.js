import{_ as s,c as n,o as a,a as l}from"./app.586394ea.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"recipes/utility-methods.md","lastUpdated":1676275730000}'),p={name:"recipes/utility-methods.md"},t=l(`<p>GSAP提供的一些工具方法，通过 <code>gsap.utils.xxx()</code> 方式使用</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 获取属性相关浏览器前缀，比如获取 \`filter\`属性 &#39;WebkitFilter&#39;, &#39;MozFilter&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// checkPrefix(&#39;transform&#39;) -&gt; &#39;msTransform&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">checkPrefix</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 得到区间内的值，比如颜色值0-255，超过255取255，小于0取0 clamp(0, 255)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// clamp(0, 100, -12) -&gt; 0</span></span>
<span class="line"><span style="color:#82AAFF;">clamp</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 返回一个函数，该函数根据你提供的输入分配一个值数组。</span></span>
<span class="line"><span style="color:#82AAFF;">distribute</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取字符串单位</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// gsap.utils.getUnit(&quot;50%&quot;) -&gt; &#39;%&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// gsap.utils.getUnit(&quot;100vw&quot;) -&gt; &#39;vw&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">getUnit</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 在值之间进行插值操作</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// interpolate(&#39;red&#39;, &#39;blue&#39;, &#39;0.5&#39;) -&gt; &#39;rgba(128,0,128,1&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">interpolate</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将一个区间映射为另一个区间</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// mapRange(-10, 10, 0, 100, 5) -&gt; 75</span></span>
<span class="line"><span style="color:#82AAFF;">mapRange</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 将一个区间映射为 0-1 区间</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// normalize(100, 200, 150) -&gt; 0.5</span></span>
<span class="line"><span style="color:#82AAFF;">normalize</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 序列化函数调用</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// pipe(clamp(0, 100), snap(5))(8) -&gt; 10</span></span>
<span class="line"><span style="color:#82AAFF;">pipe</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 生成一个随机值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// random([&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;]) -&gt; &#39;blue&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">random</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取一个作用域选择器函数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// selector(myElement)</span></span>
<span class="line"><span style="color:#82AAFF;">selector</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 随机打乱数组</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// shuffle([1, 2, 3, 4, 5]) --&gt; [4, 2, 1, 5, 3]</span></span>
<span class="line"><span style="color:#82AAFF;">shuffle</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 增加靠近某个值或靠近某个数组中最接近的值</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// snap(5, 13) -&gt; 15</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// snap([0， 5， 10]， 7) -&gt; 5</span></span>
<span class="line"><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 拆分为RGB数组</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// splitColor(&#39;red&#39;) -&gt; [255, 0, 0]</span></span>
<span class="line"><span style="color:#82AAFF;">splitColor</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ⭐ 将类数组转换为数组</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 比如选择某个类元素</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// toArray(&#39;.class&#39;) -&gt; [element1, element2]</span></span>
<span class="line"><span style="color:#82AAFF;">toArray</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 包裹其它的工具函数，允许接收包含单位的值，去掉其单位</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// var wrap gsap.utils.unitize(gsap.utils.wrap(0,100))</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// wrap(&#39;150px&#39;) -&gt; &#39;50px&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">unitize</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ⭐ 将一个数字放入指定的范围内，当它超过最大值时，将返回开始位置，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   如果小于最小值，则返回结束位置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// wrap(5, 10, 12) -&gt; 7</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 或则 循环遍历数组，这样当提供的索引大于数组的长度时，它就返回到开始位置</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 索引为4，共5个值，循环 0 - 1 - 2 - 0 - 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// wrap([0, 10, 20], 4) --&gt; 10</span></span>
<span class="line"><span style="color:#82AAFF;">wrap</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ⭐ 将一个数字放在一个指定的范围内，当它超过最大值时，</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    它就向开始方向旋转，如果它小于最小值，它就向前旋转到结束</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//    wrapYoyo(5, 10, 12)  -&gt; 8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 或则 循环数组，这样当提供的索引大于数组的长度时，它就会回到起点</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 索引为4，共5个值，循环 0 - 1 - 2 - 3 - 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   wrapYoyo([0, 10, 20, 30], 4) --&gt; 20</span></span>
<span class="line"><span style="color:#82AAFF;">wrapYoyo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre></div><p>可查看 <a href="https://greensock.com/docs/v3/GSAP/UtilityMethods" target="_blank" rel="noreferrer">GSAP - Utility Methods</a></p>`,3),e=[t];function o(c,i,r,y,A,f){return a(),n("div",null,e)}const g=s(p,[["render",o]]);export{C as __pageData,g as default};
