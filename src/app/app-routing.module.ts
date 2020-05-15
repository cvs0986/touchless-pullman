import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
  },
  {
    path: 'welcome/:hi',
    loadChildren: './welcome/welcome.module#WelcomePageModule',
  },
  {
    path: 'review-order',
    loadChildren: './review-order/review-order.module#ReviewOrderPageModule',
  },
  {
    path: 'confirmation',
    loadChildren: './confirmation/confirmation.module#ConfirmationPageModule',
  },
  {
    path: 'hotel',
    loadChildren: './hotel/hotel.module#HotelPageModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
