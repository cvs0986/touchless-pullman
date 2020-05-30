import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HotelApiService } from 'src/app/hotel/hotel-api.service';
import { EssentialsCartComponent } from './essentials-cart/essentials-cart.component';

@Component({
  selector: 'app-irs-in-room-essentials',
  templateUrl: './irs-in-room-essentials.page.html',
  styleUrls: ['./irs-in-room-essentials.page.scss'],
})
export class IrsInRoomEssentialsPage implements OnInit {
  itemQty = 0;
  isIos: boolean;
  laundryItemsApi: any = [
    {name: 'Face Mask', price: 250, count: 0},
    {name: 'Hand sanitizer(250 ml)', price: 300, count: 0},
    {name: 'Disposable gloves (5 pairs)', price: 150, count: 0},
  ];

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private platform: Platform,
    private hotelApi: HotelApiService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
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
    const cartItems = [];
    this.laundryItemsApi.filter((item) => {
      if (item.count !== 0) {
        cartItems.push(item);
      }
    });

    this.modalCtrl
    .create({
      component: EssentialsCartComponent,
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
