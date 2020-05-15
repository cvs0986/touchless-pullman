import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyHighlightsPage } from './journey-highlights.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyHighlightsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyHighlightsPageRoutingModule {}
