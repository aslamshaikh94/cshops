(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[21],{162:function(e,n,t){},195:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),c=t(4),o=t(14),r=(t(162),t(47)),u=t(15),i=t.n(u),m=t(11),s=t(19),d=t(30),b=Object(a.lazy)((function(){return t.e(19).then(t.bind(null,187))})),p=Object(a.lazy)((function(){return Promise.all([t.e(12),t.e(27)]).then(t.bind(null,188))})),h=Object(a.lazy)((function(){return Promise.all([t.e(1),t.e(11)]).then(t.bind(null,189))})),f=Object(a.lazy)((function(){return t.e(15).then(t.bind(null,172))})),E=Object(a.lazy)((function(){return t.e(13).then(t.bind(null,173))})),y=Object(a.lazy)((function(){return t.e(16).then(t.bind(null,174))})),O=Object(a.lazy)((function(){return Promise.all([t.e(18),t.e(30)]).then(t.bind(null,175))})),j=Object(a.lazy)((function(){return t.e(22).then(t.bind(null,180))})),g=Object(a.lazy)((function(){return t.e(17).then(t.bind(null,181))})),z=Object(a.lazy)((function(){return t.e(14).then(t.bind(null,182))}));r.a;n.default=Object(a.memo)((function(e){var n=Object(a.useContext)(d.a),t=n.data,r=n.dispatch,u=Object(c.f)();Object(s.useToasts)().addToast;return Object(a.useEffect)((function(){i.a.get("".concat(t.API_URL,"/users/user"),Object(m.a)()).then((function(e){r({type:"LOGGED_IN_USER",payload:e.data[0]}),!1===e.data.status?(r({type:"FETCH_PRODUCTS",payload:""}),localStorage.setItem("auth",!1),localStorage.removeItem("token"),u.push("/login")):localStorage.setItem("auth",!0)})).catch((function(e){}))}),[t.API_URL,u]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mobileMenu"},l.a.createElement("i",{className:"fal fa-bars orange",onClick:function(e){document.querySelector(".adminSidebar").classList.toggle("open")}})),l.a.createElement("main",{className:"admin d-flex"},l.a.createElement("div",{className:"d-flex panelwraper"},l.a.createElement(a.Suspense,{fallback:l.a.createElement("div",{className:"loader"},"Loading...")},l.a.createElement(o.a,null,l.a.createElement(b,null),l.a.createElement(c.b,{path:"/admin/dashboard",component:O}),l.a.createElement(c.b,{path:"/admin/producs",component:p}),l.a.createElement(c.b,{path:"/admin/enquiries",component:h}),l.a.createElement(c.b,{path:"/admin/manufacturers",component:f}),l.a.createElement(c.b,{path:"/admin/vender_requests",component:E}),l.a.createElement(c.b,{path:"/admin/venders",component:y}),l.a.createElement(c.b,{path:"/admin/myprofile",component:j}),l.a.createElement(c.b,{path:"/admin/myorders",component:g}),l.a.createElement(c.b,{path:"/admin/mybookings",component:z}))))))}))}}]);
//# sourceMappingURL=21.b2e81088.chunk.js.map