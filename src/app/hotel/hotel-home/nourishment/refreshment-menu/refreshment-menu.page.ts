import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HotelApiService } from 'src/app/hotel/hotel-api.service';
import { MinibarCartReviewComponent } from './minibar-cart-review/minibar-cart-review.component';

@Component({
  selector: 'app-refreshment-menu',
  templateUrl: './refreshment-menu.page.html',
  styleUrls: ['./refreshment-menu.page.scss'],
})
export class RefreshmentMenuPage implements OnInit {
  itemQty = 0;
  isIos: boolean;
  menuItemsApi: any = [];

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

    this.hotelApi.getMinibarMenus('N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=').subscribe(
      (resp) => {
        console.log(resp);
        this.menuItemsApi = resp.body.data;
      },
      (error) => {
        console.log(error);
      }
    );

  }

  addItemInitial(menuItem) {
    menuItem.count += 1;
    this.itemQty += 1;
    console.log(menuItem.count + 1, menuItem, this.itemQty);
  }

  incrementQty(item) {
    item.count += 1;
    this.itemQty += 1;
    console.log(item.count + 1, item, this.itemQty);
  }

  // decrements item

  decrementQty(item) {
    if (item.count - 1 < 1) {
      item.count = 0;
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
    } else {
      item.count -= 1;
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
    }
  }

  reviewOrder() {
    localStorage.removeItem('cart-items');
    const cartItems = [];
    this.menuItemsApi.without_category_items.filter((item) => {
        if (item.count !== 0) {
          cartItems.push(item);
        }
    });
    console.log(cartItems);
    localStorage.setItem('cart-items', JSON.stringify(cartItems));

    this.modalCtrl
      .create({
        component: MinibarCartReviewComponent,
        componentProps: {
          cartItems: cartItems,
          itemQty: this.itemQty,
        },
      })
      .then((modalEl) => {
        modalEl.present();
        modalEl.onDidDismiss().then(dismissEl => {
          if (dismissEl.data.dismissed === 'closed') {
            this.itemQty = dismissEl.data.totalQty;
          }
        });
      });
  }
}
