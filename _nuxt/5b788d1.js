(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{316:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(76),n(40),n(97),n(34),n(194),n(307),{props:{post:{type:Object,required:!0,default:function(){return{}}}},computed:{anyDiscussionLink:function(){return this.discussionLink("twitter")||this.discussionLink("reddit")||this.discussionLink("facebook")},facebookShare:function(){return"https://www.facebook.com/sharer/sharer.php?"+this.createQuery({u:this.fullUrl})},redditShare:function(){return"http://www.reddit.com/submit?"+this.createQuery({title:this.post.data.socialText,url:this.fullUrl})},twitterShare:function(){return"https://twitter.com/intent/tweet?"+this.createQuery({text:this.post.data.socialText,url:this.fullUrl,via:"system76",original_referer:this.fullUrl})},fullUrl:function(){return"".concat("https://blog.origin76.com","/post/").concat(this.post.uid)}},methods:{createQuery:function(t){return Object.entries(t).map((function(t){var e=Object(r.a)(t,2),n=e[0],o=e[1];return"".concat(n,"=").concat(encodeURIComponent(o))})).join("&")},discussionLink:function(t){var e=(this.post.data.socialLinks||[]).find((function(e){return e.link&&e.link.provider_name.toLowerCase()===t}));return null!=e?e.link.url||e.link.embed_url:null},nativeShare:function(t){navigator.share&&(t.preventDefault(),navigator.share({title:this.post.data.socialText,url:this.fullUrl}))}}}),l=n(23),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"max-w-5xl px-4 mx-auto",attrs:{id:"social"}},[n("h1",{staticClass:"font-sans text-gray-800 text-center font-extralight mb-6 text-4xl xl:mb-10 xl:text-5xl"},[t._v("\n    Like what you see?\n  ")]),t._v(" "),n("div",{staticClass:"grid grid-flow-row gap-16 auto-cols-fr md:grid-flow-col"},[n("div",{attrs:{id:"social-share"}},[n("h2",{staticClass:"font-sans text-gray-600 text-center font-bold text-xl xl:text-2xl mb-6"},[t._v("\n        Share on Social Media\n      ")]),t._v(" "),n("ul",{staticClass:"grid grid-flow-col auto-cols-min gap-8 justify-center text-4xl"},[n("li",[n("a",{staticClass:"text-[#1DA1F2]",attrs:{href:t.twitterShare,rel:"noreferrer nofollow noopener",target:"_blank",title:"Twitter"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)]),t._v(" "),n("li",[n("a",{staticClass:"text-[#ff4500]",attrs:{href:t.redditShare,rel:"noreferrer nofollow noopener",target:"_blank",title:"Reddit"}},[n("font-awesome-icon",{attrs:{icon:["fab","reddit"]}})],1)]),t._v(" "),n("li",[n("a",{staticClass:"text-[#4267B2]",attrs:{href:t.facebookShare,rel:"noreferrer nofollow noopener",target:"_blank",title:"Facebook"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]),t._v(" "),n("li",[n("a",{staticClass:"text-gray-800",attrs:{href:t.fullUrl,rel:"noreferrer nofollow noopener",target:"_blank",title:"Permalink"},on:{click:t.nativeShare}},[n("font-awesome-icon",{attrs:{icon:"share-alt"}})],1)])])]),t._v(" "),t.anyDiscussionLink?n("div",{attrs:{id:"social-discussion"}},[n("h2",{staticClass:"font-sans text-gray-600 text-center font-bold text-xl xl:text-2xl mb-6"},[t._v("\n        Join the Discussion\n      ")]),t._v(" "),n("ul",{staticClass:"grid grid-flow-col auto-cols-min gap-8 justify-center text-4xl"},[t.discussionLink("twitter")?n("li",[n("a",{staticClass:"text-[#1DA1F2]",attrs:{href:t.discussionLink("twitter"),rel:"noreferrer nofollow noopener",target:"_blank",title:"Twitter"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1)]):t._e(),t._v(" "),t.discussionLink("reddit")?n("li",[n("a",{staticClass:"text-[#ff4500]",attrs:{href:t.discussionLink("reddit"),rel:"noreferrer nofollow noopener",target:"_blank",title:"Reddit"}},[n("font-awesome-icon",{attrs:{icon:["fab","reddit"]}})],1)]):t._e(),t._v(" "),t.discussionLink("facebook")?n("li",[n("a",{staticClass:"text-[#4267B2]",attrs:{href:t.discussionLink("facebook"),rel:"noreferrer nofollow noopener",target:"_blank",title:"Facebook"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1)]):t._e()])]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},338:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(39),{components:{SliceZone:n(335).a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$prismic,r=t.error,o=t.params,e.next=3,n.api.getByUID("post",o.uid);case 3:if(!(l=e.sent)){e.next=8;break}return e.abrupt("return",{post:l});case 8:r({statusCode:404,message:"Blog post not found"});case 9:case"end":return e.stop()}}),e)})))()},computed:{publishedAt:function(){return new Date(this.post.first_publication_date).toLocaleDateString("en-US",{day:"numeric",month:"long",timeZone:"MST",weekday:"long",year:"numeric"})}}}),l=n(23),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"bg-blue-500 text-blue-900"},[n("div",{staticClass:"max-w-7xl mx-auto py-3 px-4"},[n("div",{staticClass:"flex items-center justify-between flex-wrap"},[n("div",{staticClass:"w-0 flex-1 flex items-center"},[n("nuxt-link",{staticClass:"flex p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-900 md:text-lg",attrs:{to:"/"}},[n("font-awesome-icon",{attrs:{icon:"arrow-left"}}),t._v(" "),n("span",{staticClass:"sr-only"},[t._v("All Blog Posts")])],1),t._v(" "),n("h1",{staticClass:"my-0 ml-3 font-sans italic text-lg truncate md:text-3xl"},[t._v("\n            Blog Posts\n          ")])],1)])])]),t._v(" "),n("article",{staticClass:"pt-4"},[n("header",{staticClass:"prose sm:prose-sm xl:prose-xl w-full mx-auto max-w-5xl px-4 my-6 lg:my-12"},[n("time",{staticClass:"text-sm font-bold text-gray-600 uppercase lg:text-md",attrs:{datetime:t.post.first_publication_date}},[t._v("\n        "+t._s(t.publishedAt)+"\n      ")]),t._v(" "),n("h1",{staticClass:"my-3 lg:my-4"},[t._v("\n        "+t._s(t.$prismic.asText(t.post.data.title))+"\n      ")])]),t._v(" "),n("slice-zone",{attrs:{slices:t.post.data.slices}})],1),t._v(" "),n("hr",{staticClass:"bg-gray-100 max-w-6xl mx-auto my-8 lg:my-12"}),t._v(" "),n("social-links",{staticClass:"mb-16",attrs:{post:t.post}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialLinks:n(316).default})}}]);