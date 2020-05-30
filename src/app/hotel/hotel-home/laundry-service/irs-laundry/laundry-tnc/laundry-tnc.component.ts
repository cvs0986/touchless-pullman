import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-laundry-tnc',
  templateUrl: './laundry-tnc.component.html',
  styleUrls: ['./laundry-tnc.component.scss'],
})
export class LaundryTncComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  dismissCart() {
    this.modalCtrl.dismiss();
  }

}
