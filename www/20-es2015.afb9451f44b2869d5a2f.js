(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{RxDF:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("MKJQ"),a=u("sZkV"),s=u("SVse");class r{constructor(l,n,u){this.modalCtrl=l,this.router=n,this.toastCtrl=u,this.guestQty=0,this.pickupNow=!1,this.isDisabled=!1}ngOnInit(){console.log(this.spaItem)}pickupNowChange(l){console.log(l),l&&(this.isDisabled=!0),l||(this.isDisabled=!1)}dismissCart(){this.modalCtrl.dismiss()}incrementQty(){this.guestQty+=1}decrementQty(){this.guestQty-1<1?this.guestQty=0:this.guestQty-=1}getTimestamp(){if(this.pickupNow){const l=new Date,n=new Date(l).getFullYear()+"-0"+new Date(l).getMonth()+"-"+new Date(l).getDate()+" "+new Date(l).toLocaleTimeString();return console.log(n),n}{const l=new Date(this.date).getFullYear()+"-0"+new Date(this.date).getMonth()+"-"+new Date(this.date).getDate()+" "+new Date(this.time).toLocaleTimeString();return console.log(l),l}}placedOrder(){return void 0!==this.date||this.pickupNow?void 0!==this.time||this.pickupNow?void 0===this.room||""===this.room||null===this.room?(this.toastCtrl.create({message:"Please enter room number.",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(l=>{l.present()}),!1):0===this.guestQty?(this.toastCtrl.create({message:"Please select number of guest.",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(l=>{l.present()}),!1):(this.dismissCart(),void this.toastCtrl.create({header:"Thank you!",message:"Your request has been placed with Woo Spa. Our Spa manager will call you in 2 minutes.",keyboardClose:!0,position:"bottom",color:"success",buttons:[{side:"end",text:"OKAY",handler:()=>{this.router.navigateByUrl("/hotel/tabs/hotel-home")}}]}).then(l=>{l.present()})):(this.toastCtrl.create({message:"Please select time",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(l=>{l.present()}),!1):(this.toastCtrl.create({message:"Please select date",keyboardClose:!0,position:"top",color:"warning",duration:1500}).then(l=>{l.present()}),!1)}}class b{constructor(l){this.modalCtrl=l,this.spaMenu=[{category:"KID\u2019S SPA CASTLE",items:[{name:"CINDERELLA MASSAGE",time:"45 Minutes",price:"3000",details:"Relaxing massage with a gentle fragrance, for every little princess"},{name:"SIMBA MASSAGE",time:"45 Minutes",price:"3000",details:"Regenerating and relaxing massage for every charming prince"},{name:"SNOW-WHITE FACIAL TREATMENT",time:"30 Minutes",price:"2250",details:"A pure and simple spa facial for your child that will cleanse, tone and hydrate. A quickly facial treatment to inform your children about the importance of deep cleansing of facial skin"},{name:"CHOCOLATE MANI",time:"30 Minutes",price:"2250",details:"Kids\u2019 manicure that includes an invigorating hand and foot massage with polish application"},{name:"CHOCOLATE PEDI ",time:"30 Minutes",price:"2250",details:"Kids\u2019 pedicure that includes an invigorating hand and foot massage with polish application"},{name:"TINKERBELL PACKAGE ",time:"60 Minutes",price:"3500",details:"Strawberry facial | Chocolate manicure | Glittery nail art Tiara from Tinkerbell | Tinkerbell gift (to take home)"}]}]}ngOnInit(){}bookSpa(l){this.modalCtrl.create({component:r,componentProps:{spaItem:l}}).then(l=>{l.present()})}}var c=e.nb({encapsulation:0,styles:[["ion-thumbnail[_ngcontent-%COMP%]{width:100%;height:144px}ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:8px}.spa-divider[_ngcontent-%COMP%]{background-color:#d8d8d8;height:4px;width:30%}.spa-section[_ngcontent-%COMP%]{margin-bottom:50px}.spa-items[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;margin:20px 0}.spa-items[_ngcontent-%COMP%]   .spa-item-details[_ngcontent-%COMP%]{margin-top:8px}ion-button[_ngcontent-%COMP%]{--border-width:0.5px}"]],data:{}});function p(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,15,"div",[["class","spa-items"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,11,"div",[["class","spa-item-details"]],null,null,null,null,null)),(l()(),e.pb(2,0,null,null,1,"span",[["style","color: #3E3D40; font-size: 18px;"]],null,null,null,null,null)),(l()(),e.Gb(3,null,["",""])),(l()(),e.pb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(5,0,null,null,1,"span",[["style","font-weight: 500; color: #636362; font-size: 16px;"]],null,null,null,null,null)),(l()(),e.Gb(6,null,["",""])),(l()(),e.pb(7,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(8,0,null,null,1,"span",[["style","font-weight: 600; font-size: 14px;"]],null,null,null,null,null)),(l()(),e.Gb(9,null,["\u20b9",".00"])),(l()(),e.pb(10,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(11,0,null,null,1,"span",[["style","font-weight: 500; color: #636362; font-size: 14px;"]],null,null,null,null,null)),(l()(),e.Gb(12,null,["",""])),(l()(),e.pb(13,0,null,null,2,"ion-button",[["color","primary"],["fill","outline"],["size","small"],["style","margin-top: 10px;"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.bookSpa(l.context.$implicit)&&e),e}),i.O,i.e)),e.ob(14,49152,null,0,a.k,[e.h,e.k,e.x],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),(l()(),e.Gb(-1,0,["BOOK "]))],(function(l,n){l(n,14,0,"primary","outline","small")}),(function(l,n){l(n,3,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.time),l(n,9,0,n.context.$implicit.price),l(n,12,0,n.context.$implicit.details)}))}function d(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,11,"div",[["class","spa-section ion-padding-horizontal"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Gb(2,null,["",""])),(l()(),e.pb(3,0,null,null,6,"ion-row",[],null,null,null,i.fb,i.v)),e.ob(4,49152,null,0,a.gb,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,4,"ion-col",[["size","12"]],null,null,null,i.R,i.h)),e.ob(6,49152,null,0,a.t,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(7,0,null,0,2,"ion-thumbnail",[],null,null,null,i.qb,i.G)),e.ob(8,49152,null,0,a.wb,[e.h,e.k,e.x],null,null),(l()(),e.pb(9,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/spa-kids.png"]],null,null,null,null,null)),(l()(),e.eb(16777216,null,null,1,null,p)),e.ob(11,278528,null,0,s.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,6,0,"12"),l(n,11,0,n.context.$implicit.items)}),(function(l,n){l(n,2,0,n.context.$implicit.category)}))}function g(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,10,"ion-toolbar",[],null,null,null,i.tb,i.J)),e.ob(1,49152,null,0,a.zb,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,2,"ion-title",[],null,null,null,i.rb,i.H)),e.ob(3,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,0,"img",[["alt",""],["src","../../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),e.pb(5,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.P,i.f)),e.ob(6,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,3,"ion-button",[],null,null,null,i.O,i.e)),e.ob(8,49152,null,0,a.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(9,0,null,0,1,"ion-icon",[["name","person-circle-outline"],["slot","icon-only"]],null,null,null,i.W,i.m)),e.ob(10,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(11,0,null,null,8,"ion-content",[],null,null,null,i.S,i.i)),e.ob(12,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(l()(),e.pb(13,0,null,0,4,"ion-buttons",[],null,null,null,i.P,i.f)),e.ob(14,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(15,0,null,0,2,"ion-back-button",[["defaultHref","/hotel/tabs/hotel-home/spa"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Bb(l,17).onClick(u)&&t),t}),i.M,i.c)),e.ob(16,49152,null,0,a.g,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(17,16384,null,0,a.h,[[2,a.fb],a.Eb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.eb(16777216,null,0,1,null,d)),e.ob(19,278528,null,0,s.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,10,0,"person-circle-outline"),l(n,16,0,"/hotel/tabs/hotel-home/spa"),l(n,17,0,"/hotel/tabs/hotel-home/spa"),l(n,19,0,u.spaMenu)}),null)}function h(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-spa-etiq",[],null,null,null,g,c)),e.ob(1,114688,null,0,b,[a.Db],null,null)],(function(l,n){l(n,1,0)}),null)}var m=e.lb("app-spa-etiq",b,h,{},{},[]),f=u("s7LF"),C=u("iInd"),x=e.nb({encapsulation:0,styles:[[".bottom-buttons[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;z-index:1000000;text-align:right}.place-order-btn[_ngcontent-%COMP%]{background-color:#fff;padding:10px 16px;box-shadow:0 0 10px #c8c8c8}.item[_ngcontent-%COMP%]   .sc-ion-label-ios-h[_ngcontent-%COMP%], .item.sc-ion-label-ios-h[_ngcontent-%COMP%]{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:pre-wrap!important;overflow:hidden;box-sizing:border-box}ion-item[_ngcontent-%COMP%]{--background:transparent}.foodType[_ngcontent-%COMP%]{margin-right:15px}.guestInfoSec[_ngcontent-%COMP%]{background:#f6fff4;padding:5px 0 26px}.foodInput[_ngcontent-%COMP%]{padding:0 10px!important;border:1px solid #e1e1e1;margin-top:15px;border-radius:5px;background-color:#f5f5f5}ion-label[_ngcontent-%COMP%]{display:flex!important;flex-direction:row;justify-content:space-between}.details[_ngcontent-%COMP%]{width:78%}.add-section[_ngcontent-%COMP%]{width:22%}.add-item-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-around;border-width:2px;border-style:solid;border-color:#d8d8d8 #d1d1d1 #bababa;-o-border-image:initial;border-image:initial;border-radius:5px;align-items:center;height:2.2em;font-size:13px;width:73px}.add-item-button-left[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-left:-8px;border-top-left-radius:5px;border-bottom-left-radius:5px;color:#fff}.add-item-button-right[_ngcontent-%COMP%]{background-color:#a9a9a9;padding:7px;margin-right:-8px;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#fff}.details-text[_ngcontent-%COMP%]{padding:0 16px;margin-top:-16px;font-size:14px}.price[_ngcontent-%COMP%]{font-weight:500;letter-spacing:.9px}.spa-divider[_ngcontent-%COMP%]{height:3px;background-color:#f5f5f5}"]],data:{}});function k(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,10,"ion-toolbar",[],null,null,null,i.tb,i.J)),e.ob(1,49152,null,0,a.zb,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,2,"ion-title",[],null,null,null,i.rb,i.H)),e.ob(3,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,0,"img",[["alt",""],["src","../../../../../../assets/Logo_Grey.png"]],null,null,null,null,null)),(l()(),e.pb(5,0,null,0,5,"ion-buttons",[["slot","end"]],null,null,null,i.P,i.f)),e.ob(6,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(l()(),e.pb(7,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.dismissCart()&&e),e}),i.O,i.e)),e.ob(8,49152,null,0,a.k,[e.h,e.k,e.x],null,null),(l()(),e.pb(9,0,null,0,1,"ion-icon",[["name","close-outline"],["slot","icon-only"]],null,null,null,i.W,i.m)),e.ob(10,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(11,0,null,null,88,"ion-content",[],null,null,null,i.S,i.i)),e.ob(12,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(l()(),e.pb(13,0,null,0,4,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.U,i.k)),e.ob(14,49152,null,0,a.w,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.pb(15,0,null,0,2,"ion-button",[["shape","round"],["size","small"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.placedOrder()&&e),e}),i.O,i.e)),e.ob(16,49152,null,0,a.k,[e.h,e.k,e.x],{shape:[0,"shape"],size:[1,"size"]},null),(l()(),e.Gb(-1,0,["Continue"])),(l()(),e.pb(18,0,null,0,1,"h3",[["class","ion-padding-horizontal"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Package Selected"])),(l()(),e.pb(20,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(21,0,null,0,5,"div",[["class","package-info ion-padding-horizontal"]],null,null,null,null,null)),(l()(),e.pb(22,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Gb(23,null,["",""])),(l()(),e.pb(24,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(25,0,null,null,1,"span",[["style","font-weight: 500;"]],null,null,null,null,null)),(l()(),e.Gb(26,null,["\u20b9",""])),(l()(),e.pb(27,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(28,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.pb(29,0,null,0,70,"div",[["class","guest-details"]],null,null,null,null,null)),(l()(),e.pb(30,0,null,null,0,"div",[["class","spa-divider"]],null,null,null,null,null)),(l()(),e.pb(31,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(32,0,null,null,11,"ion-item",[["lines","none"]],null,[[null,"ionChange"]],(function(l,n,u){var e=!0,t=l.component;return"ionChange"===n&&(e=!1!==t.pickupNowChange(t.pickupNow)&&e),e}),i.Y,i.o)),e.ob(33,49152,null,0,a.H,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(34,0,null,0,2,"ion-label",[],null,null,null,i.Z,i.p)),e.ob(35,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Request service now"])),(l()(),e.pb(37,0,null,0,6,"ion-checkbox",[["mode","md"],["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,38)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,38)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.pickupNow=u)&&t),t}),i.Q,i.g)),e.ob(38,16384,null,0,a.c,[e.k],null,null),e.Db(1024,null,f.d,(function(l){return[l]}),[a.c]),e.ob(40,671744,null,0,f.g,[[8,null],[8,null],[8,null],[6,f.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,f.e,null,[f.g]),e.ob(42,16384,null,0,f.f,[[4,f.e]],null,null),e.ob(43,49152,null,0,a.r,[e.h,e.k,e.x],{mode:[0,"mode"]},null),(l()(),e.pb(44,0,null,null,2,"ion-text",[["class","ion-padding-horizontal"]],null,null,null,i.ob,i.E)),e.ob(45,49152,null,0,a.ub,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["OR"])),(l()(),e.pb(47,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(48,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.Y,i.o)),e.ob(49,49152,null,0,a.H,[e.h,e.k,e.x],{disabled:[0,"disabled"],lines:[1,"lines"]},null),(l()(),e.pb(50,0,null,0,2,"ion-label",[],null,null,null,i.Z,i.p)),e.ob(51,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Select Date"])),(l()(),e.pb(53,0,null,0,6,"ion-datetime",[["max","2030-12-31"],["pickerFormat","DD MMMM YYYY"],["placeholder","Select Date"],["value",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,54)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,54)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.date=u)&&t),t}),i.T,i.j)),e.ob(54,16384,null,0,a.Kb,[e.k],null,null),e.Db(1024,null,f.d,(function(l){return[l]}),[a.Kb]),e.ob(56,671744,null,0,f.g,[[8,null],[8,null],[8,null],[6,f.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,f.e,null,[f.g]),e.ob(58,16384,null,0,f.f,[[4,f.e]],null,null),e.ob(59,49152,null,0,a.v,[e.h,e.k,e.x],{max:[0,"max"],pickerFormat:[1,"pickerFormat"],placeholder:[2,"placeholder"],value:[3,"value"]},null),(l()(),e.pb(60,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.Y,i.o)),e.ob(61,49152,null,0,a.H,[e.h,e.k,e.x],{disabled:[0,"disabled"],lines:[1,"lines"]},null),(l()(),e.pb(62,0,null,0,2,"ion-label",[],null,null,null,i.Z,i.p)),e.ob(63,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Select Time"])),(l()(),e.pb(65,0,null,0,6,"ion-datetime",[["display-format","h:mm A"],["picker-format","h:mm A"],["placeholder","Select Time"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,66)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,66)._handleChangeEvent(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.time=u)&&t),t}),i.T,i.j)),e.ob(66,16384,null,0,a.Kb,[e.k],null,null),e.Db(1024,null,f.d,(function(l){return[l]}),[a.Kb]),e.ob(68,671744,null,0,f.g,[[8,null],[8,null],[8,null],[6,f.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,f.e,null,[f.g]),e.ob(70,16384,null,0,f.f,[[4,f.e]],null,null),e.ob(71,49152,null,0,a.v,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),(l()(),e.pb(72,0,null,null,11,"ion-item",[["lines","none"]],null,null,null,i.Y,i.o)),e.ob(73,49152,null,0,a.H,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(74,0,null,0,2,"ion-label",[],null,null,null,i.Z,i.p)),e.ob(75,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Room Number"])),(l()(),e.pb(77,0,null,0,6,"ion-input",[["clearInput","true"],["style","border-bottom: 1px solid #cecbcb; margin-left: 120px; text-align: right;"],["type","number"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,o=l.component;return"ionBlur"===n&&(t=!1!==e.Bb(l,78)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Bb(l,78)._handleIonChange(u.target)&&t),"ngModelChange"===n&&(t=!1!==(o.room=u)&&t),t}),i.X,i.n)),e.ob(78,16384,null,0,a.Fb,[e.k],null,null),e.Db(1024,null,f.d,(function(l){return[l]}),[a.Fb]),e.ob(80,671744,null,0,f.g,[[8,null],[8,null],[8,null],[6,f.d]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,f.e,null,[f.g]),e.ob(82,16384,null,0,f.f,[[4,f.e]],null,null),e.ob(83,49152,null,0,a.G,[e.h,e.k,e.x],{clearInput:[0,"clearInput"],type:[1,"type"]},null),(l()(),e.pb(84,0,null,null,13,"ion-item",[["lines","none"]],null,null,null,i.Y,i.o)),e.ob(85,49152,null,0,a.H,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(86,0,null,0,11,"ion-label",[],null,null,null,i.Z,i.p)),e.ob(87,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(l()(),e.pb(88,0,null,0,2,"div",[["class","details"]],null,null,null,null,null)),(l()(),e.pb(89,0,null,null,1,"p",[["style","font-size: 15px;"]],null,null,null,null,null)),(l()(),e.Gb(-1,null,["Number Of Guests"])),(l()(),e.pb(91,0,null,0,6,"div",[["class","add-action"]],null,null,null,null,null)),(l()(),e.pb(92,0,null,null,5,"div",[["class","add-item-button"]],null,null,null,null,null)),(l()(),e.pb(93,0,null,null,1,"ion-icon",[["class","add-item-button-left"],["name","remove-outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.decrementQty()&&e),e}),i.W,i.m)),e.ob(94,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Gb(95,null,[" "," "])),(l()(),e.pb(96,0,null,null,1,"ion-icon",[["class","add-item-button-right"],["name","add-outline"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.incrementQty()&&e),e}),i.W,i.m)),e.ob(97,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(98,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.pb(99,0,null,null,0,"div",[["class","spa-divider"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,10,0,"close-outline"),l(n,14,0,"end","bottom"),l(n,16,0,"round","small"),l(n,33,0,"none"),l(n,40,0,u.pickupNow),l(n,43,0,"md"),l(n,49,0,u.isDisabled,"none"),l(n,56,0,u.date),l(n,59,0,"2030-12-31","DD MMMM YYYY","Select Date",""),l(n,61,0,u.isDisabled,"none"),l(n,68,0,u.time),l(n,71,0,"Select Time"),l(n,73,0,"none"),l(n,80,0,u.room),l(n,83,0,"true","number"),l(n,85,0,"none"),l(n,94,0,"remove-outline"),l(n,97,0,"add-outline")}),(function(l,n){var u=n.component;l(n,23,0,u.spaItem.name),l(n,26,0,u.spaItem.price),l(n,37,0,e.Bb(n,42).ngClassUntouched,e.Bb(n,42).ngClassTouched,e.Bb(n,42).ngClassPristine,e.Bb(n,42).ngClassDirty,e.Bb(n,42).ngClassValid,e.Bb(n,42).ngClassInvalid,e.Bb(n,42).ngClassPending),l(n,53,0,e.Bb(n,58).ngClassUntouched,e.Bb(n,58).ngClassTouched,e.Bb(n,58).ngClassPristine,e.Bb(n,58).ngClassDirty,e.Bb(n,58).ngClassValid,e.Bb(n,58).ngClassInvalid,e.Bb(n,58).ngClassPending),l(n,65,0,e.Bb(n,70).ngClassUntouched,e.Bb(n,70).ngClassTouched,e.Bb(n,70).ngClassPristine,e.Bb(n,70).ngClassDirty,e.Bb(n,70).ngClassValid,e.Bb(n,70).ngClassInvalid,e.Bb(n,70).ngClassPending),l(n,77,0,e.Bb(n,82).ngClassUntouched,e.Bb(n,82).ngClassTouched,e.Bb(n,82).ngClassPristine,e.Bb(n,82).ngClassDirty,e.Bb(n,82).ngClassValid,e.Bb(n,82).ngClassInvalid,e.Bb(n,82).ngClassPending),l(n,95,0,u.guestQty)}))}function v(l){return e.Hb(0,[(l()(),e.pb(0,0,null,null,1,"app-kids-cart",[],null,null,null,k,x)),e.ob(1,114688,null,0,r,[a.Db,C.m,a.Mb],null,null)],(function(l,n){l(n,1,0)}),null)}var y=e.lb("app-kids-cart",r,v,{spaItem:"spaItem"},{},[]);class M{}u.d(n,"SpaEtiqPageModuleNgFactory",(function(){return w}));var w=e.mb(t,[],(function(l){return e.yb([e.zb(512,e.j,e.X,[[8,[o.a,m,y]],[3,e.j],e.v]),e.zb(4608,s.k,s.j,[e.s,[2,s.q]]),e.zb(4608,f.j,f.j,[]),e.zb(4608,a.b,a.b,[e.x,e.g]),e.zb(4608,a.Db,a.Db,[a.b,e.j,e.p]),e.zb(4608,a.Hb,a.Hb,[a.b,e.j,e.p]),e.zb(1073742336,s.b,s.b,[]),e.zb(1073742336,f.i,f.i,[]),e.zb(1073742336,f.a,f.a,[]),e.zb(1073742336,a.Bb,a.Bb,[]),e.zb(1073742336,C.o,C.o,[[2,C.t],[2,C.m]]),e.zb(1073742336,M,M,[]),e.zb(1073742336,t,t,[]),e.zb(1024,C.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);