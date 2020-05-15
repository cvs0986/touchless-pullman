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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyPageRoutingModule {}
