import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spa',
  templateUrl: './spa.page.html',
  styleUrls: ['./spa.page.scss'],
})
export class SpaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  spaNavigate(e) {
    if (e === 'explore') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/spa/spa-explore');
      return false;
    }
    if (e === 'spa-menu') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/spa/spa-menu');
      return false;
    }
    if (e === 'etiq') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/spa/spa-etiq');
      return false;
    }
  }

}
