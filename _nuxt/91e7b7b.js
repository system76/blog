(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{308:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("221a8b80",content,!0,{sourceMap:!1})},309:function(t,e,n){"use strict";n(308)},310:function(t,e,n){var o=n(35)((function(i){return i[1]}));o.push([t.i,"picture[data-v-f8f741c0] img{border-radius:.5rem}",""]),o.locals={},t.exports=o},311:function(t,e,n){"use strict";n.r(e);var o=n(2),r={props:{post:{type:Object,required:!0}},methods:{normalizeURL:o.g,publishedAt:function(t){return new Date(t).toLocaleDateString("en-US",{day:"numeric",month:"long",timeZone:"MST",weekday:"long",year:"numeric"})}}},l=(n(309),n(23)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group w-full grid gap-6 lg:grid-cols-2 items-center"},[n("nuxt-link",{attrs:{to:t.$prismic.linkResolver(t.post)}},[n("nuxt-picture",{staticClass:"block w-full aspect-w-2 aspect-h-1 object-scale-down object-cover",attrs:{src:t.post.data.image.url,alt:t.post.data.image.alt,copyright:t.post.data.image.copyright,sizes:"md:100vw lg:50vw xl:33vw",width:"1000",height:"500",loading:"lazy",provider:"prismic"}})],1),t._v(" "),n("div",[t.post.tags.length>0?n("div",{staticClass:"-mx-3 mb-3"},t._l(t.post.tags,(function(e){return n("nuxt-link",{key:e,staticClass:"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-900 transition duration-150 ease-in-out hover:bg-orange-500 focus:bg-orange-500",attrs:{to:"/tags/"+encodeURIComponent(e)}},[t._v("\n        "+t._s(e)+"\n      ")])})),1):t._e(),t._v(" "),n("h3",{staticClass:"text-sm font-bold text-gray-500 uppercase mb-1"},[n("time",{attrs:{datetime:t.post.first_publication_date}},[t._v("\n        "+t._s(t.publishedAt(t.post.first_publication_date))+"\n      ")])]),t._v(" "),n("h1",{staticClass:"sys-article-h2 mb-2 md:sys-article-h3 md:mb-4"},[n("nuxt-link",{attrs:{to:t.$prismic.linkResolver(t.post)}},[t._v("\n        "+t._s(t.$prismic.asText(t.post.data.title))+"\n      ")])],1),t._v(" "),n("p",{staticClass:"line-clamp-4"},[t._v("\n      "+t._s(t.$prismic.asText(t.post.data.description))+"\n    ")])])],1)}),[],!1,null,"f8f741c0",null);e.default=component.exports}}]);