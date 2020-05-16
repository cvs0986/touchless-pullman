import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrsPillowPage } from './irs-pillow.page';

const routes: Routes = [
  {
    path: '',
    component: IrsPillowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrsPillowPageRoutingModule {}
