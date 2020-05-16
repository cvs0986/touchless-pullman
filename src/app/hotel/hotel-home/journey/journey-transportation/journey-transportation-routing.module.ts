import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyTransportationPage } from './journey-transportation.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyTransportationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyTransportationPageRoutingModule {}
