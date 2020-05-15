import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settle-bill-covid',
  templateUrl: './settle-bill-covid.component.html',
  styleUrls: ['./settle-bill-covid.component.scss'],
})
export class SettleBillCovidComponent implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  messageOkay() {
    this.modalCtrl.dismiss();
    this.router.navigateByUrl('hotel/tabs/hotel-home');
  }

}
