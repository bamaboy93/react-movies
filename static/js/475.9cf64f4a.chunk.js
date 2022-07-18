"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[475],{173:function(e,r,t){t.d(r,{Z:function(){return c}});var n="Container_container__BWGcJ",a=t(184),c=function(e){var r=e.children;return(0,a.jsx)("div",{className:n,children:r})}},698:function(e,r,t){t.d(r,{Z:function(){return s}});var n="ErrorWrapper_wrapper__0I-pi",a="ErrorWrapper_title__6+4I+",c="ErrorWrapper_text__G+nQD",u=t(184);function s(e){var r=e.query;return(0,u.jsxs)("div",{className:n,children:[(0,u.jsx)("h2",{className:a,children:"Oops!"}),(0,u.jsxs)("p",{className:c,children:['There are no related movies for "',r,'".']})]})}},1316:function(e,r,t){t.d(r,{Z:function(){return v}});var n=t(3504),a=t(6871),c=t(7758),u="MovieData_moviesList__CwI+f",s="MovieData_moviesItem__ohZB7",o="MovieData_movieCard__6M+qA",i="MovieData_movieTitle__olQ39",l="MovieData_vote__AsXTQ",p="MovieData_voteOverlay__lWDw+",f=t(184);function v(e){var r=e.movies,t=(0,a.TH)();function v(e){var r=e.toFixed();return r>=8?"#7dd87d":r<8&&r>=5?"#eec60a":"#eb2632"}return(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:u,children:r.map((function(e){var r=e.id,a=e.poster_path,u=e.title,h=e.vote_average;return(0,f.jsx)("li",{className:s,children:(0,f.jsxs)(n.rU,{to:"".concat(t.pathname,"/").concat(r),children:[(0,f.jsx)("div",{className:p,children:(0,f.jsx)("p",{style:{color:v(h)},className:l,children:h.toFixed()})}),(0,f.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):"".concat(c),alt:u}),(0,f.jsx)("div",{className:o,children:(0,f.jsx)("p",{className:i,children:u})})]})},r)}))})})}},4040:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(7169),a="Pagination_wrapper__aysuB",c=t(184);function u(e){var r=e.page,t=e.totalpages,u=e.onChange,s=t>500?500:t;return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.Z,{count:s,page:r,onChange:u})})}},6951:function(e,r,t){var n=t(885),a=t(2791);r.Z=function(e,r){var t=(0,a.useState)(1),c=(0,n.Z)(t,2),u=c[0],s=c[1],o=e;return{next:function(){s((function(e){return Math.min(e+1,o)}))},prev:function(){s((function(e){return Math.max(e-1,1)}))},jump:function(e){var r=Math.max(1,e);s((function(e){return Math.min(r,o)}))},currentData:function(){var t=(u-1)*r,n=t+r;return e.slice(t,n)},currentPage:u,maxPage:o}}},1852:function(e,r,t){var n=t(4165),a=t(5861),c=t(4569),u=t.n(c);function s(){return(s=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"/movie/popular",params:{page:r}},e.next=4,u()(t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function o(){return(o=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"/movie/top_rated",params:{page:r}},e.next=4,u()(t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function i(){return(i=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"/movie/upcoming",params:{page:r}},e.next=4,u()(t);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,c,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={url:"search/movie",params:{query:r,page:t}},e.next=4,u()(a);case 4:return c=e.sent,s=c.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r)},e.next=4,u()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(){return(f=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/credits")},e.next=4,u()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.cast);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/videos")},e.next=4,u()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function h(){return(h=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/images")},e.next=4,u()(t,r);case 4:return a=e.sent,c=a.data,e.abrupt("return",c.backdrops);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}u().defaults.baseURL="https://api.themoviedb.org/3/",u().defaults.params={api_key:"a7722589dc29fac056c18bf39b029797",language:"en-US",include_image_language:"en,null"};var m={getPopularMovies:function(e){return s.apply(this,arguments)},getTopRatedMovies:function(e){return o.apply(this,arguments)},getUpcomingMovies:function(e){return i.apply(this,arguments)},getMoviesByQuery:function(e,r){return l.apply(this,arguments)},getMovieById:function(e){return p.apply(this,arguments)},getCastInfo:function(e){return f.apply(this,arguments)},getMovieVideo:function(e){return v.apply(this,arguments)},getMovieImages:function(e){return h.apply(this,arguments)}};r.Z=m},2019:function(e,r){r.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},9475:function(e,r,t){t.r(r),t.d(r,{default:function(){return L}});var n,a,c,u,s,o,i=t(885),l=t(2791),p=t(6871),f=t(2019),v=t(1852),h=t(6951),m=t(1316),d=t(698),g=t(6960),x=["title","titleId"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},_.apply(this,arguments)}function Z(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function y(e,r){var t=e.title,i=e.titleId,p=Z(e,x);return l.createElement("svg",_({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"30px",height:"30px",ref:r,"aria-labelledby":i},p),t?l.createElement("title",{id:i},t):null,n||(n=l.createElement("path",{d:"M82.047,94.126c-3.179-0.073-6.167-1.436-8.351-3.834L56.753,71.684 c-4.408,2.152-9.269,3.275-14.272,3.275c-8.755,0-16.949-3.373-23.073-9.498c-6.15-6.149-9.538-14.327-9.538-23.026 s3.388-16.877,9.539-23.027c6.149-6.15,14.327-9.538,23.026-9.538s16.877,3.388,23.027,9.539 c9.916,9.915,12.252,25.023,6.223,37.346l18.607,16.941c2.398,2.185,3.761,5.173,3.836,8.415c0.076,3.24-1.146,6.288-3.439,8.581 c-2.216,2.217-5.164,3.439-8.3,3.439C82.274,94.131,82.161,94.13,82.047,94.126z",opacity:.35})),a||(a=l.createElement("path",{fill:"#f2f2f2",d:"M80.047,92.126c-3.179-0.073-6.167-1.436-8.351-3.834L54.753,69.684 c-4.408,2.152-9.269,3.275-14.272,3.275c-8.755,0-16.949-3.373-23.073-9.498c-6.15-6.149-9.538-14.327-9.538-23.026 s3.388-16.877,9.539-23.027c6.149-6.15,14.327-9.538,23.026-9.538s16.877,3.388,23.027,9.539 c9.916,9.915,12.252,25.023,6.223,37.346l18.607,16.941c2.398,2.185,3.761,5.173,3.836,8.415c0.076,3.24-1.146,6.288-3.439,8.581 c-2.216,2.217-5.164,3.439-8.3,3.439C80.274,92.131,80.161,92.13,80.047,92.126z"})),c||(c=l.createElement("path",{fill:"#707cc0",d:"M84.094,84.094L84.094,84.094c-2.118,2.118-5.576,2.037-7.592-0.178L47.855,52.451l4.596-4.596 l31.465,28.647C86.131,78.518,86.212,81.976,84.094,84.094z"})),u||(u=l.createElement("circle",{cx:39.839,cy:39.839,r:25.47,fill:"#70bfff"})),s||(s=l.createElement("path",{fill:"#40396e",d:"M80.388,87.131c-0.054,0-0.108,0-0.163-0.002c-1.862-0.043-3.578-0.825-4.833-2.203l-19.64-21.572 c-10.798,7.225-25.532,5.852-34.81-3.428c-5.207-5.206-8.074-12.128-8.074-19.491s2.867-14.285,8.074-19.491 c5.206-5.207,12.128-8.074,19.492-8.074s14.286,2.867,19.492,8.074c9.278,9.277,10.651,24.011,3.427,34.809l21.572,19.641l0,0 c1.377,1.255,2.16,2.971,2.204,4.833s-0.658,3.612-1.975,4.929C83.876,86.433,82.189,87.131,80.388,87.131z M55.97,59.864 c0.409,0,0.815,0.167,1.11,0.49l20.532,22.552c0.696,0.765,1.65,1.2,2.684,1.224c1.054,0.042,2.006-0.365,2.738-1.097 s1.121-1.703,1.097-2.737s-0.459-1.988-1.224-2.685L60.354,57.079c-0.57-0.52-0.654-1.386-0.194-2.005 c7.213-9.693,6.201-23.454-2.355-32.01c-4.64-4.64-10.809-7.195-17.371-7.195s-12.73,2.556-17.371,7.195 c-4.64,4.64-7.195,10.809-7.195,17.37s2.555,12.73,7.195,17.37c8.556,8.555,22.318,9.568,32.011,2.356 C55.343,59.962,55.657,59.864,55.97,59.864z"})),o||(o=l.createElement("path",{fill:"#d9eeff",d:"M20.369,41.935c-0.829,0-1.5-0.672-1.5-1.5c0-5.761,2.244-11.177,6.317-15.249 c1.485-1.485,3.163-2.739,4.987-3.729c0.729-0.395,1.639-0.124,2.033,0.604c0.395,0.728,0.125,1.639-0.604,2.033 c-1.569,0.852-3.015,1.933-4.295,3.213c-3.507,3.507-5.438,8.169-5.438,13.128C21.869,41.263,21.198,41.935,20.369,41.935z"})))}var b=l.forwardRef(y),w=(t.p,"SearchBar_searchForm__1V8OJ"),j="SearchBar_searchFormButton__hNbf0",E="SearchBar_searchFormButtonLabel__s1XF5",M="SearchBar_searchFormInput__--q6p",S=t(184);function D(e){var r=e.onSubmit,t=(0,l.useState)(""),n=(0,i.Z)(t,2),a=n[0],c=n[1];return(0,S.jsxs)("form",{className:w,onSubmit:function(e){e.preventDefault(),""!==a.trim()?(r(a),c("")):g.Am.warn("Please, enter your query !")},children:[(0,S.jsx)("input",{className:M,type:"text",value:a,autoComplete:"off",placeholder:"Search ...",onChange:function(e){c(e.target.value.toLowerCase())}}),(0,S.jsxs)("button",{type:"submit",className:j,children:[(0,S.jsx)(b,{}),(0,S.jsx)("span",{className:E,children:"Search"})]})]})}var C=t(4040),N="QueryView_wrapper__Y1HRi",O="QueryView_title__6QnvP",I=t(173);function L(){var e=(0,l.useState)(""),r=(0,i.Z)(e,2),t=r[0],n=r[1],a=(0,l.useState)(null),c=(0,i.Z)(a,2),u=c[0],s=c[1],o=(0,l.useState)(null),g=(0,i.Z)(o,2),x=g[0],_=g[1],Z=(0,l.useState)(null),y=(0,i.Z)(Z,2),b=y[0],w=y[1],j=(0,l.useState)(null),E=(0,i.Z)(j,2),M=E[0],L=E[1],k=(0,l.useState)(f.Z.IDLE),B=(0,i.Z)(k,2),P=B[0],R=B[1],T=(0,p.s0)(),q=(0,p.TH)();console.log(q);var F=(0,h.Z)(b,20);return(0,l.useEffect)((function(){if(""!==q.search){var e=new URLSearchParams(q.search).get("query");n(e),T({search:"query=".concat(e)})}}),[q.search,T]),(0,l.useEffect)((function(){t&&(R(f.Z.PENDING),v.Z.getMoviesByQuery(t,x).then((function(e){var r=e.results,t=e.page,n=e.total_pages;0!==r.length?(s(r),R(f.Z.RESOLVED),_(t),w(n)):R(f.Z.REJECTED)})).catch((function(e){console.log(e),L(e),R(f.Z.REJECTED)})))}),[t,x,M]),(0,S.jsxs)(I.Z,{children:[(0,S.jsx)(D,{onSubmit:function(e){e!==t&&(n(e),s(null),_(null),w(null),R(f.Z.IDLE),T({search:"query=".concat(e)}))}}),P===f.Z.IDLE&&(0,S.jsx)("div",{className:N,children:(0,S.jsx)("h2",{className:O,children:"Millions of movies, series and actors. Explore now!"})}),P===f.Z.REJECTED&&(0,S.jsx)(d.Z,{query:t}),P===f.Z.RESOLVED&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(m.Z,{movies:u}),(0,S.jsx)(C.Z,{page:x,totalpages:b,onChange:function(e,r){_(r),F.jump(r)}})]})]})}},7758:function(e,r,t){e.exports=t.p+"static/media/noimage.6e24877a189479ece38e.jpg"}}]);
//# sourceMappingURL=475.9cf64f4a.chunk.js.map