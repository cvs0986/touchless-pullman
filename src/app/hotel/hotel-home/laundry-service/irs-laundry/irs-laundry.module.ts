import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrsLaundryPageRoutingModule } from './irs-laundry-routing.module';

import { IrsLaundryPage } from './irs-laundry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrsLaundryPageRoutingModule
  ],
  declarations: [IrsLaundryPage]
})
export class IrsLaundryPageModule {}
