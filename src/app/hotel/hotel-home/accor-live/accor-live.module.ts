import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccorLivePageRoutingModule } from './accor-live-routing.module';

import { AccorLivePage } from './accor-live.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccorLivePageRoutingModule
  ],
  declarations: [AccorLivePage]
})
export class AccorLivePageModule {}
