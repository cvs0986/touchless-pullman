import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LateNightDiningPageRoutingModule } from './late-night-dining-routing.module';

import { LateNightDiningPage } from './late-night-dining.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LateNightDiningPageRoutingModule
  ],
  declarations: [LateNightDiningPage]
})
export class LateNightDiningPageModule {}
