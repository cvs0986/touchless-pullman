import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaEtiqPageRoutingModule } from './spa-etiq-routing.module';

import { SpaEtiqPage } from './spa-etiq.page';
import { KidsCartComponent } from './kids-cart/kids-cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaEtiqPageRoutingModule
  ],
  declarations: [SpaEtiqPage, KidsCartComponent],
  entryComponents: [KidsCartComponent]
})
export class SpaEtiqPageModule {}
