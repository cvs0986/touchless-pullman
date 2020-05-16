import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyPage } from './journey.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyPage
  },
  {
    path: 'journey-welcome',
    loadChildren: () => import('./journey-welcome/journey-welcome.module').then( m => m.JourneyWelcomePageModule)
  },
  {
    path: 'journey-highlights',
    loadChildren: () => import('./journey-highlights/journey-highlights.module').then( m => m.JourneyHighlightsPageModule)
  },
  {
    path: 'journey-service',
    loadChildren: () => import('./journey-service/journey-service.module').then( m => m.JourneyServicePageModule)
  },
  {
    path: 'journey-experience',
    loadChildren: () => import('./journey-experience/journey-experience.module').then( m => m.JourneyExperiencePageModule)
  },
  {
    path: 'journey-public-area',
    loadChildren: () => import('./journey-public-area/journey-public-area.module').then( m => m.JourneyPublicAreaPageModule)
  },
  {
    path: 'journey-well-being',
    loadChildren: () => import('./journey-well-being/journey-well-being.module').then( m => m.JourneyWellBeingPageModule)
  },
  {
    path: 'journey-swimming-pool',
    loadChildren: () => import('./journey-swimming-pool/journey-swimming-pool.module').then( m => m.JourneySwimmingPoolPageModule)
  },
  {
    path: 'journey-meetings',
    loadChildren: () => import('./journey-meetings/journey-meetings.module').then( m => m.JourneyMeetingsPageModule)
  },
  {
    path: 'journey-connectivity',
    loadChildren: () => import('./journey-connectivity/journey-connectivity.module').then( m => m.JourneyConnectivityPageModule)
  },
  {
    path: 'journey-poi',
    loadChildren: () => import('./journey-poi/journey-poi.module').then( m => m.JourneyPoiPageModule)
  },
  {
    path: 'journey-transportation',
    loadChildren: () => import('./journey-transportation/journey-transportation.module').then( m => m.JourneyTransportationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyPageRoutingModule {}
