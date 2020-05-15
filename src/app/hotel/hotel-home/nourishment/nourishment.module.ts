import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NourishmentPageRoutingModule } from './nourishment-routing.module';

import { NourishmentPage } from './nourishment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NourishmentPageRoutingModule
  ],
  declarations: [NourishmentPage]
})
export class NourishmentPageModule {}
