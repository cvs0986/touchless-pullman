import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JourneyMeetingsPage } from './journey-meetings.page';

const routes: Routes = [
  {
    path: '',
    component: JourneyMeetingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JourneyMeetingsPageRoutingModule {}
