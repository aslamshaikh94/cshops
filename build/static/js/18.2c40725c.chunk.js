(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[18],{179:function(e,a,t){},204:function(e,a,t){"use strict";t.r(a);var l=t(15),n=t(0),c=t.n(n),r=t(1),s=t(3),m=t(8),i=t.n(m),u=t(24),o=t(11),f=c.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,n=e.as,m=void 0===n?"div":n,u=Object(s.a)(e,["bsPrefix","className","as"]),f=Object(o.b)(t,"media");return c.a.createElement(m,Object(r.a)({},u,{ref:a,className:i()(l,f)}))}));f.displayName="Media",f.Body=Object(u.a)("media-body");var E=f,d=t(5),p=t(17),b=(t(179),t(39));a.default=Object(n.memo)((function(){var e=Object(d.f)(),a=Object(n.useContext)(b.a).data,t=Object(n.useState)({fname:"",lname:""}),r=Object(l.a)(t,2),s=r[0],m=r[1];function i(){document.querySelector(".adminSidebar").classList.toggle("open")}return Object(n.useEffect)((function(){a.loggedInUser&&m(a.loggedInUser)}),[a]),Object(n.useEffect)((function(){i()}),[e.location.pathname]),c.a.createElement("div",{className:"adminSidebar"},c.a.createElement(E,{className:"profile border-bottom pb-2 d-flex align-items-center"},c.a.createElement("img",{width:40,height:40,className:"mr-3 rounded-circle",src:"https://www.w3schools.com/bootstrap4/img_avatar3.png",alt:"Generic placeholder"}),c.a.createElement(E.Body,null,c.a.createElement("h6",{className:"mb-0 text-capitalize"},s.fname+" "+s.lname),c.a.createElement("span",{className:"text-capitalize"},s.usertype)),c.a.createElement("i",{className:"fal fa-times orange closeBtn",onClick:i})),c.a.createElement("ul",{className:"navlink"},c.a.createElement("li",null,c.a.createElement(p.c,{to:"/admin/myprofile"},c.a.createElement("i",{className:"fal fa-user-circle"})," ",c.a.createElement("span",null,"My Profile"))),c.a.createElement("li",null,c.a.createElement(p.c,{to:"/admin/dashboard"},c.a.createElement("i",{className:"fal fa-tachometer"})," ",c.a.createElement("span",null,"Dashboard"))),"manufacturer"===s.usertype?c.a.createElement("li",null,c.a.createElement(p.c,{to:"/admin/producs"},c.a.createElement("i",{className:"fal fa-list-ol"}),c.a.createElement("span",null,"My Products"))):null,c.a.createElement("li",null,c.a.createElement(p.c,{to:"/admin/enquiries"},c.a.createElement("i",{className:"fal fa-envelope"})," ",c.a.createElement("span",null,"My Enquiries"))),"manufacturer"!==s.usertype?c.a.createElement("li",null,c.a.createElement(p.c,{to:"/admin/myorders"},c.a.createElement("i",{className:"fal fa-shopping-cart"})," ",c.a.createElement("span",null,"My Orders"))):null,"manufacturer"===s.usertype?c.a.createElement("li",null,c.a.createElement(p.c,{to:"/admin/mybookings"},c.a.createElement("i",{className:"fal fa-shopping-cart"})," ",c.a.createElement("span",null,"My Bookings"))):null,"supplier"===s.usertype?c.a.createElement("li",null,c.a.createElement(p.c,{to:"/admin/manufacturers"},c.a.createElement("i",{className:"fal fa-industry-alt"})," ",c.a.createElement("span",null,"Manufacturers"))):null,"manufacturer"===s.usertype?c.a.createElement("li",null,c.a.createElement(p.c,{to:"/admin/vender_requests"},c.a.createElement("i",{className:"fal fa-comment"})," ",c.a.createElement("span",null,"Vender Requests"))):null,"manufacturer"===s.usertype?c.a.createElement("li",null,c.a.createElement(p.c,{to:"/admin/venders"},c.a.createElement("i",{className:"fal fa-users"})," ",c.a.createElement("span",null,"Our Venders"))):null))}))}}]);
//# sourceMappingURL=18.2c40725c.chunk.js.map