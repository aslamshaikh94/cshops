(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[25],{168:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(16),c=a(0),o=a.n(c),l=a(127),s=(a(168),a(4)),i=a(169),r=a.n(i),u=a(170),m=a(15),b=Object(c.lazy)((function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,172))})),f=Object(c.lazy)((function(){return a.e(10).then(a.bind(null,173))}));t.default=Object(c.memo)((function(){var e=Object(s.f)(),t=Object(c.useState)("Login"),a=Object(n.a)(t,2),i=a[0],d=a[1],g=Object(c.useState)("buyer"),p=Object(n.a)(g,2),h=p[0],k=p[1];var E="Login"===i?o.a.createElement(b,{type:function(e){k(e)}}):o.a.createElement(f,null);return o.a.createElement("main",{className:"auth d-flex align-items-center"},o.a.createElement("div",{className:"authbanner"}),o.a.createElement("div",{className:"authform"},o.a.createElement(c.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},E),o.a.createElement("div",{className:"d-flex mt-2 social flex-column"},o.a.createElement(r.a,{appId:"286856442338632",autoLoad:!1,callback:function(t){m.a.post("/auth/facebook?access_token=".concat(t.accessToken,"&type=").concat(h)).then((function(t){t.data.status&&(localStorage.setItem("auth",!0),localStorage.setItem("token",t.data.token),e.push("/admin/myprofile"))}))},disableMobileRedirect:!0,cssClass:"facebook btn btn-primary btn-block btn-md mb-2",icon:"fa-facebook-f"}),o.a.createElement(u.GoogleLogin,{clientId:"65459548614-fbcasihgr5n1j6mg2fa2hi45loh97ank.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){var t=e.profileObj;e.accessToken;console.log(t)},cookiePolicy:"single_host_origin"})),o.a.createElement("div",{className:"d-flex justify-content-end"},o.a.createElement(l.a,{variant:"link",onClick:function(e){d("Register"===i?"Login":"Register")}},i))))}))}}]);
//# sourceMappingURL=25.9426ccf6.chunk.js.map