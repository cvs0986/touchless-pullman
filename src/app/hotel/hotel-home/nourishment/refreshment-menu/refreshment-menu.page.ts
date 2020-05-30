import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HotelApiService } from 'src/app/hotel/hotel-api.service';
import { MinibarCartReviewComponent } from './minibar-cart-review/minibar-cart-review.component';
import { StaticCartComponent } from 'src/app/hotel/static-cart/static-cart.component';

@Component({
  selector: 'app-refreshment-menu',
  templateUrl: './refreshment-menu.page.html',
  styleUrls: ['./refreshment-menu.page.scss'],
})
export class RefreshmentMenuPage implements OnInit {
  itemQty = 0;
  isIos: boolean;

  menuItems: any[] = [
    {
      categoryName: 'BLENDED SCOTCH',
      items: [
        {
          name: 'Teacher\'s Highland Cream (3 peg)',
          price: 1250,
          qty: 0,
        },
        {
          name: 'Teacher\'s Highland Cream (6 peg)',
          price: 1850,
          qty: 0,
        },
        {
          name: 'Teacher\'s Highland Cream (12 peg)',
          price: 6000,
          qty: 0,
        },
        {
          name: '100 Pipers Deluxe (3 peg)',
          price: 1500,
          qty: 0,
        },
        {
          name: '100 Pipers Deluxe (6 peg)',
          price: 2000,
          qty: 0,
        },
        {
          name: '100 Pipers Deluxe (12 peg)',
          price: 7000,
          qty: 0,
        },
        {
          name: 'Jameson Standard (3 peg)',
          price: 2000,
          qty: 0,
        },
        {
          name: 'Jameson Standard (6 peg)',
          price: 3500,
          qty: 0,
        },
        {
          name: 'Jameson Standard (12 peg)',
          price: 9000,
          qty: 0,
        },
        {
          name: 'Whisky Dewar 15 Y.O. (3 peg)',
          price: 3500,
          qty: 0,
        },
        {
          name: 'Whisky Dewar 15 Y.O. (6 peg)',
          price: 6500,
          qty: 0,
        },
        {
          name: 'Whisky Dewar 15 Y.O. (12 peg)',
          price: 15000,
          qty: 0,
        },
        {
          name: 'Chivas Regal 18 Y.O. (3 peg)',
          price: 8000,
          qty: 0,
        },
        {
          name: 'Chivas Regal 18 Y.O. (6 peg)',
          price: 15000,
          qty: 0,
        },
        {
          name: 'Chivas Regal 18 Y.O. (12 peg)',
          price: 36000,
          qty: 0,
        },
      ],
    },
    {
      categoryName: 'RED WINES',
      items: [
        {
          name: 'Man family, bosstok, pinotage, coastal region, South Africa',
          price: 5550,
          qty: 0,
        },
        {
          name: 'Camas, pinot noir, pays d’oc, France',
          price: 4450,
          qty: 0,
        },
        {
          name: 'Valdiviesco, cabernet sauvignon, central valley, Chile',
          price: 4490,
          qty: 0,
        },
      ],
    },
    {
      categoryName: 'VODKA',
      items: [
        {
          name: 'Grey Goose',
          price: 675,
          qty: 0,
        },
        {
          name: 'Belvedere',
          price: 675,
          qty: 0,
        },
        {
          name: 'Stolichnaya',
          price: 450,
          qty: 0,
        },
        {
          name: 'Ciroc',
          price: 675,
          qty: 0,
        },
        {
          name: 'Absolut Blue',
          price: 450,
          qty: 0,
        },
      ],
    },
  ];

  constructor(
    private modalCtrl: ModalController,
    private platform: Platform,
    private toastCtrl: ToastController,
    private router: Router,
    private hotelApi: HotelApiService
  ) {}

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
