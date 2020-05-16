import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookLaundryComponent } from './book-laundry/book-laundry.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laundry-service',
  templateUrl: './laundry-service.page.html',
  styleUrls: ['./laundry-service.page.scss'],
})
export class LaundryServicePage implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }

  bookLaundry() {
    this.modalCtrl.create({
      component: BookLaundryComponent,
    }).then(modalEl => {
      modalEl.present();
    });
  }

  nourishmentNavigation(e) {
    if (e === 'guide') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment/nourishment-guide');
    }
    if (e === 'ird-menu') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment/ird-menu');
    }
    if (e === 'refreshment-menu') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment/refreshment-menu');
    }
    if (e === 'pre-order') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment/pre-order-breakfast');
    }
  }

}
