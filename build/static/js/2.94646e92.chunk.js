(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[2],{103:function(e,a,t){"use strict";t.d(a,"a",(function(){return r})),t.d(a,"b",(function(){return l}));var n=t(33),c=t(0),o=t.n(c),r=function(e){var a=e.col,t=e.formgroup,c=Object(n.a)(e,["col","formgroup"]);return o.a.createElement("div",{className:"form-group ".concat(t," ").concat(a?"col-lg-"+a+" col-12":"")},o.a.createElement("input",Object.assign({},c,{className:"form-control"})))},l=function(e){var a=e.col,t=Object(n.a)(e,["col"]);return o.a.createElement("div",{className:"form-group col-lg-".concat(a," col-12")},o.a.createElement("textarea",Object.assign({},t,{className:"form-control"})))}},124:function(e,a,t){"use strict";t.r(a);var n=t(31),c=t(5),o=t(16),r=t(0),l=t.n(r),u=t(103),m=t(165);a.default=Object(r.memo)((function(e){var a=e.data,t=Object(r.useState)({country:"",state:""}),s=Object(o.a)(t,2),i=s[0],f=s[1];function d(e){var a=e.target.name,t=e.target.value;f(Object(c.a)(Object(c.a)({},i),{},Object(n.a)({},a,t)))}return Object(r.useEffect)((function(){e.infodata(i)}),[i]),Object(r.useEffect)((function(){f(a)}),[a]),l.a.createElement("div",{className:"addressForm"},l.a.createElement("h6",null,"Contact Information"),l.a.createElement("div",{className:"row"},l.a.createElement(u.a,{col:3,name:"fname",placeholder:"Name",type:"text",defaultValue:a?a.fname:"",onChange:function(e){return d(e)}}),l.a.createElement(u.a,{col:3,name:"phone",placeholder:"10-digit mobile number",type:"tel",defaultValue:a?a.phone:"",onChange:function(e){return d(e)}}),l.a.createElement(u.a,{col:3,name:"email",placeholder:"Email",type:"email",defaultValue:a?a.email:"",onChange:function(e){return d(e)}}),l.a.createElement(u.a,{col:3,name:"pincode",placeholder:"Pincode",type:"number",defaultValue:a?a.pincode:"",onChange:function(e){return d(e)}}),l.a.createElement("div",{className:"form-group col-lg-4 col-12"},l.a.createElement(m.a,{className:"form-control",value:i.country,onChange:function(e){return a=e,void f(Object(c.a)(Object(c.a)({},i),{},{country:a}));var a}})),l.a.createElement("div",{className:"form-group col-lg-4 col-12"},l.a.createElement(m.b,{className:"form-control",country:i.country,value:i.state,onChange:function(e){return a=e,void f(Object(c.a)(Object(c.a)({},i),{},{state:a}));var a}})),l.a.createElement(u.a,{col:4,name:"city",placeholder:"City",type:"text",defaultValue:a?a.city:"",onChange:function(e){return d(e)}}),l.a.createElement(u.b,{col:12,name:"address",placeholder:"Address (Area and Street)",defaultValue:a?a.address:"",onChange:function(e){return d(e)}})))}))}}]);
//# sourceMappingURL=2.94646e92.chunk.js.map