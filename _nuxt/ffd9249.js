(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{322:function(t,e,n){"use strict";n.r(e);var r=n(2),o=(n(37),n(16),n(53),{components:{SliceZone:n(319).a},head:function(){return{}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$prismic,r=t.params,e.next=3,n.api.getByUID("post",r.uid);case 3:if(!(o=e.sent)){e.next=8;break}return e.abrupt("return",{post:o});case 8:error({statusCode:404,message:"Blog post not found"});case 9:case"end":return e.stop()}}),e)})))()}}),c=n(22),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"w-full max-w-7xl mx-auto py-4 px-4 pb-12"},[n("h1",{staticClass:"font-serif font-bold text-3xl my-6 mx-auto lg:text-5xl lg:my-12 max-w-5xl"},[t._v("\n    "+t._s(t.$prismic.asText(t.post.data.title))+"\n  ")]),t._v(" "),n("slice-zone",{attrs:{slices:t.post.data.slices}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);