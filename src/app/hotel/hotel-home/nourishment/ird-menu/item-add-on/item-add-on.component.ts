import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-item-add-on',
  templateUrl: './item-add-on.component.html',
  styleUrls: ['./item-add-on.component.scss'],
})
export class ItemAddOnComponent implements OnInit {
  @Input() itemAddon;
  @Input() isRepeat;
  itemQty = 1;
  selectedCheckboxes = [];
  max;
  min;
  selectedRadio;

  constructor(
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {}

  incrementQty(item) {
    item.count += 1;
    this.itemQty += 1;
    console.log(item.count + 1, item, this.itemQty);
  }

  // decrements item

  decrementQty(item) {
    if (item.count - 1 < 1) {
      item.count = 0;
      item.addons = [];
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
    } else {
      item.count -= 1;
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
    }
  }

  multiSelect(item, max, min) {
    this.max = max;
    this.min = min;
    if (item.isSelected === true) {
      this.selectedCheckboxes.push(item);
      this.itemAddon.addons.push(item);
      console.log(this.itemAddon.addons);
    } else if (item.isSelected === false) {
      this.selectedCheckboxes.splice(this.selectedCheckboxes.indexOf(item), 1);
      this.itemAddon.addons.splice(this.itemAddon.addons.indexOf(item), 1);
      console.log(this.itemAddon.addons);
    }

    if (this.selectedCheckboxes.length > max) {
      this.toastCtrl.create({
        message: 'can not select more than ' + max + ' and less than ' + min,
        keyboardClose: true,
        duration: 2500,
        color: 'warning',
        position: 'top'
      }).then(toastEl => {
        toastEl.present();
      });
    }
  }

  radioChange(item, ev) {
    // console.log(item);
  }

  selectedRadioItem(item) {
    console.log(item);
  }

  radioSelect(e, sub, subaddon) {
    console.log(e.detail.value, sub);
    if (sub.length > 0) {
      this.itemAddon.addons.filter(item => {
        if (item.menu_item_subaddon_id == subaddon.id) {
          this.itemAddon.addons.splice(this.itemAddon.addons.indexOf(item), 1);
        }
      });
    }

    sub.filter(item => {
      if (item.id == e.detail.value) {
        this.itemAddon.addons.push(item);
      }
    });
    console.log(this.itemAddon);
  }

  addAddOns() {
    if (this.selectedCheckboxes.length > this.max || this.selectedCheckboxes.length < this.min) {
      this.toastCtrl.create({
        message: 'Please select minimum ' + this.min + ' and maximum ' + this.max,
        keyboardClose: true,
        duration: 2500,
        color: 'warning',
        position: 'top'
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    if (this.itemAddon.count === 0) {
      this.toastCtrl.create({
        message: 'Please add items to proceed or click on cross button to close.',
        keyboardClose: true,
        duration: 2500,
        color: 'warning',
        position: 'top'
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    this.modalCtrl.dismiss({
      dismissed: 'close-btn',
      item: this.itemAddon,
      duplicateItem: {...this.itemAddon},
      totalQty: this.itemQty,
    });
  }

  dismissAddon() {
    this.modalCtrl.dismiss();
  }

}
