(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(t,e,r){"use strict";r.r(e);var o=r(5),n=(r(19),r(40),r(22),r(39),r(53),r(30),r(54),r(21));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={appName:"Posts and Comments",appBaseDir:"/posts-and-comments",rootUrl:"../../../",baseUrl:"../../../"},m=(l(l({},d),{},{rootUrl:"http://localhost:3000/",baseUrl:"http://localhost:3000/posts-and-comments/"}),d),f={name:"Header",components:{ImageProfile:r(44).default},props:{},computed:{user:function(){return this.$store.getters.user}},data:function(){return{appName:m.appName,sizeImage:"md"}},created:function(){},methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("logout").then((function(e){t.$toast.success("Sesión cerrada con éxito."),t.$router.push("/login")})).catch((function(e){e.message?t.$toast.error("Error al cerrar sesión. "+e.message):t.$toast.error("Error al cerrar sesión. Intente más tarde por favor.")}));case 2:case"end":return e.stop()}}),e)})))()}}},h=r(6),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"navbar"},[o("h1",[o("img",{attrs:{src:r(259)}}),t._v(" "),t.user&&t.user.email?o("div",{staticClass:"dropdown"},[o("ImageProfile",{attrs:{size:t.sizeImage}}),t._v(" "),o("div",{staticClass:"dropdown-content"},[o("button",{staticClass:"signout btn btn-outline-primary",on:{click:t.logout}},[t._v("Cerrar sesión")])])],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageProfile:r(44).default,Header:r(105).default})},106:function(t,e,r){"use strict";r.r(e);var o={name:"Nav",props:{},computed:{user:function(){return this.$store.getters.user}},data:function(){return{}},created:function(){},methods:{}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.user&&t.user.email?r("nav",{staticClass:"nav-information"},[r("ul",[r("li",{staticClass:"welcome"},[r("a",{attrs:{href:"#"}},[t._v("Hola, "+t._s(t.user.email))])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(106).default})},140:function(t,e,r){"use strict";var o=r(5),n=(r(19),r(15),r(43),r(3)),c=r(58),l=r.n(c);e.a=function(t){var e=t.store,r=t.app,c=l.a.create({baseURL:"../../../",rootURL:"../../../"}),d={"Access-Control-Allow-Origin":"*","Content-Type":"application/json; charset=utf-8"};c.interceptors.request.use((function(t){return t.headers=d,t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use(null,function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(o){var code;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(403!==(code=parseInt(o.response&&o.response.status))||"login"===c.history.current.name){t.next=7;break}e.dispatch("cerrarSesion"),r.router.push("/login"),n.a.toast.error("No se detectaron las credenciales","Inicie sesión"),t.next=12;break;case 7:if(401!==code){t.next=12;break}return t.next=10,e.dispatch("refreshToken");case 10:return o.config.headers.Authorization=e.state.accessToken,t.abrupt("return",c.request(o.config));case 12:return t.abrupt("return",Promise.reject(o));case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.a.http=c,n.a.prototype.$http=c}},141:function(t,e,r){"use strict";var o=r(3),n=r(205),c=r.n(n);window.toastr=r(278),o.a.use(c.a)},142:function(t,e,r){"use strict";var o=r(3),n=(r(279),r(52)),c=r.n(n),l=(r(280),r(37));e.a=function(){c.a.options={preventDuplicates:!0,progressBar:!0},o.a.toast={},o.a.toast.warning=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",title=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Alerta",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};c.a.warning(t,title,e)},o.a.toast.success=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",title=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Éxito",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(l.a)(t)?console.error("Dev-alert: mensaje de toast vacío."):c.a.success(t,title,e)},o.a.toast.error=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",title=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Error",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(l.a)(t)?console.error("Dev-alert: mensaje de toast vacío."):c.a.error(t,title,e)},o.a.toast.info=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",title=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Información",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(l.a)(t)?console.error("Dev-alert: mensaje de toast vacío."):c.a.info(t,title,e)},o.a.toast.remove=function(){c.a.remove()},o.a.toast.clear=function(){c.a.clear()},o.a.prototype.$toast=o.a.toast}},143:function(t,e,r){"use strict";r.r(e);var o={name:"Footer",props:{},data:function(){return{user:"",password:""}},mounted:function(){},methods:{}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",[t._v(" By VGualdrón 2021 ")])}),[],!1,null,null,null);e.default=component.exports},144:function(t,e,r){"use strict";r.r(e);var o={name:"GridPosts",components:{Post:r(80).default},props:{posts:{type:Array,require:!0}},data:function(){return{}},mounted:function(){},methods:{}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.posts&&t.posts.length>0?r("div",t._l(t.posts,(function(t,e){return r("Post",{key:e,attrs:{post:t}})})),1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Post:r(80).default})},145:function(t,e,r){"use strict";r.r(e);var o=r(5),n=(r(19),r(37)),c={name:"Register",props:{},data:function(){return{email:"",password:"",passwordConfirm:""}},mounted:function(){},methods:{submit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,l,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),!Object(n.a)(e.email)){r.next=4;break}return e.$toast.error("El campo email es obligatorio."),r.abrupt("return",!1);case 4:if(!Object(n.a)(e.password)){r.next=7;break}return e.$toast.error("El campo email es obligatorio."),r.abrupt("return",!1);case 7:if(e.password===e.passwordConfirm){r.next=10;break}return e.$toast.error("Los valores de los campos de contraseña no coinciden."),r.abrupt("return",!1);case 10:return o=e.email,c=e.password,l={email:o,password:c},d=!1,r.next=16,e.$store.dispatch("register",l).then((function(t){d=!0,e.$toast.success("Cuenta creada con éxito.")})).catch((function(t){t.message?e.$toast.error("Error al crear cuenta. "+t.message):e.$toast.error("Error al iniciar sesión. Intente más tarde por favor.")}));case 16:if(!d){r.next=19;break}return r.next=19,e.$store.dispatch("login",l).then((function(t){e.$toast.success("Sesión iniciada con éxito."),e.$router.push("/")})).catch((function(t){t.message?e.$toast.error("Error al iniciar sesión. "+t.message):e.$toast.error("Error al iniciar sesión. Intente más tarde por favor.")}));case 19:case"end":return r.stop()}}),r)})))()},goLogin:function(t){t.preventDefault(),this.$router.push({path:"/login"})}}},l=r(6),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"form-register",on:{submit:t.submit}},[r("fieldset",[r("legend",[t._v("Registrarse")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Escriba el correo"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Escriba la contraseña"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordConfirm,expression:"passwordConfirm"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Vuelve a escribir la contraseña"},domProps:{value:t.passwordConfirm},on:{input:function(e){e.target.composing||(t.passwordConfirm=e.target.value)}}}),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Registrarse")]),t._v(" "),r("button",{staticClass:"btn btn-outline-primary",on:{click:t.goLogin}},[t._v("Ir a iniciar sesión")])])])}),[],!1,null,null,null);e.default=component.exports},146:function(t,e,r){"use strict";r.r(e);var o=r(5),n=(r(19),r(37)),c={name:"Login",props:{},data:function(){return{email:"",password:""}},mounted:function(){},methods:{submit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.preventDefault(),!Object(n.a)(e.email)){r.next=4;break}return e.$toast.error("El campo email es obligatorio."),r.abrupt("return",!1);case 4:if(!Object(n.a)(e.password)){r.next=7;break}return e.$toast.error("El campo email es obligatorio."),r.abrupt("return",!1);case 7:return o=e.email,c=e.password,l={email:o,password:c},r.next=12,e.$store.dispatch("login",l).then((function(t){e.$toast.success("Sesión iniciada con éxito."),e.$router.push("/")})).catch((function(t){t.message?e.$toast.error("Error al iniciar sesión. "+t.message):e.$toast.error("Error al iniciar sesión. Intente más tarde por favor.")}));case 12:case"end":return r.stop()}}),r)})))()},goRegister:function(t){t.preventDefault(),this.$router.push({path:"/register"})}}},l=r(6),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"form-login",on:{submit:t.submit}},[r("fieldset",[r("legend",[t._v("Iniciar Sesión")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Escriba el correo"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Escriba la contraseña"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Iniciar sesión")]),t._v(" "),r("button",{staticClass:"btn btn-outline-primary",on:{click:t.goRegister}},[t._v("Ir a crear cuenta")])])])}),[],!1,null,null,null);e.default=component.exports},147:function(t,e,r){"use strict";r.r(e);var o=r(5),n=(r(19),r(134),r(22),r(38),r(34)),c={name:"AddPosts",props:{},data:function(){return{description:""}},mounted:function(){},methods:{submit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),e.description.trim().length<=0&&e.$toast.error("Debes escribir un estado para poder realizar la publicación."),r.t0=e.description,r.t1=(new Date).getTime(),r.next=6,n.a.getUserOnSesion();case 6:return r.t2=r.sent,r.t3={0:0},r.t4={0:0},o={description:r.t0,date:r.t1,user:r.t2,comments:r.t3,reactions:r.t4},r.next=12,n.a.addPost(o);case 12:e.description="",e.$emit("successfulPost"),e.$toast.success("Publicación realizada con éxito.");case 15:case"end":return r.stop()}}),r)})))()}}},l=r(6),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:t.submit}},[r("fieldset",{staticClass:"without-border-bottom without-border-radius-bottom white"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control border-none",attrs:{placeholder:"Escribe aquí tu estado"},domProps:{value:t.description},on:{input:[function(e){e.target.composing||(t.description=e.target.value)},function(t){t.target.composing=!1}]}})]),t._v(" "),t.description.trim().length>0?r("fieldset",{staticClass:"without-border-top without-border-radius-top white"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n      Publicar\n    ")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},187:function(t,e,r){var content=r(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("56b15182",content,!0,{sourceMap:!1})},207:function(t,e,r){"use strict";r(249);var o=r(6),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},208:function(t,e,r){r(209),t.exports=r(210)},226:function(t,e,r){"use strict";function o(t){var e=t.store,r=t.redirect;if("/"===t.route.path&&!e.getters.loggedIn)return r("/login")}r.r(e),r.d(e,"default",(function(){return o}))},247:function(t,e,r){var content=r(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("cfae097e",content,!0,{sourceMap:!1})},248:function(t,e,r){var o=r(75)(!1);o.push([t.i,'.navbar{background-color:#fff;border-bottom:1px solid #dee2e6;height:60px;position:sticky;top:0;z-index:1071;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.navbar>h1{line-height:60px}.navbar>h1>img{height:58px}nav.nav-information{margin:6px 2px 10px 0;padding:12px 0}nav.nav-information>ul>li.welcome>a{font-size:16px;color:#6c757d;text-decoration:none;font-weight:700;cursor:default}nav.nav-information>ul{display:flow-root;list-style-type:none;padding-left:4px;padding-top:5px}nav.nav-information>ul>li.welcome{float:left}.dropdown,nav.nav-information>ul>li.signout{float:right}.dropdown{position:relative;display:inline-block;margin-right:10px;margin-top:5px}.dropdown-content{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);padding:12px 16px;z-index:1}.dropdown:hover .dropdown-content{display:block;right:5px;top:55px}.container{padding:50px 251px}fieldset{border:1px solid #dee2e6;padding:0}fieldset.without-border-top{border-top:none}fieldset.without-border-radius-top{border-radius:0 0 5px 5px}fieldset.without-border-radius-bottom{border-radius:5px 5px 0 0}fieldset.border-radius{border-radius:5px}fieldset.white{background-color:#fff}fieldset>.btn{float:right;margin:5px}@media (min-width:576px) and (max-width:991.98px) and (orientation:portrait){.container{padding:0 25px 25px}}@media (min-width:991.98px) and (max-width:1199.98px) and (orientation:landscape){.container{padding:0 25px 25px}}@media (max-width:575.98px) and (orientation:portrait){.container{padding:0 25px 25px}}@media (min-width:576px) and (max-width:991.98px) and (orientation:landscape){.container{padding:0 25px 25px}}.form-control{background-color:#fff;background-clip:padding-box;border:1px solid #dee2e6;border-radius:.25rem;color:#e9ecef;display:block;font-size:1rem;font-weight:400;height:calc(1.5em + .75rem + 2px);line-height:1.5;padding:.375rem .75rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;width:100%;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.form-login,.form-register{max-width:500px;padding:25px;display:inline-block}.form-login>fieldset,.form-register>fieldset{padding:15px;border-radius:5px;font-size:18px;font-weight:700;color:#20c997}textarea.form-control{color:#20c997;height:70px;overflow:auto;padding:10px;resize:none;outline:none}textarea.form-control:hover{color:#20c997;border:1px solid #20c997}textarea.form-control:focus{border:1px solid #20c997}textarea.border-none{border:none}textarea::-webkit-scrollbar{width:1em}textarea::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3)}textarea::-webkit-scrollbar-thumb{background-color:#a9a9a9;outline:1px solid #708090}textarea::-moz-placeholder{color:#20c997}textarea:-ms-input-placeholder{color:#20c997}textarea::placeholder{color:#20c997}textarea.form-control.secondary{height:50px;color:#6c757d;font-size:14px}textarea.secondary::-moz-placeholder{color:#6c757d;font-size:14px}textarea.secondary:-ms-input-placeholder{color:#6c757d;font-size:14px}textarea.secondary::placeholder{color:#6c757d;font-size:14px}input.form-control.size-lg{height:70px}input.form-control.secondary{height:50px}input.form-control{color:#6c757d;height:36px;overflow:auto;padding:10px;resize:none;outline:none;margin-top:15px}input.form-control:focus,input.form-control:hover{border:1px solid #20c997}input::-moz-placeholder{color:#adb5bd}input:-ms-input-placeholder{color:#adb5bd}input::placeholder{color:#adb5bd}.form-login>fieldset>button,.form-register>fieldset>button{width:100%}.form-login>fieldset>button.btn-primary,.form-register>fieldset>button.btn-primary{margin:25px 0 0}.form-login>fieldset>button.btn-outline-primary,.form-register>fieldset>button.btn-outline-primary{margin:10px 0 0}.btn{display:inline-block;font-weight:400;color:#000;text-align:center;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.315rem .6rem;font-size:1rem;line-height:1.5;border-radius:.25rem;outline:none;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}.btn:hover{cursor:pointer}.btn-primary{color:#fff;background-color:#20c997;border-color:#20c997}.btn-outline-primary{color:#20c997;background-color:#fff;border-color:#20c997}article.post{background-color:#fff;border:1px solid #dee2e6;border-radius:5px;margin-top:20px;text-align:justify}article.post>table{padding:5px 10px 5px 5px}article.post>table.information-post{padding:8px 5px;width:100%}table.information-post>tr>td.data-one{width:50%;text-align:left}table.information-post>tr>td.data-two{width:50%;text-align:right}article.post>table.actions{padding:5px;border-bottom:1px solid #dee2e6;width:100%;display:none}table.actions-post{width:100%}table.actions-post>tr>td.action-one,table.actions-post>tr>td.action-two{text-align:left;display:inline-block}table.actions-post>tr>td.action-two{border-left:none;width:85%}td.td-image{width:60px;display:table-cell;text-align:center;vertical-align:top}.post>.container{border-bottom:1px solid #dee2e6;width:100%}.post-user-name{color:#20c997;font-size:18px}.post-date{color:#adb5bd;font-size:12px}.post-description{margin-top:15px}.label-count-comments{color:#adb5bd;font-size:14px}.label-count-reactions{color:#fd7e14;font-size:14px}.label-count-reactions>img{width:18px;vertical-align:bottom}img.profile-xs{width:30px;border-radius:50px}img.profile-sm{width:40px;border-radius:50px}img.profile-md{width:50px;border-radius:50px}img.profile-lg{width:60px;border-radius:50px}img.profile-xl{width:70px;border-radius:50px}.actions,.actions.in-description{border-bottom:none}.actions.apart{border-bottom:1px solid #dee2e6}.actions-posts.actions-in-description{display:inline-block;padding:15px 33px 10px 0}.actions-posts.actions-apart{display:none}.actions>.actions-posts>span{color:#20c997;font-size:15px;padding:0;display:block;height:39px;line-height:39px}.actions>.actions-posts>span>img{width:18px;vertical-align:text-bottom}.actions>article.actions-posts:hover{cursor:pointer;font-weight:700}span.already-reacted{color:#fd7e14!important}@media (max-width:991.98px){.actions-posts.actions-in-description{display:none}.actions.apart>article.second{border-left:1px solid #dee2e6}.actions-posts.actions-apart{display:inline-block;width:48.5%;text-align:center}article.post>table.information-post{border-bottom:1px solid #dee2e6}}.comment{padding-top:10px;width:100%;padding-right:6px}article.grid-comments{background:#f8f9fa;padding-left:0}form.add-comment{background:#f8f9fa;padding:10px 10px 10px 20px}.comment-user-name{color:#20c997;font-size:14px}.comment-date{color:#adb5bd;font-size:11px}.comment-description{margin-top:0;font-size:14px}html{box-sizing:border-box;-ms-overflow-style:scrollbar}body{margin:0 auto;min-height:100vh;justify-content:center;align-items:center;text-align:center;background-color:#f8f9fa;font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}*,:after,:before{box-sizing:inherit}',""]),t.exports=o},249:function(t,e,r){"use strict";r(187)},250:function(t,e,r){var o=r(75)(!1);o.push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),t.exports=o},251:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return c})),r.d(e,"actions",(function(){return l})),r.d(e,"getters",(function(){return d}));r(15);var o=r(51),n=function(){return{status:"",user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):{},loggedIn:!!localStorage.getItem("user")}},c={auth_request:function(t){t.status="loading"},auth_success:function(t,e){t.status="success",t.user="string"==typeof e?JSON.parse(e):e,t.loggedIn=!0},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.user={},t.loggedIn=!1}},l={login:function(t,e){var r=t.commit;return new Promise((function(t,n){return r("auth_request"),o.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(e){var o=JSON.stringify(e.user);localStorage.setItem("user",o),r("auth_success",o),t(e)})).catch((function(t){r("auth_error"),localStorage.removeItem("user"),n(t)}))}))},register:function(t,e){var r=t.commit;return new Promise((function(t,n){return r("auth_request"),o.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(e){var o=JSON.stringify(e.user);localStorage.setItem("user",o),r("auth_success",o),t(o)})).catch((function(t){r("auth_error"),localStorage.removeItem("token"),n(t)}))}))},logout:function(t){var e=t.commit;return new Promise((function(t,r){return o.a.auth().signOut().then((function(r){localStorage.removeItem("user"),e("logout"),t(!0)})).catch((function(t){r(t)}))}))}},d={loggedIn:function(t){return t.loggedIn},user:function(t){return t.user},authStatus:function(t){return t.status}}},257:function(t,e,r){t.exports=r.p+"img/profile-background-gray.ac65949.png"},258:function(t,e,r){t.exports=r.p+"img/star.c2c8d1c.png"},259:function(t,e,r){t.exports=r.p+"img/logo-header.f099233.png"},34:function(t,e,r){"use strict";r(40),r(22),r(39),r(53),r(30),r(54);var o=r(5),n=r(21),c=(r(19),r(51));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},{apiKey:"AIzaSyAqsLlT6-5j9ZIP_fVpbIiCMWfnt4b8DQM",authDomain:"post-and-comments-ff9bb.firebaseapp.com",projectId:"post-and-comments-ff9bb",storageBucket:"post-and-comments-ff9bb.appspot.com",messagingSenderId:"40781687045",appId:"1:40781687045:web:7884c23fb558f24cb2ef6c",measurementId:"G-TCP4G3TX8M",user:{email:"victor.gualdron.r@gmail.com",password:"1234567890ABCDEFGHIJ"}}),m=(c.a.apps.length?c.a.app():c.a.initializeApp(d)).database(),f=m.ref("posts"),h={getRef:function(){return f},getUserOnSesion:function(){var t=localStorage.getItem("user");return t?JSON.parse(t):null},getUidUserOnSesion:function(){return this.getUserOnSesion()?this.getUserOnSesion().uid:null},addPost:function(object){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.push(object,(function(t){t?alert("Error al intentar agregar el registro.","Aviso"):console.log("Registro agregado correctamente.","Aviso")}));case 2:case"end":return t.stop()}}),t)})))()},addComment:function(object,t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.ref("posts/"+t+"/comments"),e.next=3,r.push(object,(function(t){t?alert("Error al intentar agregar el comentario.","Aviso"):console.log("Comentario agregado correctamente.","Aviso")}));case 3:case"end":return e.stop()}}),e)})))()},addReaction:function(object,t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.ref("posts/"+t+"/reactions"),e.next=3,r.push(object,(function(t){t?alert("Error al intentar agregar la reacción.","Aviso"):console.log("Reacción agregada correctamente.","Aviso")}));case 3:case"end":return e.stop()}}),e)})))()},removeReaction:function(t,e){return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log(t),console.log(e),o=m.ref("posts/"+t+"/reactions/"+e),r.next=5,o.remove((function(t){t?alert("Error al intentar eliminar la reacción.","Aviso"):console.log("Reacción eliminada correctamente.","Aviso")}));case 5:case"end":return r.stop()}}),r)})))()}};e.a=h},37:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(72),r(73),r(134),r(128),r(63),r(30),r(103),r(183);function o(element){return null==element||"string"==typeof element&&""===element.trim()}},44:function(t,e,r){"use strict";r.r(e);var o={name:"ImageProfile",props:{size:{type:String,require:!0}},data:function(){return{clas:""}},mounted:function(){this.clas="profile-"+this.size},methods:{}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{class:t.clas,attrs:{src:r(257)}})}),[],!1,null,null,null);e.default=component.exports},77:function(t,e,r){"use strict";r.r(e);var o=r(5),n=(r(19),r(134),r(22),r(38),r(34)),c={name:"AddComment",props:{post:{type:Object,require:!0}},data:function(){return{description:""}},mounted:function(){},methods:{submit:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.preventDefault(),e.description.trim().length<=0&&e.$toast.error("Debes escribir un comentario para poder realizar la publicación."),r.t0=e.description,r.t1=(new Date).getTime(),r.next=6,n.a.getUserOnSesion();case 6:return r.t2=r.sent,o={description:r.t0,date:r.t1,user:r.t2},r.next=10,n.a.addComment(o,e.post.id);case 10:e.description="",e.$toast.success("Comentario realizado con éxito.");case 12:case"end":return r.stop()}}),r)})))()}}},l=r(6),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"add-comment",on:{submit:t.submit}},[r("fieldset",{staticClass:"without-border-bottom without-border-radius-bottom white"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],ref:"textareaAddComment",staticClass:"form-control border-none secondary",attrs:{placeholder:"Escribe aquí tu comentario"},domProps:{value:t.description},on:{input:[function(e){e.target.composing||(t.description=e.target.value)},function(t){t.target.composing=!1}]}})]),t._v(" "),t.description.trim().length>0?r("fieldset",{staticClass:"without-border-top without-border-radius-top white"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Comentar")])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},78:function(t,e,r){"use strict";r.r(e);var o={name:"InformationPostComments",props:{comments:{type:Array,require:!0}},data:function(){return{}},created:function(){},updated:function(){},methods:{}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.comments&&t.comments.length>0?r("div",{staticClass:"label-count-comments"},[t._v("\n  "+t._s(t.comments.length)+" "+t._s(t.comments.length>1?" Comentarios":"Comentario")+"\n")]):t._e()}),[],!1,null,null,null);e.default=component.exports},79:function(t,e,r){"use strict";r.r(e);var o={name:"InformationPostReactions",props:{reactions:{type:Array,require:!0,default:null}},data:function(){return{icon:""}},created:function(){},updated:function(){},methods:{}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.reactions&&t.reactions.length>0?o("div",{staticClass:"label-count-reactions"},[o("img",{attrs:{src:r(258)}}),t._v("\n  "+t._s(t.reactions.length)+"\n")]):t._e()}),[],!1,null,null,null);e.default=component.exports},80:function(t,e,r){"use strict";r.r(e);var o=r(83),n=r(81),c=r(44),l=r(79),d=r(78),m=r(82),f=r(77),h={name:"Post",components:{InformationPostReactions:l.default,InformationPostComments:d.default,ActionPostComment:o.default,ActionPostReact:n.default,ImageProfile:c.default,GridComments:m.default,AddComment:f.default},props:{post:{type:Object,require:!0,default:null}},data:function(){return{sizeImage:"md"}},mounted:function(){},methods:{clickAddComment:function(){var t=this.$refs;if(t&&t.addComment){var e=t.addComment.$refs;e&&e.textareaAddComment&&e.textareaAddComment.focus()}},changeData:function(t){if(this.$refs)if("apart"===t){var component=this.$refs.ActionPostReactInDescription;component&&component.checkReactions()}else if("in-description"===t){var e=this.$refs.ActionPostReactApart;e&&e.checkReactions()}}}},v=r(6),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"post"},[r("table",{staticClass:"container"},[r("tr",[r("td",{staticClass:"td-image"},[r("ImageProfile",{attrs:{size:t.sizeImage}})],1),t._v(" "),r("td",[t.post&&t.post.user?r("h1",{staticClass:"post-user-name"},[t._v("\n          "+t._s(t.post.user.email)+"\n        ")]):t._e(),t._v(" "),r("h4",{staticClass:"post-date"},[t._v("\n          "+t._s(new Date(t.post.date).toLocaleString())+"\n        ")]),t._v(" "),r("p",{staticClass:"post-description"},[t._v("\n          "+t._s(t.post.description)+"\n        ")]),t._v(" "),r("section",{staticClass:"actions"},[r("article",{staticClass:"actions-posts actions-in-description"},[r("ActionPostReact",{ref:"ActionPostReactInDescription",attrs:{idpost:t.post.id,reactions:t.post.reactions,location:"in-description"},on:{changeData:t.changeData}})],1),t._v(" "),r("article",{staticClass:"actions-posts actions-in-description"},[r("ActionPostComment",{on:{clickAddComment:t.clickAddComment}})],1)])])])]),t._v(" "),t.post.comments&&t.post.comments.length>0||t.post.reactions&&t.post.reactions.length>0?r("table",{staticClass:"information-post"},[r("tr",[r("td",{staticClass:"data-one"},[r("InformationPostReactions",{attrs:{reactions:t.post.reactions}})],1),t._v(" "),r("td",{staticClass:"data-two"},[r("InformationPostComments",{attrs:{comments:t.post.comments}})],1)])]):t._e(),t._v(" "),r("section",{staticClass:"actions apart"},[r("article",{staticClass:"actions-posts actions-apart"},[r("ActionPostReact",{ref:"ActionPostReactApart",attrs:{idpost:t.post.id,reactions:t.post.reactions,location:"apart"},on:{changeData:t.changeData}})],1),t._v(" "),r("article",{staticClass:"actions-posts actions-apart second"},[r("ActionPostComment",{on:{clickAddComment:t.clickAddComment}})],1)]),t._v(" "),r("GridComments",{attrs:{comments:t.post.comments}}),t._v(" "),r("AddComment",{ref:"addComment",attrs:{post:t.post}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageProfile:r(44).default,ActionPostReact:r(81).default,ActionPostComment:r(83).default,InformationPostReactions:r(79).default,InformationPostComments:r(78).default,GridComments:r(82).default,AddComment:r(77).default})},81:function(t,e,r){"use strict";r.r(e);var o=r(5),n=(r(19),r(188),r(34)),c={name:"ActionPostReact",props:{location:{type:String,require:!0,default:""},idpost:{type:String,require:!0,default:""},reactions:{type:Array,require:!0,default:null}},data:function(){return{text:"Reaccionar",alreadyReacted:!1,classCss:"",uidReaction:"",icon:""}},created:function(){this.checkReactions()},methods:{checkReactions:function(){var t=this.reactions.find((function(t){var e=t.user;if(e&&e.uid===n.a.getUidUserOnSesion())return!0;return!1}));t?(this.text="Ya reaccionaste",this.alreadyReacted=!0,this.classCss="already-reacted",this.uidReaction=t.id):(this.text="Reaccionar",this.alreadyReacted=!1,this.classCss="",this.uidReaction="")},toggleReaction:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.alreadyReacted){e.next=11;break}return e.t0=(new Date).getTime(),e.next=4,n.a.getUserOnSesion();case 4:return e.t1=e.sent,r={date:e.t0,user:e.t1},e.next=8,n.a.addReaction(r,t.idpost);case 8:t.checkReactions(),e.next=14;break;case 11:return e.next=13,n.a.removeReaction(t.idpost,t.uidReaction);case 13:t.checkReactions();case 14:t.$emit("changeData",t.location);case 15:case"end":return e.stop()}}),e)})))()}}},l=r(6),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{ref:"span",class:t.classCss,on:{click:t.toggleReaction}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,null,null);e.default=component.exports},82:function(t,e,r){"use strict";r.r(e);var o={name:"GridComments",components:{Comment:r(84).default},props:{comments:{type:Array,require:!0}},data:function(){return{}},mounted:function(){},methods:{}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"grid-comments"},t._l(t.comments,(function(t){return r("Comment",{key:t.id,staticClass:"comment",attrs:{comment:t}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Comment:r(84).default})},83:function(t,e,r){"use strict";r.r(e);var o={name:"ActionPostComment",props:{},data:function(){return{}},mounted:function(){},methods:{click:function(){this.$emit("clickAddComment")}}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{ref:"span",on:{click:t.click}},[t._v("\n  Comentar\n")])}),[],!1,null,null,null);e.default=component.exports},84:function(t,e,r){"use strict";r.r(e);var o={name:"Comment",components:{},props:{comment:{type:Object,require:!0}},data:function(){return{sizeImage:"xs"}},mounted:function(){},methods:{}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("tr",[r("td",{staticClass:"td-image"},[r("ImageProfile",{attrs:{size:t.sizeImage}})],1),t._v(" "),r("td",[t.comment&&t.comment.user?r("h1",{staticClass:"comment-user-name"},[t._v("\n          "+t._s(t.comment.user.email)+"\n        ")]):t._e(),t._v(" "),r("h4",{staticClass:"comment-date"},[t._v("\n        "+t._s(new Date(t.comment.date).toLocaleString())+"\n      ")]),t._v(" "),r("p",{staticClass:"comment-description"},[t._v("\n        "+t._s(t.comment.description)+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ImageProfile:r(44).default})}},[[208,5,1,6]]]);