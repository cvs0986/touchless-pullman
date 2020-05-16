import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.scss'],
})
export class JourneyPage implements OnInit {
  navigationTile: any[] = [
    {
      header: 'Welcome',
      description: '',
      link: '/hotel/tabs/hotel-home/journey/journey-welcome'
    },
    {
      header: 'F&B',
      description: '',
      link: '/hotel/tabs/hotel-home/journey/fb'
    },
    {
      header: 'Room',
      description: '',
      link: '/hotel/tabs/hotel-home/journey/room'
    },
    {
      header: 'Bathroom',
      description: '',
      link: '/hotel/tabs/hotel-home/journey/bathroom'
    },
    {
      header: 'Public Area',
      description: '',
      link: '/hotel/tabs/hotel-home/journey/public-area'
    },
    {
      header: 'Well Being',
      description: '',
      link: '/hotel/tabs/hotel-home/journey/well-being'
    },
    {
      header: 'Swimming Pool',
      description: '',
      link: '/hotel/tabs/hotel-home/journey/swimming-pool'
    },
    {
      header: 'Meetings',
      description: '',
      link: '/hotel/tabs/hotel-home/journey/meetings'
    },
    {
      header: 'Connectivity',
      description: '',
      link: '/hotel/tabs/hotel-home/journey/connectivity'
    },
    {
      header: 'Point Of Intrest',
      description: '',
      link: '/hotel/tabs/hotel-home/journey/poi'
    },
    {
      header: 'Transportation',
      description: '',
      link: '/hotel/tabs/hotel-home/journey/transportation'
    },
  ];

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
