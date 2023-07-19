(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n,s=c(10),a=c.n(s),r=c(3),i=c(19),l=c(7),o=c(15),d=c(16),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return t.type,e},u=c(5);!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(n||(n={}));var b=function(e){return{type:"filter/SET_QUERY",payload:e}},h={setStatus:function(e){return{type:"filter/SET_STATUS",payload:e}}},O={query:"",status:n.ALL},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/SET_QUERY":return Object(u.a)(Object(u.a)({},e),{},{query:t.payload});case"filter/SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.payload});default:return e}},x=c(9),p=function(e){return{type:"todos/SET_TODOS",payload:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todos/SET_TODOS"===t.type?Object(x.a)(t.payload):Object(x.a)(e)},v=Object(l.combineReducers)({currentTodo:j,filter:f,todos:m}),y=Object(l.createStore)(v,Object(o.composeWithDevTools)(Object(l.applyMiddleware)(d.a))),N=c(0),g=(c(27),c(28),c(17)),T=c(4),S=c(13),E=c.n(S),w=c(18),_=c.n(w),L=(r.b,r.c);function A(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var C=c(1),k=function(){var e=Object(r.b)(),t=L((function(e){return e.todos})),c=L((function(e){return e.filter})),s=Object(N.useState)(!1),a=Object(T.a)(s,2),i=a[0],l=a[1];Object(N.useEffect)((function(){var t=function(){var t=Object(g.a)(E.a.mark((function t(){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,A("/todos");case 3:c=t.sent,e(p(c)),l(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]);var o=function(e){var t=Object(x.a)(e);return t=t.filter((function(e){switch(c.status){case n.COMPLETED:return!0===e.completed;case n.ACTIVE:return!1===e.completed;case n.ALL:return!0;default:return!1}})),""!==c.query&&(t=t.filter((function(e){return e.title.includes(c.query)}))),t}(t);return Object(C.jsxs)(C.Fragment,{children:[0===o.length&&!1===i&&Object(C.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),!1===i&&o.length>0&&Object(C.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{children:"#"}),Object(C.jsx)("th",{children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("th",{children:"Title"}),Object(C.jsx)("th",{children:" "})]})}),Object(C.jsx)("tbody",{children:o.map((function(e){return Object(C.jsxs)("tr",{"data-cy":"todo",children:[Object(C.jsx)("td",{className:"is-vcentered",children:e.id}),Object(C.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(C.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(C.jsx)("i",{className:"fas fa-check"})})}),Object(C.jsx)("td",{className:"is-vcentered is-expanded",children:Object(C.jsx)("p",{className:_()({"has-text-danger":!1===e.completed},{"has-text-success":!0===e.completed}),children:e.title})}),Object(C.jsx)("td",{className:"has-text-right is-vcentered",children:Object(C.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",children:Object(C.jsx)("span",{className:"icon",children:Object(C.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]})]})},D=function(){var e=Object(r.b)(),t=L((function(e){return e.filter.query}));return Object(C.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(C.jsx)("p",{className:"control",children:Object(C.jsx)("span",{className:"select",children:Object(C.jsxs)("select",{"data-cy":"statusSelect",onChange:function(t){var c;c=t.target.value,e(h.setStatus(c))},children:[Object(C.jsx)("option",{value:"all",children:"All"}),Object(C.jsx)("option",{value:"active",children:"Active"}),Object(C.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(C.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(C.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(t){var c;c=t.target.value,e(b(c))}}),Object(C.jsx)("span",{className:"icon is-left",children:Object(C.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(C.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(C.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete"})})]})]})},q=(c(31),function(){return Object(C.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(C.jsx)("div",{className:"Loader__content"})})}),I=function(){var e=L((function(e){return e.todos}));return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("div",{className:"section",children:Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("div",{className:"box",children:[Object(C.jsx)("h1",{className:"title",children:"Todos:"}),Object(C.jsx)("div",{className:"block",children:Object(C.jsx)(D,{})}),Object(C.jsxs)("div",{className:"block",children:[0===e.length&&Object(C.jsx)(q,{}),Object(C.jsx)(k,{})]})]})})})})},U=function(){return Object(C.jsx)(r.a,{store:y,children:Object(C.jsx)(i.a,{children:Object(C.jsx)(I,{})})})};a.a.render(Object(C.jsx)(U,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.2c2010a2.chunk.js.map