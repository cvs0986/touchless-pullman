import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IrsInRoomRefreshmentPage } from './irs-in-room-refreshment.page';

const routes: Routes = [
  {
    path: '',
    component: IrsInRoomRefreshmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrsInRoomRefreshmentPageRoutingModule {}
