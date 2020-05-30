import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { StaticCartComponent } from 'src/app/hotel/static-cart/static-cart.component';

@Component({
  selector: 'app-active-breakfast',
  templateUrl: './active-breakfast.page.html',
  styleUrls: ['./active-breakfast.page.scss'],
})
export class ActiveBreakfastPage implements OnInit {
itemQty = 0;
  isIos: boolean;

  menuItems: any[] = [
    {
      categoryName: 'Weight Watchers Active Breakfast',
      items: [
        {
          name: 'Granola bar',
          price: 199,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },
        {
          name: 'Roasted nuts and seeds',
          price: 675,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },
        {
          name: 'Fresh fruits and our signature blends',
          price: 450,
          qty: 0,
          type: 'veg',
          details: 'Watermelon, orange or pineapple, apple, mint and ginger',
        },

        {
          name: 'Bowl of seasonal cut fruits',
          price: 450,
          qty: 0,
          type: 'veg',
          details: 'watermelon platter, papaya platter, banana platter,assorted fruit platter',
        },

        {
          name: 'Chia seed oatmeal porridge, topped with toasted almonds and caramelized sliced banana',
          price: 399,
          qty: 0,
          type: 'veg',
          details: '(Gluten free)',
        },
        {
          name: 'Egg white preparation of your choice served with garden green salad ',
          price: 450,
          qty: 0,
          type: 'non-veg',
          details: '(contains egg)',
        },

        {
          name: 'Steamed seasonal vegetable bowl - broccoli, asparagus, Bok Choy and baby carrots ',
          price: 499,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Probiotic milk',
          price: 249,
          qty: 0,
          type: 'veg',
          details: 'Hot Milk, Cold Milk',
        },

        {
          name: 'Low-fat yogurt of the day',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed tea - Assam',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed tea - Darjeeling',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed tea - English breakfast',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed tea - Earl Grey',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed tea - Chamomile',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed tea - Green tea',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed tea - Massala',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed coffee - Cappuccino',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed coffee - Cappuccino',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed coffee - Café late',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed coffee - Americano',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed coffee - Espresso',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },

        {
          name: 'Selection of freshly brewed coffee - Decaffeinated coffee',
          price: 249,
          qty: 0,
          type: 'veg',
          details: '(Healthy Balanced)',
        },
      ]
    }
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
    const cartItems = [];
    this.menuItems.filter((item) => {
      item.items.filter((menuItem) => {
        if (menuItem.qty !== 0) {
          cartItems.push(menuItem);
        }
      });
    });
    console.log(cartItems);

    this.modalCtrl
      .create({
        component: StaticCartComponent,
        componentProps: {
          cartItems: cartItems,
          itemQty: this.itemQty
        },
      })
      .then((modalEl) => {
        modalEl.present();
        modalEl.onDidDismiss().then(dismissEl => {
          if (dismissEl.data.dismissed === 'closed') {
            console.log(dismissEl);
            this.itemQty = dismissEl.data.totalQty;
          }
        });
      });
  }

}
