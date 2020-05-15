import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaExplorePage } from './spa-explore.page';

const routes: Routes = [
  {
    path: '',
    component: SpaExplorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaExplorePageRoutingModule {}
