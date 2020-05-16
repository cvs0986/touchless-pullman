import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyPoiPage } from './journey-poi.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyPoiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyPoiPageRoutingModule {}
