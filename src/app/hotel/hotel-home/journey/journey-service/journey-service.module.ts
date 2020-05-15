import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneyServicePageRoutingModule } from './journey-service-routing.module';

import { JourneyServicePage } from './journey-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyServicePageRoutingModule
  ],
  declarations: [JourneyServicePage]
})
export class JourneyServicePageModule {}
