import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrsInRoomFitnessPage } from './irs-in-room-fitness.page';

const routes: Routes = [
  {
    path: '',
    component: IrsInRoomFitnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrsInRoomFitnessPageRoutingModule {}
