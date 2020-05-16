import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneyConnectivityPageRoutingModule } from './journey-connectivity-routing.module';

import { JourneyConnectivityPage } from './journey-connectivity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyConnectivityPageRoutingModule
  ],
  declarations: [JourneyConnectivityPage]
})
export class JourneyConnectivityPageModule {}
