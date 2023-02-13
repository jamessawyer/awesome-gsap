import{_ as n,c as l,o as a,a as o,b as s,d as e}from"./app.586394ea.js";const T=JSON.parse('{"title":"Draggable.hitTest()","description":"","frontmatter":{"title":"Draggable.hitTest()"},"headers":[],"relativePath":"plugins/draggable/methods/static-hitTest.md","lastUpdated":1676275730000}'),t={name:"plugins/draggable/methods/static-hitTest.md"},p=o(`<p>📚 定义：</p><p><code>Draggable.hitTest(testObject: Object, threshold: [Number|String]): Boolean</code></p><ul><li>对拖动元素是否与其他元素重叠提供一种简单的方式，可依据你定义的阈值（可选）</li><li>参数 <ul><li><code>testObject: Object</code> : 进行hit测试的对象，可以是下列类型 <ul><li>元素；</li><li>包含 <code>pageX &amp; pageY</code> 的 <code>mouse|touch</code> event；</li><li>选择器（<code>#someElement</code>）;</li><li>定义了矩形的通用对象，即包含 <code>top left right bottom</code> 属性</li></ul></li><li><code>threshold: [Number|String]</code>：默认为 <code>0</code><ul><li>可以是数值类型，表示重叠的最小像素</li><li>字符串,比如<code>50%</code>，重叠百分比</li><li><code>0</code> 任何重叠</li></ul></li></ul></li><li>返回值 <ul><li>如果感知到了重叠（根据你设置的 <code>threshold</code>），返回 <code>true</code>, 否则 <code>false</code></li></ul></li></ul><p>🌰</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight has-highlighted-lines" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Draggable</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#element1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x,y</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">onDragEnd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 查看是否与 \`#element2\` 元素重叠</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">hitTest</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#element2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// do stuff</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 比如改变 \`#element2\` 背景色</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>默认情况，只要存在重叠，<code>hitTest()</code> 就会返回 <code>true</code>，但是你可以定义 <code>threshold</code> 参数，比如，至少重叠 <code>20px</code> 或者 <code>50%</code>：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Draggable</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#element1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x,y</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">onDragEnd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 查看是否与 \`#element2\` 元素至少重叠 \`20px\`</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">hitTest</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#element2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">20</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// do stuff</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// 比如改变 \`#element2\` 背景色</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 查看是否与 \`#element2\` 元素至少重叠 \`50%\`</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">hitTest</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#elements</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">50%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;">// do stuff</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p><a href="https://codepen.io/GreenSock/pen/ndBZjZ" target="_blank" rel="noreferrer">Draggable with droppable logic</a></p>`,8),c=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:'Draggable with "droppable" logic',src:"https://codepen.io/GreenSock/embed/preview/ndBZjZ?default-tab=result&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/GreenSock/pen/ndBZjZ">
  Draggable with &quot;droppable&quot; logic</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),r=s("div",{class:"tip custom-block"},[s("p",{class:"custom-block-title"},"💡"),s("p",null,[e("你还可以使用 "),s("code",null,"hitTest(window)"),e(" 检测元素是否在viewport内可见。")])],-1),i=s("p",null,[e("还有一个静态版本，传入元素和对象和threshold，比如 "),s("code",null,"Draggable.hitTest(element1, element2, 20)"),e("，示例 "),s("a",{href:"https://codepen.io/GreenSock/pen/ezeRNz",target:"_blank",rel:"noreferrer"},"Draggable.hitTest() - codepen")],-1),D=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Draggable hitTest()",src:"https://codepen.io/GreenSock/embed/preview/ezeRNz?default-tab=result&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/GreenSock/pen/ezeRNz">
  Draggable hitTest()</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),y=s("div",{class:"warning custom-block"},[s("p",{class:"custom-block-title"},"WARNING"),s("p",null,[e("🚨对于非矩形形状，像素测量可能不太精准。"),s("code",null,"hitTest()"),e(" 使用浏览器的 "),s("code",null,"getBoundingClientRect()"),e(" 方法获取矩形边界，因此如果你旋转元素或者元素是圆形形状，边界可能比看起来的要更大。")])],-1),F=s("p",null,"文档地址：",-1),d=s("ul",null,[s("li",null,[s("a",{href:"https://greensock.com/docs/v3/Plugins/Draggable/static.hitTest()",target:"_blank",rel:"noreferrer"},"hitTest()")])],-1),h=s("p",null,"2022年11月03日11:39:25",-1),g=[p,c,r,i,D,y,F,d,h];function u(C,A,f,b,m,_){return a(),l("div",null,g)}const E=n(t,[["render",u]]);export{T as __pageData,E as default};
