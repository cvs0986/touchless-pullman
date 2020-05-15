import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyServicePage } from './journey-service.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyServicePageRoutingModule {}
