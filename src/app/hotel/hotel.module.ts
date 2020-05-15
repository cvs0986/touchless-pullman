import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelPageRoutingModule } from './hotel-routing.module';

import { HotelPage } from './hotel.page';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelPageRoutingModule
  ],
  declarations: [HotelPage, CartComponent],
  entryComponents: [CartComponent]
})
export class HotelPageModule {}
