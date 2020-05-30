import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelPageRoutingModule } from './hotel-routing.module';

import { HotelPage } from './hotel.page';
import { CartComponent } from './cart/cart.component';
import { MinibarCartReviewComponent } from './hotel-home/nourishment/refreshment-menu/minibar-cart-review/minibar-cart-review.component';
import { StaticCartComponent } from './static-cart/static-cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelPageRoutingModule
  ],
  declarations: [HotelPage, CartComponent, MinibarCartReviewComponent, StaticCartComponent],
  entryComponents: [CartComponent, MinibarCartReviewComponent, StaticCartComponent]
})
export class HotelPageModule {}
