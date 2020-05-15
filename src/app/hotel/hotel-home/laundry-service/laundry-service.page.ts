import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookLaundryComponent } from './book-laundry/book-laundry.component';

@Component({
  selector: 'app-laundry-service',
  templateUrl: './laundry-service.page.html',
  styleUrls: ['./laundry-service.page.scss'],
})
export class LaundryServicePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  bookLaundry() {
    this.modalCtrl.create({
      component: BookLaundryComponent,
    }).then(modalEl => {
      modalEl.present();
    });
  }

}
