import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-spa-cart',
  templateUrl: './spa-cart.component.html',
  styleUrls: ['./spa-cart.component.scss'],
})
export class SpaCartComponent implements OnInit {
  @Input() spaItem;
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
    console.log(this.spaItem);
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
    this.modalCtrl.dismiss();
  }

  incrementQty() {
    this.guestQty += 1;
  }

  // decrements item

  decrementQty() {
    if (this.guestQty - 1 < 1) {
      this.guestQty = 0;
    } else {
      this.guestQty -= 1;
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

  placedOrder() {
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
    if (this.guestQty === 0) {
      this.toastCtrl.create({
        message: 'Please select number of guest.',
        keyboardClose: true,
        position: 'top',
        color: 'warning',
        duration: 1500
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    const item = {
      spa_item_id: this.spaItem.id,
      description: this.spaItem.description
    };

    const selectedItems = [];
    selectedItems.push(item);

    const data = {
      enc_hotel_id: 'N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=',
      no_of_guest: this.guestQty,
      room_no: this.room,
      request_schedule_at: this.getTimestamp(),
      items: JSON.stringify(selectedItems),
      description: null
    };

    console.log(data);

    $.post('https://vserve-api.valet2you.in/api/v1/sanitarium/spa/guest/order', data)
    .done((msg) => {
      console.log(msg);
      if (msg.message === 'Success') {
        this.dismissCart();
        this.toastCtrl
          .create({
            header: 'Thank you!',
            message: 'Your request has been placed with Woo Spa. Our Spa manager will call you in 2 minutes.',
            keyboardClose: true,
            position: 'bottom',
            color: 'success',
            buttons: [
              {
                side: 'end',
                text: 'OKAY',
                handler: () => {
                  this.router.navigateByUrl('/hotel/tabs/hotel-home');
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

    // this.dismissCart();

    console.log(data);
    // this.dismissCart();
    // this.router.navigateByUrl('/confirmation');
  }
}
