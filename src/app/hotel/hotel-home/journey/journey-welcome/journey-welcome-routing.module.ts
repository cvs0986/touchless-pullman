import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyWelcomePage } from './journey-welcome.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyWelcomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyWelcomePageRoutingModule {}
