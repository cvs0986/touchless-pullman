import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() cartItems;
  guestQty = 0;
  constructor(private modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {
    console.log(this.cartItems);
  }

  addItemInitial(menuItem) {
    menuItem.qty += 1;
    console.log(menuItem.qty + 1, menuItem);
  }

  incrementQty(item) {
    item.qty += 1;
    console.log(item.qty + 1, item);
  }

  // decrements item

  decrementQty(item) {
    if (item.qty - 1 < 1) {
      item.qty = 0;
      console.log(item.qty, item);
    } else {
      item.qty -= 1;
      console.log(item.qty, item);
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
    this.modalCtrl.dismiss();
  }

  orderPlaced() {
    this.dismissCart();
    this.router.navigateByUrl('/confirmation');
  }
}
