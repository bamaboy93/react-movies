"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[823],{3409:function(r,e,n){n.d(e,{Z:function(){return c}});var t="Container_container__BWGcJ",a=n(184),c=function(r){var e=r.children;return(0,a.jsx)("div",{className:t,children:e})}},584:function(r,e,n){n.d(e,{Z:function(){return c}});var t="LoadBtn_button__U0i+j",a=n(184);function c(r){var e=r.onBtnClick;return(0,a.jsxs)("button",{onClick:e,className:t,type:"button",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),"Load More"]})}},9938:function(r,e,n){n.d(e,{Z:function(){return s}});var t=n(5303),a=n.n(t),c="Loader_loaderContainer__AIPSh",u=n(184);function s(){return(0,u.jsx)("div",{className:c,children:(0,u.jsx)(a(),{color:"#9896f1",size:100})})}},3037:function(r,e,n){n.d(e,{Z:function(){return f}});var t=n(3504),a=n(6871),c=n(4462),u="MovieData_moviesList__CwI+f",s="MovieData_moviesItem__ohZB7",o="MovieData_movieCard__6M+qA",i="MovieData_poster__zNshO",l="MovieData_movieTitle__olQ39",p="MovieData_vote__AsXTQ",v="MovieData_voteOverlay__lWDw+",d=n(184);function f(r){var e=r.movies,n=(0,a.TH)();function f(r){var e=r.toFixed();return e>=8?"#7dd87d":e<8&&e>=5?"#eec60a":"#eb2632"}return(0,d.jsx)("div",{children:(0,d.jsx)("ul",{className:u,children:e.map((function(r){var e=r.id,a=r.poster_path,u=r.title,h=r.vote_average;return(0,d.jsx)("li",{className:s,children:(0,d.jsxs)(t.rU,{to:"".concat(n.pathname,"/").concat(e),children:[(0,d.jsx)("div",{className:v,children:(0,d.jsx)("p",{style:{color:f(h)},className:p,children:h.toFixed()})}),(0,d.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"".concat(c),alt:u,className:i}),(0,d.jsx)("div",{className:o,children:(0,d.jsx)("p",{className:l,children:u})})]})},e)}))})})}},9628:function(r,e,n){n.d(e,{Z:function(){return u}});var t=n(3504),a={linkContainer:"Navigation_linkContainer__KaXWq",link:"Navigation_link__ImyVo",active:"Navigation_active__x+RI1"},c=n(184);function u(){return(0,c.jsxs)("div",{className:a.linkContainer,children:[(0,c.jsx)("span",{className:a.item,children:(0,c.jsx)(t.OL,{className:function(r){return r.isActive?a.active:a.link},to:"/trending",children:"Trending Movies"})}),(0,c.jsx)("span",{className:a.item,children:(0,c.jsx)(t.OL,{className:function(r){return r.isActive?a.active:a.link},to:"/upcoming",children:"Upcoming"})})]})}},1852:function(r,e,n){var t=n(8214),a=n(5861),c=n(4569),u=n.n(c);function s(){return(s=(0,a.Z)((0,t.Z)().mark((function r(){var e,n,a;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e={url:"/movie/popular"},r.next=4,u()(e);case 4:return n=r.sent,a=n.data,r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function o(){return(o=(0,a.Z)((0,t.Z)().mark((function r(){var e,n,a;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e={url:"trending/movie/day"},r.next=4,u()(e);case 4:return n=r.sent,a=n.data,r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function i(){return(i=(0,a.Z)((0,t.Z)().mark((function r(){var e,n,a;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e={url:"/movie/upcoming"},r.next=4,u()(e);case 4:return n=r.sent,a=n.data,r.abrupt("return",a);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=(0,a.Z)((0,t.Z)().mark((function r(e,n){var a,c,s;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a={url:"search/movie",params:{query:e,page:n}},r.next=4,u()(a,e,n);case 4:return c=r.sent,s=c.data,r.abrupt("return",s.results);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=(0,a.Z)((0,t.Z)().mark((function r(e){var n,a,c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n={url:"movie/".concat(e)},r.next=4,u()(n,e);case 4:return a=r.sent,c=a.data,r.abrupt("return",c);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=(0,a.Z)((0,t.Z)().mark((function r(e){var n,a,c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n={url:"movie/".concat(e,"/credits")},r.next=4,u()(n,e);case 4:return a=r.sent,c=a.data,r.abrupt("return",c.cast);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function d(){return(d=(0,a.Z)((0,t.Z)().mark((function r(e){var n,a,c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n={url:"movie/".concat(e,"/videos")},r.next=4,u()(n,e);case 4:return a=r.sent,c=a.data,r.abrupt("return",c.results);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function f(){return(f=(0,a.Z)((0,t.Z)().mark((function r(e){var n,a,c;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,n={url:"movie/".concat(e,"/images")},r.next=4,u()(n,e);case 4:return a=r.sent,c=a.data,r.abrupt("return",c.results);case 9:return r.prev=9,r.t0=r.catch(0),console.log("error",{error:r.t0}),r.abrupt("return",null);case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}u().defaults.baseURL="https://api.themoviedb.org/3/",u().defaults.params={api_key:"a7722589dc29fac056c18bf39b029797",language:"en-US"};var h={getPopularMovies:function(){return s.apply(this,arguments)},getTrendingMovies:function(){return o.apply(this,arguments)},getUpcomingMovies:function(){return i.apply(this,arguments)},getMoviesByQuery:function(r,e){return l.apply(this,arguments)},getMovieById:function(r){return p.apply(this,arguments)},getCastInfo:function(r){return v.apply(this,arguments)},getMovieVideo:function(r){return d.apply(this,arguments)},getMovieImages:function(r){return f.apply(this,arguments)}};e.Z=h},2019:function(r,e){e.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},3823:function(r,e,n){n.r(e),n.d(e,{default:function(){return d}});var t=n(885),a=n(2791),c=n(2019),u=n(1852),s=n(3409),o=n(9938),i=n(584),l=n(3037),p=n(9628),v=n(184);function d(){var r=(0,a.useState)(null),e=(0,t.Z)(r,2),n=e[0],d=e[1],f=(0,a.useState)(null),h=(0,t.Z)(f,2),m=h[0],x=h[1],Z=(0,a.useState)(c.Z.IDLE),g=(0,t.Z)(Z,2),_=g[0],j=g[1];return(0,a.useEffect)((function(){j(c.Z.PENDING),u.Z.getTrendingMovies().then((function(r){var e=r.results;d(e),j(c.Z.RESOLVED)})).catch((function(r){console.log(r),x(r),j(c.Z.REJECTED)}))}),[m]),(0,v.jsx)("main",{children:(0,v.jsxs)(s.Z,{children:[(0,v.jsx)(p.Z,{}),_===c.Z.PENDING&&(0,v.jsx)(o.Z,{}),_===c.Z.REJECTED,_===c.Z.RESOLVED&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.Z,{movies:n}),(0,v.jsx)(i.Z,{})]})]})})}},4462:function(r,e,n){r.exports=n.p+"static/media/noimage.6e24877a189479ece38e.jpg"}}]);
//# sourceMappingURL=823.9a97a0a1.chunk.js.map