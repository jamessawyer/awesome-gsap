import{_ as l,c as p,o,a as n,b as s,d as a}from"./app.586394ea.js";const P=JSON.parse('{"title":"GSAP react基本用法","description":"","frontmatter":{"title":"GSAP react基本用法"},"headers":[{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[]},{"level":2,"title":"在useEffect()中创建动画","slug":"在useeffect-中创建动画","link":"#在useeffect-中创建动画","children":[]},{"level":2,"title":"目标元素... Refs?","slug":"目标元素-refs","link":"#目标元素-refs","children":[]},{"level":2,"title":"⭐ gsap.context() 是你最好的朋友!","slug":"⭐-gsap-context-是你最好的朋友","link":"#⭐-gsap-context-是你最好的朋友","children":[]},{"level":2,"title":"第一个动画","slug":"第一个动画","link":"#第一个动画","children":[]},{"level":2,"title":"⭐ Forwarding refs（转发Refs）","slug":"⭐-forwarding-refs-转发refs","link":"#⭐-forwarding-refs-转发refs","children":[]},{"level":2,"title":"⭐ 创建和控制timelines","slug":"⭐-创建和控制timelines","link":"#⭐-创建和控制timelines","children":[]},{"level":2,"title":"React useEffect触发时机","slug":"react-useeffect触发时机","link":"#react-useeffect触发时机","children":[]},{"level":2,"title":"⭐ 子组件动画","slug":"⭐-子组件动画","link":"#⭐-子组件动画","children":[]},{"level":2,"title":"动画交互","slug":"动画交互","link":"#动画交互","children":[]},{"level":2,"title":"⭐ 避免没有样式的内容闪烁（FOUC）","slug":"⭐-避免没有样式的内容闪烁-fouc","link":"#⭐-避免没有样式的内容闪烁-fouc","children":[]},{"level":2,"title":"清理","slug":"清理","link":"#清理","children":[]}],"relativePath":"blogs/react/getting-start-with-gsap-and-react.md","lastUpdated":1676275730000}'),e={name:"blogs/react/getting-start-with-gsap-and-react.md"},t=n("",22),c=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"React & GSAP Starter Template",src:"https://codepen.io/GreenSock/embed/preview/OJmQvLZ?default-tab=result&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/GreenSock/pen/OJmQvLZ">
  React &amp; GSAP Starter Template</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),r=n("",3),F=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Forwarding refs",src:"https://codepen.io/GreenSock/embed/preview/RwVBWGW?default-tab=result&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/GreenSock/pen/RwVBWGW">
  Forwarding refs</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),y=n("",5),D=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Storing a timeline in a ref.",src:"https://codepen.io/GreenSock/embed/preview/eYWGeGe?default-tab=result&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/GreenSock/pen/eYWGeGe">
  Storing a timeline in a ref.</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),i=n("",3),A=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Controlling when React runs an animation - useEffect",src:"https://codepen.io/GreenSock/embed/preview/RwVZEMg?default-tab=result&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/GreenSock/pen/RwVZEMg">
  Controlling when React runs an animation - useEffect</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),C=n("",2),d=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Reacting to changes in state",src:"https://codepen.io/GreenSock/embed/preview/poPrYGa?default-tab=result&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/GreenSock/pen/poPrYGa">
  Reacting to changes in state</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),h=n("",3),g=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Animating on interaction with callbacks.",src:"https://codepen.io/GreenSock/embed/preview/ZEKJPLa?default-tab=result&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/GreenSock/pen/ZEKJPLa">
  Animating on interaction with callbacks.</a> by GreenSock (<a href="https://codepen.io/GreenSock">@GreenSock</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),f=s("h2",{id:"⭐-避免没有样式的内容闪烁-fouc",tabindex:"-1"},[a("⭐ 避免没有样式的内容闪烁（FOUC） "),s("a",{class:"header-anchor",href:"#⭐-避免没有样式的内容闪烁-fouc","aria-hidden":"true"},"#")],-1),u=s("p",null,[s("code",null,"useEffect"),a(" 在DOM绘制后触发，当对元素进行Fading效果时，可以注意到没有样式的内容的闪烁问题。（原文这里有一个gif示意图）")],-1),E=s("p",null,[a("为了避免闪烁问题，可以使用 "),s("code",null,"useLayoutEffect"),a(" 替代 "),s("code",null,"useEffect"),a("，它在DOM绘制前执行：")],-1),m=s("iframe",{height:"300",style:{width:"100%"},scrolling:"no",title:"Avoiding FOUC with useLayoutEffect()",src:"https://codepen.io/JamesSawyer/embed/preview/MWGNayE?default-tab=result&theme-id=dark",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},`
  See the Pen <a href="https://codepen.io/JamesSawyer/pen/MWGNayE">
  Avoiding FOUC with useLayoutEffect()</a> by james sawyer (<a href="https://codepen.io/JamesSawyer">@JamesSawyer</a>)
  on <a href="https://codepen.io">CodePen</a>.
`,-1),_=n("",11),x=[t,c,r,F,y,D,i,A,C,d,h,g,f,u,E,m,_];function b(v,k,S,R,w,T){return o(),p("div",null,x)}const B=l(e,[["render",b]]);export{P as __pageData,B as default};
