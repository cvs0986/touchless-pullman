import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController, Platform } from '@ionic/angular';
import { StaticCartComponent } from 'src/app/hotel/static-cart/static-cart.component';

@Component({
  selector: 'app-nourishment-guide',
  templateUrl: './nourishment-guide.page.html',
  styleUrls: ['./nourishment-guide.page.scss'],
})
export class NourishmentGuidePage implements OnInit {
  itemQty = 0;
  isIos: boolean;

  menuItems: any[] = [
    {
      categoryName: 'BREAKFAST',
      items: [
        {
          name: 'Continental Breakfast',
          price: 550,
          qty: 0,
          type: 'non-veg',
          // tslint:disable-next-line: max-line-length
          details: 'Baker’s basket with preserves and butter with preserves and butter (Contains Egg Chefs special),Freshly squeezed fruit juice (Healthy Balanced), Bowl of seasonal cut fruits (Healthy Balanced),Choice of cereals (Healthy Balanced)',
        },
        {
          name: 'American Breakfast',
          price: 650,
          qty: 0,
          type: 'non-veg',
          // tslint:disable-next-line: max-line-length
          details: 'Baker’s basket with preserves and butter with preserves and butter (Contains Egg),Freshly squeezed fruit juice (Healthy Balanced), Bowl of seasonal cut fruits (Healthy Balanced),Choice of cereals (Healthy Balanced),yogurt of the day  (Healthy Balanced),Masala Omelette ( choice of tomatoes, onion, chilli, peppers, cheese, mushroom, spinach and ham)',
        },
        {
          name: 'Asian Breakfast',
          price: 650,
          qty: 0,
          type: 'non-veg',
          // tslint:disable-next-line: max-line-length
          details: 'Freshly squeezed fruit juice (Healthy Balanced), Bowl of seasonal cut fruits (Healthy Balanced),Steamed buns (Dairy free),Main Asian Dish,egg preparations (Contain Egg),Selection of Hot Beverage,Boiled Egg,Selection of freshly brewed coffee,Selection of freshly brewed tea,Scrambled Egg',
        },
        {
          name: 'Weight Watchers Active Breakfast',
          price: 695,
          qty: 0,
          type: 'non-veg',
          // tslint:disable-next-line: max-line-length
          details: 'Fresh fruits and our signature blends (Healthy Balanced) ( chose any combination from), Bowl of seasonal cut fruits (Healthy Balanced),Watermelon, orange or pineapple,Chia seed oatmeal porridge, topped with toasted almonds and caramelized sliced banana (Gluten free),Egg white preparation of your choice served with garden green salad (contains egg)',
        },
        {
          name: 'South Indian Breakfast',
          price: 650,
          qty: 0,
          type: 'veg',
          // tslint:disable-next-line: max-line-length
          details: 'Freshly squeezed fruit juice (Healthy Balanced),BChoose any one preparation (will be served with lentil stew and coconut chutney),Dosa (Gluten free)  (Dairy free),Uttapam (Gluten free), Steamed idly (Gluten free)  (Dairy free),Panagam - traditional south Indian drink',
        },
      ]
    },
    {
      categoryName: '',
      items: [
        {
          name: 'Indian Breakfast',
          price: 650,
          qty: 0,
          type: 'veg',
          details: 'Freshly squeezed fruit juice (Healthy Balanced),Choose any one preparation (Chef\'s Special), cannellini beans and parmesan cheese,Puri bhaji,Chole kulche,Egg bhurji with ajwaini tawa paratha,vegetable poha (Gluten free)  (Dairy free),kanda poha (Gluten free)  (Dairy free)',
        },
        {
          name: 'ALA CARTE EUROPEAN BREAKFAST',
          price: 350,
          qty: 0,
          type: 'veg',
          details: 'Seasonal Fresh Fruits (Assortment of freshly cut seasonal pick) (Healthy Balanced),pineapple plater,watermelon plater,papaya plater,banana plater,assorted fruit plater,Classic Egg Benedict (Grilled homemade muffin baked with béarnaise smoked ham or smoked salmon) (Contain Egg)', 
        },
        {
          name: 'SIGNATURE SPECIALTY',
          price: 575,
          qty: 0,
          type: 'non-veg',
          details: 'Smoked Salmon Scrambled Egg served with multigrain sour dough toast, arugula, beurre noisette,Shakshuka (Baked egg, hearty tomato and pepper sauce served with Labneh and chilli flakes)  (Contain Egg),', 
        },
      ] 
    },
  ];

  constructor(private modalCtrl: ModalController, private platform: Platform) { }

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
