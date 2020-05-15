import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelHomePageRoutingModule } from './hotel-home-routing.module';

import { HotelHomePage } from './hotel-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelHomePageRoutingModule
  ],
  declarations: [HotelHomePage]
})
export class HotelHomePageModule {}
