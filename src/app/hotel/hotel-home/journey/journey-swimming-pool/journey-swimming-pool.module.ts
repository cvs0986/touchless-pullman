import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneySwimmingPoolPageRoutingModule } from './journey-swimming-pool-routing.module';

import { JourneySwimmingPoolPage } from './journey-swimming-pool.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneySwimmingPoolPageRoutingModule
  ],
  declarations: [JourneySwimmingPoolPage]
})
export class JourneySwimmingPoolPageModule {}
