__NUXT_JSONP__("/post/customizing-cosmic-theming-and-applications", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{post:{id:"ZNaWixIAACgARefE",uid:"customizing-cosmic-theming-and-applications",url:a,type:"post",href:"https:\u002F\u002Fblog-system76.cdn.prismic.io\u002Fapi\u002Fv2\u002Fdocuments\u002Fsearch?ref=ZfMt9RIAACoAXFS1&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZNaWixIAACgARefE%22%29+%5D%5D",tags:["COSMIC DE"],first_publication_date:"2023-08-11T21:26:22+0000",last_publication_date:"2024-03-14T17:02:49+0000",slugs:[],linked_documents:[],lang:"en-us",alternate_languages:[],data:{title:[{type:"heading1",text:l,spans:[]}],description:[{type:b,text:m,spans:[]}],image:{dimensions:{width:1600,height:800},alt:a,copyright:a,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002F216398ce-7b8d-4fbc-b60f-da6f76f62e54_image6.png?auto=compress,format&rect=333,0,1334,667&w=1600&h=800",id:k,edit:{x:-399,y:c,zoom:1.199400299850075,background:d}},date:"2023-08-11T21:00:00+0000",slices:[{variation:"full-width",version:g,items:[{}],primary:{image:{dimensions:{width:3840,height:1280},alt:a,copyright:a,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002F216398ce-7b8d-4fbc-b60f-da6f76f62e54_image6.png?auto=compress,format&rect=0,1,1999,666&w=3840&h=1280",id:k,edit:{x:c,y:-1,zoom:1.9209604802401201,background:d},small:{dimensions:{width:768,height:s},alt:a,copyright:a,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002F216398ce-7b8d-4fbc-b60f-da6f76f62e54_image6.png?auto=compress,format&rect=499,0,1001,667&w=768&h=512",id:k,edit:{x:-383,y:c,zoom:.767616191904048,background:d}}},showAlt:true},id:"post_image$a1f327d4-e4a6-4603-a9b6-5bfbe122684e",slice_type:n,slice_label:a},{variation:o,version:g,items:[{}],primary:{text:[{type:b,text:"It’s Back to School season, so grab yourself a brand new discounted computer and let’s get back to COSMIC class! Our new, not yet released Rust-based desktop environment for Pop!_OS and other Linux distros is filling out with some essential systems that cater the DE to both users and developers alike. Customization is one of our main focuses for COSMIC, and was a huge focus for us in August, too.",spans:[]},{type:h,text:"COSMIC Appearance",spans:[]},{type:b,text:"One of our objectives early on was to provide an easy and meaningful way to personalize your desktop’s appearance. In order to build customization into the foundation of COSMIC DE, we needed to make sure the design system was themeable.",spans:[]},{type:i,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002F3e6541a3-50ee-4ea4-ab48-9641ad8dbb35_image2.png?auto=compress,format",alt:j,copyright:a,dimensions:{width:854,height:851},id:"ZNaVPBIAACwAReHd",edit:{x:c,y:c,zoom:e,background:d}},{type:b,text:"You’ll be able to customize how your system looks directly in COSMIC Settings. Beyond changing from Dark to Light mode and choosing an accent color you can change the application background, interface text palette tint and neutral palette tint. You’ll also be able to choose one of the three styles for the corner radii used throughout the interface and set an interface density.",spans:[]},{type:i,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002F0aa47396-3fea-41d3-a27f-28221dcdf5b1_image5.png?auto=compress,format",alt:j,copyright:a,dimensions:{width:p,height:q},id:"ZNaVPBIAACsAReHf",edit:{x:c,y:c,zoom:e,background:d}},{type:b,text:"To ensure those options work seamlessly, the design system is architected a certain way. Nothing in the components of the design system is meant to be hard-coded. So the system relies on using variables not merely for colors but also for spacing, icon sizing and corner radii.",spans:[]},{type:i,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fb6149e8b-6356-4719-aade-32eba9a5b5c9_image3.png?auto=compress,format",alt:j,copyright:a,dimensions:{width:p,height:q},id:"ZNaVPBIAACwAReHc",edit:{x:c,y:c,zoom:e,background:d}},{type:b,text:"One of the challenges in color customization relates to maintaining necessary color contrast while giving enough freedom to create. To solve for this, theme colors are automatically derived from the few base colors you can customize. For example, when you select a specific application background color, the system uses it to derive colors for other surfaces and text placed on those surfaces. When you choose a text tint color, the text colors automatically adjust to use this tint. Neutral tint color brings subtle tint into various widgets, including background and text in search input and tabs. To achieve this result we convert the selected custom color from sRGB to OKLCH and manipulate the color lightness value while keeping its hue and chroma values the same.",spans:[]},{type:i,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fb15af196-3dde-4204-9320-b535a633a8d1_image1.png?auto=compress,format",alt:j,copyright:a,dimensions:{width:p,height:q},id:"ZNaVPBIAACwAReHe",edit:{x:c,y:c,zoom:e,background:d}},{type:b,text:f,spans:[]},{type:b,text:"Most of the calculations that happen in the background have been implemented, including customization of colors. We’ve also incorporated spacing and corner radii variables, and are working towards corner radii styles and density options as well.",spans:[]},{type:b,text:f,spans:[]},{type:h,text:"COSMIC Application API",spans:[]},{type:b,text:"We added an application API to the libcosmic widget library to provide a framework for developing applications and applets in COSMIC DE. It automates integration with COSMIC theme support, along with Wayland protocols, COSMIC’s configuration back-end, and common application elements like header bars and navigation. For application developers, this means convenient development without having to worry about managing the low-level desktop and window manager integrations. For us, this ensures consistency across COSMIC applications and applets.",spans:[]},{type:b,text:f,spans:[]},{type:h,text:"Tiling with mouse",spans:[]},{type:b,text:"Mouse-driven tiling has been designed and implemented alongside keyboard tiling as two parts of the same feature. While a window is being tiled with the mouse, indicators show which windows are grouped together, while a transparent background instructs how that window will be arranged in its new position.",spans:[]},{type:"embed",oembed:{type:"video",embed_url:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=EI4j6teJeU0",title:"New COSMIC Feature: Tiling with Mouse",provider_name:"YouTube",thumbnail_url:"https:\u002F\u002Fi.ytimg.com\u002Fvi\u002FEI4j6teJeU0\u002Fhqdefault.jpg",version:"1.0",author_name:"System76",author_url:"https:\u002F\u002Fwww.youtube.com\u002F@System76",provider_url:"https:\u002F\u002Fwww.youtube.com\u002F",cache_age:a,thumbnail_width:480,thumbnail_height:360,html:"\u003Ciframe width=\"200\" height=\"113\" src=\"https:\u002F\u002Fwww.youtube.com\u002Fembed\u002FEI4j6teJeU0?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen title=\"New COSMIC Feature: Tiling with Mouse\"\u003E\u003C\u002Fiframe\u003E"}},{type:b,text:"See the image below for an explanation of how target zones for the cursor determine where the window will be placed.",spans:[]},{type:i,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002F0f8e9b09-10f5-4d1a-bcfa-fe72e109bafd_image8.png?auto=compress,format",alt:j,copyright:a,dimensions:{width:s,height:384},id:"ZNaVPBIAAC4AReHh",edit:{x:c,y:c,zoom:e,background:d}},{type:b,text:f,spans:[]},{type:b,text:"In addition to these zones, a window may be placed between two windows to create a new column in the tiling grid.",spans:[]},{type:b,text:f,spans:[]},{type:b,text:"Switching between mouse and keyboard tiling should feel seamless, so while implementing the design we cut out duplicate code between the two features. “The result also turned out to be much more readable tiling code,” says Victoria, a System76 engineer who worked on the implementation. “Tiling is one of the most complex parts of our shell, so that was a personal highlight for me.”",spans:[]},{type:b,text:f,spans:[]},{type:h,text:"Notifications Center",spans:[]},{type:b,text:"The notifications applet has been integrated into COSMIC DE! Unlike in Pop!_OS 22.04 LTS, notifications exist in their own applet, separate from your calendar. In addition, multiple notifications from the same application will stack in the notifications center, reducing clutter. See it in action below:",spans:[]}]},id:"post_copy$69efc881-1c0f-46fa-b2d2-c7b22a03ab91",slice_type:r,slice_label:a},{variation:t,version:g,items:[{}],primary:{image:{dimensions:{width:u,height:v},alt:a,copyright:a,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fbadb1666-3356-441c-926f-7a02d080ef90_image7.png?auto=compress,format",id:"ZNaVPBIAACoAReHi",edit:{x:c,y:c,zoom:e,background:d}}},id:"post_image$c02a0b83-09c0-44ba-98e6-f62624425400",slice_type:n,slice_label:a},{variation:o,version:g,items:[{}],primary:{text:[{type:h,text:"User Permissions",spans:[]},{type:b,text:"Applications require a user’s permission to perform certain functions, such as using the microphone for a virtual chat in Jitsi or Zoom. Keeping applications isolated from these functions protects your privacy by requiring your consent to access processes that may otherwise feel invasive or leave your system vulnerable. COSMIC DE now uses a Polkit agent, which facilitates communication between applications and your system, and prompts you for your password when a task requires your special permission to proceed.",spans:[]}]},id:"post_copy$88595341-9038-4481-b246-50a0c5036ad7",slice_type:r,slice_label:a},{variation:t,version:g,items:[{}],primary:{image:{dimensions:{width:u,height:v},alt:a,copyright:a,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002F66b7c67f-af46-444f-980c-080fc13c1cc3_image4.png?auto=compress,format",id:"ZNaVPBIAAC0AReHj",edit:{x:c,y:c,zoom:e,background:d}}},id:"post_image$5d00c96d-2080-417f-ae4b-226f0214bd30",slice_type:n,slice_label:a},{variation:o,version:g,items:[{}],primary:{text:[{type:h,text:"Xwayland fixes for pop-ups and drop downs",spans:[]},{type:b,text:"Xwayland is a compatibility layer between applications using the X compositor and the Wayland compositor\u002Fdisplay server used in COSMIC DE. The compositor connects your mouse clicks to what’s being displayed on screen so that the correct action takes place — making compatibility between the two of the utmost importance. X application menus were sometimes not opening when clicked, and experienced further issues after being moved to another display. We’ve implemented a number of fixes to address these bugs.",spans:[]},{type:b,text:f,spans:[]},{type:b,text:"That’s all the updates we have for now. There was a lot of juicy info; we hope you took notes! Tune into next month’s class for another lesson in COSMIC DE!",spans:[]}]},id:"post_copy$fb36aff8-7e4e-46d8-81c2-6cb34fcfb6a5",slice_type:r,slice_label:a}],socialText:a,socialLinks:[{link:{}}],seoTitle:l,seoDescription:m,seoSocial:[{image:{dimensions:{width:1200,height:600},alt:a,copyright:a,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002F216398ce-7b8d-4fbc-b60f-da6f76f62e54_image6.png?auto=compress,format&rect=332,0,1334,667&w=1200&h=600",id:k,edit:{x:-299,y:c,zoom:.8995502248875562,background:d}},title:l,description:m}]}},_img:{}}],fetch:{},mutations:void 0}}(null,"paragraph",0,"transparent",1,"","sktwi1xtmkfgx8626","heading2","image","Image","ZNaVPBIAACsAReHg","Customizing COSMIC: Theming and Applications","August updates on COSMIC DE include new systems for theming, third-party apps, tiling, and more!","post_image","default-slice",1514,920,"post_copy",512,"free-width",1920,1080)));