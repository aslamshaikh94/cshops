(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[17],{100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Td=t.Tbody=t.Th=t.Tr=t.Thead=t.Table=void 0;var r,a=(r=n(0))&&r.__esModule?r:{default:r},l=n(101);function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function f(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e,t){return Object.keys(e).filter((function(e){return-1===t.indexOf(e)})).reduce((function(t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(n,!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,h({},n,e[n]))}),{})},E=function(e){return y(e,["inHeader","columnKey","headers"])},v=function(e){function t(e){var n;return c(this,t),(n=f(this,d(t).call(this,e))).state={headers:{}},n}return p(t,e),s(t,[{key:"render",value:function(){var e=this.state.headers,t=(this.props.className||"")+" responsiveTable";return a.default.createElement(l.Provider,{value:e},a.default.createElement("table",o({},E(this.props),{className:t})))}}]),t}(a.default.Component);t.Table=v;t.Thead=function(e){return a.default.createElement("thead",E(e),a.default.cloneElement(e.children,{inHeader:!0}))};var O=function(e){function t(e){var n;c(this,t),n=f(this,d(t).call(this,e));var r=e.headers;return r&&e.inHeader&&a.default.Children.map(e.children,(function(e,t){e&&(r[t]=e.props.children)})),n}return p(t,e),s(t,[{key:"render",value:function(){var e=this.props.children;return a.default.createElement("tr",E(this.props),e&&a.default.Children.map(e,(function(e,t){return e&&a.default.cloneElement(e,{key:t,columnKey:t})})))}}]),t}(a.default.Component);t.Tr=function(e){return a.default.createElement(l.Consumer,null,(function(t){return a.default.createElement(O,o({},e,{headers:t}))}))};t.Th=function(e){return a.default.createElement("th",E(e))};t.Tbody=function(e){return a.default.createElement("tbody",E(e))};var T=function(e){function t(){return c(this,t),f(this,d(t).apply(this,arguments))}return p(t,e),s(t,[{key:"render",value:function(){if(this.props.colSpan)return a.default.createElement("td",E(this.props));var e=this.props,t=e.headers,n=e.children,r=e.columnKey,l=(this.props.className||"")+" pivoted";return a.default.createElement("td",o({},E(this.props),{className:l}),a.default.createElement("div",{className:"tdBefore"},t[r]),n||a.default.createElement("div",null,"\xa0"))}}]),t}(a.default.Component);t.Td=function(e){return a.default.createElement(l.Consumer,null,(function(t){return a.default.createElement(T,o({},e,{headers:t}))}))}},101:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.Consumer=t.Provider=void 0;var a=((r=n(0))&&r.__esModule?r:{default:r}).default.createContext({}),l=a.Provider,u=a.Consumer;t.Consumer=u,t.Provider=l},102:function(e,t,n){},184:function(e,t,n){"use strict";n.r(t);var r=n(16),a=n(0),l=n.n(a),u=n(30),o=n(11),c=n(14),i=n(100),s=(n(102),n(97)),f=n(15),d=n.n(f);t.default=Object(s.a)((function(){var e=Object(a.useContext)(u.a).data,t=Object(a.useState)(),n=Object(r.a)(t,2),s=n[0],f=n[1];return Object(a.useEffect)((function(){d.a.get("".concat(e.API_URL,"/orders"),Object(o.a)()).then((function(e){f(e.data)}))}),[]),l.a.createElement("div",{className:"p-2"},l.a.createElement("div",{className:"p-2"},l.a.createElement(i.Table,{className:"table table-sm table-bordered"},l.a.createElement(i.Thead,null,l.a.createElement(i.Tr,null,l.a.createElement(i.Th,null,"#"),l.a.createElement(i.Th,null,"Product Name"),l.a.createElement(i.Th,null,"Quantity"),l.a.createElement(i.Th,null,"Price"),l.a.createElement(i.Th,null,"Total"),l.a.createElement(i.Th,null,"Status"),l.a.createElement(i.Th,null,"Actions"))),l.a.createElement(i.Tbody,null,s?s.map((function(e,t){return l.a.createElement(i.Tr,{key:e.product_name+t},l.a.createElement(i.Td,null,"CSP".concat(e.product_id)),l.a.createElement(i.Td,null,e.product_name),l.a.createElement(i.Td,null,e.quantity),l.a.createElement(i.Td,null,l.a.createElement("i",{className:"fal fa-rupee-sign"})," ",e.price),l.a.createElement(i.Td,null,l.a.createElement("i",{className:"fal fa-rupee-sign"})," ",e.quantity*e.price),l.a.createElement(i.Td,null,e.status),l.a.createElement(i.Td,null,l.a.createElement(c.b,{className:"btn btn_green btn-sm",target:"_blank",to:"/product/".concat(e.product_id)},l.a.createElement("i",{className:"fal fa-eye"})," View")))})):null))))}))},97:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return function(t){return a.a.createElement("div",{className:"adminpanel"},a.a.createElement(e,t))}}}}]);
//# sourceMappingURL=17.5fc91ff6.chunk.js.map