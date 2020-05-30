import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrsInRoomRefreshmentPageRoutingModule } from './irs-in-room-refreshment-routing.module';

import { IrsInRoomRefreshmentPage } from './irs-in-room-refreshment.page';
import { MinibarCartReviewComponent } from '../../nourishment/refreshment-menu/minibar-cart-review/minibar-cart-review.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrsInRoomRefreshmentPageRoutingModule
  ],
  declarations: [IrsInRoomRefreshmentPage]
})
export class IrsInRoomRefreshmentPageModule {}
