(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{34:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),s=n(12),a=n.n(s),i=(n(34),n(9)),o=n(3),u=n(1),l=function(){return Object(u.jsxs)("nav",{className:"navbar navbar-dark navbar-expand-lg bg-primary",children:[Object(u.jsx)("div",{className:"navbar-brand",children:"English language"}),Object(u.jsxs)("ul",{className:"navbar-nav",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(i.b,{className:"nav-link",to:"/",exact:!0,children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(i.b,{className:"nav-link",to:"about",children:"About"})})]})]})},j=n(4),b=function(){var t=Object(r.useState)(0),e=Object(j.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsxs)("h1",{children:["\u0421\u0447\u0435\u0442\u0447\u0438\u043a: ",n]}),Object(u.jsx)("button",{onClick:function(){c(n+1)},className:"btn btn-success",children:"Add"}),Object(u.jsx)("button",{onClick:function(){c(n-1)},className:"btn btn-danger",children:"Delete"})]})},v=function(){return Object(u.jsx)(r.Fragment,{children:Object(u.jsx)(i.b,{className:"EnglishIt",to:"englishIt",exact:!0,children:Object(u.jsx)("button",{type:"button",class:"btn btn-primary btn-lg",children:"\u0422\u0435\u0441\u0442 \u043f\u043e \u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c\u0443 \u044f\u0437\u044b\u043a\u0443"})})})},d=function(){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)("h1",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u0438"}),Object(u.jsxs)("ul",{className:"engList",children:[Object(u.jsx)(i.b,{to:"startTest",exact:!0,children:Object(u.jsx)("li",{children:Object(u.jsx)("button",{type:"button",className:"btn btn-warning",children:"\u041b\u0435\u0433\u043a\u0438\u0439"})})}),Object(u.jsx)(i.b,{to:"startTest1",exact:!0,children:Object(u.jsx)("li",{children:Object(u.jsx)("button",{type:"button",className:"btn btn-success",children:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439"})})}),Object(u.jsx)(i.b,{to:"startTest2",exact:!0,children:Object(u.jsx)("li",{children:Object(u.jsx)("button",{type:"button",className:"btn btn-danger",children:"\u0421\u043b\u043e\u0436\u043d\u044b\u0439"})})}),Object(u.jsx)(i.b,{to:"startTest3",exact:!0,children:Object(u.jsx)("li",{children:Object(u.jsx)("button",{type:"button",className:"btn btn-secondary",children:"\u0411\u0435\u0437 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0443"})})})]})]})},h=n(43),O=function(t){return Object(u.jsxs)("div",{className:"alert alert-dark",role:"alert",children:[Object(u.jsx)("h1",{children:t.info}),Object(u.jsxs)("h3",{children:[t.state.question," - \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043a\u0430\u043a: ",t.state.correct]}),Object(u.jsx)("button",{type:"button",className:"btn btn-outline-success",onClick:function(){t.startTest()},children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0441\u043d\u0430\u0447\u0430\u043b\u0430"})]})},q=function(t){for(var e=[],n=0;n<t;n++)e.push(n);for(var r=[],c=e.length,s=0;c--;)s=Math.floor(Math.random()*(c+1)),r.push(e[s]),e.splice(s,1);return r},x=function(){for(var t=[0,1,2,3,4],e=[],n=t.length,r=0;n--;)r=Math.floor(Math.random()*(n+1)),e.push(t[r]),t.splice(r,1);return e},m=n(42),f=function(t){return Object(u.jsxs)("div",{className:"alert alert-dark",role:"alert",children:[Object(u.jsx)("h1",{children:t.question}),Object(u.jsx)("div",{class:"d-grid gap-2 col-6 mx-auto",children:t.variantsElements})]})},p=function(t){return Object(u.jsxs)("div",{className:"alert alert-dark",role:"alert",children:[Object(u.jsx)("h1",{children:t.question}),Object(u.jsx)("div",{class:"d-grid gap-2 col-6 mx-auto",children:t.variantsElements})]})},g=function(t,e){for(var n=[],r=0;r<5;r++)n.push(e[t[r]]);return n},N=function(t){return Object(u.jsx)(h.a,{in:!!t.variantsItem,classNames:"alert",timeout:300,unmountOnExit:!0,children:Object(u.jsx)("button",{onClick:function(){return t.onClick(t.variantsItem)},className:"btn btn-primary btn-variants active",type:"button",children:t.variantsItem})})},y=function(t){var e=Object(r.useState)(g(x(),t.state.variants)),n=Object(j.a)(e,2),c=n[0],s=n[1],a=Object(r.useState)(!0),i=Object(j.a)(a,2),o=i[0],l=i[1];Object(r.useEffect)((function(){s(g(x(),t.state.variants))}),[t.state]);var b=function(e){var n=e;if(n!==t.state.correct&&t.live>0&&t.levelLive>0){!function(t){c.splice(t,1,null),s(c)}(function(t,e){for(var n=0;t!==e[n];)n++;return n}(n,c)),t.handleClick()}else n!==t.state.correct&&t.levelLive<1?t.levelLiveClick():n!==t.state.correct&&t.live<1?t.liveClick():n===t.state.correct&&0!==t.finish?(t.nextClick(),l((function(t){return!t}))):n===t.state.correct&&0===t.finish&&t.congratulation()},v=c.map((function(t){return Object(u.jsx)(N,{onClick:b,variantsItem:t})}));return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(m.a,{mode:"out-in",children:Object(u.jsx)(h.a,{addEndListener:function(t,e){t.addEventListener("transitionend",e,!1)},classNames:"fade",children:o?Object(u.jsx)(f,{question:t.state.question,variantsElements:v}):Object(u.jsx)(p,{question:t.state.question,variantsElements:v})},o)})})},k=function(){return[{question:"cancel",variants:["\u0441\u043e\u0437\u0434\u0430\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u0437\u0430\u043a\u0440\u044b\u0442\u044c","\u043e\u0442\u0434\u0430\u0442\u044c"],correct:"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"},{question:"with",variants:["\u043d\u0430","\u0432","\u0441","\u0438\u0437","\u0434\u043b\u044f"],correct:"\u0441"},{question:"open",variants:["c\u043e\u0437\u0434\u0430\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u043e\u0442\u043a\u0440\u044b\u0442\u044c","\u043e\u0442\u0434\u0430\u0442\u044c"],correct:"\u043e\u0442\u043a\u0440\u044b\u0442\u044c"},{question:"close",variants:["\u0441\u043e\u0437\u0434\u0430\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u0437\u0430\u043a\u0440\u044b\u0442\u044c","\u043e\u0442\u0434\u0430\u0442\u044c"],correct:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"},{question:"error",variants:["\u043f\u043e\u0438\u0441\u043a","\u043e\u0448\u0438\u0431\u043a\u0430","\u0443\u0441\u043f\u0435\u0448\u043d\u043e","\u0432\u0437\u044f\u0442\u044c","\u043e\u0442\u0434\u0430\u0442\u044c"],correct:"\u043e\u0448\u0438\u0431\u043a\u0430"},{question:"store",variants:["\u043f\u0440\u0435\u0434\u043c\u0435\u0442","\u0440\u0443\u0447\u043a\u0430","\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435","\u0447\u0438\u0441\u0442\u0438\u043b\u0438\u0449\u0435","\u043a\u043b\u0443\u0431"],correct:"\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"},{question:"item",variants:["\u0432\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044c","\u0430\u043c\u0443\u043b\u0435\u0442","\u043f\u0440\u0435\u0434\u043c\u0435\u0442","\u0441\u043b\u043e\u0432\u043e","\u0431\u0443\u043a\u0432\u0430"],correct:"\u043f\u0440\u0435\u0434\u043c\u0435\u0442"},{question:"action",variants:["\u0430\u043a\u0442\u0438\u0432","\u043f\u0440\u0435\u0434\u043c\u0435\u0442","\u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435","\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435","\u043c\u0430\u0433\u0430\u0437\u0438\u043d"],correct:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"},{question:"type",variants:["\u0442\u0443\u043d\u043d\u0435\u043b\u044c","\u0432\u0438\u0434","\u043f\u0440\u043e\u0445\u043e\u0434","\u0441\u0435\u043a\u0440\u0435\u0442","\u0442\u0438\u043f"],correct:"\u0442\u0438\u043f"},{question:"page",variants:["\u0444\u0430\u0439\u043b","\u043f\u0430\u043f\u043a\u0430","\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435","\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430","\u043f\u0440\u0435\u0434\u043c\u0435\u0442"],correct:"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"},{question:"delete",variants:["\u0443\u0434\u0430\u043b\u0438\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u043e\u0442\u043a\u0440\u044b\u0442\u044c","\u043e\u0442\u0434\u0430\u0442\u044c"],correct:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"},{question:"state",variants:["\u0430\u043a\u0442\u0438\u0432","\u043f\u0440\u0435\u0434\u043c\u0435\u0442","\u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435","\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435","\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435"],correct:"\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435"},{question:"default",variants:["\u043f\u0430\u0434\u0435\u043d\u0438\u0435","\u043f\u043e\u0434\u044a\u0435\u043c","\u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443","\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","\u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435"],correct:"\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"},{question:"return",variants:["\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u043e\u0442\u043a\u0440\u044b\u0442\u044c","\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"],correct:"\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c"},{question:"warning",variants:["\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435","\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","\u043f\u043e\u043c\u043e\u0449\u044c","\u043f\u043e\u0438\u0441\u043a","\u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439"],correct:"\u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435"},{question:"danger",variants:["\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c","\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","\u043f\u043e\u043c\u043e\u0449\u044c","\u043f\u043e\u0438\u0441\u043a","\u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439"],correct:"\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c"},{question:"success",variants:["\u0443\u0441\u043f\u0435\u0445","\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","\u043f\u043e\u043c\u043e\u0449\u044c","\u043f\u043e\u0438\u0441\u043a","\u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439"],correct:"\u0443\u0441\u043f\u0435\u0445"},{question:"exact",variants:["\u0442\u043e\u0447\u043d\u044b\u0439","\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439","\u043f\u043e\u0438\u0441\u043a","\u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439"],correct:"\u0442\u043e\u0447\u043d\u044b\u0439"},{question:"search",variants:["\u0442\u043e\u0447\u043d\u044b\u0439","\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439","\u043f\u043e\u0438\u0441\u043a","\u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439"],correct:"\u043f\u043e\u0438\u0441\u043a"},{question:"source",variants:["\u0442\u043e\u0447\u043d\u044b\u0439","\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430","\u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439","\u043f\u043e\u0438\u0441\u043a","\u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439"],correct:"\u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439"},{question:"copy",variants:["\u043a\u043e\u043d\u0444\u0435\u0442\u0430","\u043e\u0431\u0435\u0440\u0442\u043a\u0430","\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c","\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c","\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c"],correct:"\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c"},{question:"cut",variants:["\u043a\u043e\u043d\u0444\u0435\u0442\u0430","\u043e\u0431\u0435\u0440\u0442\u043a\u0430","\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c","\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c","\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c"],correct:"\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c"},{question:"paste",variants:["\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c","\u043e\u0431\u0435\u0440\u0442\u043a\u0430","\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c","\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c","\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c"],correct:"\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c"},{question:"print",variants:["\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c","\u043e\u0431\u0435\u0440\u0442\u043a\u0430","\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c","\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c","\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c"],correct:"\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c"},{question:"edit",variants:["\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c","\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","\u0435\u0434\u0438\u043d\u0438\u0446\u0430","\u043f\u0435\u0447\u0430\u0442\u0430\u0442\u044c","\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c"],correct:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"},{question:"data",variants:["\u0434\u0430\u043d\u043d\u044b\u0435","\u0434\u0430\u0442\u0430","\u0432\u0440\u0435\u043c\u044f","\u0447\u0430\u0441\u044b","\u043c\u0435\u0441\u044f\u0446"],correct:"\u0434\u0430\u043d\u043d\u044b\u0435"},{question:"date",variants:["\u0434\u0430\u043d\u043d\u044b\u0435","\u0434\u0430\u0442\u0430","\u0432\u0440\u0435\u043c\u044f","\u0447\u0430\u0441\u044b","\u043c\u0435\u0441\u044f\u0446"],correct:"\u0434\u0430\u0442\u0430"},{question:"time",variants:["\u0434\u0430\u043d\u043d\u044b\u0435","\u0434\u0430\u0442\u0430","\u0432\u0440\u0435\u043c\u044f","\u0447\u0430\u0441\u044b","\u043c\u0435\u0441\u044f\u0446"],correct:"\u0432\u0440\u0435\u043c\u044f"},{question:"year",variants:["\u0433\u043e\u0434","\u0434\u0430\u0442\u0430","\u0432\u0440\u0435\u043c\u044f","\u0447\u0430\u0441\u044b","\u043c\u0435\u0441\u044f\u0446"],correct:"\u0433\u043e\u0434"},{question:"month",variants:["\u0433\u043e\u0434","\u0434\u0430\u0442\u0430","\u0432\u0440\u0435\u043c\u044f","\u0447\u0430\u0441\u044b","\u043c\u0435\u0441\u044f\u0446"],correct:"\u043c\u0435\u0441\u044f\u0446"},{question:"week",variants:["\u0433\u043e\u0434","\u043d\u0435\u0434\u0435\u043b\u044f","\u0432\u0440\u0435\u043c\u044f","\u0447\u0430\u0441\u044b","\u043c\u0435\u0441\u044f\u0446"],correct:"\u043d\u0435\u0434\u0435\u043b\u044f"},{question:"view",variants:["\u0432\u0438\u0434","\u043c\u043e\u0434\u0435\u043b\u044c","\u043c\u0430\u0440\u043a\u0430","\u0434\u0438\u0437\u0430\u0439\u043d","\u0441\u043a\u043b\u0430\u0434"],correct:"\u0432\u0438\u0434"},{question:"show",variants:["\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","\u0441\u043a\u0440\u044b\u0442\u044c","\u043c\u0430\u0440\u043a\u0430","\u0434\u0438\u0437\u0430\u0439\u043d","\u0441\u043a\u043b\u0430\u0434"],correct:"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"},{question:"hide",variants:["\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","\u0441\u043a\u0440\u044b\u0442\u044c","\u043c\u0430\u0440\u043a\u0430","\u0434\u0438\u0437\u0430\u0439\u043d","\u0441\u043a\u043b\u0430\u0434"],correct:"\u0441\u043a\u0440\u044b\u0442\u044c"},{question:"button",variants:["\u043a\u043d\u043e\u043f\u043a\u0430","\u0445\u043b\u0435\u0431","\u0431\u0430\u0442\u043e\u043d","\u0442\u043e\u043b\u0441\u0442\u044b\u0439","\u043d\u0430\u0436\u0430\u0442\u044c"],correct:"\u043a\u043d\u043e\u043f\u043a\u0430"},{question:"press",variants:["\u043a\u043d\u043e\u043f\u043a\u0430","\u0445\u043b\u0435\u0431","\u043f\u0440\u0435\u0441\u0441\u043e\u0432\u0430\u0442\u044c","\u0442\u043e\u043b\u0441\u0442\u044b\u0439","\u043d\u0430\u0436\u0430\u0442\u044c"],correct:"\u043d\u0430\u0436\u0430\u0442\u044c"},{question:"display",variants:["\u044d\u043a\u0440\u0430\u043d","\u043e\u043a\u043d\u043e","\u0434\u0438\u0441\u043a\u043e\u043d\u0442","\u0434\u0438\u0441\u043a","\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c"],correct:"\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c"},{question:"screen",variants:["\u044d\u043a\u0440\u0430\u043d","\u043e\u043a\u043d\u043e","\u0434\u0438\u0441\u043a\u043e\u043d\u0442","\u0434\u0438\u0441\u043a","\u0441\u0435\u043d\u0441\u043e\u0440"],correct:"\u044d\u043a\u0440\u0430\u043d"},{question:"developer",variants:["\u0445\u043e\u043b\u0434\u0438\u043d\u0433","\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a","\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442","\u0441\u043f\u0435\u0446\u0438\u0438","\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"],correct:"\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"},{question:"clerk",variants:["\u0446\u0438\u0440\u043a","\u0446\u0438\u0440\u043a\u0443\u043b\u044c","\u0441\u043b\u0443\u0436\u0430\u0449\u0438\u0439","\u0443\u0431\u043e\u0440\u0449\u0438\u043a","\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"],correct:"\u0441\u043b\u0443\u0436\u0430\u0449\u0438\u0439"},{question:"employee",variants:["\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a","\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a","\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442","\u043f\u0443\u0441\u0442\u043e\u0439","\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"],correct:"\u0440\u0430\u0431\u043e\u0442\u043d\u0438\u043a"},{question:"empty",variants:["\u043f\u043e\u043b\u043d\u044b\u0439","\u043f\u0440\u043e\u0441\u0442\u043e\u0439","\u0432\u044b\u0441\u043e\u043a\u0438\u0439","\u043f\u0443\u0441\u0442\u043e\u0439","\u0445\u0443\u0434\u043e\u0439"],correct:"\u043f\u0443\u0441\u0442\u043e\u0439"},{question:"follow",variants:["\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c","\u043f\u043e\u043b\u043d\u044b\u0439","\u043f\u043b\u0430\u0432\u0430\u0442\u044c","\u043f\u0443\u0441\u0442\u043e\u0439","\u0445\u0443\u0434\u043e\u0439"],correct:"\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c"},{question:"net",variants:["\u043d\u0435\u0442","\u0441\u0435\u0442\u044c","\u0441\u0432\u044f\u0437\u044c","\u043f\u0430\u043a\u0435\u0442","\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440"],correct:"\u0441\u0435\u0442\u044c"},{question:"setup",variants:["\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","\u043f\u043e\u0434\u043d\u044f\u0442\u044c","\u0434\u0430\u043d\u043d\u044b\u0435","\u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c","\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c"],correct:"\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c"},{question:"option",variants:["\u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","\u0432\u0430\u0440\u0438\u0430\u043d\u0442","\u0434\u0430\u043d\u043d\u044b\u0435","\u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c","\u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c"],correct:"\u0432\u0430\u0440\u0438\u0430\u043d\u0442"},{question:"get",variants:["\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u043e\u0442\u043a\u0440\u044b\u0442\u044c","\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"],correct:"\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"},{question:"give",variants:["\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c","\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"],correct:"\u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c"},{question:"run",variants:["\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c","\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c","\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"],correct:"\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c"},{question:"download",variants:["\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c","\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c","\u0441\u043a\u0430\u0447\u0430\u0442\u044c","\u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c","\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"],correct:"\u0441\u043a\u0430\u0447\u0430\u0442\u044c"},{question:"install",variants:["\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c","\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c","\u0441\u043a\u0430\u0447\u0430\u0442\u044c","\u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c","\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"],correct:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"},{question:"check",variants:["\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c","\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c","\u0441\u043a\u0430\u0447\u0430\u0442\u044c","\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c","\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"],correct:"\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c"},{question:"pay",variants:["\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c","\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c","\u0441\u043a\u0430\u0447\u0430\u0442\u044c","\u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c","\u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c"],correct:"\u043e\u043f\u043b\u0430\u0442\u0438\u0442\u044c"},{question:"word",variants:["\u0440\u0430\u0431\u043e\u0442\u0430","\u0441\u043b\u043e\u0432\u043e","\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435","\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430","\u043f\u0440\u0435\u0434\u043c\u0435\u0442"],correct:"\u0441\u043b\u043e\u0432\u043e"},{question:"letter",variants:["\u0431\u0443\u043a\u0432\u0430","\u0441\u043b\u043e\u0432\u043e","\u0441\u043f\u0443\u0441\u0442\u044f","\u043a\u043d\u0438\u0433\u0430","\u043f\u0440\u0435\u0434\u043c\u0435\u0442"],correct:"\u0431\u0443\u043a\u0432\u0430"},{question:"later",variants:["\u0431\u0443\u043a\u0432\u0430","\u0441\u043b\u043e\u0432\u043e","\u0441\u043f\u0443\u0441\u0442\u044f","\u043a\u043d\u0438\u0433\u0430","\u043f\u0440\u0435\u0434\u043c\u0435\u0442"],correct:"\u0441\u043f\u0443\u0441\u0442\u044f"},{question:"character",variants:["\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436","\u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043b\u044c","\u0441\u043f\u0443\u0441\u0442\u044f","\u043a\u043d\u0438\u0433\u0430","\u043f\u0440\u0435\u0434\u043c\u0435\u0442"],correct:"\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436"},{question:"tutorial",variants:["\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436","\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435","\u0441\u043f\u0443\u0441\u0442\u044f","\u043a\u043d\u0438\u0433\u0430","\u043f\u0440\u0435\u0434\u043c\u0435\u0442"],correct:"\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435"},{question:"community",variants:["\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436","\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435","\u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e","\u043a\u043d\u0438\u0433\u0430","\u043f\u0440\u0435\u0434\u043c\u0435\u0442"],correct:"\u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"},{question:"building",variants:["\u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436","\u0432\u0432\u0435\u0434\u0435\u043d\u0438\u0435","\u0441\u043f\u0443\u0441\u0442\u044f","\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e","\u043f\u0440\u0435\u0434\u043c\u0435\u0442"],correct:"\u0441\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"},{question:"take",variants:["\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c","\u0431\u0440\u0430\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u043e\u0442\u043a\u0440\u044b\u0442\u044c","\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"],correct:"\u0431\u0440\u0430\u0442\u044c"},{question:"create",variants:["\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c","\u0431\u0440\u0430\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u0441\u043e\u0437\u0434\u0430\u0442\u044c","\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"],correct:"\u0441\u043e\u0437\u0434\u0430\u0442\u044c"},{question:"application",variants:["\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c","\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c","\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c"],correct:"\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},{question:"image",variants:["\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c","\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c","\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"],correct:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"},{question:"change",variants:["\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435","\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c","\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c","\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"],correct:"\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c"},{question:"exchange",variants:["\u043e\u0431\u043c\u0435\u043d","\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c","\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c","\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"],correct:"\u043e\u0431\u043c\u0435\u043d"},{question:"folder",variants:["\u0444\u0430\u0439\u043b","\u043f\u0430\u043f\u043a\u0430","\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435","\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430","\u043f\u0440\u0435\u0434\u043c\u0435\u0442"],correct:"\u043f\u0430\u043f\u043a\u0430"},{question:"save",variants:["\u043e\u0431\u043c\u0435\u043d","\u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","\u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c","\u0432\u044b\u0440\u0435\u0437\u0430\u0442\u044c","\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"],correct:"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"},{question:"user",variants:["\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c","\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a","\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442","\u0441\u043f\u0435\u0446\u0438\u0438","\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"],correct:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"},{question:"difficult",variants:["\u043b\u0435\u0433\u043a\u0438\u0439","\u0442\u0440\u0443\u0434\u043d\u044b\u0439","\u043f\u0440\u043e\u0441\u0442\u043e\u0439","\u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0439","\u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0439"],correct:"\u0442\u0440\u0443\u0434\u043d\u044b\u0439"},{question:"hard",variants:["\u043b\u0435\u0433\u043a\u0438\u0439","\u0436\u0435\u0441\u0442\u043a\u0438\u0439","\u043f\u0440\u043e\u0441\u0442\u043e\u0439","\u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0439","\u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0439"],correct:"\u0436\u0435\u0441\u0442\u043a\u0438\u0439"},{question:"easy",variants:["\u043b\u0435\u0433\u043a\u0438\u0439","\u0436\u0435\u0441\u0442\u043a\u0438\u0439","\u043f\u0440\u043e\u0441\u0442\u043e\u0439","\u043e\u0442\u043a\u0440\u044b\u0442\u044b\u0439","\u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0439"],correct:"\u043b\u0435\u0433\u043a\u0438\u0439"},{question:"guest",variants:["\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c","\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a","\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442","\u0433\u043e\u0441\u0442\u044c","\u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440"],correct:"\u0433\u043e\u0441\u0442\u044c"},{question:"device",variants:["\u044d\u043a\u0440\u0430\u043d","\u043e\u043a\u043d\u043e","\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e","\u0434\u0438\u0441\u043a","\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c"],correct:"\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e"},{question:"language",variants:["\u044d\u043a\u0440\u0430\u043d","\u043e\u043a\u043d\u043e","\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e","\u044f\u0437\u044b\u043a","\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c"],correct:"\u044f\u0437\u044b\u043a"},{question:"access",variants:["\u044d\u043a\u0440\u0430\u043d","\u0434\u043e\u0441\u0442\u0443\u043f","\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e","\u044f\u0437\u044b\u043a","\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c"],correct:"\u0434\u043e\u0441\u0442\u0443\u043f"},{question:"send",variants:["\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c","\u0434\u043e\u0441\u0442\u0443\u043f","\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e","\u044f\u0437\u044b\u043a","\u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c"],correct:"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"},{question:"if",variants:["\u0435\u0441\u043b\u0438","\u0447\u0442\u043e","\u043a\u0430\u043a","\u0438\u043d\u0430\u0447\u0435","\u0435\u0449\u0435"],correct:"\u0435\u0441\u043b\u0438"},{question:"else",variants:["\u0435\u0441\u043b\u0438","\u0447\u0442\u043e","\u043a\u0430\u043a","\u0438\u043d\u0430\u0447\u0435","\u0435\u0449\u0435"],correct:"\u0438\u043d\u0430\u0447\u0435"},{question:"more",variants:["\u043c\u043e\u0440\u0435","\u0431\u043e\u043b\u044c\u0448\u0435","\u043e\u0437\u0435\u0440\u043e","\u0441\u0440\u0435\u0434\u043d\u0438\u0439","\u043c\u0430\u0441\u043b\u043e"],correct:"\u0431\u043e\u043b\u044c\u0448\u0435"}]},w=function(t){var e=k(),n=Object(r.useState)(q(e.length)),c=Object(j.a)(n,2),s=c[0],a=c[1],i=Object(r.useState)(1),o=Object(j.a)(i,2),l=o[0],b=o[1],v=Object(r.useState)(1),d=Object(j.a)(v,2),x=d[0],m=d[1],f=Object(r.useState)(e.length-1),p=Object(j.a)(f,2),g=p[0],N=p[1],w=Object(r.useState)(t.live),E=Object(j.a)(w,2),C=E[0],S=E[1],T=Object(r.useState)(3),L=Object(j.a)(T,2),I=L[0],F=L[1],M=Object(r.useState)(e[s[l-1]]),D=Object(j.a)(M,2),A=D[0],B=D[1],J=Object(r.useState)(!0),P=Object(j.a)(J,2),H=P[0],R=P[1],X=Object(r.useState)(!1),_=Object(j.a)(X,2),z=_[0],G=_[1],K=Object(r.useState)(""),Q=Object(j.a)(K,2),U=Q[0],V=Q[1],W=function(){R(!0)};return Object(u.jsxs)("div",{children:[H&&Object(u.jsx)(y,{state:A,live:C,finish:g,handleClick:function(){S(C-1),F(I-1)},levelLiveClick:function(){V("\u041e \u0411\u043e\u0436\u0435! \u0412\u044b \u0441\u043e\u0432\u0435\u0440\u0448\u0438\u043b\u0438 \u043a\u0443\u0447\u0443 \u043e\u0448\u0438\u0431\u043e\u043a!"),a(q(e.length)),m(1),G(!0)},liveClick:function(){V("\u0423 \u0432\u0430\u0441 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0443"),a(q(e.length)),m(1),G(!0)},congratulation:function(){V("\u0412\u044b \u041f\u043e\u0431\u0435\u0434\u0438\u0442\u0435\u043b\u044c!"),m(1),a(q(e.length)),G(!0)},nextClick:function(){F(3),b(l+1),N(g-1),B(e[s[x]]),m(x+1),R(!1),W()},levelLive:I}),Object(u.jsx)(h.a,{in:z,timeout:300,classNames:"alert",unmountOnExit:!0,onEnter:function(){return R(!1)},onExited:function(){return R(!0)},children:Object(u.jsx)(O,{info:U,startTest:function(){N(e.length-1),F(3),S(t.live),B(e[s[0]]),b(1),G(!1)},state:A})}),Object(u.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(u.jsxs)("ul",{className:"list-group",children:[Object(u.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["\u0412\u043e\u043f\u0440\u043e\u0441 \u2116 ",l,Object(u.jsx)("span",{className:"badge bg-primary rounded-pill"})]}),Object(u.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["\u0412\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c: ",g,Object(u.jsx)("span",{className:"badge bg-primary rounded-pill"})]}),Object(u.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:["\u041f\u0440\u0430\u0432\u043e \u043d\u0430 \u043e\u0448\u0438\u0431\u043a\u0443: ",C,Object(u.jsx)("span",{className:"badge bg-primary rounded-pill"})]})]})})]})};var E=function(){return Object(u.jsxs)(i.a,{children:[Object(u.jsx)(l,{}),Object(u.jsx)("div",{className:"container pt-4",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:v}),Object(u.jsx)(o.a,{path:"/about",component:b}),Object(u.jsx)(o.a,{path:"/englishIt",component:d}),Object(u.jsx)(o.a,{path:"/startTest",render:function(){return Object(u.jsx)(w,{live:23})}}),Object(u.jsx)(o.a,{path:"/startTest1",render:function(){return Object(u.jsx)(w,{live:15})}}),Object(u.jsx)(o.a,{path:"/startTest2",render:function(){return Object(u.jsx)(w,{live:7})}}),Object(u.jsx)(o.a,{path:"/startTest3",render:function(){return Object(u.jsx)(w,{live:0})}})]})})]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),s(t),a(t)}))},S=n(27),T=n(25),L=n(28),I=n(26),F="DELETE_ITEM",M={test:[{question:"cancel",variants:["\u0441\u043e\u0437\u0434\u0430\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u0437\u0430\u043a\u0440\u044b\u0442\u044c","\u043e\u0442\u0434\u0430\u0442\u044c"],correct:"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"},{question:"with",variants:["\u043d\u0430","\u0432","\u0441","\u0438\u0437","\u0434\u043b\u044f"],correct:"\u0441"},{question:"open",variants:["c\u043e\u0437\u0434\u0430\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u043e\u0442\u043a\u0440\u044b\u0442\u044c","\u043e\u0442\u0434\u0430\u0442\u044c"],correct:"\u043e\u0442\u043a\u0440\u044b\u0442\u044c"},{question:"close",variants:["\u0441\u043e\u0437\u0434\u0430\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u0437\u0430\u043a\u0440\u044b\u0442\u044c","\u043e\u0442\u0434\u0430\u0442\u044c"],correct:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c"},{question:"error",variants:["\u043f\u043e\u0438\u0441\u043a","\u043e\u0448\u0438\u0431\u043a\u0430","\u0443\u0441\u043f\u0435\u0448\u043d\u043e","\u0432\u0437\u044f\u0442\u044c","\u043e\u0442\u0434\u0430\u0442\u044c"],correct:"\u043e\u0448\u0438\u0431\u043a\u0430"},{question:"store",variants:["\u043f\u0440\u0435\u0434\u043c\u0435\u0442","\u0440\u0443\u0447\u043a\u0430","\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435","\u0447\u0438\u0441\u0442\u0438\u043b\u0438\u0449\u0435","\u043a\u043b\u0443\u0431"],correct:"\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"},{question:"item",variants:["\u0432\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044c","\u0430\u043c\u0443\u043b\u0435\u0442","\u043f\u0440\u0435\u0434\u043c\u0435\u0442","\u0441\u043b\u043e\u0432\u043e","\u0431\u0443\u043a\u0432\u0430"],correct:"\u043f\u0440\u0435\u0434\u043c\u0435\u0442"},{question:"action",variants:["\u0430\u043a\u0442\u0438\u0432","\u043f\u0440\u0435\u0434\u043c\u0435\u0442","\u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435","\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435","\u043c\u0430\u0433\u0430\u0437\u0438\u043d"],correct:"\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435"},{question:"type",variants:["\u0442\u0443\u043d\u043d\u0435\u043b\u044c","\u0432\u0438\u0434","\u043f\u0440\u043e\u0445\u043e\u0434","\u0441\u0435\u043a\u0440\u0435\u0442","\u0442\u0438\u043f"],correct:"\u0442\u0438\u043f"},{question:"page",variants:["\u0444\u0430\u0439\u043b","\u043f\u0430\u043f\u043a\u0430","\u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435","\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430","\u043f\u0440\u0435\u0434\u043c\u0435\u0442"],correct:"\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"},{question:"delete",variants:["\u0443\u0434\u0430\u043b\u0438\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u043e\u0442\u043a\u0440\u044b\u0442\u044c","\u043e\u0442\u0434\u0430\u0442\u044c"],correct:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c"},{question:"state",variants:["\u0430\u043a\u0442\u0438\u0432","\u043f\u0440\u0435\u0434\u043c\u0435\u0442","\u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435","\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435","\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435"],correct:"\u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435"},{question:"default",variants:["\u043f\u0430\u0434\u0435\u043d\u0438\u0435","\u043f\u043e\u0434\u044a\u0435\u043c","\u043f\u043e \u0446\u0435\u043d\u0442\u0440\u0443","\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","\u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u0435"],correct:"\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"},{question:"return",variants:["\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c","\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c","\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u0442\u044c","\u043e\u0442\u043a\u0440\u044b\u0442\u044c","\u043e\u0442\u0434\u0430\u0442\u044c"],correct:"\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c"}]},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case F:return Object(I.a)(Object(I.a)({},t),{},{test:Object(L.a)(t.test[e.indeX].variants[e.item]=null)});default:return t}},A=Object(T.a)({englishTestReducers:D}),B=Object(T.b)(A);a.a.render(Object(u.jsx)(S.a,{store:B,children:Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(E,{})})}),document.getElementById("root")),C()}},[[41,1,2]]]);
//# sourceMappingURL=main.7721cd8f.chunk.js.map