import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpaPage } from './spa.page';

const routes: Routes = [
  {
    path: '',
    component: SpaPage
  },
  {
    path: 'spa-explore',
    loadChildren: () => import('./spa-explore/spa-explore.module').then( m => m.SpaExplorePageModule)
  },
  {
    path: 'spa-menu',
    loadChildren: () => import('./spa-menu/spa-menu.module').then( m => m.SpaMenuPageModule)
  },
  {
    path: 'spa-etiq',
    loadChildren: () => import('./spa-etiq/spa-etiq.module').then( m => m.SpaEtiqPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaPageRoutingModule {}
