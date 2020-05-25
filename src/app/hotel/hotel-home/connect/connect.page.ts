import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { PlaceYourRequestReviewComponent } from './place-your-request-review/place-your-request-review.component';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {
  additionalRequest: string;
  showAdditionalRequest = false;
  selectedRequests: any[] = [];
  requestLists: any[] = [
    {name: 'Baggage pick up', isChecked: false, value: 'baggage-pick-up'},
    {name: 'Prepare my check out', isChecked: false, value: 'check-out'},
    {name: 'Any additional request', isChecked: false, value: 'additional-request'}
  ];

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {

  }

  requestChange(request) {
    if (request.isChecked) {
      this.selectedRequests.push(request.name);
      console.log(this.selectedRequests);
    } else if (!request.isChecked) {
      this.selectedRequests.splice(this.selectedRequests.indexOf(request.name), 1);
      console.log(this.selectedRequests);
    }

    console.log(request);
    if (request.value === 'additional-request' && request.isChecked) {
      this.alertCtrl.create({
        header: 'Your Request',
        backdropDismiss: false,
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
              request.isChecked = false;
            }
          }, {
            text: 'DONE',
            handler: (data) => {
              console.log(data);
              if (data.request === '' || data.request === undefined || data.request.trim() === '') {
                this.toastCtrl.create({
                  message: 'Please enter your request!',
                  color: 'warning',
                  duration: 1500,
                  position: 'top',
                  keyboardClose: true,
                }).then(toastEl => {
                  toastEl.present();
                });

                return false;
              }
              this.additionalRequest = data.request;
              this.showAdditionalRequest = true;
            }
          }
        ]
      }).then(alertEl => {
        alertEl.present();
      });
    }

    if (request.value === 'additional-request' && !request.isChecked) {
      this.additionalRequest = '';
      this.showAdditionalRequest = false;
    }
  }

  continuePlaceRequest() {
    if (this.selectedRequests.length === 0) {
      this.toastCtrl.create({
        message: 'Please select any to continue!',
        color: 'warning',
        duration: 1500,
        position: 'top'
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    if (this.selectedRequests.length !== 0) {
      this.modalCtrl.create({
      component: PlaceYourRequestReviewComponent,
      componentProps: {
        placedRequest: this.requestLists,
        additionalRequest: this.additionalRequest
      }
      }).then(modalEl => {
        modalEl.present();
      });
      return false;
    }
    console.log(this.requestLists, this.additionalRequest);
  }

  baggagePickup() {
    const todayDate = new Date();
    const date = todayDate.getDate();
    const month = todayDate.getMonth();
    const year = todayDate.getFullYear();
    this.alertCtrl.create({
      header: 'Baggage Pick up',
      inputs: [
        {
          name: 'date',
          type: 'date',
          value: '2020-05-19',
          placeholder: 'Select date'
        },
        {
          name: 'time',
          type: 'time',
          value: '05:00PM',
          placeholder: '00:00 AM'
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
