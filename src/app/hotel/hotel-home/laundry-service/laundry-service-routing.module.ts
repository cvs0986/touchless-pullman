import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaundryServicePage } from './laundry-service.page';

const routes: Routes = [
  {
    path: '',
    component: LaundryServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaundryServicePageRoutingModule {}
