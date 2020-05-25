import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pillow-menu-review',
  templateUrl: './pillow-menu-review.component.html',
  styleUrls: ['./pillow-menu-review.component.scss'],
})
export class PillowMenuReviewComponent implements OnInit {
  @Input() placedRequest;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {}

  dismissCart() {
    this.modalCtrl.dismiss();
  }

  placeRequest() {
    this.modalCtrl.dismiss({
      dismissed: 'on-success'
    });
    this.toastCtrl.create({
      header: 'Thank you!',
      message: 'Your request has been received. You will receive a confirmation call from our team shortly.',
      keyboardClose: true,
      color: 'success',
      position: 'bottom',
      buttons: [
        {
          text: 'OKAY',
          role: 'cancel',
          handler: () => {
            this.router.navigateByUrl('/hotel/tabs/hotel-home/irs');
          }
        }
      ]
    }).then(toastEl => {
      toastEl.present();
    });
  }

}
