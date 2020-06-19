(this["webpackJsonpnews-app"]=this["webpackJsonpnews-app"]||[]).push([[0],{42:function(e,t,a){e.exports=a(94)},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(38),c=a.n(s),l=a(11);a(47),a(48),a(49),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(3),u=a(2),i=a(1),m=a(5),b=a.n(m),d=a(10),p=a(15),v=a(39),f=a.n(v),g=a(16),E=a.n(g);E.a.options.newestOnTop=!1,E.a.options.positionClass="toast-bottom-center";var h=E.a,j=f.a.create({baseURL:"https://news-app-node.herokuapp.com/"}),O=localStorage.getItem("token");O&&(j.defaults.headers.common.authorization=O),j.interceptors.request.use((function(e){return console.log(e),e}),(function(e){return Promise.reject(e)})),j.interceptors.response.use((function(e){return e.data}),(function(e){var t,a,n,r,s;return h.error((null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.errors)?"Check your data":(null===(n=e.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)?e.response.data.message:e.message),Promise.reject((null===(s=e.response)||void 0===s?void 0:s.data)||{})}));var N=j,w=a(13),y=a.n(w),k=y.a.string().required().messages({"string.empty":"Fullname should not be empty","any.required":"Fullname is required"}),S=y.a.string().required().pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).messages({"string.pattern.base":"Email is invalid","string.empty":"Email should not be empty","any.required":"Email is required"}),x=y.a.string().min(8).required().messages({"string.empty":"Password should not be empty","string.min":"Password should have a minimum length of {#limit}","any.required":"Password is required"}),C=y.a.object({email:S,password:x}),_=y.a.object({fullname:k,email:S,password:x}),P=function(e){var t,a,s=Object(n.useState)(!1),c=Object(u.a)(s,2),l=c[0],m=c[1],v=Object(n.useState)({}),f=Object(u.a)(v,2),g=f[0],E=f[1],h=Object(n.useContext)(D),j=Object(i.g)(),O=Object(n.useState)({email:"",password:""}),w=Object(u.a)(O,2),y=w[0],k=w[1],S=function(){var e=Object(d.a)(b.a.mark((function e(t){var a,n,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),m(!0),a=C.validate(y,{abortEarly:!1}),!(n=a.error)){e.next=8;break}return r=p.keyBy(n.details,(function(e){return e.context.label})),E(r),m(!1),e.abrupt("return");case 8:return e.prev=8,e.next=11,N.post("user/login",y);case 11:return s=e.sent,h.setLoggedUser(s),j.replace("/"),e.abrupt("return");case 17:e.prev=17,e.t0=e.catch(8),E(e.t0);case 20:m(!1);case 21:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:S},r.a.createElement("label",{htmlFor:"Email",className:"label"},"Email"),r.a.createElement("input",{className:"input",type:"text",id:"Email",placeholder:"Email",value:y.email,onChange:function(e){return k(Object(o.a)(Object(o.a)({},y),{},{email:e.target.value}))}}),r.a.createElement("span",{className:"error-message"},null===(t=g.email)||void 0===t?void 0:t.message),r.a.createElement("label",{htmlFor:"Password",className:"label"},"Password"),r.a.createElement("input",{className:"input",type:"password",id:"Password",placeholder:"Password",value:y.password,onChange:function(e){return k(Object(o.a)(Object(o.a)({},y),{},{password:e.target.value}))}}),r.a.createElement("span",{className:"error-message"},null===(a=g.password)||void 0===a?void 0:a.message),r.a.createElement("button",{type:"submit",disabled:l,className:"btn"+(l?" loading":"")},!l&&"Login"))},F=function(){var e,t,a,s=Object(n.useState)(!1),c=Object(u.a)(s,2),l=c[0],m=c[1],v=Object(n.useState)({}),f=Object(u.a)(v,2),g=f[0],E=f[1],h=Object(n.useContext)(D),j=Object(i.g)(),O=Object(n.useState)({fullname:"",email:"",password:""}),w=Object(u.a)(O,2),y=w[0],k=w[1],S=function(){var e=Object(d.a)(b.a.mark((function e(t){var a,n,r,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),m(!0),a=_.validate(y,{abortEarly:!1}),!(n=a.error)){e.next=8;break}return r=p.keyBy(n.details,(function(e){return e.context.label})),E(r),m(!1),e.abrupt("return");case 8:return e.prev=8,e.next=11,N.post("user/register",y);case 11:return s=e.sent,h.setLoggedUser(s),j.replace("/"),e.abrupt("return");case 17:e.prev=17,e.t0=e.catch(8),E(e.t0);case 20:m(!1);case 21:case"end":return e.stop()}}),e,null,[[8,17]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:S},r.a.createElement("label",{htmlFor:"Fullname",className:"label"},"Fullname"),r.a.createElement("input",{className:"input",type:"text",id:"Fullname",placeholder:"Fullname",value:y.fullname,onChange:function(e){return k(Object(o.a)(Object(o.a)({},y),{},{fullname:e.target.value}))}}),r.a.createElement("span",{className:"error-message"},null===(e=g.fullname)||void 0===e?void 0:e.message),r.a.createElement("label",{htmlFor:"Email",className:"label"},"Email"),r.a.createElement("input",{className:"input",type:"text",id:"Email",placeholder:"Email",value:y.email,onChange:function(e){return k(Object(o.a)(Object(o.a)({},y),{},{email:e.target.value}))}}),r.a.createElement("span",{className:"error-message"},null===(t=g.email)||void 0===t?void 0:t.message),r.a.createElement("label",{htmlFor:"Password",className:"label"},"Password"),r.a.createElement("input",{className:"input",type:"password",id:"Password",placeholder:"Password",value:y.password,onChange:function(e){return k(Object(o.a)(Object(o.a)({},y),{},{password:e.target.value}))}}),r.a.createElement("span",{className:"error-message"},null===(a=g.password)||void 0===a?void 0:a.message),r.a.createElement("button",{type:"submit",disabled:l,className:"btn"+(l?" loading":"")},!l&&"Login"))},L=function(e){var t=Object(n.useState)(!0),a=Object(u.a)(t,2),s=a[0],c=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"login container"},r.a.createElement("div",{className:"login__img"}),r.a.createElement("div",{className:"login__form"},r.a.createElement("div",{className:"tabs"},r.a.createElement("h1",{className:"tab subtitle"+(s?" tab--active":""),onClick:function(){return c(!0)}},"Login"),r.a.createElement("h1",{className:"tab subtitle"+(s?"":" tab--active"),onClick:function(){return c(!1)}},"Signup")),r.a.createElement("div",{className:"tabs-body"},s?r.a.createElement(P,null):r.a.createElement(F,null)))))},q=function(e){var t,a,n=e.post;return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__img"},r.a.createElement("img",{alt:n.title,src:n.urlToImage})),r.a.createElement("div",{className:"post__text"},r.a.createElement("p",null,null===(t=n.source)||void 0===t?void 0:t.name),r.a.createElement("p",{className:"post__date"},new Date(n.publishedAt).toLocaleString()),r.a.createElement("p",{className:"subtitle"},n.title),r.a.createElement("p",null,null===(a=n.content)||void 0===a?void 0:a.replace(/\[\+.* chars\]/,""))),r.a.createElement("div",{className:"post__overlay"},r.a.createElement("a",{className:"btn",href:n.url,target:"_blank",rel:"noopener noreferrer"},"Read More")))},I=function(){var e,t,a=Object(n.useState)([]),s=Object(u.a)(a,2),c=s[0],l=s[1],o=Object(n.useState)(1),i=Object(u.a)(o,2),m=i[0],p=i[1],v=Object(n.useState)(0),f=Object(u.a)(v,2),g=f[0],E=f[1],h=Object(n.useState)(!1),j=Object(u.a)(h,2),O=j[0],w=j[1],y=Object(n.useContext)(D);Object(n.useEffect)((function(){var e,t;function a(){return(a=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,N.get("news?page=".concat(m));case 3:t=e.sent,l((function(e){return e.concat(t.articles)})),E(t.totalResults),w(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(null===(e=y.user)||void 0===e||null===(t=e.sources)||void 0===t?void 0:t.length)>0&&function(){a.apply(this,arguments)}()}),[m,y.user]);return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Latest News"),(null===(e=y.user)||void 0===e||null===(t=e.sources)||void 0===t?void 0:t.length)>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"posts"},c.map((function(e){return r.a.createElement(q,{key:e.title,post:e})}))),g>c.length&&r.a.createElement("button",{className:"btn btn-center"+(O?" loading":""),disabled:O,onClick:function(){p((function(e){return e+1}))}},!O&&"Load More")):r.a.createElement("h1",{style:{textAlign:"center"}},"Please subscribe to a source first"))},U=function(){var e,t=Object(n.useContext)(D);return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},"NEWS."),r.a.createElement("div",{className:"nav"},t.user?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{className:"nav-link",to:"home"},"Home"),r.a.createElement(l.b,{className:"nav-link",to:"sources"},"Sources"),r.a.createElement("span",{className:"nav-link"},"Welcome back ",null===(e=t.user)||void 0===e?void 0:e.fullname),r.a.createElement("span",{className:"nav-link",onClick:function(){return t.setLoggedUser()}},"Logout")):r.a.createElement(l.b,{className:"nav-link",to:"login"},"Login"))))},z=function(e){var t=e.source,a=e.onSubscribeChange,s=Object(n.useState)(!1),c=Object(u.a)(s,2),l=c[0],o=c[1],i=Object(n.useContext)(D),m=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.next=3,N.post("source/".concat(t.subscribed?"unsubscribe":"subscribe","/").concat(t.id));case 3:t.subscribed?i.unsubscribe(t.id):i.subscribe(t.id),a(t.id),o(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"post__text"},r.a.createElement("p",{className:"post__date"},t.category),r.a.createElement("p",{className:"subtitle"},t.name),r.a.createElement("p",null,t.description)),r.a.createElement("button",{className:"btn btn-center"+(l?" loading":"")+(t.subscribed?"":" btn--secondary"),disabled:l,onClick:m},!l&&(t.subscribed?"Unsubscribe":"Subscribe")))},A=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!1),l=Object(u.a)(c,2),i=l[0],m=l[1];Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,N.get("sources");case 3:t=e.sent,s(t),m(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var p=function(e){s((function(t){return t.map((function(t){return t.id===e?Object(o.a)(Object(o.a)({},t),{},{subscribed:!t.subscribed}):t}))}))};return r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Sources ",i),i?r.a.createElement("button",{className:"btn btn-center loading"}):r.a.createElement("div",{className:"posts"},a.map((function(e){return r.a.createElement(z,{key:e.id,source:e,onSubscribeChange:p})}))))},B=a(41),W=function(e){var t=e.component,a=Object(B.a)(e,["component"]);return r.a.createElement(i.b,Object.assign({},a,{render:function(e){return localStorage.getItem("token")?r.a.createElement(t,e):r.a.createElement(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},D=r.a.createContext();var M=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],s=t[1];return Object(n.useEffect)((function(){localStorage.getItem("token")&&N.get("user").then((function(e){return s(e.user)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(D.Provider,{value:{user:a,setUser:s,setLoggedUser:function(e){if(!e)return s(null),localStorage.removeItem("token"),void delete N.defaults.headers.common.authorization;s(e.user),localStorage.setItem("token",e.token),N.defaults.headers.common.authorization=e.token},subscribe:function(e){s((function(t){return Object(o.a)(Object(o.a)({},t),{},{sources:t.sources.concat(e)})}))},unsubscribe:function(e){s((function(t){return Object(o.a)(Object(o.a)({},t),{},{sources:t.sources.filter((function(t){return t!==e}))})}))}}},r.a.createElement(U,null),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login",component:L}),r.a.createElement(W,{path:"/sources",component:A}),r.a.createElement(W,{path:"/",component:I}))))},R=function(e){var t=Object(i.h)().pathname;return Object(n.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t]),null};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(R,null),r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.c9957b50.chunk.js.map