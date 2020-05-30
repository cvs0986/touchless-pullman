import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HotelApiService } from 'src/app/hotel/hotel-api.service';
import { MinibarCartReviewComponent } from '../../nourishment/refreshment-menu/minibar-cart-review/minibar-cart-review.component';

@Component({
  selector: 'app-irs-in-room-refreshment',
  templateUrl: './irs-in-room-refreshment.page.html',
  styleUrls: ['./irs-in-room-refreshment.page.scss'],
})
export class IrsInRoomRefreshmentPage implements OnInit {
  itemQty = 0;
  isIos: boolean;
  menuItemsApi: any = [];

  constructor(
    private modalCtrl: ModalController,
    private platform: Platform,
    private toastCtrl: ToastController,
    private router: Router,
    private hotelApi: HotelApiService
  ) { }

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
