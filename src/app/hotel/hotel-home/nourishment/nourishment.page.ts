import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nourishment',
  templateUrl: './nourishment.page.html',
  styleUrls: ['./nourishment.page.scss'],
})
export class NourishmentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nourishmentNavigation(e) {
    if (e === 'guide') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment/nourishment-guide');
    }
    if (e === 'ird-menu') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment/ird-menu');
    }
    if (e === 'refreshment-menu') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment/refreshment-menu');
    }
    if (e === 'pre-order') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment/pre-order-breakfast');
    }
  }

}
