(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[21],{128:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return o}));var n=a(44),c=a(0),l=a.n(c),r=function(e){var t=e.col,a=e.formgroup,c=Object(n.a)(e,["col","formgroup"]);return l.a.createElement("div",{className:"form-group ".concat(a," ").concat(t?"col-lg-"+t+" col-12":"")},l.a.createElement("input",Object.assign({},c,{className:"form-control"})))},o=function(e){var t=e.col,a=Object(n.a)(e,["col"]);return l.a.createElement("div",{className:"form-group col-lg-".concat(t," col-12")},l.a.createElement("textarea",Object.assign({},a,{className:"form-control"})))}},224:function(e,t,a){"use strict";a.r(t);var n=a(32),c=a.n(n),l=a(42),r=a(47),o=a(45),s=a(6),u=a(15),i=a(0),m=a.n(i),d=a(137),p=a(221),f=a(121),b=a(118),g=a(122),E=a(220),h=a(120),v=a(117),O=a(10),j=a(196);function y(){var e=Object(j.a)(["  \n\n.tags-input {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    padding:5px 8px;\n    border-bottom: 1px solid rgb(214, 216, 218);\n    border-radius: 0px;\n    background:#fff;    \n    &:focus-within {\n        border: 1px solid #0052cc;\n    }\n    input {\n        flex: 1;\n        border: none;\n        &:focus {\n            outline: transparent;\n        }\n    }\n}\n\n#tags {\n    display: flex;\n    flex-wrap: wrap;\n    padding: 0;\n    margin: 0;\n}\n\n.tag {\n    width: auto;    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    padding: 2px 10px;    \n    list-style: none;\n    border-radius: 6px;\n    margin: 2px 2px;\n    background: #004c8a;    \n    .tag-close-icon {\n        display: block;\n        width: 16px;\n        height: 16px;\n        line-height: 16px;\n        text-align: center;\n        font-size: 14px;\n        margin-left: 8px;\n        color: #0052cc;\n        border-radius: 50%;\n        background: #fff;\n        cursor: pointer;\n    }\n}\n\n  @media screen and (max-width: 567px) {\n      .tags-input {\n          width: calc(100vw - 32px);\n      }\n  }\n"]);return y=function(){return e},e}var x=a(197).a.div(y()),N=function(e){var t=m.a.useState([]),a=Object(u.a)(t,2),n=a[0],c=a[1];return m.a.createElement(x,null,m.a.createElement("div",{className:"tags-input"},m.a.createElement("ul",{id:"tags"},n?n.map((function(e,t){return m.a.createElement("li",{key:t,className:"tag"},m.a.createElement("span",{className:"tag-title"},e),m.a.createElement("span",{className:"tag-close-icon",onClick:function(){return e=t,void c(Object(o.a)(n.filter((function(t,a){return a!==e}))));var e}},"x"))})):null),m.a.createElement("input",{type:"text",onKeyUp:function(t){return"Enter"===t.key?function(t){""!==t.target.value&&(c([].concat(Object(o.a)(n),[t.target.value])),e.selectedTags([].concat(Object(o.a)(n),[t.target.value])),t.target.value="")}(t):null},placeholder:e.placeholder})))},C=a(222);var w=function(e){var t=Object(i.useState)(!1),a=Object(u.a)(t,2),n=a[0],c=a[1],l=Object(i.useState)(!1),r=Object(u.a)(l,2),s=r[0],d=r[1],p=Object(i.useState)([]),f=Object(u.a)(p,2),b=f[0],h=f[1];return Object(i.useEffect)((function(){O.a.get("/upload").then((function(e){d(e.data)}))}),[]),m.a.createElement(m.a.Fragment,null,m.a.createElement(g.a,{className:"bg_green mt-2",onClick:function(){return c(!0)}},"Select to Gallery"),m.a.createElement(C.a,{backdrop:"static",scrollable:!0,show:n,onHide:function(){return c(!1)},size:"xl","aria-labelledby":"example-custom-modal-styling-title"},m.a.createElement(C.a.Header,{closeButton:!0},m.a.createElement(C.a.Title,{id:"example-custom-modal-styling-title"},"Image Gallery")),m.a.createElement(C.a.Body,null,m.a.createElement("div",{className:"row no-gutters"},s?s.map((function(e){var t=b.some((function(t){return t.id===e.public_id}));return m.a.createElement("div",{className:"col-lg-1 col-4",key:e.public_id,onClick:function(t){return a=e.public_id,void s.find((function(e){new Promise((function(t,n){e.public_id===a&&t({url:e.secure_url,id:e.public_id})})).then((function(e){h([].concat(Object(o.a)(b),[e]))}))}));var a}},m.a.createElement(E.a,{src:e.secure_url,style:{height:"120px",width:"120px"},className:t?"border border-success":null,thumbnail:!0}))})):null)),m.a.createElement(C.a.Footer,null,m.a.createElement(g.a,{variant:"primary",onClick:function(){e.selected(b),c(!1)}},"Select & Close"))))},_=a(128),k=a(20),P=a(200),S=a.n(P),T=(a(202),a(14)),R=a(39),D=a(7);t.default=Object(i.memo)((function(e){var t=Object(i.useContext)(R.a),a=(t.data,t.dispatch),n=Object(i.useState)([]),j=Object(u.a)(n,2),y=j[0],x=j[1],C=Object(i.useState)(""),P=Object(u.a)(C,2),V=P[0],U=P[1],F=Object(i.useRef)(),H=Object(i.useRef)(),J=Object(k.useToasts)().addToast,z=Object(i.useState)([]),A=Object(u.a)(z,2),B=A[0],L=A[1],M=Object(i.useState)(0),G=Object(u.a)(M,1)[0],I=Object(i.useState)(!1),W=Object(u.a)(I,2),K=W[0],q=W[1],Q=Object(i.useRef)(null),X=Object(i.useState)(e.data),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee={appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3};Object(i.useEffect)((function(){var e=JSON.stringify({display:G,photosurl:B});Z&&B.length>0&&$(Object(s.a)(Object(s.a)({},Z),{},{photos:e,thumbnail:B[0].url}))}),[B,G]),Object(i.useEffect)((function(){var e=JSON.stringify(y);y.length>0&&$(Object(s.a)(Object(s.a)({},Z),{},{extra_fields:e}))}),[y]);function te(){return Z.categories?Z.type?Z.product_name?Z.selling_price&&Z.selling_price?Z.venders_price?Z.stock?Z.warranty?Z.details&&Z.terms_conditions?!(Z.photos.length<=2)||(J("Please select photos",ee),!1):(J("Please enter details",ee),!1):(J("Please enter warranty",ee),!1):(J("Please enter stock",ee),!1):(J("Please enter venders price",ee),!1):(J("Please enter selling price",ee),!1):(J("Please enter product name",ee),!1):(J("Please select type",ee),!1):(J("Please select catagory",ee),!1)}function ae(){return(ae=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1===t||!Q){e.next=6;break}return q(!0),e.next=4,Q.current.getCroppedCanvas().toDataURL("image/jpeg");case 4:ne(e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(e){O.a.post("/upload",{image:e}).then((function(e){console.log(e.data),!1===e.data.status?J(e.data.message,ee):L([].concat(Object(o.a)(B),[e.data])),q(!1)}))}Object(i.useEffect)((function(){if(e.data&&e.data.photos){var t=JSON.parse(e.data.photos);L(t.photosurl)}}),[e.data.photos]),Object(i.useEffect)((function(){if(e.data&&e.data.extra_fields){var t=JSON.parse(e.data.extra_fields);x(t)}}),[e.data.extra_fields]);var ce=function(){O.a.get("/product/admin/products",Object(D.a)()).then((function(e){!1!==e.data.status&&a({type:"FETCH_PRODUCTS",payload:e.data})}))},le=function(e){var t=e.target.name,a=e.target.value;$(Object(s.a)(Object(s.a)({},Z),{},Object(l.a)({},t,a)))};return m.a.createElement("div",{className:"p-3 mb-3 border-bottom"},m.a.createElement(d.a,null,m.a.createElement(d.a.Row,null,m.a.createElement("div",{className:"form-group col-lg-3 col-12"},m.a.createElement(d.a.Control,{as:"select",name:"categories",onChange:function(e){return le(e)}},m.a.createElement("option",null,"Choose Categories"),m.a.createElement("option",{value:"industrial"},"Industrial"),m.a.createElement("option",{value:"construction"},"Construction"),m.a.createElement("option",{value:"agriculture"},"Agriculture"),m.a.createElement("option",{value:"housewares"},"Housewares"))),m.a.createElement("div",{className:"form-group col-lg-3 col-12"},m.a.createElement(d.a.Control,{as:"select",name:"type",onChange:function(e){return le(e)}},m.a.createElement("option",null,"Choose Type"),m.a.createElement("option",{value:"Hand Tools"},"Hand Tools"),m.a.createElement("option",{value:"Automobile"},"Automobile"),m.a.createElement("option",{value:"Furniture"},"Furniture"),m.a.createElement("option",{value:"electrical"},"Electrical"))),m.a.createElement(_.a,{col:3,name:"brand_name",placeholder:"Brand Name",type:"text",defaultValue:Z.brand_name,onChange:function(e){return le(e)}}),m.a.createElement(_.a,{col:3,name:"product_name",placeholder:"Product Name",type:"text",defaultValue:Z.product_name,onChange:function(e){return le(e)}}),m.a.createElement(_.a,{col:3,name:"purchase_price",placeholder:"Purchase Price",type:"number",defaultValue:Z.purchase_price,onChange:function(e){return le(e)}}),m.a.createElement(_.a,{col:3,name:"selling_price",placeholder:"Selling Price",type:"number",defaultValue:Z.selling_price,onChange:function(e){return le(e)}}),m.a.createElement(_.a,{col:3,name:"venders_price",placeholder:"Venders Price",type:"number",defaultValue:Z.venders_price,onChange:function(e){return le(e)}}),m.a.createElement(_.a,{col:3,name:"stock",placeholder:"Stock",type:"number",defaultValue:Z.stock,onChange:function(e){return le(e)}}),m.a.createElement(_.a,{col:3,name:"minorder",placeholder:"Min Order",type:"number",defaultValue:Z.minorder,onChange:function(e){return le(e)}}),m.a.createElement(_.a,{col:3,name:"warranty",placeholder:"Warranty in Months",type:"number",defaultValue:Z.warranty,onChange:function(e){return le(e)}}),m.a.createElement("div",{className:"col-12 col-lg-6"},m.a.createElement(N,{selectedTags:function(e){var t=JSON.stringify(e);$(Object(s.a)(Object(s.a)({},Z),{},{keywords:t}))},placeholder:"Add search keyword"}))),m.a.createElement(d.a.Row,null,m.a.createElement("div",{className:"ml-1"},y?y.map((function(e,t){return m.a.createElement(p.a,{className:"bg_yellow white ml-1",key:e.name+t}," ","".concat(e.name," : ").concat(e.value))})):null),m.a.createElement("div",{className:"col-12 col-lg-4"},m.a.createElement(f.a,{className:"mb-3",size:"sm"},m.a.createElement(b.a,{placeholder:"Title",ref:F}),m.a.createElement(b.a,{placeholder:"Value",ref:H}),m.a.createElement(f.a.Prepend,null,m.a.createElement(g.a,{size:"sm",variant:"",className:"btn_green",type:"button",onClick:function(e){return function(){var e=F.current.value,t=H.current.value;e&&t&&(x([].concat(Object(o.a)(y),[{name:e,value:t}])),F.current.value="",H.current.value="")}()}},m.a.createElement("i",{className:"fal fa-plus"})," Add More"))))),m.a.createElement(d.a.Row,null,m.a.createElement(_.b,{col:6,name:"details",placeholder:"Details",value:Z.details,onChange:function(e){return le(e)}}),m.a.createElement(_.b,{col:6,name:"terms_conditions",placeholder:"Terms and Conditions",value:Z.terms_conditions,onChange:function(e){return le(e)}})),m.a.createElement(d.a.Row,null,m.a.createElement("div",{className:"col-lg-6"},m.a.createElement("div",{className:"custom-file"},m.a.createElement("input",{type:"file",className:"custom-file-input",onChange:function(e){return function(e){var t=window.URL.createObjectURL(e.target.files[0]);U(t)}(e)}}),m.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},"Choose file")),V?m.a.createElement("div",{className:"mt-2 mb-2"},m.a.createElement(S.a,{ref:Q,src:V,style:{maxHeight:400,maxWidth:600,width:"100%"},aspectRatio:1,guides:!1})):null,V?m.a.createElement("div",null,m.a.createElement("button",{type:"button",className:"btn btn_orange",onClick:function(e){return U(!1),void O.a.get("/product/admin/products",Object(D.a)()).then((function(e){!1!==e.data.status&&a({type:"FETCH_PRODUCTS",payload:e.data})}))}},"Cancel"),m.a.createElement("button",{type:"button",className:"btn btn_blue ml-2",onClick:function(e){return function(e){return ae.apply(this,arguments)}(e)},disabled:!!K},K?m.a.createElement("span",null,m.a.createElement("span",{className:"spinner-grow spinner-grow-sm"}),"Uploading.."):m.a.createElement("span",null,"Crop & Upload"))):null),m.a.createElement("div",{className:"col-lg-6"},Z.thumbnail?m.a.createElement("div",{className:"mb-2 d-flex flex-column"},m.a.createElement(E.a,{src:Z.thumbnail,style:{border:"2px solid green"},className:"img-fluid",width:"100"}),m.a.createElement("small",null,"Product Thumbnail")):null,m.a.createElement(h.a,null,B&&B.length>0?B.map((function(e,t){return m.a.createElement(v.a,{xs:6,md:2,key:e.id},m.a.createElement("div",{style:{border:"2px solid #dee2e6"}},m.a.createElement("div",{className:"p-1 d-flex justify-content-between"},m.a.createElement(T.Radio,{name:"thumb",size:.8,onClick:function(e){return function(e){$(Object(s.a)(Object(s.a)({},Z),{},{thumbnail:B[e].url}))}(t)}}),m.a.createElement("i",{className:"fal fa-times",onClick:function(e){return function(e){var t=B;t.splice(e,1),L(Object(o.a)(t))}(t)}})),m.a.createElement(E.a,{src:"".concat(e.url),className:"img-fluid"})))})):null)),m.a.createElement("div",{className:"col"},m.a.createElement(w,{selected:function(e){L([].concat(Object(o.a)(B),Object(o.a)(e)))}}))),m.a.createElement("div",{className:"d-flex justify-content-end"},e.create?m.a.createElement("button",{className:"btn btn-sm btn_blue",onClick:function(e){te()&&O.a.post("/product/add",Z,Object(D.a)()).then((function(e){!1===e.data.status?J(e.data.message,ee):(ce(),J("Product added successfully",{appearance:"success",autoDismiss:!0,autoDismissTimeout:2e3}))}))},type:"button"},"Save Product"):m.a.createElement("button",{className:"btn btn-sm btn_blue",onClick:function(e){te()&&O.a.put("/product",Z,Object(D.a)()).then((function(e){console.log(e.data),!1===e.data.status?J(e.data.message,ee):(ce(),J("Product 'updated' successfully",{appearance:"success",autoDismiss:!0,autoDismissTimeout:2e3}))}))},type:"button"},"Update Product"))))}))}}]);
//# sourceMappingURL=21.0d13d2b8.chunk.js.map