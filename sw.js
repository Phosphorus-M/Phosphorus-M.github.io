if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,d)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>i(e,o),t={module:{uri:o},exports:r,require:c};s[o]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(d(...e),r)))}}define(["./workbox-e69989d3"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"2018/09/17/SegundoDia/index.html",revision:"53c60331546a48600d34469852872ee2"},{url:"2018/09/index.html",revision:"1053cbded45472583300d600e89206b0"},{url:"2018/index.html",revision:"1053cbded45472583300d600e89206b0"},{url:"blog/index.html",revision:"778f391327de8c5f5b865d1abec72cf1"},{url:"categories/100DaysOfCode/index.html",revision:"1053cbded45472583300d600e89206b0"},{url:"css/pages/home.css",revision:"50a5d3c9cd78e3121f68d5030ffb1a6a"},{url:"css/pages/index.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/phosphorus.css",revision:"c1895af59c42c5d65819cf2a8e97ef90"},{url:"css/tailwind.css",revision:"83dd49c418e737726283bf2eb7bcd551"},{url:"experience/index-1.html",revision:"59e9b233c09e9685afee76641e312f06"},{url:"experience/index.html",revision:"bdd3faa018c6fff328eae9e3f7a25bf0"},{url:"index.html",revision:"1053cbded45472583300d600e89206b0"},{url:"js/info.js",revision:"29be3fd9b0d26b81ee29e66b6f5d63b0"},{url:"js/minimasonry.min.js",revision:"e2b83790fe961f78b47dede5d08c6efb"},{url:"js/proton.min.js",revision:"ef7918ff71b7dd31b90d9a85e91db3eb"},{url:"js/scrollanimation.js",revision:"9a76064cffcefb261cd9e9b3d99ca164"},{url:"js/stats.min.js",revision:"51add810e791d5bcd0668baea217ce5a"},{url:"list-of-post/index.html",revision:"1b9ba3fbe4f264a2ca66466d10084ee1"},{url:"manifest.json",revision:"096b260515668656af306b3b60e281df"},{url:"tags/100DaysOfCode/index.html",revision:"1053cbded45472583300d600e89206b0"},{url:"tags/challenge/index.html",revision:"1053cbded45472583300d600e89206b0"},{url:"tags/development/index.html",revision:"1053cbded45472583300d600e89206b0"},{url:"tags/GitHub/index.html",revision:"1053cbded45472583300d600e89206b0"},{url:"tags/Java/index.html",revision:"1053cbded45472583300d600e89206b0"},{url:"tags/repositorios/index.html",revision:"1053cbded45472583300d600e89206b0"}],{}),e.registerRoute("/",new e.NetworkFirst({cacheName:"index",plugins:[]}),"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]}),new e.ExpirationPlugin({maxAgeSeconds:31536e3})]}),"GET")}));
//# sourceMappingURL=sw.js.map
