import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { CartComponent } from 'src/app/hotel/cart/cart.component';

@Component({
  selector: 'app-ird-menu',
  templateUrl: './ird-menu.page.html',
  styleUrls: ['./ird-menu.page.scss'],
})
export class IrdMenuPage implements OnInit {
  itemQty = 0;
  isIos: boolean;

  menuItems: any[] = [
    {
      headName: 'ARTFULLY BLENDED',
      // tslint:disable-next-line: max-line-length
      headDesc: 'Looking for a refreshing start to your morning? All juices and smoothies are brimming with healthy benefits and essential nutrients to invigorate body and mind. Available all day.',
      headEl: [
        {
          categoryName: 'SATISFYING SMOOTHIES',
          items: [
            {
              name: 'Recharge Remedy S',
              price: 650,
              qty: 0,
              ingredients:
                'Pineapple, apple, banana, yoghurt and coconut water',
              elements: 'CALCIUM  |  POTASSIUM  |  VITAMIN C',
            },
            {
              name: 'Glow Potion S',
              price: 650,
              ingredients:
                'Banana, peanut butter, coco powder, chia seeds, almond milk and honey',
              qty: 0,
              elements: 'OMEGA 3 | POTASSIUM | ANTIOXIDANTS',
            },
          ],
        },

        {
          categoryName: 'REVITALIZING JUICES',
          items: [
            {
              name: 'Anti-aging Solution S C',
              price: 600,
              ingredients: 'Carrot, apple and spinach',
              qty: 0,
              elements: 'FIBER | IRON | VITAMIN C',
            },
            {
              name: 'Balancing Beets S C',
              price: 600,
              ingredients: 'Beetroot, pineapple, carrot, ginger and basil',
              qty: 0,
              elements: 'VITAMIN C | CALCIUM | MAGNESIUM',
            },
            {
              name: 'Immunity S C',
              price: 600,
              ingredients: 'Apple, ginger and lemon',
              qty: 0,
              elements: 'VITAMIN C | FIBER | MAGNESIUM',
            },
          ],
        },

        {
          categoryName: 'FRESHLY SQUEEZED JUICES',
          items: [
            {
              name: 'Fruits',
              price: 525,
              ingredients: 'Orange/watermelon/pineapple',
              qty: 0,
              elements: '',
            },
            {
              name: 'Vegetables',
              price: 525,
              ingredients: 'Tomato/spinach/beetroot/carrot/celery/cucumber',
              qty: 0,
              elements: '',
            },
          ],
        },
      ],
    },
    {
      headName: 'BREAKFAST',
      headDesc: '6.00am - 11.00am',
      headEl: [
        {
          categoryName: 'A BALANCED START',
          items: [
            {
              name: 'Seasonal Sliced Fruit Platter H C',
              price: 600,
              qty: 0,
              ingredients: 'Locally sourced seasonal fruit',
              elements: '',
            },
            {
              name: 'Yoghurt H C',
              price: 385,
              ingredients: 'Low fat, Plain, Blueberry, Banana',
              qty: 0,
              elements: 'MAGNESIUM | CALCIUM | PHOSPHORUS | VITAMIN A',
            },
            {
              name: 'Oatmeal H C',
              price: 550,
              ingredients: 'Served with brown sugar and raisins',
              qty: 0,
              elements: 'POTASSIUM | CARBOHYDRATE | PROTEIN',
            },
            {
              name: 'Bircher Muesli H C S',
              price: 550,
              ingredients:
                'Yoghurt, oats, toasted almond, grapes, orange segments and honey',
              qty: 0,
              elements: 'CALCIUM | PHOSPHORUS',
            },
            {
              name: 'Bircher Muesli H C S',
              price: 550,
              ingredients:
                'Yoghurt, oats, toasted almond, grapes, orange segments and honey',
              qty: 0,
              elements: 'CALCIUM | PHOSPHORUS',
            },
            {
              name: 'Cereal Selection H C',
              price: 500,
              ingredients: 'Corn Flakes',
              qty: 0,
              elements: 'SODIUM | POTASSIUM',
            },
            {
              name: 'Lassi C',
              price: 475,
              ingredients: 'Plain/ Sweet/ Salted',
              qty: 0,
              elements: '',
            },
            {
              name: 'Buttermilk C',
              price: 475,
              ingredients: 'Salted / masala',
              qty: 0,
              elements: '',
            },
          ],
        },

        {
          categoryName: 'REVITALIZING JUICES',
          items: [
            {
              name: 'Anti-aging Solution S C',
              price: 600,
              ingredients: 'Carrot, apple and spinach',
              qty: 0,
              elements: 'FIBER | IRON | VITAMIN C',
            },
            {
              name: 'Balancing Beets S C',
              price: 600,
              ingredients: 'Beetroot, pineapple, carrot, ginger and basil',
              qty: 0,
              elements: 'VITAMIN C | CALCIUM | MAGNESIUM',
            },
            {
              name: 'Immunity S C',
              price: 600,
              ingredients: 'Apple, ginger and lemon',
              qty: 0,
              elements: 'VITAMIN C | FIBER | MAGNESIUM',
            },
          ],
        },

        {
          categoryName: 'FRESHLY SQUEEZED JUICES',
          items: [
            {
              name: 'Fruits',
              price: 525,
              ingredients: 'Orange/watermelon/pineapple',
              qty: 0,
              elements: '',
            },
            {
              name: 'Vegetables',
              price: 525,
              ingredients: 'Tomato/spinach/beetroot/carrot/celery/cucumber',
              qty: 0,
              elements: '',
            },
          ],
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
      item.headEl.filter(menu => {
        menu.items.filter(menuItem => {
          if (menuItem.qty !== 0) {
            cartItems.push(menuItem);
          }
        });
      });
    });
    console.log(cartItems);
    localStorage.setItem('cart-items', JSON.stringify(cartItems));

    this.modalCtrl.create({
      component: CartComponent,
      componentProps: {
        cartItems: cartItems
      }
    }).then(modalEl => {
      modalEl.present();
    });
  }
}
