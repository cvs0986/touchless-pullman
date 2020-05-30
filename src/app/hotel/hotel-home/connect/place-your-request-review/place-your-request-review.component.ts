import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-place-your-request-review',
  templateUrl: './place-your-request-review.component.html',
  styleUrls: ['./place-your-request-review.component.scss'],
})
export class PlaceYourRequestReviewComponent implements OnInit {
  @Input() placedRequest;
  @Input() additionalRequest;
  @Input() bottles;

  guestQty = 0;
  room;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.placedRequest, this.additionalRequest);
  }

  incrementQty() {
    this.guestQty += 1;
  }

  // decrements item

  decrementQty() {
    if (this.guestQty - 1 < 1) {
      this.guestQty = 0;
    } else {
      this.guestQty -= 1;
    }
  }

  placeRequest() {
    if (this.room === undefined || this.room === '' || this.room === null) {
      this.toastCtrl.create({
        message: 'Please enter room number.',
        keyboardClose: true,
        position: 'top',
        color: 'warning',
        duration: 1500
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    if (this.guestQty === 0) {
      this.toastCtrl.create({
        message: 'Please select number of guest.',
        keyboardClose: true,
        position: 'top',
        color: 'warning',
        duration: 1500
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    const selectedItems = [];
    this.placedRequest.filter(item => {
      const data = {
        connect_item_id: item.id,
        description: item.description
      };
      selectedItems.push(data);
    });

    const data = {
      enc_hotel_id: 'N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=',
      no_of_guest: this.guestQty,
      room_no: this.room,
      items: JSON.stringify(selectedItems),
      quantity: this.bottles,
      add_request: this.additionalRequest
    };

    console.log(data);

    $.post('https://vserve-api.valet2you.in/api/v1/connect/guest/order', data)
    .done((msg) => {
      console.log(msg);
      if (msg.message === 'Success') {
        this.placedRequest.filter((item) => {
          item.isChecked = false;
        });
        this.modalCtrl.dismiss({
          dismissed: 'on-success',
          reuestsDismissed: this.placedRequest,
        });
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
                  this.router.navigateByUrl('/hotel/tabs/hotel-home');
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
        if (xhr.status !== 200 && xhr.responseJSON.message !== 'Room is not available') {
          this.dismissCart();
          this.toastCtrl
            .create({
              message: 'Something went wrong! Please try after some time.',
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

        if (xhr.status !== 200 && xhr.responseJSON.message === 'Room is not available') {
          this.toastCtrl
            .create({
              message: xhr.responseJSON.message + ' Please enter correct room number.',
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

  dismissCart() {
    this.modalCtrl.dismiss();
  }

}
