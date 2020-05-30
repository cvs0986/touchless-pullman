import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrsLaundryPageRoutingModule } from './irs-laundry-routing.module';

import { IrsLaundryPage } from './irs-laundry.page';
import { LaundryTncComponent } from './laundry-tnc/laundry-tnc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrsLaundryPageRoutingModule
  ],
  declarations: [IrsLaundryPage, LaundryTncComponent],
  entryComponents: [LaundryTncComponent]
})
export class IrsLaundryPageModule {}
