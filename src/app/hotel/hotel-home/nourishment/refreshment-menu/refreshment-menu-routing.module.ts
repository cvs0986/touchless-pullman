import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RefreshmentMenuPage } from './refreshment-menu.page';

const routes: Routes = [
  {
    path: '',
    component: RefreshmentMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RefreshmentMenuPageRoutingModule {}
