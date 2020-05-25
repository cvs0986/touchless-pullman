import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HotelApiService } from 'src/app/hotel/hotel-api.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-minibar-cart-review',
  templateUrl: './minibar-cart-review.component.html',
  styleUrls: ['./minibar-cart-review.component.scss'],
})
export class MinibarCartReviewComponent implements OnInit {
  @Input() cartItems;
  @Input() itemQty;
  progressLoading = false;
  guestQty = 0;
  totalAmount;
  roomNo;
  cookingIns;

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private toastCtrl: ToastController,
    private hotelApi: HotelApiService
  ) { }

  ngOnInit() {
    console.log(this.cartItems, this.itemQty);
    console.log(this.cartItems);
    if (this.cartItems !== undefined) {
      this.calculateTotalPrice();
    }
  }

  calculateItemPrice(count, price) {
    const tax = 20 / 100;
    const taxedPrice = (price * tax).toFixed(2);
    return count * ((+taxedPrice) + price);
  }

  calculateTotalPrice() {
    let sum = null;
    this.cartItems.forEach((element) => {
      const tax = 20 / 100;
      const taxedPrice = element.price * tax;
      sum += element.count * (element.price + taxedPrice);
    });
    this.totalAmount = sum;
  }

  addItemInitial(menuItem) {
    menuItem.count += 1;
    console.log(menuItem.qty + 1, menuItem);
  }

  incrementQty(item) {
    item.count += 1;
    this.itemQty += 1;
    console.log(item.count + 1, item);
    this.calculateTotalPrice();
  }

  // decrements item

  decrementQty(item) {
    if (item.count - 1 < 1) {
      item.count = 0;
      this.itemQty = 0;
      console.log(item.count, item);
      this.calculateTotalPrice();
      if (this.itemQty === 0) {
        this.dismissCart();
      }
    } else {
      item.count -= 1;
      this.itemQty -= 1;
      console.log(item.count, item);
      this.calculateTotalPrice();
      if (this.itemQty === 0) {
        this.dismissCart();
      }
    }
  }

  incrementGuest() {
    this.guestQty += 1;
  }

  // decrements item

  decrementGuest() {
    if (this.guestQty - 1 < 1) {
      this.guestQty = 0;
    } else {
      this.guestQty -= 1;
    }
  }

  dismissCart() {
    this.modalCtrl.dismiss({
      dismissed: 'closed',
      totalQty: this.itemQty
    });
  }

  orderPlaced() {
    const orderedItems = [];
    this.cartItems.filter(item => {
      if (item.count !== 0) {
        const data = {
          menu_item_id: item.id,
          name: item.name,
          menu_category_id: item.menu_category_id,
          menu_sub_category_id: item.menu_sub_category_id,
          description: item.description,
          quantity: item.count
        };
        orderedItems.push(data);
      }
    });

    if (this.roomNo === undefined) {
      this.toastCtrl.create({
        message: 'Please enter room number!',
        keyboardClose: true,
        duration: 3000,
        color: 'warning',
        position: 'top'
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    if (this.guestQty === 0) {
      this.toastCtrl.create({
        message: 'Please select number of guests!',
        keyboardClose: true,
        duration: 3000,
        color: 'warning',
        position: 'top'
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    if (orderedItems.length === 0) {
      this.toastCtrl.create({
        message: 'Did not find any items, please close this window and add items from menu!',
        keyboardClose: true,
        duration: 5000,
        color: 'danger',
        position: 'top'
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    const data = {
      enc_hotel_id: 'N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=',
      no_of_guest: this.guestQty,
      description: this.cookingIns,
      items: JSON.stringify(orderedItems),
      room_no: this.roomNo
    };
    console.log(data);

    $.post('https://vserve-api.valet2you.in/api/v1/ird/mini-bar/guest/order', data)
    .done((msg) => {
      console.log(msg);
      if (msg.message === 'Success') {
        this.dismissCart();
        this.router.navigateByUrl('/confirmation');
      }
     })
    .fail((xhr, status, error) => {
        console.log(xhr, status, error);
        if (xhr.status !== 200 && xhr.responseJSON.message !== 'Room is not available') {
          this.dismissCart();
          this.toastCtrl
            .create({
              message: 'Something went wrong! Please try after some time.',
              keyboardClose: true,
              duration: 3000,
              color: 'danger',
              position: 'top',
            })
            .then((toastEl) => {
              toastEl.present();
            });
          return false;
        }

        if (xhr.status !== 200 && xhr.responseJSON.message === 'Room is not available') {
          this.toastCtrl
            .create({
              message: xhr.responseJSON.message + ' Please enter correct room number.',
              keyboardClose: true,
              duration: 3000,
              color: 'warning',
              position: 'top',
            })
            .then((toastEl) => {
              toastEl.present();
            });
          return false;
        }
    });

    // this.hotelApi.placeOrder(data).subscribe(
    //   (resp) => {
    //     console.log(resp);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // this.dismissCart();
    // this.router.navigateByUrl('/confirmation');
  }

}
