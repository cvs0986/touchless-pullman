import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyWellBeingPage } from './journey-well-being.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyWellBeingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyWellBeingPageRoutingModule {}
