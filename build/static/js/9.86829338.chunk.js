(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[9],{104:function(e,a,t){"use strict";var r=t(2),n=t(4),s=t(27),o=t.n(s),l=t(0),c=t.n(l),i=t(28),u=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.as,m=void 0===l?"div":l,d=Object(n.a)(e,["bsPrefix","className","as"]),f=Object(i.b)(t,"col"),p=[],b=[];return u.forEach((function(e){var a,t,r,n=d[e];if(delete d[e],null!=n&&"object"===typeof n){var s=n.span;a=void 0===s||s,t=n.offset,r=n.order}else a=n;var o="xs"!==e?"-"+e:"";null!=a&&p.push(!0===a?""+f+o:""+f+o+"-"+a),null!=r&&b.push("order"+o+"-"+r),null!=t&&b.push("offset"+o+"-"+t)})),p.length||p.push(f),c.a.createElement(m,Object(r.a)({},d,{ref:a,className:o.a.apply(void 0,[s].concat(p,b))}))}));m.displayName="Col",a.a=m},105:function(e,a,t){"use strict";var r=t(2),n=t(4),s=t(27),o=t.n(s),l=t(0),c=t.n(l),i=(t(96),t(97)),u=t(93),m=t(28),d=c.a.forwardRef((function(e,a){var t,s,i=e.bsPrefix,d=e.type,f=e.size,p=e.id,b=e.className,v=e.isValid,y=e.isInvalid,O=e.plaintext,h=e.readOnly,j=e.as,x=void 0===j?"input":j,E=Object(n.a)(e,["bsPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","as"]),N=Object(l.useContext)(u.a).controlId;if(i=Object(m.b)(i,"form-control"),O)(s={})[i+"-plaintext"]=!0,t=s;else if("file"===d){var g;(g={})[i+"-file"]=!0,t=g}else{var P;(P={})[i]=!0,P[i+"-"+f]=f,t=P}return c.a.createElement(x,Object(r.a)({},E,{type:d,ref:a,readOnly:h,id:p||N,className:o()(b,t,v&&"is-valid",y&&"is-invalid")}))}));d.displayName="FormControl",d.Feedback=i.a,a.a=d},106:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=null;return a.forEach((function(e){if(null==n){var a=e.apply(void 0,t);null!=a&&(n=a)}})),n}return(0,s.default)(r)};var r,n=t(107),s=(r=n)&&r.__esModule?r:{default:r};e.exports=a.default},107:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,n,s,o){var l=n||"<<anonymous>>",c=o||r;if(null==t[r])return a?new Error("Required "+s+" `"+c+"` was not specified in `"+l+"`."):null;for(var i=arguments.length,u=Array(i>6?i-6:0),m=6;m<i;m++)u[m-6]=arguments[m];return e.apply(void 0,[t,r,l,s,c].concat(u))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},111:function(e,a,t){var r;e.exports=(r=t(0),function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="/",t(t.s=1)}([function(e,a){e.exports=r},function(e,a,t){e.exports=t(3)},function(e,a,t){},function(e,a,t){"use strict";function r(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}t.r(a);var n=t(0),s=t.n(n),o=(t(2),{_current:0,getNew:function(){return this._current++,this._current}}),l=(HTMLElement.prototype.pseudoStyle=function(e,a,t){var r=document.head||document.getElementsByTagName("head")[0],n=document.getElementById("pseudoStyles")||document.createElement("style");n.id="pseudoStyles";var s="pseudoStyle"+o.getNew();return this.className+=" "+s,n.innerHTML+="\n."+s+":"+e+"{"+a+":"+t+"}",r.appendChild(n),this},function(e){var a=e.label,t=e.color,o=e.bg,l=e.text,c=e.size,i=r(e,["label","color","bg","text","size"]),u=Object(n.useRef)(null);return Object(n.useEffect)((function(){u.current.pseudoStyle("after","background",o),u.current.pseudoStyle("before","border-color",t),u.current.style.transform="scale(".concat(c,")")}),[]),s.a.createElement("label",{className:"labelcheckbox"},s.a.createElement("input",Object.assign({type:"checkbox",className:"checkbox",ref:u},i)),s.a.createElement("span",{style:{color:l}},a))}),c=function(e){var a=e.label,t=e.color,o=e.bg,l=e.text,c=e.size,i=r(e,["label","color","bg","text","size"]),u=Object(n.useRef)(null);return Object(n.useEffect)((function(){u.current.pseudoStyle("after","background",o),u.current.pseudoStyle("before","background",t),u.current.style.transform="scale(".concat(c,")")}),[]),s.a.createElement("label",{className:"labelradio custom-control-inline"},s.a.createElement("input",Object.assign({type:"radio",className:"radio"},i,{ref:u})),s.a.createElement("span",{style:{color:l}},a))};t.d(a,"Checkbox",(function(){return l})),t.d(a,"Radio",(function(){return c})),a.default=l}]))},114:function(e,a,t){"use strict";t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return s}));var r=t(54),n=function(e){r.a.initialize("UA-166008242-1"),r.a.pageview(e)},s=function(e,a){r.a.event({category:"User",action:a})}},118:function(e,a,t){"use strict";var r=t(2),n=t(4),s=t(27),o=t.n(s),l=t(0),c=t.n(l),i=(t(106),t(97)),u=t(93),m=t(28),d=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,i=e.bsCustomPrefix,d=e.className,f=e.isValid,p=e.isInvalid,b=e.isStatic,v=e.as,y=void 0===v?"input":v,O=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),h=Object(l.useContext)(u.a),j=h.controlId;return s=h.custom?Object(m.b)(i,"custom-control-input"):Object(m.b)(s,"form-check-input"),c.a.createElement(y,Object(r.a)({},O,{ref:a,id:t||j,className:o()(d,s,f&&"is-valid",p&&"is-invalid",b&&"position-static")}))}));d.displayName="FormCheckInput",d.defaultProps={type:"checkbox"};var f=d,p=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,i=e.className,d=e.htmlFor,f=Object(n.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),p=Object(l.useContext)(u.a),b=p.controlId;return t=p.custom?Object(m.b)(s,"custom-control-label"):Object(m.b)(t,"form-check-label"),c.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:d||b,className:o()(i,t)}))}));p.displayName="FormCheckLabel";var b=p,v=c.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,d=e.bsCustomPrefix,p=e.inline,v=e.disabled,y=e.isValid,O=e.isInvalid,h=e.feedback,j=e.className,x=e.style,E=e.title,N=e.type,g=e.label,P=e.children,w=e.custom,C=e.as,R=void 0===C?"input":C,k=Object(n.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),I="switch"===N||w;s=I?Object(m.b)(d,"custom-control"):Object(m.b)(s,"form-check");var S=Object(l.useContext)(u.a).controlId,F=Object(l.useMemo)((function(){return{controlId:t||S,custom:I}}),[S,I,t]),T=null!=g&&!1!==g&&!P,D=c.a.createElement(f,Object(r.a)({},k,{type:"switch"===N?"checkbox":N,ref:a,isValid:y,isInvalid:O,isStatic:!T,disabled:v,as:R}));return c.a.createElement(u.a.Provider,{value:F},c.a.createElement("div",{style:x,className:o()(j,s,I&&"custom-"+N,p&&s+"-inline")},P||c.a.createElement(c.a.Fragment,null,D,T&&c.a.createElement(b,{title:E},g),(y||O)&&c.a.createElement(i.a,{type:y?"valid":"invalid"},h))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=f,v.Label=b;var y=v,O=t(105),h=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,d=e.controlId,f=e.as,p=void 0===f?"div":f,b=Object(n.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(m.b)(t,"form-group");var v=Object(l.useMemo)((function(){return{controlId:d}}),[d]);return c.a.createElement(u.a.Provider,{value:v},c.a.createElement(p,Object(r.a)({},b,{ref:a,className:o()(s,t)}),i))}));h.displayName="FormGroup";var j=h,x=(t(96),t(104)),E=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.column,i=e.srOnly,d=e.className,f=e.htmlFor,p=Object(n.a)(e,["bsPrefix","column","srOnly","className","htmlFor"]),b=Object(l.useContext)(u.a).controlId;t=Object(m.b)(t,"form-label");var v="col-form-label";"string"===typeof s&&(v=v+"-"+s);var y=o()(d,t,i&&"sr-only",s&&v);return f=f||b,s?c.a.createElement(x.a,Object(r.a)({as:"label",className:y,htmlFor:f},p)):c.a.createElement("label",Object(r.a)({ref:a,className:y,htmlFor:f},p))}));E.displayName="FormLabel",E.defaultProps={column:!1,srOnly:!1};var N=E,g=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.as,i=void 0===l?"small":l,u=e.muted,d=Object(n.a)(e,["bsPrefix","className","as","muted"]);return t=Object(m.b)(t,"form-text"),c.a.createElement(i,Object(r.a)({},d,{ref:a,className:o()(s,t,u&&"text-muted")}))}));g.displayName="FormText";var P=g,w=c.a.forwardRef((function(e,a){return c.a.createElement(y,Object(r.a)({},e,{ref:a,type:"switch"}))}));w.displayName="Switch",w.Input=y.Input,w.Label=y.Label;var C=w,R=t(95),k=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,l=e.className,i=e.validated,u=e.as,d=void 0===u?"form":u,f=Object(n.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(m.b)(t,"form"),c.a.createElement(d,Object(r.a)({},f,{ref:a,className:o()(l,i&&"was-validated",s&&t+"-inline")}))}));k.displayName="Form",k.defaultProps={inline:!1},k.Row=Object(R.a)("form-row"),k.Group=j,k.Control=O.a,k.Check=y,k.Switch=C,k.Label=N,k.Text=P;a.a=k},158:function(e,a,t){"use strict";t.r(a);var r=t(31),n=t(10),s=t(16),o=t(0),l=t.n(o),c=t(118),i=t(104),u=t(119),m=t(111),d=t(15),f=t.n(d),p=t(12),b=t(114),v=t(30),y=t(29);a.default=Object(o.memo)((function(){var e=Object(o.useContext)(y.a).data,a=Object(p.f)(),t=Object(v.useToasts)().addToast;Object(o.useEffect)((function(){Object(b.b)(a.location.pathname)}),[]);var d=Object(o.useState)({usertype:"buyer"}),O=Object(s.a)(d,2),h=O[0],j=O[1],x=function(e){var a=e.target.name,t=e.target.value;j(Object(n.a)({},h,Object(r.a)({},a,t)))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",{className:"text-center"},"Register"),l.a.createElement("p",{className:"text-center"},"Log in with your email and password"),l.a.createElement(c.a,null,l.a.createElement("div",{className:"d-flex"},l.a.createElement(m.Radio,{label:"Buyer",value:"buyer",name:"usertype",onChange:function(e){return x(e)},defaultChecked:!0}),l.a.createElement(m.Radio,{label:"Supplier",value:"supplier",name:"usertype",onChange:function(e){return x(e)}}),l.a.createElement(m.Radio,{label:"Manufacturer",value:"manufacturer",name:"usertype",onChange:function(e){return x(e)}})),l.a.createElement(c.a.Row,null,l.a.createElement(c.a.Group,{as:i.a,md:"6"},l.a.createElement(c.a.Control,{required:!0,type:"text",placeholder:"First name",name:"fname",onChange:function(e){return x(e)}})),l.a.createElement(c.a.Group,{as:i.a,md:"6"},l.a.createElement(c.a.Control,{required:!0,type:"text",placeholder:"Last name",name:"lname",onChange:function(e){return x(e)}}))),l.a.createElement(c.a.Row,null,l.a.createElement(c.a.Group,{as:i.a,md:"6"},l.a.createElement(c.a.Control,{placeholder:"Email",type:"email",name:"email",onChange:function(e){return x(e)}})),l.a.createElement(c.a.Group,{as:i.a,md:"6"},l.a.createElement(c.a.Control,{placeholder:"User name",name:"username",onChange:function(e){return x(e)}}))),l.a.createElement(c.a.Row,null,l.a.createElement(c.a.Group,{as:i.a,md:"6"},l.a.createElement(c.a.Control,{placeholder:"Password",type:"password",name:"password",onChange:function(e){return x(e)}})),l.a.createElement(c.a.Group,{as:i.a,md:"6"},l.a.createElement(c.a.Control,{placeholder:"Confirm  Password",type:"password",name:"cpassword",onChange:function(e){return x(e)}}))),l.a.createElement(c.a.Group,null,l.a.createElement(c.a.Control,{placeholder:"Address",name:"address",onChange:function(e){return x(e)}})),l.a.createElement(u.a,{block:!0,type:"button",className:"login",onClick:function(a){h.fname?h.lname&&h.lname?h.email?h.username?h.password?h.password!==h.cpassword?t("Password does not match",{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3}):h.address?f.a.post("".concat(e.API_URL,"/auth/signup"),h).then((function(e){e.data.status?t("User Registered Successfully",{appearance:"success",autoDismiss:!0,autoDismissTimeout:2e3}):t(e.data.message,{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3})})).catch((function(e){t(e,{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3})})):t("Please Enter Address",{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3}):t("Please Enter Password",{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3}):t("Please Enter Username",{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3}):t("Please Enter Email",{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3}):t("Please Enter Last Name",{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3}):t("Please Enter First Name",{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3})}},"Register")))}))},93:function(e,a,t){"use strict";var r=t(0),n=t.n(r).a.createContext({controlId:void 0});a.a=n},95:function(e,a,t){"use strict";var r=t(2),n=t(4),s=t(27),o=t.n(s),l=/-(.)/g;var c=t(0),i=t.n(c),u=t(28);t.d(a,"a",(function(){return d}));var m=function(e){return e[0].toUpperCase()+(a=e,a.replace(l,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function d(e,a){var t=void 0===a?{}:a,s=t.displayName,l=void 0===s?m(e):s,c=t.Component,d=void 0===c?"div":c,f=t.defaultProps,p=i.a.forwardRef((function(a,t){var s=a.className,l=a.bsPrefix,c=a.as,m=void 0===c?d:c,f=Object(n.a)(a,["className","bsPrefix","as"]),p=Object(u.b)(l,e);return i.a.createElement(m,Object(r.a)({ref:t,className:o()(s,p)},f))}));return p.defaultProps=f,p.displayName=l,p}},96:function(e,a,t){"use strict";var r=function(){};e.exports=r},97:function(e,a,t){"use strict";var r=t(2),n=t(4),s=t(27),o=t.n(s),l=t(0),c=t.n(l),i=t(1),u=t.n(i),m={type:u.a.string.isRequired,as:u.a.elementType},d=c.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,l=e.className,i=e.type,u=Object(n.a)(e,["as","className","type"]);return c.a.createElement(s,Object(r.a)({},u,{ref:a,className:o()(l,i&&i+"-feedback")}))}));d.displayName="Feedback",d.propTypes=m,d.defaultProps={type:"valid"},a.a=d}}]);
//# sourceMappingURL=9.86829338.chunk.js.map