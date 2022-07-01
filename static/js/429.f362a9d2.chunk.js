"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[429],{173:function(e,r,t){t.d(r,{Z:function(){return c}});var n="Container_container__BWGcJ",a=t(184),c=function(e){var r=e.children;return(0,a.jsx)("div",{className:n,children:r})}},1316:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(3504),a=t(6871),c=t(7758),u="MovieData_moviesList__CwI+f",s="MovieData_moviesItem__ohZB7",o="MovieData_movieCard__6M+qA",i="MovieData_poster__zNshO",l="MovieData_movieTitle__olQ39",p="MovieData_vote__AsXTQ",f="MovieData_voteOverlay__lWDw+",v=t(184);function h(e){var r=e.movies,t=(0,a.TH)();function h(e){var r=e.toFixed();return r>=8?"#7dd87d":r<8&&r>=5?"#eec60a":"#eb2632"}return(0,v.jsx)("div",{children:(0,v.jsx)("ul",{className:u,children:r.map((function(e){var r=e.id,a=e.poster_path,u=e.title,m=e.vote_average;return(0,v.jsx)("li",{className:s,children:(0,v.jsxs)(n.rU,{to:"".concat(t.pathname,"/").concat(r),children:[(0,v.jsx)("div",{className:f,children:(0,v.jsx)("p",{style:{color:h(m)},className:p,children:m.toFixed()})}),(0,v.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"".concat(c),alt:u,className:i}),(0,v.jsx)("div",{className:o,children:(0,v.jsx)("p",{className:l,children:u})})]})},r)}))})})}},2709:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(3504),a={linkContainer:"Navigation_linkContainer__KaXWq",link:"Navigation_link__ImyVo",active:"Navigation_active__x+RI1"},c=t(184);function u(){return(0,c.jsxs)("div",{className:a.linkContainer,children:[(0,c.jsx)("span",{className:a.item,children:(0,c.jsx)(n.OL,{className:function(e){return e.isActive?a.active:a.link},to:"/top_rated",children:"Top Rated Movies"})}),(0,c.jsx)("span",{className:a.item,children:(0,c.jsx)(n.OL,{className:function(e){return e.isActive?a.active:a.link},to:"/upcoming",children:"Upcoming"})})]})}},4040:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(7169),a="Pagination_wrapper__aysuB",c=t(184);function u(e){var r=e.page,t=e.totalpages,u=e.onChange,s=t>500?500:t;return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.Z,{count:s,page:r,onChange:u})})}},8330:function(e,r,t){var n=t(885),a=t(2791);r.Z=function(e,r){var t=(0,a.useState)(1),c=(0,n.Z)(t,2),u=c[0],s=c[1],o=e;return{next:function(){s((function(e){return Math.min(e+1,o)}))},prev:function(){s((function(e){return Math.max(e-1,1)}))},jump:function(e){var r=Math.max(1,e);s((function(e){return Math.min(r,o)}))},currentData:function(){var t=(u-1)*r,n=t+r;return e.slice(t,n)},currentPage:u,maxPage:o}}},1852:function(e,r,t){var n=t(4165),a=t(5861),c=t(4569),u=t.n(c);function s(){return(s=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"/movie/popular",params:{page:r}},e.next=4,u()(t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function o(){return(o=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"/movie/top_rated",params:{page:r}},e.next=4,u()(t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function i(){return(i=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"/movie/upcoming",params:{page:r}},e.next=4,u()(t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,c,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={url:"search/movie",params:{query:r,page:t}},e.next=4,u()(a);case 4:return c=e.sent,s=c.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r)},e.next=4,u()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(){return(f=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/credits")},e.next=4,u()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.cast);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/videos")},e.next=4,u()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(){return(h=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/images")},e.next=4,u()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}u().defaults.baseURL="https://api.themoviedb.org/3/",u().defaults.params={api_key:"a7722589dc29fac056c18bf39b029797",language:"en-US"};var m={getPopularMovies:function(e){return s.apply(this,arguments)},getTopRatedMovies:function(e){return o.apply(this,arguments)},getUpcomingMovies:function(e){return i.apply(this,arguments)},getMoviesByQuery:function(e,r){return l.apply(this,arguments)},getMovieById:function(e){return p.apply(this,arguments)},getCastInfo:function(e){return f.apply(this,arguments)},getMovieVideo:function(e){return v.apply(this,arguments)},getMovieImages:function(e){return h.apply(this,arguments)}};r.Z=m},2019:function(e,r){r.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},1429:function(e,r,t){t.r(r),t.d(r,{default:function(){return R}});var n=t(885),a=t(2791),c=t(6871),u=t(2019),s=t(1852),o=t(173),i=t(1316),l="ErrorWrapper_wrapper__0I-pi",p="ErrorWrapper_title__6+4I+",f="ErrorWrapper_text__G+nQD",v=t(184);function h(e){var r=e.query;return(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("h2",{className:p,children:"Oops!"}),(0,v.jsxs)("p",{className:f,children:['There are no related movies for "',r,'".']})]})}var m,d,g,x,_,Z,y=t(2709),b=t(8926),E=["title","titleId"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},j.apply(this,arguments)}function w(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function N(e,r){var t=e.title,n=e.titleId,c=w(e,E);return a.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"30px",height:"30px",ref:r,"aria-labelledby":n},c),t?a.createElement("title",{id:n},t):null,m||(m=a.createElement("path",{d:"M82.047,94.126c-3.179-0.073-6.167-1.436-8.351-3.834L56.753,71.684 c-4.408,2.152-9.269,3.275-14.272,3.275c-8.755,0-16.949-3.373-23.073-9.498c-6.15-6.149-9.538-14.327-9.538-23.026 s3.388-16.877,9.539-23.027c6.149-6.15,14.327-9.538,23.026-9.538s16.877,3.388,23.027,9.539 c9.916,9.915,12.252,25.023,6.223,37.346l18.607,16.941c2.398,2.185,3.761,5.173,3.836,8.415c0.076,3.24-1.146,6.288-3.439,8.581 c-2.216,2.217-5.164,3.439-8.3,3.439C82.274,94.131,82.161,94.13,82.047,94.126z",opacity:.35})),d||(d=a.createElement("path",{fill:"#f2f2f2",d:"M80.047,92.126c-3.179-0.073-6.167-1.436-8.351-3.834L54.753,69.684 c-4.408,2.152-9.269,3.275-14.272,3.275c-8.755,0-16.949-3.373-23.073-9.498c-6.15-6.149-9.538-14.327-9.538-23.026 s3.388-16.877,9.539-23.027c6.149-6.15,14.327-9.538,23.026-9.538s16.877,3.388,23.027,9.539 c9.916,9.915,12.252,25.023,6.223,37.346l18.607,16.941c2.398,2.185,3.761,5.173,3.836,8.415c0.076,3.24-1.146,6.288-3.439,8.581 c-2.216,2.217-5.164,3.439-8.3,3.439C80.274,92.131,80.161,92.13,80.047,92.126z"})),g||(g=a.createElement("path",{fill:"#707cc0",d:"M84.094,84.094L84.094,84.094c-2.118,2.118-5.576,2.037-7.592-0.178L47.855,52.451l4.596-4.596 l31.465,28.647C86.131,78.518,86.212,81.976,84.094,84.094z"})),x||(x=a.createElement("circle",{cx:39.839,cy:39.839,r:25.47,fill:"#70bfff"})),_||(_=a.createElement("path",{fill:"#40396e",d:"M80.388,87.131c-0.054,0-0.108,0-0.163-0.002c-1.862-0.043-3.578-0.825-4.833-2.203l-19.64-21.572 c-10.798,7.225-25.532,5.852-34.81-3.428c-5.207-5.206-8.074-12.128-8.074-19.491s2.867-14.285,8.074-19.491 c5.206-5.207,12.128-8.074,19.492-8.074s14.286,2.867,19.492,8.074c9.278,9.277,10.651,24.011,3.427,34.809l21.572,19.641l0,0 c1.377,1.255,2.16,2.971,2.204,4.833s-0.658,3.612-1.975,4.929C83.876,86.433,82.189,87.131,80.388,87.131z M55.97,59.864 c0.409,0,0.815,0.167,1.11,0.49l20.532,22.552c0.696,0.765,1.65,1.2,2.684,1.224c1.054,0.042,2.006-0.365,2.738-1.097 s1.121-1.703,1.097-2.737s-0.459-1.988-1.224-2.685L60.354,57.079c-0.57-0.52-0.654-1.386-0.194-2.005 c7.213-9.693,6.201-23.454-2.355-32.01c-4.64-4.64-10.809-7.195-17.371-7.195s-12.73,2.556-17.371,7.195 c-4.64,4.64-7.195,10.809-7.195,17.37s2.555,12.73,7.195,17.37c8.556,8.555,22.318,9.568,32.011,2.356 C55.343,59.962,55.657,59.864,55.97,59.864z"})),Z||(Z=a.createElement("path",{fill:"#d9eeff",d:"M20.369,41.935c-0.829,0-1.5-0.672-1.5-1.5c0-5.761,2.244-11.177,6.317-15.249 c1.485-1.485,3.163-2.739,4.987-3.729c0.729-0.395,1.639-0.124,2.033,0.604c0.395,0.728,0.125,1.639-0.604,2.033 c-1.569,0.852-3.015,1.933-4.295,3.213c-3.507,3.507-5.438,8.169-5.438,13.128C21.869,41.263,21.198,41.935,20.369,41.935z"})))}var M=a.forwardRef(N),D=(t.p,"SearchBar_searchForm__1V8OJ"),C="SearchBar_searchFormButton__hNbf0",S="SearchBar_searchFormButtonLabel__s1XF5",O="SearchBar_searchFormInput__--q6p";function k(e){var r=e.onSubmit,t=(0,a.useState)(""),c=(0,n.Z)(t,2),u=c[0],s=c[1];return(0,v.jsxs)("form",{className:D,onSubmit:function(e){e.preventDefault(),""!==u.trim()?(r(u),s("")):b.Am.warn("Please, enter your query !")},children:[(0,v.jsx)("input",{className:O,type:"text",value:u,autoComplete:"off",placeholder:"Search ...",onChange:function(e){s(e.target.value.toLowerCase())}}),(0,v.jsxs)("button",{type:"submit",className:C,children:[(0,v.jsx)(M,{}),(0,v.jsx)("span",{className:S,children:"Search"})]})]})}var I=t(4040),L=t(8330);var R=function(){var e=(0,c.TH)().search,r=(0,a.useState)(""),t=(0,n.Z)(r,2),l=t[0],p=t[1],f=(0,a.useState)(null),m=(0,n.Z)(f,2),d=m[0],g=m[1],x=(0,a.useState)(1),_=(0,n.Z)(x,2),Z=_[0],b=_[1],E=(0,a.useState)(null),j=(0,n.Z)(E,2),w=j[0],N=j[1],M=(0,a.useState)(null),D=(0,n.Z)(M,2),C=D[0],S=D[1],O=(0,a.useState)(u.Z.IDLE),R=(0,n.Z)(O,2),P=R[0],B=R[1],T=(0,L.Z)(w,20);return(0,a.useEffect)((function(){B(u.Z.PENDING),s.Z.getPopularMovies(Z).then((function(e){var r=e.results,t=e.page,n=e.total_pages;g(r),b(t),N(n),B(u.Z.RESOLVED)})).catch((function(e){S(e),console.log(e),B(u.Z.REJECTED)}))}),[Z]),(0,a.useEffect)((function(){if(""!==e){var r=new URLSearchParams(e).get("query");p(r)}}),[e]),(0,a.useEffect)((function(){l&&(B(u.Z.PENDING),s.Z.getMoviesByQuery(l,Z).then((function(e){var r=e.results,t=e.page,n=e.total_pages;0!==r.length?(g(r),B(u.Z.RESOLVED),b(t),N(n)):B(u.Z.REJECTED)})).catch((function(e){console.log(e),S(e),B(u.Z.REJECTED)})))}),[l,Z,C]),(0,v.jsx)("main",{children:(0,v.jsxs)(o.Z,{children:[(0,v.jsx)(k,{onSubmit:function(e){e!==l&&(p(e),g(null),b(1),N(null),B(u.Z.IDLE))}}),(0,v.jsx)(y.Z,{}),P===u.Z.PENDING,P===u.Z.REJECTED&&(0,v.jsx)(h,{query:l}),P===u.Z.RESOLVED&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.Z,{movies:d}),w>1&&(0,v.jsx)(I.Z,{page:Z,totalpages:w,onChange:function(e,r){b(r),T.jump(r)}})]})]})})}},7758:function(e,r,t){e.exports=t.p+"static/media/noimage.6e24877a189479ece38e.jpg"}}]);
//# sourceMappingURL=429.f362a9d2.chunk.js.map