import { Component, OnInit } from '@angular/core';
import { BookLaundryComponent } from '../book-laundry/book-laundry.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-irs-laundry',
  templateUrl: './irs-laundry.page.html',
  styleUrls: ['./irs-laundry.page.scss'],
})
export class IrsLaundryPage implements OnInit {

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
