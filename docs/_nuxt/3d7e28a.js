(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{275:function(t,e,n){"use strict";n.r(e);var o=n(6),r=(n(32),n(36),n(29),n(141)),d=n(104),c=n(140),l=n(138),f=n(139),v={name:"Login",components:{Header:d.default,Footer:f.default,GridPosts:c.default,AddPost:l.default},layout:"default",data:function(){return{isSigned:!1,posts:[]}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t,e.next=3,r.a.isSigned();case 3:n.isSigned=e.sent,r.a.getRef().orderByChild("description").on("value",(function(t){var e=t.val();n.posts=[],Object.keys(e).forEach((function(element){n.posts.push(e[element])}))}),(function(t){console.log("The read failed: "+t.code)}));case 5:case"end":return e.stop()}}),e)})))()},mounted:function(){},methods:{setPost:function(){}}},h=n(5),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("Header"),t._v(" "),n("AddPost",{on:{successfulPost:t.setPost}}),t._v(" "),n("GridPosts",{attrs:{posts:t.posts}}),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(104).default,AddPost:n(138).default,GridPosts:n(140).default,Footer:n(139).default})}}]);