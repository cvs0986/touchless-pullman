import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneyPublicAreaPageRoutingModule } from './journey-public-area-routing.module';

import { JourneyPublicAreaPage } from './journey-public-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyPublicAreaPageRoutingModule
  ],
  declarations: [JourneyPublicAreaPage]
})
export class JourneyPublicAreaPageModule {}
