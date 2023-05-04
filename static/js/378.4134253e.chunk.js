"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[378],{8378:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(5861),a=n(9439),i=n(4687),o=n.n(i),s=n(2791),l=n(7689),c=n(7963),d=n(168),p=n(7462),u=n(9791),m=n(5011),f=n(5438),h=n(9140),g=n(2561),v=u.Z,_=function(e){return"theme"!==e},b=function(e){return"string"===typeof e&&e.charCodeAt(0)>96?v:_},x=function(e,t,n){var r;if(t){var a=t.shouldForwardProp;r=e.__emotion_forwardProp&&a?function(t){return e.__emotion_forwardProp(t)&&a(t)}:a}return"function"!==typeof r&&n&&(r=e.__emotion_forwardProp),r},y=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;(0,f.hC)(t,n,r);(0,g.L)((function(){return(0,f.My)(t,n,r)}));return null},w=function e(t,n){var r,a,i=t.__emotion_real===t,o=i&&t.__emotion_base||t;void 0!==n&&(r=n.label,a=n.target);var l=x(t,n,i),c=l||b(o),d=!c("as");return function(){var u=arguments,g=i&&void 0!==t.__emotion_styles?t.__emotion_styles.slice(0):[];if(void 0!==r&&g.push("label:"+r+";"),null==u[0]||void 0===u[0].raw)g.push.apply(g,u);else{0,g.push(u[0][0]);for(var v=u.length,_=1;_<v;_++)g.push(u[_],u[0][_])}var w=(0,m.w)((function(e,t,n){var r=d&&e.as||o,i="",p=[],u=e;if(null==e.theme){for(var v in u={},e)u[v]=e[v];u.theme=(0,s.useContext)(m.T)}"string"===typeof e.className?i=(0,f.fp)(t.registered,p,e.className):null!=e.className&&(i=e.className+" ");var _=(0,h.O)(g.concat(p),t.registered,u);i+=t.key+"-"+_.name,void 0!==a&&(i+=" "+a);var x=d&&void 0===l?b(r):c,w={};for(var k in e)d&&"as"===k||x(k)&&(w[k]=e[k]);return w.className=i,w.ref=n,(0,s.createElement)(s.Fragment,null,(0,s.createElement)(y,{cache:t,serialized:_,isStringTag:"string"===typeof r}),(0,s.createElement)(r,w))}));return w.displayName=void 0!==r?r:"Styled("+("string"===typeof o?o:o.displayName||o.name||"Component")+")",w.defaultProps=t.defaultProps,w.__emotion_real=w,w.__emotion_base=o,w.__emotion_styles=g,w.__emotion_forwardProp=l,Object.defineProperty(w,"toString",{value:function(){return"."+a}}),w.withComponent=function(t,r){return e(t,(0,p.Z)({},n,r,{shouldForwardProp:x(w,r,!0)})).apply(void 0,g)},w}},k=w.bind();["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){k[e]=k(e)}));var j,Z,P,C,N,E,S=k,F=S.ul(j||(j=(0,d.Z)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),z=S.li(Z||(Z=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),O=S.img(P||(P=(0,d.Z)(["\n  width: 50px;\n  height: 75px;\n  margin-right: 10px;\n"]))),q=S.p(C||(C=(0,d.Z)(["\n  font-size: 18px;\n  font-weight: bold;\n  margin: 0;\n"]))),T=S.p(N||(N=(0,d.Z)(["\n  font-size: 14px;\n  margin: 0;\n"]))),G=S.div(E||(E=(0,d.Z)(["\n  width: 50px;\n  height: 75px;\n  margin-right: 10px;\n  background-color: #e0e0e0;\n"]))),L=n(184);function A(){var e=(0,l.UO)().movieId,t=(0,s.useState)([]),n=(0,a.Z)(t,2),i=n[0],d=n[1],p=(0,s.useState)(!1),u=(0,a.Z)(p,2),m=u[0],f=u[1];return(0,s.useEffect)((function(){(0,r.Z)(o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.prev=1,t.next=4,c.y(e);case 4:n=t.sent,r=n.cast,d(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log("Error fetching cast",t.t0.message);case 12:return t.prev=12,f(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})))()}),[e]),(0,L.jsx)(L.Fragment,{children:m?(0,L.jsx)("div",{children:"Loading cast..."}):(0,L.jsx)(L.Fragment,{children:i.length?(0,L.jsx)(F,{children:i.map((function(e){return(0,L.jsxs)(z,{children:[e.profile_path?(0,L.jsx)(O,{src:"https://image.tmdb.org/t/p/w154"+e.profile_path,alt:e.name}):(0,L.jsx)(G,{}),(0,L.jsxs)("div",{children:[(0,L.jsx)(q,{children:e.name}),(0,L.jsxs)(T,{children:["as ",e.character]})]})]},e.id)}))}):(0,L.jsx)("p",{children:"We don't have cast for this movie"})})})}}}]);
//# sourceMappingURL=378.4134253e.chunk.js.map