import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kids-cart',
  templateUrl: './kids-cart.component.html',
  styleUrls: ['./kids-cart.component.scss'],
})
export class KidsCartComponent implements OnInit {
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

      const date =
        year +
        '-' +
        0 +
        month +
        '-' +
        day +
        ' ' +
        new Date(currentDate).toLocaleTimeString();
      console.log(date);
      return date;
    } else {
      const year = new Date(this.date).getFullYear();
      const month = new Date(this.date).getMonth();
      const day = new Date(this.date).getDate();

      const date =
        year +
        '-' +
        0 +
        month +
        '-' +
        day +
        ' ' +
        new Date(this.time).toLocaleTimeString();
      console.log(date);
      return date;
    }
  }

  placedOrder() {
    if (this.date === undefined && !this.pickupNow) {
      this.toastCtrl
        .create({
          message: 'Please select date',
          keyboardClose: true,
          position: 'top',
          color: 'warning',
          duration: 1500,
        })
        .then((toastEl) => {
          toastEl.present();
        });
      return false;
    }
    if (this.time === undefined && !this.pickupNow) {
      this.toastCtrl
        .create({
          message: 'Please select time',
          keyboardClose: true,
          position: 'top',
          color: 'warning',
          duration: 1500,
        })
        .then((toastEl) => {
          toastEl.present();
        });
      return false;
    }
    if (this.room === undefined || this.room === '' || this.room === null) {
      this.toastCtrl
        .create({
          message: 'Please enter room number.',
          keyboardClose: true,
          position: 'top',
          color: 'warning',
          duration: 1500,
        })
        .then((toastEl) => {
          toastEl.present();
        });
      return false;
    }
    if (this.guestQty === 0) {
      this.toastCtrl
        .create({
          message: 'Please select number of guest.',
          keyboardClose: true,
          position: 'top',
          color: 'warning',
          duration: 1500,
        })
        .then((toastEl) => {
          toastEl.present();
        });
      return false;
    }

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
}
