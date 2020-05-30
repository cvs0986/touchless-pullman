import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveBreakfastPage } from './active-breakfast.page';

const routes: Routes = [
  {
    path: '',
    component: ActiveBreakfastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActiveBreakfastPageRoutingModule {}
