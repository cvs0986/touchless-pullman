import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneySwimmingPoolPage } from './journey-swimming-pool.page';

const routes: Routes = [
  {
    path: '',
    component: JourneySwimmingPoolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneySwimmingPoolPageRoutingModule {}
