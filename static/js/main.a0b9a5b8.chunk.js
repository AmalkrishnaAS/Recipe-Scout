(this.webpackJsonprecipieapp=this.webpackJsonprecipieapp||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(3),r=c.n(i),s=(c(27),c.p,c(28),c(1));function l(){return Object(s.jsx)("div",{children:Object(s.jsx)("nav",{className:"navbar navbar-dark bg-primary",children:Object(s.jsx)("div",{className:"container-fluid",children:Object(s.jsxs)("a",{className:"navbar-brand",href:"#",children:[Object(s.jsx)("img",{src:"https://www.freepnglogos.com/uploads/coffee-logo-png/vector-coffee-face-logo-download-food-drinks-24.png",alt:"",width:"30",height:"30",className:"d-inline-block align-text-top mx-3"}),"RecipeScout"]})})})})}var o=c(9),d=c.n(o),b=c(20),j=c(4),p=c(21),u=c.n(p),h=c(22);function m(e){return Object(s.jsxs)("div",{class:"card",styles:"width: 18rem;",children:[Object(s.jsx)("img",{src:e.image,class:"card-img-top",alt:e.image}),Object(s.jsxs)("div",{class:"card-body",children:[Object(s.jsx)("h5",{class:"card-title",children:e.title}),Object(s.jsx)("a",{href:e.url,class:"btn btn-primary ",children:"Check it Out "})]})]})}function f(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),n=c[0],i=c[1],r=[{value:"balanced",label:"Balanced"},{value:"high-protein",label:"High-Protein"},{value:"high-fiber",label:"High-Fiber"}],l=Object(a.useState)(""),o=Object(j.a)(l,2),p=o[0],f=o[1],x=Object(a.useState)(r.value),g=Object(j.a)(x,2),O=g[0],v=g[1];console.log(O);var y="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(p,"&app_id=cf9cf8b7&app_key=").concat(e.apiKey,"&diet=").concat(O);function N(){return(N=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get(y);case 2:t=e.sent,i(t.data.hits),console.log(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.jsxs)("div",{className:"container my-3 ",children:[Object(s.jsx)("h1",{className:"text-center",children:"Search for Your Favorite Recipes Here"}),Object(s.jsxs)("form",{action:"",className:"d-flex justify-content-center my-5",children:[Object(s.jsx)("input",{value:p,className:"form-control form-control-lg",type:"text",placeholder:"Input your Query","aria-label":".form-control-lg example",onChange:function(e){f(e.target.value)},style:{maxWidth:"544px"}}),Object(s.jsx)("div",{style:{width:"300px"},children:Object(s.jsx)(h.a,{className:"mx-3",options:r,stye:{minWidth:"500px"},onChange:function(e){v(e.value)}})}),Object(s.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return N.apply(this,arguments)},children:"Get Results"})]}),Object(s.jsx)("div",{className:"container my-3",children:Object(s.jsx)("div",{className:"row",children:n.map((function(e){return Object(s.jsx)("div",{className:"col-md-4",children:Object(s.jsx)(m,{title:e.recipe.label,image:e.recipe.image,url:e.recipe.url})})}))})})]})}var x=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(f,{apiKey:"45efa4a592c05bcc017f3d58f9effa82"})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),i(e),r(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(x,{})}),document.getElementById("root")),g()}},[[65,1,2]]]);
//# sourceMappingURL=main.a0b9a5b8.chunk.js.map