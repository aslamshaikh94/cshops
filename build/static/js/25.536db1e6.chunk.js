(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[25],{160:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(0),o=a.n(c),l=a(122),s=a(15),i=a.n(s),r=(a(160),a(30)),u=a(4),m=a(123),b=a.n(m),d=a(161),f=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,163))})),g=Object(c.lazy)((function(){return a.e(10).then(a.bind(null,164))}));t.default=Object(c.memo)((function(){var e=Object(c.useContext)(r.a).data,t=Object(u.f)(),a=Object(c.useState)("Login"),s=Object(n.a)(a,2),m=s[0],p=s[1],h=Object(c.useState)("buyer"),k=Object(n.a)(h,2),E=k[0],j=k[1],v=function(e){console.log(e)};var y="Login"===m?o.a.createElement(f,{type:function(e){j(e)}}):o.a.createElement(g,null);return o.a.createElement("main",{className:"auth d-flex align-items-center"},o.a.createElement("div",{className:"authbanner"}),o.a.createElement("div",{className:"authform"},o.a.createElement(c.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},y),o.a.createElement("div",{className:"d-flex mt-2 social flex-column"},o.a.createElement(b.a,{appId:"286856442338632",autoLoad:!1,callback:function(a){i.a.post("".concat(e.API_URL,"/auth/facebook?access_token=").concat(a.accessToken,"&type=").concat(E)).then((function(e){e.data.status&&(localStorage.setItem("auth",!0),localStorage.setItem("token",e.data.token),t.push("/admin/myprofile"))}))},disableMobileRedirect:!0,cssClass:"facebook btn btn-primary btn-block btn-md mb-2",icon:"fa-facebook-f"}),o.a.createElement(d.GoogleLogin,{clientId:"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com",buttonText:"Login",onSuccess:v,onFailure:v,cookiePolicy:"single_host_origin"})),o.a.createElement("div",{className:"d-flex justify-content-end"},o.a.createElement(l.a,{variant:"link",onClick:function(e){p("Register"===m?"Login":"Register")}},m))))}))}}]);
//# sourceMappingURL=25.536db1e6.chunk.js.map