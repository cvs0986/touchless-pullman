import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { StaticCartComponent } from 'src/app/hotel/static-cart/static-cart.component';


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
      categoryName: 'Pre-Order Breakfast',
      items: [
        {
          name: 'Grab and Go',
          price: 500,
          qty: 0,
          type: 'veg',
          details: 'Choice of baker’s basket - danish, croissant and muffins,Fresh vegetable and cheese sandwich,Preserved fruit juice of the day,Choice of seasonal fruits freshly cut or whole,Pack of plain or fruit yogurt of the day',
        },
      ]
    },
    {
        categoryName: 'European Breakfast',
        items: [
        {
          name: 'Seasonal Fresh Fruits',
          price: 350,
          qty: 0,
          type: 'veg',
          details: 'Assortment of freshly cut seasonal pick',
        },
        {
          name: 'Fresh Fruits Juice And Our Signature Blends',
          price: 350,
          qty: 0,
          type: 'veg',
          details: 'Watermelon, orange or pineapple,Apple, mint and ginger,Beetroot, orange and celery,Carrot, celery and apple',
        },
        {
          name: 'Early Bird Baker’s Basket',
          price: 295,
          qty: 0,
          type: 'non-veg',
          details: 'Danish, croissant and muffins or white, brown or multigrain toast with preserves and butter',
        },
        {
          name: 'Cheese Platter',
          price: 495,
          qty: 0,
          type: 'veg',
          details: 'Chef’s selection of artisanal cheeses served with classic accompaniments',
        },
        {
          name: 'Cereals',
          price: 350,
          qty: 0,
          type: 'veg',
          details: 'Corn flakes, wheat flakes, chocolate flakes, ragi bites, dry muesli with option of full cream, skimmed or soy milk',
        },
        {
          name: 'Bowl Of Hot Porridge',
          price: 350,
          qty: 0,
          type: 'veg',
          details: 'Served plain or choose below,Stewed fruit and toasted nut crunch,Caramelized banana, walnut and choco chip,Cinnamon and brown suga',
        },
        {
          name: 'Two Eggs',
          price: 550,
          qty: 0,
          type: 'non-veg',
          details: 'Poached, fried, boiled or scrambled,Served with choice of white, brown or multigrain toast',
        },
        {
          name: 'Three Eggs',
          price: 575,
          qty: 0,
          type: 'non-veg',
          details: 'Plain, Indian masala, cheddar cheese, choice of ham or bacon,Served with choice of white, brown or multigrain toast',
        },
      ]
    },
    {
        categoryName: 'Signature Specialty',
        items: [
          {
            name: 'Smoked Salmon Scrambled Egg',
            price: 575,
            qty: 0,
            type: 'non-veg',
            details: 'Served with multigrain sourdough toast, arugula, beurre noisette',
          },
          {
            name: 'Classic Egg Benedict',
            price: 575,
            qty: 0,
            type: 'non-veg',
            details: 'Grilled homemade muffin baked with béarnaise smoked salmon or smoked ham',
          },
          {
            name: 'Shakshuka',
            price: 495,
            qty: 0,
            type: 'non-veg',
            details: 'Baked egg, hearty tomato and pepper sauce Served with labneh and chilli flakes',
          },
          {
            name: 'Waffle (served with)',
            price: 495,
            qty: 0,
            type: 'non-veg',
            details: 'Whipped cream, maple syrup and chocolate syrup,Candied fig and salted caramel,Blueberry and lemon curd',
          },
          {
            name: 'Pancake (served with)',
            price: 495,
            qty: 0,
            type: 'non-veg',
            details: 'Whipped cream and maple syrup,Choco chip, blueberry compote, caramelized banana and walnuts',
          },
        ]
    },
    {
        categoryName: 'Regional Breakfast',
        items: [
        {
          name: 'Dosa',
          price: 550,
          qty: 0,
          type: 'veg',
          details: 'Indian rice and lentil crisp,choice of plain, masala, rawa dosa,served with lentil stew and coconut chutney',
        },
        {
          name: 'Idli',
          price: 500,
          qty: 0,
          type: 'veg',
          details: 'Steamed rice cake served with lentil stew and coconut chutney',
        },
        {
          name: 'Masala Uttapam',
          price: 550,
          qty: 0,
          type: 'veg',
          details: 'Fermented rice and lentil pancake with tomato, onion and chilli served with lentil stew and coconut chutney',
        },
        {
          name: 'Upma',
          price: 550,
          qty: 0,
          type: 'veg',
          details: 'Soft semolina pudding with curry leaves, cashew and tempered mustard served with lentil stew and coconut chutney',
        },
        {
          name: 'Poha',
          price: 595,
          qty: 0,
          type: 'veg',
          details: 'Flattened rice tempered with mild spices, peanuts and curry leaves served with tomato chutney and cucumber pachadi',
        },
        {
          name: 'Chettinad Egg Roast',
          price: 550,
          qty: 0,
          type: 'veg',
          details: 'Spicy egg curry accompanied with kallappam',
        },
        {
          name: 'Paratha',
          price: 550,
          qty: 0,
          type: 'veg',
          details: 'SGriddle cooked north Indian whole wheat bread,Choice of stuffing - potato, onion, cauliflower or cottage cheese served with pickle and yogurt',
        },
        {
          name: 'Puri Bhaji',
          price: 495,
          qty: 0,
          type: 'veg',
          details: 'Deep fried north Indian whole wheat bread served with spiced potato curry',
        },
        {
          name: 'Akuri and Ajwaini Paratha',
          price: 550,
          qty: 0,
          type: 'veg',
          details: 'ndian style spicy scrambled egg preparation served with whole wheat flat bread',
        },
      ]
    },
    {
        categoryName: ' SMOOTHIES / SHAKES / LASSI',
        items: [
        {
          name: 'Banana & nutella smoothie',
          price: 275,
          qty: 0,
          type: 'veg',
          details: 'Banana, nutella, ice cream',
        },
        {
          name: 'Strawberry & maple smoothie',
          price: 275,
          qty: 0,
          type: 'veg',
          details: 'Strawberry, maple, yogurt',
        },
        {
          name: 'Maple walnut shake',
          price: 275,
          qty: 0,
          type: 'veg',
          details: 'Vanilla ice cream, maple, walnut',
        },
        {
          name: 'Lassi',
          price: 275,
          qty: 0,
          type: 'veg',
          details: 'Sweet, salted',
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
