import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrsInRoomFitnessPageRoutingModule } from './irs-in-room-fitness-routing.module';

import { IrsInRoomFitnessPage } from './irs-in-room-fitness.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrsInRoomFitnessPageRoutingModule
  ],
  declarations: [IrsInRoomFitnessPage]
})
export class IrsInRoomFitnessPageModule {}
