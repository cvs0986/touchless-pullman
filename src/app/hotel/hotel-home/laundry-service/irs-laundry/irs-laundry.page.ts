import { Component, OnInit } from '@angular/core';
import { BookLaundryComponent } from '../book-laundry/book-laundry.component';
import { ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { HotelApiService } from 'src/app/hotel/hotel-api.service';

@Component({
  selector: 'app-irs-laundry',
  templateUrl: './irs-laundry.page.html',
  styleUrls: ['./irs-laundry.page.scss'],
})
export class IrsLaundryPage implements OnInit {
  itemQty = 0;
  isIos: boolean;
  laundryItemsApi: any = [];

  menuItems: any[] = [
    {
      headName: 'Standard Menu',
      headEl: [
        {
          categoryName: 'Root, Leaf, Grains',
          items: [
            {
              name: 'Shirt/T-shirt',
              price: 300,
              qty: 0,
            },
            {
              name: 'Coat / Jacket',
              price: 300,
              qty: 0,
            },
            {
              name: 'Trouser',
              price: 300,
              qty: 0,
            },
            {
              name: 'Safari suit',
              price: 475,
              qty: 0,
            },
            {
              name: 'Pyjama',
              price: 300,
              qty: 0,
            },
          ],
        },
      ],
    },
    {
      headName: 'Express Menu',
      headEl: [
        {
          categoryName: 'Appetizers',
          items: [
            {
              name: 'Suit (2pcs)',
              price: 750,
              qty: 0,
            },
            {
              name: 'Tie',
              price: 200,
              qty: 0,
            },
            {
              name: 'Overcoat',
              price: 550,
              qty: 0,
            },
            {
              name: 'Costumes (2pcs)',
              price: 550,
              qty: 0,
            },
          ],
        },
      ],
    },
  ];

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private platform: Platform,
    private hotelApi: HotelApiService
  ) { }

  ngOnInit() {
    this.isIos = this.platform.is('ios');
    console.log(this.isIos);
    this.hotelApi.getLaundryMenus('N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=').subscribe(
      (resp) => {
        console.log(resp);
        this.laundryItemsApi = resp.body.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  bookLaundry() {
    this.modalCtrl.create({
      component: BookLaundryComponent,
    }).then(modalEl => {
      modalEl.present();
    });
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
    this.laundryItemsApi.categories.filter((item) => {
      item.without_sub_category_items.filter((menu) => {
        if (menu.count !== 0) {
          cartItems.push(menu);
        }
      });
    });
    console.log(cartItems);
    localStorage.setItem('cart-items', JSON.stringify(cartItems));

    this.modalCtrl
    .create({
      component: BookLaundryComponent,
      componentProps: {
        cartItems: cartItems,
        itemQty: this.itemQty
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
