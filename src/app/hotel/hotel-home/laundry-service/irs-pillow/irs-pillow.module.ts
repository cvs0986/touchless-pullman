import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrsPillowPageRoutingModule } from './irs-pillow-routing.module';

import { IrsPillowPage } from './irs-pillow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrsPillowPageRoutingModule
  ],
  declarations: [IrsPillowPage]
})
export class IrsPillowPageModule {}
