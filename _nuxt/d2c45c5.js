(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{321:function(t,e,o){"use strict";o.r(e);var n=o(10),r=(o(34),o(76),o(40),o(97),o(195),o(312),{props:{post:{type:Object,required:!0,default:function(){return{}}}},computed:{anyDiscussionLink:function(){return this.discussionLink("twitter")||this.discussionLink("reddit")||this.discussionLink("facebook")},facebookShare:function(){return"https://www.facebook.com/sharer/sharer.php?"+this.createQuery({u:this.fullUrl})},redditShare:function(){return"http://www.reddit.com/submit?"+this.createQuery({title:this.post.data.socialText||this.post.data.seoTitle,url:this.fullUrl})},twitterShare:function(){return"https://twitter.com/intent/tweet?"+this.createQuery({text:this.post.data.socialText||this.post.data.seoTitle,url:this.fullUrl,via:"system76",original_referer:this.fullUrl})},fullUrl:function(){return"".concat("https://blog.system76.com","/post/").concat(this.post.uid)}},methods:{createQuery:function(t){return Object.entries(t).map((function(t){var e=Object(n.a)(t,2),o=e[0],r=e[1];return"".concat(o,"=").concat(encodeURIComponent(r))})).join("&")},discussionLink:function(t){var e=(this.post.data.socialLinks||[]).find((function(e){return e.link&&e.link.provider_name&&e.link.provider_name.toLowerCase()===t}));return null!=e?e.link.url||e.link.embed_url:null},nativeShare:function(t){navigator.share&&(t.preventDefault(),navigator.share({title:this.post.data.socialText||this.post.data.seoTitle,url:this.fullUrl}))}}}),l=o(23),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"max-w-5xl px-4 mx-auto",attrs:{id:"social"}},[o("h1",{staticClass:"font-sans text-gray-800 text-center font-extralight mb-6 text-4xl xl:mb-10 xl:text-5xl"},[t._v("\n    Like what you see?\n  ")]),t._v(" "),o("div",{staticClass:"grid grid-flow-row gap-16 auto-cols-fr md:grid-flow-col"},[o("div",{attrs:{id:"social-share"}},[o("h2",{staticClass:"font-sans text-gray-600 text-center font-bold text-xl xl:text-2xl mb-6"},[t._v("\n        Share on Social Media\n      ")]),t._v(" "),o("ul",{staticClass:"grid grid-flow-col auto-cols-min gap-8 justify-center text-4xl"},[o("li",[o("a",{staticClass:"text-[#1DA1F2]",attrs:{href:t.twitterShare,rel:"noreferrer nofollow noopener",target:"_blank",title:"Twitter"}},[o("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)]),t._v(" "),o("li",[o("a",{staticClass:"text-[#ff4500]",attrs:{href:t.redditShare,rel:"noreferrer nofollow noopener",target:"_blank",title:"Reddit"}},[o("font-awesome-icon",{attrs:{icon:["fab","reddit"]}})],1)]),t._v(" "),o("li",[o("a",{staticClass:"text-[#4267B2]",attrs:{href:t.facebookShare,rel:"noreferrer nofollow noopener",target:"_blank",title:"Facebook"}},[o("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),t._v(" "),o("li",[o("a",{staticClass:"text-gray-800",attrs:{href:t.fullUrl,rel:"noreferrer nofollow noopener",target:"_blank",title:"Permalink"},on:{click:t.nativeShare}},[o("font-awesome-icon",{attrs:{icon:"share-alt"}})],1)])])]),t._v(" "),t.anyDiscussionLink?o("div",{attrs:{id:"social-discussion"}},[o("h2",{staticClass:"font-sans text-gray-600 text-center font-bold text-xl xl:text-2xl mb-6"},[t._v("\n        Join the Discussion\n      ")]),t._v(" "),o("ul",{staticClass:"grid grid-flow-col auto-cols-min gap-8 justify-center text-4xl"},[t.discussionLink("twitter")?o("li",[o("a",{staticClass:"text-[#1DA1F2]",attrs:{href:t.discussionLink("twitter"),rel:"noreferrer nofollow noopener",target:"_blank",title:"Twitter"}},[o("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)]):t._e(),t._v(" "),t.discussionLink("reddit")?o("li",[o("a",{staticClass:"text-[#ff4500]",attrs:{href:t.discussionLink("reddit"),rel:"noreferrer nofollow noopener",target:"_blank",title:"Reddit"}},[o("font-awesome-icon",{attrs:{icon:["fab","reddit"]}})],1)]):t._e(),t._v(" "),t.discussionLink("facebook")?o("li",[o("a",{staticClass:"text-[#4267B2]",attrs:{href:t.discussionLink("facebook"),rel:"noreferrer nofollow noopener",target:"_blank",title:"Facebook"}},[o("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]):t._e()])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,o){"use strict";o.r(e);var n=o(322),r=o(3),l=(o(38),o(34),{components:{SliceZone:o(338).a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var o,n,r,l,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$prismic,n=t.error,r=t.redirect,l=t.params,c=t.from,e.next=3,o.api.getByUID("post",l.uid);case 3:if(!(d=e.sent)){e.next=8;break}return e.abrupt("return",{post:d});case 8:if(!c){e.next=11;break}if(!("id"in c.params)){e.next=11;break}return e.abrupt("return",r("https://www.tumblr.com/system76/".concat(c.params.id,"/").concat(c.params.uid)));case 11:n({statusCode:404,message:"Blog post not found"});case 12:case"end":return e.stop()}}),e)})))()},head:function(){var t=null!=this.post.data.seoSocial[0]?this.post.data.seoSocial[0].image:null;return{title:this.post.data.seoTitle,meta:[{hid:"description",name:"description",content:this.post.data.seoDescription},{hid:"og:site_name",property:"og:site_name",content:"System76 Blog"},{hid:"og:title",property:"og:title",content:this.post.data.seoTitle},{hid:"og:description",property:"og:description",content:this.post.data.seoDescription},{hid:"og:url",property:"og:url",content:"".concat("https://blog.system76.com","/post/").concat(this.post.uid)},{hid:"twitter:title",name:"twitter:title",content:this.post.data.seoTitle},{hid:"twitter:description",name:"twitter:description",content:this.post.data.seoDescription},{hid:"twitter:site",name:"twitter:site",content:"@system76"}].concat(Object(n.a)(t?[{hid:"og:image",property:"og:image",content:t.url},{hid:"og:image:alt",property:"og:image:alt",content:t.alt},{hid:"og:image:width",property:"og:image:width",content:t.dimensions.width},{hid:"og:image:height",property:"og:image:height",content:t.dimensions.height},{hid:"twitter:card",name:"twitter:card",content:"summary_large_image"},{hid:"twitter:image:src",name:"twitter:image:src",content:t.url}]:[]))}},computed:{datePublished:function(){return"date"in this.post.data&&this.post.data.date?this.post.data.date:this.post.first_publication_date},publishedAt:function(){return new Date(this.datePublished).toLocaleDateString("en-US",{day:"numeric",month:"long",timeZone:"MST",weekday:"long",year:"numeric"})}}}),c=o(23),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nav",{staticClass:"bg-blue-500 text-blue-900"},[o("div",{staticClass:"max-w-7xl mx-auto py-3 px-4"},[o("div",{staticClass:"flex items-center justify-between flex-wrap"},[o("div",{staticClass:"w-0 flex-1 flex items-center"},[o("nuxt-link",{staticClass:"flex p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 md:text-lg",attrs:{to:"/"}},[o("font-awesome-icon",{attrs:{icon:"arrow-left"}}),t._v(" "),o("span",{staticClass:"sr-only"},[t._v("All Blog Posts")])],1),t._v(" "),o("h1",{staticClass:"my-0 ml-3 font-sans italic text-lg truncate md:text-3xl"},[t._v("\n            Blog Posts\n          ")])],1)])])]),t._v(" "),o("article",{staticClass:"pt-4"},[o("header",{staticClass:"w-full mx-auto text-base max-w-[65ch] px-4 mt-6 mb-10 sm:text-lg lg:mt-8 lg:mb-16 xl:text-xl"},[o("div",{staticClass:"-mx-3 my-2 lg:my-3"},t._l(t.post.tags,(function(e){return o("nuxt-link",{key:e,staticClass:"inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-gray-100 text-gray-900 transition duration-150 ease-in-out hover:bg-orange-500 focus:bg-orange-500",attrs:{to:"/tags/"+encodeURIComponent(e)}},[t._v("\n          "+t._s(e)+"\n        ")])})),1),t._v(" "),o("time",{staticClass:"text-sm font-bold text-gray-600 uppercase lg:text-md",attrs:{datetime:t.datePublished}},[t._v("\n        "+t._s(t.publishedAt)+"\n      ")]),t._v(" "),o("h1",{staticClass:"sys-article-h1 my-3 lg:my-4"},[t._v("\n        "+t._s(t.$prismic.asText(t.post.data.title))+"\n      ")])]),t._v(" "),o("slice-zone",{attrs:{slices:t.post.data.slices}})],1),t._v(" "),o("hr",{staticClass:"bg-gray-100 max-w-6xl mx-auto my-8 lg:my-12"}),t._v(" "),o("social-links",{staticClass:"mb-16",attrs:{post:t.post}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialLinks:o(321).default})}}]);