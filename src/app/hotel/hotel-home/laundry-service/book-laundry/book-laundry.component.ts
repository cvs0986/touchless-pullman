import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-laundry',
  templateUrl: './book-laundry.component.html',
  styleUrls: ['./book-laundry.component.scss'],
})
export class BookLaundryComponent implements OnInit {
  guestQty = 0;

  constructor(private modalCtrl: ModalController, private router: Router, private toastCtrl: ToastController) {}

  ngOnInit() {
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
    this.dismissCart();
    this.toastCtrl.create({
      message: 'BOOKED! You will receive a confirmation call in a few minutes.',
      keyboardClose: true,
      duration: 5000,
      color: 'success',
      position: 'top'
    }).then(toastEl => {
      toastEl.present();
    });
  }
}
