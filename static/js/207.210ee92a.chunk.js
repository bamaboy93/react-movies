"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[207],{3409:function(e,r,t){t.d(r,{Z:function(){return s}});var n="Container_container__BWGcJ",a=t(184),s=function(e){var r=e.children;return(0,a.jsx)("div",{className:n,children:r})}},1852:function(e,r,t){var n=t(8214),a=t(5861),s=t(4569),i=t.n(s);function o(){return(o=(0,a.Z)((0,n.Z)().mark((function e(){var r,t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"/movie/popular"},e.next=4,i()(r);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function c(){return(c=(0,a.Z)((0,n.Z)().mark((function e(){var r,t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"trending/movie/day"},e.next=4,i()(r);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=(0,a.Z)((0,n.Z)().mark((function e(){var r,t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"/movie/upcoming"},e.next=4,i()(r);case 4:return t=e.sent,a=t.data,e.abrupt("return",a);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function u(){return(u=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,s,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={url:"search/movie",params:{query:r,page:t}},e.next=4,i()(a,r,t);case 4:return s=e.sent,o=s.data,e.abrupt("return",o.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r)},e.next=4,i()(t,r);case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/credits")},e.next=4,i()(t,r);case 4:return a=e.sent,s=a.data,e.abrupt("return",s.cast);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(){return(d=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/videos")},e.next=4,i()(t,r);case 4:return a=e.sent,s=a.data,e.abrupt("return",s.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function f(){return(f=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={url:"movie/".concat(r,"/images")},e.next=4,i()(t,r);case 4:return a=e.sent,s=a.data,e.abrupt("return",s.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3/",i().defaults.params={api_key:"a7722589dc29fac056c18bf39b029797",language:"en-US"};var m={getPopularMovies:function(){return o.apply(this,arguments)},getTrendingMovies:function(){return c.apply(this,arguments)},getUpcomingMovies:function(){return l.apply(this,arguments)},getMoviesByQuery:function(e,r){return u.apply(this,arguments)},getMovieById:function(e){return p.apply(this,arguments)},getCastInfo:function(e){return v.apply(this,arguments)},getMovieVideo:function(e){return d.apply(this,arguments)},getMovieImages:function(e){return f.apply(this,arguments)}};r.Z=m},2019:function(e,r){r.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},4300:function(e,r,t){t.r(r),t.d(r,{default:function(){return ve}});var n=t(885),a=t(2791),s=t(6871),i=t(4805),o=t(2019),c=t(1852),l=t(4462),u=t(3409),p=t(4164),v="PopUp_modaloverlay__moAxw",d="PopUp_modal__EdV28",f=t(184),m=document.querySelector("#modal-root"),h=function(e){var r=e.onClose,t=e.children;(0,a.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&r()};return(0,p.createPortal)((0,f.jsx)("div",{className:v,onClick:function(e){e.currentTarget===e.target&&r()},children:(0,f.jsx)("div",{className:d,children:t})}),m)},_=t(7762),x="Trailer_iframe__dcjgv",j=t.p+"static/media/YouTube.4bde010940277341b250.jpg";function g(){return(0,f.jsx)("div",{children:(0,f.jsx)("img",{src:j,alt:"nothing-found",style:{height:540,width:960}})})}function b(){var e=(0,s.UO)().movieId,r=(0,a.useState)(null),t=(0,n.Z)(r,2),i=t[0],l=t[1],u=(0,a.useState)(o.Z.IDLE),p=(0,n.Z)(u,2),v=p[0],d=p[1],m=(0,a.useState)(null),h=(0,n.Z)(m,2),j=h[0],b=h[1];return(0,a.useEffect)((function(){c.Z.getMovieVideo(e).then((function(e){var r,t=[],n=(0,_.Z)(e);try{for(n.s();!(r=n.n()).done;){var a=r.value;"Trailer"===a.type&&t.push(a)}}catch(s){n.e(s)}finally{n.f()}l(t),d(o.Z.RESOLVED)})).catch((function(e){b(e),d(o.Z.REJECTED)}))}),[e]),(0,f.jsxs)(f.Fragment,{children:[v===o.Z.RESOLVED&&(0,f.jsxs)("ul",{children:[i.slice(0,1).map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)("iframe",{className:x,src:"https://www.youtube.com/embed/".concat(e.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},e.id)})),(0,f.jsx)("li",{children:0===i.length&&(0,f.jsx)(g,{})})]}),v===o.Z.REJECTED&&(0,f.jsx)("p",{children:j.message})]})}var D,y,Z="Cast_title__FSZf0",E="Cast_block__AvRfa",M="Cast_item__1Wkyx",w="Cast_cast__yZeik";function N(){var e=(0,s.UO)().movieId,r=(0,a.useState)(null),t=(0,n.Z)(r,2),i=t[0],l=t[1],u=(0,a.useState)(null),p=(0,n.Z)(u,2),v=p[0],d=p[1],m=(0,a.useState)(o.Z.IDLE),h=(0,n.Z)(m,2),_=h[0],x=h[1];return(0,a.useEffect)((function(){c.Z.getCastInfo(e).then((function(e){l(e),x(o.Z.RESOLVED)})).catch((function(e){console.log(e),d(e),x(o.Z.REJECTED)}))}),[e,v]),(0,f.jsxs)(f.Fragment,{children:[_===o.Z.PENDING,_===o.Z.REJECTED,_===o.Z.RESOLVED&&(0,f.jsxs)("div",{className:E,children:[(0,f.jsx)("h3",{className:Z,children:"Cast"}),(0,f.jsx)("ul",{className:w,children:i.slice(0,8).map((function(e){return(0,f.jsx)("li",{className:M,children:e.original_name},e.id)}))})]})]})}var k=["title","titleId"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},C.apply(this,arguments)}function S(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function O(e,r){var t=e.title,n=e.titleId,s=S(e,k);return a.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",ref:r,"aria-labelledby":n},s),t?a.createElement("title",{id:n},t):null,D||(D=a.createElement("path",{fill:"#FF3D00",d:"M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"})),y||(y=a.createElement("path",{fill:"#FFF",d:"M20 31L20 17 32 24z"})))}var F=a.forwardRef(O),I=(t.p,"BackButton_button__g-Bo5");function L(){var e=(0,s.s0)();return(0,f.jsx)("button",{onClick:function(){return e(-1)},type:"button",className:I,children:"\xab"})}var R="DesktopMovieData_wrapper__8WFEU",T="DesktopMovieData_posterWrapper__U5fQ-",B="DesktopMovieData_description__lvUpe",U="DesktopMovieData_image__dF3zj",V="DesktopMovieData_infoWrapper__kbbSw",P="DesktopMovieData_movieTitle__eEwd-",J="DesktopMovieData_infoYear__+kt9V",G="DesktopMovieData_infoScore__dl-3J",W="DesktopMovieData_overlayScore__AljKm",Y="DesktopMovieData_info__fWvnm",z="DesktopMovieData_title__ZhLgK",A="DesktopMovieData_item__nz7bK",K="DesktopMovieData_genre__3bnYp",Q="DesktopMovieData_youBtn__eg8Ly";function q(e){var r=e.movie,t=e.onClick;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(L,{}),(0,f.jsxs)("div",{className:R,children:[(0,f.jsxs)("div",{className:T,children:[(0,f.jsx)("img",{className:U,src:r.src,alt:r.title}),(0,f.jsx)("div",{className:W,children:(0,f.jsx)("p",{style:{color:function(e){var r=e.toFixed();return r>=8?"#7dd87d":r<8&&r>=5?"#eec60a":"#eb2632"}(r.score)},className:G,children:r.score.toFixed()})})]}),(0,f.jsxs)("div",{className:B,children:[(0,f.jsx)("h2",{className:P,children:r.title}),(0,f.jsx)("button",{type:"button",onClick:t,className:Q,children:(0,f.jsx)(F,{})}),(0,f.jsxs)("div",{className:V,children:[(0,f.jsx)("h3",{className:z,children:"Year"}),(0,f.jsx)("p",{className:J,children:r.year.split("").slice(0,4).join("")}),(0,f.jsx)(N,{}),(0,f.jsx)("h3",{className:z,children:"About"}),(0,f.jsx)("p",{className:Y,children:r.overview}),(0,f.jsx)("h3",{className:z,children:"Genres"}),(0,f.jsx)("ul",{className:K,children:r.genres.map((function(e){return(0,f.jsx)("li",{className:A,children:e.name},e.id)}))})]})]})]})]})}var X="MobileMovieData_wrapper__gv40O",H="MobileMovieData_posterWrapper__6Sw7k",$="MobileMovieData_image__evaf5",ee="MobileMovieData_sideBox__7fUQ8",re="MobileMovieData_infoWrapper__ZLGTI",te="MobileMovieData_movieTitle__1FnLF",ne="MobileMovieData_infoYear__MpDzK",ae="MobileMovieData_infoScore__Ktrn7",se="MobileMovieData_overlayScore__fBr3s",ie="MobileMovieData_info__iOowT",oe="MobileMovieData_title__ENaJR",ce="MobileMovieData_item__aXl9+",le="MobileMovieData_genre__OmMVQ",ue="MobileMovieData_youBtn__w+9zY";function pe(e){var r=e.movie,t=e.onClick;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(L,{}),(0,f.jsxs)("div",{className:X,children:[(0,f.jsxs)("div",{className:H,children:[(0,f.jsx)("img",{className:$,src:r.src,alt:r.title}),(0,f.jsx)("div",{className:se,children:(0,f.jsx)("p",{style:{color:function(e){var r=e.toFixed();return r>=8?"#7dd87d":r<8&&r>=5?"#eec60a":"#eb2632"}(r.score)},className:ae,children:r.score.toFixed()})})]}),(0,f.jsxs)("div",{className:ee,children:[(0,f.jsx)("button",{type:"button",onClick:t,className:ue,children:(0,f.jsx)(F,{})}),(0,f.jsx)("h3",{className:oe,children:"Year"}),(0,f.jsx)("p",{className:ne,children:r.year.split("").slice(0,4).join("")}),(0,f.jsx)("h3",{className:oe,children:"Genres"}),(0,f.jsx)("ul",{className:le,children:r.genres.map((function(e){return(0,f.jsx)("li",{className:ce,children:e.name},e.id)}))})]})]}),(0,f.jsxs)("div",{className:re,children:[(0,f.jsx)("h2",{className:te,children:r.title}),(0,f.jsx)(N,{}),(0,f.jsx)("h3",{className:oe,children:"About"}),(0,f.jsx)("p",{className:ie,children:r.overview})]})]})}var ve=function(){var e=(0,s.UO)().movieId,r=(0,a.useState)(null),t=(0,n.Z)(r,2),p=t[0],v=t[1],d=(0,a.useState)(null),m=(0,n.Z)(d,2),_=m[0],x=m[1],j=(0,a.useState)(o.Z.IDLE),g=(0,n.Z)(j,2),D=g[0],y=g[1],Z=(0,a.useState)(!1),E=(0,n.Z)(Z,2),M=E[0],w=E[1],N=(0,i.useMediaQuery)({query:"(max-width: 767px)"});(0,a.useEffect)((function(){y(o.Z.PENDING),c.Z.getMovieById(e).then((function(e){var r=e.poster_path,t=e.original_title,n=e.vote_average,a=e.overview,s=e.release_date,i=e.genres;v({src:r?"https://image.tmdb.org/t/p/w500".concat(r):"".concat(l),title:t,year:s,score:n,overview:a,genres:i}),y(o.Z.RESOLVED)})).catch((function(e){console.log(e),x(e),y(o.Z.REJECTED)}))}),[e,_]);var k=function(){w(!M)};return(0,f.jsxs)(u.Z,{children:[D===o.Z.PENDING,D===o.Z.REJECTED,D===o.Z.RESOLVED&&(0,f.jsxs)(f.Fragment,{children:[N&&(0,f.jsx)(pe,{movie:p,onClick:k}),!N&&(0,f.jsx)(q,{movie:p,onClick:k}),M&&(0,f.jsx)(h,{onClose:k,children:(0,f.jsx)(b,{})})]})]})}},4462:function(e,r,t){e.exports=t.p+"static/media/noimage.6e24877a189479ece38e.jpg"}}]);
//# sourceMappingURL=207.210ee92a.chunk.js.map