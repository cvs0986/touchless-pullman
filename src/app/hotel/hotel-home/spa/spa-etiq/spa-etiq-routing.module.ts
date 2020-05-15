import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaEtiqPage } from './spa-etiq.page';

const routes: Routes = [
  {
    path: '',
    component: SpaEtiqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaEtiqPageRoutingModule {}
