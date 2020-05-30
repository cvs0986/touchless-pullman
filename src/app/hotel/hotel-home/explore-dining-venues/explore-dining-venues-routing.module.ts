import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExploreDiningVenuesPage } from './explore-dining-venues.page';

const routes: Routes = [
  {
    path: '',
    component: ExploreDiningVenuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreDiningVenuesPageRoutingModule {}
