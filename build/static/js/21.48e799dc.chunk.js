(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[21],{171:function(e,n,t){},215:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),c=t(4),r=t(14),o=(t(171),t(11)),u=t(30),i=t(15),m=Object(a.lazy)((function(){return t.e(19).then(t.bind(null,200))})),s=Object(a.lazy)((function(){return Promise.all([t.e(12),t.e(27)]).then(t.bind(null,201))})),b=Object(a.lazy)((function(){return Promise.all([t.e(1),t.e(11)]).then(t.bind(null,202))})),d=Object(a.lazy)((function(){return t.e(15).then(t.bind(null,181))})),p=Object(a.lazy)((function(){return t.e(13).then(t.bind(null,182))})),h=Object(a.lazy)((function(){return t.e(16).then(t.bind(null,183))})),f=Object(a.lazy)((function(){return Promise.all([t.e(18),t.e(30)]).then(t.bind(null,184))})),E=Object(a.lazy)((function(){return t.e(22).then(t.bind(null,189))})),y=Object(a.lazy)((function(){return t.e(17).then(t.bind(null,190))})),O=Object(a.lazy)((function(){return t.e(14).then(t.bind(null,191))}));n.default=Object(a.memo)((function(e){var n=Object(a.useContext)(u.a).dispatch,t=Object(c.f)();return Object(a.useEffect)((function(){i.a.get("/users/user",Object(o.a)()).then((function(e){n({type:"LOGGED_IN_USER",payload:e.data[0]}),!1===e.data.status?(n({type:"FETCH_PRODUCTS",payload:""}),localStorage.setItem("auth",!1),localStorage.removeItem("token"),t.push("/login")):localStorage.setItem("auth",!0)})).catch((function(e){}))}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"mobileMenu"},l.a.createElement("i",{className:"fal fa-bars orange",onClick:function(e){document.querySelector(".adminSidebar").classList.toggle("open")}})),l.a.createElement("main",{className:"admin d-flex"},l.a.createElement("div",{className:"d-flex panelwraper"},l.a.createElement(a.Suspense,{fallback:l.a.createElement("div",{className:"loader"},"Loading...")},l.a.createElement(r.a,null,l.a.createElement(m,null),l.a.createElement(c.b,{path:"/admin/dashboard",component:f}),l.a.createElement(c.b,{path:"/admin/producs",component:s}),l.a.createElement(c.b,{path:"/admin/enquiries",component:b}),l.a.createElement(c.b,{path:"/admin/manufacturers",component:d}),l.a.createElement(c.b,{path:"/admin/vender_requests",component:p}),l.a.createElement(c.b,{path:"/admin/venders",component:h}),l.a.createElement(c.b,{path:"/admin/myprofile",component:E}),l.a.createElement(c.b,{path:"/admin/myorders",component:y}),l.a.createElement(c.b,{path:"/admin/mybookings",component:O}))))))}))}}]);
//# sourceMappingURL=21.48e799dc.chunk.js.map