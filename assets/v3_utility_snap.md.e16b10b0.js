import{_ as s,c as n,o as a,a as l}from"./app.586394ea.js";const p="/awesome-gsap/assets/snap-radius.4cb50165.png",o="/awesome-gsap/assets/snap-points.2915003b.png",u=JSON.parse('{"title":"gsap.utils.snap()","description":"","frontmatter":{"title":"gsap.utils.snap()"},"headers":[],"relativePath":"v3/utility/snap.md","lastUpdated":1676275730000}'),t={name:"v3/utility/snap.md"},e=l(`<p>📚 捕获（或者吸附到）特定的增量或者是数组中最接近的值：</p><ul><li>还可以提供一个可选的 <code>半径（radius）</code></li><li>还有2维数据，坐标点进行吸附</li><li>也是存在2种形式，一种直接返回结果，一种是返回一个可复用的函数</li></ul><p>它有 <code>6</code> 种形式（但可以分为3组）：（用法确实比较多，理解起来也有点绕😅）</p><ol><li><code>snap(snapIncrement, valueToSnap)</code> 直接返回结果 <ul><li><code>snapIncrement: Number</code> - 捕获的增量，比如 <code>snapIncrement</code> 设置为 <code>5</code>，表示增量为 <code>5</code> 的倍数，即 <code>[0, 5, 10, ...25 ..., 95...]</code> 等等</li><li><code>valueToSnap: Number</code> - 结束值，可以是任何数据类型，只要它和 <code>startValue</code> 匹配</li></ul></li><li><code>snap(snapIncrment)</code> 返回一个可复用的函数 <ul><li><code>snapIncrement: Number</code> - 同上</li></ul></li><li><code>snap(array, valueToSnap)</code> valueToSnap 匹配array中最接近的值，直接返回结果 <ul><li><code>array: Array</code> - 捕获的数组值</li><li><code>valueToSnap: Number</code> - 待捕获的值</li></ul></li><li><code>snap(array)</code> 返回一个可复用的函数 <ul><li><code>array: Array</code> - 同上</li></ul></li><li><code>snap(objectWithRadius, valueToSnap)</code> 包含 <code>radius</code> 的捕获方式，如果没有被捕获到，则直接返回原来的值，最复杂的一种用法🤩，直接返回结果 <ul><li><code>objectWithRadius: Object</code> - 可以是 <code>{values: [0, 20, 60], radius: 5}</code> 或者是 <code>{increment: 100, radius: 50}</code> 这种形式，<strong>values还可以是对象数组，包含 <code>x</code> &amp; <code>y</code>， 对2D坐标点进行捕获</strong></li><li><code>valueToSnap: Number</code> - 待捕获的值</li></ul></li><li><code>snap(objectWithRadius)</code> 返回可复用的函数 <ul><li><code>objectWithRadius: Object</code> - 同上</li></ul></li></ol><p>1️⃣ <code>包含snapIncrement</code> 的形式</p><p>🌰 直接返回结果</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 💡 相当于可以捕获的值为 \`10\` 的整数倍</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// ... -10 0 10 20 30 ...</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// \`23.5\` 离 \`20\` 最近 因此被捕获，返回结果为 \`20\`</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">23.5</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 20</span></span>
<span class="line"></span></code></pre></div><p>返回可复用得函数</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> snap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">9.5</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 10</span></span>
<span class="line"><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">3.2</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// -4</span></span>
<span class="line"></span></code></pre></div><p>2️⃣ <code>包含数组</code> 的形式</p><p>🌰 直接返回结果</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 💡 数组中离 \`65\` 最近的是 \`50\` 因此被 \`50\` 捕获</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">65</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 50</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">315</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 500</span></span>
<span class="line"></span></code></pre></div><p>返回可复用得函数</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> snap </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">85</span><span style="color:#A6ACCD;">)  </span><span style="color:#676E95;font-style:italic;">// 100</span></span>
<span class="line"><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">415</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 500</span></span>
<span class="line"></span></code></pre></div><p>3️⃣ <code>包含 objectWithRadius</code> 配置形式</p><blockquote><ol><li><code>values数组 + radius</code></li></ol></blockquote><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 没有被捕获，直接返回原值</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">values</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30.5</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 30.5</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 被 100捕获，返回 100</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">values</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">85</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 100</span></span>
<span class="line"></span></code></pre></div><p>数组捕获的半径为 <code>20</code>，数组中能捕获的范围如下图圆圈所示，而 <code>30.5</code> 不在3个捕获圈中，因此没有被捕获，原路直接返回 <code>30.5</code>；而 <code>85</code> 则被 <code>100</code> 的捕获圈捕获，因此返回 <code>100</code></p><p><img src="`+p+`" alt="snap-radius"></p><blockquote><ol start="2"><li><code>values对象数组 + radius</code> 对二维点进行捕获</li></ol></blockquote><p>这个原理其实和上面的类似，也是建立一个捕获圈，然后看点是否在某个圈内</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 被捕获</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> point </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">values</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> point) </span><span style="color:#676E95;font-style:italic;">// {x: 10, y: 10}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 没有被捕获，直接返回原来的值 {x: 14, y: 16}</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">values</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">16</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>如图所示，<code>(8, 8)</code> 坐标点被 <code>(10, 10)</code>为中心，半径为 <code>5</code> 的捕获圈捕获，因此返回 <code>{x: 10, y: 10}</code></p><p><img src="`+o+`" alt="snap-points"></p><blockquote><ol start="3"><li><code>increment + radius</code> 对象形式</li></ol></blockquote><p>这个其实和 <code>snap(snapIncrement, valueToSnap)</code> 类似，但是它又结合了 <code>values</code> 捕获圈的概念：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 理解</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 可以理解为 values: [..., -500, 0, 500, 1000, ...]</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// 半径为 150</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">// \`975\` 在 (1000, 0)中心，半径为 150 的捕获圈中</span></span>
<span class="line"><span style="color:#A6ACCD;">gsap</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">utils</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">snap</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">150</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">975</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 1000</span></span>
<span class="line"></span></code></pre></div><p>复用函数的写法，这里省略，大同小异。</p><p>文档地址：</p><ul><li><a href="https://greensock.com/docs/v3/GSAP/UtilityMethods/snap()" target="_blank" rel="noreferrer">gsap.utils.snap()</a></li></ul><details class="details custom-block"><summary>📚TS定义</summary><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point2D</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SnapNumberConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">increment</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">values</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SnapPoint2DConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">values</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point2D</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Snaps a value to the nearest increment of the number provided.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Or snaps to a value in the given array.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Or snaps to a value within the given radius (if an object is provided).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Or returns a function that does the above (if the second value is not provided).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \`\`\`js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * gsap.utils.snap(10, 23.5); // 20</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * gsap.utils.snap([100, 50, 500], 65); // 50</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * gsap.utils.snap({values:[0, 100, 300], radius:20}, 30.5); // 30.5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * gsap.utils.snap({increment:500, radius:150}, 310); // 310</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * const snap = gsap.utils.snap(5); // no value = reusable function</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * console.log( snap(0.5) ); // 0</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \`\`\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">SnapNumberConfig</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">snapConfig</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">[</span><span style="color:#A6ACCD;font-style:italic;">valueToSnap</span><span style="color:#89DDFF;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">returns</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number | Function</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> The snapped number or snap function</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">memberof</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#FFCB6B;font-style:italic;">gsap.utils</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">snap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">snapConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SnapNumberConfig</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">valueToSnap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">snap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">snapConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SnapNumberConfig</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">valueToSnap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Snaps a value if within the given radius of a points (objects with &quot;x&quot; and &quot;y&quot; properties).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * Or returns a function that does the above (if the second value is not provided).</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \`\`\`js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * gsap.utils.snap({values:[0, 100, 300], radius:20}, 85); // 100</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * const snap = gsap.utils.snap({values:[{x:0, y:0}, {x:10, y:10}, {x:20, y:20}], radius:5}); // no value = reusable function</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * console.log( snap({x:8, y:8}) ); // {x:10, y:10}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * \`\`\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">SnapPoint2DConfig</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">snapConfig</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">number</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">[</span><span style="color:#A6ACCD;font-style:italic;">valueToSnap</span><span style="color:#89DDFF;font-style:italic;">]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">returns</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">Point2D | Function</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> The snapped number or snap function</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">memberof</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#FFCB6B;font-style:italic;">gsap.utils</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">snap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">snapConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SnapPoint2DConfig</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">valueToSnap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point2D</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point2D</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">snap</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">snapConfig</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SnapPoint2DConfig</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">valueToSnap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point2D</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Point2D</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div></details><p>2022年11月11日16:11:41</p>`,32),c=[e];function y(r,i,C,D,F,A){return a(),n("div",null,c)}const f=s(t,[["render",y]]);export{u as __pageData,f as default};
