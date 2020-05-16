import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrsLaundryPage } from './irs-laundry.page';

const routes: Routes = [
  {
    path: '',
    component: IrsLaundryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrsLaundryPageRoutingModule {}
