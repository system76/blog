(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{257:function(t,e,n){"use strict";n.r(e);n(28);var r,o=n(2),c={head:function(){return{title:this.blog.title}},asyncData:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,t.next=3,n("blog",r.slug).fetch();case 3:return t.t0=t.sent,t.abrupt("return",{blog:t.t0});case 5:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)})},l=n(31),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",[t._v(t._s(t.blog.title)+" by "+t._s(t.blog.author))]),t._v(" "),n("h2",[t._v(t._s(t.blog.createdAt))]),t._v(" "),n("main",[n("nuxt-content",{staticClass:"prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto",attrs:{document:t.blog}})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);