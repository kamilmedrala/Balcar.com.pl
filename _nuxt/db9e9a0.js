(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{394:function(t,e,l){"use strict";l.r(e);l(85);var r={props:{title:{type:String},bgImage:{}},computed:{isJobOffer:function(){return this.$route.fullPath.startsWith("/praca/")&&this.$route.fullPath.length>7}}},n=l(4),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"relative flex items-end w-full min-h-[300px] md:min-h-[400px] py-12 mb-10 md:mb-20"},[e("div",{staticClass:"custom-container relative z-20"},[t.title?e("h1",{staticClass:"text-5xl md:text-6xl md:pl-5 text-white"},[t._v("\n        "+t._s(t.title)+"\n      ")]):t._e()]),t._v(" "),e("div",{staticClass:"absolute inset-0 z-0 bg-gray-light md:left-10 xl:left-20 overflow-hidden"},[e("EffectParallax",{attrs:{parallaxOffset:100}},[t.bgImage&&t.bgImage.url?e("nuxt-picture",{staticClass:"w-full h-full object-cover",attrs:{alt:t.bgImage.alt?t.bgImage.alt:"Balcar F.H.U image",src:t.bgImage.url,format:"webp",fit:"cover",loading:"eager",imgAttrs:{class:"object-cover w-full h-full"}}}):t._e()],1),t._v(" "),e("div",{staticClass:"absolute inset-0 z-10 bg-gray-dark/50"})],1)]),t._v(" "),t.isJobOffer?e("div",{staticClass:"custom-container"},[e("nuxt-link",{staticClass:"text-gold-light items-center group hovertext-gold-dark transition duration-200 flex w-fit mb-10",attrs:{to:"/praca"}},[e("svg",{staticClass:"rotate-180 mr-5 fill-gold-light transition duration-200 group-hover:-translate-x-2",attrs:{width:"18",height:"16",viewBox:"0 0 24 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M15.6 0.111816L14.2742 1.43762L19.899 7.06244H0.513672V8.9375H19.8988L14.2742 14.5621L15.6 15.8879L23.4882 7.99988L15.6 0.111816Z"}})]),t._v("\n        Wróć do ofert\n      ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EffectParallax:l(247).default})}}]);