(function(t){function n(n){for(var r,a,s=n[0],c=n[1],u=n[2],f=0,d=[];f<s.length;f++)a=s[f],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(n);while(d.length)d.shift()();return i.push.apply(i,u||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,s=1;s<e.length;s++){var c=e[s];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={app:0},i=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var l=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"0433":function(t,n,e){"use strict";var r=e("aba2"),o=e.n(r);o.a},"52d1":function(t,n,e){t.exports=e.p+"img/back-right.78695f1c.svg"},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),o=e("bb71");e("da64");r["a"].use(o["a"],{iconfont:"md"});var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-content",[e("router-view")],1)],1)},a=[],s={name:"App",components:{},data:function(){return{}}},c=s,u=e("2877"),l=e("6544"),f=e.n(l),d=e("7496"),p=e("549c"),h=Object(u["a"])(c,i,a,!1,null,null,null),v=h.exports;f()(h,{VApp:d["a"],VContent:p["a"]});var b=e("8c4f"),g=function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.started?e("Director",{attrs:{runs:t.runs,"run-time":t.runTime,countdown:t.countdown},on:{click:t.stop,end:t.stop}}):e("v-container",[e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600",flat:""}},[e("v-subheader",{staticClass:"subheading font-weight-medium text-uppercase"},[t._v("\n      Pace\n    ")]),e("v-card-text",[e("v-layout",{attrs:{"justify-space-between":"","mb-3":""}},[e("v-flex",{attrs:{"text-xs-left":""}},[e("span",{staticClass:"subheading font-weight-light"},[t._v("\n            "+t._s(t.pace)+"\n          ")]),e("span",{staticClass:"caption font-weight-light mr-1"},[t._v("\n            seconds\n          ")])]),e("v-flex",{attrs:{"text-xs-right":""}},[e("span",{staticClass:"subheading font-weight-light"},[t._v("\n            "+t._s(Math.round(60/t.pace))+"\n          ")]),e("span",{staticClass:"caption font-weight-light mr-1"},[t._v("runs/minute")])])],1),e("v-slider",{attrs:{min:"2",max:"10",step:"0.5","always-dirty":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("v-icon",{on:{click:function(n){t.pace--}}},[t._v("\n            remove\n          ")])]},proxy:!0},{key:"append",fn:function(){return[e("v-icon",{on:{click:function(n){t.pace++}}},[t._v("\n            add\n          ")])]},proxy:!0}],null,!1,1058514392),model:{value:t.pace,callback:function(n){t.pace=n},expression:"pace"}})],1),e("v-subheader",{staticClass:"subheading font-weight-medium text-uppercase"},[t._v("\n      Runs\n    ")]),e("v-card-text",[e("v-layout",{attrs:{"justify-space-between":"","mb-3":""}},[e("v-flex",{attrs:{"text-xs-left":""}},[e("span",{staticClass:"subheading font-weight-light"},[t._v("\n            "+t._s(t.runs)+"\n          ")]),e("span",{staticClass:"caption font-weight-light mr-1"},[t._v("\n            run"+t._s(1===t.runs?"":"s")+"\n          ")])]),e("v-flex",{attrs:{"text-xs-right":""}},[e("span",{staticClass:"subheading font-weight-light"},[t._v("\n            "+t._s(Math.round(t.pace*t.runs))+"\n          ")]),e("span",{staticClass:"caption font-weight-light mr-1"},[t._v("\n            seconds\n          ")])])],1),e("v-slider",{attrs:{min:"1",max:"50",step:"1","always-dirty":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("v-icon",{on:{click:function(n){t.runs--}}},[t._v("\n            remove\n          ")])]},proxy:!0},{key:"append",fn:function(){return[e("v-icon",{on:{click:function(n){t.runs++}}},[t._v("\n            add\n          ")])]},proxy:!0}],null,!1,4178448408),model:{value:t.runs,callback:function(n){t.runs=n},expression:"runs"}})],1),e("v-subheader",{staticClass:"subheading font-weight-medium text-uppercase"},[t._v("\n      Countdown\n    ")]),e("v-card-text",[e("v-layout",{attrs:{"justify-space-between":"","mb-3":""}},[e("v-flex",{attrs:{"text-xs-left":""}},[e("span",{staticClass:"subheading font-weight-light"},[t._v("\n            "+t._s(t.countdown)+"\n          ")]),e("span",{staticClass:"caption font-weight-light mr-1"},[t._v("\n            seconds\n          ")])])],1),e("v-slider",{attrs:{min:"0",max:"120",step:"1","always-dirty":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("v-icon",{on:{click:function(n){t.countdown--}}},[t._v("\n            remove\n          ")])]},proxy:!0},{key:"append",fn:function(){return[e("v-icon",{on:{click:function(n){t.countdown++}}},[t._v("\n            add\n          ")])]},proxy:!0}],null,!1,204692248),model:{value:t.countdown,callback:function(n){t.countdown=n},expression:"countdown"}})],1),e("v-card-text",[e("v-btn",{attrs:{block:"",large:"",color:"blue"},on:{click:t.start}},[t._v("\n        Start\n      ")])],1)],1)],1)},m=[],y=e("67bc"),x=e.n(y),w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{fluid:"","fill-height":""},on:{click:function(n){return t.$emit("click",n)}}},[t.count>0?e("Message",{attrs:{message:t.count}}):e("Sign",{attrs:{direction:t.direction,"bounce-after":t.runTime-t.splitTime,"bounce-for":t.splitTime}})],1)},_=[],k=e("6ebd"),C=e.n(k),j=(e("c5f6"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("div",[e("h1",{staticClass:"display-4 blue--text"},[t._v(t._s(t.message))])])])],1)}),T=[],O={props:{message:{type:[String,Number],default:"Message"}},data:function(){return{}}},S=O,V=e("a523"),M=e("a722"),N=Object(u["a"])(S,j,T,!1,null,"2a923fa1",null),$=N.exports;f()(N,{VContainer:V["a"],VLayout:M["a"]});var A,E=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{style:t.styles.t},[e("v-container",{attrs:{fluid:"","fill-height":""}},[t.direction?e("v-layout",{class:t.classes.dir,style:t.styles.dir,attrs:{"align-center":"","justify-center":""}}):t._e()],1)],1)},P=[],B={props:{direction:{type:String},bounceAfter:{type:Number},bounceFor:{type:Number,default:500}},data:function(){return{bounce:!1}},computed:{classes:function(){return{dir:{bounce:this.bounce}}},styles:function(){return{dir:{background:"url(".concat(this.image,") center no-repeat"),"background-size":"contain","animation-duration":this.bounce?"".concat(this.bounceFor/1e3,"s"):"0s"},t:{height:"100%",width:"100%",background:"url(".concat(e("ebd1"),") center no-repeat"),"background-size":"cover"}}},image:function(){switch(this.direction){case"left":case"l":return e("c75b");case"right":case"r":return e("c917");case"front-left":case"fl":return e("870b");case"front-right":case"fr":return e("58a7");case"back-left":case"bl":return e("c589");case"back-right":case"br":return e("52d1");default:return e("bf9f")}}},mounted:function(){this.scheduleBounce()},destroyed:function(){void 0!==A&&(clearTimeout(A),A=void 0)},watch:{direction:function(){this.scheduleBounce()}},methods:{scheduleBounce:function(){var t=this;this.direction&&this.bounceAfter&&(this.bounce=!1,A=setTimeout(function(){t.bounce=!0},this.bounceAfter))}}},F=B,L=(e("0433"),Object(u["a"])(F,E,P,!1,null,"331f6f0c",null)),z=L.exports;f()(L,{VContainer:V["a"],VLayout:M["a"]});var D,J=0,q=["fl","fr","r","br","bl","l"],I={components:{Message:$,Sign:z},props:{splitTime:{type:Number,default:800},runTime:{type:Number,default:5e3},countdown:{type:Number,default:5},runs:{type:Number,default:12}},data:function(){return{count:this.countdown,run:0,direction:null}},mounted:function(){this.next()},destroyed:function(){void 0!==D&&(clearTimeout(D),D=void 0)},methods:{next:function(){var t=this;this.count>0?D=setTimeout(function(){t.count--,t.next()},1e3):this.run<this.runs?(this.run++,this.direction=null,J=Math.floor(Math.random()*q.length),C()(function(){return t.direction=q[J]}),D=setTimeout(function(){t.next()},this.runTime)):this.$emit("end")}}},R=I,G=Object(u["a"])(R,w,_,!1,null,"85ac7042",null),H=G.exports;f()(G,{VContainer:V["a"]});var K=new x.a,Q={components:{Director:H},data:function(){return{started:!1,pace:5,runs:12,countdown:5}},computed:{runTime:function(){return 1e3*this.pace}},destroyed:function(){this.stop()},methods:{start:function(){this.started=!0,K.enable()},stop:function(){this.started=!1,K.disable()}}},U=Q,W=e("8336"),X=e("b0af"),Y=e("99d9"),Z=e("0e8f"),tt=e("132d"),nt=e("ba0d"),et=e("e0c7"),rt=Object(u["a"])(U,g,m,!1,null,null,null),ot=rt.exports;f()(rt,{VBtn:W["a"],VCard:X["a"],VCardText:Y["a"],VContainer:V["a"],VFlex:Z["a"],VIcon:tt["a"],VLayout:M["a"],VSlider:nt["a"],VSubheader:et["a"]});var it=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},at=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an about page")])])}],st={},ct=Object(u["a"])(st,it,at,!1,null,null,null),ut=ct.exports;r["a"].use(b["a"]);var lt=new b["a"]({routes:[{path:"/",name:"home",component:ot},{path:"/about",name:"about",component:ut}]}),ft=e("9483");Object(ft["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({router:lt,render:function(t){return t(v)}}).$mount("#app")},"58a7":function(t,n,e){t.exports=e.p+"img/front-right.e7689762.svg"},"870b":function(t,n,e){t.exports=e.p+"img/front-left.88495d03.svg"},aba2:function(t,n,e){},bf9f:function(t,n,e){t.exports=e.p+"img/circle.b5af5b66.svg"},c589:function(t,n,e){t.exports=e.p+"img/back-left.93368d70.svg"},c75b:function(t,n,e){t.exports=e.p+"img/left.1229a71c.svg"},c917:function(t,n,e){t.exports=e.p+"img/right.e5420147.svg"},ebd1:function(t,n,e){t.exports=e.p+"img/t.c39ad805.svg"}});
//# sourceMappingURL=app.5a4cff4c.js.map