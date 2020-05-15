import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spa-cart',
  templateUrl: './spa-cart.component.html',
  styleUrls: ['./spa-cart.component.scss'],
})
export class SpaCartComponent implements OnInit {
  @Input() spaItem;
  guestQty = 0;

  constructor(private modalCtrl: ModalController, private router: Router) {}

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
    this.dismissCart();
    this.router.navigateByUrl('/confirmation');
  }
}
