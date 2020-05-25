import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  constructor(private modalCtrl: ModalController, private router: Router, private toastCtrl: ToastController) {}

  ngOnInit() {
    console.log(this.cartItems);
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
    // this.dismissCart();
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
