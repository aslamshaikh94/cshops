(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[24],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return o}));var n=a(33),c=a(0),r=a.n(c),l=function(e){var t=e.col,a=e.formgroup,c=Object(n.a)(e,["col","formgroup"]);return r.a.createElement("div",{className:"form-group ".concat(a," ").concat(t?"col-lg-"+t+" col-12":"")},r.a.createElement("input",Object.assign({},c,{className:"form-control"})))},o=function(e){var t=e.col,a=Object(n.a)(e,["col"]);return r.a.createElement("div",{className:"form-group col-lg-".concat(t," col-12")},r.a.createElement("textarea",Object.assign({},a,{className:"form-control"})))}},107:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return s}));var n=a(108),c=a.n(n),r=a(109),l=a(123),o=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.initialize("UA-166008242-1");case 2:return e.next=4,l.a.pageview(window.location.pathname+window.location.search);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(e,t){l.a.event({category:e||"user",action:t})}},220:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(0),r=a.n(c),l=a(15),o=a.n(l),s=a(201),i=function(e){return r.a.createElement(s.a,Object.assign({smallImage:{isFluidWidth:!0,src:e.thumbnail},largeImage:{width:800,height:800,src:e.original},lensStyle:{backgroundColor:"rgba(0,0,0,.6)"}},{isHintEnabled:!1,enlargedImageContainerDimensions:{width:"100%",height:"100%"},enlargedImagePosition:"over",enlargedImageContainerStyle:{Index:1e3}}))},u=a(31),m=a(5),d=a(124),p=a(106),f=a(19),b=a(11),h=a(30),E=Object(c.memo)((function(e){var t=Object(c.useContext)(h.a).data,a=Object(f.useToasts)().addToast,l={appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3},s=e.enqId,i=e.sellerId,E=Object(c.useState)({user_id:"",product_id:s,seller_id:i,fullname:"",phone:"",email:"",address:"",message:"",quantity:""}),g=Object(n.a)(E,2),N=g[0],y=g[1];Object(c.useEffect)((function(){y(Object(m.a)(Object(m.a)({},N),{},{seller_id:i}))}),[i]);var O=function(e){var t=e.target.name,a=e.target.value;y(Object(m.a)(Object(m.a)({},N),{},Object(u.a)({},t,a)))};return r.a.createElement("div",{className:"mt-4 pt-4 border-top"},r.a.createElement(d.a.Row,null,r.a.createElement(p.a,{col:4,name:"fullname",placeholder:"Full Name",type:"text",onChange:function(e){return O(e)}}),r.a.createElement(p.a,{col:4,name:"phone",placeholder:"Contact Number",type:"phone",onChange:function(e){return O(e)}}),r.a.createElement(p.a,{col:4,name:"email",placeholder:"Email",type:"email",onChange:function(e){return O(e)}}),r.a.createElement(p.a,{col:3,name:"quantity",placeholder:"Quantity",type:"number",onChange:function(e){return O(e)}}),r.a.createElement(p.a,{col:9,name:"address",placeholder:"Address",type:"text",onChange:function(e){return O(e)}})),r.a.createElement(d.a.Row,null,r.a.createElement(p.b,{col:12,name:"message",placeholder:"Message",onChange:function(e){return O(e)}})),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement("button",{className:"btn btn_yellow mr-2",onClick:function(t){return e.cancelEnquiry(t)}},r.a.createElement("i",{className:"fal fa-times"})," Cancel"),r.a.createElement("button",{className:"btn btn_orange",onClick:function(n){return function(n){var c=N.fullname,r=N.phone,s=N.email,i=N.address,u=N.message,m=N.quantity;c&&r&&s&&i&&u&&m?o.a.post("".concat(t.API_URL,"/enquiry/send"),N,Object(b.a)()).then((function(t){a("Your enquiry successfully send I will contact you soon",{appearance:"success",autoDismiss:!0,autoDismissTimeout:3e3}),e.cancelEnquiry(n)})):a("Please enter given details",l)}(n)}},r.a.createElement("i",{className:"fal fa-location-arrow"})," SEND")))})),g=a(157),N=a.n(g),y=(a(165),a(49)),O=a(107),w=a(207),_=a(208),j=a(209),v=a(210);t.default=Object(c.memo)((function(e){var t=Object(c.useContext)(h.a),a=t.data,l=t.dispatch,s=Object(c.useState)(),u=Object(n.a)(s,2),m=u[0],d=u[1],p=Object(c.useState)(!1),g=Object(n.a)(p,2),I=g[0],A=g[1],C=Object(c.useState)([]),x=Object(n.a)(C,2),T=x[0],k=x[1],P=e.match.params.id,S=Object(f.useToasts)().addToast;function D(e,t){var n={product_id:e,type:t};o.a.post("".concat(a.API_URL,"/addto"),n,Object(b.a)()).then((function(e){!1===e.data.status?S(e.data.message,{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3}):(o.a.get("".concat(a.API_URL,"/addto/wishlist?type=favorite"),Object(b.a)()).then((function(e){!1!==e.data.status&&l({type:"FETCH_FAVORITE",payload:e.data})})),o.a.get("".concat(a.API_URL,"/addto/wishlist?type=cart"),Object(b.a)()).then((function(e){!1!==e.data.status&&l({type:"FETCH_CART",payload:e.data})})))}))}return Object(c.useEffect)((function(){Object(O.b)()}),[]),Object(c.useEffect)((function(){Object(b.b)(!0),o.a.get("".concat(a.API_URL,"/product/").concat(P)).then((function(e){d(e.data[0]),Object(b.b)(!1)}))}),[P,a.API_URL]),Object(c.useEffect)((function(){if(m){var e=JSON.parse(m.photos),t=m?e.photosurl.map((function(e){return{original:"".concat(e.url),thumbnail:"".concat(e.url)}})):null;k(t)}}),[m]),console.log(m),r.a.createElement("main",{className:"productDetails bg_white"},r.a.createElement(y.a,{title:m&&m.product_name?m.product_name:null,meta:[{name:"description",content:m?m.details:"NA"},{name:"keywords",content:m&&m.product_name?m.product_name:null},{property:"og:type",content:"article"},{property:"og:title",content:m&&m.product_name?m.product_name:null},{property:"og:image",content:m&&m.thumbnail?m.thumbnail:null},{property:"og:url",content:window.location.href}]}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-5 border-right"},T?r.a.createElement(N.a,{items:T,thumbnailPosition:"right",showFullscreenButton:!1,showPlayButton:!1,showNav:!1,renderItem:i}):null),r.a.createElement("div",{className:"col-lg-7"},r.a.createElement("h1",{className:"text-uppercase orange",style:{fontSize:"1.8rem"}},m?m.product_name:"NA"),r.a.createElement("hr",null),r.a.createElement("div",{className:"text-uppercase"},r.a.createElement("h6",null,r.a.createElement("span",{className:"blue"},"Brand Name : "),m&&m.brand_name?m.brand_name:""),r.a.createElement("h6",null,r.a.createElement("span",{className:"blue"},"Price : "),m&&a.loggedInUser&&"supplier"===a.loggedInUser.usertype?m.venders_price:m?m.selling_price:"null"),r.a.createElement("h6",null,r.a.createElement("span",{className:"blue"},"Stock : "),m&&m.stock>0?m.stock:" We will manufacture for you on pre order "),r.a.createElement("h6",null,r.a.createElement("span",{className:"blue"},"Min. Order : "),m?m.minorder:"NA",r.a.createElement("sup",{style:{textTransform:"capitalize"}},"  Pieces")),r.a.createElement("h6",null,r.a.createElement("span",{className:"blue"},"Warranty : "),m?m.warranty:"NA",r.a.createElement("sup",{style:{textTransform:"capitalize"}}," Months")),m&&m.extra_fields?JSON.parse(m.extra_fields).map((function(e,t){return r.a.createElement("h6",{key:e.name+t},r.a.createElement("span",{className:"blue"},e.name," :")," ",e.value)})):null),r.a.createElement("hr",null),r.a.createElement("h6",{className:"blue text-uppercase"},"Description"),r.a.createElement("p",null,m?m.details:"NA"," "),r.a.createElement("hr",null),r.a.createElement("button",{className:"btn btn_yellow mr-2",onClick:function(e){return D(m.id,"cart")}},r.a.createElement("i",{className:"fal fa-shopping-cart"})," ADD TO CART"),r.a.createElement("button",{className:"btn btn_orange mr-2",onClick:function(e){A(!0)}},r.a.createElement("i",{className:"fal fa-location-arrow"})," INQUIRY NOW"),m&&m.phone?r.a.createElement("a",{href:"https://wa.me/91".concat(m.phone,"?text=").concat(window.location.href," I am interested for this product "),className:"btn btn_whatsapp",target:"_blanck"},r.a.createElement("i",{className:"fab fa-whatsapp"})," WHATSAPP CHAT"):null,I?r.a.createElement(E,{enqId:P,cancelEnquiry:function(e){A(!1)},sellerId:m?m.seller_id:null}):null,r.a.createElement("div",{className:"mt-2"},r.a.createElement(w.a,{url:window.location.href,title:m?m.product_name:"NA"},r.a.createElement(_.a,{size:32,round:!0})),r.a.createElement(j.a,{url:window.location.href,className:"ml-2",title:m?m.product_name:"NA"},r.a.createElement(v.a,{size:32,round:!0}))))),r.a.createElement("hr",null),m&&m.terms_conditions?r.a.createElement("div",null,r.a.createElement("h6",{className:"mb-0 blue text-uppercase",style:{fontSize:"14px"}},"Terms Conditions"),r.a.createElement("p",{style:{fontSize:"12px"}},m?m.terms_conditions:"NA"," ")):null))}))}}]);
//# sourceMappingURL=24.b4e8909b.chunk.js.map