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
      headName: 'European Selection',
      headEl: [
        {
          categoryName: 'Root, Leaf, Grains',
          items: [
            {
              name: 'Immune booster',
              price: 675,
              qty: 0,
              ingredients:
                'Garden greens, broccoli, berries, pickled onions, boiled chickpeas, almonds flakes in light citrus dressing',
            },
            {
              name: 'Classic Nicoise',
              price: 795,
              ingredients:
                'Lettuce, olives, red radish, tomatoes, boiled eggs, French beans, baby potatoes and tuna with French mustard dressing',
              qty: 0,
            },
            {
              name: 'Food Ex signature',
              price: 725,
              ingredients:
                'Low fat green apple salad with beet pickled salmon, shaved walnut and micro greens',
              qty: 0,
            },
            {
              name: 'Caesar salad',
              price: 725,
              ingredients:
                'Hearts of romaine lettuce, croutons, roasted garlic parmesan dressing, grilled chicken and bacon powder',
              qty: 0,
            },
            {
              name: 'Mezze Platter',
              price: 595,
              ingredients:
                'Hummus, babaganoush, tzatziki, falafel, pickle and freshly baked pita',
              qty: 0,
            },
          ],
        },

        {
          categoryName: 'SOUP',
          items: [
            {
              name: 'Minestrone',
              price: 495,
              ingredients:
                'Basil flavoured fresh tomato broth, spring vegetable, cannellini beans and parmesan cheese',
              qty: 0,
            },
            {
              name: 'Classic French onion soup',
              price: 495,
              ingredients: 'Meat consommé, sautéed onions and Gruyere cheese croutons',
              qty: 0,
            },
          ],
        },

        {
          categoryName: 'Burgers & Sandwiches',
          items: [
            {
              name: 'Food Ex Club',
              price: 795,
              ingredients: 'Grilled chicken, Bacon, Lettuce, tomato, fried egg choice of multi grain or white bread',
              qty: 0,
            },
            {
              name: 'Grilled chicken and cheese sandwich',
              price: 750,
              ingredients: 'Ciabatta bread, roasted chicken salad, matured cheddar cheese',
              qty: 0,
            },
            {
              name: 'Steak sandwich',
              price: 795,
              ingredients: 'Striploin, mushroom, onion & Gouda cheese in toasted sour dough bread',
              qty: 0,
            },
            {
              name: 'Grilled vegetable sandwich',
              price: 695,
              ingredients: 'Sliced tomatoes, grilled zucchini, bell pepper, white onions and chilli pesto',
              qty: 0,
            },
            {
              name: 'Root vegetable burger',
              price: 695,
              ingredients: 'Multi grain bun, tomatoes, pickled gherkins, lettuce and spicy garlic sauce',
              qty: 0,
            },
            {
              name: 'Free range chicken burger',
              price: 750,
              // tslint:disable-next-line: max-line-length
              ingredients: 'Toasted sesame bun, grilled chicken patty, fried egg, melted cheese, pickled gherkins, lettuce, tomatoes and spicy garlic sauce',
              qty: 0,
            },
            {
              name: 'Hamburger',
              price: 795,
              ingredients: 'Ciabatta bread, roasted chicken salad, matured cheddar cheese',
              qty: 0,
            },
          ],
        },
      ],
    },
    {
      headName: 'Oriental Selections',
      headEl: [
        {
          categoryName: 'Appetizers',
          items: [
            {
              name: 'Chilly chicken dry',
              price: 850,
              qty: 0,
              ingredients: 'Wok fried diced chicken with home-made chili sauce, bell pepper and spring onions',
            },
            {
              name: 'Crispy fried chicken wings',
              price: 795,
              ingredients: 'Spicy fried chicken wings with sweet chili ',
              qty: 0,
            },
            {
              name: 'Prawn salt and pepper',
              price: 1195,
              ingredients: 'Crispy fried tiger prawns tossed with peppers, spring onions and smoked salt',
              qty: 0,
            },
            {
              name: 'Honey chili bean fish',
              price: 550,
              ingredients:
                'Sliced fish tossed with fresh chilies, fermented black bean',
              qty: 0,
            },
            {
              name: 'Zenan Spring rolls',
              price: 650,
              ingredients:
                'Vegetables and beans sprout fried rolls served with pickled chili sauce',
              qty: 0,
            },
            {
              name: 'Crispy fried tofu',
              price: 695,
              ingredients: 'Thai style deep fried tofu tossed in hot basil sauce',
              qty: 0,
            },
          ],
        },

        {
          categoryName: 'Main Course',
          items: [
            {
              name: 'Kung pao chicken',
              price: 850,
              ingredients: 'Stir fried diced chicken with peanuts and chilies',
              qty: 0,
            },
            {
              name: 'Szechuan chicken',
              price: 850,
              ingredients: 'Diced chicken tossed in spicy hot and sour Szechuansauce and smoked Szechuan Pepper oil',
              qty: 0,
            },
            {
              name: 'Wok Fried Lamb',
              price: 995,
              ingredients: 'Sliced lamb tossed with chili, Black bean and spring onion',
              qty: 0,
            },
          ],
        }
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
      item.headEl.filter((menu) => {
        menu.items.filter((menuItem) => {
          if (menuItem.qty !== 0) {
            cartItems.push(menuItem);
          }
        });
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
