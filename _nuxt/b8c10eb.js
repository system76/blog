(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{308:function(t,e,r){var content=r(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("434442be",content,!0,{sourceMap:!1})},309:function(t,e,r){"use strict";r(308)},310:function(t,e,r){var n=r(35)((function(i){return i[1]}));n.push([t.i,"picture[data-v-112dfa86] img{border-radius:.5rem}",""]),n.locals={},t.exports=n},311:function(t,e,r){"use strict";r.r(e);var n=r(2),o={props:{post:{type:Object,required:!0}},computed:{datePublished:function(){return"date"in this.post.data&&this.post.data.date?this.post.data.date:this.post.first_publication_date}},methods:{normalizeURL:n.g,publishedAt:function(t){return new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"long",timeZone:"MST",weekday:"long",year:"numeric"})}}},l=(r(309),r(23)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"group w-full grid gap-6 lg:grid-cols-2 items-center"},[r("nuxt-link",{attrs:{to:t.$prismic.linkResolver(t.post)}},[r("nuxt-picture",{staticClass:"block w-full aspect-w-2 aspect-h-1 object-scale-down object-cover",attrs:{src:t.post.data.image.url,alt:t.post.data.image.alt,copyright:t.post.data.image.copyright,sizes:"md:100vw lg:50vw xl:33vw",width:"1000",height:"500",loading:"lazy",provider:"prismic"}})],1),t._v(" "),r("div",[t.post.tags.length>0?r("div",{staticClass:"-mx-3 mb-3"},t._l(t.post.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-900 transition duration-150 ease-in-out hover:bg-orange-500 focus:bg-orange-500",attrs:{to:"/tags/"+encodeURIComponent(e)}},[t._v("\n        "+t._s(e)+"\n      ")])})),1):t._e(),t._v(" "),r("h3",{staticClass:"text-sm font-bold text-gray-500 uppercase mb-1"},[r("time",{attrs:{datetime:t.datePublished}},[t._v("\n        "+t._s(t.publishedAt(t.datePublished))+"\n      ")])]),t._v(" "),r("h1",{staticClass:"sys-article-h2 mb-2 md:sys-article-h3 md:mb-4"},[r("nuxt-link",{attrs:{to:t.$prismic.linkResolver(t.post)}},[t._v("\n        "+t._s(t.$prismic.asText(t.post.data.title))+"\n      ")])],1),t._v(" "),r("p",{staticClass:"line-clamp-4"},[t._v("\n      "+t._s(t.$prismic.asText(t.post.data.description))+"\n    ")])])],1)}),[],!1,null,"112dfa86",null);e.default=component.exports},315:function(t,e,r){"use strict";var n=r(4),o=r(98).charAt;n({target:"String",proto:!0,forced:r(5)((function(){return"𠮷"!=="𠮷".at(0)}))},{at:function(t){return o(this,t)}})},343:function(t,e,r){"use strict";r.r(e);var n,o=r(3),l=(r(38),r(315),{asyncData:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$prismic,t.next=3,r.api.query(r.predicates.at("document.type","post"),{orderings:"[my.post.date desc]"});case 3:return t.t0=t.sent,t.abrupt("return",{posts:t.t0});case 5:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)})}),c=r(23),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("div",[r("nuxt-picture",{staticClass:"w-full md:hidden",attrs:{src:"/images/hero.jpg",width:"800",height:"513",alt:"The Blog of System76"}}),t._v(" "),r("nuxt-picture",{staticClass:"hidden w-full md:block",attrs:{src:"/images/hero.jpg",width:"2048",height:"513",alt:"The Blog of System76"}})],1),t._v(" "),t.posts.results.length>0?r("ul",{staticClass:"max-w-7xl mx-auto py-12 px-4 space-y-12"},t._l(t.posts.results,(function(t){return r("li",{key:t.id},[r("list-post-item",{attrs:{post:t}})],1)})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ListPostItem:r(311).default})}}]);