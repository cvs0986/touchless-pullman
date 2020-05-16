import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyPublicAreaPage } from './journey-public-area.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyPublicAreaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyPublicAreaPageRoutingModule {}
