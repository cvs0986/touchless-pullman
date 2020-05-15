import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvGuidePage } from './tv-guide.page';

const routes: Routes = [
  {
    path: '',
    component: TvGuidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TvGuidePageRoutingModule {}
