function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[12,120],{pQD6:function(l,n,e){"use strict";e.d(n,"a",(function(){return t}));var u=e("EVdn"),t=function(){function l(n,e,u){_classCallCheck(this,l),this.modalCtrl=n,this.router=e,this.toastCtrl=u,this.guestQty=0,this.pickupNow=!1,this.isDisabled=!1}return _createClass(l,[{key:"ngOnInit",value:function(){console.log(this.cartItems)}},{key:"pickupNowChange",value:function(l){console.log(l),l&&(this.isDisabled=!0),l||(this.isDisabled=!1)}},{key:"dismissCart",value:function(){this.modalCtrl.dismiss({dismissed:"closed",totalQty:this.itemQty})}},{key:"incrementQty",value:function(l){l.count+=1,this.itemQty+=1,console.log(l.count+1,l)}},{key:"decrementQty",value:function(l){l.count-1<1?(l.count=0,this.itemQty-=1,0===this.itemQty&&this.dismissCart(),console.log(l.count,l)):(l.count-=1,this.itemQty-=1,0===this.itemQty&&this.dismissCart(),console.log(l.count,l))}},{key:"getTimestamp",value:function(){if(this.pickupNow){var l=new Date,n=new Date(l).getFullYear()+"-0"+new Date(l).getMonth()+"-"+new Date(l).getDate()+" "+new Date(l).toLocaleTimeString();return console.log(n),n}var e=new Date(this.date).getFullYear()+"-0"+new Date(this.date).getMonth()+"-"+new Date(this.date).getDate()+" "+new Date(this.time).toLocaleTimeString();return console.log(e),e}},{key:"returnPickupMessage",value:function(){return this.pickupNow?"Your request has been placed with the laundry. You will receive a confirmation call in 2 minutes":"Your laundry pick-up request has been placed."}},{key:"placedOrder",value:function(){var l=this,n=[];if(this.cartItems.filter((function(l){0!==l.count&&n.push({laundry_item_id:l.id,description:l.description,quantity:l.count})})),void 0===this.room||""===this.room||null===this.room)return this.toastCtrl.create({message:"Please enter room number.",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then((function(l){l.present()})),!1;if(void 0===this.date&&!this.pickupNow)return this.toastCtrl.create({message:"Please select date",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then((function(l){l.present()})),!1;if(void 0===this.time&&!this.pickupNow)return this.toastCtrl.create({message:"Please select time",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then((function(l){l.present()})),!1;var e={enc_hotel_id:"N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=",description:null,items:JSON.stringify(n),room_no:this.room,requested_pickup_at:this.getTimestamp()};console.log(e),u.post("https://vserve-api.valet2you.in/api/v1/wash/laundry/guest/order",e).done((function(n){console.log(n),"Success"===n.message&&l.toastCtrl.create({header:"Thank you!",message:l.returnPickupMessage(),keyboardClose:!0,position:"bottom",color:"success",buttons:[{side:"end",text:"OKAY",handler:function(){l.dismissCart(),l.router.navigateByUrl("/hotel/tabs/hotel-home/irs")}}]}).then((function(l){l.present()}))})).fail((function(n,e,u){return console.log(n,e,u),200!==n.status&&"Room is not available"!==n.responseJSON.message?(l.dismissCart(),l.toastCtrl.create({message:"Something went wrong. Please try after sometime!",keyboardClose:!0,duration:1e3,color:"danger",position:"top"}).then((function(l){l.present()})),!1):200!==n.status&&"Room is not available"===n.responseJSON.message?(l.toastCtrl.create({message:n.responseJSON.message+" Please enter correct room number.",keyboardClose:!0,duration:3e3,color:"warning",position:"top"}).then((function(l){l.present()})),!1):void 0}))}}]),l}()},vDrc:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=function l(){_classCallCheck(this,l)},o=e("pMnS"),i=e("MKJQ"),r=e("sZkV"),a=e("iInd"),s=e("SVse"),c=e("pQD6"),b=function(){function l(n,e){_classCallCheck(this,l),this.modalCtrl=n,this.router=e}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"bookLaundry",value:function(){this.modalCtrl.create({component:c.a}).then((function(l){l.present()}))}},{key:"nourishmentNavigation",value:function(l){"guide"===l&&this.router.navigateByUrl("/hotel/tabs/hotel-home/nourishment/nourishment-guide"),"ird-menu"===l&&this.router.navigateByUrl("/hotel/tabs/hotel-home/nourishment/ird-menu"),"refreshment-menu"===l&&this.router.navigateByUrl("/hotel/tabs/hotel-home/nourishment/refreshment-menu"),"pre-order"===l&&this.router.navigateByUrl("/hotel/tabs/hotel-home/nourishment/pre-order-breakfast")}}]),l}(),d=u.nb({encapsulation:0,styles:[["ion-thumbnail[_ngcontent-%COMP%]{width:100%;height:144px}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:8px}.row-padding[_ngcontent-%COMP%]{padding:0 13px}.row-padding[_ngcontent-%COMP%]   .journey-tiles[_ngcontent-%COMP%]{padding:10px 12px;border-radius:8px;box-shadow:0 3px 6px #ebebeb;color:#525252;margin-bottom:15px;height:60px}"]],data:{}});function p(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,10,"ion-toolbar",[],null,null,null,i.tb,i.J)),u.ob(1,49152,null,0,r.zb,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,2,"ion-title",[],null,null,null,i.rb,i.H)),u.ob(3,49152,null,0,r.xb,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,0,"img",[["alt",""],["src","../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),u.pb(5,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.P,i.f)),u.ob(6,49152,null,0,r.l,[u.h,u.k,u.x],null,null),(l()(),u.pb(7,0,null,0,3,"ion-button",[],null,null,null,i.O,i.e)),u.ob(8,49152,null,0,r.k,[u.h,u.k,u.x],null,null),(l()(),u.pb(9,0,null,0,1,"ion-icon",[["name","person-circle-outline"],["slot","icon-only"]],null,null,null,i.W,i.m)),u.ob(10,49152,null,0,r.C,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.pb(11,0,null,null,79,"ion-content",[],null,null,null,i.S,i.i)),u.ob(12,49152,null,0,r.u,[u.h,u.k,u.x],null,null),(l()(),u.pb(13,0,null,0,4,"ion-buttons",[],null,null,null,i.P,i.f)),u.ob(14,49152,null,0,r.l,[u.h,u.k,u.x],null,null),(l()(),u.pb(15,0,null,0,2,"ion-back-button",[["defaultHref","/hotel/tabs/hotel-home"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Bb(l,17).onClick(e)&&t),t}),i.M,i.c)),u.ob(16,49152,null,0,r.g,[u.h,u.k,u.x],{defaultHref:[0,"defaultHref"]},null),u.ob(17,16384,null,0,r.h,[[2,r.fb],r.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),u.pb(18,0,null,0,6,"ion-row",[["style","padding: 0px 9px; margin-bottom: 10px;"]],null,null,null,i.fb,i.v)),u.ob(19,49152,null,0,r.gb,[u.h,u.k,u.x],null,null),(l()(),u.pb(20,0,null,0,4,"ion-col",[["size","12"]],null,null,null,i.R,i.h)),u.ob(21,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.pb(22,0,null,0,2,"ion-thumbnail",[],null,null,null,i.qb,i.G)),u.ob(23,49152,null,0,r.wb,[u.h,u.k,u.x],null,null),(l()(),u.pb(24,0,null,0,0,"img",[["alt",""],["src","../../../../assets/test.jpg"]],null,null,null,null,null)),(l()(),u.pb(25,0,null,0,65,"ion-row",[["class","row-padding"]],null,null,null,i.fb,i.v)),u.ob(26,49152,null,0,r.gb,[u.h,u.k,u.x],null,null),(l()(),u.pb(27,0,null,0,7,"ion-col",[["class","journey-tiles"],["size","12"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Bb(l,29).onClick()&&t),"click"===n&&(t=!1!==u.Bb(l,31).onClick(e)&&t),t}),i.R,i.h)),u.ob(28,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),u.ob(29,16384,null,0,a.n,[a.m,a.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Cb(30,1),u.ob(31,737280,null,0,r.Jb,[s.g,r.Eb,u.k,a.m,[2,a.n]],null,null),(l()(),u.pb(32,0,null,0,1,"span",[["class","header-txt"],["style","font-size: 15px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["Laundry"])),(l()(),u.pb(34,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(35,0,null,0,7,"ion-col",[["class","journey-tiles"],["size","12"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Bb(l,37).onClick()&&t),"click"===n&&(t=!1!==u.Bb(l,39).onClick(e)&&t),t}),i.R,i.h)),u.ob(36,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),u.ob(37,16384,null,0,a.n,[a.m,a.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Cb(38,1),u.ob(39,737280,null,0,r.Jb,[s.g,r.Eb,u.k,a.m,[2,a.n]],null,null),(l()(),u.pb(40,0,null,0,1,"span",[["class","header-txt"],["style","font-size: 15px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["Pillow Menu"])),(l()(),u.pb(42,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(43,0,null,0,7,"ion-col",[["class","journey-tiles"],["size","12"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Bb(l,45).onClick()&&t),"click"===n&&(t=!1!==u.Bb(l,47).onClick(e)&&t),t}),i.R,i.h)),u.ob(44,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),u.ob(45,16384,null,0,a.n,[a.m,a.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Cb(46,1),u.ob(47,737280,null,0,r.Jb,[s.g,r.Eb,u.k,a.m,[2,a.n]],null,null),(l()(),u.pb(48,0,null,0,1,"span",[["class","header-txt"],["style","font-size: 15px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["Sustainability-Planet21"])),(l()(),u.pb(50,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(51,0,null,0,7,"ion-col",[["class","journey-tiles"],["size","12"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Bb(l,53).onClick()&&t),"click"===n&&(t=!1!==u.Bb(l,55).onClick(e)&&t),t}),i.R,i.h)),u.ob(52,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),u.ob(53,16384,null,0,a.n,[a.m,a.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Cb(54,1),u.ob(55,737280,null,0,r.Jb,[s.g,r.Eb,u.k,a.m,[2,a.n]],null,null),(l()(),u.pb(56,0,null,0,1,"span",[["class","header-txt"],["style","font-size: 15px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["In room fitness"])),(l()(),u.pb(58,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(59,0,null,0,7,"ion-col",[["class","journey-tiles"],["size","12"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Bb(l,61).onClick()&&t),"click"===n&&(t=!1!==u.Bb(l,63).onClick(e)&&t),t}),i.R,i.h)),u.ob(60,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),u.ob(61,16384,null,0,a.n,[a.m,a.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Cb(62,1),u.ob(63,737280,null,0,r.Jb,[s.g,r.Eb,u.k,a.m,[2,a.n]],null,null),(l()(),u.pb(64,0,null,0,1,"span",[["class","header-txt"],["style","font-size: 15px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["In room essentials"])),(l()(),u.pb(66,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(67,0,null,0,7,"ion-col",[["class","journey-tiles"],["size","12"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Bb(l,69).onClick()&&t),"click"===n&&(t=!1!==u.Bb(l,71).onClick(e)&&t),t}),i.R,i.h)),u.ob(68,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),u.ob(69,16384,null,0,a.n,[a.m,a.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Cb(70,1),u.ob(71,737280,null,0,r.Jb,[s.g,r.Eb,u.k,a.m,[2,a.n]],null,null),(l()(),u.pb(72,0,null,0,1,"span",[["class","header-txt"],["style","font-size: 15px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["In room refreshments"])),(l()(),u.pb(74,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(75,0,null,0,7,"ion-col",[["class","journey-tiles"],["size","12"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Bb(l,77).onClick()&&t),"click"===n&&(t=!1!==u.Bb(l,79).onClick(e)&&t),t}),i.R,i.h)),u.ob(76,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),u.ob(77,16384,null,0,a.n,[a.m,a.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Cb(78,1),u.ob(79,737280,null,0,r.Jb,[s.g,r.Eb,u.k,a.m,[2,a.n]],null,null),(l()(),u.pb(80,0,null,0,1,"span",[["class","header-txt"],["style","font-size: 15px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["Safe Instructions"])),(l()(),u.pb(82,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(83,0,null,0,7,"ion-col",[["class","journey-tiles"],["size","12"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Bb(l,85).onClick()&&t),"click"===n&&(t=!1!==u.Bb(l,87).onClick(e)&&t),t}),i.R,i.h)),u.ob(84,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),u.ob(85,16384,null,0,a.n,[a.m,a.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Cb(86,1),u.ob(87,737280,null,0,r.Jb,[s.g,r.Eb,u.k,a.m,[2,a.n]],null,null),(l()(),u.pb(88,0,null,0,1,"span",[["class","header-txt"],["style","font-size: 15px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["remote Instructions"])),(l()(),u.pb(90,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){l(n,10,0,"person-circle-outline"),l(n,16,0,"/hotel/tabs/hotel-home"),l(n,17,0,"/hotel/tabs/hotel-home"),l(n,21,0,"12"),l(n,28,0,"12");var e=l(n,30,0,"/hotel/tabs/hotel-home/irs/irs-laundry");l(n,29,0,e),l(n,31,0),l(n,36,0,"12");var u=l(n,38,0,"/hotel/tabs/hotel-home/irs/irs-pillow");l(n,37,0,u),l(n,39,0),l(n,44,0,"12");var t=l(n,46,0,"/hotel/tabs/hotel-home/irs/irs-planet21");l(n,45,0,t),l(n,47,0),l(n,52,0,"12");var o=l(n,54,0,"/hotel/tabs/hotel-home/irs/irs-fitness");l(n,53,0,o),l(n,55,0),l(n,60,0,"12");var i=l(n,62,0,"/hotel/tabs/hotel-home/irs/irs-essentials");l(n,61,0,i),l(n,63,0),l(n,68,0,"12");var r=l(n,70,0,"/hotel/tabs/hotel-home/irs/irs-refreshment");l(n,69,0,r),l(n,71,0),l(n,76,0,"12");var a=l(n,78,0,"/hotel/tabs/hotel-home/irs/irs-safe");l(n,77,0,a),l(n,79,0),l(n,84,0,"12");var s=l(n,86,0,"/hotel/tabs/hotel-home/irs/irs-remote");l(n,85,0,s),l(n,87,0)}),null)}var h=u.lb("app-laundry-service",b,(function(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-laundry-service",[],null,null,null,p,d)),u.ob(1,114688,null,0,b,[r.Db,a.m],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),g=e("s7LF"),m=u.nb({encapsulation:0,styles:[["ion-fab[_ngcontent-%COMP%]{width:100%;background:#fff;padding:10px;margin-bottom:-10px;box-shadow:0 0 10px #c8c8c8}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.item[_ngcontent-%COMP%]   .sc-ion-label-ios-h[_ngcontent-%COMP%], .item.sc-ion-label-ios-h[_ngcontent-%COMP%]{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:pre-wrap!important;overflow:hidden;box-sizing:border-box}ion-item[_ngcontent-%COMP%]{--background:transparent}.foodType[_ngcontent-%COMP%]{margin-right:15px}.guestInfoSec[_ngcontent-%COMP%]{background:#f6fff4;padding:5px 0 26px}.foodInput[_ngcontent-%COMP%]{padding:0 10px!important;border:1px solid #e1e1e1;margin-top:15px;border-radius:5px;background-color:#f5f5f5}ion-label[_ngcontent-%COMP%]{display:flex!important;flex-direction:row;justify-content:space-between}.details[_ngcontent-%COMP%]{width:73%}.add-section[_ngcontent-%COMP%]{width:27%}.add-item-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;border-width:2px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;-o-border-image:initial;border-image:initial;border-radius:5px;align-items:center;height:2.2em;font-size:13px;width:73px}.add-item-button-left[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-left:-8px;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#fff}.add-item-button-right[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-right:-8px;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#fff}.details-text[_ngcontent-%COMP%]{padding:0 16px;margin-top:-16px;font-size:14px}.price[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.9px}.spa-divider[_ngcontent-%COMP%]{height:3px;background-color:#f5f5f5}"]],data:{}});function f(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"p",[["style","font-size: 12px; color: #3F51B5;font-weight: 600;letter-spacing: 1px;"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,[" Express Delivery "]))],null,null)}function k(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,5,"div",[["class","add-item-button"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,1,"ion-icon",[["class","add-item-button-left"],["name","remove-outline"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.decrementQty(l.parent.parent.context.$implicit)&&u),u}),i.W,i.m)),u.ob(2,49152,null,0,r.C,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.Gb(3,null,[" "," "])),(l()(),u.pb(4,0,null,null,1,"ion-icon",[["class","add-item-button-right"],["name","add-outline"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.incrementQty(l.parent.parent.context.$implicit)&&u),u}),i.W,i.m)),u.ob(5,49152,null,0,r.C,[u.h,u.k,u.x],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"remove-outline"),l(n,5,0,"add-outline")}),(function(l,n){l(n,3,0,n.parent.parent.context.$implicit.count)}))}function x(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,13,"ion-item",[["mode","md"],["style","background: transparent;"]],null,null,null,i.Y,i.o)),u.ob(1,49152,null,0,r.H,[u.h,u.k,u.x],{mode:[0,"mode"]},null),(l()(),u.pb(2,0,null,0,11,"ion-label",[],null,null,null,i.Z,i.p)),u.ob(3,49152,null,0,r.N,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,6,"div",[["class","details"]],null,null,null,null,null)),(l()(),u.pb(5,0,null,null,1,"h2",[["style","font-size: 13px; font-weight: 600; display: flex; align-items: center; white-space: pre-wrap;"]],null,null,null,null,null)),(l()(),u.Gb(6,null,[" "," "])),(l()(),u.pb(7,0,null,null,1,"h3",[["class","price"]],null,null,null,null,null)),(l()(),u.Gb(8,null,["\u20b9",""])),(l()(),u.eb(16777216,null,null,1,null,f)),u.ob(10,16384,null,0,s.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(11,0,null,0,2,"div",[["class","add-action"]],null,null,null,null,null)),(l()(),u.eb(16777216,null,null,1,null,k)),u.ob(13,16384,null,0,s.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"md"),l(n,10,0,n.parent.context.$implicit.expressSelected),l(n,13,0,0!==n.parent.context.$implicit.count)}),(function(l,n){l(n,6,0,n.parent.context.$implicit.name),l(n,8,0,n.parent.context.$implicit.price)}))}function C(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,3,"ion-list",[["lines","none"],["mode","md"],["style","background: transparent;"]],null,null,null,i.bb,i.q)),u.ob(1,49152,null,0,r.O,[u.h,u.k,u.x],{lines:[0,"lines"],mode:[1,"mode"]},null),(l()(),u.eb(16777216,null,0,1,null,x)),u.ob(3,16384,null,0,s.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"none","md"),l(n,3,0,0!==n.context.$implicit.count)}),null)}function v(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,4,"ion-toolbar",[],null,null,null,i.tb,i.J)),u.ob(1,49152,null,0,r.zb,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,2,"ion-title",[],null,null,null,i.rb,i.H)),u.ob(3,49152,null,0,r.xb,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),u.pb(5,0,null,null,88,"ion-content",[],null,null,null,i.S,i.i)),u.ob(6,49152,null,0,r.u,[u.h,u.k,u.x],null,null),(l()(),u.pb(7,0,null,0,17,"ion-fab",[["slot","fixed"],["vertical","bottom"]],null,null,null,i.U,i.k)),u.ob(8,49152,null,0,r.w,[u.h,u.k,u.x],{vertical:[0,"vertical"]},null),(l()(),u.pb(9,0,null,0,15,"ion-row",[],null,null,null,i.fb,i.v)),u.ob(10,49152,null,0,r.gb,[u.h,u.k,u.x],null,null),(l()(),u.pb(11,0,null,0,6,"ion-col",[["size","4"]],null,null,null,i.R,i.h)),u.ob(12,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.pb(13,0,null,0,4,"ion-button",[["color","light"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.dismissCart()&&u),u}),i.O,i.e)),u.ob(14,49152,null,0,r.k,[u.h,u.k,u.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(l()(),u.pb(15,0,null,0,1,"ion-icon",[["name","chevron-back-outline"],["size","small"],["slot","start"]],null,null,null,i.W,i.m)),u.ob(16,49152,null,0,r.C,[u.h,u.k,u.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),u.Gb(-1,0,[" Back "])),(l()(),u.pb(18,0,null,0,6,"ion-col",[["size","8"]],null,null,null,i.R,i.h)),u.ob(19,49152,null,0,r.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.pb(20,0,null,0,4,"ion-button",[["color","success"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.placedOrder()&&u),u}),i.O,i.e)),u.ob(21,49152,null,0,r.k,[u.h,u.k,u.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(l()(),u.pb(22,0,null,0,1,"ion-icon",[["name","caret-forward-outline"],["size","small"],["slot","end"]],null,null,null,i.W,i.m)),u.ob(23,49152,null,0,r.C,[u.h,u.k,u.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),u.Gb(-1,0,[" Place Request "])),(l()(),u.pb(25,0,null,0,1,"h3",[["class","ion-padding-horizontal"]],null,null,null,null,null)),(l()(),u.Gb(-1,null,["Schedule Laundry Pickup"])),(l()(),u.pb(27,0,null,0,2,"div",[["class","toggleMenus"]],null,null,null,null,null)),(l()(),u.eb(16777216,null,null,1,null,C)),u.ob(29,278528,null,0,s.h,[u.M,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.pb(30,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(31,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(32,0,null,0,57,"div",[["class","guest-details"]],null,null,null,null,null)),(l()(),u.pb(33,0,null,null,0,"div",[["class","spa-divider"]],null,null,null,null,null)),(l()(),u.pb(34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.pb(35,0,null,null,11,"ion-item",[["lines","none"]],null,[[null,"ionChange"]],(function(l,n,e){var u=!0,t=l.component;return"ionChange"===n&&(u=!1!==t.pickupNowChange(t.pickupNow)&&u),u}),i.Y,i.o)),u.ob(36,49152,null,0,r.H,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.pb(37,0,null,0,2,"ion-label",[],null,null,null,i.Z,i.p)),u.ob(38,49152,null,0,r.N,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["Pick up now"])),(l()(),u.pb(40,0,null,0,6,"ion-checkbox",[["mode","md"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Bb(l,41)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Bb(l,41)._handleIonChange(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.pickupNow=e)&&t),t}),i.Q,i.g)),u.ob(41,16384,null,0,r.c,[u.k],null,null),u.Db(1024,null,g.d,(function(l){return[l]}),[r.c]),u.ob(43,671744,null,0,g.g,[[8,null],[8,null],[8,null],[6,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),u.Db(2048,null,g.e,null,[g.g]),u.ob(45,16384,null,0,g.f,[[4,g.e]],null,null),u.ob(46,49152,null,0,r.r,[u.h,u.k,u.x],{mode:[0,"mode"]},null),(l()(),u.pb(47,0,null,null,2,"ion-text",[["class","ion-padding-horizontal"]],null,null,null,i.ob,i.E)),u.ob(48,49152,null,0,r.ub,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["OR"])),(l()(),u.pb(50,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.pb(51,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.Y,i.o)),u.ob(52,49152,null,0,r.H,[u.h,u.k,u.x],{disabled:[0,"disabled"],lines:[1,"lines"]},null),(l()(),u.pb(53,0,null,0,2,"ion-label",[],null,null,null,i.Z,i.p)),u.ob(54,49152,null,0,r.N,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["Select Date"])),(l()(),u.pb(56,0,null,0,6,"ion-datetime",[["max","2030-12-31"],["pickerFormat","DD MMMM YYYY"],["placeholder","Select Date"],["value",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Bb(l,57)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Bb(l,57)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.date=e)&&t),t}),i.T,i.j)),u.ob(57,16384,null,0,r.Kb,[u.k],null,null),u.Db(1024,null,g.d,(function(l){return[l]}),[r.Kb]),u.ob(59,671744,null,0,g.g,[[8,null],[8,null],[8,null],[6,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),u.Db(2048,null,g.e,null,[g.g]),u.ob(61,16384,null,0,g.f,[[4,g.e]],null,null),u.ob(62,49152,null,0,r.v,[u.h,u.k,u.x],{max:[0,"max"],pickerFormat:[1,"pickerFormat"],placeholder:[2,"placeholder"],value:[3,"value"]},null),(l()(),u.pb(63,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.Y,i.o)),u.ob(64,49152,null,0,r.H,[u.h,u.k,u.x],{disabled:[0,"disabled"],lines:[1,"lines"]},null),(l()(),u.pb(65,0,null,0,2,"ion-label",[],null,null,null,i.Z,i.p)),u.ob(66,49152,null,0,r.N,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["Select Time"])),(l()(),u.pb(68,0,null,0,6,"ion-datetime",[["display-format","h:mm A"],["max","12:00 AM"],["min","7:00 AM"],["picker-format","h:mm A"],["placeholder","Select Time"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Bb(l,69)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Bb(l,69)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.time=e)&&t),t}),i.T,i.j)),u.ob(69,16384,null,0,r.Kb,[u.k],null,null),u.Db(1024,null,g.d,(function(l){return[l]}),[r.Kb]),u.ob(71,671744,null,0,g.g,[[8,null],[8,null],[8,null],[6,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),u.Db(2048,null,g.e,null,[g.g]),u.ob(73,16384,null,0,g.f,[[4,g.e]],null,null),u.ob(74,49152,null,0,r.v,[u.h,u.k,u.x],{max:[0,"max"],min:[1,"min"],placeholder:[2,"placeholder"]},null),(l()(),u.pb(75,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.Y,i.o)),u.ob(76,49152,null,0,r.H,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.pb(77,0,null,0,2,"ion-label",[],null,null,null,i.Z,i.p)),u.ob(78,49152,null,0,r.N,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,["Room Number"])),(l()(),u.pb(80,0,null,0,6,"ion-input",[["clearInput","true"],["style","border-bottom: 1px solid #cecbcb; margin-left: 120px; text-align: right;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==u.Bb(l,81)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Bb(l,81)._handleIonChange(e.target)&&t),"ngModelChange"===n&&(t=!1!==(o.room=e)&&t),t}),i.X,i.n)),u.ob(81,16384,null,0,r.Fb,[u.k],null,null),u.Db(1024,null,g.d,(function(l){return[l]}),[r.Fb]),u.ob(83,671744,null,0,g.g,[[8,null],[8,null],[8,null],[6,g.d]],{model:[0,"model"]},{update:"ngModelChange"}),u.Db(2048,null,g.e,null,[g.g]),u.ob(85,16384,null,0,g.f,[[4,g.e]],null,null),u.ob(86,49152,null,0,r.G,[u.h,u.k,u.x],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(l()(),u.pb(87,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.pb(88,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.pb(89,0,null,null,0,"div",[["class","spa-divider"]],null,null,null,null,null)),(l()(),u.pb(90,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(91,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(92,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(93,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){var e=n.component;l(n,8,0,"bottom"),l(n,12,0,"4"),l(n,14,0,"light","block","md"),l(n,16,0,"chevron-back-outline","small"),l(n,19,0,"8"),l(n,21,0,"success","block","md"),l(n,23,0,"caret-forward-outline","small"),l(n,29,0,e.cartItems),l(n,36,0,"none"),l(n,43,0,e.pickupNow),l(n,46,0,"md"),l(n,52,0,e.isDisabled,"none"),l(n,59,0,e.date),l(n,62,0,"2030-12-31","DD MMMM YYYY","Select Date",""),l(n,64,0,e.isDisabled,"none"),l(n,71,0,e.time),l(n,74,0,"12:00 AM","7:00 AM","Select Time"),l(n,76,0,"none"),l(n,83,0,e.room),l(n,86,0,"true","number")}),(function(l,n){l(n,40,0,u.Bb(n,45).ngClassUntouched,u.Bb(n,45).ngClassTouched,u.Bb(n,45).ngClassPristine,u.Bb(n,45).ngClassDirty,u.Bb(n,45).ngClassValid,u.Bb(n,45).ngClassInvalid,u.Bb(n,45).ngClassPending),l(n,56,0,u.Bb(n,61).ngClassUntouched,u.Bb(n,61).ngClassTouched,u.Bb(n,61).ngClassPristine,u.Bb(n,61).ngClassDirty,u.Bb(n,61).ngClassValid,u.Bb(n,61).ngClassInvalid,u.Bb(n,61).ngClassPending),l(n,68,0,u.Bb(n,73).ngClassUntouched,u.Bb(n,73).ngClassTouched,u.Bb(n,73).ngClassPristine,u.Bb(n,73).ngClassDirty,u.Bb(n,73).ngClassValid,u.Bb(n,73).ngClassInvalid,u.Bb(n,73).ngClassPending),l(n,80,0,u.Bb(n,85).ngClassUntouched,u.Bb(n,85).ngClassTouched,u.Bb(n,85).ngClassPristine,u.Bb(n,85).ngClassDirty,u.Bb(n,85).ngClassValid,u.Bb(n,85).ngClassInvalid,u.Bb(n,85).ngClassPending)}))}var y=u.lb("app-book-laundry",c.a,(function(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-book-laundry",[],null,null,null,v,m)),u.ob(1,114688,null,0,c.a,[r.Db,a.m,r.Mb],null,null)],(function(l,n){l(n,1,0)}),null)}),{cartItems:"cartItems",itemQty:"itemQty"},{},[]),B=function(){return e.e(0).then(e.bind(null,"6elb")).then((function(l){return l.IrsTvPageModuleNgFactory}))},w=function(){return e.e(0).then(e.bind(null,"bqUm")).then((function(l){return l.IrsPillowPageModuleNgFactory}))},z=function(){return e.e(10).then(e.bind(null,"gpWv")).then((function(l){return l.IrsLaundryPageModuleNgFactory}))},M=function(){return Promise.all([e.e(0),e.e(118)]).then(e.bind(null,"zM4W")).then((function(l){return l.IrsInRoomFitnessPageModuleNgFactory}))},P=function(){return e.e(9).then(e.bind(null,"UpIF")).then((function(l){return l.IrsInRoomEssentialsPageModuleNgFactory}))},_=function(){return e.e(6).then(e.bind(null,"wNTd")).then((function(l){return l.IrsInRoomRefreshmentPageModuleNgFactory}))},D=function(){return e.e(0).then(e.bind(null,"hutP")).then((function(l){return l.SafeInstructionsPageModuleNgFactory}))},I=function(){return e.e(0).then(e.bind(null,"1Fvj")).then((function(l){return l.RemoteInstructionsPageModuleNgFactory}))},O=function(){return e.e(11).then(e.bind(null,"W7Ky")).then((function(l){return l.ActiveBreakfastPageModuleNgFactory}))},N=function l(){_classCallCheck(this,l)};e.d(n,"LaundryServicePageModuleNgFactory",(function(){return F}));var F=u.mb(t,[],(function(l){return u.yb([u.zb(512,u.j,u.X,[[8,[o.a,h,y]],[3,u.j],u.v]),u.zb(4608,s.k,s.j,[u.s,[2,s.q]]),u.zb(4608,g.j,g.j,[]),u.zb(4608,r.b,r.b,[u.x,u.g]),u.zb(4608,r.Db,r.Db,[r.b,u.j,u.p]),u.zb(4608,r.Hb,r.Hb,[r.b,u.j,u.p]),u.zb(1073742336,s.b,s.b,[]),u.zb(1073742336,g.i,g.i,[]),u.zb(1073742336,g.a,g.a,[]),u.zb(1073742336,r.Bb,r.Bb,[]),u.zb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),u.zb(1073742336,N,N,[]),u.zb(1073742336,t,t,[]),u.zb(1024,a.k,(function(){return[[{path:"",component:b},{path:"irs-tv",loadChildren:B},{path:"irs-pillow",loadChildren:w},{path:"irs-laundry",loadChildren:z},{path:"irs-in-room-fitness",loadChildren:M},{path:"irs-in-room-essentials",loadChildren:P},{path:"irs-in-room-refreshment",loadChildren:_},{path:"safe-instructions",loadChildren:D},{path:"remote-instructions",loadChildren:I},{path:"active-breakfast",loadChildren:O}]]}),[])])}))}}]);