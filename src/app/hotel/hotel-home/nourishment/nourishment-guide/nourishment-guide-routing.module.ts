import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NourishmentGuidePage } from './nourishment-guide.page';

const routes: Routes = [
  {
    path: '',
    component: NourishmentGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NourishmentGuidePageRoutingModule {}
