import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-essentials-cart',
  templateUrl: './essentials-cart.component.html',
  styleUrls: ['./essentials-cart.component.scss'],
})
export class EssentialsCartComponent implements OnInit {
  @Input() cartItems;
  @Input() itemQty;
  guestQty = 0;
  date;
  time;
  room;

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    console.log(this.cartItems, this.itemQty)
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

  placedOrder() {
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

    this.toastCtrl
          .create({
            header: 'Thank you!',
            message: 'Your request has been accepted. You will get a confirmation call within 2 minutes.',
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

}
