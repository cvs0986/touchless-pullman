import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  constructor(private modalCtrl: ModalController, private router: Router, private toastCtrl: ToastController) {}

  ngOnInit() {
    console.log(this.spaItem);
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

  placedOrder() {
    const data = {
      date: new Date(this.date).toDateString(),
      time: new Date(this.time).toLocaleTimeString(),
      guest: this.guestQty
    };
    console.log(data);
    this.dismissCart();
    this.toastCtrl.create({
      header: 'Thank you!',
      message: 'Your request has been received. You will receive a confirmation call from our team shortly.',
      keyboardClose: true,
      color: 'success',
      position: 'bottom',
      buttons: [
        {
          text: 'OKAY',
          role: 'cancel',
          handler: () => {
            // this.router.navigateByUrl('/hotel/tabs/hotel-home');
          }
        }
      ]
    }).then(toastEl => {
      toastEl.present();
    });
  }
}
