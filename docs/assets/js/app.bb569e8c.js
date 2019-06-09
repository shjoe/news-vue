(function(t){function e(e){for(var n,i,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)i=o[p],s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},s={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),s=r.n(n);s.a},"069b":function(t,e,r){},2044:function(t,e,r){},2908:function(t,e,r){"use strict";var n=r("069b"),s=r.n(n);s.a},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("a026"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("h1",[t._v("News Vue")]),r("Navigation"),r("router-view")],1)},a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nav",t._l(t.links,function(e){return r("router-link",{key:e.id,staticClass:"spacing",attrs:{to:""+e.page}},[t._v(t._s(e.text))])}),1)])},o=[],c={name:"Navigation",data(){return{links:[{id:0,text:"Home",page:"/"},{id:1,text:"Top News",page:"/topnews"}]}}},u=c,l=(r("9028"),r("2877")),p=Object(l["a"])(u,i,o,!1,null,null,null),f=p.exports,d={name:"app",components:{Navigation:f}},h=d,v=(r("034f"),Object(l["a"])(h,s,a,!1,null,null,null)),_=v.exports,m=r("8c4f"),b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"newsVue"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.findNews(e)}}},[r("p",[t._v("\n      Search news for:\n      "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"Enter a topic"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),r("button",{attrs:{type:"submit"}},[t._v("Search")])])]),t.showSpinner?r("spinner"):t._e(),t.articles&&t.articles.length>0?r("ul",{staticClass:"articles"},t._l(t.articles,function(e,n){return r("li",{key:n,staticClass:"articles"},[r("a",{staticClass:"articleLink",attrs:{href:e.url,target:"_blank"}},[r("img",{staticClass:"articleImage",attrs:{src:e.urlToImage}}),r("h3",[t._v(t._s(e.title))]),r("p",[t._v(t._s(e.description))]),r("p",{staticClass:"citation"},[t._v("Author: "+t._s(e.author)+" / Source: "+t._s(e.source.name))])])])}),0):t.articles&&0==t.articles.length?r("div",{staticClass:"no-articles"},[r("h2",[t._v("No News Found")]),r("p",[t._v("Please adjust your search to find more news.")])]):t._e(),r("error-list",{attrs:{errorList:t.errors}})],1)},g=[],w=r("bc3a"),y=r.n(w),k=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Loading...")]),r("div",{staticClass:"sk-folding-cube"},[r("div",{staticClass:"sk-cube1 sk-cube"}),r("div",{staticClass:"sk-cube2 sk-cube"}),r("div",{staticClass:"sk-cube4 sk-cube"}),r("div",{staticClass:"sk-cube3 sk-cube"})])])}],C={name:"Spinner"},N=C,x=(r("6767"),Object(l["a"])(N,k,S,!1,null,"026994b4",null)),j=x.exports,O=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.errorList.length>0?r("div",{staticClass:"errorsWrapper"},t._l(t.errorList,function(e,n){return r("p",{key:n,staticClass:"errors"},[t._v(t._s(e))])}),0):t._e()])},E=[],L={name:"ErrorList",data(){return{}},props:{errorList:Array}},T=L,q=(r("8c50"),Object(l["a"])(T,O,E,!1,null,"7359bea8",null)),P=q.exports;r("9ddc");var $={name:"NewsVue",components:{spinner:j},data(){return{results:null,articles:[],errors:[],query:[],showSpinner:!1}},methods:{findNews:function(){this.showSpinner=!0,y.a.get("https://newsapi.org/v2/everything?apiKey=84d4d2e235b442abbc10d838567c37da",{params:{q:this.query,sortBy:"popularity",pageSize:12}}).then(t=>{this.showSpinner=!1,this.articles=t.data.articles}).catch(t=>{this.showSpinner=!1,this.errors.push(t)})}},components:{spinner:j,"error-list":P}},A=$,I=(r("2908"),Object(l["a"])(A,b,g,!1,null,"5295cba8",null)),M=I.exports,V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"topNews"},[r("h2",[t._v("Top News")]),t.showSpinner?r("spinner"):t._e(),t.articles&&t.articles.length>0?r("ul",{staticClass:"articles"},t._l(t.articles,function(e,n){return r("li",{key:n,staticClass:"articles"},[r("a",{staticClass:"articleLink",attrs:{href:e.url,target:"_blank"}},[r("img",{staticClass:"articleImage",attrs:{src:e.urlToImage}}),r("h3",[t._v(t._s(e.title))]),r("p",[t._v(t._s(e.description))]),r("p",{staticClass:"citation"},[t._v("Author: "+t._s(e.author)+" / Source: "+t._s(e.source.name))])])])}),0):t._e(),r("error-list",{attrs:{errorList:t.errors}})],1)},z=[];r("9ddc");var J={name:"TopNews",components:{spinner:j},data(){return{results:null,articles:[],errors:[],query:[],showSpinner:!1}},methods:{getNews:function(){this.showSpinner=!0,y.a.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=84d4d2e235b442abbc10d838567c37da",{params:{pageSize:9}}).then(t=>{this.showSpinner=!1,this.articles=t.data.articles}).catch(t=>{this.showSpinner=!1,this.errors.push(t)})}},created:function(){this.getNews()},components:{spinner:j,"error-list":P}},K=J,B=(r("e390"),Object(l["a"])(K,V,z,!1,null,"1a4d12c2",null)),D=B.exports;n["a"].use(m["a"]);var F=new m["a"]({routes:[{path:"/",name:"NewsVue",component:M},{path:"/topnews",name:"TopNews",component:D}]});n["a"].config.productionTip=!1,new n["a"]({el:"#app",router:F,template:"<App/>",components:{App:_}})},"64a9":function(t,e,r){},6767:function(t,e,r){"use strict";var n=r("fb36"),s=r.n(n);s.a},"7fa9":function(t,e,r){},"8c50":function(t,e,r){"use strict";var n=r("fd6f"),s=r.n(n);s.a},9028:function(t,e,r){"use strict";var n=r("2044"),s=r.n(n);s.a},e390:function(t,e,r){"use strict";var n=r("7fa9"),s=r.n(n);s.a},fb36:function(t,e,r){},fd6f:function(t,e,r){}});
//# sourceMappingURL=app.bb569e8c.js.map