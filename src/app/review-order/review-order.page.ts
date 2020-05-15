import { Component, OnInit } from '@angular/core';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { OrdersItemService } from '../orders-item.service';
import { ApiService } from '../api.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-review-order',
  templateUrl: './review-order.page.html',
  styleUrls: ['./review-order.page.scss'],
})
export class ReviewOrderPage implements OnInit {
  itemQty = 0;
  guestQty = 0;
  roomNumber;
  hotelId;
  progressLoading = false;
  totalAmount;

  cookingIns: string;

  orderedItems: any[];
  copiedOrder: any[];

  placeResponse: any;
  takeAway = false;

  cardNumber;
  cardName;
  cardMonth;
  cardYear;
  cardCVV;

  guestName;
  guestEmail;
  guestMobile;

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private orderItemsService: OrdersItemService,
    private toastCtrl: ToastController,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    this.orderedItems = this.orderItemsService.ordersItems;
    console.log(this.orderedItems);

    const orderType = localStorage.getItem('orderType');
    if (orderType === 'take-away') {
      this.takeAway = true;
    }

    this.calculateTotalPrice();
  }

  calculateItemPrice(count, price) {
    return count * price;
  }

  calculateTotalPrice() {
    let sum = null;
    this.orderedItems.forEach(element => {
      sum += element.count * element.price;
    });
    this.totalAmount = sum;
  }

  addCookingIns() {
    this.alertCtrl
      .create({
        header: 'Add instruction',
        inputs: [
          {
            name: 'instruction',
            id: 'instructionID',
            type: 'textarea',
            placeholder: 'Less spicy, do not add garlic...',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'dark',
            handler: () => {
              console.log('Confirm Cancel');
            },
          },
          {
            text: 'ADD',
            handler: (data) => {
              this.cookingIns = data.instruction;
              console.log('Confirm Ok', this.cookingIns);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }

  addItemInitial(menuItem) {
    menuItem.count += 1;
    this.itemQty += 1;
    console.log(menuItem.count + 1, menuItem, this.itemQty);
  }

  incrementQty(item) {
    item.count += 1;
    this.itemQty += 1;
    console.log(item.count + 1, item, this.itemQty);
    this.calculateTotalPrice();
  }

  // decrements item

  decrementQty(item) {
    if (item.count - 1 < 1) {
      item.count = 0;
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
      this.calculateTotalPrice();
    } else {
      item.count -= 1;
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
      this.calculateTotalPrice();
    }
  }

  incrementGuest() {
    this.guestQty += 1;
    console.log(this.guestQty);
  }

  // decrements item

  decrementGuest() {
    if (this.guestQty - 1 < 1) {
      this.guestQty = 0;
      console.log(this.guestQty);
    } else {
      this.guestQty -= 1;
      console.log(this.guestQty);
    }
  }

  placeOrder() {
    this.copiedOrder = [...this.orderedItems];
    const filteredData = [...this.copiedOrder];
    const finalData = [];

    filteredData.filter((item) => {
      delete item.created_at;
      delete item.tags;
      delete item.updated_at;
      if (item.count !== 0) {
        finalData.push(item);
      }
    });

    if (this.roomNumber === undefined || this.roomNumber === 0) {
      this.toastCtrl
        .create({
          message: 'Please enter the table number.',
          duration: 2000,
          position: 'top',
          color: 'warning',
        })
        .then((toastEl) => {
          toastEl.present();
        });
      return false;
    }

    if (this.guestQty === 0) {
      this.toastCtrl
        .create({
          message: 'Please select the number of guests.',
          duration: 2000,
          position: 'top',
          color: 'warning',
        })
        .then((toastEl) => {
          toastEl.present();
        });
      return false;
    }

    if (finalData.length === 0) {
      this.toastCtrl
        .create({
          message:
            'Please add items to place order. Item quantity can not be 0!',
          duration: 3000,
          position: 'top',
          color: 'warning',
        })
        .then((toastEl) => {
          toastEl.present();
        });
      return false;
    }

    const data = {
      no_guest: this.guestQty,
      items: JSON.stringify(finalData),
      room_no: this.roomNumber,
      details: this.cookingIns,
    };

    this.progressLoading = true;

    $.post(
      'https://ird-api.valet2you.in/v10.0.6/guest/order/' +
        localStorage.getItem('hi'),
      data,
      (resp) => {
        this.placeResponse = JSON.parse(resp);
        console.log(this.placeResponse);
        if (this.placeResponse.success == 1) {
          console.log('in.....');
          this.orderItemsService.placedOrder = finalData;
          this.progressLoading = false;
          this.router.navigateByUrl('/confirmation');
        }

        if (this.placeResponse.success == 0 && this.placeResponse.message === 'room_no is not Found!') {
          this.progressLoading = false;
          this.toastCtrl.create({
            message: 'Please enter valid room number!',
            duration: 3000,
            position: 'top',
            keyboardClose: true,
            color: 'warning'
          }).then(toastEl => {
            toastEl.present();
          });
        }
      }
    );
  }
}
