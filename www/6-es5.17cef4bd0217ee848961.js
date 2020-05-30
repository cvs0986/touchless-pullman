function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[6,116,117,118],{"6mRH":function(n,l,t){"use strict";t.d(l,"a",(function(){return i}));var e=t("IheW"),o=t("8Y7J"),i=function(){var n=function(){function n(l){_classCallCheck(this,n),this.http=l,this.url="https://vserve-api.valet2you.in/api/v1/ird/guest/",this.minibarUrl="https://vserve-api.valet2you.in/api/v1/ird/mini-bar/guest/",this.laundryUrl="https://vserve-api.valet2you.in/api/v1/wash/laundry/guest/",this.spaUrl="https://vserve-api.valet2you.in/api/v1/sanitarium/spa/guest/",this.requestServiceUrl="https://vserve-api.valet2you.in/api/v1/connect/guest/"}return _createClass(n,[{key:"getMenus",value:function(n){var l=new e.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.url+"menu/"+n,{observe:"response",responseType:"json",headers:l})}},{key:"getMinibarMenus",value:function(n){var l=new e.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.minibarUrl+"menu/"+n,{observe:"response",responseType:"json",headers:l})}},{key:"getLaundryMenus",value:function(n){var l=new e.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.laundryUrl+"menu/"+n,{observe:"response",responseType:"json",headers:l})}},{key:"getSpaMenus",value:function(n){var l=new e.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.spaUrl+"menu/"+n,{observe:"response",responseType:"json",headers:l})}},{key:"getRequestServicesMenus",value:function(n){var l=new e.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.get(this.requestServiceUrl+"menu/"+n,{observe:"response",responseType:"json",headers:l})}},{key:"placeOrder",value:function(n){var l=new e.g({"Content-Type":"application/json",Accept:"application/json"});return this.http.post(this.url+"order/",n,{observe:"response",responseType:"json",headers:l})}}]),n}();return n.ngInjectableDef=o.Lb({factory:function(){return new n(o.Mb(e.c))},token:n,providedIn:"root"}),n}()},lUok:function(n,l,t){"use strict";t.d(l,"a",(function(){return o})),t("6mRH");var e=t("EVdn"),o=function(){function n(l,t,e,o){_classCallCheck(this,n),this.modalCtrl=l,this.router=t,this.toastCtrl=e,this.hotelApi=o,this.progressLoading=!1,this.guestQty=0}return _createClass(n,[{key:"ngOnInit",value:function(){console.log(this.cartItems,this.itemQty),console.log(this.cartItems),void 0!==this.cartItems&&this.calculateTotalPrice()}},{key:"calculateItemPrice",value:function(n,l){return n*(+(.2*l).toFixed(2)+l)}},{key:"calculateTotalPrice",value:function(){var n=null;this.cartItems.forEach((function(l){n+=l.count*(l.price+.2*l.price)})),this.totalAmount=n}},{key:"addItemInitial",value:function(n){n.count+=1,console.log(n.qty+1,n)}},{key:"incrementQty",value:function(n){n.count+=1,this.itemQty+=1,console.log(n.count+1,n),this.calculateTotalPrice()}},{key:"decrementQty",value:function(n){n.count-1<1?(n.count=0,this.itemQty=0,console.log(n.count,n),this.calculateTotalPrice(),0===this.itemQty&&this.dismissCart()):(n.count-=1,this.itemQty-=1,console.log(n.count,n),this.calculateTotalPrice(),0===this.itemQty&&this.dismissCart())}},{key:"incrementGuest",value:function(){this.guestQty+=1}},{key:"decrementGuest",value:function(){this.guestQty-1<1?this.guestQty=0:this.guestQty-=1}},{key:"dismissCart",value:function(){this.modalCtrl.dismiss({dismissed:"closed",totalQty:this.itemQty})}},{key:"orderPlaced",value:function(){var n=this,l=[];if(this.cartItems.filter((function(n){0!==n.count&&l.push({menu_item_id:n.id,name:n.name,menu_category_id:n.menu_category_id,menu_sub_category_id:n.menu_sub_category_id,description:n.description,quantity:n.count})})),void 0===this.roomNo)return this.toastCtrl.create({message:"Please enter room number!",keyboardClose:!0,duration:3e3,color:"warning",position:"top"}).then((function(n){n.present()})),!1;if(0===this.guestQty)return this.toastCtrl.create({message:"Please select number of guests!",keyboardClose:!0,duration:3e3,color:"warning",position:"top"}).then((function(n){n.present()})),!1;if(0===l.length)return this.toastCtrl.create({message:"Did not find any items, please close this window and add items from menu!",keyboardClose:!0,duration:5e3,color:"danger",position:"top"}).then((function(n){n.present()})),!1;var t={enc_hotel_id:"N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=",no_of_guest:this.guestQty,description:this.cookingIns,items:JSON.stringify(l),room_no:this.roomNo};console.log(t),e.post("https://vserve-api.valet2you.in/api/v1/ird/mini-bar/guest/order",t).done((function(l){console.log(l),"Success"===l.message&&(n.dismissCart(),n.router.navigateByUrl("/confirmation"))})).fail((function(l,t,e){return console.log(l,t,e),200!==l.status&&"Room is not available"!==l.responseJSON.message?(n.dismissCart(),n.toastCtrl.create({message:"Something went wrong! Please try after some time.",keyboardClose:!0,duration:3e3,color:"danger",position:"top"}).then((function(n){n.present()})),!1):200!==l.status&&"Room is not available"===l.responseJSON.message?(n.toastCtrl.create({message:l.responseJSON.message+" Please enter correct room number.",keyboardClose:!0,duration:3e3,color:"warning",position:"top"}).then((function(n){n.present()})),!1):void 0}))}}]),n}()},wNTd:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),o=function n(){_classCallCheck(this,n)},i=t("pMnS"),u=t("MKJQ"),s=t("sZkV"),r=t("SVse"),a=t("6mRH"),c=t("lUok"),p=function(){function n(l,t,e,o,i){_classCallCheck(this,n),this.modalCtrl=l,this.platform=t,this.toastCtrl=e,this.router=o,this.hotelApi=i,this.itemQty=0,this.menuItemsApi=[]}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.isIos=this.platform.is("ios"),console.log(this.isIos),this.hotelApi.getMinibarMenus("N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=").subscribe((function(l){console.log(l),n.menuItemsApi=l.body.data}),(function(n){console.log(n)}))}},{key:"addItemInitial",value:function(n){n.count+=1,this.itemQty+=1,console.log(n.count+1,n,this.itemQty)}},{key:"incrementQty",value:function(n){n.count+=1,this.itemQty+=1,console.log(n.count+1,n,this.itemQty)}},{key:"decrementQty",value:function(n){n.count-1<1?(n.count=0,this.itemQty-=1,console.log(n.count,n,this.itemQty)):(n.count-=1,this.itemQty-=1,console.log(n.count,n,this.itemQty))}},{key:"reviewOrder",value:function(){var n=this;localStorage.removeItem("cart-items");var l=[];this.menuItemsApi.without_category_items.filter((function(n){0!==n.count&&l.push(n)})),console.log(l),localStorage.setItem("cart-items",JSON.stringify(l)),this.modalCtrl.create({component:c.a,componentProps:{cartItems:l,itemQty:this.itemQty}}).then((function(l){l.present(),l.onDidDismiss().then((function(l){"closed"===l.data.dismissed&&(n.itemQty=l.data.totalQty)}))}))}}]),n}(),m=t("iInd"),b=e.nb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#FCFCF7}.nourishment-section[_ngcontent-%COMP%]{padding:10px 13px}.nourishment-divider[_ngcontent-%COMP%]{width:100%;height:6px;background:rgba(143,50,71,.38)}.el-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;text-align:center;border-bottom:1px solid #cdc3c1;line-height:.1em;margin:10px 0 20px;color:#747474}.el-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#fcfcf7;padding:0 10px}.el-description[_ngcontent-%COMP%]{padding:0 5px;font-size:14px}.nourishment-el[_ngcontent-%COMP%]{margin-bottom:40px;margin-left:-13px;margin-right:-13px}ion-button[_ngcontent-%COMP%]{--border-width:0.5px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]{line-height:13px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]:last-child{margin-bottom:5px}.item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%], .item.sc-ion-label-md-h[_ngcontent-%COMP%]{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:pre-wrap!important;overflow:hidden;box-sizing:border-box}.sc-ion-popover-md-h[_ngcontent-%COMP%]{--width:250px;--max-height:60%!important;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),0 8px 10px 1px rgba(0, 0, 0, 0.14),0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md[_ngcontent-%COMP%]{border-radius:4px;transform-origin:left top;bottom:12px;top:20%!important;left:113px;transform-origin:right top}ion-item[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]{--background:transparent!important}.veg-toggle-ui[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-right:25px}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.category-name[_ngcontent-%COMP%]{padding:5px 35px 5px 16px;background:#eb3237;-webkit-clip-path:polygon(0 0,0 100%,85% 100%,100% 0);clip-path:polygon(0 0,0 100%,85% 100%,100% 0);color:#fff;text-transform:uppercase;font-weight:700}.thumbnail-wrap[_ngcontent-%COMP%]{position:relative;margin-right:10px}.food-type-icon[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;width:16px}ion-thumbnail[_ngcontent-%COMP%]{width:100%;height:180px}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:8px}ion-label[_ngcontent-%COMP%]{display:flex!important;flex-direction:row;justify-content:space-between}.details[_ngcontent-%COMP%]{width:78%}.add-section[_ngcontent-%COMP%]{width:22%}.add-item-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;border-width:2px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;-o-border-image:initial;border-image:initial;border-radius:5px;align-items:center;height:2.2em;font-size:13px;width:73px}.add-item-button-left[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-left:-2px;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#fff}.add-item-button-right[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-right:-2px;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#fff}.details-text[_ngcontent-%COMP%]{padding:0 16px;margin-top:-5px;font-size:13px}.category-small[_ngcontent-%COMP%]{color:#868686;text-transform:uppercase}.price[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.9px}"]],data:{}});function d(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,6,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,u.U,u.k)),e.ob(1,49152,null,0,s.w,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),e.pb(2,0,null,0,4,"ion-button",[["color","success"],["fill","solid"],["mode","md"],["shape","round"],["size","small"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.reviewOrder()&&e),e}),u.O,u.e)),e.ob(3,49152,null,0,s.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],mode:[2,"mode"],shape:[3,"shape"],size:[4,"size"]},null),(n()(),e.Gb(-1,0,[" View Cart "])),(n()(),e.pb(5,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"],["slot","end"]],null,null,null,u.W,u.m)),e.ob(6,49152,null,0,s.C,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"end","bottom"),n(l,3,0,"success","solid","md","round","small"),n(l,6,0,"chevron-forward-outline")}),null)}function h(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["ITEM"]))],null,null)}function g(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["ITEMS"]))],null,null)}function f(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,12,"div",[["class","place-order-btn ion-padding-horizontal"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,11,"ion-button",[["color","success"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.reviewOrder()&&e),e}),u.O,u.e)),e.ob(2,49152,null,0,s.k,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(n()(),e.pb(3,0,null,0,1,"ion-icon",[["name","caret-forward-outline"],["size","small"],["slot","end"]],null,null,null,u.W,u.m)),e.ob(4,49152,null,0,s.C,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),(n()(),e.pb(5,0,null,0,6,"small",[["style","margin-right: 50px; font-weight: 500;"]],null,null,null,null,null)),(n()(),e.Gb(6,null,[" "," "])),(n()(),e.pb(7,0,null,null,4,"span",[["style","margin-left: 3px;"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,h)),e.ob(9,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,g)),e.ob(11,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.Gb(-1,0,[" View Cart "]))],(function(n,l){var t=l.component;n(l,2,0,"success","block","md"),n(l,4,0,"caret-forward-outline","small"),n(l,9,0,1===t.itemQty),n(l,11,0,t.itemQty>1)}),(function(n,l){n(l,6,0,l.component.itemQty)}))}function y(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,2,"div",[["class","bottom-buttons"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,f)),e.ob(2,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,2,0,0!==t.itemQty&&!1===t.isIos)}),null)}function x(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,4,"ion-button",[["color","medium"],["fill","outline"],["size","small"],["style","text-transform: capitalize; font-weight: 400;"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.addItemInitial(n.parent.context.$implicit)&&e),e}),u.O,u.e)),e.ob(1,49152,null,0,s.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(n()(),e.Gb(-1,0,[" Add "])),(n()(),e.pb(3,0,null,0,1,"ion-icon",[["name","add-outline"],["size","small"],["slot","icon-only"],["style","margin-right: 5px;"]],null,null,null,u.W,u.m)),e.ob(4,49152,null,0,s.C,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null)],(function(n,l){n(l,1,0,"medium","outline","small"),n(l,4,0,"add-outline","small")}),null)}function v(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,5,"div",[["class","add-item-button"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,1,"ion-icon",[["class","add-item-button-left"],["name","remove-outline"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.decrementQty(n.parent.context.$implicit)&&e),e}),u.W,u.m)),e.ob(2,49152,null,0,s.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.Gb(3,null,[" "," "])),(n()(),e.pb(4,0,null,null,1,"ion-icon",[["class","add-item-button-right"],["name","add-outline"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.incrementQty(n.parent.context.$implicit)&&e),e}),u.W,u.m)),e.ob(5,49152,null,0,s.C,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,2,0,"remove-outline"),n(l,5,0,"add-outline")}),(function(n,l){n(l,3,0,l.parent.context.$implicit.count)}))}function k(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,15,"ion-list",[["lines","none"],["mode","md"],["style","background: transparent;"]],null,null,null,u.bb,u.q)),e.ob(1,49152,null,0,s.O,[e.h,e.k,e.x],{lines:[0,"lines"],mode:[1,"mode"]},null),(n()(),e.pb(2,0,null,0,13,"ion-item",[["mode","md"],["style","background: transparent;"]],null,null,null,u.Y,u.o)),e.ob(3,49152,null,0,s.H,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(n()(),e.pb(4,0,null,0,11,"ion-label",[],null,null,null,u.Z,u.p)),e.ob(5,49152,null,0,s.N,[e.h,e.k,e.x],null,null),(n()(),e.pb(6,0,null,0,4,"div",[["class","details"]],null,null,null,null,null)),(n()(),e.pb(7,0,null,null,1,"h2",[["style","font-size: 13px; display: flex; align-items: center; white-space: pre-wrap;"]],null,null,null,null,null)),(n()(),e.Gb(8,null,[" "," "])),(n()(),e.pb(9,0,null,null,1,"h3",[["class","price"]],null,null,null,null,null)),(n()(),e.Gb(10,null,["\u20b9",".00"])),(n()(),e.pb(11,0,null,0,4,"div",[["class","add-action"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,x)),e.ob(13,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,v)),e.ob(15,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,"none","md"),n(l,3,0,"md"),n(l,13,0,0===l.context.$implicit.count),n(l,15,0,0!==l.context.$implicit.count)}),(function(n,l){n(l,8,0,l.context.$implicit.name),n(l,10,0,l.context.$implicit.price)}))}function C(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,10,"ion-toolbar",[],null,null,null,u.tb,u.J)),e.ob(1,49152,null,0,s.zb,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,2,"ion-title",[],null,null,null,u.rb,u.H)),e.ob(3,49152,null,0,s.xb,[e.h,e.k,e.x],null,null),(n()(),e.pb(4,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(n()(),e.pb(5,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,u.P,u.f)),e.ob(6,49152,null,0,s.l,[e.h,e.k,e.x],null,null),(n()(),e.pb(7,0,null,0,3,"ion-button",[],null,null,null,u.O,u.e)),e.ob(8,49152,null,0,s.k,[e.h,e.k,e.x],null,null),(n()(),e.pb(9,0,null,0,1,"ion-icon",[["name","person-circle-outline"],["slot","icon-only"]],null,null,null,u.W,u.m)),e.ob(10,49152,null,0,s.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(n()(),e.pb(11,0,null,null,29,"ion-content",[],null,null,null,u.S,u.i)),e.ob(12,49152,null,0,s.u,[e.h,e.k,e.x],null,null),(n()(),e.eb(16777216,null,0,1,null,d)),e.ob(14,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,0,1,null,y)),e.ob(16,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(17,0,null,0,4,"ion-buttons",[],null,null,null,u.P,u.f)),e.ob(18,49152,null,0,s.l,[e.h,e.k,e.x],null,null),(n()(),e.pb(19,0,null,0,2,"ion-back-button",[["defaultHref","/hotel/tabs/hotel-home/nourishment"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e.Bb(n,21).onClick(t)&&o),o}),u.M,u.c)),e.ob(20,49152,null,0,s.g,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(21,16384,null,0,s.h,[[2,s.fb],s.Eb],{defaultHref:[0,"defaultHref"]},null),(n()(),e.pb(22,0,null,0,6,"ion-row",[["style","padding: 0px 9px; margin-bottom: 10px;"]],null,null,null,u.fb,u.v)),e.ob(23,49152,null,0,s.gb,[e.h,e.k,e.x],null,null),(n()(),e.pb(24,0,null,0,4,"ion-col",[["size","12"]],null,null,null,u.R,u.h)),e.ob(25,49152,null,0,s.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(26,0,null,0,2,"ion-thumbnail",[],null,null,null,u.qb,u.G)),e.ob(27,49152,null,0,s.wb,[e.h,e.k,e.x],null,null),(n()(),e.pb(28,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/bar-banner.jpg"]],null,null,null,null,null)),(n()(),e.pb(29,0,null,0,9,"div",[["class","nourishment-section"]],null,null,null,null,null)),(n()(),e.pb(30,0,null,null,1,"span",[["class","header-txt"],["style","font-size: 16px; font-weight: 500; text-transform: uppercase;"]],null,null,null,null,null)),(n()(),e.Gb(-1,null,["Refreshment Menu"])),(n()(),e.pb(32,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.pb(33,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.pb(34,0,null,null,0,"div",[["class","nourishment-divider"]],null,null,null,null,null)),(n()(),e.pb(35,0,null,null,3,"div",[["class","nourishment-el"]],null,null,null,null,null)),(n()(),e.pb(36,0,null,null,2,"div",[["class","toggleMenus"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,k)),e.ob(38,278528,null,0,r.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(n()(),e.pb(39,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),e.pb(40,0,null,0,0,"br",[],null,null,null,null,null))],(function(n,l){var t=l.component;n(l,10,0,"person-circle-outline"),n(l,14,0,!0===t.isIos&&0!==t.itemQty),n(l,16,0,!1===t.isIos),n(l,20,0,"/hotel/tabs/hotel-home/nourishment"),n(l,21,0,"/hotel/tabs/hotel-home/nourishment"),n(l,25,0,"12"),n(l,38,0,t.menuItemsApi.without_category_items)}),null)}var _=e.lb("app-irs-in-room-refreshment",p,(function(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-irs-in-room-refreshment",[],null,null,null,C,b)),e.ob(1,114688,null,0,p,[s.Db,s.Gb,s.Mb,m.m,a.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),M=t("s7LF"),w=function n(){_classCallCheck(this,n)};t.d(l,"IrsInRoomRefreshmentPageModuleNgFactory",(function(){return O}));var O=e.mb(o,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[i.a,_]],[3,e.j],e.v]),e.zb(4608,r.k,r.j,[e.s,[2,r.q]]),e.zb(4608,M.j,M.j,[]),e.zb(4608,s.b,s.b,[e.x,e.g]),e.zb(4608,s.Db,s.Db,[s.b,e.j,e.p]),e.zb(4608,s.Hb,s.Hb,[s.b,e.j,e.p]),e.zb(1073742336,r.b,r.b,[]),e.zb(1073742336,M.i,M.i,[]),e.zb(1073742336,M.a,M.a,[]),e.zb(1073742336,s.Bb,s.Bb,[]),e.zb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),e.zb(1073742336,w,w,[]),e.zb(1073742336,o,o,[]),e.zb(1024,m.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);