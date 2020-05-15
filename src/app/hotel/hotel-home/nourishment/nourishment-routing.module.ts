import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NourishmentPage } from './nourishment.page';

const routes: Routes = [
  {
    path: '',
    component: NourishmentPage
  },
  {
    path: 'nourishment-guide',
    loadChildren: () => import('./nourishment-guide/nourishment-guide.module').then( m => m.NourishmentGuidePageModule)
  },
  {
    path: 'ird-menu',
    loadChildren: () => import('./ird-menu/ird-menu.module').then( m => m.IrdMenuPageModule)
  },
  {
    path: 'refreshment-menu',
    loadChildren: () => import('./refreshment-menu/refreshment-menu.module').then( m => m.RefreshmentMenuPageModule)
  },
  {
    path: 'pre-order-breakfast',
    loadChildren: () => import('./pre-order-breakfast/pre-order-breakfast.module').then( m => m.PreOrderBreakfastPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NourishmentPageRoutingModule {}
