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
  },
  {
    path: 'irs-in-room-fitness',
    loadChildren: () => import('./irs-in-room-fitness/irs-in-room-fitness.module').then( m => m.IrsInRoomFitnessPageModule)
  },
  {
    path: 'irs-in-room-essentials',
    loadChildren: () => import('./irs-in-room-essentials/irs-in-room-essentials.module').then( m => m.IrsInRoomEssentialsPageModule)
  },
  {
    path: 'irs-in-room-refreshment',
    loadChildren: () => import('./irs-in-room-refreshment/irs-in-room-refreshment.module').then( m => m.IrsInRoomRefreshmentPageModule)
  },
  {
    path: 'safe-instructions',
    loadChildren: () => import('./safe-instructions/safe-instructions.module').then( m => m.SafeInstructionsPageModule)
  },
  {
    path: 'remote-instructions',
    loadChildren: () => import('./remote-instructions/remote-instructions.module').then( m => m.RemoteInstructionsPageModule)
  },
  {
    path: 'active-breakfast',
    loadChildren: () => import('./active-breakfast/active-breakfast.module').then( m => m.ActiveBreakfastPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaundryServicePageRoutingModule {}
