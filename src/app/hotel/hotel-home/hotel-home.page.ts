import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hotel-home',
  templateUrl: './hotel-home.page.html',
  styleUrls: ['./hotel-home.page.scss'],
})
export class HotelHomePage implements OnInit {
  passcode = 5050;
  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.alertCtrl.create({
      header: 'Enter Passcode',
      backdropDismiss: false,
      subHeader: 'Enter 4 digit passcode to access',
      inputs: [
        {
          name: 'passcode',
          type: 'number',
        }
      ],
      buttons: [
        {
          text: 'Submit',
          handler: (passcode) => {
            if (+passcode.passcode !== this.passcode) {
              this.toastCtrl.create({
                message: 'Invalid passcode!',
                duration: 1500,
                color: 'danger',
                position: 'top'
              }).then(toastEl => {
                toastEl.present();
              });
              console.log(passcode);
              return false;
            }
            if (+passcode.passcode === this.passcode) {
              this.toastCtrl.create({
                message: 'Logged in!',
                duration: 1000,
                keyboardClose: true,
                color: 'success',
                position: 'top'
              }).then(toastEl => {
                toastEl.present();
              });
              console.log(passcode, this.passcode);
            }
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

  navigateToService(e) {
    console.log(e);
    if (e === 'journey') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/journey');
      return false;
    }
    if (e === 'nourishment') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment');
      return false;
    }
    if (e === 'spa') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/spa');
      return false;
    }
    if (e === 'conserve') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/conserve');
      return false;
    }
    if (e === 'connect') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/connect');
      return false;
    }
    if (e === 'tv-guide') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/tv-guide');
      return false;
    }
    if (e === 'irs') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/irs');
      return false;
    }
  }

  shareFeedback() {
    window.open('https://splash.getlocalmeasure.com/pulse/5b970909b6cd65002d304005?utm_source=qr', '_blank');
  }

}
