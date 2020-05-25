import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { CartComponent } from 'src/app/hotel/cart/cart.component';
import { HotelApiService } from 'src/app/hotel/hotel-api.service';
import { ItemAddOnComponent } from './item-add-on/item-add-on.component';

@Component({
  selector: 'app-ird-menu',
  templateUrl: './ird-menu.page.html',
  styleUrls: ['./ird-menu.page.scss'],
})
export class IrdMenuPage implements OnInit {
  itemQty = 0;
  isIos: boolean;
  menuItemsApi: any = [];
  selectedItems: any[] = [];

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

  constructor(
    private modalCtrl: ModalController,
    private platform: Platform,
    private hotelApi: HotelApiService
  ) {}

  ngOnInit() {
    this.isIos = this.platform.is('ios');
    console.log(this.isIos);
    this.hotelApi.getMenus('N1loWW9Sc3JKbjJUMEZNdmpERGVrM3N6b3N5ZjN3aWZCTFlHRjlGZFFVZz0=').subscribe(
      (resp) => {
        this.menuItemsApi = resp.body.data;
        this.menuItemsApi.categories.filter(category => {
          category.sub_categories.filter(subCategory => {
            let add_ons: any;
            add_ons = subCategory.items.map((item) => {
              let o = Object.assign({}, item);
              o.addons = [];
              return o;
            });
            subCategory.items = add_ons;
          });
          if (category.without_sub_category_items.length !== 0) {
            let add_ons: any;
            add_ons = category.without_sub_category_items.map(item => {
              let o = Object.assign({}, item);
              o.addons = [];
              return o;
            });
            category.without_sub_category_items = add_ons;
          }
        });
        console.log(this.menuItemsApi);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addItemInitial(menuItem) {
    if (menuItem.sub_addons.length !== 0) {
      menuItem.count += 1;
      menuItem.sub_addons.filter(item => {
        if (item.type === 'single_select') {
          let add_ons: any;
          add_ons = item.addons.map((el) => {
            let o = Object.assign({}, el);
            o.selected = null;
            return o;
          });
          item.addons = add_ons;
        } else if (item.type === 'multi_select') {
          let add_ons: any;
          add_ons = item.addons.map((el) => {
            let o = Object.assign({}, el);
            o.isSelected = false;
            return o;
          });
          item.addons = add_ons;
        }
      });
      this.modalCtrl.create({
        component: ItemAddOnComponent,
        componentProps: {
          itemAddon: menuItem
        },
        backdropDismiss: false,
        cssClass: 'my-custom-modal-css'
      }).then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(dismissEl => {
          if (dismissEl.data === undefined) {
            menuItem.count = 0;
            return false;
          }
          if (dismissEl.data.dismissed === 'close-btn') {
            this.itemQty += dismissEl.data.totalQty;
            this.selectedItems.push(dismissEl.data.duplicateItem);
          }
          console.log(menuItem, this.selectedItems);
        });
      });
      console.log(this.selectedItems);
      return false;
    }
    menuItem.count += 1;
    this.selectedItems.push(menuItem);
    this.itemQty += 1;
    console.log(menuItem.count + 1, menuItem, this.itemQty, this.selectedItems);
  }

  incrementQty(menuItem) {
    if (menuItem.addons.length !== 0) {
      menuItem.count += 1;
      menuItem.addons = [];
      menuItem.sub_addons.filter((item) => {
              if (item.type === 'single_select') {
                let add_ons: any;
                add_ons = item.addons.map((el) => {
                  let o = Object.assign({}, el);
                  o.selected = null;
                  return o;
                });
                item.addons = add_ons;
              } else if (item.type === 'multi_select') {
                let add_ons: any;
                add_ons = item.addons.map((el) => {
                  let o = Object.assign({}, el);
                  o.isSelected = false;
                  return o;
                });
                item.addons = add_ons;
              }
            });
      this.modalCtrl
              .create({
                component: ItemAddOnComponent,
                componentProps: {
                  itemAddon: menuItem,
                  isRepeat: true
                },
                backdropDismiss: false,
                cssClass: 'my-custom-modal-css',
              })
              .then((modalEl) => {
                modalEl.present();
                modalEl.onDidDismiss().then((dismissEl) => {
                  if (dismissEl.data === undefined) {
                    menuItem.count -= 1;
                    return false;
                  }
                  if (dismissEl.data.dismissed === 'close-btn') {
                    this.itemQty += dismissEl.data.totalQty;
                    dismissEl.data.duplicateItem.count = 1;
                    this.selectedItems.push(dismissEl.data.duplicateItem);
                    console.log(this.selectedItems);
                  }
                  console.log(menuItem);
                });
              });
      return false;
    }
    const selectedIndex = this.selectedItems.indexOf(menuItem);
    this.selectedItems[selectedIndex].count += 1;
    this.selectedItems[selectedIndex].count -= 1;
    menuItem.count += 1;
    this.itemQty += 1;
    console.log(menuItem.count + 1, menuItem, this.itemQty, this.selectedItems);
  }

  // decrements item

  decrementQty(item) {
    if (item.count - 1 < 1) {
      item.count = 0;
      item.addons = [];
      this.itemQty -= 1;
      if (this.itemQty < 1) {
        this.selectedItems = [];
      }
      console.log(item.count, item, this.itemQty, this.selectedItems);
    } else {
      item.count -= 1;
      this.itemQty -= 1;
      this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      console.log(item.count, item, this.itemQty, this.selectedItems);
    }
  }

  reviewOrder() {
    localStorage.removeItem('cart-items');
    const cartItems = [];
    this.menuItemsApi.categories.filter(item => {
      item.sub_categories.filter(item => {
        item.items.filter(item => {
          if (item.count !== 0) {
            cartItems.push(item);
          }
        });
      });
      item.without_sub_category_items.filter(item => {
        if (item.count !== 0) {
          cartItems.push(item);
        }
      });
    });
    console.log(cartItems);
    localStorage.setItem('cart-items', JSON.stringify(cartItems));

    this.modalCtrl.create({
      component: CartComponent,
      componentProps: {
        cartItems: this.selectedItems,
        itemQty: this.itemQty
      }
    }).then(modalEl => {
      modalEl.present();
      modalEl.onDidDismiss().then(dismissEl => {
        if (dismissEl.data.dismissed === 'closed') {
            this.itemQty = dismissEl.data.totalQty;
          }
      });
    });
  }
}
