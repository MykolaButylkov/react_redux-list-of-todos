(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(8),s=c.n(n),a=c(4),r=c(18),i=c(6),l=c(14),o=c(15),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type,e},j=c(3),u=function(e){return{type:"filter/SET_QUERY",payload:e}},b={all:function(){return{type:"filter/ALL"}},active:function(){return{type:"filter/ACTIVE"}},completed:function(){return{type:"filter/COMPLETED"}}},h={query:"",status:"filter/ALL"},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(j.a)(Object(j.a)({},e),{},{query:t.payload});case"filter/ACTIVE":case"filter/COMPLETED":return Object(j.a)(Object(j.a)({},e),{},{status:t.type});default:return e}},O=c(12),p=function(e){return{type:"todos/SET_TODOS",payload:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET_TODOS"===t.type?Object(O.a)(t.payload):Object(O.a)(e)},m=Object(i.combineReducers)({currentTodo:d,filter:f,todos:x}),v=Object(i.createStore)(m,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(o.a))),y=c(0),N=(c(26),c(27),c(16)),g=c(11),E=c.n(g),T=c(17),C=c.n(T),k=(a.b,a.c);function w(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var S=c(1),L=function(){var e=Object(a.b)(),t=k((function(e){return e.todos}));return Object(y.useEffect)((function(){var t=function(){var t=Object(N.a)(E.a.mark((function t(){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w("/todos");case 2:c=t.sent,e(p(c));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),Object(S.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("th",{children:"Title"}),Object(S.jsx)("th",{children:" "})]})}),Object(S.jsx)("tbody",{children:t.map((function(e){return Object(S.jsxs)("tr",{"data-cy":"todo",children:[Object(S.jsx)("td",{className:"is-vcentered",children:e.id}),Object(S.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(S.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("td",{className:"is-vcentered is-expanded",children:Object(S.jsx)("p",{className:C()({"has-text-danger":!1===e.completed},{"has-text-success":!0===e.completed}),children:e.title})}),Object(S.jsx)("td",{className:"has-text-right is-vcentered",children:Object(S.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})]})},_=function(){var e=Object(a.b)(),t=k((function(e){return e.filter.query})),c=k((function(e){return e.todos})),n=k((function(e){return e.filter}));function s(t){switch(t.status){case"filter/ACTIVE":e(p(c.filter((function(e){return!1===e.completed}))));break;case"filter/COMPLETED":e(p(c.filter((function(e){return!0===e.completed}))))}""!==t.query&&e(p(c.filter((function(e){return e.title.includes(t.query)}))))}return Object(S.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(S.jsx)("p",{className:"control",children:Object(S.jsx)("span",{className:"select",children:Object(S.jsxs)("select",{"data-cy":"statusSelect",children:[Object(S.jsx)("option",{onClick:function(){e(b.all()),s(n)},value:"all",children:"All"}),Object(S.jsx)("option",{onClick:function(){e(b.active()),s(n)},value:"active",children:"Active"}),Object(S.jsx)("option",{onClick:function(){e(b.completed()),s(n)},value:"completed",children:"Completed"})]})})}),Object(S.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(S.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(t){var c;c=t.target.value,e(u(c)),s(n)}}),Object(S.jsx)("span",{className:"icon is-left",children:Object(S.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(S.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(S.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})},A=(c(30),function(){return Object(S.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(S.jsx)("div",{className:"Loader__content"})})}),D=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{className:"section",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"box",children:[Object(S.jsx)("h1",{className:"title",children:"Todos:"}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(_,{})}),Object(S.jsxs)("div",{className:"block",children:[Object(S.jsx)(A,{}),Object(S.jsx)(L,{})]})]})})})})},q=function(){return Object(S.jsx)(a.a,{store:v,children:Object(S.jsx)(r.a,{children:Object(S.jsx)(D,{})})})};s.a.render(Object(S.jsx)(q,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c057e3e7.chunk.js.map