(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[4],{11:function(e,t,a){"use strict";function n(){return{headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("token")}}}function c(e){var t=document.getElementById("loader");t.style.display=e?"block":"none"}a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}))},25:function(e,t,a){e.exports=a.p+"static/media/cshops.70f9d59b.png"},30:function(e,t,a){"use strict";var n=a(16),c=a(33),r=a(5),o=a(0),l=a.n(o),s=(a(55),a(62),a(4)),i=a(14),u=a(19),m=a(15),d=a.n(m),p=a(45),f=a(11);var b=function(){var e=Object(o.useContext)(U),t=e.data,a=e.dispatch,n=Object(u.useToasts)().addToast;return Object(o.useEffect)((function(){t.success&&(n(t.success,{appearance:"success",autoDismiss:!0,autoDismissTimeout:2e3}),setTimeout((function(){return a({type:"FETCH_SUCCESS",payload:""})}),2e3))}),[t.success]),Object(o.useEffect)((function(){t.error&&(n(t.error,{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3}),setTimeout((function(){return a({type:"FETCH_ERROR",payload:""})}),2e3))}),[t.error]),""},E=a(92),h=(a(86),a(25)),O=a.n(h),g={color:"white",fontSize:"10px",borderRadius:100,width:"15px",height:"15px",top:0,right:"-2px",position:"absolute"},j=Object(o.memo)((function(){var e=Object(o.useContext)(U),t=e.data,a=e.dispatch,c=Object(o.useState)([]),r=Object(n.a)(c,2),u=r[0],m=r[1],p=Object(o.useState)([]),b=Object(n.a)(p,2),h=b[0],j=b[1],y=Object(s.f)();Object(o.useEffect)((function(){d.a.get("".concat(t.API_URL,"/addto/wishlist?type=favorite"),Object(f.a)()).then((function(e){!1!==e.data.status&&a({type:"FETCH_FAVORITE",payload:e.data})})),d.a.get("".concat(t.API_URL,"/addto/wishlist?type=cart"),Object(f.a)()).then((function(e){!1!==e.data.status&&a({type:"FETCH_CART",payload:e.data})}))}),[]),Object(o.useEffect)((function(){t.favorites&&m(t.favorites)}),[t.favorites]),Object(o.useEffect)((function(){t.carts&&j(t.carts)}),[t.carts]);var v=function(){localStorage.removeItem("auth"),localStorage.removeItem("token"),d.a.get("".concat(t.API_URL,"/users/user"),Object(f.a)()).then((function(e){a({type:"LOGGED_IN_USER",payload:e.data[0]}),!1===e.data.status?(a({type:"FETCH_PRODUCTS",payload:""}),localStorage.setItem("auth",!1),localStorage.removeItem("token")):localStorage.setItem("auth",!0)})).catch((function(e){})),y.push("/auth")};return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement("div",{className:"headerGroup"},l.a.createElement(E.a,{fluid:!0},l.a.createElement("div",{className:"row d-flex align-items-center justify-content-between"},l.a.createElement("div",null,l.a.createElement(i.b,{to:"/"},l.a.createElement("img",{src:O.a,alt:O.a,height:"30"}))),l.a.createElement("div",null,l.a.createElement("ul",{className:"navlink"},l.a.createElement("li",null,l.a.createElement(i.c,{to:"/admin/myprofile"},"My Account")),t.loggedInUser?l.a.createElement("li",null,l.a.createElement("button",{className:"btn",onClick:function(e){return v()}},l.a.createElement("i",{className:"fal fa-sign-out"}))):null,l.a.createElement("li",null,l.a.createElement(i.c,{to:"/cartview",className:"btn position-relative"},l.a.createElement("i",{className:"fal fa-shopping-cart"}),l.a.createElement("span",{style:g,className:"d-flex align-items-center justify-content-center bg_orange"},h.length))),l.a.createElement("li",null,l.a.createElement(i.c,{to:"/wishlist",className:"btn position-relative"},l.a.createElement("i",{className:"fal fa-heart"}),l.a.createElement("span",{style:g,className:"d-flex align-items-center justify-content-center bg_orange"},u.length)))))))),l.a.createElement("div",{className:"progress",id:"loader",style:{display:"none"}},l.a.createElement("div",{className:"indeterminate"}))))})),y=(a(89),Object(o.memo)((function(){return l.a.createElement("footer",null,l.a.createElement("p",{className:"m-0"},"Copyright \xa9 2019. CShops. All rights reserved."))}))),v=a(47);a.d(t,"a",(function(){return U}));var S=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,199))})),C=Object(o.lazy)((function(){return Promise.all([a.e(0),a.e(7),a.e(24)]).then(a.bind(null,200))})),T=Object(o.lazy)((function(){return Promise.all([a.e(26),a.e(25)]).then(a.bind(null,191))})),I=Object(o.lazy)((function(){return a.e(29).then(a.bind(null,192))})),R=Object(o.lazy)((function(){return a.e(23).then(a.bind(null,193))})),_=Object(o.lazy)((function(){return a.e(32).then(a.bind(null,194))})),N=Object(o.lazy)((function(){return a.e(21).then(a.bind(null,195))})),w={API_URL:v.a,loading:!0,error:!1},U=Object(o.createContext)(),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_REQUEST":return Object(r.a)(Object(r.a)({},e),{},{loading:t.payload});case"FETCH_ERROR":return Object(r.a)(Object(r.a)({},e),{},{loading:!1,error:t.payload});case"FETCH_SUCCESS":return Object(r.a)(Object(r.a)({},e),{},{loading:!1,success:t.payload});case"FETCH_PRODUCTS":return Object(r.a)(Object(r.a)({},e),{},{loading:!1,products:t.payload});case"PRODUCT_DETAILS":return Object(r.a)(Object(r.a)({},e),{},{productDetails:t.payload});case"LOGGED_IN_USER":return Object(r.a)(Object(r.a)({},e),{},{loggedInUser:t.payload});case"CONTACT_INFO":return Object(r.a)(Object(r.a)({},e),{},{loading:!1,contactInfo:t.payload});case"FETCH_CART":return Object(r.a)(Object(r.a)({},e),{},{carts:t.payload});case"FETCH_FAVORITE":return Object(r.a)(Object(r.a)({},e),{},{favorites:t.payload});case"PROGRESS":return Object(r.a)(Object(r.a)({},e),{},{progress:t.payload});default:return w}},F=function(e){var t=e.component,a=(e.auth,Object(c.a)(e,["component","auth"]));return l.a.createElement(s.b,Object.assign({},a,{render:function(e){return"true"===localStorage.getItem("auth")?l.a.createElement(t,e):l.a.createElement(s.a,{to:"/auth"})}}))};t.b=function(e){var t=Object(o.useReducer)(A,w),a=Object(n.a)(t,2),c=a[0],r=a[1];return Object(o.useEffect)((function(){!0===c.loading?Object(f.b)(!0):!1===c.loading&&Object(f.b)(!1)}),[c.loading]),Object(o.useEffect)((function(){d.a.get("".concat(c.API_URL,"/users/user"),Object(f.a)()).then((function(e){r({type:"LOGGED_IN_USER",payload:e.data[0]}),!1===e.data.status?(localStorage.setItem("auth",!1),localStorage.removeItem("token")):localStorage.setItem("auth",!0)})).catch((function(e){}))}),[c.API_URL]),l.a.createElement("div",{className:"App"},l.a.createElement(p.a,null,l.a.createElement("title",null,"CShops"),l.a.createElement("meta",{name:"description",content:">CShops Commercial Shops Wholesalers and Retailers"})),l.a.createElement(o.Suspense,{fallback:l.a.createElement("div",{className:"loader"},"Loading...")},l.a.createElement(u.ToastProvider,null,l.a.createElement(i.a,null,l.a.createElement(U.Provider,{value:{data:c,dispatch:r}},l.a.createElement(b,null),l.a.createElement(j,null),l.a.createElement(s.b,{exact:!0,path:"/",component:S}),l.a.createElement(s.b,{path:"/product/:id",component:C}),l.a.createElement(s.b,{path:"/auth",component:T}),l.a.createElement(F,{path:"/admin",component:N}),l.a.createElement(F,{path:"/wishlist",component:I}),l.a.createElement(F,{path:"/cartview",component:R}),l.a.createElement(F,{path:"/placeorder",component:_}))),l.a.createElement(y,null))))}},47:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n="";n="https://api.cshops.in"},57:function(e,t,a){e.exports=a(90)},62:function(e,t,a){},86:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),l=a(30);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(l.b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[57,5,6]]]);
//# sourceMappingURL=main.b94b0e72.chunk.js.map