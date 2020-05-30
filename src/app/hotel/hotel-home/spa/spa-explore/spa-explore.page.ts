import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonInfiniteScroll,
  PopoverController,
  IonContent,
  ModalController,
  Platform,
} from '@ionic/angular';
import { SpaExplorePopoverComponent } from './spa-explore-popover/spa-explore-popover.component';
import { StaticCartComponent } from 'src/app/hotel/static-cart/static-cart.component';

@Component({
  selector: 'app-spa-explore',
  templateUrl: './spa-explore.page.html',
  styleUrls: ['./spa-explore.page.scss'],
})
export class SpaExplorePage implements OnInit {
  @ViewChild(IonContent, {static: true}) content: IonContent;

  itemQty = 0;
  isIos: boolean;

  menuItems: any[] = [
    {
      categoryName: 'CUT & STYLE',
      items: [
        {
          name: 'HAIR CUT (MALE)-45 Minute',
          price: 1200,
          qty: 0,
          details:'',
        },
        {
          name: 'HAIR CUT (FEMALE)-45 Minute',
          price: 2000,
          qty: 0,
          details:'',
        },
        {
          name: 'HAIR TRIMMING ( FOR HER) -30 Minute',
          price: 1200,
          qty: 0,
          details:'',
        },
      ]
    },
    {
      categoryName: 'BLOWOUTS',
      items: [
        {
          name: 'SHAMPOO & CONDITIONING (FEMALE) -45 Minute',
          price: 800,
          qty: 0,
          details:'',
        },
        {
          name: 'BLOW DRYER -45 Minute',
          price: 1200,
          qty: 0,
          details:'',
        },
        {
          name: 'SHAMPOO & BLOW DRYER -45 Minutes',
          price: 1800,
          qty: 0,
          details:'',
        },
      ]
    },
    {
      categoryName: 'UPSTYLES',
      items: [
        {
          name: 'MEN’S HAIR STYLING -30 Minute',
          price: 500,
          qty: 0,
          details:'',
        },
        {
          name: 'HAIR IRONING (Small) -30 Minute',
          price: 1500,
          qty: 0,
          details:'',
        },
        {
          name: 'HAIR IRONING (Medium) -30 Minute',
          price: 1800,
          qty: 0,
          details:'',
        },
        {
          name: 'HAIR IRONING (Large) -30 Minute',
          price: 2200,
          qty: 0,
          details:'',
        },
        {
          name: 'HAIR DO -30 Minutes',
          price: 2300,
          qty: 0,
          details:'',
        },
      ]
    },
    {
      categoryName: 'SHAVE & TRIM',
      items: [
        {
          name: 'BEARD & MOUSTACHE TRIM -30 Minute',
          price: 750,
          qty: 0,
          details:'',
        },
        {
          name: 'CLASSIC SHAVE -30 Minute',
          price: 1500,
          qty: 0,
          details:'',
        },
        {
          name: 'ROYAL SHAVE -30 Minute',
          price: 2000,
          qty: 0,
          details:'',
        },
        {
          name: 'CHEST WAXING -45 Minute',
          price: 1500,
          qty: 0,
          details:'',
        }, 
      ]
    },
    {
      categoryName: 'HAIR SPA',
      items: [
        {
          name: 'ENRICH REPAIR -60 Minute',
          price: 4000,
          qty: 0,
          details:'',
        },
        {
          name: 'ENERGIES -60 Minute',
          price: 4200,
          qty: 0,
          details:'',
        },
        {
          name: 'ANTI-DANDRUFF -60 Minute',
          price: 4500,
          qty: 0,
          details:'',
        },
        {
          name: 'ANTI-HAIR FALL -60 Minute',
          price: 5000,
          qty: 0,
          details:'',
        }, 
      ]
    },
    {
      categoryName: 'COLORS',
      items: [
        {
          name: 'ROOT TOUCH UP (MALE)-45 Minute',
          price: 2000,
          qty: 0,
          details:'',
        },
        {
          name: 'ROOT TOUCH UP (FEMALE)-45 Minute',
          price: 3000,
          qty: 0,
          details:'',
        },
        {
          name: 'GLOBAL HAIR COLOR (MALE)-75 Minute',
          price: 3000,
          qty: 0,
          details:'',
        },
        {
          name: 'GLOBAL HAIR COLOR (FEMALE)-75 Minute',
          price: 4000,
          qty: 0,
          details:'',
        },
        {
          name: 'GLOBAL STREAKING -30 Minute',
          price: 9999,
          qty: 0,
          details:'',
        },
      ]
    },
    {
      categoryName: 'HAND & FEET CARE',
      items: [
        {
          name: 'NAIL CUT & FILE -30 Minute',
          price: 750,
          qty: 0,
          details:'',
        },
        {
          name: 'ROYAL SPA MANICURE',
          price: 3000,
          qty: 0,
          details:'',
        },
        {
          name: 'ROYAL SPA PEDICURE -75 Minute',
          price: 3250,
          qty: 0,
          details:'',
        },
      ]
    }
];

  constructor(private popoverCtrl: PopoverController, private modalCtrl: ModalController, private platform: Platform) { }

  ngOnInit() {
    this.isIos = this.platform.is('ios');
    console.log(this.isIos);
  }

  addItemInitial(menuItem) {
    menuItem.qty += 1;
    this.itemQty += 1;
    console.log(menuItem.qty + 1, menuItem, this.itemQty);
  }

  incrementQty(item) {
    item.qty += 1;
    this.itemQty += 1;
    console.log(item.qty + 1, item, this.itemQty);
  }

  // decrements item

  decrementQty(item) {
    if (item.qty - 1 < 1) {
      item.qty = 0;
      this.itemQty -= 1;
      console.log(item.qty, item, this.itemQty);
    } else {
      item.qty -= 1;
      this.itemQty -= 1;
      console.log(item.qty, item, this.itemQty);
    }
  }

  reviewOrder() {
    const cartItems = [];
    this.menuItems.filter((item) => {
      item.items.filter((menuItem) => {
        if (menuItem.qty !== 0) {
          cartItems.push(menuItem);
        }
      });
    });
    console.log(cartItems);

    this.modalCtrl
      .create({
        component: StaticCartComponent,
        componentProps: {
          cartItems: cartItems,
          itemQty: this.itemQty
        },
      })
      .then((modalEl) => {
        modalEl.present();
        modalEl.onDidDismiss().then(dismissEl => {
          if (dismissEl.data.dismissed === 'closed') {
            console.log(dismissEl);
            this.itemQty = dismissEl.data.totalQty;
          }
        });
      });
  }

}
