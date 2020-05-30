import { Component, OnInit } from '@angular/core';
import { HotelApiService } from 'src/app/hotel/hotel-api.service';
import { ToastController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-irs-in-room-fitness',
  templateUrl: './irs-in-room-fitness.page.html',
  styleUrls: ['./irs-in-room-fitness.page.scss'],
})
export class IrsInRoomFitnessPage implements OnInit {
  fitnessKit: any[] = [];
  constructor(
    private hotelApi: HotelApiService,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.hotelApi.getRequestServicesMenus('N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=').subscribe(
      (resp) => {
        console.log(resp);
        const data = resp.body.data;
        data.without_category_items.filter(item => {
          if (item.name === 'In-room fitness kit') {
            const modifiedData = {
              connect_item_id: item.id,
              description: item.description
            };
            this.fitnessKit.push(modifiedData);
          }
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  seeMoreFitness() {
    window.open('https://www.youtube.com/playlist?list=PLbZ-LeQLFD_hYBE2ohyvHXHWRcJkCtFRk', '_blank');
  }

  requestFitnessKit() {
    this.alertCtrl.create({
      header: 'Request In room fitness kit',
      subHeader: 'Please enter room number and number of guests!',
      backdropDismiss: false,
      inputs: [
        {
          name: 'room',
          type: 'number',
          placeholder: 'Room number'
        },
        {
          name: 'guest',
          type: 'number',
          placeholder: 'No of guest'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Place Request',
          handler: (data) => {
            console.log(+data.guest, +data.room);
            if (data.room === '') {
              this.toastCtrl.create({
                message: 'Please enter room number!',
                color: 'warning',
                position: 'top',
                duration: 1500
              }).then(toastEl => {
                toastEl.present();
              });
              return false;
            }
            if (data.guest === '' || data.guest == '0') {
              this.toastCtrl.create({
                message: 'Please enter number of guests!',
                color: 'warning',
                position: 'top',
                duration: 1500
              }).then(toastEl => {
                toastEl.present();
              });
              return false;
            }
            const apiData = {
              enc_hotel_id: 'N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=',
              no_of_guest: +data.guest,
              room_no: +data.room,
              items: JSON.stringify(this.fitnessKit),
            };

            $.post(
              'https://vserve-api.valet2you.in/api/v1/connect/guest/order',
              apiData
            )
              .done((msg) => {
                console.log(msg);
                if (msg.message === 'Success') {
                  this.toastCtrl
                    .create({
                      header: 'Thank you!',
                      message:
                        'Your request has been received. You will receive a confirmation call from our team shortly.',
                      keyboardClose: true,
                      color: 'success',
                      position: 'bottom',
                      buttons: [
                        {
                          text: 'OKAY',
                          role: 'cancel',
                          handler: () => {
                            this.router.navigateByUrl('/hotel/tabs/hotel-home/irs');
                          },
                        },
                      ],
                    })
                    .then((toastEl) => {
                      toastEl.present();
                    });
                }
              })
              .fail((xhr, status, error) => {
                console.log(xhr, status, error);
                if (
                  xhr.status !== 200 &&
                  xhr.responseJSON.message !== 'Room is not available'
                ) {
                  this.toastCtrl
                    .create({
                      message:
                        'Something went wrong! Please try after some time.',
                      keyboardClose: true,
                      duration: 3000,
                      color: 'danger',
                      position: 'top',
                    })
                    .then((toastEl) => {
                      toastEl.present();
                    });
                  return false;
                }

                if (
                  xhr.status !== 200 &&
                  xhr.responseJSON.message === 'Room is not available'
                ) {
                  this.toastCtrl
                    .create({
                      message:
                        xhr.responseJSON.message +
                        ' Please enter correct room number.',
                      keyboardClose: true,
                      duration: 3000,
                      color: 'warning',
                      position: 'top',
                    })
                    .then((toastEl) => {
                      toastEl.present();
                    });
                  return false;
                }
              });
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
