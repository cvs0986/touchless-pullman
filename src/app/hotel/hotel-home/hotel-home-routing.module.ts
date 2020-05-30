import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelHomePage } from './hotel-home.page';

const routes: Routes = [
  {
    path: '',
    component: HotelHomePage
  },
  {
    path: 'journey',
    loadChildren: () => import('./journey/journey.module').then( m => m.JourneyPageModule)
  },
  {
    path: 'nourishment',
    loadChildren: () => import('./nourishment/nourishment.module').then( m => m.NourishmentPageModule)
  },
  {
    path: 'spa',
    loadChildren: () => import('./spa/spa.module').then( m => m.SpaPageModule)
  },
  {
    path: 'conserve',
    loadChildren: () => import('./conserve/conserve.module').then( m => m.ConservePageModule)
  },
  {
    path: 'tv-guide',
    loadChildren: () => import('./tv-guide/tv-guide.module').then( m => m.TvGuidePageModule)
  },
  {
    path: 'connect',
    loadChildren: () => import('./connect/connect.module').then( m => m.ConnectPageModule)
  },
  {
    path: 'laundry-service',
    loadChildren: () => import('./laundry-service/laundry-service.module').then( m => m.LaundryServicePageModule)
  },
  {
    path: 'meet-play',
    loadChildren: () => import('./meet-play/meet-play.module').then( m => m.MeetPlayPageModule)
  },
  {
    path: 'explore-dining-venues',
    loadChildren: () => import('./explore-dining-venues/explore-dining-venues.module').then( m => m.ExploreDiningVenuesPageModule)
  },
  {
    path: 'accor-live',
    loadChildren: () => import('./accor-live/accor-live.module').then( m => m.AccorLivePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelHomePageRoutingModule {}
