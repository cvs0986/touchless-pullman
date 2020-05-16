import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrsTvPageRoutingModule } from './irs-tv-routing.module';

import { IrsTvPage } from './irs-tv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrsTvPageRoutingModule
  ],
  declarations: [IrsTvPage]
})
export class IrsTvPageModule {}
