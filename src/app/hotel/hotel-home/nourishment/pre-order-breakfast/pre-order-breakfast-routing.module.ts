import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreOrderBreakfastPage } from './pre-order-breakfast.page';

const routes: Routes = [
  {
    path: '',
    component: PreOrderBreakfastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreOrderBreakfastPageRoutingModule {}
