(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[10],{100:function(e,a,t){"use strict";var r=t(2),s=t(6),l=t(28),n=t.n(l),i=/-(.)/g;var o=t(0),c=t.n(o),u=t(29);t.d(a,"a",(function(){return m}));var d=function(e){return e[0].toUpperCase()+(a=e,a.replace(i,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function m(e,a){var t=void 0===a?{}:a,l=t.displayName,i=void 0===l?d(e):l,o=t.Component,m=void 0===o?"div":o,f=t.defaultProps,b=c.a.forwardRef((function(a,t){var l=a.className,i=a.bsPrefix,o=a.as,d=void 0===o?m:o,f=Object(s.a)(a,["className","bsPrefix","as"]),b=Object(u.b)(i,e);return c.a.createElement(d,Object(r.a)({ref:t,className:n()(l,b)},f))}));return b.defaultProps=f,b.displayName=i,b}},102:function(e,a,t){"use strict";var r=function(){};e.exports=r},107:function(e,a,t){"use strict";var r=t(2),s=t(6),l=t(28),n=t.n(l),i=t(0),o=t.n(i),c=t(29),u=["xl","lg","md","sm","xs"],d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.as,d=void 0===i?"div":i,m=Object(s.a)(e,["bsPrefix","className","as"]),f=Object(c.b)(t,"col"),b=[],p=[];return u.forEach((function(e){var a,t,r,s=m[e];if(delete m[e],null!=s&&"object"===typeof s){var l=s.span;a=void 0===l||l,t=s.offset,r=s.order}else a=s;var n="xs"!==e?"-"+e:"";null!=a&&b.push(!0===a?""+f+n:""+f+n+"-"+a),null!=r&&p.push("order"+n+"-"+r),null!=t&&p.push("offset"+n+"-"+t)})),b.length||b.push(f),o.a.createElement(d,Object(r.a)({},m,{ref:a,className:n.a.apply(void 0,[l].concat(b,p))}))}));d.displayName="Col",a.a=d},108:function(e,a,t){"use strict";var r=t(2),s=t(6),l=t(28),n=t.n(l),i=(t(95),t(0)),o=t.n(i),c=(t(102),t(96)),u=t(93),d=t(29),m=o.a.forwardRef((function(e,a){var t,l,c=e.bsPrefix,m=e.bsCustomPrefix,f=e.type,b=e.size,p=e.id,v=e.className,O=e.isValid,j=e.isInvalid,x=e.plaintext,y=e.readOnly,N=e.custom,h=e.as,P=void 0===h?"input":h,E=Object(s.a)(e,["bsPrefix","bsCustomPrefix","type","size","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),I=Object(i.useContext)(u.a).controlId,C=N?[m,"custom"]:[c,"form-control"],w=C[0],g=C[1];if(c=Object(d.b)(w,g),x)(l={})[c+"-plaintext"]=!0,t=l;else if("file"===f){var F;(F={})[c+"-file"]=!0,t=F}else if("range"===f){var k;(k={})[c+"-range"]=!0,t=k}else if("select"===P&&N){var R;(R={})[c+"-select"]=!0,R[c+"-select-"+b]=b,t=R}else{var L;(L={})[c]=!0,L[c+"-"+b]=b,t=L}return o.a.createElement(P,Object(r.a)({},E,{type:f,ref:a,readOnly:y,id:p||I,className:n()(v,t,O&&"is-valid",j&&"is-invalid")}))}));m.displayName="FormControl",m.Feedback=c.a,a.a=m},111:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,s,l,n){var i=s||"<<anonymous>>",o=n||r;if(null==t[r])return a?new Error("Required "+l+" `"+o+"` was not specified in `"+i+"`."):null;for(var c=arguments.length,u=Array(c>6?c-6:0),d=6;d<c;d++)u[d-6]=arguments[d];return e.apply(void 0,[t,r,i,l,o].concat(u))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default},121:function(e,a,t){"use strict";var r=t(2),s=t(6),l=t(28),n=t.n(l),i=t(0),o=t.n(i),c=(t(95),t(96)),u=t(93),d=t(29),m=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,c=e.bsCustomPrefix,m=e.className,f=e.isValid,b=e.isInvalid,p=e.isStatic,v=e.as,O=void 0===v?"input":v,j=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","isStatic","as"]),x=Object(i.useContext)(u.a),y=x.controlId,N=x.custom?[c,"custom-control-input"]:[l,"form-check-input"],h=N[0],P=N[1];return l=Object(d.b)(h,P),o.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||y,className:n()(m,l,f&&"is-valid",b&&"is-invalid",p&&"position-static")}))}));m.displayName="FormCheckInput",m.defaultProps={type:"checkbox"};var f=m,b=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,c=e.className,m=e.htmlFor,f=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(i.useContext)(u.a),p=b.controlId,v=b.custom?[l,"custom-control-label"]:[t,"form-check-label"],O=v[0],j=v[1];return t=Object(d.b)(O,j),o.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:m||p,className:n()(c,t)}))}));b.displayName="FormCheckLabel";var p=b,v=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,m=e.bsCustomPrefix,b=e.inline,v=e.disabled,O=e.isValid,j=e.isInvalid,x=e.feedback,y=e.className,N=e.style,h=e.title,P=e.type,E=e.label,I=e.children,C=e.custom,w=e.as,g=void 0===w?"input":w,F=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedback","className","style","title","type","label","children","custom","as"]),k="switch"===P||C,R=k?[m,"custom-control"]:[l,"form-check"],L=R[0],V=R[1];l=Object(d.b)(L,V);var S=Object(i.useContext)(u.a).controlId,T=Object(i.useMemo)((function(){return{controlId:t||S,custom:k}}),[S,k,t]),_=null!=E&&!1!==E&&!I,D=o.a.createElement(f,Object(r.a)({},F,{type:"switch"===P?"checkbox":P,ref:a,isValid:O,isInvalid:j,isStatic:!_,disabled:v,as:g}));return o.a.createElement(u.a.Provider,{value:T},o.a.createElement("div",{style:N,className:n()(y,l,k&&"custom-"+P,b&&l+"-inline")},I||o.a.createElement(o.a.Fragment,null,D,_&&o.a.createElement(p,{title:h},E),(O||j)&&o.a.createElement(c.a,{type:O?"valid":"invalid"},x))))}));v.displayName="FormCheck",v.defaultProps={type:"checkbox",inline:!1,disabled:!1,isValid:!1,isInvalid:!1,title:""},v.Input=f,v.Label=p;var O=v,j=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,c=e.bsCustomPrefix,m=e.className,f=e.isValid,b=e.isInvalid,p=e.lang,v=e.as,O=void 0===v?"input":v,j=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),x=Object(i.useContext)(u.a),y=x.controlId,N=x.custom?[c,"custom-file-input"]:[l,"form-control-file"],h=N[0],P=N[1];return l=Object(d.b)(h,P),o.a.createElement(O,Object(r.a)({},j,{ref:a,id:t||y,type:"file",lang:p,className:n()(m,l,f&&"is-valid",b&&"is-invalid")}))}));j.displayName="FormFileInput";var x=j,y=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.bsCustomPrefix,c=e.className,m=e.htmlFor,f=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(i.useContext)(u.a),p=b.controlId,v=b.custom?[l,"custom-file-label"]:[t,"form-file-label"],O=v[0],j=v[1];return t=Object(d.b)(O,j),o.a.createElement("label",Object(r.a)({},f,{ref:a,htmlFor:m||p,className:n()(c,t),"data-browse":f["data-browse"]}))}));y.displayName="FormFileLabel";var N=y,h=o.a.forwardRef((function(e,a){var t=e.id,l=e.bsPrefix,m=e.bsCustomPrefix,f=e.disabled,b=e.isValid,p=e.isInvalid,v=e.feedback,O=e.className,j=e.style,y=e.label,h=e.children,P=e.custom,E=e.lang,I=e["data-browse"],C=e.as,w=void 0===C?"div":C,g=e.inputAs,F=void 0===g?"input":g,k=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),R=P?[m,"custom"]:[l,"form-file"],L=R[0],V=R[1];l=Object(d.b)(L,V);var S=Object(i.useContext)(u.a).controlId,T=Object(i.useMemo)((function(){return{controlId:t||S,custom:P}}),[S,P,t]),_=null!=y&&!1!==y&&!h,D=o.a.createElement(x,Object(r.a)({},k,{ref:a,isValid:b,isInvalid:p,disabled:f,as:F,lang:E}));return o.a.createElement(u.a.Provider,{value:T},o.a.createElement(w,{style:j,className:n()(O,l,P&&"custom-file")},h||o.a.createElement(o.a.Fragment,null,P?o.a.createElement(o.a.Fragment,null,D,_&&o.a.createElement(N,{"data-browse":I},y)):o.a.createElement(o.a.Fragment,null,_&&o.a.createElement(N,null,y),D),(b||p)&&o.a.createElement(c.a,{type:b?"valid":"invalid"},v))))}));h.displayName="FormFile",h.defaultProps={disabled:!1,isValid:!1,isInvalid:!1},h.Input=x,h.Label=N;var P=h,E=t(108),I=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.children,m=e.controlId,f=e.as,b=void 0===f?"div":f,p=Object(s.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(d.b)(t,"form-group");var v=Object(i.useMemo)((function(){return{controlId:m}}),[m]);return o.a.createElement(u.a.Provider,{value:v},o.a.createElement(b,Object(r.a)({},p,{ref:a,className:n()(l,t)}),c))}));I.displayName="FormGroup";var C=I,w=(t(102),t(107)),g=o.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"label":t,c=e.bsPrefix,m=e.column,f=e.srOnly,b=e.className,p=e.htmlFor,v=Object(s.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),O=Object(i.useContext)(u.a).controlId;c=Object(d.b)(c,"form-label");var j="col-form-label";"string"===typeof m&&(j=j+"-"+m);var x=n()(b,c,f&&"sr-only",m&&j);return p=p||O,m?o.a.createElement(w.a,Object(r.a)({as:"label",className:x,htmlFor:p},v)):o.a.createElement(l,Object(r.a)({ref:a,className:x,htmlFor:p},v))}));g.displayName="FormLabel",g.defaultProps={column:!1,srOnly:!1};var F=g,k=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.as,c=void 0===i?"small":i,u=e.muted,m=Object(s.a)(e,["bsPrefix","className","as","muted"]);return t=Object(d.b)(t,"form-text"),o.a.createElement(c,Object(r.a)({},m,{ref:a,className:n()(l,t,u&&"text-muted")}))}));k.displayName="FormText";var R=k,L=o.a.forwardRef((function(e,a){return o.a.createElement(O,Object(r.a)({},e,{ref:a,type:"switch"}))}));L.displayName="Switch",L.Input=O.Input,L.Label=O.Label;var V=L,S=t(100),T=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.inline,i=e.className,c=e.validated,u=e.as,m=void 0===u?"form":u,f=Object(s.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(d.b)(t,"form"),o.a.createElement(m,Object(r.a)({},f,{ref:a,className:n()(i,c&&"was-validated",l&&t+"-inline")}))}));T.displayName="Form",T.defaultProps={inline:!1},T.Row=Object(S.a)("form-row"),T.Group=C,T.Control=E.a,T.Check=O,T.File=P,T.Switch=V,T.Label=F,T.Text=R;a.a=T},164:function(e,a,t){"use strict";t.r(a);var r=t(31),s=t(5),l=t(16),n=t(0),i=t.n(n),o=t(121),c=t(122),u=t(15),d=t.n(u),m=t(4),f=t(19),b=t(30),p=t(11);a.default=Object(n.memo)((function(){var e=Object(n.useContext)(b.a),a=e.data,t=e.dispatch,u=Object(f.useToasts)().addToast,v=Object(m.f)(),O=Object(n.useState)({username:"",password:""}),j=Object(l.a)(O,2),x=j[0],y=j[1],N=function(e){var a=e.target.name,t=e.target.value;y(Object(s.a)(Object(s.a)({},x),{},Object(r.a)({},a,t)))};var h=function(){x.username&&x.password?d.a.post("".concat(a.API_URL,"/auth/login"),x).then((function(e){e.data.status?(localStorage.setItem("auth",!0),localStorage.setItem("token",e.data.token),d.a.get("".concat(a.API_URL,"/users/user"),Object(p.a)()).then((function(e){t({type:"LOGGED_IN_USER",payload:e.data.user}),!1===e.data.status?(t({type:"FETCH_PRODUCTS",payload:""}),localStorage.setItem("auth",!1),localStorage.removeItem("token")):localStorage.setItem("auth",!0)})).catch((function(e){})),v.push("/admin/myprofile")):u(e.data.message,{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3})})).catch((function(e){u(e,{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3})})):u("Please inter field",{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3})};return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"text-center"},"Login"),i.a.createElement("p",{className:"text-center"},"Log in with your email and password"),i.a.createElement(o.a,null,i.a.createElement(o.a.Group,null,i.a.createElement(o.a.Control,{placeholder:"User name",name:"username",onChange:function(e){return N(e)}})),i.a.createElement(o.a.Group,null,i.a.createElement(o.a.Control,{placeholder:"Password",type:"password",name:"password",onChange:function(e){return N(e)}})),i.a.createElement(c.a,{block:!0,type:"button",className:"login",onClick:function(e){return h()}},"Login")))}))},93:function(e,a,t){"use strict";var r=t(0),s=t.n(r).a.createContext({controlId:void 0});a.a=s},95:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var s=null;return a.forEach((function(e){if(null==s){var a=e.apply(void 0,t);null!=a&&(s=a)}})),s}return(0,l.default)(r)};var r,s=t(111),l=(r=s)&&r.__esModule?r:{default:r};e.exports=a.default},96:function(e,a,t){"use strict";var r=t(2),s=t(6),l=t(28),n=t.n(l),i=t(0),o=t.n(i),c=t(1),u=t.n(c),d={type:u.a.string.isRequired,as:u.a.elementType},m=o.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"div":t,i=e.className,c=e.type,u=Object(s.a)(e,["as","className","type"]);return o.a.createElement(l,Object(r.a)({},u,{ref:a,className:n()(i,c&&c+"-feedback")}))}));m.displayName="Feedback",m.propTypes=d,m.defaultProps={type:"valid"},a.a=m}}]);
//# sourceMappingURL=10.54cbea8a.chunk.js.map