import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  baggagePickup() {
    this.alertCtrl.create({
      header: 'Baggage Pick up',
      inputs: [
        {
          name: 'date',
          type: 'date',
          label: 'Select Date'
        },
        {
          name: 'time',
          type: 'time',
          label: 'Select Time'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: (data) => {
            console.log(data);
            this.toastCtrl
              .create({
                message: 'We will send someone to your room on ' + data.date + ', ' + data.time + ' for baggage pick up.',
                position: 'top',
                header: 'THANK YOU',
                duration: 4000,
                keyboardClose: true,
                color: 'primary',
              })
              .then((toastEl) => {
                toastEl.present();
              });
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

  checkout() {
    this.toastCtrl.create({
      message: 'We will prepare your Check Out.',
      position: 'top',
      header: 'Noted!',
      duration: 2000,
      keyboardClose: true,
      color: 'success'
    }).then(toastEl => {
      toastEl.present();
    });
  }

  request() {
    this.alertCtrl.create({
      header: 'Your Request',
      inputs: [
        {
          name: 'request',
          type: 'textarea',
          placeholder: 'request'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Submit Request',
          handler: (data) => {
            console.log(data);
            this.toastCtrl
              .create({
                message: 'We will get back you shortly to cater to your request.',
                position: 'top',
                header: 'Thank you!',
                duration: 4000,
                keyboardClose: true,
                color: 'warning',
              })
              .then((toastEl) => {
                toastEl.present();
              });
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
