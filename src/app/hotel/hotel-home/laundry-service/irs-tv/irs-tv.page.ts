import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Planet21ReviewOrderComponent } from './planet21-review-order/planet21-review-order.component';

@Component({
  selector: 'app-irs-tv',
  templateUrl: './irs-tv.page.html',
  styleUrls: ['./irs-tv.page.scss'],
})
export class IrsTvPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  changeLinen() {
    this.modalCtrl.create({
      component: Planet21ReviewOrderComponent,
      componentProps: {
        action: 'bed-linen'
      }
    }).then(modalEl => {
      modalEl.present();
    });
  }

  changeTowels() {
    this.modalCtrl.create({
      component: Planet21ReviewOrderComponent,
      componentProps: {
        action: 'towels'
      }
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
