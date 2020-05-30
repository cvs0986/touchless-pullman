import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { Planet21ReviewOrderComponent } from './planet21-review-order/planet21-review-order.component';

@Component({
  selector: 'app-irs-tv',
  templateUrl: './irs-tv.page.html',
  styleUrls: ['./irs-tv.page.scss'],
})
export class IrsTvPage implements OnInit {

  planet21List: any = [
    {name: 'Change bed linen', isEnabled: false, message: 'bed linen change'},
    {name: 'Change towels', isEnabled: false, message: 'towels change'},
  ];

  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  planet21Change(item) {
    if (item.isEnabled) {
      this.alertCtrl.create({
        header: 'Sustainability-Planet21',
        subHeader: 'Enter Details',
        inputs: [
          {
            name: 'room',
            type: 'number',
            placeholder: 'Room Number'
          },
          {
            name: 'guests',
            type: 'number',
            placeholder: 'No of guests'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              item.isEnabled = false;
            }
          },
          {
            text: 'Place Request',
            handler: (data) => {
              console.log(data);
              if (data.room === '' || data.guests === '') {
                this.toastCtrl.create({
                  message: 'Room number and No of guests is required!',
                  color: 'warning',
                  position: 'top',
                  duration: 1500
                }).then(toastEl => {
                  toastEl.present();
                });
                return false;
              }
              this.toastCtrl.create({
                message: 'You\'ve requested for ' + item.message + ' has been noted. Same will be done while servicing your room today.',
                header: 'Thank You!',
                color: 'success',
                position: 'top',
                buttons: ['Okay']
              }).then(toastEl => {
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
