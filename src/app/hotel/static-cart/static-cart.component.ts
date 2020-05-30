import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-static-cart',
  templateUrl: './static-cart.component.html',
  styleUrls: ['./static-cart.component.scss'],
})
export class StaticCartComponent implements OnInit {
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
  ) { }

  ngOnInit() {
    console.log(this.cartItems);
    if (this.cartItems !== undefined) {
      this.calculateTotalPrice();
    }
  }


  calculateItemPrice(count, price) {
    const tax = 18 / 100;
    const taxedPrice = (price * tax).toFixed(2);
    return count * ((+taxedPrice) + price);
  }

  calculateTotalPrice() {
    let sum = null;
    this.cartItems.forEach((element) => {
      const tax = 18 / 100;
      const taxedPrice = element.price * tax;
      sum += element.qty * (element.price + taxedPrice);
    });
    this.totalAmount = sum;
  }

  addItemInitial(menuItem) {
    menuItem.count += 1;
    console.log(menuItem.qty + 1, menuItem);
  }

  incrementQty(item) {
    item.qty += 1;
    this.itemQty += 1;
    console.log(item.qty + 1, item);
    this.calculateTotalPrice();
  }

  // decrements item

  decrementQty(item) {
    if (item.count - 1 < 1) {
      item.qty = 0;
      this.itemQty = 0;
      console.log(item.qty, item);
      this.calculateTotalPrice();
      if (this.itemQty === 0) {
        this.dismissCart();
      }
    } else {
      item.qty -= 1;
      this.itemQty -= 1;
      console.log(item.qty, item);
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

    this.dismissCart();
    this.router.navigateByUrl('/confirmation');
  }

}
