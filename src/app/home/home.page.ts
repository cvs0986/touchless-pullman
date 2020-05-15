import { Component, ViewChild, OnInit } from '@angular/core';
import { IonInfiniteScroll, PopoverController, IonContent } from '@ionic/angular';
import { MenuListComponent } from '../menu-list/menu-list.component';
import { Router } from '@angular/router';
import { OrdersItemService } from '../orders-item.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // @ViewChild('IonInfiniteScroll', { static: true })
  // infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, {static: true}) content: IonContent;
  hotelID;
  itemQty = 0;

  hotelDetails;
  hotelName;
  currency;

  showMenus = false;

  showSkelton = true;
  showToggle = false;

  menuItems: any[];
  menuCategories: any[];

  constructor(
    private popOverCtrl: PopoverController,
    private router: Router,
    private orderItemsService: OrdersItemService,
    private api: ApiService
  ) {}

  ngOnInit(): void {
    // const hotelId = this.orderItemsService.hotelId;
    // console.log(this.orderItemsService.hotelId, hotelId);

    this.hotelID = localStorage.getItem('hi');

    const hotelInfo = localStorage.getItem('hotelInfo');
    const parsedHotel = JSON.parse(hotelInfo);
    this.hotelDetails = parsedHotel.details;
    this.hotelName = parsedHotel.hotel_name;
    this.currency = parsedHotel.currency;
    console.log(parsedHotel, this.hotelDetails);

    this.api.getCategory(this.hotelID).subscribe(
      (resp) => {
        console.log(resp);
        this.menuCategories = resp.body.data;
      },
      (error) => {
        console.log(error);
      }
    );

    this.api.getMenus(this.hotelID).subscribe(
      (resp) => {
        console.log(resp);
        if (resp.body.success == 1) {
          this.menuItems = resp.body.data;
          this.showSkelton = false;
          this.showToggle = true;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // ionViewDidLeave() {
  //   this.itemQty = 0;
  //   this.api.getMenus(this.hotelID).subscribe(
  //     (resp) => {
  //       console.log(resp, 'didLoad');
  //       this.menuItems = resp.body.data;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  parseJson(json) {
    return JSON.parse(json);
  }

  getVegItems(e) {
    if (e.detail.checked === true) {
      this.showSkelton = true;
      this.api.getMenusByType(this.hotelID, 'veg').subscribe(
        (resp) => {
          console.log(resp);
          this.menuItems = resp.body.data;
          this.showSkelton = false;
        },
        (error) => {
          console.log(error);
          this.showSkelton = false;
        }
      );
      return false;
    }
    if (e.detail.checked === false) {
      this.showSkelton = true;
      this.api.getMenus(this.hotelID).subscribe(
        (resp) => {
          this.menuItems = resp.body.data;
          this.showSkelton = false;
        },
        (error) => {
          console.log(error);
          this.showSkelton = false;
        }
      );
    }
  }

  showMenusCategory(ev) {
    this.popOverCtrl
      .create({
        component: MenuListComponent,
        componentProps: {
          menuCategories: this.menuCategories,
        },
        event: ev,
        translucent: true,
        mode: 'ios',
      })
      .then((popoverEl) => {
        popoverEl.present();
        popoverEl.onDidDismiss().then((dismissEl) => {
          const data = dismissEl.data;
          if (dismissEl.data.role === 'closed') {
            const titleELe = document.getElementById(data.data.menu_category_id);
            this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
            console.log(data.data.menu_category_id, titleELe);
          }
          console.log(dismissEl.data);
        });
      });
  }

  toggleMenus(i) {
    console.log(i);
    this.showMenus = !this.showMenus;
  }

  addItemInitial(menuItem) {
    menuItem.count += 1;
    this.itemQty += 1;
    console.log(menuItem.count + 1, menuItem, this.itemQty, this.menuItems);
  }

  incrementQty(item) {
    item.count += 1;
    this.itemQty += 1;
    console.log(item.count + 1, item, this.itemQty);
  }

  // decrements item

  decrementQty(item) {
    if (item.count - 1 < 1) {
      item.count = 0;
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
    } else {
      item.count -= 1;
      this.itemQty -= 1;
      console.log(item.count, item, this.itemQty);
    }
  }

  reviewOrder() {
    this.orderItemsService.ordersItems = [];
    this.menuItems.filter((item) => {
      item.items.filter((menu) => {
        if (menu.count !== 0) {
          this.orderItemsService.ordersItems.push(menu);
        }
      });
    });
    console.log(this.orderItemsService.ordersItems);
    this.router.navigateByUrl('/review-order');
  }

  // loadData(event) {
  //   setTimeout(() => {
  //     console.log('Done');
  //     event.target.complete();

  //     // App logic to determine if all data is loaded
  //     // and disable the infinite scroll
  //     if (this.menuItems.length == 1) {
  //       event.target.disabled = true;
  //     }
  //   }, 500);
  // }

  // toggleInfiniteScroll() {
  //   this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  // }
}
