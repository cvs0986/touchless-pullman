import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaundryServicePage } from './laundry-service.page';

const routes: Routes = [
  {
    path: '',
    component: LaundryServicePage
  },
  {
    path: 'irs-tv',
    loadChildren: () => import('./irs-tv/irs-tv.module').then( m => m.IrsTvPageModule)
  },
  {
    path: 'irs-pillow',
    loadChildren: () => import('./irs-pillow/irs-pillow.module').then( m => m.IrsPillowPageModule)
  },
  {
    path: 'irs-laundry',
    loadChildren: () => import('./irs-laundry/irs-laundry.module').then( m => m.IrsLaundryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaundryServicePageRoutingModule {}
