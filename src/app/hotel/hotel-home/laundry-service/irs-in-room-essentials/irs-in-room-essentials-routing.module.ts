import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrsInRoomEssentialsPage } from './irs-in-room-essentials.page';

const routes: Routes = [
  {
    path: '',
    component: IrsInRoomEssentialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrsInRoomEssentialsPageRoutingModule {}
