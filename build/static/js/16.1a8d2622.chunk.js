(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[16],{175:function(e,n,t){},219:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),c=t(5),r=t(17),o=(t(175),t(7)),u=t(39),i=t(10),m=Object(a.lazy)((function(){return t.e(18).then(t.bind(null,204))})),s=Object(a.lazy)((function(){return t.e(10).then(t.bind(null,205))})),b=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,206))})),d=Object(a.lazy)((function(){return t.e(11).then(t.bind(null,185))})),p=Object(a.lazy)((function(){return t.e(9).then(t.bind(null,186))})),h=Object(a.lazy)((function(){return t.e(12).then(t.bind(null,187))})),f=Object(a.lazy)((function(){return Promise.all([t.e(15),t.e(26)]).then(t.bind(null,188))})),E=Object(a.lazy)((function(){return t.e(17).then(t.bind(null,193))})),y=Object(a.lazy)((function(){return t.e(14).then(t.bind(null,194))})),O=Object(a.lazy)((function(){return t.e(13).then(t.bind(null,195))}));n.default=Object(a.memo)((function(e){var n=Object(a.useContext)(u.a).dispatch,t=Object(c.f)();return Object(a.useEffect)((function(){i.a.get("/users/user",Object(o.a)()).then((function(e){n({type:"LOGGED_IN_USER",payload:e.data[0]}),!1===e.data.status?(n({type:"FETCH_PRODUCTS",payload:""}),localStorage.setItem("auth",!1),localStorage.removeItem("token"),t.push("/login")):localStorage.setItem("auth",!0)})).catch((function(e){}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mobileMenu"},l.a.createElement("i",{className:"fal fa-bars orange",onClick:function(e){document.querySelector(".adminSidebar").classList.toggle("open")}})),l.a.createElement("main",{className:"admin d-flex"},l.a.createElement("div",{className:"d-flex panelwraper"},l.a.createElement(a.Suspense,{fallback:l.a.createElement("div",{className:"loader"},"Loading...")},l.a.createElement(r.a,null,l.a.createElement(m,null),l.a.createElement(c.b,{path:"/admin/dashboard",component:f}),l.a.createElement(c.b,{path:"/admin/producs",component:s}),l.a.createElement(c.b,{path:"/admin/enquiries",component:b}),l.a.createElement(c.b,{path:"/admin/manufacturers",component:d}),l.a.createElement(c.b,{path:"/admin/vender_requests",component:p}),l.a.createElement(c.b,{path:"/admin/venders",component:h}),l.a.createElement(c.b,{path:"/admin/myprofile",component:E}),l.a.createElement(c.b,{path:"/admin/myorders",component:y}),l.a.createElement(c.b,{path:"/admin/mybookings",component:O}))))))}))}}]);
//# sourceMappingURL=16.1a8d2622.chunk.js.map