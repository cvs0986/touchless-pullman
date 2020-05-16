import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneyPoiPageRoutingModule } from './journey-poi-routing.module';

import { JourneyPoiPage } from './journey-poi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyPoiPageRoutingModule
  ],
  declarations: [JourneyPoiPage]
})
export class JourneyPoiPageModule {}
