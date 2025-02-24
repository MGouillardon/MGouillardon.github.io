import{_ as h}from"./_plugin-vue_export-helper.DlAUqK2U.js";import{c as u,o as v,h as p,g as I,i as _,l as x,a as r,n as f,F as j,r as O,m as T,t as w,w as D,k as C,b as y,f as z}from"./runtime-core.esm-bundler.D-tfrbEi.js";import{v as V}from"./runtime-dom.esm-bundler.BdEMEPS7.js";import{u as P}from"./useTextScramble.DSuKtzZR.js";const A={},F={class:"fixed inset-0 pointer-events-none opacity-[0.02]",style:{"background-image":`linear-gradient(rgba(205, 214, 244, 0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(205, 214, 244, 0.5) 1px, transparent 1px)`,"background-size":"50px 50px"}};function G(c,n){return v(),u("div",F)}const R=h(A,[["render",G]]);function B(){const c=p({x:0,y:0});return{mousePos:c,handleMouseMove:s=>{const{clientX:e,clientY:i}=s,{innerWidth:a,innerHeight:o}=window;c.value={x:e/a*100,y:i/o*100}}}}const W={__name:"MouseEffect",setup(c,{expose:n}){n();const{mousePos:s,handleMouseMove:e}=B();_(()=>{document.addEventListener("mousemove",e)}),x(()=>{document.removeEventListener("mousemove",e)});const i={mousePos:s,handleMouseMove:e,onMounted:_,onUnmounted:x,get useMouseParallax(){return B}};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}};function Y(c,n,s,e,i,a){return v(),u("div",{class:"fixed inset-0 pointer-events-none transition-transform duration-300 ease-out",style:I({backgroundImage:`radial-gradient(circle at ${e.mousePos.x}% ${e.mousePos.y}%, var(--color-accent) 0%, transparent 50%)`,opacity:.1})},null,4)}const H=h(W,[["render",Y]]),U={__name:"Navbar",setup(c,{expose:n}){n();const s=p(!1),e=p("home"),i=p(!1),a=p({}),o=C(()=>window.location.pathname.startsWith("/projects/")),m=[{id:"home",label:"Accueil",color:"lavender"},{id:"projects",label:"Projets",color:"rose"},{id:"skills",label:"Compétences",color:"mint"},{id:"contact",label:"Contact",color:"peach"}],N=m.reduce((t,l)=>{const{displayText:d,scramble:b}=P(l.label);return t[l.id]={displayText:d,scramble:b},t},{}),g=()=>{s.value=window.scrollY>50},k=t=>{if(o.value)return;const l=t.filter(d=>d.isIntersecting);if(l.length>0){const d=l.reduce((b,E)=>{const L=Math.abs(b.boundingClientRect.top);return Math.abs(E.boundingClientRect.top)<L?E:b});e.value=d.target.id}},$=t=>{if(o.value){window.location.href=`/#${t}`;return}const l=document.getElementById(t);l&&(Object.values(a.value).forEach(d=>d.disconnect()),l.scrollIntoView({behavior:"smooth"}),e.value=t,i.value=!1,setTimeout(()=>{M()},1e3))},M=()=>{o.value||(Object.values(a.value).forEach(t=>t.disconnect()),a.value={},m.forEach(t=>{const l=document.getElementById(t.id);if(l){const d=new IntersectionObserver(k,{threshold:[.2,.4,.6,.8],rootMargin:"-20% 0px -20% 0px"});d.observe(l),a.value[t.id]=d}}))};_(()=>{window.addEventListener("scroll",g),o.value||M()}),x(()=>{window.removeEventListener("scroll",g),Object.values(a.value).forEach(t=>t.disconnect())});const S={scrolled:s,activeSection:e,isMobileMenuOpen:i,observers:a,isProjectPage:o,navItems:m,scrambles:N,handleScroll:g,updateActiveSection:k,handleNavigation:$,setupObservers:M,ref:p,onMounted:_,onUnmounted:x,computed:C,get useTextScramble(){return P}};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}},X={class:"max-w-3xl mx-auto"},q={class:"hidden sm:flex items-center justify-center gap-6 p-1"},J=["onClick","onMouseenter"],K={class:"sm:hidden"},Q={class:"text-sm font-mono text-[var(--color-text)]"},Z={class:"absolute top-full left-0 right-0 mt-2 bg-[var(--color-background)]/95 backdrop-blur-sm rounded-xl border border-[var(--color-text)]/5 shadow-lg overflow-hidden"},ee={class:"py-2"},oe=["onClick"];function te(c,n,s,e,i,a){return v(),u("nav",{class:f(["fixed top-4 sm:top-6 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6",{"top-2 sm:top-4":e.scrolled}])},[r("div",X,[r("div",{class:f(["relative rounded-full transition-all duration-300 backdrop-blur-sm border border-[var(--color-text)]/5",[e.scrolled?"bg-[var(--color-background)]/80 shadow-lg":"bg-[var(--color-background)]/50"]])},[r("ul",q,[(v(),u(j,null,O(e.navItems,o=>r("li",{key:o.id},[r("button",{onClick:m=>e.handleNavigation(o.id),onMouseenter:e.scrambles[o.id].scramble,class:f(["px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 relative group hover:scale-105 cursor-pointer",[e.activeSection===o.id?`text-[var(--color-${o.color})]`:"text-[var(--color-text)]/70 hover:text-[var(--color-text)]"]])},[T(w(e.scrambles[o.id].displayText)+" ",1),r("div",{class:f(["absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 transform scale-x-0 transition-transform duration-300",[e.activeSection===o.id?"scale-x-75":"group-hover:scale-x-75"]]),style:I({backgroundColor:`var(--color-${o.color})`})},null,6)],42,J)])),64))]),r("div",K,[r("button",{onClick:n[0]||(n[0]=o=>e.isMobileMenuOpen=!e.isMobileMenuOpen),class:"w-full px-4 py-2 flex items-center justify-between"},[r("span",Q,w(e.navItems.find(o=>o.id===e.activeSection)?.label||"Menu"),1),(v(),u("svg",{class:f(["w-4 h-4 transition-transform",{"rotate-180":e.isMobileMenuOpen}]),viewBox:"0 0 24 24",fill:"none",stroke:"currentColor"},n[1]||(n[1]=[r("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))]),D(r("div",Z,[r("ul",ee,[(v(),u(j,null,O(e.navItems,o=>r("li",{key:o.id},[r("button",{onClick:m=>e.handleNavigation(o.id),class:f(["w-full px-4 py-2 text-left text-sm font-mono transition-all duration-300",[e.activeSection===o.id?`text-[var(--color-${o.color})] bg-[var(--color-${o.color})]/10`:"text-[var(--color-text)]/70 hover:text-[var(--color-text)] hover:bg-[var(--color-text)]/5"]])},w(o.label),11,oe)])),64))])],512),[[V,e.isMobileMenuOpen]])])],2)])],2)}const ne=h(U,[["render",te]]),re={__name:"BaseLayout",setup(c,{expose:n}){n();const s={GridBackground:R,MouseEffect:H,Navbar:ne};return Object.defineProperty(s,"__isScriptSetup",{enumerable:!1,value:!0}),s}},se={class:"min-h-screen"};function ae(c,n,s,e,i,a){return v(),u("div",se,[y(e.Navbar),y(e.GridBackground),y(e.MouseEffect),z(c.$slots,"default")])}const ve=h(re,[["render",ae]]);export{ve as default};
