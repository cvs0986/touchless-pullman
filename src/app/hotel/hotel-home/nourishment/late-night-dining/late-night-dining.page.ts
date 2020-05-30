import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { StaticCartComponent } from 'src/app/hotel/static-cart/static-cart.component';

@Component({
  selector: 'app-late-night-dining',
  templateUrl: './late-night-dining.page.html',
  styleUrls: ['./late-night-dining.page.scss'],
})
export class LateNightDiningPage implements OnInit {
  itemQty = 0;
  isIos: boolean;

  menuItems: any[] = [
    {
      categoryName: 'ROOT, LEAF, GRAINS',
      items: [
        {
          name: 'Immune Booster',
          price: 675,
          qty: 0,
          type: 'veg',
          details: 'Garden greens, broccoli, berries, pickled onions, boiled chickpeas, almonds flakes in light citrus dressing',
        },
        {
          name: 'Classic Nicoise',
          price: 795,
          qty: 0,
          type: 'non-veg',
          details: 'Lettuce, olives, red radish, tomatoes, boiled eggs, French beans, baby potatoes and tuna with French mustard dressing',
        },
        {
          name: 'Food Exchange Signature',
          price: 725,
          qty: 0,
          type: 'non-veg',
          details: 'Low fat green apple salad with beet pickled salmon, shaved walnut and micro greens',
        },
        {
          name: 'Caesar Salad',
          price: 725,
          qty: 0,
          type: 'non-veg',
          details: 'Hearts of romaine lettuce, croutons, roasted garlic parmesan dressing, grilled chicken and bacon powder',
        },
        {
          name: 'Mezze Platter',
          price: 595,
          qty: 0,
          type: 'veg',
          details: 'Hummus, baba ganoush, tzatziki, falafel, pickle and freshly baked pita',
        },
      ],
    },
    {
      categoryName: 'SOUP',
      items: [
        {
          name: 'Minestrone',
          price: 495,
          qty: 0,
          type: 'veg',
          details: 'Basil flavoured fresh tomato broth, spring vegetable, cannellini beans and parmesan cheese',
        },
        {
          name: 'Classic French Onion Soup',
          price: 495,
          qty: 0,
          type: 'non-veg',
          details: 'Meat consommé, sautéed onions and gruyere cheese croutons', 
        }]},
        {
        categoryName: 'BURGERS & SANDWICHES',
      items: [
        {
          name: 'Food Exchange Club',
          price: 795,
          qty: 0,
          type: 'non-veg',
          details: '(Grilled chicken, bacon, lettuce, tomato, fried egg choice of multigrain or white bread)(contains pork)',
        },
        {
          name: 'Grilled Chicken and Cheese Sandwich',
          price: 750,
          qty: 0,
          type: 'non-veg',
          details: '(Ciabatta bread, roasted chicken salad, matured cheddar cheese)',
        },
        {
          name: 'Steak Sandwich ',
          price: 795,
          qty: 0,
          type: 'non-veg',
          details: '(Striploin, mushroom, onion and gouda cheese in toasted sour dough bread) ',
        },
        {

          name: 'Grilled Vegetable Sandwich',
          price: 695,
          qty: 0,
          type: 'veg',
          details: '(Sliced tomatoes, grilled zucchini, bell pepper, white onions and chilli pesto)',
        },
        {

          name: 'Root Vegetable Burger',
          price: 695,
          qty: 0,
          type: 'veg',
          details: '(Multigrain bun, tomatoes, pickled gherkins, lettuce and spicy garlic sauce)',
        },
        {

          name: 'Free Range Chicken Burger',
          price: 750,
          qty: 0,
          type: 'non-veg',
          details: '(Toasted sesame bun, grilled chicken patty, fried egg, melted cheese, pickled gherkins, lettuce,tomatoes and spicy garlic sauce)',
        },
        {

          name: 'Ham Burge',
          price: 795,
          qty: 0,
          type: 'non-veg',
          details: '(Toasted sesame bun, tenderloin patty, onion confit, sharp cheddar, choice of bacon)(contains Pork)',
        },
      ]
    },
        {
        categoryName: 'HAND ROLLED THIN CRUST PIZZAS',
      items: [
        {
          name: 'Classic Margarita',
          price: 795,
          qty: 0,
          type: 'veg',
          details: ' (Tomato, fresh mozzarella, basil)',
        },
        {
          name: 'Vegetarian',
          price: 795,
          qty: 0,
          type: 'veg',
          details: '(Sautéed spinach, corn, zucchini, pickled chillies, forest mushroom, olives, tomatoes and basil)',
        },
        {
          name: 'Salami Picante',
          price: 895,
          qty: 0,
          type: 'non-veg',
          details: '(Italian spicy salami, tomatoes, fresh mozzarella, oregano and basil)(Contains pork)',
        },
        {
          name: 'City Pizza',
          price: 895,
          qty: 0,
          type: 'non-veg',
          details: '(Roast chicken, olives, tomatoes, fresh mozzarella, pickled chillies and basil)',
        },
        {
          name: 'Ham Pizza',
          price: 895,
          qty: 0,
          type: 'non-veg',
          details: '(Italian cooked ham, fresh mozzarella, Parmesan, forest mushroom and fresh herbs)(Contains pork)',
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
