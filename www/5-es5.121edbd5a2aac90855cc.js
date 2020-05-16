function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var t=0;t<n.length;t++){var e=n[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,t){return n&&_defineProperties(l.prototype,n),t&&_defineProperties(l,t),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ni0Q:function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));var e=function(){function l(n,t){_classCallCheck(this,l),this.modalCtrl=n,this.router=t,this.guestQty=0}return _createClass(l,[{key:"ngOnInit",value:function(){console.log(this.cartItems)}},{key:"addItemInitial",value:function(l){l.qty+=1,console.log(l.qty+1,l)}},{key:"incrementQty",value:function(l){l.qty+=1,console.log(l.qty+1,l)}},{key:"decrementQty",value:function(l){l.qty-1<1?(l.qty=0,console.log(l.qty,l)):(l.qty-=1,console.log(l.qty,l))}},{key:"incrementGuest",value:function(){this.guestQty+=1}},{key:"decrementGuest",value:function(){this.guestQty-1<1?this.guestQty=0:this.guestQty-=1}},{key:"dismissCart",value:function(){this.modalCtrl.dismiss()}},{key:"orderPlaced",value:function(){this.dismissCart(),this.router.navigateByUrl("/confirmation")}}]),l}()},tf2D:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J"),o=function l(){_classCallCheck(this,l)},u=t("pMnS"),i=t("MKJQ"),r=t("sZkV"),a=t("SVse"),c=t("ni0Q"),s=function(){function l(n,t){_classCallCheck(this,l),this.modalCtrl=n,this.platform=t,this.itemQty=0,this.menuItems=[{categoryName:"CONTINENTAL BREAKFAST",items:[{name:"Baker\u2019s Basket",price:550,qty:0,ingredients:"Danish, Croissant and Muffins or White, Brown, or Multigrain toast with preserves and butter",el:""},{name:"Freshly squeezed fruit juice",price:550,qty:0,ingredients:"orange pineapple or watermelon",el:""},{name:"Bowl of Seasonal cut fruits",price:550,qty:0,ingredients:"",el:""},{name:"Choice of Cereals",price:550,qty:0,ingredients:"Corn flakes/ Wheat flakes/ Chocolate flakes/ Raggi Bites/Dry muesli with option of Full cream, skimmed or soy milk",el:""},{name:"Plain or Fruit yogurt",price:550,qty:0,ingredients:"Mango, blueberry, strawberry, raspberry, Banana",el:""}]},{categoryName:"SIGNATURE SPECIALTY",items:[{name:"Smoked salmon Scrambled Egg",price:575,qty:0,ingredients:"Multigrain Sour Doug Toast, Arugula, Beurre Noisette",el:""},{name:"Classic Egg Benedict",price:575,qty:0,ingredients:"Grilled homemade muffin baked with B\xe9arnaise / Smoked ham or you may like Smoked Salmon",el:""},{name:"Shakshuka",price:495,qty:0,ingredients:"Baked egg, Hearty tomato and pepper sauce / Labneh and Chilli Flakes",el:""},{name:"Waffle",price:495,qty:0,ingredients:"Whipped cream, Maple syrup / Candied Fig and Salted Caramel",el:""},{name:"Pancake",price:495,qty:0,ingredients:"Whipped cream, Maple syrup / Choco chip, Blue berry compote, caramelized banana, walnut",el:""}]}]}return _createClass(l,[{key:"ngOnInit",value:function(){this.isIos=this.platform.is("ios"),console.log(this.isIos)}},{key:"addItemInitial",value:function(l){l.qty+=1,this.itemQty+=1,console.log(l.qty+1,l,this.itemQty)}},{key:"incrementQty",value:function(l){l.qty+=1,this.itemQty+=1,console.log(l.qty+1,l,this.itemQty)}},{key:"decrementQty",value:function(l){l.qty-1<1?(l.qty=0,this.itemQty-=1,console.log(l.qty,l,this.itemQty)):(l.qty-=1,this.itemQty-=1,console.log(l.qty,l,this.itemQty))}},{key:"reviewOrder",value:function(){localStorage.removeItem("cart-items");var l=[];this.menuItems.filter((function(n){n.items.filter((function(n){0!==n.qty&&l.push(n)}))})),console.log(l),localStorage.setItem("cart-items",JSON.stringify(l)),this.modalCtrl.create({component:c.a,componentProps:{cartItems:l}}).then((function(l){l.present()}))}}]),l}(),p=e.nb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--background:#FCFCF7}.nourishment-section[_ngcontent-%COMP%]{padding:10px 13px}.nourishment-divider[_ngcontent-%COMP%]{width:100%;height:6px;background:#8ba47e}.el-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;text-align:center;border-bottom:1px solid #cdc3c1;line-height:.1em;margin:10px 0 20px;color:#747474}.el-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#fcfcf7;padding:0 10px}.el-description[_ngcontent-%COMP%]{padding:0 5px;font-size:14px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]{line-height:13px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]:last-child{margin-bottom:5px}.item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%], .item.sc-ion-label-md-h[_ngcontent-%COMP%]{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:pre-wrap!important;overflow:hidden;box-sizing:border-box}.sc-ion-popover-md-h[_ngcontent-%COMP%]{--width:250px;--max-height:60%!important;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),0 8px 10px 1px rgba(0, 0, 0, 0.14),0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md[_ngcontent-%COMP%]{border-radius:4px;transform-origin:left top;bottom:12px;top:20%!important;left:113px;transform-origin:right top}ion-item[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]{--background:transparent!important}.veg-toggle-ui[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-right:25px}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.category-name[_ngcontent-%COMP%]{padding:5px 35px 5px 16px;background:#eb3237;-webkit-clip-path:polygon(0 0,0 100%,85% 100%,100% 0);clip-path:polygon(0 0,0 100%,85% 100%,100% 0);color:#fff;text-transform:uppercase;font-weight:700}.thumbnail-wrap[_ngcontent-%COMP%]{position:relative;margin-right:10px}.food-type-icon[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;width:16px}ion-thumbnail[_ngcontent-%COMP%]{width:70px;height:70px}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:5px}ion-label[_ngcontent-%COMP%]{display:flex!important;flex-direction:row;justify-content:space-between}.details[_ngcontent-%COMP%]{width:78%}.add-section[_ngcontent-%COMP%]{width:22%}.add-item-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;border-width:2px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;-o-border-image:initial;border-image:initial;border-radius:5px;align-items:center;height:2.2em;font-size:13px;width:73px}.add-item-button-left[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-left:-8px;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#fff}.add-item-button-right[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-right:-8px;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#fff}.details-text[_ngcontent-%COMP%]{padding:0 16px;margin-top:-5px;font-size:13px}.category-small[_ngcontent-%COMP%]{color:#868686;text-transform:uppercase}.price[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.9px}.nourishment-el[_ngcontent-%COMP%]{margin-bottom:40px;margin-left:-13px;margin-right:-13px}ion-button[_ngcontent-%COMP%]{--border-width:0.5px}"]],data:{}});function b(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,6,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.M,i.j)),e.ob(1,49152,null,0,r.w,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.pb(2,0,null,0,4,"ion-button",[["color","success"],["fill","solid"],["mode","md"],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.reviewOrder()&&e),e}),i.H,i.e)),e.ob(3,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],mode:[2,"mode"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),e.Gb(-1,0,[" View Cart "])),(l()(),e.pb(5,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"],["slot","end"]],null,null,null,i.N,i.k)),e.ob(6,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"end","bottom"),l(n,3,0,"success","solid","md","round","small"),l(n,6,0,"chevron-forward-outline")}),null)}function d(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["ITEM"]))],null,null)}function m(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["ITEMS"]))],null,null)}function g(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,12,"div",[["class","place-order-btn ion-padding-horizontal"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,11,"ion-button",[["color","success"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.reviewOrder()&&e),e}),i.H,i.e)),e.ob(2,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(l()(),e.pb(3,0,null,0,1,"ion-icon",[["name","caret-forward-outline"],["size","small"],["slot","end"]],null,null,null,i.N,i.k)),e.ob(4,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),e.pb(5,0,null,0,6,"small",[["style","margin-right: 50px; font-weight: 500;"]],null,null,null,null,null)),(l()(),e.Gb(6,null,[" "," "])),(l()(),e.pb(7,0,null,null,4,"span",[["style","margin-left: 3px;"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,d)),e.ob(9,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,m)),e.ob(11,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Gb(-1,0,[" View Cart "]))],(function(l,n){var t=n.component;l(n,2,0,"success","block","md"),l(n,4,0,"caret-forward-outline","small"),l(n,9,0,1===t.itemQty),l(n,11,0,t.itemQty>1)}),(function(l,n){l(n,6,0,n.component.itemQty)}))}function f(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,2,"div",[["class","bottom-buttons"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,g)),e.ob(2,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,2,0,0!==t.itemQty&&!1===t.isIos)}),null)}function h(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,4,"ion-button",[["color","medium"],["fill","outline"],["size","small"],["style","text-transform: capitalize; font-weight: 400;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.addItemInitial(l.parent.context.$implicit)&&e),e}),i.H,i.e)),e.ob(1,49152,null,0,r.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),e.Gb(-1,0,[" Add "])),(l()(),e.pb(3,0,null,0,1,"ion-icon",[["name","add-outline"],["size","small"],["slot","icon-only"],["style","margin-right: 5px;"]],null,null,null,i.N,i.k)),e.ob(4,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,1,0,"medium","outline","small"),l(n,4,0,"add-outline","small")}),null)}function y(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,5,"div",[["class","add-item-button"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"ion-icon",[["class","add-item-button-left"],["name","remove-outline"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.decrementQty(l.parent.context.$implicit)&&e),e}),i.N,i.k)),e.ob(2,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Gb(3,null,[" "," "])),(l()(),e.pb(4,0,null,null,1,"ion-icon",[["class","add-item-button-right"],["name","add-outline"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.incrementQty(l.parent.context.$implicit)&&e),e}),i.N,i.k)),e.ob(5,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"remove-outline"),l(n,5,0,"add-outline")}),(function(l,n){l(n,3,0,n.parent.context.$implicit.qty)}))}function x(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,17,"ion-list",[["lines","none"],["mode","md"],["style","background: transparent;"]],null,null,null,i.S,i.o)),e.ob(1,49152,null,0,r.O,[e.h,e.k,e.x],{lines:[0,"lines"],mode:[1,"mode"]},null),(l()(),e.pb(2,0,null,0,15,"ion-item",[["mode","md"],["style","background: transparent;"]],null,null,null,i.P,i.m)),e.ob(3,49152,null,0,r.H,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(l()(),e.pb(4,0,null,0,13,"ion-label",[],null,null,null,i.Q,i.n)),e.ob(5,49152,null,0,r.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,6,"div",[["class","details"]],null,null,null,null,null)),(l()(),e.pb(7,0,null,null,1,"h2",[["style","font-size: 13px; display: flex; align-items: center; white-space: pre-wrap;"]],null,null,null,null,null)),(l()(),e.Gb(8,null,[" "," "])),(l()(),e.pb(9,0,null,null,1,"h3",[["class","price"]],null,null,null,null,null)),(l()(),e.Gb(10,null,["\u20b9",".00"])),(l()(),e.pb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(12,null,["",""])),(l()(),e.pb(13,0,null,0,4,"div",[["class","add-action"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,h)),e.ob(15,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,y)),e.ob(17,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"none","md"),l(n,3,0,"md"),l(n,15,0,0===n.context.$implicit.qty),l(n,17,0,0!==n.context.$implicit.qty)}),(function(l,n){l(n,8,0,n.context.$implicit.name),l(n,10,0,n.context.$implicit.price),l(n,12,0,n.context.$implicit.ingredients)}))}function k(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,7,"div",[["class","nourishment-el"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,3,"div",[["class","el-category"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Gb(4,null,["",""])),(l()(),e.pb(5,0,null,null,2,"div",[["class","toggleMenus"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,x)),e.ob(7,278528,null,0,a.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,7,0,n.context.$implicit.items)}),(function(l,n){l(n,4,0,n.context.$implicit.categoryName)}))}function C(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,10,"ion-toolbar",[],null,null,null,i.fb,i.C)),e.ob(1,49152,null,0,r.zb,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,2,"ion-title",[],null,null,null,i.db,i.A)),e.ob(3,49152,null,0,r.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),e.pb(5,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.I,i.f)),e.ob(6,49152,null,0,r.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,3,"ion-button",[],null,null,null,i.H,i.e)),e.ob(8,49152,null,0,r.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(9,0,null,0,1,"ion-icon",[["name","person-circle-outline"],["slot","icon-only"]],null,null,null,i.N,i.k)),e.ob(10,49152,null,0,r.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(11,0,null,null,25,"ion-content",[],null,null,null,i.K,i.h)),e.ob(12,49152,null,0,r.u,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,b)),e.ob(14,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,0,1,null,f)),e.ob(16,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(17,0,null,0,4,"ion-buttons",[],null,null,null,i.I,i.f)),e.ob(18,49152,null,0,r.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(19,0,null,0,2,"ion-back-button",[["defaultHref","/hotel/tabs/hotel-home/nourishment"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==e.Bb(l,21).onClick(t)&&o),o}),i.F,i.c)),e.ob(20,49152,null,0,r.g,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(21,16384,null,0,r.h,[[2,r.fb],r.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(22,0,null,0,12,"div",[["class","nourishment-section"]],null,null,null,null,null)),(l()(),e.pb(23,0,null,null,1,"span",[["class","header-txt"],["style","font-size: 16px; font-weight: 500;"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["BREAKFAST"])),(l()(),e.pb(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(26,0,null,null,1,"span",[["style","font-size: 12px;"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["6.00am - 11.00am"])),(l()(),e.pb(28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(29,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(30,0,null,null,0,"div",[["class","nourishment-divider"]],null,null,null,null,null)),(l()(),e.pb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(32,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,k)),e.ob(34,278528,null,0,a.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(35,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(36,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){var t=n.component;l(n,10,0,"person-circle-outline"),l(n,14,0,!0===t.isIos&&0!==t.itemQty),l(n,16,0,!1===t.isIos),l(n,20,0,"/hotel/tabs/hotel-home/nourishment"),l(n,21,0,"/hotel/tabs/hotel-home/nourishment"),l(n,34,0,t.menuItems)}),null)}var v=e.lb("app-pre-order-breakfast",s,(function(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-pre-order-breakfast",[],null,null,null,C,p)),e.ob(1,114688,null,0,s,[r.Db,r.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),M=t("s7LF"),w=t("iInd"),O=function l(){_classCallCheck(this,l)};t.d(n,"PreOrderBreakfastPageModuleNgFactory",(function(){return P}));var P=e.mb(o,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[u.a,v]],[3,e.j],e.v]),e.zb(4608,a.k,a.j,[e.s,[2,a.q]]),e.zb(4608,M.j,M.j,[]),e.zb(4608,r.b,r.b,[e.x,e.g]),e.zb(4608,r.Db,r.Db,[r.b,e.j,e.p]),e.zb(4608,r.Hb,r.Hb,[r.b,e.j,e.p]),e.zb(1073742336,a.b,a.b,[]),e.zb(1073742336,M.i,M.i,[]),e.zb(1073742336,M.a,M.a,[]),e.zb(1073742336,r.Bb,r.Bb,[]),e.zb(1073742336,w.o,w.o,[[2,w.t],[2,w.m]]),e.zb(1073742336,O,O,[]),e.zb(1073742336,o,o,[]),e.zb(1024,w.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);