(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[16],{100:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var r=n(16),a=n(0),o=n.n(a),u=n(15),c=n.n(u),l=n(94),i=n(98),s=(n(100),n(9)),f=n(103);t.default=Object(l.a)((function(e){var t=Object(a.useContext)(f.AdminContext).data,n=Object(a.useState)([]),u=Object(r.a)(n,2),l=u[0],d=u[1];function p(){c.a.get("".concat(t.API_URL,"/users/venders"),Object(s.a)()).then((function(e){!1!==e.data.status&&d(e.data)}))}Object(a.useEffect)((function(){p()}),[]);return o.a.createElement("div",{className:"p-2"},o.a.createElement(i.Table,{className:"table table-sm table-bordered",size:"sm"},o.a.createElement(i.Thead,null,o.a.createElement(i.Tr,null,o.a.createElement(i.Th,null,"#"),o.a.createElement(i.Th,null,"Full Name"),o.a.createElement(i.Th,{className:"text-nowrap"},"Email"),o.a.createElement(i.Th,null,"Address"),o.a.createElement(i.Th,{width:"170"},"Action"))),o.a.createElement(i.Tbody,null,l?l.map((function(e,n){return o.a.createElement(i.Tr,{key:e.id},o.a.createElement(i.Td,null,n+1),o.a.createElement(i.Td,null,e.fname," ",e.lname),o.a.createElement(i.Td,null,e.email),o.a.createElement(i.Td,null,e.address),o.a.createElement(i.Td,null,o.a.createElement("div",{className:"d-flex"},o.a.createElement("button",{className:"btn btn_red btn-sm",onClick:function(n){return function(e,n,r){var a={status:r};c.a.post("".concat(t.API_URL,"/users/vender_request/action/").concat(n),a,Object(s.a)()).then((function(e){console.log(e.data)})),p()}(0,e.request_id,!1)}},o.a.createElement("i",{className:"fal fa-times"}),"  Reject"))))})):null)))}))},94:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return function(t){return a.a.createElement("div",{className:"adminpanel"},a.a.createElement(e,t))}}},98:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Td=t.Tbody=t.Th=t.Tr=t.Thead=t.Table=void 0;var r,a=(r=n(0))&&r.__esModule?r:{default:r},o=n(99);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e,t){return Object.keys(e).filter((function(e){return-1===t.indexOf(e)})).reduce((function(t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,h({},n,e[n]))}),{})},v=function(e){return y(e,["inHeader","columnKey","headers"])},E=function(e){function t(e){var n;return l(this,t),(n=f(this,d(t).call(this,e))).state={headers:{}},n}return p(t,e),s(t,[{key:"render",value:function(){var e=this.state.headers,t=(this.props.className||"")+" responsiveTable";return a.default.createElement(o.Provider,{value:e},a.default.createElement("table",c({},v(this.props),{className:t})))}}]),t}(a.default.Component);t.Table=E;t.Thead=function(e){return a.default.createElement("thead",v(e),a.default.cloneElement(e.children,{inHeader:!0}))};var O=function(e){function t(e){var n;l(this,t),n=f(this,d(t).call(this,e));var r=e.headers;return r&&e.inHeader&&a.default.Children.map(e.children,(function(e,t){e&&(r[t]=e.props.children)})),n}return p(t,e),s(t,[{key:"render",value:function(){var e=this.props.children;return a.default.createElement("tr",v(this.props),e&&a.default.Children.map(e,(function(e,t){return e&&a.default.cloneElement(e,{key:t,columnKey:t})})))}}]),t}(a.default.Component);t.Tr=function(e){return a.default.createElement(o.Consumer,null,(function(t){return a.default.createElement(O,c({},e,{headers:t}))}))};t.Th=function(e){return a.default.createElement("th",v(e))};t.Tbody=function(e){return a.default.createElement("tbody",v(e))};var j=function(e){function t(){return l(this,t),f(this,d(t).apply(this,arguments))}return p(t,e),s(t,[{key:"render",value:function(){if(this.props.colSpan)return a.default.createElement("td",v(this.props));var e=this.props,t=e.headers,n=e.children,r=e.columnKey,o=(this.props.className||"")+" pivoted";return a.default.createElement("td",c({},v(this.props),{className:o}),a.default.createElement("div",{className:"tdBefore"},t[r]),n||a.default.createElement("div",null,"\xa0"))}}]),t}(a.default.Component);t.Td=function(e){return a.default.createElement(o.Consumer,null,(function(t){return a.default.createElement(j,c({},e,{headers:t}))}))}},99:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.Consumer=t.Provider=void 0;var a=((r=n(0))&&r.__esModule?r:{default:r}).default.createContext({}),o=a.Provider,u=a.Consumer;t.Consumer=u,t.Provider=o}}]);
//# sourceMappingURL=16.26c6052f.chunk.js.map