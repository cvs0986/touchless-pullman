import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-your-request-review',
  templateUrl: './place-your-request-review.component.html',
  styleUrls: ['./place-your-request-review.component.scss'],
})
export class PlaceYourRequestReviewComponent implements OnInit {
  @Input() placedRequest;
  @Input() additionalRequest;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.placedRequest, this.additionalRequest);
  }

  placeRequest() {
    this.placedRequest.filter(item => {
      item.isChecked = false;
    });
    console.log(this.placedRequest);
    this.modalCtrl.dismiss({
      dismissed: 'on-success',
      reuestsDismissed: this.placedRequest
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
            this.router.navigateByUrl('/hotel/tabs/hotel-home');
          }
        }
      ]
    }).then(toastEl => {
      toastEl.present();
    });
  }

  dismissCart() {
    this.modalCtrl.dismiss();
  }

}
