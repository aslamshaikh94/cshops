(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[24],{102:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));var n=a(33),c=a(0),l=a.n(c),r=function(e){var t=e.col,a=e.formgroup,c=Object(n.a)(e,["col","formgroup"]);return l.a.createElement("div",{className:"form-group ".concat(a," ").concat(t?"col-lg-"+t+" col-12":"")},l.a.createElement("input",Object.assign({},c,{className:"form-control"})))},o=function(e){var t=e.col,a=Object(n.a)(e,["col"]);return l.a.createElement("div",{className:"form-group col-lg-".concat(t," col-12")},l.a.createElement("textarea",Object.assign({},a,{className:"form-control"})))}},108:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return l}));var n=a(54),c=function(e){n.a.initialize("UA-166008242-1"),n.a.pageview(window.location.pathname+window.location.search)},l=function(e,t){n.a.event({category:e||"user",action:t})}},194:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(0),l=a.n(c),r=a(15),o=a.n(r),s=a(181),i=function(e){return l.a.createElement(s.a,Object.assign({smallImage:{isFluidWidth:!0,src:e.thumbnail},largeImage:{width:800,height:800,src:e.original},lensStyle:{backgroundColor:"rgba(0,0,0,.6)"}},{isHintEnabled:!1,enlargedImageContainerDimensions:{width:"100%",height:"100%"},enlargedImagePosition:"over",enlargedImageContainerStyle:{Index:1e3}}))},u=a(31),m=a(10),p=a(118),d=a(102),f=a(30),b=a(9),h=a(29),E=Object(c.memo)((function(e){var t=Object(c.useContext)(h.a).data,a=Object(f.useToasts)().addToast,r={appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3},s=e.enqId,i=e.sellerId,E=Object(c.useState)({user_id:"",product_id:s,seller_id:i,fullname:"",phone:"",email:"",address:"",message:"",quantity:""}),g=Object(n.a)(E,2),y=g[0],N=g[1];Object(c.useEffect)((function(){N(Object(m.a)({},y,{seller_id:i}))}),[i]);var O=function(e){var t=e.target.name,a=e.target.value;N(Object(m.a)({},y,Object(u.a)({},t,a)))};return l.a.createElement("div",{className:"mt-4 pt-4 border-top"},l.a.createElement(p.a.Row,null,l.a.createElement(d.a,{col:4,name:"fullname",placeholder:"Full Name",type:"text",onChange:function(e){return O(e)}}),l.a.createElement(d.a,{col:4,name:"phone",placeholder:"Contact Number",type:"phone",onChange:function(e){return O(e)}}),l.a.createElement(d.a,{col:4,name:"email",placeholder:"Email",type:"email",onChange:function(e){return O(e)}}),l.a.createElement(d.a,{col:3,name:"quantity",placeholder:"Quantity",type:"number",onChange:function(e){return O(e)}}),l.a.createElement(d.a,{col:9,name:"address",placeholder:"Address",type:"text",onChange:function(e){return O(e)}})),l.a.createElement(p.a.Row,null,l.a.createElement(d.b,{col:12,name:"message",placeholder:"Message",onChange:function(e){return O(e)}})),l.a.createElement("div",{className:"d-flex justify-content-end"},l.a.createElement("button",{className:"btn btn_yellow mr-2",onClick:function(t){return e.cancelEnquiry(t)}},l.a.createElement("i",{className:"fal fa-times"})," Cancel"),l.a.createElement("button",{className:"btn btn_orange",onClick:function(n){return function(n){var c=y.fullname,l=y.phone,s=y.email,i=y.address,u=y.message,m=y.quantity;c&&l&&s&&i&&u&&m?o.a.post("".concat(t.API_URL,"/enquiry/send"),y,Object(b.a)()).then((function(t){a("Your enquiry successfully send I will contact you soon",{appearance:"success",autoDismiss:!0,autoDismissTimeout:3e3}),e.cancelEnquiry(n)})):a("Please enter given details",r)}(n)}},l.a.createElement("i",{className:"fal fa-location-arrow"})," SEND")))})),g=a(147),y=a.n(g),N=(a(155),a(44)),O=a(108);t.default=Object(c.memo)((function(e){var t=Object(c.useContext)(h.a),a=t.data,r=t.dispatch,s=Object(c.useState)(),u=Object(n.a)(s,2),m=u[0],p=u[1],d=Object(c.useState)(!1),g=Object(n.a)(d,2),j=g[0],_=g[1],w=Object(c.useState)([]),v=Object(n.a)(w,2),C=v[0],I=v[1],A=e.match.params.id,x=Object(f.useToasts)().addToast;function T(e,t){var n={product_id:e,type:t};o.a.post("".concat(a.API_URL,"/addto"),n,Object(b.a)()).then((function(e){!1===e.data.status?x(e.data.message,{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3}):(o.a.get("".concat(a.API_URL,"/addto/wishlist?type=favorite"),Object(b.a)()).then((function(e){!1!==e.data.status&&r({type:"FETCH_FAVORITE",payload:e.data})})),o.a.get("".concat(a.API_URL,"/addto/wishlist?type=cart"),Object(b.a)()).then((function(e){!1!==e.data.status&&r({type:"FETCH_CART",payload:e.data})})))}))}return Object(c.useEffect)((function(){Object(O.b)()}),[]),Object(c.useEffect)((function(){Object(b.b)(!0),o.a.get("".concat(a.API_URL,"/product/").concat(A)).then((function(e){p(e.data[0]),Object(b.b)(!1)}))}),[A,a.API_URL]),Object(c.useEffect)((function(){if(m){var e=JSON.parse(m.photos),t=m?e.photosurl.map((function(e){return{original:"".concat(e.url),thumbnail:"".concat(e.url)}})):null;I(t)}}),[m]),l.a.createElement("main",{className:"productDetails bg_white"},l.a.createElement(N.a,{title:m&&m.product_name?m.product_name:null,meta:[{name:"description",content:m?m.details:"NA"},{name:"keywords",content:m&&m.product_name?m.product_name:null},{property:"og:type",content:"article"},{property:"og:title",content:m&&m.product_name?m.product_name:null},{property:"og:image",content:m&&m.thumbnail?m.thumbnail:null},{property:"og:url",content:window.location.href}]}),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-5 border-right"},C?l.a.createElement(y.a,{items:C,thumbnailPosition:"right",showFullscreenButton:!1,showPlayButton:!1,showNav:!1,renderItem:i}):null),l.a.createElement("div",{className:"col-lg-7"},l.a.createElement("h4",{className:"text-uppercase orange"}," ",m?m.product_name:"NA"," "),l.a.createElement("hr",null),l.a.createElement("div",{className:"text-uppercase"},l.a.createElement("h6",null,l.a.createElement("span",{className:"blue"},"Price :"),m&&a.loggedInUser&&"supplier"===a.loggedInUser.usertype?m.venders_price:m?m.selling_price:"null"),l.a.createElement("h6",null,l.a.createElement("span",{className:"blue"},"Stock :"),m&&m.stock>0?m.stock:" We will manufacture on pre booking for you"),l.a.createElement("h6",null,l.a.createElement("span",{className:"blue"},"Min. Order:"),m?m.minorder:"NA",l.a.createElement("sup",{style:{textTransform:"capitalize"}},"  Pieces")),l.a.createElement("h6",null,l.a.createElement("span",{className:"blue"},"Warranty :"),m?m.warranty:"NA",l.a.createElement("sup",{style:{textTransform:"capitalize"}}," Months")),m&&m.extra_fields?JSON.parse(m.extra_fields).map((function(e,t){return l.a.createElement("h6",{key:e.name+t},l.a.createElement("span",{className:"blue"},e.name," :")," ",e.value)})):null),l.a.createElement("hr",null),l.a.createElement("h6",{className:"blue text-uppercase"},"Description"),l.a.createElement("p",null,m?m.details:"NA"," "),l.a.createElement("hr",null),l.a.createElement("button",{className:"btn btn_yellow mr-2",onClick:function(e){return T(m.id,"cart")}},l.a.createElement("i",{className:"fal fa-shopping-cart"})," ADD TO CART"),l.a.createElement("button",{className:"btn btn_orange mr-2",onClick:function(e){_(!0)}},l.a.createElement("i",{className:"fal fa-location-arrow"})," INQUIRY NOW"),m&&m.phone?l.a.createElement("a",{href:"https://wa.me/91".concat(m.phone,"?text=").concat(window.location.href),className:"btn btn_whatsapp",target:"_blanck"},l.a.createElement("i",{className:"fab fa-whatsapp"})," WHATSAPP CHAT"):null,j?l.a.createElement(E,{enqId:A,cancelEnquiry:function(e){_(!1)},sellerId:m?m.seller_id:null}):null)),l.a.createElement("hr",null),m&&m.terms_conditions?l.a.createElement("div",null,l.a.createElement("h6",{className:"mb-0 blue text-uppercase",style:{fontSize:"14px"}},"Terms Conditions"),l.a.createElement("p",{style:{fontSize:"12px"}},m?m.terms_conditions:"NA"," ")):null))}))}}]);
//# sourceMappingURL=24.402cd1d3.chunk.js.map