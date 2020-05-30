import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { PlaceYourRequestReviewComponent } from './place-your-request-review/place-your-request-review.component';
import { HotelApiService } from '../../hotel-api.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.page.html',
  styleUrls: ['./connect.page.scss'],
})
export class ConnectPage implements OnInit {
  additionalRequest: string;
  showAdditionalRequest = false;
  showBottles = false;
  bottles;
  selectedRequests: any[] = [];
  requestsListApi: any = [];
  requestLists: any[] = [
    {name: 'Baggage pick up', isChecked: false, value: 'baggage-pick-up'},
    {name: 'Prepare my check out', isChecked: false, value: 'check-out'},
    {name: 'Any additional request', isChecked: false, value: 'additional-request'}
  ];

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private hotelApi: HotelApiService
  ) { }

  ngOnInit() {
    this.hotelApi.getRequestServicesMenus('N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=').subscribe(
      (resp) => {
        this.requestsListApi = resp.body.data;
        console.log(this.requestsListApi);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  requestChange(request) {
    if (request.isChecked) {
      this.selectedRequests.push(request);
      console.log(this.selectedRequests);
    } else if (!request.isChecked) {
      this.selectedRequests.splice(this.selectedRequests.indexOf(request), 1);
      console.log(this.selectedRequests);
    }

    console.log(request);

    if (request.type === 'with-count' && request.isChecked) {
      this.alertCtrl.create({
        header: 'Number of bottles',
        backdropDismiss: false,
        inputs: [
          {
            name: 'bottles',
            type: 'number',
            placeholder: 'Bottles'
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
              if (data.bottles === '' || data.bottles === undefined || data.bottles == 0) {
                this.toastCtrl.create({
                  message: 'Please enter number of bottles!',
                  color: 'warning',
                  duration: 1500,
                  position: 'top',
                  keyboardClose: true,
                }).then(toastEl => {
                  toastEl.present();
                });

                return false;
              }
              this.bottles = data.bottles;
              this.showBottles = true;
            }
          }
        ]
      }).then(alertEl => {
        alertEl.present();
      });
    }

    if (request.type === 'with-count' && !request.isChecked) {
      this.bottles = 0;
      this.showBottles = false;
    }


    if (request.type === 'open-msg' && request.isChecked) {
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

    if (request.type === 'open-msg' && !request.isChecked) {
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
        placedRequest: this.selectedRequests,
        additionalRequest: this.additionalRequest,
        bottles: this.bottles
      }
      }).then(modalEl => {
        modalEl.present();
      });
      return false;
    }
    console.log(this.requestLists, this.additionalRequest);
  }

}
