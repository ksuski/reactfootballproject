(this.webpackJsonpreactfootball=this.webpackJsonpreactfootball||[]).push([[0],{15:function(e,t,n){},30:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(24),i=n.n(r),s=n(56),o=n(57),l=n.p+"static/media/logo-reactfootball.3d6bd756.png",u=(n(30),n(15),n(0));var d=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("header",{className:"main-header d-flex justify-content-center align-items-center",children:Object(u.jsxs)(s.a,{className:"d-flex justify-content-center",children:[Object(u.jsx)(o.a,{xs:!0,md:12,lg:3,className:"d-flex justify-content-center",children:Object(u.jsx)("img",{src:l,className:"App-logo",alt:"logo"})}),Object(u.jsxs)(o.a,{xs:!0,md:12,lg:9,className:"d-flex justify-content-center align-items-center main-header-title flex-column",children:[Object(u.jsx)("h1",{children:"ReactFootball"}),Object(u.jsx)("h2",{children:"find some informations about football"})]})]})})})},f=n(4),j=n.n(f),m=n(25),b=n(8),p=n(10),g=(n(33),n.p+"static/media/Bundesliga.179ed71c.png"),x=n.p+"static/media/Primera Division.e5e90ccc.png",h=n.p+"static/media/Premier League.b460b561.png",O=n.p+"static/media/Serie A.50c8fae5.png",v=n.p+"static/media/Ligue 1.71c72fc6.png",k=n.p+"static/media/Primeira Liga.e93c5574.png";var y=function(e){var t,n=e.name;switch(e.id,n){case"Premier League":t=h;break;case"Primera Division":t=x;break;case"Serie A":t=O;break;case"Bundesliga":t=g;break;case"Ligue 1":t=v;break;case"Primeira Liga":t=k}return Object(u.jsx)(o.a,{xs:12,md:6,lg:4,className:"d-flex justify-content-center align-items-center flex-column p-3 single-competition",children:Object(u.jsx)("img",{src:t,alt:n})})},F=(n(34),n(13)),L=n.n(F),N={"Content-Type":"application/json","X-Auth-Token":"88ed991946ea4e3ea3e3e5eca182aff5"},P=function(){var e=Object(b.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get("https://api.football-data.org/v2/competitions/".concat(t),{headers:N});case 2:return n=e.sent,a=n.data,e.abrupt("return",{id:a.id,name:a.name});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=n(58),S=[2021,2014,2019,2002,2015,2017];var A=function(){Object(a.useEffect)((function(){r()}),[]);var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1],r=function(){var e=Object(b.a)(j.a.mark((function e(){var t,n,a,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=Object(m.a)(S),e.prev=2,n.s();case 4:if((a=n.n()).done){e.next=12;break}return r=a.value,e.next=8,P(r);case 8:i=e.sent,t.push(i);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:console.log(t),c(t);case 22:case"end":return e.stop()}}),e,null,[[2,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(w.a,{className:"featured-competitions",children:[Object(u.jsx)("h2",{className:"text-center",children:"Featured Leagues"}),Object(u.jsx)(s.a,{className:"d-flex",children:n.map((function(e){var t=e.id,n=e.name;return Object(u.jsx)(y,{name:n},t)}))})]})})};n(53),n(54);var B=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{}),Object(u.jsx)(A,{})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(B,{})}),document.getElementById("root")),C()}},[[55,1,2]]]);
//# sourceMappingURL=main.0b7f864b.chunk.js.map