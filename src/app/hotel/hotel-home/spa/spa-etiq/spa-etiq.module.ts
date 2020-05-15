import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaEtiqPageRoutingModule } from './spa-etiq-routing.module';

import { SpaEtiqPage } from './spa-etiq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaEtiqPageRoutingModule
  ],
  declarations: [SpaEtiqPage]
})
export class SpaEtiqPageModule {}
