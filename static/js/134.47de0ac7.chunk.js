"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,o,i,a,s,c=t(5861),l=t(9439),u=t(4687),p=t.n(u),d=t(7689),f=t(1087),x=t(2791),h=t(168),g=t(8789),m=(g.ZP.header(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid #4a4a4a62;\n\n  > nav {\n    display: flex;\n  }\n"]))),(0,g.ZP)(f.OL)(o||(o=(0,h.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"]))),g.ZP.form(i||(i=(0,h.Z)(["\n  display: flex;\n  height: 30px;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  border-radius: 4px;\n  overflow: hidden;\n"])))),b=g.ZP.input(a||(a=(0,h.Z)(["\n  padding: 8px 16px;\n  outline: none;\n  border: none;\n  font: inherit;\n"]))),v=g.ZP.button(s||(s=(0,h.Z)(["\n  background-color: rgb(106 106 106);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 16px;\n  border: none;\n  height: 100%;\n  color: #fff;\n  font-weight: 500;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  transition: background-color 0.3s ease-in-out;\n\n  &:hover {\n    background-color: #555;\n  }\n"]))),Z=t(184);var y=function(n){var e=n.onSubmit,t=n.initialValue,r=(0,x.useState)(t),o=(0,l.Z)(r,2),i=o[0],a=o[1];return(0,Z.jsxs)(m,{onSubmit:function(n){n.preventDefault(),e({query:i})},children:[(0,Z.jsx)(b,{type:"text",name:"query",value:i,onChange:function(n){a(n.target.value)}}),(0,Z.jsx)(v,{type:"submit",children:"Submit"})]})},j=t(7963),w=t(4146);function k(){var n,e=(0,d.TH)(),t=(0,f.lr)(),r=(0,l.Z)(t,2),o=r[0],i=r[1],a=(0,x.useState)([]),s=(0,l.Z)(a,2),u=s[0],h=s[1],g=(0,x.useState)(!1),m=(0,l.Z)(g,2),b=m[0],v=m[1],k=null!==(n=o.get("query"))&&void 0!==n?n:"";(0,x.useEffect)((function(){P(k)}),[k]);var P=function(){var n=(0,c.Z)(p().mark((function n(e){var t,r;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.length){n.next=2;break}return n.abrupt("return");case 2:return v(!0),n.prev=3,n.next=6,j.WB(e);case 6:t=n.sent,r=t.results,h(r),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),console.log("Error fetching images",n.t0.message);case 14:return n.prev=14,v(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[3,11,14,17]])})));return function(e){return n.apply(this,arguments)}}();return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(y,{onSubmit:function(n){var e=n.query;i(""!==e?{query:e}:{}),P(e)},initialValue:k}),b?(0,Z.jsx)("div",{children:"Loading the movie..."}):(0,Z.jsx)(w.Z,{movies:u,location:e,title:k?'Search results by word "'.concat(k,'"'):"Enter your query"})]})}},4146:function(n,e,t){t.d(e,{Z:function(){return f}});var r,o,i,a=t(168),s=t(1087),c=t(8789),l=c.ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 20px;\n"]))),u=c.ZP.ul(o||(o=(0,a.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 32px;\n  margin-top: 32px;\n  padding: 0;\n  list-style: none;\n"]))),p=(0,c.ZP)(s.rU)(i||(i=(0,a.Z)(["\n  display: flex;\n  font-size: 30px;\n  font-weight: 700;\n  text-decoration: none;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);\n  background-color: #ffffffbc;\n  position: relative;\n  z-index: 1;\n  transition: transform 0.3s ease-in-out;\n  &:before {\n    content: '';\n    display: block;\n    padding-top: 150%;\n  }\n\n  &:hover {\n    transform: scale(1.4);\n    z-index: 2;\n  }\n\n  > img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),d=t(184);function f(n){var e=n.movies,t=n.location,r=n.title;return(0,d.jsxs)(d.Fragment,{children:[!!r.length&&(0,d.jsx)(l,{children:r}),!!e.length&&(0,d.jsx)(u,{children:e.map((function(n){return(0,d.jsx)("li",{children:(0,d.jsxs)(p,{to:"/movies/".concat(n.id),state:{from:t},children:[n.poster_path&&(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+n.poster_path,alt:n.title}),(0,d.jsx)("div",{children:n.title})]})},n.id)}))})]})}}}]);
//# sourceMappingURL=134.47de0ac7.chunk.js.map