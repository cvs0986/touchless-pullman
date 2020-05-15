import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaMenuPage } from './spa-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SpaMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaMenuPageRoutingModule {}
