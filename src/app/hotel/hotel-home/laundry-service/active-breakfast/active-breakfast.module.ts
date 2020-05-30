import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActiveBreakfastPageRoutingModule } from './active-breakfast-routing.module';

import { ActiveBreakfastPage } from './active-breakfast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActiveBreakfastPageRoutingModule
  ],
  declarations: [ActiveBreakfastPage]
})
export class ActiveBreakfastPageModule {}
