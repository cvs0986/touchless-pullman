import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConservePage } from './conserve.page';

const routes: Routes = [
  {
    path: '',
    component: ConservePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConservePageRoutingModule {}
