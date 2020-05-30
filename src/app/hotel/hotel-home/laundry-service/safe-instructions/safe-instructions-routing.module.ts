import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SafeInstructionsPage } from './safe-instructions.page';

const routes: Routes = [
  {
    path: '',
    component: SafeInstructionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SafeInstructionsPageRoutingModule {}
