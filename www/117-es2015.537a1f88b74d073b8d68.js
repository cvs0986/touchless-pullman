(window.webpackJsonp=window.webpackJsonp||[]).push([[117,116,118],{"6mRH":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var s=n("IheW"),p=n("8Y7J");let r=(()=>{class e{constructor(e){this.http=e,this.url="https://vserve-api.valet2you.in/api/v1/ird/guest/",this.minibarUrl="https://vserve-api.valet2you.in/api/v1/ird/mini-bar/guest/",this.laundryUrl="https://vserve-api.valet2you.in/api/v1/wash/laundry/guest/",this.spaUrl="https://vserve-api.valet2you.in/api/v1/sanitarium/spa/guest/",this.requestServiceUrl="https://vserve-api.valet2you.in/api/v1/connect/guest/"}getMenus(e){const t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.url+"menu/"+e,{observe:"response",responseType:"json",headers:t})}getMinibarMenus(e){const t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.minibarUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}getLaundryMenus(e){const t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.laundryUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}getSpaMenus(e){const t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.spaUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}getRequestServicesMenus(e){const t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.requestServiceUrl+"menu/"+e,{observe:"response",responseType:"json",headers:t})}placeOrder(e){const t=new s.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.post(this.url+"order/",e,{observe:"response",responseType:"json",headers:t})}}return e.ngInjectableDef=p.Lb({factory:function(){return new e(p.Mb(s.c))},token:e,providedIn:"root"}),e})()}}]);