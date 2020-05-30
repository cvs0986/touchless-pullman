import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-book-laundry',
  templateUrl: './book-laundry.component.html',
  styleUrls: ['./book-laundry.component.scss'],
})
export class BookLaundryComponent implements OnInit {
  @Input() cartItems;
  @Input() itemQty;
  guestQty = 0;
  date;
  time;
  room;
  pickupNow = false;

  isDisabled = false;

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    console.log(this.cartItems);
  }

  pickupNowChange(pick) {
    console.log(pick);
    if (pick) {
      this.isDisabled = true;
    }

    if (!pick) {
      this.isDisabled = false;
    }
  }

  dismissCart() {
    this.modalCtrl.dismiss({
      dismissed: 'closed',
      totalQty: this.itemQty
    });
  }

  incrementQty(item) {
    item.count += 1;
    this.itemQty += 1;
    console.log(item.count + 1, item);
  }

  // decrements item

  decrementQty(item) {
    if (item.count - 1 < 1) {
      item.count = 0;
      this.itemQty -= 1;
      if (this.itemQty === 0) {
        this.dismissCart();
      }
      console.log(item.count, item);
    } else {
      item.count -= 1;
      this.itemQty -= 1;
      if (this.itemQty === 0) {
        this.dismissCart();
      }
      console.log(item.count, item)
    }
  }

  getTimestamp() {
    if (this.pickupNow) {
      const currentDate = new Date();
      const year = new Date(currentDate).getFullYear();
      const month = new Date(currentDate).getMonth();
      const day = new Date(currentDate).getDate();

      const date = year + '-' + 0 + month + '-' + day + ' ' + new Date(currentDate).toLocaleTimeString();
      console.log(date);
      return date;
    } else {
      const year = new Date(this.date).getFullYear();
      const month = new Date(this.date).getMonth();
      const day = new Date(this.date).getDate();

      const date = year + '-' + 0 + month + '-' + day + ' ' + new Date(this.time).toLocaleTimeString();
      console.log(date);
      return date;
    }
  }

  returnPickupMessage() {
    if (this.pickupNow) {
      return 'Your request has been placed with the laundry. You will receive a confirmation call in 2 minutes';
    } else {
      return 'Your laundry pick-up request has been placed.';
    }
  }

  placedOrder() {
    const orderdItems = [];

    this.cartItems.filter(item => {
      if (item.count !== 0) {
        const data = {
          laundry_item_id: item.id,
          description: item.description,
          quantity: item.count,
        };
        orderdItems.push(data);
      }
    });

    if (this.room === undefined || this.room === '' || this.room === null) {
      this.toastCtrl.create({
        message: 'Please enter room number.',
        keyboardClose: true,
        position: 'top',
        color: 'warning',
        duration: 1500
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }
    if (this.date === undefined && !this.pickupNow) {
      this.toastCtrl.create({
        message: 'Please select date',
        keyboardClose: true,
        position: 'top',
        color: 'warning',
        duration: 1500
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    if (this.time === undefined && !this.pickupNow) {
      this.toastCtrl.create({
        message: 'Please select time',
        keyboardClose: true,
        position: 'top',
        color: 'warning',
        duration: 1500
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    const data = {
      enc_hotel_id: 'N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=',
      description: null,
      items: JSON.stringify(orderdItems),
      room_no: this.room,
      requested_pickup_at: this.getTimestamp()
    };

    console.log(data);

    $.post('https://vserve-api.valet2you.in/api/v1/wash/laundry/guest/order', data)
    .done((msg) => {
      console.log(msg);
      if (msg.message === 'Success') {
        this.toastCtrl
          .create({
            header: 'Thank you!',
            message: this.returnPickupMessage(),
            keyboardClose: true,
            position: 'bottom',
            color: 'success',
            buttons: [
              {
                side: 'end',
                text: 'OKAY',
                handler: () => {
                  this.dismissCart();
                  this.router.navigateByUrl('/hotel/tabs/hotel-home/irs');
                },
              },
            ],
          })
          .then((toastEl) => {
            toastEl.present();
          });
      }
     })
    .fail((xhr, status, error) => {
        console.log(xhr, status, error);
        if (xhr.status !== 200 && xhr.responseJSON.message !== 'Room is not available') {
          this.dismissCart();
          this.toastCtrl
            .create({
              message: 'Something went wrong. Please try after sometime!',
              keyboardClose: true,
              duration: 1000,
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
  }
}
