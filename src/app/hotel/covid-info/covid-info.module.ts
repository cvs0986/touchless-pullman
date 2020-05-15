import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidInfoPageRoutingModule } from './covid-info-routing.module';

import { CovidInfoPage } from './covid-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovidInfoPageRoutingModule
  ],
  declarations: [CovidInfoPage]
})
export class CovidInfoPageModule {}
