import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrsTvPageRoutingModule } from './irs-tv-routing.module';

import { IrsTvPage } from './irs-tv.page';
import { Planet21ReviewOrderComponent } from './planet21-review-order/planet21-review-order.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrsTvPageRoutingModule
  ],
  declarations: [IrsTvPage, Planet21ReviewOrderComponent],
  entryComponents: [Planet21ReviewOrderComponent]
})
export class IrsTvPageModule {}
