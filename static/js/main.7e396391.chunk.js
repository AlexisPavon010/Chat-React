(this["webpackJsonpchat-firebase"]=this["webpackJsonpchat-firebase"]||[]).push([[0],{29:function(e,t,a){},38:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),n=a(31),r=a.n(n),o=(a(38),a(27),a(13)),l=(a(28),a(29),a(21)),i=a(18),j=a.n(i),b=a(22),d=a(16),m=a(32),u=(a(40),a(51),m.a.initializeApp({apiKey:"AIzaSyBFAEi_4qhpOpYVFecXZfmCqCn_KFIWm2c",authDomain:"react-chat-20a3b.firebaseapp.com",projectId:"react-chat-20a3b",storageBucket:"react-chat-20a3b.appspot.com",messagingSenderId:"925180698349",appId:"1:925180698349:web:6db264655a223940ca36e4"})),h=u.auth(),O=u.firestore(),p=function(e){var t=Object(c.useState)(),a=Object(o.a)(t,2),s=a[0],n=a[1],r=Object(c.useState)({message:""}),i=Object(o.a)(r,2),m=i[0],u=i[1],p=function(){var e=Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.collection("messages").doc().set(m);case 2:console.log("messages saved"),u({message:""});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=Object(c.useState)(),g=Object(o.a)(x,2),f=g[0],v=g[1];return{sendMessage:p,handleOnChanges:function(e){var t=e.target.value;u(Object(d.a)(Object(d.a)({},m),{},{message:t})),console.log(m)},handleChange:function(e){var t=e.target,a=t.name,c=t.value;n(Object(d.a)(Object(d.a)({},s),{},Object(l.a)({},a,c))),console.log(s)},handleSubmit:function(e){e.preventDefault();var t=s.correo,a=s.contrase\u00f1a;s.nombre;h.createUserWithEmailAndPassword(t,a).then((function(e){return console.log("Usuario registrdo")})).catch((function(e){return alert(e.message)}))},LoginChange:function(e){e.preventDefault();var t=e.target,a=t.name,c=t.value;v(Object(d.a)(Object(d.a)({},f),{},Object(l.a)({},a,c)))},LoginSubmit:function(e){e.preventDefault();var t=f.correo,a=f.contrase\u00f1a;h.signInWithEmailAndPassword(t,a).then((function(e){return n({correo:t,"contrase\xf1a":a})})).catch((function(e){return alert(e.message)}))},logOut:function(e){e.preventDefault(),h.signOut().then((function(){console.log("user logOut")})),window.location.reload()},messages:m,user:s}},x=a(17),g=a(1);function f(){var e=p(),t=e.LoginChange,a=e.LoginSubmit;return Object(g.jsx)("div",{className:"container mt-5",style:{width:"360px"},children:Object(g.jsx)("div",{className:"card text-white bg-primary ",children:Object(g.jsxs)("form",{className:"card-body",onSubmit:a,children:[Object(g.jsx)("h4",{className:"card-title",children:"Logearse"}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{className:"col-form-label",children:"Correo"}),Object(g.jsx)("input",{onChange:t,name:"correo",type:"email",className:"form-control",placeholder:"correo"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{className:"col-form-label",children:"Contrase\xf1a"}),Object(g.jsx)("input",{onChange:t,name:"contrase\xf1a",type:"password",className:"form-control",placeholder:"contrase\xf1a"})]}),Object(g.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(g.jsx)("button",{className:"btn btn-primary btn-success",children:"Iniciar sesion"}),Object(g.jsx)(x.b,{to:"/Register",className:"d-flex align-items-center",children:"Registrarse"})]})]})})})}a(48),a(49);function v(){var e=p(),t=e.handleOnChanges,a=e.sendMessage,s=e.logOut,n=e.messages,r=Object(c.useState)(),l=Object(o.a)(r,2),i=l[0],d=l[1];return Object(c.useEffect)(Object(b.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O.collection("messages").onSnapshot((function(e){var t=e.docs.map((function(e){return e.data()}));d(t),console.log(i)}));case 1:case"end":return e.stop()}}),e)}))),[]),Object(g.jsx)("div",{className:"container",style:{width:"360px"},children:Object(g.jsxs)("div",{className:"card text-white bg-dark mt-4",children:[Object(g.jsxs)("div",{className:"card-header d-flex",children:[Object(g.jsx)("h4",{className:"mr-5",children:"GarkSapp"}),Object(g.jsx)("button",{onClick:s,type:"button",className:"btn btn-secondary ml-5",children:"Salir"})]}),Object(g.jsx)("div",{className:"card-body",children:i?i.map((function(e){return Object(g.jsx)("div",{className:"list-group mb-2",children:Object(g.jsx)("li",{className:"list-group-item",children:e.message})})})):null}),Object(g.jsxs)("div",{className:"card-footer text-muted d-flex",children:[Object(g.jsx)("input",{onChange:t,value:n.message,className:"card-footer form-control text-muted"}),Object(g.jsx)("button",{onClick:a,className:"btn btn-info ml-2",children:Object(g.jsx)("i",{className:"material-icons",children:"send"})})]})]})})}function N(){var e=p(),t=e.handleChange,a=e.handleSubmit;return Object(g.jsx)("div",{className:"container mt-5",style:{width:"360px"},children:Object(g.jsx)("div",{className:"card text-white bg-primary ",children:Object(g.jsxs)("form",{className:"card-body",onSubmit:a,children:[Object(g.jsx)("h4",{className:"card-title",children:"Registrarse"}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{className:"col-form-label",children:"Usuario"}),Object(g.jsx)("input",{onChange:t,name:"nombre",type:"text",className:"form-control",placeholder:"Nombre de Usuario"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{className:"col-form-label",children:"Correo"}),Object(g.jsx)("input",{onChange:t,name:"correo",type:"text",className:"form-control",placeholder:"correo"})]}),Object(g.jsxs)("div",{className:"form-group",children:[Object(g.jsx)("label",{className:"col-form-label",children:"Contrase\xf1a"}),Object(g.jsx)("input",{onChange:t,name:"contrase\xf1a",type:"password",className:"form-control",placeholder:"contrase\xf1a"})]}),Object(g.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(g.jsx)("button",{className:"btn btn-primary btn-success",children:"Registrarse"}),Object(g.jsx)(x.b,{to:"/Login",children:"Iniciar sesion"})]})]})})})}var y=a(5);var w=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1];return h.onAuthStateChanged((function(e){e?(s(!0),console.log("logIn")):console.log("no Existe")})),Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{children:"adasd"}),a?Object(g.jsx)(v,{}):Object(g.jsxs)(x.a,{children:[Object(g.jsx)(y.a,{exact:!0,path:"/",children:Object(g.jsx)(f,{})}),Object(g.jsx)(y.a,{path:"/Register",children:Object(g.jsx)(N,{})}),Object(g.jsx)(y.a,{path:"/Login",children:Object(g.jsx)(f,{})})]})]})};r.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.7e396391.chunk.js.map