import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoteInstructionsPage } from './remote-instructions.page';

const routes: Routes = [
  {
    path: '',
    component: RemoteInstructionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoteInstructionsPageRoutingModule {}
