"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[699],{584:function(e,r,t){t.d(r,{Z:function(){return c}});var n="LoadBtn_btn__ZjH7U",a=t(184);function c(e){var r=e.onBtnClick;return(0,a.jsxs)("button",{onClick:r,className:n,type:"button",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),"Load More"]})}},9938:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(5303),a=t.n(n),c="Loader_loaderContainer__AIPSh",s=t(184);function o(){return(0,s.jsx)("div",{className:c,children:(0,s.jsx)(a(),{color:"#9896f1",size:100})})}},3037:function(e,r,t){t.d(r,{Z:function(){return d}});var n=t(3504),a=t(6871),c=t(4462),s="MovieData_moviesList__CwI+f",o="MovieData_moviesItem__ohZB7",u="MovieData_movieCard__6M+qA",i="MovieData_poster__zNshO",l="MovieData_movieTitle__olQ39",p="MovieData_vote__AsXTQ",v="MovieData_voteOverlay__lWDw+",f=t(184);function d(e){var r=e.movies,t=(0,a.TH)();function d(e){var r=e.toFixed();return r>=8?"#7dd87d":r<8&&r>=5?"#eec60a":"#eb2632"}return console.log(t),console.log(r),(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:s,children:r.map((function(e){var r=e.id,a=e.poster_path,s=e.title,h=e.vote_average;return(0,f.jsx)("li",{className:o,children:(0,f.jsxs)(n.rU,{to:"".concat(t.pathname,"/").concat(r),children:[(0,f.jsx)("div",{className:v,children:(0,f.jsx)("p",{style:{color:d(h)},className:p,children:h.toFixed()})}),(0,f.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"".concat(c),alt:s,className:i}),(0,f.jsx)("div",{className:u,children:(0,f.jsx)("p",{className:l,children:s})})]})},r)}))})})}},9628:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(3504),a={linkContainer:"Navigation_linkContainer__KaXWq",link:"Navigation_link__ImyVo",active:"Navigation_active__x+RI1"},c=t(184);function s(){return(0,c.jsxs)("div",{className:a.linkContainer,children:[(0,c.jsx)("span",{className:a.item,children:(0,c.jsx)(n.OL,{className:function(e){return e.isActive?a.active:a.link},to:"/trending",children:"Trending Movies"})}),(0,c.jsx)("span",{className:a.item,children:(0,c.jsx)(n.OL,{className:function(e){return e.isActive?a.active:a.link},to:"/upcoming",children:"Upcoming"})})]})}},1852:function(e,r,t){var n=t(8214),a=t(5861),c=t(4569),s=t.n(c);function o(){return(o=(0,a.Z)((0,n.Z)().mark((function e(){var r,t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"/movie/popular"},e.next=4,s()(r);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function u(){return(u=(0,a.Z)((0,n.Z)().mark((function e(){var r,t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"trending/movie/day"},e.next=4,s()(r);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function i(){return(i=(0,a.Z)((0,n.Z)().mark((function e(){var r,t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"/movie/upcoming"},e.next=4,s()(r);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,c,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={url:"search/movie",params:{query:r,page:t}},e.next=4,s()(a,r,t);case 4:return c=e.sent,o=c.data,e.abrupt("return",o.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r)},e.next=4,s()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/credits")},e.next=4,s()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.cast);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(){return(f=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/videos")},e.next=4,s()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(){return(d=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/images")},e.next=4,s()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}s().defaults.baseURL="https://api.themoviedb.org/3/",s().defaults.params={api_key:"a7722589dc29fac056c18bf39b029797",language:"en-US"};var h={getPopularMovies:function(){return o.apply(this,arguments)},getTrendingMovies:function(){return u.apply(this,arguments)},getUpcomingMovies:function(){return i.apply(this,arguments)},getMoviesByQuery:function(e,r){return l.apply(this,arguments)},getMovieById:function(e){return p.apply(this,arguments)},getCastInfo:function(e){return v.apply(this,arguments)},getMovieVideo:function(e){return f.apply(this,arguments)},getMovieImages:function(e){return d.apply(this,arguments)}};r.Z=h},2019:function(e,r){r.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},8699:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(885),a=t(2791),c=t(2019),s=t(1852),o=t(3409),u=t(9938),i=t(584),l=t(3037),p=t(9628),v=t(184);function f(){var e=(0,a.useState)(null),r=(0,n.Z)(e,2),t=r[0],f=r[1],d=(0,a.useState)(null),h=(0,n.Z)(d,2),m=h[0],x=h[1],Z=(0,a.useState)(c.Z.IDLE),g=(0,n.Z)(Z,2),_=g[0],j=g[1];return(0,a.useEffect)((function(){j(c.Z.PENDING),s.Z.getUpcomingMovies().then((function(e){var r=e.results;f(r),j(c.Z.RESOLVED)})).catch((function(e){console.log(e),x(e),j(c.Z.REJECTED)}))}),[m]),(0,v.jsx)("main",{children:(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(p.Z,{}),_===c.Z.PENDING&&(0,v.jsx)(u.Z,{}),_===c.Z.REJECTED,_===c.Z.RESOLVED&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l.Z,{movies:t}),(0,v.jsx)(i.Z,{})]})]})})}},4462:function(e,r,t){e.exports=t.p+"static/media/noimage.6e24877a189479ece38e.jpg"}}]);
//# sourceMappingURL=699.c387f628.chunk.js.map