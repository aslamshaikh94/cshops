(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[15],{170:function(e,t,n){"use strict";n.r(t);var r=n(16),a=n(0),o=n.n(a),u=n(15),c=n.n(u),l=n(30),s=n(94),i=n(97),f=(n(99),n(11)),d=n(104);t.default=Object(s.a)((function(e){var t=Object(a.useContext)(d.AdminContext).data,n=Object(a.useState)([]),u=Object(r.a)(n,2),s=u[0],m=u[1],p=Object(l.useToasts)().addToast;Object(a.useEffect)((function(){c.a.get("".concat(t.API_URL,"/users/manufacturers"),Object(f.a)()).then((function(e){!1!==e.data.status&&m(e.data)}))}),[]);return o.a.createElement("div",{className:"p-2"},o.a.createElement(i.Table,{className:"table table-sm table-bordered",size:"sm"},o.a.createElement(i.Thead,null,o.a.createElement(i.Tr,null,o.a.createElement(i.Th,null,"#"),o.a.createElement(i.Th,null,"Full Name"),o.a.createElement(i.Th,{className:"text-nowrap"},"Email"),o.a.createElement(i.Th,null,"Address"),o.a.createElement(i.Th,{width:"170"},"Action"))),o.a.createElement(i.Tbody,null,s?s.map((function(e,n){return o.a.createElement(i.Tr,{key:e.fname+e.user_id},o.a.createElement(i.Td,null,n+1),o.a.createElement(i.Td,null,e.fname," ",e.lname),o.a.createElement(i.Td,null,e.email),o.a.createElement(i.Td,null,e.address),o.a.createElement(i.Td,null,o.a.createElement("div",{className:"d-flex"},o.a.createElement("button",{className:"btn btn_yellow btn-sm",onClick:function(n){return r=e.user_id,console.log(r),void c.a.post("".concat(t.API_URL,"/users/vender_request/").concat(r),"",Object(f.a)()).then((function(e){!1===e.data.status?p(e.data.message,{appearance:"error",autoDismiss:!0,autoDismissTimeout:2e3}):p("Your sent successfully",{appearance:"success",autoDismiss:!0,autoDismissTimeout:2e3})}));var r}},"Request for Vender ",o.a.createElement("i",{className:"fal fa-share"})))))})):null)))}))},94:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return function(t){return a.a.createElement("div",{className:"adminpanel"},a.a.createElement(e,t))}}},97:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Td=t.Tbody=t.Th=t.Tr=t.Thead=t.Table=void 0;var r,a=(r=n(0))&&r.__esModule?r:{default:r},o=n(98);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e,t){return Object.keys(e).filter((function(e){return-1===t.indexOf(e)})).reduce((function(t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,h({},n,e[n]))}),{})},v=function(e){return y(e,["inHeader","columnKey","headers"])},E=function(e){function t(e){var n;return l(this,t),(n=f(this,d(t).call(this,e))).state={headers:{}},n}return m(t,e),i(t,[{key:"render",value:function(){var e=this.state.headers,t=(this.props.className||"")+" responsiveTable";return a.default.createElement(o.Provider,{value:e},a.default.createElement("table",c({},v(this.props),{className:t})))}}]),t}(a.default.Component);t.Table=E;t.Thead=function(e){return a.default.createElement("thead",v(e),a.default.cloneElement(e.children,{inHeader:!0}))};var O=function(e){function t(e){var n;l(this,t),n=f(this,d(t).call(this,e));var r=e.headers;return r&&e.inHeader&&a.default.Children.map(e.children,(function(e,t){e&&(r[t]=e.props.children)})),n}return m(t,e),i(t,[{key:"render",value:function(){var e=this.props.children;return a.default.createElement("tr",v(this.props),e&&a.default.Children.map(e,(function(e,t){return e&&a.default.cloneElement(e,{key:t,columnKey:t})})))}}]),t}(a.default.Component);t.Tr=function(e){return a.default.createElement(o.Consumer,null,(function(t){return a.default.createElement(O,c({},e,{headers:t}))}))};t.Th=function(e){return a.default.createElement("th",v(e))};t.Tbody=function(e){return a.default.createElement("tbody",v(e))};var T=function(e){function t(){return l(this,t),f(this,d(t).apply(this,arguments))}return m(t,e),i(t,[{key:"render",value:function(){if(this.props.colSpan)return a.default.createElement("td",v(this.props));var e=this.props,t=e.headers,n=e.children,r=e.columnKey,o=(this.props.className||"")+" pivoted";return a.default.createElement("td",c({},v(this.props),{className:o}),a.default.createElement("div",{className:"tdBefore"},t[r]),n||a.default.createElement("div",null,"\xa0"))}}]),t}(a.default.Component);t.Td=function(e){return a.default.createElement(o.Consumer,null,(function(t){return a.default.createElement(T,c({},e,{headers:t}))}))}},98:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.Consumer=t.Provider=void 0;var a=((r=n(0))&&r.__esModule?r:{default:r}).default.createContext({}),o=a.Provider,u=a.Consumer;t.Consumer=u,t.Provider=o},99:function(e,t,n){}}]);
//# sourceMappingURL=15.e571a860.chunk.js.map