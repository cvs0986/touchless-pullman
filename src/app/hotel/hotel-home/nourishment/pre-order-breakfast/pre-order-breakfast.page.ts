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
      categoryName: 'CONTINENTAL BREAKFAST',
      items: [
        {
          name: 'Baker’s Basket',
          price: 550,
          qty: 0,
          ingredients: 'Danish, Croissant and Muffins or White, Brown, or Multigrain toast with preserves and butter',
          el: '',
        },
        {
          name: 'Freshly squeezed fruit juice',
          price: 550,
          qty: 0,
          ingredients: 'orange pineapple or watermelon',
          el: '',
        },
        {
          name: 'Bowl of Seasonal cut fruits',
          price: 550,
          qty: 0,
          ingredients: '',
          el: '',
        },
        {
          name: 'Choice of Cereals',
          price: 550,
          qty: 0,
          ingredients: 'Corn flakes/ Wheat flakes/ Chocolate flakes/ Raggi Bites/Dry muesli with option of Full cream, skimmed or soy milk',
          el: '',
        },
        {
          name: 'Plain or Fruit yogurt',
          price: 550,
          qty: 0,
          ingredients: 'Mango, blueberry, strawberry, raspberry, Banana',
          el: '',
        },
      ],
    },
    {
      categoryName: 'SIGNATURE SPECIALTY',
      items: [
        {
          name: 'Smoked salmon Scrambled Egg',
          price: 575,
          qty: 0,
          ingredients: 'Multigrain Sour Doug Toast, Arugula, Beurre Noisette',
          el: '',
        },
        {
          name: 'Classic Egg Benedict',
          price: 575,
          qty: 0,
          ingredients: 'Grilled homemade muffin baked with Béarnaise / Smoked ham or you may like Smoked Salmon',
          el: '',
        },
        {
          name: 'Shakshuka',
          price: 495,
          qty: 0,
          ingredients: 'Baked egg, Hearty tomato and pepper sauce / Labneh and Chilli Flakes',
          el: '',
        },
        {
          name: 'Waffle',
          price: 495,
          qty: 0,
          ingredients: 'Whipped cream, Maple syrup / Candied Fig and Salted Caramel',
          el: '',
        },
        {
          name: 'Pancake',
          price: 495,
          qty: 0,
          ingredients: 'Whipped cream, Maple syrup / Choco chip, Blue berry compote, caramelized banana, walnut',
          el: '',
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
