(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"6uE6":function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class i{}var u=t("pMnS"),o=t("MKJQ"),a=t("sZkV"),r=t("SVse"),s=t("9GtQ");class c{constructor(l,n,t){this.popoverCtrl=l,this.modalCtrl=n,this.platform=t,this.itemQty=0,this.menuItems=[{categoryName:"CUT & STYLE",items:[{name:"HAIR CUT (MALE)-45 Minute",price:1200,qty:0,details:""},{name:"HAIR CUT (FEMALE)-45 Minute",price:2e3,qty:0,details:""},{name:"HAIR TRIMMING ( FOR HER) -30 Minute",price:1200,qty:0,details:""}]},{categoryName:"BLOWOUTS",items:[{name:"SHAMPOO & CONDITIONING (FEMALE) -45 Minute",price:800,qty:0,details:""},{name:"BLOW DRYER -45 Minute",price:1200,qty:0,details:""},{name:"SHAMPOO & BLOW DRYER -45 Minutes",price:1800,qty:0,details:""}]},{categoryName:"UPSTYLES",items:[{name:"MEN\u2019S HAIR STYLING -30 Minute",price:500,qty:0,details:""},{name:"HAIR IRONING (Small) -30 Minute",price:1500,qty:0,details:""},{name:"HAIR IRONING (Medium) -30 Minute",price:1800,qty:0,details:""},{name:"HAIR IRONING (Large) -30 Minute",price:2200,qty:0,details:""},{name:"HAIR DO -30 Minutes",price:2300,qty:0,details:""}]},{categoryName:"SHAVE & TRIM",items:[{name:"BEARD & MOUSTACHE TRIM -30 Minute",price:750,qty:0,details:""},{name:"CLASSIC SHAVE -30 Minute",price:1500,qty:0,details:""},{name:"ROYAL SHAVE -30 Minute",price:2e3,qty:0,details:""},{name:"CHEST WAXING -45 Minute",price:1500,qty:0,details:""}]},{categoryName:"HAIR SPA",items:[{name:"ENRICH REPAIR -60 Minute",price:4e3,qty:0,details:""},{name:"ENERGIES -60 Minute",price:4200,qty:0,details:""},{name:"ANTI-DANDRUFF -60 Minute",price:4500,qty:0,details:""},{name:"ANTI-HAIR FALL -60 Minute",price:5e3,qty:0,details:""}]},{categoryName:"COLORS",items:[{name:"ROOT TOUCH UP (MALE)-45 Minute",price:2e3,qty:0,details:""},{name:"ROOT TOUCH UP (FEMALE)-45 Minute",price:3e3,qty:0,details:""},{name:"GLOBAL HAIR COLOR (MALE)-75 Minute",price:3e3,qty:0,details:""},{name:"GLOBAL HAIR COLOR (FEMALE)-75 Minute",price:4e3,qty:0,details:""},{name:"GLOBAL STREAKING -30 Minute",price:9999,qty:0,details:""}]},{categoryName:"HAND & FEET CARE",items:[{name:"NAIL CUT & FILE -30 Minute",price:750,qty:0,details:""},{name:"ROYAL SPA MANICURE",price:3e3,qty:0,details:""},{name:"ROYAL SPA PEDICURE -75 Minute",price:3250,qty:0,details:""}]}]}ngOnInit(){this.isIos=this.platform.is("ios"),console.log(this.isIos)}addItemInitial(l){l.qty+=1,this.itemQty+=1,console.log(l.qty+1,l,this.itemQty)}incrementQty(l){l.qty+=1,this.itemQty+=1,console.log(l.qty+1,l,this.itemQty)}decrementQty(l){l.qty-1<1?(l.qty=0,this.itemQty-=1,console.log(l.qty,l,this.itemQty)):(l.qty-=1,this.itemQty-=1,console.log(l.qty,l,this.itemQty))}reviewOrder(){const l=[];this.menuItems.filter(n=>{n.items.filter(n=>{0!==n.qty&&l.push(n)})}),console.log(l),this.modalCtrl.create({component:s.a,componentProps:{cartItems:l,itemQty:this.itemQty}}).then(l=>{l.present(),l.onDidDismiss().then(l=>{"closed"===l.data.dismissed&&(console.log(l),this.itemQty=l.data.totalQty)})})}}var p=e.nb({encapsulation:0,styles:[[".spa-divider[_ngcontent-%COMP%]{background-color:#d8d8d8;height:4px;width:30%}ion-content[_ngcontent-%COMP%]{--background:#FCFCF7}.nourishment-section[_ngcontent-%COMP%]{padding:10px 13px}.nourishment-divider[_ngcontent-%COMP%]{width:100%;height:6px;background:#8ba47e}.el-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;text-align:center;border-bottom:1px solid #cdc3c1;line-height:.1em;margin:10px 0 20px;color:#747474}.el-category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#fcfcf7;padding:0 10px}.el-description[_ngcontent-%COMP%]{padding:0 5px;font-size:14px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]{line-height:13px}.custom-skeleton[_ngcontent-%COMP%]   ion-skeleton-text[_ngcontent-%COMP%]:last-child{margin-bottom:5px}.item[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%], .item.sc-ion-label-md-h[_ngcontent-%COMP%]{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:pre-wrap!important;overflow:hidden;box-sizing:border-box}.sc-ion-popover-md-h[_ngcontent-%COMP%]{--width:250px;--max-height:60%!important;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2),0 8px 10px 1px rgba(0, 0, 0, 0.14),0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content.sc-ion-popover-md[_ngcontent-%COMP%]{border-radius:4px;transform-origin:left top;bottom:12px;top:20%!important;left:113px;transform-origin:right top}ion-item[_ngcontent-%COMP%], ion-list[_ngcontent-%COMP%]{--background:transparent!important}.veg-toggle-ui[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;margin-right:25px}.bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.category-name[_ngcontent-%COMP%]{padding:5px 35px 5px 16px;background:#eb3237;-webkit-clip-path:polygon(0 0,0 100%,85% 100%,100% 0);clip-path:polygon(0 0,0 100%,85% 100%,100% 0);color:#fff;text-transform:uppercase;font-weight:700}.thumbnail-wrap[_ngcontent-%COMP%]{position:relative;margin-right:10px}.food-type-icon[_ngcontent-%COMP%]{position:absolute;top:4px;right:4px;width:16px}ion-thumbnail[_ngcontent-%COMP%]{width:100%;height:144px}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:8px}ion-label[_ngcontent-%COMP%]{display:flex!important;flex-direction:row;justify-content:space-between}.details[_ngcontent-%COMP%]{width:78%}.add-section[_ngcontent-%COMP%]{width:22%}.add-item-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;border-width:2px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;-o-border-image:initial;border-image:initial;border-radius:5px;align-items:center;height:2.2em;font-size:13px;width:73px}.add-item-button-left[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-left:-8px;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#fff}.add-item-button-right[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-right:-8px;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#fff}.details-text[_ngcontent-%COMP%]{padding:0 16px;margin-top:-5px;font-size:13px}.category-small[_ngcontent-%COMP%]{color:#868686;text-transform:uppercase}.price[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.9px}.nourishment-el[_ngcontent-%COMP%]{margin-bottom:40px;margin-left:-13px;margin-right:-13px}ion-button[_ngcontent-%COMP%]{--border-width:0.5px}"]],data:{}});function b(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,6,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,o.U,o.k)),e.ob(1,49152,null,0,a.w,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.pb(2,0,null,0,4,"ion-button",[["color","success"],["fill","solid"],["mode","md"],["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.reviewOrder()&&e),e}),o.O,o.e)),e.ob(3,49152,null,0,a.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],mode:[2,"mode"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),e.Gb(-1,0,[" View Cart "])),(l()(),e.pb(5,0,null,0,1,"ion-icon",[["name","chevron-forward-outline"],["slot","end"]],null,null,null,o.W,o.m)),e.ob(6,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"end","bottom"),l(n,3,0,"success","solid","md","round","small"),l(n,6,0,"chevron-forward-outline")}),null)}function m(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["ITEM"]))],null,null)}function d(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,["ITEMS"]))],null,null)}function g(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,12,"div",[["class","place-order-btn ion-padding-horizontal"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,11,"ion-button",[["color","success"],["expand","block"],["mode","md"],["style","text-transform: capitalize;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.reviewOrder()&&e),e}),o.O,o.e)),e.ob(2,49152,null,0,a.k,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],mode:[2,"mode"]},null),(l()(),e.pb(3,0,null,0,1,"ion-icon",[["name","caret-forward-outline"],["size","small"],["slot","end"]],null,null,null,o.W,o.m)),e.ob(4,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),e.pb(5,0,null,0,6,"small",[["style","margin-right: 50px; font-weight: 500;"]],null,null,null,null,null)),(l()(),e.Gb(6,null,[" "," "])),(l()(),e.pb(7,0,null,null,4,"span",[["style","margin-left: 3px;"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,m)),e.ob(9,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,d)),e.ob(11,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Gb(-1,0,[" View Cart "]))],(function(l,n){var t=n.component;l(n,2,0,"success","block","md"),l(n,4,0,"caret-forward-outline","small"),l(n,9,0,1===t.itemQty),l(n,11,0,t.itemQty>1)}),(function(l,n){l(n,6,0,n.component.itemQty)}))}function h(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,2,"div",[["class","bottom-buttons"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,g)),e.ob(2,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,2,0,0!==t.itemQty&&!1===t.isIos)}),null)}function f(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,0,"img",[["alt",""],["src","../../../../../assets/icon/veg.png"],["width","18px"]],null,null,null,null,null))],null,null)}function x(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,0,"img",[["alt",""],["src","../../../../../assets/icon/non-veg.png"],["width","18px"]],null,null,null,null,null))],null,null)}function y(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,4,"ion-button",[["color","medium"],["fill","outline"],["size","small"],["style","text-transform: capitalize; font-weight: 400;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.addItemInitial(l.parent.context.$implicit)&&e),e}),o.O,o.e)),e.ob(1,49152,null,0,a.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),e.Gb(-1,0,[" Add "])),(l()(),e.pb(3,0,null,0,1,"ion-icon",[["name","add-outline"],["size","small"],["slot","icon-only"],["style","margin-right: 5px;"]],null,null,null,o.W,o.m)),e.ob(4,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"],size:[1,"size"]},null)],(function(l,n){l(n,1,0,"medium","outline","small"),l(n,4,0,"add-outline","small")}),null)}function M(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,5,"div",[["class","add-item-button"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"ion-icon",[["class","add-item-button-left"],["name","remove-outline"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.decrementQty(l.parent.context.$implicit)&&e),e}),o.W,o.m)),e.ob(2,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Gb(3,null,[" "," "])),(l()(),e.pb(4,0,null,null,1,"ion-icon",[["class","add-item-button-right"],["name","add-outline"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.incrementQty(l.parent.context.$implicit)&&e),e}),o.W,o.m)),e.ob(5,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,2,0,"remove-outline"),l(n,5,0,"add-outline")}),(function(l,n){l(n,3,0,n.parent.context.$implicit.qty)}))}function O(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,21,"ion-list",[["lines","none"],["mode","md"],["style","background: transparent;"]],null,null,null,o.bb,o.q)),e.ob(1,49152,null,0,a.O,[e.h,e.k,e.x],{lines:[0,"lines"],mode:[1,"mode"]},null),(l()(),e.pb(2,0,null,0,19,"ion-item",[["mode","md"],["style","background: transparent;"]],null,null,null,o.Y,o.o)),e.ob(3,49152,null,0,a.H,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(l()(),e.pb(4,0,null,0,17,"ion-label",[],null,null,null,o.Z,o.p)),e.ob(5,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,10,"div",[["class","details"]],null,null,null,null,null)),(l()(),e.pb(7,0,null,null,5,"h2",[["style","font-size: 13px; display: flex; align-items: center; white-space: pre-wrap;"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,f)),e.ob(9,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,x)),e.ob(11,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.Gb(12,null,[" "," "])),(l()(),e.pb(13,0,null,null,1,"h3",[["class","price"]],null,null,null,null,null)),(l()(),e.Gb(14,null,["\u20b9",".00"])),(l()(),e.pb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(16,null,["",""])),(l()(),e.pb(17,0,null,0,4,"div",[["class","add-action"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,y)),e.ob(19,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,null,1,null,M)),e.ob(21,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"none","md"),l(n,3,0,"md"),l(n,9,0,"veg"===n.context.$implicit.type),l(n,11,0,"non-veg"===n.context.$implicit.type),l(n,19,0,0===n.context.$implicit.qty),l(n,21,0,0!==n.context.$implicit.qty)}),(function(l,n){l(n,12,0,n.context.$implicit.name),l(n,14,0,n.context.$implicit.price),l(n,16,0,n.context.$implicit.details)}))}function C(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,7,"div",[["class","nourishment-el"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,3,"div",[["class","el-category"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),e.pb(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Gb(4,null,["",""])),(l()(),e.pb(5,0,null,null,2,"div",[["class","toggleMenus"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,O)),e.ob(7,278528,null,0,r.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,7,0,n.context.$implicit.items)}),(function(l,n){l(n,4,0,n.context.$implicit.categoryName)}))}function I(l){return e.Hb(0,[e.Eb(402653184,1,{content:0}),(l()(),e.pb(1,0,null,null,10,"ion-toolbar",[],null,null,null,o.tb,o.J)),e.ob(2,49152,null,0,a.zb,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,2,"ion-title",[],null,null,null,o.rb,o.H)),e.ob(4,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),e.pb(6,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,o.P,o.f)),e.ob(7,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,3,"ion-button",[],null,null,null,o.O,o.e)),e.ob(9,49152,null,0,a.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(10,0,null,0,1,"ion-icon",[["name","person-circle-outline"],["slot","icon-only"]],null,null,null,o.W,o.m)),e.ob(11,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(12,0,null,null,29,"ion-content",[],null,null,null,o.S,o.i)),e.ob(13,49152,[[1,4]],0,a.u,[e.h,e.k,e.x],null,null),(l()(),e.pb(14,0,null,0,4,"ion-buttons",[],null,null,null,o.P,o.f)),e.ob(15,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,0,2,"ion-back-button",[["defaultHref","/hotel/tabs/hotel-home/spa"]],null,[[null,"click"]],(function(l,n,t){var i=!0;return"click"===n&&(i=!1!==e.Bb(l,18).onClick(t)&&i),i}),o.M,o.c)),e.ob(17,49152,null,0,a.g,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(18,16384,null,0,a.h,[[2,a.fb],a.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(19,0,null,0,6,"ion-row",[["style","margin-bottom: 10px; padding: 0px 8px;"]],null,null,null,o.fb,o.v)),e.ob(20,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.pb(21,0,null,0,4,"ion-col",[["size","12"]],null,null,null,o.R,o.h)),e.ob(22,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(23,0,null,0,2,"ion-thumbnail",[],null,null,null,o.qb,o.G)),e.ob(24,49152,null,0,a.wb,[e.h,e.k,e.x],null,null),(l()(),e.pb(25,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/salon-banner.png"],["style","border-radius: 8px; box-shadow: 0px 0px 3px #ccc;"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,0,1,null,b)),e.ob(27,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.eb(16777216,null,0,1,null,h)),e.ob(29,16384,null,0,r.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(30,0,null,0,9,"div",[["class","nourishment-section"]],null,null,null,null,null)),(l()(),e.pb(31,0,null,null,1,"span",[["class","header-txt"],["style","font-size: 16px; font-weight: 500;"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["SALON"])),(l()(),e.pb(33,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(34,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(35,0,null,null,0,"div",[["class","nourishment-divider"]],null,null,null,null,null)),(l()(),e.pb(36,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(37,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,C)),e.ob(39,278528,null,0,r.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.pb(40,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(41,0,null,0,0,"br",[],null,null,null,null,null))],(function(l,n){var t=n.component;l(n,11,0,"person-circle-outline"),l(n,17,0,"/hotel/tabs/hotel-home/spa"),l(n,18,0,"/hotel/tabs/hotel-home/spa"),l(n,22,0,"12"),l(n,27,0,!0===t.isIos&&0!==t.itemQty),l(n,29,0,!1===t.isIos),l(n,39,0,t.menuItems)}),null)}function k(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-spa-explore",[],null,null,null,I,p)),e.ob(1,114688,null,0,c,[a.Hb,a.Db,a.Gb],null,null)],(function(l,n){l(n,1,0)}),null)}var v=e.lb("app-spa-explore",c,k,{},{},[]);class P{constructor(l){this.popoverCtrl=l,this.items=[{name:"QUAN SIGNATURES",value:"quan-sign"},{name:"INDIAN TRADITIONAL TREATMENT",value:"indian-trade"}]}ngOnInit(){}dismissPopover(l){this.popoverCtrl.dismiss({data:l,role:"closed"})}}var q=e.nb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{font-size:14px}"]],data:{}});function A(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,3,"div",[["class","cate"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,2,"ion-item",[["button",""],["detail","false"],["style","font-size: 13px;"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.dismissPopover(l.context.$implicit.value)&&e),e}),o.Y,o.o)),e.ob(2,49152,null,0,a.H,[e.h,e.k,e.x],{button:[0,"button"],detail:[1,"detail"]},null),(l()(),e.Gb(3,0,[" "," "]))],(function(l,n){l(n,2,0,"","false")}),(function(l,n){l(n,3,0,n.context.$implicit.name)}))}function w(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,3,"ion-list",[["lines","none"]],null,null,null,o.bb,o.q)),e.ob(1,49152,null,0,a.O,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.eb(16777216,null,0,1,null,A)),e.ob(3,278528,null,0,r.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,1,0,"none"),l(n,3,0,t.items)}),null)}function H(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-spa-explore-popover",[],null,null,null,w,q)),e.ob(1,114688,null,0,P,[a.Hb],null,null)],(function(l,n){l(n,1,0)}),null)}var z=e.lb("app-spa-explore-popover",P,H,{},{},[]),E=t("s7LF"),R=t("iInd");class _{}t.d(n,"SpaExplorePageModuleNgFactory",(function(){return Q}));var Q=e.mb(i,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[u.a,v,z]],[3,e.j],e.v]),e.zb(4608,r.k,r.j,[e.s,[2,r.q]]),e.zb(4608,E.j,E.j,[]),e.zb(4608,a.b,a.b,[e.x,e.g]),e.zb(4608,a.Db,a.Db,[a.b,e.j,e.p]),e.zb(4608,a.Hb,a.Hb,[a.b,e.j,e.p]),e.zb(1073742336,r.b,r.b,[]),e.zb(1073742336,E.i,E.i,[]),e.zb(1073742336,E.a,E.a,[]),e.zb(1073742336,a.Bb,a.Bb,[]),e.zb(1073742336,R.o,R.o,[[2,R.t],[2,R.m]]),e.zb(1073742336,_,_,[]),e.zb(1073742336,i,i,[]),e.zb(1024,R.k,(function(){return[[{path:"",component:c}]]}),[])])}))},"9GtQ":function(l,n,t){"use strict";t.d(n,"a",(function(){return e}));class e{constructor(l,n,t){this.modalCtrl=l,this.router=n,this.toastCtrl=t,this.progressLoading=!1,this.guestQty=0}ngOnInit(){console.log(this.cartItems),void 0!==this.cartItems&&this.calculateTotalPrice()}calculateItemPrice(l,n){return l*(+(.18*n).toFixed(2)+n)}calculateTotalPrice(){let l=null;this.cartItems.forEach(n=>{l+=n.qty*(n.price+.18*n.price)}),this.totalAmount=l}addItemInitial(l){l.count+=1,console.log(l.qty+1,l)}incrementQty(l){l.qty+=1,this.itemQty+=1,console.log(l.qty+1,l),this.calculateTotalPrice()}decrementQty(l){l.count-1<1?(l.qty=0,this.itemQty=0,console.log(l.qty,l),this.calculateTotalPrice(),0===this.itemQty&&this.dismissCart()):(l.qty-=1,this.itemQty-=1,console.log(l.qty,l),this.calculateTotalPrice(),0===this.itemQty&&this.dismissCart())}incrementGuest(){this.guestQty+=1}decrementGuest(){this.guestQty-1<1?this.guestQty=0:this.guestQty-=1}dismissCart(){this.modalCtrl.dismiss({dismissed:"closed",totalQty:this.itemQty})}orderPlaced(){return void 0===this.roomNo?(this.toastCtrl.create({message:"Please enter room number!",keyboardClose:!0,duration:3e3,color:"warning",position:"top"}).then(l=>{l.present()}),!1):0===this.guestQty?(this.toastCtrl.create({message:"Please select number of guests!",keyboardClose:!0,duration:3e3,color:"warning",position:"top"}).then(l=>{l.present()}),!1):(this.dismissCart(),void this.router.navigateByUrl("/confirmation"))}}}}]);