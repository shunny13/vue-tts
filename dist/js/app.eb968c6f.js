(function(){"use strict";var t={7596:function(t,e,n){var o=n(144),r=n(998),a=n(2928),i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(r.Z,[e(a.Z,[e("router-view")],1)],1)},s=[],c=o.ZP.extend({name:"App",data:()=>({})}),u=c,l=n(1001),d=(0,l.Z)(u,i,s,!1,null,null,null),p=d.exports,f=n(8345),h=n(1653),m=n(5697),v=n(3323),b=n(1267),y=n(4324),x=n(3201),g=n(9258),w=n(9884),Z=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"home"},[t._m(0),e(v.Z,[e(w.Z,{attrs:{label:"Description",placeholder:"Enter text here",outlined:"",clearable:"",filled:"","no-resize":"",rows:"10",hint:"Maximum 1000 characters","persistent-hint":"",counter:"1000","max-length":1e3},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),e(v.Z,[e(x.Z,{attrs:{row:"","justify-center":""}},[e(b.Z,{attrs:{xs4:""}},[e(m.Z,{attrs:{color:"primary",block:""},on:{click:t.checkText}},[e(y.Z,{attrs:{left:""}},[t._v("mdi-bullhorn-variant-outline")]),t._v("Convert")],1)],1),e(b.Z,{staticClass:"ml-2",attrs:{xs4:""}},[e(m.Z,{attrs:{color:"primary","prepend-icon":"mdi-export-variant",block:"",loading:t.loadingDownload},on:{click:t.download}},[e(y.Z,{attrs:{left:""}},[t._v("mdi-download")]),t._v("Download")],1)],1)],1)],1),e(v.Z,[t.text.length>1e3?e(h.Z,{attrs:{color:"error",icon:"$error",title:"Alert title"}},[t._v("Max 1000 characters !")]):t._e()],1),e(g.Z,{attrs:{timeout:3e3,"multi-line":""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" The sound isn't ready yet ! ")]),e(g.Z,{attrs:{timeout:3e3,"multi-line":""},model:{value:t.isEmpty,callback:function(e){t.isEmpty=e},expression:"isEmpty"}},[t._v(" No text ! ")]),e(g.Z,{attrs:{timeout:3e3,"multi-line":""},model:{value:t.tooMany,callback:function(e){t.tooMany=e},expression:"tooMany"}},[t._v(" Too many characters ! ( max 1000 ) ")])],1)},_=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("h1",{staticClass:"text-center"},[t._v("Convert text to sound")])])}],k=n(5121);const P="2abbc91987mshf3a7210e3ca5befp1fe459jsndf2317fcbf98";var j={async scrape(t){const e={method:"POST",url:"https://large-text-to-speech.p.rapidapi.com/tts",headers:{"content-type":"application/json","X-RapidAPI-Key":P,"X-RapidAPI-Host":"large-text-to-speech.p.rapidapi.com"},data:{text:t}};try{const t=await k.Z.request(e);return t}catch(n){console.error(n)}},async downloadVideo(t){const e={method:"GET",url:"https://large-text-to-speech.p.rapidapi.com/tts",params:{id:t},headers:{"X-RapidAPI-Key":P,"X-RapidAPI-Host":"large-text-to-speech.p.rapidapi.com"}};try{const t=await k.Z.request(e);return t}catch(n){console.error(n)}}},O=o.ZP.extend({name:"HomeVue",data(){return{text:"",idAnswer:"",loadingDownload:!1,snackbar:!1,isEmpty:!1,tooMany:!1}},methods:{checkText(){0===this.text.length?this.isEmpty=!0:this.text.length<=1e3?(this.loadingDownload=!0,j.scrape(this.text).then((t=>{t&&(this.idAnswer=t.data.id,this.loadingDownload=!1)}))):this.tooMany=!0},download(){j.downloadVideo(this.idAnswer).then((t=>{t&&(t.data.url?window.open(t.data.url,"_blank"):this.snackbar=!0)}))}},components:{}}),T=O,A=(0,l.Z)(T,Z,_,!1,null,null,null),E=A.exports;o.ZP.use(f.ZP);const C=[{path:"/",name:"home",component:E},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,3564))}],M=new f.ZP({mode:"history",base:"/vue-tts/",routes:C});var S=M,D=n(629);o.ZP.use(D.ZP);var I=new D.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),N=n(8864);o.ZP.use(N.Z);var R=new N.Z({});o.ZP.config.productionTip=!1,new o.ZP({router:S,store:I,vuetify:R,render:t=>t(p)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var i=1/0;for(l=0;l<t.length;l++){o=t[l][0],r=t[l][1],a=t[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var u=r();void 0!==u&&(e=u)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.33528b56.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="text-to-speach:";n.l=function(o,r,a,i){if(t[o])t[o].push(r);else{var s,c;if(void 0!==a)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=o),t[o]=[r];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(f);var r=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/vue-tts/"}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(e),s=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,i=o[0],s=o[1],c=o[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(e&&e(o);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},o=self["webpackChunktext_to_speach"]=self["webpackChunktext_to_speach"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7596)}));o=n.O(o)})();
//# sourceMappingURL=app.eb968c6f.js.map