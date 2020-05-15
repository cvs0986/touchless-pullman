import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { CartComponent } from 'src/app/hotel/cart/cart.component';

@Component({
  selector: 'app-pre-order-breakfast',
  templateUrl: './pre-order-breakfast.page.html',
  styleUrls: ['./pre-order-breakfast.page.scss'],
})
export class PreOrderBreakfastPage implements OnInit {
  itemQty = 0;
  isIos: boolean;

  menuItems: any[] = [
    {
      categoryName: 'JUICES & SMOOTHIES',
      items: [
        {
          name: 'Revitalising Juices S',
          price: 600,
          qty: 0,
          ingredients: '',
          el: ''
        },
        {
          name: 'Satisfying Smoothies S',
          price: 650,
          qty: 0,
          ingredients: '',
          el: ''
        },
      ],
    },
    {
      categoryName: 'REFRESHING CHOICES',
      items: [
        {
          name: 'Coffee',
          price: 575,
          qty: 0,
          ingredients: '',
          el: ''
        },
        {
          name: 'Tea',
          price: 475,
          qty: 0,
        },
        {
          name: 'Hot Chocolate',
          price: 425,
          qty: 0,
        },
        {
          name: 'Still Water (750ml)',
          price: 400,
          qty: 0,
        },
        {
          name: 'Sparkling Water (750ml)',
          price: 600,
          qty: 0,
        },
      ],
    },
  ];

  constructor(private modalCtrl: ModalController, private platform: Platform) {}

  ngOnInit() {
    this.isIos = this.platform.is('ios');
    console.log(this.isIos);
  }

  addItemInitial(menuItem) {
    menuItem.qty += 1;
    this.itemQty += 1;
    console.log(menuItem.qty + 1, menuItem, this.itemQty);
  }

  incrementQty(item) {
    item.qty += 1;
    this.itemQty += 1;
    console.log(item.qty + 1, item, this.itemQty);
  }

  // decrements item

  decrementQty(item) {
    if (item.qty - 1 < 1) {
      item.qty = 0;
      this.itemQty -= 1;
      console.log(item.qty, item, this.itemQty);
    } else {
      item.qty -= 1;
      this.itemQty -= 1;
      console.log(item.qty, item, this.itemQty);
    }
  }

  reviewOrder() {
    localStorage.removeItem('cart-items');
    const cartItems = [];
    this.menuItems.filter((item) => {
      item.items.filter((menuItem) => {
        if (menuItem.qty !== 0) {
          cartItems.push(menuItem);
        }
      });
    });
    console.log(cartItems);
    localStorage.setItem('cart-items', JSON.stringify(cartItems));

    this.modalCtrl
      .create({
        component: CartComponent,
        componentProps: {
          cartItems: cartItems,
        },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
