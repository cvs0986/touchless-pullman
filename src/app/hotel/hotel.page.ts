import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  openCart() {
    this.modalCtrl.create({
      component: CartComponent
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
