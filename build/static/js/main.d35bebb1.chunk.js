(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(56)},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(27),o=n(17),u=n(14),s=n(37),l=n(38),i=n(16),m=n(7),E=n(18),p=n(30),d=(n(57),n(51),function(){return r.a.createElement("nav",null,r.a.createElement("section",null,r.a.createElement(m.b,{to:"/"},"Home"),r.a.createElement(m.b,{to:"/questions"},"Questions")))}),f=function(){return r.a.createElement("nav",null,r.a.createElement("section",null,r.a.createElement(m.b,{to:"/",className:"BarraSuperior"},"Home"),r.a.createElement(m.b,{to:"/questions",className:"BarraSuperior"},"Questions"),r.a.createElement(m.b,{to:"/new",className:"BarraSuperior"},"New"),r.a.createElement(m.b,{to:"/list",className:"BarraSuperior"},"List")))},b=function(e){var t=e.children;return r.a.createElement("section",null,r.a.createElement("h1",null,"Home"),r.a.createElement("div",null,t),r.a.createElement("p",null,"welcome to the question and answer app."),r.a.createElement(m.b,{to:"/questions",className:"button"},"View Questions"))},h=n(4),O=n.n(h),g=n(8),v="https://despliegueback.herokuapp.com",q="LOADING",w="LOADED_SUCCESS",N="LOADED_FAILURE",j=function(){return{type:q}},S=function(e){return{type:w,payload:e}},I=function(){return{type:N}};function x(e){return function(){var t=Object(g.a)(O.a.mark(function t(n){var a,r;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(j()),t.prev=1,t.next=4,fetch("".concat(v,"/getAllOwner/").concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,n(S({questions:r,redirect:null})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n(I());case 14:case"end":return t.stop()}},t,null,[[1,11]])}));return function(e){return t.apply(this,arguments)}}()}function y(e){return function(){var t=Object(g.a)(O.a.mark(function t(n){var a,r;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(j()),t.prev=1,t.next=4,fetch("".concat(v,"/getQuestion/").concat(e));case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,n(S({question:r,redirect:null})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),n(I());case 14:case"end":return t.stop()}},t,null,[[1,11]])}));return function(e){return t.apply(this,arguments)}}()}var T=function(e){var t=e.question,n=e.excerpt,a=e.onDelete;return r.a.createElement("article",{className:n?"question-excerpt":"question"},r.a.createElement("h2",null,t.question),r.a.createElement("p",null,t.category,"  - ",r.a.createElement("small",null,t.type)),a&&r.a.createElement("button",{className:"button right",onClick:function(){return a(t.id)}},"DELETE"),n&&r.a.createElement(m.b,{to:"/question/".concat(t.id),className:"button"},"View Question"))},L=function(e){var t=e.answer;return r.a.createElement("aside",{className:"answer"},r.a.createElement("p",null,t.answer))},C=Object(u.b)(function(e){return{question:e.question.question,loading:e.question.loading,hasErrors:e.question.hasErrors}})(function(e){var t=e.match,n=e.dispatch,c=e.question,o=e.hasErrors,u=e.loading,s=t.params.id,l=localStorage.getItem("uid");Object(a.useEffect)(function(){n(y(s))},[n,s]);return r.a.createElement("section",null,u.question?r.a.createElement("p",null,"Loading question..."):o.question?r.a.createElement("p",null,"Unable to display question."):r.a.createElement(T,{question:c}),l&&r.a.createElement(m.b,{to:"/answer/"+s,className:"button right"},"Reply"),r.a.createElement("h2",null,"Answers"),c.answers&&c.answers.length?c.answers.map(function(e){return r.a.createElement(L,{key:e.id,answer:e})}):r.a.createElement("p",null,"Empty answer!"))}),k=Object(u.b)(function(e){return{loading:e.question.loading,questions:e.question.questions,hasErrors:e.question.hasErrors}})(function(e){var t=e.dispatch,n=e.loading,c=e.questions,o=e.hasErrors;Object(a.useEffect)(function(){t(function(){var e=Object(g.a)(O.a.mark(function e(t){var n,a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(j()),e.prev=1,e.next=4,fetch("".concat(v,"/GetAllQuestions"));case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,t(S({questions:a,redirect:null})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t(I());case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}())},[t]);return r.a.createElement("section",null,r.a.createElement("h1",null,"Questions"),n?r.a.createElement("p",null,"Loading questions..."):o?r.a.createElement("p",null,"Unable to display questions."):c.map(function(e){return r.a.createElement(T,{key:e.id,question:e,excerpt:!0})}))}),A=n(29),D=Object(u.b)(function(e){return{loading:e.question.loading,redirect:e.question.redirect,hasErrors:e.question.hasErrors}})(function(e){var t=e.dispatch,n=e.loading,c=e.redirect,o=(e.hasErrors,Object(A.a)()),u=o.register,s=o.handleSubmit,l=Object(E.g)();return Object(a.useEffect)(function(){c&&l.push(c)},[c,l]),r.a.createElement("section",null,r.a.createElement("h1",null,"New Question"),r.a.createElement("form",{onSubmit:s(function(e){var n;e.userId=localStorage.getItem("uid"),t((n=e,function(){var e=Object(g.a)(O.a.mark(function e(t){var a,r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(j()),e.prev=1,e.next=4,fetch("".concat(v,"/create"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return a=e.sent,e.next=7,a.text();case 7:r=e.sent,t(S({redirect:"/question/".concat(r)})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t(I());case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}()))})},r.a.createElement("div",null,r.a.createElement("label",{for:"type"},"Type"),r.a.createElement("select",Object.assign({},u("type"),{id:""}),r.a.createElement("option",{value:"OPEN (LONG OPEN BOX)"},"OPEN (LONG OPEN BOX)"),r.a.createElement("option",{value:"OPINION (SHORT OPEN BOX)"},"OPINION (SHORT OPEN BOX)"),r.a.createElement("option",{value:"WITH RESULT (OPEN BOX WITH LINK)"},"WITH RESULT (OPEN BOX WITH LINK)"),r.a.createElement("option",{value:"WITH EVIDENCE (OPEN BOX WITH VIDEO)"},"WITH EVIDENCE (OPEN BOX WITH VIDEO)"))),r.a.createElement("div",null,r.a.createElement("label",{for:"category"},"Category"),r.a.createElement("select",Object.assign({},u("category"),{id:"category"}),r.a.createElement("option",{value:"TECHNOLOGY AND COMPUTER"},"TECHNOLOGY AND COMPUTER"),r.a.createElement("option",{value:"SCIENCES"},"SCIENCES"),r.a.createElement("option",{value:"SOFTWARE DEVELOPMENT"},"SOFTWARE DEVELOPMENT"),r.a.createElement("option",{value:"SOCIAL SCIENCES"},"SOCIAL SCIENCES"),r.a.createElement("option",{value:"LANGUAGE"},"LANGUAGE"))),r.a.createElement("div",null,r.a.createElement("label",{for:"question"},"Question"),r.a.createElement("textarea",Object.assign({id:"question"},u("question",{required:!0,maxLength:300})))),r.a.createElement("button",{type:"submit",className:"button",disabled:n},n?"Saving ....":"Save")))}),P=Object(u.b)(function(e){return{loading:e.question.loading,redirect:e.question.redirect,question:e.question.question,hasErrors:e.question.hasErrors}})(function(e){var t=e.dispatch,n=e.loading,c=e.redirect,o=e.match,u=e.hasErrors,s=e.question,l=Object(A.a)(),i=l.register,m=l.handleSubmit,p=o.params.id,d=Object(E.g)();Object(a.useEffect)(function(){t(y(p))},[t,p]),Object(a.useEffect)(function(){c&&d.push(c)},[c,d]);return r.a.createElement("section",null,n.question?r.a.createElement("p",null,"Loading question..."):u.question?r.a.createElement("p",null,"Unable to display question."):r.a.createElement(T,{question:s}),r.a.createElement("h1",null,"New Answer"),r.a.createElement("form",{onSubmit:m(function(e){var n;e.userId=localStorage.getItem("uid"),e.questionId=p,t((n=e,function(){var e=Object(g.a)(O.a.mark(function e(t){var a;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t(j()),e.prev=1,e.next=4,fetch("".concat(v,"/addAnswer"),{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return a=e.sent,e.next=7,a.json();case 7:e.sent,t(S({redirect:"/question/".concat(n.questionId)})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t(I());case 14:case"end":return e.stop()}},e,null,[[1,11]])}));return function(t){return e.apply(this,arguments)}}()))})},r.a.createElement("div",null,r.a.createElement("label",{for:"answer"},"Answer"),r.a.createElement("textarea",Object.assign({id:"answer"},i("answer",{required:!0,maxLength:300})))),r.a.createElement("button",{type:"submit",className:"button",disabled:n},n?"Saving ....":"Save")))}),H=Object(u.b)(function(e){return{loading:e.question.loading,questions:e.question.questions,hasErrors:e.question.hasErrors,redirect:e.question.redirect}})(function(e){var t=e.dispatch,n=e.loading,c=e.questions,o=e.hasErrors,u=e.redirect;Object(a.useEffect)(function(){var e=localStorage.getItem("uid");t(x(e))},[t]),Object(a.useEffect)(function(){if(u){var e=localStorage.getItem("uid");t(x(e))}},[u,t]);var s=function(e){t(function(e){return function(){var t=Object(g.a)(O.a.mark(function t(n){return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n(j()),t.prev=1,t.next=4,fetch("".concat(v,"/delete/").concat(e),{method:"DELETE",mode:"cors",headers:{"Content-Type":"application/json"}});case 4:n(S({redirect:"/list"})),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n(I());case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()}(e))};return r.a.createElement("section",null,r.a.createElement("h1",null,"Questions"),n?r.a.createElement("p",null,"Loading questions..."):o?r.a.createElement("p",null,"Unable to display questions."):c.map(function(e){return r.a.createElement(T,{key:e.id,question:e,excerpt:!0,onDelete:s})}))}),B=n(40);p.a.initializeApp({apiKey:"AIzaSyC09aJakDw2u96sXHP1c5lOHDIstF88MBo",authDomain:"despliegue-front.firebaseapp.com",projectId:"despliegue-front",storageBucket:"despliegue-front.appspot.com",messagingSenderId:"1061961427087",appId:"1:1061961427087:web:61be62761092b4b03ea8fa",measurementId:"G-FF5DYFRGF6"});var G=p.a.auth();function U(){return r.a.createElement("button",{className:"button right",onClick:function(){var e=new p.a.auth.GoogleAuthProvider;G.signInWithPopup(e)}},"Sign in with google")}function R(){return G.currentUser&&r.a.createElement("button",{className:"button right",onClick:function(){localStorage.removeItem("uid"),G.signOut()}},"Sign out")}var W=function(){var e=Object(B.a)(G),t=Object(i.a)(e,1)[0];return(null===t||void 0===t?void 0:t.uid)&&localStorage.setItem("uid",null===t||void 0===t?void 0:t.uid),r.a.createElement(m.a,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/",component:function(){return r.a.createElement(b,null,r.a.createElement(R,null))}}),r.a.createElement(E.b,{exact:!0,path:"/questions",component:k}),r.a.createElement(E.b,{exact:!0,path:"/question/:id",component:C}),r.a.createElement(E.b,{exact:!0,path:"/list",component:H}),r.a.createElement(E.b,{exact:!0,path:"/answer/:id",component:P}),r.a.createElement(E.b,{exact:!0,path:"/new",component:D}),r.a.createElement(E.a,{to:"/"}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(E.d,null,r.a.createElement(E.b,{exact:!0,path:"/",component:function(){return r.a.createElement(b,null,r.a.createElement(U,null))}}),r.a.createElement(E.b,{exact:!0,path:"/questions",component:k}),r.a.createElement(E.b,{exact:!0,path:"/question/:id",component:C}),r.a.createElement(E.b,{exact:!0,path:"/answer/:id",component:P}),r.a.createElement(E.a,{to:"/"}))))},F=n(19),Q={loading:!0,hasErrors:!1,questions:[],question:{},redirect:null};var X=Object(o.combineReducers)({question:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(F.a)(Object(F.a)({},e),{},{loading:!0});case w:return Object(F.a)(Object(F.a)(Object(F.a)({},e),t.payload),{},{loading:!1,hasErrors:!1});case N:return Object(F.a)(Object(F.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}}}),V=(n(55),Object(o.createStore)(X,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(s.a))));Object(c.render)(r.a.createElement(u.a,{store:V},r.a.createElement(W,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d35bebb1.chunk.js.map