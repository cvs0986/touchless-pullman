import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreOrderBreakfastPageRoutingModule } from './pre-order-breakfast-routing.module';

import { PreOrderBreakfastPage } from './pre-order-breakfast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreOrderBreakfastPageRoutingModule
  ],
  declarations: [PreOrderBreakfastPage]
})
export class PreOrderBreakfastPageModule {}
