(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{198:function(e,t,r){"use strict";r.r(t);var l=r(316).a,c=r(23),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("figure",{class:{"w-full flex flex-col my-6 md:my-12 text-base sm:text-lg xl:text-xl":!0,"mx-auto max-w-[65ch] px-4":"article-width"===e.slice.variation,"items-center":"free-width"===e.slice.variation}},["full-width"===e.slice.variation?[r("nuxt-picture",{staticClass:"w-full md:hidden",attrs:{alt:e.slice.primary.image.small.alt,copyright:e.slice.primary.image.small.copyright,height:e.slice.primary.image.small.dimensions.height,provider:e.provider,src:e.slice.primary.image.small.url,width:e.slice.primary.image.small.dimensions.width,loading:"lazy"}}),e._v(" "),r("nuxt-picture",{staticClass:"w-full hidden md:block",attrs:{alt:e.slice.primary.image.alt,copyright:e.slice.primary.image.copyright,height:e.slice.primary.image.dimensions.height,provider:e.provider,src:e.slice.primary.image.url,width:e.slice.primary.image.dimensions.width,loading:"lazy"}})]:"article-width"===e.slice.variation?[r("nuxt-picture",{staticClass:"w-full",attrs:{alt:e.slice.primary.image.alt,copyright:e.slice.primary.image.copyright,height:e.slice.primary.image.dimensions.height,provider:e.provider,src:e.slice.primary.image.url,width:e.slice.primary.image.dimensions.width,loading:"lazy"}})]:"free-width"===e.slice.variation?[r("nuxt-picture",{staticClass:"max-w-full lg:max-w-[80vw]",attrs:{alt:e.slice.primary.image.alt,copyright:e.slice.primary.image.copyright,height:e.slice.primary.image.dimensions.height,provider:e.provider,src:e.slice.primary.image.url,width:e.slice.primary.image.dimensions.width,loading:"lazy"}})]:e._e(),e._v(" "),e.showAlt?r("div",{class:{"mt-1":!0,"w-full":"free-width"!==e.slice.variation,"mx-auto max-w-[65ch] px-8":"article-width"!==e.slice.variation,"px-4":"article-width"===e.slice.variation}},[r("figcaption",{staticClass:"text-sm text-gray-600"},[e._v("\n      "+e._s(e.slice.primary.image.alt)+"\n    ")])]):e._e()],2)}),[],!1,null,null,null);t.default=component.exports},316:function(e,t,r){"use strict";(function(e){r(51);t.a={name:"PostImage",props:{slice:{type:Object,required:!0,default:function(){return{}}}},computed:{provider:function(){return e.env.STORYBOOK?"static":"prismic"},showAlt:function(){switch(this.slice.variation){case"full-width":return this.slice.primary.showAlt&&this.slie.primary.image.alt;default:return this.slice.primary.image.alt}}}}}).call(this,r(135))}}]);