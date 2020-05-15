import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmationPageRoutingModule } from './confirmation-routing.module';

import { ConfirmationPage } from './confirmation.page';
import { SettleBillCovidComponent } from '../hotel/settle-bill-covid/settle-bill-covid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmationPageRoutingModule
  ],
  declarations: [ConfirmationPage, SettleBillCovidComponent],
  entryComponents: [SettleBillCovidComponent]
})
export class ConfirmationPageModule {}
