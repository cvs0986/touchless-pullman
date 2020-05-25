import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrdersItemService } from '../orders-item.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  showWelcomeImage = false;
  propertyType: number;
  hotelDetails;
  hotelName;
  welcomeMsg;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private orderItemService: OrdersItemService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('hi')) {
        return;
      }
      const hotelId = paramMap.get('hi');
      localStorage.setItem('hi', paramMap.get('hi'));
      this.orderItemService.hotelId = hotelId;
      console.log(hotelId, this.orderItemService.hotelId);

      this.api.getHotelType(hotelId).subscribe(
        (resp) => {
          console.log(resp);
          this.hotelDetails = resp.body.details;
          this.propertyType = resp.body.is_restaurant;
          this.hotelName = resp.body.hotel_name;
          localStorage.setItem('hotelInfo', JSON.stringify(resp.body));
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.redirectToHome();
    }, 1000);
  }

  takeAway() {
    localStorage.removeItem('orderType');
    localStorage.setItem('orderType', 'take-away');
    this.router.navigateByUrl('/home');
  }

  dineIn() {
    localStorage.removeItem('orderType');
    localStorage.setItem('orderType', 'dine-in');
    this.router.navigateByUrl('/home');
  }

  redirectToHome() {
    this.router.navigateByUrl('/hotel/tabs/hotel-home');
  }
}
