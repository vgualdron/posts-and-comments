(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(t,e,r){"use strict";r.r(e);r(38),r(22),r(37),r(53),r(30),r(54);var o=r(21);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={appName:"Posts and Comments",appBaseDir:"/posts-and-comments",rootUrl:"../../../",baseUrl:"../../../"},d=(c(c({},l),{},{rootUrl:"http://localhost:3000/",baseUrl:"http://localhost:3000/posts-and-comments/"}),l),m={name:"Header",props:{},data:function(){return{appName:d.appName}},created:function(){},methods:{}},f=r(5),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{staticClass:"navbar"},[r("h1",[t._v(t._s(t.appName))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(103).default})},104:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(20),{name:"Nav",props:{},computed:{user:function(){return JSON.parse(this.$store.getters.user)}},data:function(){return{}},created:function(){},methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("logout").then((function(e){t.$toast.success("Sesión cerrada con éxito."),t.$router.push("/login")})).catch((function(e){e.message?t.$toast.error("Error al cerrar sesión. "+e.message):t.$toast.error("Error al cerrar sesión. Intente más tarde por favor.")}));case 2:case"end":return e.stop()}}),e)})))()}}}),c=r(5),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.user?r("nav",{staticClass:"nav-information"},[r("a",{staticClass:"welcome",attrs:{href:"#"}},[t._v("Bienvenido, "+t._s(t.user.email))]),t._v(" "),r("button",{staticClass:"signout btn btn-outline-primary",on:{click:t.logout}},[t._v("Cerrar sesión")])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(104).default})},138:function(t,e,r){"use strict";var o=r(6),n=(r(20),r(15),r(41),r(3)),c=r(58),l=r.n(c);e.a=function(t){var e=t.store,r=t.app,c=l.a.create({baseURL:"../../../",rootURL:"../../../"}),d={"Access-Control-Allow-Origin":"*","Content-Type":"application/json; charset=utf-8"};c.interceptors.request.use((function(t){return t.headers=d,t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use(null,function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(o){var code;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(403!==(code=parseInt(o.response&&o.response.status))||"login"===c.history.current.name){t.next=7;break}e.dispatch("cerrarSesion"),r.router.push("/login"),n.a.toast.error("No se detectaron las credenciales","Inicie sesión"),t.next=12;break;case 7:if(401!==code){t.next=12;break}return t.next=10,e.dispatch("refreshToken");case 10:return o.config.headers.Authorization=e.state.accessToken,t.abrupt("return",c.request(o.config));case 12:return t.abrupt("return",Promise.reject(o));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.a.http=c,n.a.prototype.$http=c}},139:function(t,e,r){"use strict";var o=r(3),n=r(205),c=r.n(n);window.toastr=r(276),o.a.use(c.a)},140:function(t,e,r){"use strict";var o=r(3),n=(r(277),r(52)),c=r.n(n);r(278),r(73),r(74),r(132),r(126),r(63),r(30),r(101),r(181);function l(element){return null==element||"string"==typeof element&&""===element.trim()}e.a=function(){c.a.options={preventDuplicates:!0,progressBar:!0},o.a.toast={},o.a.toast.warning=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",title=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Alerta",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};c.a.warning(t,title,e)},o.a.toast.success=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",title=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Éxito",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};l(t)?console.error("Dev-alert: mensaje de toast vacío."):c.a.success(t,title,e)},o.a.toast.error=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",title=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Error",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};l(t)?console.error("Dev-alert: mensaje de toast vacío."):c.a.error(t,title,e)},o.a.toast.info=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",title=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Información",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};l(t)?console.error("Dev-alert: mensaje de toast vacío."):c.a.info(t,title,e)},o.a.toast.remove=function(){c.a.remove()},o.a.toast.clear=function(){c.a.clear()},o.a.prototype.$toast=o.a.toast}},141:function(t,e,r){"use strict";r.r(e);var o={name:"Footer",props:{},data:function(){return{user:"",password:""}},mounted:function(){},methods:{}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",[t._v(" By VGualdrón 2021 ")])}),[],!1,null,null,null);e.default=component.exports},142:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(20),r(42)),c={name:"Register",props:{},data:function(){return{user:"",password:""}},mounted:function(){},methods:{submit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),r.next=3,n.a.createUser(e.user,e.password);case 3:if(!(o=r.sent).user){r.next=12;break}return e.$toast.success("Cuenta creada con éxito."),r.next=8,n.a.login(e.user,e.password);case 8:(c=r.sent).user?(e.$toast.success("Sesión iniciada con éxito."),e.$router.push({path:"/"})):c.message?e.$toast.error("Error al crear la cuenta. "+c.message):e.$toast.error("Error al iniciar sesión con la cuenta creada. Intente más tarde por favor."),r.next=13;break;case 12:o.message?e.$toast.error("Error al crear la cuenta. "+o.message):e.$toast.error("Error al crear la cuenta. Intente más tarde por favor.");case 13:case"end":return r.stop()}}),r)})))()},goLogin:function(t){t.preventDefault(),this.$router.push({path:"/login"})}}},l=r(5),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:t.submit}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],attrs:{type:"email"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("button",{attrs:{type:"submit"}},[t._v("Crear cuenta")]),t._v(" "),r("button",{on:{click:t.goLogin}},[t._v("Ir a iniciar sesión")])])}),[],!1,null,null,null);e.default=component.exports},143:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(20),{name:"Login",props:{},data:function(){return{email:"",password:""}},mounted:function(){},methods:{submit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),o=e.email,n=e.password,c={email:o,password:n},r.next=6,e.$store.dispatch("login",c).then((function(t){e.$toast.success("Sesión iniciada con éxito."),e.$router.push("/")})).catch((function(t){t.message?e.$toast.error("Error al iniciar sesión. "+t.message):e.$toast.error("Error al iniciar sesión. Intente más tarde por favor.")}));case 6:case"end":return r.stop()}}),r)})))()},goRegister:function(t){t.preventDefault(),this.$router.push({path:"/register"})}}}),c=r(5),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:t.submit}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("button",{attrs:{type:"submit"}},[t._v("Iniciar sesión")]),t._v(" "),r("button",{on:{click:t.goRegister}},[t._v("Ir a crear cuenta")])])}),[],!1,null,null,null);e.default=component.exports},144:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(20),r(132),r(22),r(36),r(42)),c={name:"AddPosts",props:{},data:function(){return{description:""}},mounted:function(){},methods:{submit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),e.description.trim().length<=0&&e.$toast.error("Debes escribir un estado para poder realizar la publicación."),r.t0=e.description,r.t1=(new Date).getTime(),r.next=6,n.a.getUserOnSesion();case 6:return r.t2=r.sent,o={description:r.t0,date:r.t1,user:r.t2,comments:"",likes:""},r.next=10,n.a.addPost(o);case 10:e.description="",e.$emit("successfulPost"),e.$toast.success("Publicación realizada con éxito.");case 13:case"end":return r.stop()}}),r)})))()}}},l=r(5),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:t.submit}},[r("fieldset",{staticClass:"without-border-bottom without-border-radius-bottom white"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control border-none",attrs:{placeholder:"Escribe aquí tu estado"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),t.description.trim().length>0?r("fieldset",{staticClass:"without-border-top without-border-radius-top white"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Publicar")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},145:function(t,e,r){"use strict";r.r(e);var o={name:"GridPosts",components:{Post:r(79).default},props:{posts:{type:Array,require:!0}},data:function(){return{}},mounted:function(){},methods:{}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.posts&&t.posts.length>0?r("div",t._l(t.posts,(function(t,e){return r("Post",{key:e,attrs:{post:t}})})),1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Post:r(79).default})},185:function(t,e,r){var content=r(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("56b15182",content,!0,{sourceMap:!1})},197:function(t,e,r){"use strict";r.r(e);var o=r(49),n=r(48),c={name:"InformationPost",components:{InformationPostReactions:o.default,InformationPostComments:n.default},props:{},data:function(){return{}},mounted:function(){},methods:{}},l=r(5),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"informations-post"},[r("tr",[r("td",{staticClass:"data-one"},[r("InformationPostReactions")],1),t._v(" "),r("td",{staticClass:"data-two"},[r("InformationPostComments")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{InformationPostReactions:r(49).default,InformationPostComments:r(48).default})},198:function(t,e,r){"use strict";r.r(e);var o={name:"ActionsPost",components:{ActionPostComment:r(81).default},props:{},data:function(){return{user:"",password:""}},mounted:function(){},methods:{}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"actions-post"},[r("tr",[r("td",{staticClass:"action-one"},[t._v("\n      Reaccionar\n    ")]),t._v(" "),r("td",{staticClass:"action-two"},[r("ActionPostComment")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ActionPostComment:r(81).default})},199:function(t,e,r){"use strict";r.r(e);var o={name:"ActionPostReact",props:{},data:function(){return{user:"",password:""}},mounted:function(){},methods:{}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("action post react")])}),[],!1,null,null,null);e.default=component.exports},207:function(t,e,r){"use strict";r(248);var o=r(5),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},208:function(t,e,r){r(209),t.exports=r(210)},246:function(t,e,r){var content=r(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(77).default)("cfae097e",content,!0,{sourceMap:!1})},247:function(t,e,r){var o=r(76)(!1);o.push([t.i,'.navbar{background-color:#fff;border-bottom:1px solid #dee2e6;height:60px;position:sticky;top:0;z-index:1071;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.navbar>h1{line-height:60px}nav.nav-information{margin:6px 2px 57px 0;padding:12px 0}nav.nav-information>a.welcome{float:left;text-decoration:none;cursor:default;color:#6c757d;font-weight:700}nav.nav-information>.btn.signout{float:right;text-decoration:none;cursor:pointer;color:#20c997;font-weight:700;margin-top:5px}.container{padding:50px 251px}fieldset{border:1px solid #dee2e6;padding:0}fieldset.without-border-top{border-top:none}fieldset.without-border-radius-top{border-radius:0 0 5px 5px}fieldset.without-border-radius-bottom{border-radius:5px 5px 0 0}fieldset.border-radius{border-radius:5px}fieldset.white{background-color:#fff}fieldset>.btn{float:right;margin:5px}@media (min-width:576px) and (max-width:991.98px) and (orientation:portrait){.container{padding:25px}}@media (min-width:991.98px) and (max-width:1199.98px) and (orientation:landscape){.container{padding:25px}}@media (max-width:575.98px) and (orientation:portrait){.container{padding:25px}}@media (min-width:576px) and (max-width:991.98px) and (orientation:landscape){.container{padding:25px}}.form-control{background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.25rem;color:#e9ecef;display:block;font-size:1rem;font-weight:400;height:calc(1.5em + .75rem + 2px);line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}textarea.form-control{color:#20c997;height:70px;overflow:auto;padding:10px;resize:none;outline:none}textarea.form-control:hover{color:#20c997;border:1px solid #20c997}textarea.form-control:focus{border:1px solid #20c997}textarea.border-none{border:none}textarea::-webkit-scrollbar{width:1em}textarea::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}textarea::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:1px solid #708090}textarea::-moz-placeholder{color:#20c997}textarea:-ms-input-placeholder{color:#20c997}textarea::placeholder{color:#20c997}textarea.form-control.secondary{height:50px;color:#6c757d;font-size:14px}textarea.secondary::-moz-placeholder{color:#6c757d;font-size:14px}textarea.secondary:-ms-input-placeholder{color:#6c757d;font-size:14px}textarea.secondary::placeholder{color:#6c757d;font-size:14px}.btn{display:inline-block;font-weight:400;color:#000;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.315rem .6rem;font-size:1rem;line-height:1.5;border-radius:.25rem;outline:none;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.btn:hover{cursor:pointer}.btn-primary{color:#fff;background-color:#20c997;border-color:#20c997}.btn-outline-primary{color:#20c997;background-color:#fff;border-color:#20c997}article.post{background-color:#fff;border:1px solid #dee2e6;border-radius:5px;margin-top:20px;text-align:justify}article.post>table{padding:5px 10px 5px 5px}article.post>table.information-post{padding:5px;border-bottom:1px solid #dee2e6;width:100%}table.information-post>tr>td.data-one{width:50%;text-align:left}table.information-post>tr>td.data-two{width:50%;text-align:right}article.post>table.actions{padding:5px;border-top:1px solid #dee2e6;border-bottom:1px solid #dee2e6;width:100%}table.actions-post{width:100%}table.actions-post>tr>td.action-one,table.actions-post>tr>td.action-two{text-align:left;display:inline-block}table.actions-post>tr>td.action-two{border-left:none;width:85%}td.td-image{width:60px;display:table-cell;text-align:center;vertical-align:top}.post>.container{border-bottom:1px solid #dee2e6;width:100%}.post-user-name{color:#20c997;font-size:18px}.post-date{color:#adb5bd;font-size:12px}.post-description{margin-top:15px}.label-count-comments{color:#adb5bd;font-size:14px}img.profile-xs{width:30px;border-radius:50px}img.profile-sm{width:40px;border-radius:50px}img.profile-md{width:50px;border-radius:50px}img.profile-lg{width:60px;border-radius:50px}img.profile-xl{width:70px;border-radius:50px}@media (max-width:991.98px){table.actions-post>tr>td.action-two,table.actions-post>tr>td.ation-one{width:50%!important;text-align:center!important}table.actions-post>tr>td.action-two{border-left:1px solid #adb5bd}}.comment{margin-top:10px;width:100%}article.grid-comments{background:#f8f9fa;padding-left:15px}form.add-comment{background:#f8f9fa;padding:10px 10px 10px 30px}.comment-user-name{color:#20c997;font-size:14px}.comment-date{color:#adb5bd;font-size:11px}.comment-description{margin-top:0;font-size:14px}html{box-sizing:border-box;-ms-overflow-style:scrollbar}body{margin:0 auto;min-height:100vh;justify-content:center;align-items:center;text-align:center;background-color:#f8f9fa;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}*,:after,:before{box-sizing:inherit}',""]),t.exports=o},248:function(t,e,r){"use strict";r(185)},249:function(t,e,r){var o=r(76)(!1);o.push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),t.exports=o},250:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return l})),r.d(e,"getters",(function(){return d}));r(15);var o=r(51),n=function(){return{status:"",user:JSON.parse(localStorage.getItem("user"))||null}},c={auth_request:function(t){t.status="loading"},auth_success:function(t,e){t.status="success",t.user=e},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.user={}}},l={login:function(t,e){var r=t.commit;return new Promise((function(t,n){return r("auth_request"),o.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){var o=JSON.stringify(e.user);localStorage.setItem("user",o),r("auth_success",o),t(e)})).catch((function(t){r("auth_error"),localStorage.removeItem("user"),n(t)}))}))},register:function(t,e){var r=t.commit;return console.log(e),new Promise((function(t,n){return r("auth_request"),o.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(e){var o=JSON.stringify(e.user);localStorage.setItem("user",o),r("auth_success",o),t(o)})).catch((function(t){r("auth_error"),localStorage.removeItem("token"),n(t)}))}))},logout:function(t){var e=t.commit;return new Promise((function(t,r){return o.a.auth().signOut().then((function(r){localStorage.removeItem("user"),e("logout"),t(!0)})).catch((function(t){r(t)}))}))}},d={user:function(t){return t.user},isLoggedIn:function(t){return!!t.user},authStatus:function(t){return t.status}}},256:function(t,e,r){t.exports=r.p+"img/profile-background-gray.ac65949.png"},42:function(t,e,r){"use strict";r(38),r(22),r(37),r(53),r(30),r(54);var o=r(6),n=r(21),c=(r(20),r(51));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},{apiKey:"AIzaSyAqsLlT6-5j9ZIP_fVpbIiCMWfnt4b8DQM",authDomain:"post-and-comments-ff9bb.firebaseapp.com",projectId:"post-and-comments-ff9bb",storageBucket:"post-and-comments-ff9bb.appspot.com",messagingSenderId:"40781687045",appId:"1:40781687045:web:7884c23fb558f24cb2ef6c",measurementId:"G-TCP4G3TX8M",user:{email:"victor.gualdron.r@gmail.com",password:"1234567890ABCDEFGHIJ"}}),m=(c.a.apps.length?c.a.app():c.a.initializeApp(d)).database(),f=m.ref("posts"),h={getRef:function(){return f},getUserOnSesion:function(){var t=localStorage.getItem("user");return t?JSON.parse(t):null},getUidUserOnSesion:function(){return this.getUserOnSesion()?this.getUserOnSesion().uid:null},addPost:function(object){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.push(object,(function(t){t?alert("Error al intentar agregar el registro.","Aviso"):console.log("Registro agregado correctamente.","Aviso")}));case 2:case"end":return t.stop()}}),t)})))()},addComment:function(object,t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.ref("posts/"+t+"/comments"),e.next=3,r.push(object,(function(t){t?alert("Error al intentar agregar el comentario.","Aviso"):console.log("Comentario agregado correctamente.","Aviso")}));case 3:case"end":return e.stop()}}),e)})))()}};e.a=h},48:function(t,e,r){"use strict";r.r(e);var o={name:"InformationPostComments",props:{comments:{type:Array,require:!0}},data:function(){return{}},created:function(){},updated:function(){},methods:{}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.comments&&t.comments.length>0?r("div",{staticClass:"label-count-comments"},[t._v("\n  "+t._s(t.comments.length)+" "+t._s(t.comments.length>1?" Comentarios":"Comentario")+"\n")]):t._e()}),[],!1,null,null,null);e.default=component.exports},49:function(t,e,r){"use strict";r.r(e);var o={name:"InformationPostReactions",props:{},data:function(){return{user:"",password:""}},mounted:function(){},methods:{}},n=r(5),component=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null);e.default=component.exports},65:function(t,e,r){"use strict";r.r(e);var o={name:"ImageProfile",props:{size:{type:String,require:!0}},data:function(){return{clas:""}},mounted:function(){this.clas="profile-"+this.size},methods:{}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{class:t.clas,attrs:{src:r(256)}})}),[],!1,null,null,null);e.default=component.exports},78:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(20),r(132),r(22),r(36),r(42)),c={name:"AddComment",props:{post:{type:Object,require:!0}},data:function(){return{description:""}},mounted:function(){},methods:{submit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),e.description.trim().length<=0&&e.$toast.error("Debes escribir un comentario para poder realizar la publicación."),r.t0=e.description,r.t1=(new Date).getTime(),r.next=6,n.a.getUserOnSesion();case 6:return r.t2=r.sent,o={description:r.t0,date:r.t1,user:r.t2},r.next=10,n.a.addComment(o,e.post.id);case 10:e.description="",e.$toast.success("Comentario realizado con éxito.");case 12:case"end":return r.stop()}}),r)})))()}}},l=r(5),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"add-comment",on:{submit:t.submit}},[r("fieldset",{staticClass:"without-border-bottom without-border-radius-bottom white"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control border-none secondary",attrs:{placeholder:"Escribe aquí tu comentario"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),t.description.trim().length>0?r("fieldset",{staticClass:"without-border-top without-border-radius-top white"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Comentar")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},79:function(t,e,r){"use strict";r.r(e);var o=r(65),n=r(49),c=r(48),l=r(80),d=r(78),m={name:"Post",components:{InformationPostReactions:n.default,InformationPostComments:c.default,ImageProfile:o.default,GridComments:l.default,AddComment:d.default},props:{post:{type:Object,require:!0}},data:function(){return{sizeImage:"md"}},mounted:function(){},methods:{}},f=r(5),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"post"},[r("table",{staticClass:"container"},[r("tr",[r("td",{staticClass:"td-image"},[r("ImageProfile",{attrs:{size:t.sizeImage}})],1),t._v(" "),r("td",[t.post&&t.post.user?r("h1",{staticClass:"post-user-name"},[t._v("\n          "+t._s(t.post.user.email)+"\n        ")]):t._e(),t._v(" "),r("h4",{staticClass:"post-date"},[t._v("\n          "+t._s(new Date(t.post.date).toLocaleString())+"\n        ")]),t._v(" "),r("p",{staticClass:"post-description"},[t._v("\n          "+t._s(t.post.description)+"\n        ")])])])]),t._v(" "),t.post.comments&&t.post.comments.length>0?r("table",{staticClass:"information-post"},[r("tr",[r("td",{staticClass:"data-one"},[r("InformationPostReactions",{attrs:{likes:t.post.likes}})],1),t._v(" "),r("td",{staticClass:"data-two"},[r("InformationPostComments",{attrs:{comments:t.post.comments}})],1)])]):t._e(),t._v(" "),r("GridComments",{attrs:{comments:t.post.comments}}),t._v(" "),r("AddComment",{attrs:{post:t.post}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageProfile:r(65).default,InformationPostReactions:r(49).default,InformationPostComments:r(48).default,GridComments:r(80).default,AddComment:r(78).default})},80:function(t,e,r){"use strict";r.r(e);var o={name:"GridComments",components:{Comment:r(82).default},props:{comments:{type:Array,require:!0}},data:function(){return{}},mounted:function(){},methods:{}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"grid-comments"},t._l(t.comments,(function(t){return r("Comment",{key:t.id,staticClass:"comment",attrs:{comment:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Comment:r(82).default})},81:function(t,e,r){"use strict";r.r(e);var o={name:"ActionPostComment",props:{},data:function(){return{user:"",password:""}},mounted:function(){},methods:{}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",[t._v("action post comment")])}),[],!1,null,null,null);e.default=component.exports},82:function(t,e,r){"use strict";r.r(e);var o={name:"Comment",components:{},props:{comment:{type:Object,require:!0}},data:function(){return{sizeImage:"xs"}},mounted:function(){},methods:{}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("tr",[r("td",{staticClass:"td-image"},[r("ImageProfile",{attrs:{size:t.sizeImage}})],1),t._v(" "),r("td",[t.comment&&t.comment.user?r("h1",{staticClass:"comment-user-name"},[t._v("\n          "+t._s(t.comment.user.email)+"\n        ")]):t._e(),t._v(" "),r("h4",{staticClass:"comment-date"},[t._v("\n        "+t._s(new Date(t.comment.date).toLocaleString())+"\n      ")]),t._v(" "),r("p",{staticClass:"comment-description"},[t._v("\n        "+t._s(t.comment.description)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageProfile:r(65).default})}},[[208,5,1,6]]]);