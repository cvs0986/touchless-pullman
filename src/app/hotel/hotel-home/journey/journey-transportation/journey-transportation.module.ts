import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneyTransportationPageRoutingModule } from './journey-transportation-routing.module';

import { JourneyTransportationPage } from './journey-transportation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyTransportationPageRoutingModule
  ],
  declarations: [JourneyTransportationPage]
})
export class JourneyTransportationPageModule {}
