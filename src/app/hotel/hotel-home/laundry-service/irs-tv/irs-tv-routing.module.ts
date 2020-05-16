import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrsTvPage } from './irs-tv.page';

const routes: Routes = [
  {
    path: '',
    component: IrsTvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrsTvPageRoutingModule {}
