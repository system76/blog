__NUXT_JSONP__("/post/major-updates-for-system76-open-firmware-june-2023", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{post:{id:"ZHajGhIAACsA3auO",uid:"major-updates-for-system76-open-firmware-june-2023",url:c,type:"post",href:"https:\u002F\u002Fblog-system76.cdn.prismic.io\u002Fapi\u002Fv2\u002Fdocuments\u002Fsearch?ref=ZXh6oREAACwAJXwL&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22ZHajGhIAACsA3auO%22%29+%5D%5D",tags:[],first_publication_date:o,last_publication_date:o,slugs:["major-updates-for-system76-open-firmware"],linked_documents:[],lang:"en-us",alternate_languages:[],data:{title:[{type:"heading1",text:l,spans:[]}],description:[{type:a,text:m,spans:[]}],image:{dimensions:{width:1600,height:800},alt:c,copyright:c,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fc307b1d4-413b-4910-9f6f-aa7b2a247f83_firmware-header.png?auto=compress,format&rect=640,0,2560,1280&w=1600&h=800",id:k,edit:{x:-400,y:b,zoom:.625,background:i}},date:"2023-06-02T13:00:00+0000",slices:[{variation:"full-width",version:p,items:[{}],primary:{image:{dimensions:{width:3840,height:1280},alt:c,copyright:c,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fc307b1d4-413b-4910-9f6f-aa7b2a247f83_firmware-header.png?auto=compress,format&rect=0,0,3840,1280&w=3840&h=1280",id:k,edit:{x:b,y:b,zoom:n,background:i},small:{dimensions:{width:q,height:512},alt:c,copyright:c,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fc307b1d4-413b-4910-9f6f-aa7b2a247f83_firmware-header.png?auto=compress,format&rect=960,0,1920,1280&w=768&h=512",id:k,edit:{x:-384,y:b,zoom:.4,background:i}}},showAlt:c},id:"post_image$c22ea0e6-b11b-4842-b952-ccf07ab5ea95",slice_type:"post_image",slice_label:c},{variation:"default-slice",version:p,items:[{}],primary:{text:[{type:a,text:"We’re constantly making improvements to our products to provide the best experience for users. Last week, we introduced new functionality to our 13th Gen Intel laptops with System76 Open Firmware. If you have a CPU from a previous generation, take a look at our firmware matrix to see which updates are available on your system. We’ll be adding these changes to previous generations over time.",spans:[{start:262,end:277,type:f,data:{link_type:g,url:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Ffirmware-open\u002Fblob\u002Fmaster\u002FFEATURES.md",target:h}}]},{type:d,text:"Re-disabled Intel Management Engine",spans:[{start:b,end:35,type:e}]},{type:a,text:"We prefer to disable the Intel Management Engine wherever possible to reduce the amount of closed firmware running on System76 hardware. We’ve resolved a coreboot bug that allows the Intel ME (Management Engine) to once again be disabled.",spans:[]},{type:a,text:"This bug was a buffer overflow which caused coreboot firmware memory to be overwritten by the TPM measurement log, keeping the S3 suspend method from working properly. As a result of this, we had to switch from S3 to S0ix suspend, which required use of the Intel ME in order for OS-level drivers to function.",spans:[]},{type:a,text:"By fixing this bug, we were able to move back to S3 and re-disable the Intel ME on most platforms. (However, S3 suspend is not functional in the silicon we received for 11th Gen (Tiger Lake) U-class CPUs.) This fix was submitted upstream to coreboot as well.",spans:[]},{type:a,text:r,spans:[{start:b,end:s,type:f,data:{link_type:g,url:r,target:h}}]},{type:a,text:j,spans:[]},{type:d,text:"Windows 11 & Secure Boot support",spans:[{start:b,end:32,type:e}]},{type:a,text:"Windows 11 requires Secure Boot to install without tweaks. To support this, we’ve added a new firmware setup menu for enabling and disabling Secure Boot. This menu also allows for entering setup mode for custom key enrollment.",spans:[]},{type:a,text:"Secure Boot and TPM2 support is now available in System76 Open Firmware on laptops with 13th Gen Intel CPUs. We'll be adding the feature to previous CPU generations over time.",spans:[]},{type:t,url:"https:\u002F\u002Fprismic-io.s3.amazonaws.com\u002Fblog-system76\u002F343cb448-67f4-4251-8968-55623f483f69_bios-image-galp7.png",alt:u,copyright:c,dimensions:{width:v,height:765},id:"ZHfTNREAACkAPGxH",edit:{x:b,y:b,zoom:n,background:i}},{type:a,text:"Work is being done in Pop!_OS to enable the use of custom Secure Boot keys, in addition to adding TPM2-TOTP authentication of the firmware boot path.\n\nsystem76\u002Fedk2#38",spans:[{start:151,end:167,type:f,data:{link_type:g,url:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fedk2\u002Fpull\u002F38",target:h}}]},{type:a,text:j,spans:[]},{type:d,text:"Increased battery power limits & CPU performance",spans:[{start:b,end:48,type:e}]},{type:a,text:"The standard battery power limit for the CPU was increased from 28W to 45W on the majority of our 13th Gen Intel systems, with some going as high as 55W. This significantly improves CPU performance on battery on H-class and higher CPUs. Many older systems will be getting updates in the near future as well. This change was done after an analysis of power capabilities when developing the new 13th Gen systems. Battery life should remain about the same for most use cases. The CPU will finish tasks faster with total energy used remaining roughly the same. Continuous tasks like gaming can draw more energy, but framerates will be higher.",spans:[]},{type:a,text:j,spans:[]},{type:d,text:"NVIDIA Dynamic Boost",spans:[{start:b,end:20,type:e}]},{type:a,text:"On new systems with the NVIDIA 40-Series GPUs, we’ve added new code in coreboot to enable NVIDIA Dynamic Boost, which allows power to be shared between the CPU and GPU. In practice, this means that your system can provide up to an additional 25W boost to the subsystem that needs it most, significantly improving throughput and framerates.",spans:[]},{type:a,text:j,spans:[]},{type:d,text:"Firmware Security Update",spans:[{start:b,end:24,type:e}]},{type:a,text:"Firmware for 13th Gen Intel (Raptor Lake) systems is locked while running, meaning it cannot be tampered with or overwritten. To unlock it, you must be physically present at your computer; you’ll be prompted to type a randomly generated number as confirmation to begin firmware flashing, and the system will reboot. Both EC firmware and system firmware are locked on any boots where the prompt is not shown.",spans:[]},{type:t,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fc9fb6ba0-a1c5-4565-a401-22418c34e3f6_image2.png?auto=compress,format",alt:u,copyright:c,dimensions:{width:v,height:q},id:"ZHaiqBIAACoA3amX",edit:{x:b,y:b,zoom:n,background:i}},{type:a,text:"system76\u002Ffirmware-setup#1",spans:[{start:b,end:25,type:f,data:{link_type:g,url:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Ffirmware-setup\u002Fpull\u002F18",target:h}}]},{type:d,text:"Fixes for soldered DDR5 memory initialization in coreboot",spans:[{start:b,end:57,type:e}]},{type:a,text:"The Lemur Pro (lemp12) laptop comes with one 8GB DDR5 DIMM (RAM stick) attached to the motherboard in addition to one DDR5 DIMM slot. We corrected issues with memory-down (memory soldered to the motherboard) DDR5 memory initialization on 12th and 13th Gen Intel (Alder Lake and Raptor Lake) platforms, ensuring future systems using this style of memory will be supported by coreboot.\n\nhttps:\u002F\u002Freview.coreboot.org\u002Fc\u002Fcoreboot\u002F+\u002F75135\nhttps:\u002F\u002Freview.coreboot.org\u002Fc\u002Fcoreboot\u002F+\u002F75284\nhttps:\u002F\u002Freview.coreboot.org\u002Fc\u002Fcoreboot\u002F+\u002F75283",spans:[{start:385,end:525,type:f,data:{link_type:g,url:"https:\u002F\u002Freview.coreboot.org\u002Fc\u002Fcoreboot\u002F+\u002F75135",target:h}}]},{type:a,text:j,spans:[]},{type:d,text:"Coreboot support for 13th Gen HX-class Intel processors",spans:[{start:b,end:55,type:e}]},{type:a,text:"13th Gen Intel (Raptor Lake) HX-class CPUs contain a dedicated Platform Controller Hub (PCH) to boost performance. Though Raptor Lake HX-class chips were somewhat supported on coreboot, we added model IDs for a vast number of CPU and PCH devices to ensure full support. As with our other coreboot work, this support will be upstreamed for the benefit of all coreboot users.\n\nhttps:\u002F\u002Freview.coreboot.org\u002Fc\u002Fcoreboot\u002F+\u002F72926\nhttps:\u002F\u002Freview.coreboot.org\u002Fc\u002Fcoreboot\u002F+\u002F73437\nhttps:\u002F\u002Freview.coreboot.org\u002Fc\u002Fcoreboot\u002F+\u002F75285",spans:[{start:154,end:162,type:"em"},{start:375,end:515,type:f,data:{link_type:g,url:"https:\u002F\u002Freview.coreboot.org\u002Fc\u002Fcoreboot\u002F+\u002F72926",target:h}}]},{type:a,text:j,spans:[]},{type:d,text:"Intel Discrete Thunderbolt driver for coreboot",spans:[{start:b,end:s,type:e}]},{type:a,text:"Our new laptops with 13th Gen Intel HX-class CPUs use a Maple Ridge discrete Thunderbolt controller to support Thunderbolt connectivity. This controller required changes in firmware to support setting the correct security state and enforcing the use of VT-d in the OS. The driver has been submitted upstream to coreboot for use in other systems using this Thunderbolt controller.\n\nhttps:\u002F\u002Freview.coreboot.org\u002Fc\u002Fcoreboot\u002F+\u002F75286",spans:[{start:381,end:427,type:f,data:{link_type:g,url:"https:\u002F\u002Freview.coreboot.org\u002Fc\u002Fcoreboot\u002F+\u002F75286",target:h}}]}]},id:"post_copy$ced1798c-3f54-4d0d-a50a-3d47061b9912",slice_type:"post_copy",slice_label:c}],socialText:c,socialLinks:[{link:{}}],seoTitle:l,seoDescription:m,seoSocial:[{image:{dimensions:{width:1200,height:600},alt:c,copyright:c,url:"https:\u002F\u002Fimages.prismic.io\u002Fblog-system76\u002Fc307b1d4-413b-4910-9f6f-aa7b2a247f83_firmware-header.png?auto=compress,format&rect=640,0,2560,1280&w=1200&h=600",id:k,edit:{x:-300,y:b,zoom:.46875,background:i}},title:l,description:m}]}},_img:{}}],fetch:{},mutations:void 0}}("paragraph",0,null,"heading2","strong","hyperlink","Web","_blank","transparent","","ZHeHNREAAC4AOxXC","Major Updates for System76 Open Firmware!","Read about the latest performance boosts, disabling Intel ME, Windows 11 support, and more!",1,"2023-06-02T12:57:01+0000","sktwi1xtmkfgx8626",768,"https:\u002F\u002Freview.coreboot.org\u002Fc\u002Fcoreboot\u002F+\u002F73297",46,"image","Image",1024)));