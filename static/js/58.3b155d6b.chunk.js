"use strict";(self.webpackChunkreact_movies=self.webpackChunkreact_movies||[]).push([[58],{173:function(e,t,r){r.d(t,{Z:function(){return s}});var n="Container_container__BWGcJ",a=r(184),s=function(e){var t=e.children;return(0,a.jsx)("div",{className:n,children:t})}},1852:function(e,t,r){var n=r(4165),a=r(5861),s=r(4569),i=r.n(s);function c(){return(c=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"/movie/popular",params:{page:t}},e.next=4,i()(r);case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function o(){return(o=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"/movie/top_rated",params:{page:t}},e.next=4,i()(r);case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function l(){return(l=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"/movie/upcoming",params:{page:t}},e.next=4,i()(r);case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function u(){return(u=(0,a.Z)((0,n.Z)().mark((function e(t,r){var a,s,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={url:"search/movie",params:{query:t,page:r}},e.next=4,i()(a);case 4:return s=e.sent,c=s.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function p(){return(p=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t)},e.next=4,i()(r,t);case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function d(){return(d=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/credits")},e.next=4,i()(r,t);case 4:return a=e.sent,s=a.data,e.abrupt("return",s.cast);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function v(){return(v=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/videos")},e.next=4,i()(r,t);case 4:return a=e.sent,s=a.data,e.abrupt("return",s.results);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function m(){return(m=(0,a.Z)((0,n.Z)().mark((function e(t){var r,a,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r={url:"movie/".concat(t,"/images")},e.next=4,i()(r,t);case 4:return a=e.sent,s=a.data,e.abrupt("return",s.backdrops);case 9:return e.prev=9,e.t0=e.catch(0),console.log("error",{error:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org/3/",i().defaults.params={api_key:"a7722589dc29fac056c18bf39b029797",language:"en-US",include_image_language:"en,null"};var f={getPopularMovies:function(e){return c.apply(this,arguments)},getTopRatedMovies:function(e){return o.apply(this,arguments)},getUpcomingMovies:function(e){return l.apply(this,arguments)},getMoviesByQuery:function(e,t){return u.apply(this,arguments)},getMovieById:function(e){return p.apply(this,arguments)},getCastInfo:function(e){return d.apply(this,arguments)},getMovieVideo:function(e){return v.apply(this,arguments)},getMovieImages:function(e){return m.apply(this,arguments)}};t.Z=f},2019:function(e,t){t.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},4812:function(e,t,r){r.r(t),r.d(t,{default:function(){return ge}});var n=r(885),a=r(2791),s=r(6871),i=r(4805),c=r(2019),o=r(1852),l=r(7758),u=r(173),p=r(4164),d="PopUp_modaloverlay__moAxw",v="PopUp_modal__EdV28",m=r(184),f=document.querySelector("#modal-root"),h=function(e){var t=e.onClose,r=e.children;(0,a.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&t()};return(0,p.createPortal)((0,m.jsx)("div",{className:d,onClick:function(e){e.currentTarget===e.target&&t()},children:(0,m.jsx)("div",{className:v,children:r})}),f)},_=r(7762),x="Trailer_iframe__dcjgv",g=r.p+"static/media/YouTube.4bde010940277341b250.jpg";function j(){return(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:g,alt:"nothing-found",style:{height:540,width:960}})})}function b(){var e=(0,s.UO)().movieId,t=(0,a.useState)(null),r=(0,n.Z)(t,2),i=r[0],l=r[1],u=(0,a.useState)(c.Z.IDLE),p=(0,n.Z)(u,2),d=p[0],v=p[1],f=(0,a.useState)(null),h=(0,n.Z)(f,2),g=h[0],b=h[1];return(0,a.useEffect)((function(){o.Z.getMovieVideo(e).then((function(e){var t,r=[],n=(0,_.Z)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;"Trailer"===a.type&&r.push(a)}}catch(s){n.e(s)}finally{n.f()}l(r),v(c.Z.RESOLVED)})).catch((function(e){b(e),v(c.Z.REJECTED)}))}),[e]),(0,m.jsxs)(m.Fragment,{children:[d===c.Z.RESOLVED&&(0,m.jsxs)("ul",{children:[i.slice(0,1).map((function(e){return(0,m.jsx)("li",{children:(0,m.jsx)("iframe",{className:x,src:"https://www.youtube.com/embed/".concat(e.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})},e.id)})),(0,m.jsx)("li",{children:0===i.length&&(0,m.jsx)(j,{})})]}),d===c.Z.REJECTED&&(0,m.jsx)("p",{children:g.message})]})}var Z,D,E="Cast_title__FSZf0",y="Cast_block__AvRfa",w="Cast_item__1Wkyx",M="Cast_cast__yZeik";function N(){var e=(0,s.UO)().movieId,t=(0,a.useState)(null),r=(0,n.Z)(t,2),i=r[0],l=r[1],u=(0,a.useState)(null),p=(0,n.Z)(u,2),d=p[0],v=p[1],f=(0,a.useState)(c.Z.IDLE),h=(0,n.Z)(f,2),_=h[0],x=h[1];return(0,a.useEffect)((function(){o.Z.getCastInfo(e).then((function(e){l(e),x(c.Z.RESOLVED)})).catch((function(e){console.log(e),v(e),x(c.Z.REJECTED)}))}),[e,d]),(0,m.jsxs)(m.Fragment,{children:[_===c.Z.PENDING,_===c.Z.REJECTED,_===c.Z.RESOLVED&&(0,m.jsxs)("div",{className:y,children:[(0,m.jsx)("h3",{className:E,children:"Cast"}),(0,m.jsx)("ul",{className:M,children:i.slice(0,8).map((function(e){return(0,m.jsx)("li",{className:w,children:e.original_name},e.id)}))})]})]})}var k=["title","titleId"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function C(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function O(e,t){var r=e.title,n=e.titleId,s=C(e,k);return a.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",ref:t,"aria-labelledby":n},s),r?a.createElement("title",{id:n},r):null,Z||(Z=a.createElement("path",{fill:"#FF3D00",d:"M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"})),D||(D=a.createElement("path",{fill:"#FFF",d:"M20 31L20 17 32 24z"})))}var I=a.forwardRef(O),R=(r.p,"BackButton_button__xDbPz"),F=r(3853);function L(){var e=(0,s.s0)();return(0,m.jsx)("button",{onClick:function(){return e(-1)},type:"button",className:R,children:(0,m.jsx)(F.JHF,{})})}var T="DesktopMovieData_wrapper__8WFEU",U="DesktopMovieData_posterWrapper__U5fQ-",V="DesktopMovieData_description__lvUpe",B="DesktopMovieData_image__dF3zj",J="DesktopMovieData_infoWrapper__kbbSw",P="DesktopMovieData_movieTitle__eEwd-",G="DesktopMovieData_infoYear__+kt9V",W="DesktopMovieData_infoScore__dl-3J",Y="DesktopMovieData_overlayScore__AljKm",z="DesktopMovieData_info__fWvnm",K="DesktopMovieData_title__ZhLgK",A="DesktopMovieData_item__nz7bK",Q="DesktopMovieData_genre__3bnYp",q="DesktopMovieData_youBtn__eg8Ly";function H(e){var t=e.movie,r=e.onClick;e.add;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(L,{}),(0,m.jsxs)("div",{className:T,children:[(0,m.jsxs)("div",{className:U,children:[(0,m.jsx)("img",{className:B,src:t.src,alt:t.title}),(0,m.jsx)("div",{className:Y,children:(0,m.jsx)("p",{style:{color:function(e){var t=e.toFixed();return t>=8?"#7dd87d":t<8&&t>=5?"#eec60a":"#eb2632"}(t.score)},className:W,children:t.score.toFixed()})})]}),(0,m.jsxs)("div",{className:V,children:[(0,m.jsx)("h2",{className:P,children:t.title}),(0,m.jsx)("button",{type:"button",onClick:r,className:q,children:(0,m.jsx)(I,{})}),(0,m.jsxs)("div",{className:J,children:[(0,m.jsx)("h3",{className:K,children:"Year"}),(0,m.jsx)("p",{className:G,children:t.year.split("").slice(0,4).join("")}),(0,m.jsx)(N,{}),(0,m.jsx)("h3",{className:K,children:"About"}),(0,m.jsx)("p",{className:z,children:t.overview}),(0,m.jsx)("h3",{className:K,children:"Genres"}),(0,m.jsx)("ul",{className:Q,children:t.genres.map((function(e){return(0,m.jsx)("li",{className:A,children:e.name},e.id)}))})]})]})]})]})}var X="MobileMovieData_wrapper__gv40O",$="MobileMovieData_posterWrapper__6Sw7k",ee="MobileMovieData_image__evaf5",te="MobileMovieData_sideBox__7fUQ8",re="MobileMovieData_infoWrapper__ZLGTI",ne="MobileMovieData_movieTitle__1FnLF",ae="MobileMovieData_infoYear__MpDzK",se="MobileMovieData_infoScore__Ktrn7",ie="MobileMovieData_overlayScore__fBr3s",ce="MobileMovieData_info__iOowT",oe="MobileMovieData_title__ENaJR",le="MobileMovieData_item__aXl9+",ue="MobileMovieData_genre__OmMVQ",pe="MobileMovieData_youBtn__w+9zY";function de(e){var t=e.movie,r=e.onClick;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(L,{}),(0,m.jsxs)("div",{className:X,children:[(0,m.jsxs)("div",{className:$,children:[(0,m.jsx)("img",{className:ee,src:t.src,alt:t.title}),(0,m.jsx)("div",{className:ie,children:(0,m.jsx)("p",{style:{color:function(e){var t=e.toFixed();return t>=8?"#7dd87d":t<8&&t>=5?"#eec60a":"#eb2632"}(t.score)},className:se,children:t.score.toFixed()})})]}),(0,m.jsxs)("div",{className:te,children:[(0,m.jsx)("button",{type:"button",onClick:r,className:pe,children:(0,m.jsx)(I,{})}),(0,m.jsx)("h3",{className:oe,children:"Year"}),(0,m.jsx)("p",{className:ae,children:t.year.split("").slice(0,4).join("")}),(0,m.jsx)("h3",{className:oe,children:"Genres"}),(0,m.jsx)("ul",{className:ue,children:t.genres.map((function(e){return(0,m.jsx)("li",{className:le,children:e.name},e.id)}))})]})]}),(0,m.jsxs)("div",{className:re,children:[(0,m.jsx)("h2",{className:ne,children:t.title}),(0,m.jsx)(N,{}),(0,m.jsx)("h3",{className:oe,children:"About"}),(0,m.jsx)("p",{className:ce,children:t.overview})]})]})}var ve=r(2815),me=r(2558),fe=r.p+"static/media/no-image.d09e503817275d6b9eb4.jpg",he="ImagesSwiper_swiper__mRuhU",_e="ImagesSwiper_slide__wUEmK";r(2532),r(4928),r(2326);function xe(){var e=(0,s.UO)().movieId,t=(0,a.useState)(null),r=(0,n.Z)(t,2),i=r[0],l=r[1],u=(0,a.useState)(null),p=(0,n.Z)(u,2),d=p[0],v=p[1],f=(0,a.useState)(c.Z.IDLE),h=(0,n.Z)(f,2),_=h[0],x=h[1];return(0,a.useEffect)((function(){o.Z.getMovieImages(e).then((function(e){l(e),x(c.Z.RESOLVED)})).catch((function(e){console.log(e),v(e),x(c.Z.REJECTED)}))}),[e,d]),console.log(i),(0,m.jsxs)(m.Fragment,{children:[_===c.Z.PENDING,_===c.Z.REJECTED,_===c.Z.RESOLVED&&(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(ve.tq,{spaceBetween:30,pagination:{clickable:!0},navigation:!0,mousewheel:!0,keyboard:!0,modules:[me.W_,me.tl,me.Gk,me.N1],className:he,children:i.slice(0,8).map((function(e){e.vote_average;var t=e.file_path;return(0,m.jsx)(ve.o5,{className:_e,children:(0,m.jsx)("img",{src:t?"https://image.tmdb.org/t/p/original".concat(t):"".concat(fe),alt:"movie backdrop"})},t)}))})})]})}var ge=function(){var e=(0,s.UO)().movieId,t=(0,a.useState)(null),r=(0,n.Z)(t,2),p=r[0],d=r[1],v=(0,a.useState)(null),f=(0,n.Z)(v,2),_=f[0],x=f[1],g=(0,a.useState)(c.Z.IDLE),j=(0,n.Z)(g,2),Z=j[0],D=j[1],E=(0,a.useState)(!1),y=(0,n.Z)(E,2),w=y[0],M=y[1],N=(0,i.useMediaQuery)({query:"(max-width: 767px)"});(0,a.useEffect)((function(){D(c.Z.PENDING),o.Z.getMovieById(e).then((function(e){var t=e.poster_path,r=e.original_title,n=e.vote_average,a=e.overview,s=e.release_date,i=e.genres;d({src:t?"https://image.tmdb.org/t/p/w500".concat(t):"".concat(l),title:r,year:s,score:n,overview:a,genres:i}),D(c.Z.RESOLVED)})).catch((function(e){console.log(e),x(e),D(c.Z.REJECTED)}))}),[e,_]);var k=function(){M(!w)};return(0,m.jsxs)(u.Z,{children:[Z===c.Z.PENDING,Z===c.Z.REJECTED,Z===c.Z.RESOLVED&&(0,m.jsxs)(m.Fragment,{children:[w&&(0,m.jsx)(h,{onClose:k,children:(0,m.jsx)(b,{})}),N&&(0,m.jsx)(de,{movie:p,onClick:k}),!N&&(0,m.jsx)(H,{movie:p,onClick:k}),(0,m.jsx)(xe,{})]})]})}},7758:function(e,t,r){e.exports=r.p+"static/media/noimage.6e24877a189479ece38e.jpg"}}]);
//# sourceMappingURL=58.3b155d6b.chunk.js.map