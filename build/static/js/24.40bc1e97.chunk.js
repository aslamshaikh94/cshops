(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[24],{181:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),u=a(119),s=a.n(u),o=a(120),m=a(16),i=a(117),d=a(97),E=(a(99),a(13)),b=a(9),p=a(102),f=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(8),a.e(25)]).then(a.bind(null,193))})),h=Object(n.memo)((function(e){var t=Object(n.useContext)(p.AdminContext),a=t.data,l=t.dispatch,u=Object(n.useState)(!1),h=Object(m.a)(u,2),T=h[0],O=h[1],j=Object(n.useState)([]),v=Object(m.a)(j,2),y=v[0],g=v[1],P=Object(n.useState)(!0),_=Object(m.a)(P,2),C=_[0],N=_[1],k=Object(n.useState)(!1),S=Object(m.a)(k,2),x=S[0],U=S[1];Object(n.useEffect)((function(){a.products&&g(a.products)}),[a]);var A=function(){r.a.get("".concat(a.API_URL,"/product/admin/products"),Object(b.a)()).then((function(e){l({type:"FETCH_PRODUCTS",payload:e.data}),console.log(e.data)}))},w=function(){var e=Object(o.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(!T);case 2:return e.next=4,U(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"border-bottom d-flex justify-content-end p-2 panelheader"},c.a.createElement(i.a,{size:"sm",className:"btnadd",onClick:function(e){return w(e)}},c.a.createElement("i",{className:"far fa-".concat(T?"times":"plus")})," ",T?"Cancel":"Add Product")),T?c.a.createElement(f,{data:x,create:C}):null,c.a.createElement("div",{className:"p-3"},c.a.createElement(d.Table,{className:"table table-sm table-bordered",size:"sm"},c.a.createElement(d.Thead,null,c.a.createElement(d.Tr,null,c.a.createElement(d.Th,null,"#"),c.a.createElement(d.Th,null,"Product Name"),c.a.createElement(d.Th,null,"Purchase Price"),c.a.createElement(d.Th,null,"Selling Price"),c.a.createElement(d.Th,null,"Venders Price"),c.a.createElement(d.Th,null,"Stock"),c.a.createElement(d.Th,null,"Warranty"),c.a.createElement(d.Th,null,"Photos"),c.a.createElement(d.Th,null,"Actions"))),c.a.createElement(d.Tbody,null,y?y.map((function(e,t){return c.a.createElement(d.Tr,{key:e.id},c.a.createElement(d.Td,null,"CSP".concat(e.id)),c.a.createElement(d.Td,null,e.product_name),c.a.createElement(d.Td,null,e.purchase_price),c.a.createElement(d.Td,null,e.selling_price),c.a.createElement(d.Td,null,e.venders_price),c.a.createElement(d.Td,null,e.stock),c.a.createElement(d.Td,null,e.warranty),c.a.createElement(d.Td,null,c.a.createElement("img",{src:e.thumbnail,alt:e.product_name,wdith:"30",height:"30"})),c.a.createElement(d.Td,null,c.a.createElement("button",{className:"btn btn_red btn-sm mr-1",onClick:function(t){return n=e.id,void r.a.delete("".concat(a.API_URL,"/product/delete/").concat(n),Object(b.a)()).then((function(e){l({type:"DELETE_PRODUCT",payload:n}),A()}));var n}},c.a.createElement("i",{className:"fal fa-trash-alt"})),c.a.createElement("button",{className:"btn btn_orange btn-sm mr-1",onClick:function(t){return a=e.id,O(!0),U(y.find((function(e){return e.id===a}))),void N(!1);var a}},c.a.createElement("i",{className:"fal fa-pen"})),c.a.createElement(E.b,{className:"btn btn_green btn-sm",target:"_blank",to:"/product/".concat(e.id)},c.a.createElement("i",{className:"fal fa-eye"}))))})):null))))})),T=a(93);t.default=Object(T.a)((function(){var e=Object(n.useContext)(p.AdminContext),t=e.data,a=e.dispatch;return Object(n.useEffect)((function(){r.a.get("".concat(t.API_URL,"/product/admin/products"),Object(b.a)()).then((function(e){a({type:"FETCH_PRODUCTS",payload:e.data})}))}),[]),c.a.createElement("div",null,t.loggedInUser&&"buyer"!==t.loggedInUser.usertype?c.a.createElement(h,null):null)}))},93:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){return function(t){return c.a.createElement("div",{className:"adminpanel"},c.a.createElement(e,t))}}}}]);
//# sourceMappingURL=24.40bc1e97.chunk.js.map