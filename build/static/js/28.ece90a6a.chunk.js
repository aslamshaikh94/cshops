(this.webpackJsonpcshops=this.webpackJsonpcshops||[]).push([[28],{115:function(e,a,t){"use strict";var c=t(0),n=t.n(c);a.a=Object(c.memo)((function(e){for(var a=[],t=5;t>=0;t--)t<e.rat?a.push(n.a.createElement("i",{className:"fas fa-star orange",key:t})):a.push(n.a.createElement("i",{className:"fas fa-star gray",key:t}));return a}))},192:function(e,a,t){"use strict";t.r(a);var c=t(16),n=t(0),s=t.n(n),r=t(13),i=t(15),l=t.n(i),o=t(115),m=t(9),u=t(29),f={background:"#fff",cursor:"pointer",padding:"15px",marginBottom:"5px"},d={textDecoration:"none"};a.default=Object(n.memo)((function(){var e=Object(n.useContext)(u.a),a=e.data,t=e.dispatch,i=Object(n.useState)(),p=Object(c.a)(i,2),b=p[0],h=p[1];function E(e,c){l.a.delete("".concat(a.API_URL,"/addto/").concat(c),Object(m.a)()).then((function(e){l.a.get("".concat(a.API_URL,"/addto/wishlist?type=favorite"),Object(m.a)()).then((function(e){!1!==e.data.status&&t({type:"FETCH_FAVORITE",payload:e.data})}))}))}return Object(n.useEffect)((function(){a.favorites&&h(a.favorites)}),[a.favorites]),s.a.createElement("main",{className:"wishlist"},s.a.createElement("div",{className:"container"},s.a.createElement("ul",{className:"list-unstyled"},b?b.map((function(e,a){return s.a.createElement("li",{className:"media",style:f,key:e.product_name+a},s.a.createElement(r.b,{to:"/product/".concat(e.product_id),target:"_blank",style:d,className:"black w-100 d-flex"},s.a.createElement("img",{className:"mr-3",src:e.thumbnail,height:"80",alt:e.product_name}),s.a.createElement("div",{className:"media-body"},s.a.createElement("h5",{className:"mt-0 mb-1"},e.product_name),s.a.createElement("i",{className:"far fa-rupee-sign"})," ",e.price,s.a.createElement(o.a,null))),s.a.createElement("i",{className:"fal fa-times",onClick:function(a){return E(0,e.id)}}))})):null)))}))}}]);
//# sourceMappingURL=28.ece90a6a.chunk.js.map