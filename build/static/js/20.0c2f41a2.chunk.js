(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[20],{161:function(e,a,t){},182:function(e,a,t){"use strict";t.r(a);var n=t(16),l=t(0),r=t.n(l),c=t(2),s=t(4),m=t(27),i=t.n(m),u=t(95),o=t(28),f=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,l=e.as,m=void 0===l?"div":l,u=Object(s.a)(e,["bsPrefix","className","as"]),f=Object(o.b)(t,"media");return r.a.createElement(m,Object(c.a)({},u,{ref:a,className:i()(n,f)}))}));f.displayName="Media",f.Body=Object(u.a)("media-body");var d=f,p=t(12),E=t(13),b=(t(161),t(103));a.default=Object(l.memo)((function(){var e=Object(p.f)(),a=Object(l.useContext)(b.AdminContext).data,t=Object(l.useState)({fname:"",lname:""}),c=Object(n.a)(t,2),s=c[0],m=c[1];function i(){document.querySelector(".adminSidebar").classList.toggle("open")}return Object(l.useEffect)((function(){a.loggedInUser&&m(a.loggedInUser)}),[a]),Object(l.useEffect)((function(){i()}),[e.location.pathname]),r.a.createElement("div",{className:"adminSidebar"},r.a.createElement(d,{className:"profile border-bottom pb-2 d-flex align-items-center"},r.a.createElement("img",{width:40,height:40,className:"mr-3 rounded-circle",src:"https://www.w3schools.com/bootstrap4/img_avatar3.png",alt:"Generic placeholder"}),r.a.createElement(d.Body,null,r.a.createElement("h6",{className:"mb-0 text-capitalize"},s.fname+" "+s.lname),r.a.createElement("span",{className:"text-capitalize"},s.usertype)),r.a.createElement("i",{className:"fal fa-times orange closeBtn",onClick:i})),r.a.createElement("ul",{className:"navlink"},r.a.createElement("li",null,r.a.createElement(E.c,{to:"/admin/myprofile"},r.a.createElement("i",{className:"fal fa-user-circle"})," ",r.a.createElement("span",null,"My Profile"))),r.a.createElement("li",null,r.a.createElement(E.c,{to:"/admin/dashboard"},r.a.createElement("i",{className:"fal fa-tachometer"})," ",r.a.createElement("span",null,"Dashboard"))),"manufacturer"===s.usertype?r.a.createElement("li",null,r.a.createElement(E.c,{to:"/admin/producs"},r.a.createElement("i",{className:"fal fa-list-ol"}),r.a.createElement("span",null,"My Products"))):null,r.a.createElement("li",null,r.a.createElement(E.c,{to:"/admin/enquiries"},r.a.createElement("i",{className:"fal fa-envelope"})," ",r.a.createElement("span",null,"My Enquiries"))),"manufacturer"!==s.usertype?r.a.createElement("li",null,r.a.createElement(E.c,{to:"/admin/myorders"},r.a.createElement("i",{className:"fal fa-shopping-cart"})," ",r.a.createElement("span",null,"My Orders"))):null,"manufacturer"===s.usertype?r.a.createElement("li",null,r.a.createElement(E.c,{to:"/admin/mybookings"},r.a.createElement("i",{className:"fal fa-shopping-cart"})," ",r.a.createElement("span",null,"My Bookings"))):null,"supplier"===s.usertype?r.a.createElement("li",null,r.a.createElement(E.c,{to:"/admin/manufacturers"},r.a.createElement("i",{className:"fal fa-industry-alt"})," ",r.a.createElement("span",null,"Manufacturers"))):null,"manufacturer"===s.usertype?r.a.createElement("li",null,r.a.createElement(E.c,{to:"/admin/vender_requests"},r.a.createElement("i",{className:"fal fa-comment"})," ",r.a.createElement("span",null,"Vender Requests"))):null,"manufacturer"===s.usertype?r.a.createElement("li",null,r.a.createElement(E.c,{to:"/admin/venders"},r.a.createElement("i",{className:"fal fa-users"})," ",r.a.createElement("span",null,"Our Venders"))):null))}))},95:function(e,a,t){"use strict";var n=t(2),l=t(4),r=t(27),c=t.n(r),s=/-(.)/g;var m=t(0),i=t.n(m),u=t(28);t.d(a,"a",(function(){return f}));var o=function(e){return e[0].toUpperCase()+(a=e,a.replace(s,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function f(e,a){var t=void 0===a?{}:a,r=t.displayName,s=void 0===r?o(e):r,m=t.Component,f=void 0===m?"div":m,d=t.defaultProps,p=i.a.forwardRef((function(a,t){var r=a.className,s=a.bsPrefix,m=a.as,o=void 0===m?f:m,d=Object(l.a)(a,["className","bsPrefix","as"]),p=Object(u.b)(s,e);return i.a.createElement(o,Object(n.a)({ref:t,className:c()(r,p)},d))}));return p.defaultProps=d,p.displayName=s,p}}}]);
//# sourceMappingURL=20.0c2f41a2.chunk.js.map