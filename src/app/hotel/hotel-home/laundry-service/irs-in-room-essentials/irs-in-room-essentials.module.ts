import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// import { IrsInRoomEssentialsPageRoutingModule } from './irs-in-room-essentials-routing.module';
import { IrsInRoomEssentialsPageRoutingModule } from './irs-in-room-essentials-routing.module';
import { IrsInRoomEssentialsPage } from './irs-in-room-essentials.page';
import { EssentialsCartComponent } from './essentials-cart/essentials-cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrsInRoomEssentialsPageRoutingModule
  ],
  declarations: [IrsInRoomEssentialsPage, EssentialsCartComponent],
  entryComponents: [EssentialsCartComponent]
})
export class IrsInRoomEssentialsPageModule {}
