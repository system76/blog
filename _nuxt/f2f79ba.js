(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{307:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(121);var o=r(135),l=r(87);function c(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||Object(o.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},311:function(t,e,r){"use strict";var n=r(4),o=r(98).charAt;n({target:"String",proto:!0,forced:r(5)((function(){return"𠮷"!=="𠮷".at(0)}))},{at:function(t){return o(this,t)}})},316:function(t,e,r){var content=r(329);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("60f13007",content,!0,{sourceMap:!1})},328:function(t,e,r){"use strict";r(316)},329:function(t,e,r){var n=r(35)((function(i){return i[1]}));n.push([t.i,".blog-post picture[data-v-207c8e18] img{border-radius:.5rem}",""]),n.locals={},t.exports=n},343:function(t,e,r){"use strict";r.r(e);var n,o=r(307),l=r(3),c=(r(38),r(311),{asyncData:(n=Object(l.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$prismic,t.next=3,r.api.query(r.predicates.at("document.type","post"),{orderings:"[my.post.date desc]"});case 3:return t.t0=t.sent,t.abrupt("return",{posts:t.t0});case 5:case"end":return t.stop()}}),t)}))),function(t){return n.apply(this,arguments)}),computed:{firstPost:function(){return this.posts.results.length>0?this.posts.results[0]:null},otherPosts:function(){if(this.posts.results.length>1){var t=Object(o.a)(this.posts.results);return t.shift(),t}return[]}},methods:{publishedAt:function(t){return new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"long",timeZone:"MST",weekday:"long",year:"numeric"})}}}),d=(r(328),r(23)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("div",[r("nuxt-picture",{staticClass:"w-full md:hidden",attrs:{src:"/images/hero.jpg",width:"800",height:"513",alt:"The Blog of System76"}}),t._v(" "),r("nuxt-picture",{staticClass:"hidden w-full md:block",attrs:{src:"/images/hero.jpg",alt:"The Blog of System76"}})],1),t._v(" "),t.firstPost?r("nuxt-link",{staticClass:"blog-post grid grid-cols-1 gap-6 items-center max-w-7xl mx-auto py-4 px-4 md:grid md:grid-cols-2 md:gap-8 md:mt-8 xl:grid-cols-3",attrs:{to:t.$prismic.linkResolver(t.firstPost)}},[r("div",{staticClass:"w-full xl:col-span-2"},[r("div",{staticClass:"aspect-w-1 aspect-h-1 lg:aspect-w-2"},[r("nuxt-picture",{staticClass:"w-full object-scale-down object-cover lg:hidden",attrs:{src:t.firstPost.data.image.small.url,alt:t.firstPost.data.image.small.alt,copyright:t.firstPost.data.image.small.copyright,provider:"prismic"}}),t._v(" "),t.firstPost.data.image?r("nuxt-picture",{staticClass:"hidden w-full object-scale-down object-cover lg:block",attrs:{src:t.firstPost.data.image.url,alt:t.firstPost.data.image.alt,copyright:t.firstPost.data.image.copyright,provider:"prismic"}}):t._e()],1)]),t._v(" "),r("div",{staticClass:"md:my-4"},[t.firstPost.tags.length>0?r("div",{staticClass:"-mx-3 mb-6 lg:my-3"},t._l(t.firstPost.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-900 transition duration-150 ease-in-out hover:bg-orange-500 focus:bg-orange-500",attrs:{to:"/tags/"+encodeURIComponent(e)}},[t._v("\n          "+t._s(e)+"\n        ")])})),1):t._e(),t._v(" "),r("h3",{staticClass:"text-sm font-bold text-gray-500 uppercase mb-1 lg:text-md"},[r("time",[t._v(t._s(t.publishedAt(t.firstPost.first_publication_date)))])]),t._v(" "),r("h1",{staticClass:"sys-article-h2 mb-2 md:mb-4"},[t._v("\n        "+t._s(t.$prismic.asText(t.firstPost.data.title))+"\n      ")]),t._v(" "),r("p",{staticClass:"line-clamp-3 md:line-clamp-6 lg:line-clamp-3 lg:text-lg xl:line-clamp-6"},[t._v("\n        "+t._s(t.$prismic.asText(t.firstPost.data.description))+"\n      ")])])]):t._e(),t._v(" "),t.posts.results.length>1?r("ul",{staticClass:"max-w-7xl mx-auto py-4 px-4 grid gap-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3"},t._l(t.otherPosts,(function(e){return r("li",{key:e.id},[r("nuxt-link",{staticClass:"blog-post block w-full mb-6",attrs:{to:t.$prismic.linkResolver(e)}},[r("nuxt-picture",{staticClass:"w-full object-scale-down object-cover",attrs:{src:e.data.image.small.url,alt:e.data.image.small.alt,copyright:e.data.image.small.copyright,sizes:"md:100vw lg:50vw xl:33vw",loading:"lazy",provider:"prismic"}}),t._v(" "),e.tags.length>0?r("div",{staticClass:"-mx-3 my-3 lg:my-3"},t._l(e.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-900 transition duration-150 ease-in-out hover:bg-orange-500 focus:bg-orange-500",attrs:{to:"/tags/"+encodeURIComponent(e)}},[t._v("\n            "+t._s(e)+"\n          ")])})),1):t._e(),t._v(" "),r("h3",{class:{"text-sm font-bold text-gray-500 uppercase my-1":!0,"mt-6":0===e.tags.length}},[r("time",[t._v(t._s(t.publishedAt(e.first_publication_date)))])]),t._v(" "),r("h1",{staticClass:"sys-article-h2 mb-2 md:sys-article-h3 md:mb-4"},[t._v("\n          "+t._s(t.$prismic.asText(e.data.title))+"\n        ")]),t._v(" "),r("p",{staticClass:"line-clamp-4"},[t._v("\n          "+t._s(t.$prismic.asText(e.data.description))+"\n        ")])],1)],1)})),0):t._e()],1)}),[],!1,null,"207c8e18",null);e.default=component.exports}}]);