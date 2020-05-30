import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccorLivePage } from './accor-live.page';

const routes: Routes = [
  {
    path: '',
    component: AccorLivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccorLivePageRoutingModule {}
