__NUXT_JSONP__("/post/cosmic-de-tiling-redesign-and-libcosmic-rebasing", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {data:[{post:{id:"ZIsyXBIAACkAq5DT",uid:n,url:b,type:"post",href:"https:\u002F\u002Fblog-system76.cdn.prismic.io\u002Fapi\u002Fv2\u002Fdocuments\u002Fsearch?ref=ZIt8DhIAACoArNw1&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZIsyXBIAACkAq5DT%22%29+%5D%5D",tags:[],first_publication_date:o,last_publication_date:o,slugs:[n],linked_documents:[],lang:"en-us",alternate_languages:[],data:{title:[{type:"heading1",text:h,spans:[]}],description:[{type:a,text:i,spans:[{start:0,end:91,type:p}]}],image:{dimensions:{width:1600,height:j},alt:e,copyright:b,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fe48e099c-8727-4035-8f17-3fd25603187f_Cosmic+Header-+June+Update.png?auto=compress,format&rect=640,0,2560,1280&w=1600&h=800"},date:"2023-06-15T07:00:00+0000",slices:[{variation:"full-width",version:k,items:[{}],primary:{image:{dimensions:{width:3840,height:1280},alt:e,copyright:b,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fe48e099c-8727-4035-8f17-3fd25603187f_Cosmic+Header-+June+Update.png?auto=compress,format&rect=0,0,3840,1280&w=3840&h=1280",small:{dimensions:{width:768,height:q},alt:e,copyright:b,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fe48e099c-8727-4035-8f17-3fd25603187f_Cosmic+Header-+June+Update.png?auto=compress,format&rect=960,0,1920,1280&w=768&h=512"}},showAlt:b},id:"post_image$3cc02882-c1c9-4388-bc25-fb5b91d99ab7",slice_type:"post_image",slice_label:b},{variation:r,version:k,items:[{}],primary:{text:[{type:a,text:"It’s June, swimming pools are open, and System76 engineers have been swimming through our starry new desktop environment for another month now. While our COSMIC team builds out new features and functions, they’re also tackling areas to improve their workflow — putting COSMIC on the fast track to its first alpha release when it’s ready! Code is being revisited and condensed for better performance, and completed pieces are being revised with numerous fixes. The cosmic-comp compositor supports rotated displays now. Piece-by-piece, it’s becoming a happier workflow for the team!",spans:[{start:464,end:475,type:c,data:{link_type:d,url:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Fcosmic-comp",target:s}},{start:487,end:q,type:c,data:{link_type:d,url:"https:\u002F\u002Fgithub.com\u002FSmithay\u002Fsmithay\u002Fpull\u002F1039",target:s}}]},{type:a,text:f,spans:[]},{type:a,text:"One piece in particular put some pep in the engineers' steps this month: Tiling.",spans:[]},{type:a,text:f,spans:[]},{type:l,text:"TILING!",spans:[]},{type:a,text:"Pop!_OS auto-tiling brought users a fast way to arrange windows on their desktop. For its next evolution, the main goal is to make tiling more accessible based on feedback we received from our users. For a more intuitive tiling, we’re honing our approach to movement, visual guides, and layout flexibility.",spans:[]},{type:a,text:"First and foremost, COSMIC tiling will do away with adjustment mode. Currently, Pop!_OS 22.04 LTS uses adjustment mode (Super + Enter) to arrange or resize tiled windows. Being its own dedicated mode allowed flexibility with tiling keyboard shortcuts, but also meant an extra step for users. Removing that extra step integrates tiling closer to your workflow and allows you to perform that action quickly.",spans:[]},{type:a,text:"A single shortcut for moving windows is easier to remember than a sequence of them. At any point, you can simply use Shift + Super + Arrows to rearrange your selected window, group, or stack, and use Super + Arrows to select a different window to be moved. If there is a workspace or display in the direction of the arrow pressed, the window or focus will migrate to that screen",spans:[]},{type:g,url:"https:\u002F\u002Fprismic-io.s3.amazonaws.com\u002Fblog-system76\u002F7f36a17f-7be4-4d99-839b-ef18af0c34a1_cosmic+tiling.gif",alt:m,copyright:b,dimensions:{width:j,height:t}},{type:a,text:"From there, the team focused on making it easier to understand how the window will move. In the above video, windows scale down slightly and the background becomes solid to show that they’re being adjusted. The arrow keys used determine what direction the window will move. You’ll see a dark grey border around an adjacent window to show the potential for grouping.",spans:[{start:63,end:66,type:p}]},{type:g,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002F05843635-bbe2-4c35-869d-e684c3a6e47c_image2.png?auto=compress,format",alt:"screenshot",copyright:b,dimensions:{width:1920,height:1080}}]},id:"post_copy$efc76043-f34b-48ea-8a1b-3b3945e51cd6",slice_type:u,slice_label:b},{variation:r,version:k,items:[{}],primary:{text:[{type:a,text:"Groups are marked by a light grey outline around two or more windows. When adjusting a window, only windows within the group will see movement; your layout outside the group will remain unaffected. You’ll also be able to move, rotate, or resize windows in the group simultaneously, stack them together, and migrate them to another workspace or display.",spans:[]},{type:a,text:"The basic idea behind this tiling revamp is that if you want a certain layout, you can achieve it by simply moving your window in the intended direction. This makes layouts more flexible and different kinds more attainable, like arranging three windows in equal thirds of the screen.",spans:[]},{type:g,url:"https:\u002F\u002Fprismic-io.s3.amazonaws.com\u002Fblog-system76\u002F1e23e60f-c003-4754-9ee9-16d61ab22955_cosmic+stacking.gif",alt:m,copyright:b,dimensions:{width:j,height:t}},{type:a,text:"Victoria, one of our engineers, says she personally finds this system to be much more intuitive — and it will only get better from here. As mentioned earlier, these designs have already been implemented on the engineering side into the current build of COSMIC. Revised shortcuts are subject to change before release, but we have a list ready if you want to prepare for the transition! Keep an eye out for additional updates to tiling with keyboard, as well as new designs for tiling with your mouse.",spans:[{start:329,end:341,type:c,data:{link_type:d,url:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Fcosmic-epoch\u002Fissues\u002F46"}},{start:427,end:447,type:c,data:{link_type:d,url:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Fcosmic-epoch\u002Fissues\u002F36#issuecomment-1581801813"}}]},{type:l,text:"STACKING",spans:[]},{type:a,text:"Window stacks combine windows of one or multiple applications like tabs in a web browser. In COSMIC, they’ll be marked with an icon on the header bar, providing an area for moving the whole stack at once with your mouse.",spans:[]},{type:g,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002F2ceca5cb-8b09-4826-a84c-19cbdb85845d_image3.png?auto=compress,format",alt:m,copyright:b,dimensions:{width:1554,height:704}},{type:a,text:"Your selected tab, meanwhile, will be indicated by an accent color to help it stand out visually. From your selected tab in a window stack, you can use the selection shortcut to select the entire stack, and then arrange it as a whole. When a stack has too many tabs, clicking an arrow on the header will cycle through the extras. Take a look!",spans:[{start:156,end:174,type:c,data:{link_type:d,url:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Fcosmic-epoch\u002Fissues\u002F38"}},{start:330,end:342,type:c,data:{link_type:d,url:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Fcosmic-epoch\u002Fissues\u002F39"}}]},{type:a,text:f,spans:[]},{type:l,text:"REBASING THE WIDGET LIBRARY",spans:[]},{type:a,text:"The widget library for COSMIC DE, libcosmic, currently uses an older version of the Iced toolkit. By rebasing libcosmic with a newer version, the pieces made so far have become more efficient and much easier to integrate with one another. Updating the compositor with the new version was great for performance, and allowed the team to integrate animations from cosmic-time into the tiling manager.",spans:[{start:361,end:372,type:c,data:{link_type:d,url:"https:\u002F\u002Fgithub.com\u002Fpop-os\u002Fcosmic-time"}}]},{type:a,text:f,spans:[]},{type:a,text:"That’s it for this month’s updates on COSMIC, our new desktop environment written in the Rust programming language for Pop!_OS (and more)! We’ll be back in July with a fresh batch of juicy details that are best consumed on a hot summer day.",spans:[]}]},id:"post_copy$bfb4c203-4fc5-43cb-aaa1-696e80ea44a3",slice_type:u,slice_label:b}],socialText:b,socialLinks:[{link:{}}],seoTitle:h,seoDescription:i,seoSocial:[{image:{dimensions:{width:1200,height:600},alt:e,copyright:b,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fe48e099c-8727-4035-8f17-3fd25603187f_Cosmic+Header-+June+Update.png?auto=compress,format&rect=640,0,2560,1280&w=1200&h=600"},title:h,description:i}]}},_img:{}}],fetch:{},mutations:void 0}}("paragraph",null,"hyperlink","Web","COSMIC JUNE UPDATES","","image","COSMIC DE: Tiling redesign and libcosmic rebasing","Initial tiling designs + rebasing the widget library = a group of happy System76 engineers.",800,"sktwi1xtmkfgx8626","heading2","Image","cosmic-de-tiling-redesign-and-libcosmic-rebasing","2023-06-15T21:01:02+0000","em",512,"default-slice","_blank",450,"post_copy")));