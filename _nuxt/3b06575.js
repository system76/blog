(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(t,e,n){"use strict";n.r(e);n(26);var r=n(2),o={data:function(){return{blogPosts:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog").limit(5).fetch();case 2:t.blogPosts=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},c=n(29),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("homepage!")]),t._v(" "),n("h2",[t._v("Posts")]),t._v(" "),n("div",t._l(t.blogPosts,(function(e){return n("div",{key:e.slug},[n("span",[t._v(t._s(e.createdAt))]),t._v(" "),n("h1",[t._v(t._s(e.title))]),t._v(" "),n("nuxt-link",{attrs:{to:"/post/"+e.slug}},[t._v("\n        View >\n      ")])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);