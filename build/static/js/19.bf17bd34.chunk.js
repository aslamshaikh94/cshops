(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[19],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"AdminContext",(function(){return _}));var a=n(16),r=n(111),c=n(5),o=n(0),l=n.n(o),u=n(4),i=n(14),m=(n(160),n(47)),s=n(15),d=n.n(s),b=n(11),p=Object(o.lazy)((function(){return n.e(20).then(n.bind(null,185))})),f=Object(o.lazy)((function(){return Promise.all([n.e(12),n.e(26)]).then(n.bind(null,186))})),h=Object(o.lazy)((function(){return Promise.all([n.e(1),n.e(11)]).then(n.bind(null,187))})),O=Object(o.lazy)((function(){return n.e(15).then(n.bind(null,170))})),y=Object(o.lazy)((function(){return n.e(13).then(n.bind(null,171))})),E=Object(o.lazy)((function(){return n.e(16).then(n.bind(null,172))})),j=Object(o.lazy)((function(){return Promise.all([n.e(18),n.e(29)]).then(n.bind(null,173))})),v=Object(o.lazy)((function(){return n.e(23).then(n.bind(null,178))})),S=Object(o.lazy)((function(){return n.e(17).then(n.bind(null,179))})),g=Object(o.lazy)((function(){return n.e(14).then(n.bind(null,180))})),I={API_URL:m.a},_=Object(o.createContext)(),z=function(e,t){switch(t.type){case"FETCH_PRODUCTS":return Object(c.a)(Object(c.a)({},e),{},{products:t.payload});case"LOGGED_IN_USER":return Object(c.a)(Object(c.a)({},e),{},{loggedInUser:t.payload});case"ENQUIRIES":return Object(c.a)(Object(c.a)({},e),{},{enquiries:t.payload});case"DELETE_PRODUCT":return Object(c.a)(Object(c.a)({},e),{},{products:Object(r.a)(e.products.filter((function(e){return e.id!==t.payload})))});default:return I}};t.default=Object(o.memo)((function(e){var t=Object(o.useReducer)(z,I),n=Object(a.a)(t,2),r=n[0],c=n[1],m=Object(u.f)();return Object(o.useEffect)((function(){d.a.get("".concat(r.API_URL,"/users/user"),Object(b.a)()).then((function(e){c({type:"LOGGED_IN_USER",payload:e.data[0]}),!1===e.data.status?(c({type:"FETCH_PRODUCTS",payload:""}),localStorage.setItem("auth",!1),localStorage.removeItem("token"),m.push("/login")):localStorage.setItem("auth",!0)})).catch((function(e){}))}),[r.API_URL,m]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mobileMenu"},l.a.createElement("i",{className:"fal fa-bars orange",onClick:function(e){document.querySelector(".adminSidebar").classList.toggle("open")}})),l.a.createElement("main",{className:"admin d-flex"},l.a.createElement("div",{className:"d-flex panelwraper"},l.a.createElement(o.Suspense,{fallback:l.a.createElement("div",{className:"loader"},"Loading...")},l.a.createElement(_.Provider,{value:{data:r,dispatch:c}},l.a.createElement(i.a,null,l.a.createElement(p,null),l.a.createElement(u.b,{path:"/admin/dashboard",component:j}),l.a.createElement(u.b,{path:"/admin/producs",component:f}),l.a.createElement(u.b,{path:"/admin/enquiries",component:h}),l.a.createElement(u.b,{path:"/admin/manufacturers",component:O}),l.a.createElement(u.b,{path:"/admin/vender_requests",component:y}),l.a.createElement(u.b,{path:"/admin/venders",component:E}),l.a.createElement(u.b,{path:"/admin/myprofile",component:v}),l.a.createElement(u.b,{path:"/admin/myorders",component:S}),l.a.createElement(u.b,{path:"/admin/mybookings",component:g})))))))}))},111:function(e,t,n){"use strict";var a=n(20);var r=n(34);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return c}))},160:function(e,t,n){}}]);
//# sourceMappingURL=19.bf17bd34.chunk.js.map