import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { CartComponent } from 'src/app/hotel/cart/cart.component';

@Component({
  selector: 'app-refreshment-menu',
  templateUrl: './refreshment-menu.page.html',
  styleUrls: ['./refreshment-menu.page.scss'],
})
export class RefreshmentMenuPage implements OnInit {
  itemQty = 0;
  isIos: boolean;
  menuItems: any[] = [
    {
      categoryName: 'SOFT BEVERAGES / WATER',
      items: [
        {
          name: 'Inported Sparkling Water (330 ml)',
          price: 250,
          qty: 0,
        },
        {
          name: 'Aerated Beverages',
          price: 250,
          qty: 0,
        },
        {
          name: 'Tonic',
          price: 250,
          qty: 0,
        },
        {
          name: 'Soda',
          price: 250,
          qty: 0,
        },
        {
          name: 'Juice',
          price: 250,
          qty: 0,
        },
        {
          name: 'Red Bull',
          price: 300,
          qty: 0,
        },
        {
          name: 'Evian',
          price: 300,
          qty: 0,
        },
      ],
    },
    {
      categoryName: 'SPIRITS / BEERS',
      items: [
        {
          name: 'Single Malt 12 YO',
          price: 1000,
          qty: 0,
        },
        {
          name: 'Blended Scotch 12 YO',
          price: 900,
          qty: 0,
        },
        {
          name: 'Premium Vodka',
          price: 900,
          qty: 0,
        },
        {
          name: 'Premium Gin',
          price: 900,
          qty: 0,
        },
        {
          name: 'Indian Beer',
          price: 500,
          qty: 0,
        },
      ],
    },
    {
      categoryName: 'WINE',
      items: [
        {
          name: 'Premium white wine',
          price: 900,
          qty: 0,
        },
        {
          name: 'Premium red wine',
          price: 900,
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
