import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.scss'],
})
export class JourneyPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateJourney(e) {
    if (e === 'welcome') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/journey/journey-welcome');
      return false;
    }
    if (e === 'highlights') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/journey/journey-highlights');
      return false;
    }
    if (e === 'ht') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/journey/journey-service');
      return false;
    }
    if (e === 'lc') {
      this.router.navigateByUrl('/hotel/tabs/hotel-home/journey/journey-experience');
      return false;
    }
  }

}
