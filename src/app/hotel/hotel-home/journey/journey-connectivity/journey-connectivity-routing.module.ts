import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyConnectivityPage } from './journey-connectivity.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyConnectivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyConnectivityPageRoutingModule {}
