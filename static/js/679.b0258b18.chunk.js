"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[679],{3679:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(5861),i=t(9439),o=t(4687),s=t.n(o),a=t(2791),c=t(7689),l=t(7963),p=t(4146),d=t(184);function f(){var n=(0,c.TH)(),e=(0,a.useState)([]),t=(0,i.Z)(e,2),o=t[0],f=t[1],u=(0,a.useState)(!1),h=(0,i.Z)(u,2),m=h[0],x=h[1];return(0,a.useEffect)((function(){(0,r.Z)(s().mark((function n(){var e,t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(!0),n.prev=1,n.next=4,l.Tg();case 4:e=n.sent,t=e.results,f(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log("Error fetching images",n.t0.message);case 12:return n.prev=12,x(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})))()}),[]),(0,d.jsx)(d.Fragment,{children:m?(0,d.jsx)("div",{children:"Loading movies..."}):(0,d.jsx)(p.Z,{movies:o,location:n,title:"Trending movies"})})}},4146:function(n,e,t){t.d(e,{Z:function(){return u}});var r,i,o,s=t(168),a=t(1087),c=t(8789),l=c.ZP.h1(r||(r=(0,s.Z)(["\n  margin-bottom: 20px;\n"]))),p=c.ZP.ul(i||(i=(0,s.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 32px;\n  margin-top: 32px;\n  padding: 0;\n  list-style: none;\n"]))),d=(0,c.ZP)(a.rU)(o||(o=(0,s.Z)(["\n  display: flex;\n  font-size: 30px;\n  font-weight: 700;\n  text-decoration: none;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  overflow: hidden;\n  border-radius: 4px;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);\n  background-color: #ffffffbc;\n  position: relative;\n  z-index: 1;\n  transition: transform 0.3s ease-in-out;\n  &:before {\n    content: '';\n    display: block;\n    padding-top: 150%;\n  }\n\n  &:hover {\n    transform: scale(1.4);\n    z-index: 2;\n  }\n\n  > img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),f=t(184);function u(n){var e=n.movies,t=n.location,r=n.title;return(0,f.jsxs)(f.Fragment,{children:[!!r.length&&(0,f.jsx)(l,{children:r}),!!e.length&&(0,f.jsx)(p,{children:e.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsxs)(d,{to:"/movies/".concat(n.id),state:{from:t},children:[n.poster_path&&(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w300"+n.poster_path,alt:n.title}),(0,f.jsx)("div",{children:n.title})]})},n.id)}))})]})}}}]);
//# sourceMappingURL=679.b0258b18.chunk.js.map