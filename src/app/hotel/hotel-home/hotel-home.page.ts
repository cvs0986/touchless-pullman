import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel-home',
  templateUrl: './hotel-home.page.html',
  styleUrls: ['./hotel-home.page.scss'],
})
export class HotelHomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToService(e) {
    console.log(e);
    if (e === 'journey') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/journey');
      return false;
    }
    if (e === 'nourishment') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment');
      return false;
    }
    if (e === 'spa') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/spa');
      return false;
    }
    if (e === 'conserve') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/conserve');
      return false;
    }
    if (e === 'connect') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/connect');
      return false;
    }
    if (e === 'tv-guide') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/tv-guide');
      return false;
    }
    if (e === 'laundry') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/laundry');
      return false;
    }
  }

}
