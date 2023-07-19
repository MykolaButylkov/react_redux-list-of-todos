(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n,a=c(11),s=c.n(a),r=c(3),l=c(19),i=c(8),o=c(17),d=c(18),u=c(5),j=function(e){return{type:"currentTodo/SET",payload:e}},b=function(){return{type:"currentTodo/REMOVE"}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return Object(u.a)({},t.payload);case"currentTodo/REMOVE":return null;default:return e}};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(n||(n={}));var O=function(e){return{type:"filter/SET_QUERY",payload:e}},f={setStatus:function(e){return{type:"filter/SET_STATUS",payload:e}}},m={query:"",status:n.ALL},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(u.a)(Object(u.a)({},e),{},{query:t.payload});case"filter/SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.payload});default:return e}},p=c(10),v=function(e){return{type:"todos/SET_TODOS",payload:e}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET_TODOS"===t.type?Object(p.a)(t.payload):Object(p.a)(e)},N=Object(i.combineReducers)({currentTodo:h,filter:x,todos:y}),g=Object(i.createStore)(N,Object(o.composeWithDevTools)(Object(i.applyMiddleware)(d.a))),T=c(0),E=(c(27),c(28),c(12)),S=c(4),w=c(7),k=c.n(w),_=c(13),C=c.n(_),L=(r.b,r.c);function A(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var D=function(e){return A("/users/".concat(e))},q=c(1),I=function(){var e=Object(r.b)(),t=L((function(e){return e.todos})),c=L((function(e){return e.filter})),a=Object(T.useState)(!1),s=Object(S.a)(a,2),l=s[0],i=s[1];Object(T.useEffect)((function(){var t=function(){var t=Object(E.a)(k.a.mark((function t(){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!0),t.next=3,A("/todos");case 3:c=t.sent,e(v(c)),i(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var o=function(e){var t=Object(p.a)(e);return t=t.filter((function(e){switch(c.status){case n.COMPLETED:return!0===e.completed;case n.ACTIVE:return!1===e.completed;case n.ALL:return!0;default:return!1}})),""!==c.query&&(t=t.filter((function(e){return e.title.includes(c.query)}))),t}(t);return Object(q.jsxs)(q.Fragment,{children:[0===o.length&&!1===l&&Object(q.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),!1===l&&o.length>0&&Object(q.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:"#"}),Object(q.jsx)("th",{children:Object(q.jsx)("span",{className:"icon",children:Object(q.jsx)("i",{className:"fas fa-check"})})}),Object(q.jsx)("th",{children:"Title"}),Object(q.jsx)("th",{children:" "})]})}),Object(q.jsx)("tbody",{children:o.map((function(t){return Object(q.jsxs)("tr",{"data-cy":"todo",children:[Object(q.jsx)("td",{className:"is-vcentered",children:t.id}),Object(q.jsx)("td",{className:"is-vcentered",children:t.completed&&Object(q.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(q.jsx)("i",{className:"fas fa-check"})})}),Object(q.jsx)("td",{className:"is-vcentered is-expanded",children:Object(q.jsx)("p",{className:C()({"has-text-danger":!1===t.completed},{"has-text-success":!0===t.completed}),children:t.title})}),Object(q.jsx)("td",{className:"has-text-right is-vcentered",children:Object(q.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return function(t){e(j(t))}(t)},children:Object(q.jsx)("span",{className:"icon",children:Object(q.jsx)("i",{className:"far fa-eye"})})})})]},t.id)}))})]})]})},M=function(){var e=Object(r.b)(),t=L((function(e){return e.filter.query}));return Object(q.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(q.jsx)("p",{className:"control",children:Object(q.jsx)("span",{className:"select",children:Object(q.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){var c;c=t.target.value,e(f.setStatus(c))},children:[Object(q.jsx)("option",{value:"all",children:"All"}),Object(q.jsx)("option",{value:"active",children:"Active"}),Object(q.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(q.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(q.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(t){var c;c=t.target.value,e(O(c))}}),Object(q.jsx)("span",{className:"icon is-left",children:Object(q.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(q.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(q.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})},R=(c(31),function(){return Object(q.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(q.jsx)("div",{className:"Loader__content"})})}),P=function(){var e=L((function(e){return e.currentTodo})),t=Object(T.useState)(null),c=Object(S.a)(t,2),n=c[0],a=c[1],s=Object(r.b)();function l(){return(l=Object(E.a)(k.a.mark((function e(t){var c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t.userId);case 2:c=e.sent,a(c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(T.useEffect)((function(){e&&function(e){l.apply(this,arguments)}(e)}),[e]),Object(q.jsxs)("div",{className:C()("modal",{"is-active":e}),"data-cy":"modal",children:[Object(q.jsx)("div",{className:"modal-background"}),null===n?Object(q.jsx)(R,{}):Object(q.jsxs)("div",{className:"modal-card",children:[Object(q.jsxs)("header",{className:"modal-card-head",children:[Object(q.jsxs)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:["Todo #",null===e||void 0===e?void 0:e.id]}),Object(q.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){s(b()),a(null)}})]}),Object(q.jsxs)("div",{className:"modal-card-body",children:[Object(q.jsx)("p",{className:"block","data-cy":"modal-title",children:null===e||void 0===e?void 0:e.title}),Object(q.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!(null!==e&&void 0!==e&&e.completed)&&Object(q.jsx)("strong",{className:"has-text-danger",children:"Planned"}),(null===e||void 0===e?void 0:e.completed)&&Object(q.jsx)("strong",{className:"has-text-success",children:"Done"})," by ",n&&Object(q.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]})]})},U=function(){var e=L((function(e){return e.todos}));return Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{className:"section",children:Object(q.jsx)("div",{className:"container",children:Object(q.jsxs)("div",{className:"box",children:[Object(q.jsx)("h1",{className:"title",children:"Todos:"}),Object(q.jsx)("div",{className:"block",children:Object(q.jsx)(M,{})}),Object(q.jsxs)("div",{className:"block",children:[0===e.length&&Object(q.jsx)(R,{}),Object(q.jsx)(I,{})]})]})})}),Object(q.jsx)(P,{})]})},V=function(){return Object(q.jsx)(r.a,{store:g,children:Object(q.jsx)(l.a,{children:Object(q.jsx)(U,{})})})};s.a.render(Object(q.jsx)(V,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2ab5c1e8.chunk.js.map