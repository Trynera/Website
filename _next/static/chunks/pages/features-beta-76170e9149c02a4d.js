(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[240],{3492:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var a=n(7462),c=n(91),r=n(7294),i=n(7089),s=n(3937),o=n(1236),l=["children","tag","className","type"],d=function(e){var t=e.children,n=e.tag,d=e.className,m=e.type,h=(0,c.Z)(e,l),p=n,u=(0,s.Z)(),f=(0,o.ZP)(),x=f.SCALES,g=f.getScaleProps,y=g("font"),b=g(["margin","marginLeft","marginRight","mx","ml","mr"]),v=g(["margin","marginTop","marginBottom","my","mt","mb"]),w=g(["padding","paddingLeft","paddingRight","pl","pr","px"]),j=g(["padding","paddingTop","paddingBottom","pt","pb","py"]),N=(0,r.useMemo)((function(){return function(e,t){var n={default:"inherit",secondary:t.secondary,success:t.success,warning:t.warning,error:t.error};return n[e]||n.default}(m,u.palette)}),[m,u.palette]),Z=(0,r.useMemo)((function(){var e=[{value:b,className:"mx"},{value:v,className:"my"},{value:w,className:"px"},{value:j,className:"py"},{value:y,className:"font"}].reduce((function(e,t){return"undefined"===typeof t.value?e:"".concat(e," ").concat(t.className)}),"");return"".concat(e," ").concat(d).trim()}),[b,v,w,j,y,d]);return r.createElement(p,(0,a.Z)({},h,{className:i.ZP.dynamic([["3155699851",[n,N,x.width(1,"auto"),x.height(1,"auto"),x.font(1,"inherit"),x.ml(0,"revert"),x.mr(0,"revert"),x.mt(0,"revert"),x.mb(0,"revert"),x.pl(0,"revert"),x.pr(0,"revert"),x.pt(0,"revert"),x.pb(0,"revert")]]])+" "+(h&&null!=h.className&&h.className||Z||"")}),t,r.createElement(i.ZP,{id:"3155699851",dynamic:[n,N,x.width(1,"auto"),x.height(1,"auto"),x.font(1,"inherit"),x.ml(0,"revert"),x.mr(0,"revert"),x.mt(0,"revert"),x.mb(0,"revert"),x.pl(0,"revert"),x.pr(0,"revert"),x.pt(0,"revert"),x.pb(0,"revert")]},"".concat(n,".__jsx-style-dynamic-selector{color:").concat(N,";width:").concat(x.width(1,"auto"),";height:").concat(x.height(1,"auto"),";}.font.__jsx-style-dynamic-selector{font-size:").concat(x.font(1,"inherit"),";}.mx.__jsx-style-dynamic-selector{margin-left:").concat(x.ml(0,"revert"),";margin-right:").concat(x.mr(0,"revert"),";}.my.__jsx-style-dynamic-selector{margin-top:").concat(x.mt(0,"revert"),";margin-bottom:").concat(x.mb(0,"revert"),";}.px.__jsx-style-dynamic-selector{padding-left:").concat(x.pl(0,"revert"),";padding-right:").concat(x.pr(0,"revert"),";}.py.__jsx-style-dynamic-selector{padding-top:").concat(x.pt(0,"revert"),";padding-bottom:").concat(x.pb(0,"revert"),";}")))};d.defaultProps={type:"default",className:""},d.displayName="GeistTextChild";var m=d,h=n(314),p=["h1","h2","h3","h4","h5","h6","p","b","small","i","span","del","em","blockquote","children","className"],u=function e(t,n){if(!t.length)return n;var a=t.slice(1,t.length);return r.createElement(m,{tag:t[0]},e(a,n))},f=function(e){var t=e.h1,n=e.h2,i=e.h3,s=e.h4,o=e.h5,l=e.h6,d=e.p,h=e.b,f=e.small,x=e.i,g=e.span,y=e.del,b=e.em,v=e.blockquote,w=e.children,j=e.className,N=(0,c.Z)(e,p),Z={h1:t,h2:n,h3:i,h4:s,h5:o,h6:l,p:d,blockquote:v},k={span:g,small:f,b:h,em:b,i:x,del:y},_=Object.keys(Z).filter((function(e){return Z[e]})),E=Object.keys(k).filter((function(e){return k[e]})),P=(0,r.useMemo)((function(){return _[0]?_[0]:E[0]?E[0]:"p"}),[_,E]),z=E.filter((function(e){return e!==P})),S=(0,r.useMemo)((function(){return z.length?u(z,w):w}),[z,w]);return r.createElement(m,(0,a.Z)({className:j,tag:P},N),S)};f.defaultProps={h1:!1,h2:!1,h3:!1,h4:!1,h5:!1,h6:!1,p:!1,b:!1,small:!1,i:!1,span:!1,del:!1,em:!1,blockquote:!1,className:"",type:"default"},f.displayName="GeistText";var x=(0,h.Z)(f)},7867:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/features-beta",function(){return n(8697)}])},8697:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var a=n(5893),c=n(5988),r=n.n(c),i=n(7462),s=n(91),o=n(7089),l=n(7294),d=n(3937),m=n(1236),h=n(314),p=n(5073),u=["type","align","children","className"],f=function(e){var t=e.type,n=e.align,a=e.children,c=e.className,r=(0,s.Z)(e,u),h=(0,d.Z)(),f=(0,m.ZP)().SCALES,x=(0,p.Z)("divider",c),g=(0,l.useMemo)((function(){return function(e,t){return{default:t.border,lite:t.accents_1,success:t.successLight,warning:t.warningLight,error:t.errorLight,secondary:t.secondary,dark:t.foreground}[e]}(t,h.palette)}),[t,h.palette]),y=(0,l.useMemo)((function(){return n&&"center"!==n?"left"===n||"start"===n?"start":"end":""}),[n]),b=(0,p.Z)("text",y),v="default"===t?h.palette.foreground:g;return l.createElement("div",(0,i.Z)({role:"separator"},r,{className:o.ZP.dynamic([["3410666717",[g,f.font(1),f.width(1,"auto"),f.height(.0625),f.pt(0),f.pr(0),f.pb(0),f.pl(0),f.mt(.5),f.mr(0),f.mb(.5),f.ml(0),h.palette.background,v]]])+" "+(r&&null!=r.className&&r.className||x||"")}),a&&l.createElement("span",{className:o.ZP.dynamic([["3410666717",[g,f.font(1),f.width(1,"auto"),f.height(.0625),f.pt(0),f.pr(0),f.pb(0),f.pl(0),f.mt(.5),f.mr(0),f.mb(.5),f.ml(0),h.palette.background,v]]])+" "+(b||"")},a),l.createElement(o.ZP,{id:"3410666717",dynamic:[g,f.font(1),f.width(1,"auto"),f.height(.0625),f.pt(0),f.pr(0),f.pb(0),f.pl(0),f.mt(.5),f.mr(0),f.mb(.5),f.ml(0),h.palette.background,v]},".divider.__jsx-style-dynamic-selector{max-width:100%;background-color:".concat(g,";position:relative;font-size:").concat(f.font(1),";width:").concat(f.width(1,"auto"),";height:").concat(f.height(.0625),";padding:").concat(f.pt(0)," ").concat(f.pr(0)," ").concat(f.pb(0)," ").concat(f.pl(0),";margin:").concat(f.mt(.5)," ").concat(f.mr(0)," ").concat(f.mb(.5)," ").concat(f.ml(0),";}.text.__jsx-style-dynamic-selector{position:absolute;left:50%;top:50%;min-height:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:0 0.75em;font-size:inherit;font-weight:bold;text-transform:capitalize;background-color:").concat(h.palette.background,";color:").concat(v,";z-index:10;}.text.start.__jsx-style-dynamic-selector{-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:7%;}.text.end.__jsx-style-dynamic-selector{-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);left:auto;right:7%;}")))};f.defaultProps={align:"center",type:"default",className:""},f.displayName="GeistDivider";var x=(0,h.Z)(f),g=n(6854),y=n(5970),b=["className","children"],v=function(e){var t=e.className,n=e.children,a=(0,s.Z)(e,b),c=(0,m.ZP)().SCALES;return l.createElement("main",(0,i.Z)({},a,{className:o.ZP.dynamic([["3887979816",[c.font(1),c.width(1,"100%"),c.height(1,"100%"),c.pt(3.125),c.pr(0),c.pb(3.125),c.pl(0),c.mt(0),c.mr(0),c.mb(0),c.ml(0)]]])+" "+(a&&null!=a.className&&a.className||t||"")}),n,l.createElement(o.ZP,{id:"3887979816",dynamic:[c.font(1),c.width(1,"100%"),c.height(1,"100%"),c.pt(3.125),c.pr(0),c.pb(3.125),c.pl(0),c.mt(0),c.mr(0),c.mb(0),c.ml(0)]},"main.__jsx-style-dynamic-selector{font-size:".concat(c.font(1),";width:").concat(c.width(1,"100%"),";height:").concat(c.height(1,"100%"),";padding:").concat(c.pt(3.125)," ").concat(c.pr(0)," ").concat(c.pb(3.125)," ").concat(c.pl(0),";margin:").concat(c.mt(0)," ").concat(c.mr(0)," ").concat(c.mb(0)," ").concat(c.ml(0),";}")))};v.defaultProps={className:""},v.displayName="GeistPageContent";var w=(0,h.Z)(v),j=n(6761),N=["children","render","dotBackdrop","className","dotSize","dotSpace"],Z=((0,y.b)("default","effect","effect-seo"),function(e){var t=e.dotSpace,n=e.dotSize,a=(0,l.useMemo)((function(){return{position:"calc(".concat(t," * 25px)"),size:"calc(".concat(t," * 50px)")}}),[t]);return l.createElement("span",{className:o.ZP.dynamic([["934717826",[n,n,a.position,a.position,a.size,a.size]]])},l.createElement(o.ZP,{id:"934717826",dynamic:[n,n,a.position,a.position,a.size,a.size]},"body{background-image:radial-gradient(#e3e3e3 ".concat(n,",transparent 0), radial-gradient(#e3e3e3 ").concat(n,",transparent 0);background-position:0 0,").concat(a.position," ").concat(a.position,";background-attachment:fixed;background-size:").concat(a.size," ").concat(a.size,";}")))}),k=function(e){var t=e.children,n=e.render,a=e.dotBackdrop,c=e.className,r=e.dotSize,h=e.dotSpace,p=(0,s.Z)(e,N),u=(0,d.Z)(),f=(0,m.ZP)().SCALES,x=(0,l.useMemo)((function(){return"dark"!==u.type&&a}),[a,u.type]),y=(0,l.useState)("default"!==n),b=(0,g.Z)(y,2),v=b[0],k=b[1];if((0,l.useEffect)((function(){k(!1)}),[]),v)return"effect-seo"===n?l.createElement("div",{"aria-hidden":"true",className:"jsx-3942095687 hidden"},t,l.createElement(o.ZP,{id:"3942095687"},".hidden.jsx-3942095687{opacity:0;display:none;}")):null;var _=(0,j.bJ)(t,w);return l.createElement("section",(0,i.Z)({},p,{className:o.ZP.dynamic([["1515698274",[f.font(1),f.width(1,"calc(100% - 100pt)"),f.height(1,"auto"),f.pt(0),f.pr(1.34),f.pb(0),f.pl(1.34),f.mt(0),f.mr(0,"auto"),f.mb(0),f.ml(0,"auto")]]])+" "+(p&&null!=p.className&&p.className||c||"")}),_?t:l.createElement(w,null,t),x&&l.createElement(Z,{dotSize:r,dotSpace:h}),l.createElement(o.ZP,{id:"1515698274",dynamic:[f.font(1),f.width(1,"calc(100% - 100pt)"),f.height(1,"auto"),f.pt(0),f.pr(1.34),f.pb(0),f.pl(1.34),f.mt(0),f.mr(0,"auto"),f.mb(0),f.ml(0,"auto")]},"section.__jsx-style-dynamic-selector{max-width:100vw;min-height:100vh;box-sizing:border-box;position:relative;font-size:".concat(f.font(1),";width:").concat(f.width(1,"calc(100% - 100pt)"),";height:").concat(f.height(1,"auto"),";padding:").concat(f.pt(0)," ").concat(f.pr(1.34)," ").concat(f.pb(0)," ").concat(f.pl(1.34),";margin:").concat(f.mt(0)," ").concat(f.mr(0,"auto")," ").concat(f.mb(0)," ").concat(f.ml(0,"auto"),";}")))};k.defaultProps={render:"default",dotBackdrop:!1,dotSize:"1px",dotSpace:1},k.displayName="GeistPage";var _=(0,h.Z)(k),E=["children","center","className"],P=function(e){var t=e.children,n=e.center,a=e.className,c=(0,s.Z)(e,E),r=(0,m.ZP)().SCALES,d=(0,p.Z)({center:n},a);return l.createElement("header",(0,i.Z)({},c,{className:o.ZP.dynamic([["3053482948",[r.font(1),r.width(1,"100%"),r.height(1,"auto"),r.pt(0),r.pr(0),r.pb(0),r.pl(0),r.mt(0),r.mr(0),r.mb(0),r.ml(0)]]])+" "+(c&&null!=c.className&&c.className||d||"")}),t,l.createElement(o.ZP,{id:"3053482948",dynamic:[r.font(1),r.width(1,"100%"),r.height(1,"auto"),r.pt(0),r.pr(0),r.pb(0),r.pl(0),r.mt(0),r.mr(0),r.mb(0),r.ml(0)]},"header.__jsx-style-dynamic-selector{font-size:".concat(r.font(1),";width:").concat(r.width(1,"100%"),";height:").concat(r.height(1,"auto"),";padding:").concat(r.pt(0)," ").concat(r.pr(0)," ").concat(r.pb(0)," ").concat(r.pl(0),";margin:").concat(r.mt(0)," ").concat(r.mr(0)," ").concat(r.mb(0)," ").concat(r.ml(0),";}.center.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}")))};P.defaultProps={center:!1,className:""},P.displayName="GeistPageHeader";var z=(0,h.Z)(P),S=["children"],O=function(e){var t=e.children,n=(0,s.Z)(e,S),a=(0,m.ZP)().SCALES;return l.createElement("footer",(0,i.Z)({},n,{className:o.ZP.dynamic([["3447440073",[a.font(1),a.width(1,"100%"),a.height(1,"auto"),a.pt(0),a.pr(0),a.pb(0),a.pl(0),a.mt(0),a.mr(0),a.mb(0),a.ml(0)]]])+" "+(n&&null!=n.className&&n.className||"")}),t,l.createElement(o.ZP,{id:"3447440073",dynamic:[a.font(1),a.width(1,"100%"),a.height(1,"auto"),a.pt(0),a.pr(0),a.pb(0),a.pl(0),a.mt(0),a.mr(0),a.mb(0),a.ml(0)]},"footer.__jsx-style-dynamic-selector{position:absolute;bottom:0;font-size:".concat(a.font(1),";width:").concat(a.width(1,"100%"),";height:").concat(a.height(1,"auto"),";padding:").concat(a.pt(0)," ").concat(a.pr(0)," ").concat(a.pb(0)," ").concat(a.pl(0),";margin:").concat(a.mt(0)," ").concat(a.mr(0)," ").concat(a.mb(0)," ").concat(a.ml(0),";}")))};O.defaultProps={className:""},O.displayName="GeistPageFooter";var C=(0,h.Z)(O);_.Header=z,_.Content=w,_.Body=w,_.Footer=C;var T=_,A=n(3492),L=n(4632),Y=n(9952),B=n(4633),M=n(1664),F=n(1761),G=n(9352),W=n(8193),q=n(9583),H=function(){return(0,a.jsxs)(F.Z.Container,{gap:1,justify:"center",children:[(0,a.jsx)(F.Z,{children:(0,a.jsx)("a",{href:"https://twitter.com/avdan_os",target:"_blank",children:(0,a.jsx)(L.Z,{shadow:!0,children:(0,a.jsx)(G.x2F,{size:26})})})}),(0,a.jsx)(F.Z,{children:(0,a.jsx)("a",{href:"https://github.com/Avdan-OS/",target:"_blank",children:(0,a.jsx)(L.Z,{shadow:!0,children:(0,a.jsx)(W.RrF,{size:26})})})}),(0,a.jsx)(F.Z,{children:(0,a.jsx)("a",{href:"https://www.youtube.com/c/AvdanOSDeveloper",target:"_blank",children:(0,a.jsx)(L.Z,{shadow:!0,children:(0,a.jsx)(W.b1v,{size:26})})})}),(0,a.jsx)(F.Z,{children:(0,a.jsx)("a",{href:"https://discord.gg/avdanos",target:"_blank",children:(0,a.jsx)(L.Z,{shadow:!0,children:(0,a.jsx)(q.j2d,{size:26})})})}),(0,a.jsx)(F.Z,{children:(0,a.jsx)("a",{href:"https://www.reddit.com/r/AvdanOS/",target:"_blank",children:(0,a.jsx)(L.Z,{shadow:!0,children:(0,a.jsx)(q.ViA,{size:26})})})})]})},J=function(){var e=(0,l.useState)(0),t=e[0],n=e[1];return(0,l.useEffect)((function(){var e=document.getElementById("video");window.addEventListener("scroll",(function(){n(window.scrollY),e.seeking||(window.scrollY<window.innerHeight?e.currentTime=0:e.currentTime=(window.scrollY-window.innerHeight)/80)}))}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{style:{height:"calc(100vh - 146px)"},className:"jsx-a7e5729d8389dfce text-center",children:[(0,a.jsx)("div",{style:{height:"calc(40vh - ".concat(100-t/4,"px)")},className:"jsx-a7e5729d8389dfce"}),(0,a.jsx)(A.Z,{className:"header",h1:!0,children:"Avdan's concept, we're making it real"}),(0,a.jsx)("div",{style:{height:"".concat(40-t/25,"px")},className:"jsx-a7e5729d8389dfce"}),(0,a.jsx)(A.Z,{children:"Scroll down to see what we got here"})]}),(0,a.jsx)(x,{}),(0,a.jsxs)("div",{className:"jsx-a7e5729d8389dfce",children:[(0,a.jsx)("div",{className:"jsx-a7e5729d8389dfce slide-background",children:(0,a.jsx)("video",{preload:"auto",id:"video",muted:!0,loop:!0,style:{width:"100%",height:"100%"},className:"jsx-a7e5729d8389dfce",children:(0,a.jsx)("source",{type:"video/webm",src:"https://cdn.avdanos.com/features.webm",height:"100%",width:"100%",className:"jsx-a7e5729d8389dfce"})})}),(0,a.jsxs)("div",{className:"jsx-a7e5729d8389dfce slide-page",children:[(0,a.jsx)(T,{children:(0,a.jsxs)(L.Z,{className:"slide-card slide-card-left",children:["This concept video is made by Avdan ",(0,a.jsx)(Y.Z,{}),(0,a.jsx)(M.default,{href:"https://youtu.be/tXFEiw1aJTw",children:(0,a.jsx)(B.Z,{type:"error",children:"Watch on YouTube"})})]})}),(0,a.jsx)(T,{marginTop:"400px",children:(0,a.jsxs)(L.Z,{className:"slide-card slide-card-left",children:[(0,a.jsx)("div",{className:"jsx-a7e5729d8389dfce slide-topic",children:(0,a.jsx)("h2",{className:"jsx-a7e5729d8389dfce",children:"Familiar dock, ultimate form"})}),(0,a.jsx)("div",{className:"jsx-a7e5729d8389dfce slide-info",children:(0,a.jsx)(A.Z,{children:"Everyone know dock/task bar. We got a brand new dock, with more features than ever before"})})]})}),(0,a.jsx)(T,{marginTop:"500px",children:(0,a.jsxs)(L.Z,{className:"slide-card slide-card-right",children:[(0,a.jsx)("h2",{className:"jsx-a7e5729d8389dfce",children:"Brand new launch menu"}),"With everything that you need in one place, launch anything anywhere at anytime."]})})]})]}),(0,a.jsxs)("div",{style:{height:"80vh"},className:"jsx-a7e5729d8389dfce text-center",children:[(0,a.jsx)(Y.Z,{h:"calc(40vh - 150px)"}),(0,a.jsx)(A.Z,{className:"header",h1:!0,children:"Under development"}),(0,a.jsx)(Y.Z,{h:"35px"}),(0,a.jsx)(A.Z,{children:"We are working really hard to make it real. Join us and help!"}),(0,a.jsx)(Y.Z,{h:"20px"}),(0,a.jsx)(H,{})]}),(0,a.jsx)(r(),{id:"a7e5729d8389dfce",children:".slide-background{position:-webkit-sticky;\nposition:sticky;\ntop:50px;\nz-index:0;\nheight:100vh}\n.slide-page{margin-top:-80vh!important}\n.slide-content{z-index:1}\n#__next{overflow-x:visible}\n.under-development{position:-webkit-sticky;\nposition:sticky;\ntop:0;\nheight:100px}\n.slide-card{float:left;\npadding:20px!important;\nwidth:40%!important}\n.slide-topic{display:-webkit-inline-box;\ndisplay:-webkit-inline-flex;\ndisplay:-ms-inline-flexbox;\ndisplay:inline-flex}\n.slide-info{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex}"})]})}},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return l}});var a=n(7294),c={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=a.createContext&&a.createContext(c),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},i.apply(this,arguments)},s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)t.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(n[a[c]]=e[a[c]])}return n};function o(e){return e&&e.map((function(e,t){return a.createElement(e.tag,i({key:t},e.attr),o(e.child))}))}function l(e){return function(t){return a.createElement(d,i({attr:i({},e.attr)},t),o(e.child))}}function d(e){var t=function(t){var n,c=e.attr,r=e.size,o=e.title,l=s(e,["attr","size","title"]),d=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,c,l,{className:n,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==r?a.createElement(r.Consumer,null,(function(e){return t(e)})):t(c)}}},function(e){e.O(0,[937,445,617,774,888,179],(function(){return t=7867,e(e.s=t);var t}));var t=e.O();_N_E=t}]);