import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaPageRoutingModule } from './spa-routing.module';

import { SpaPage } from './spa.page';
import { SpaCartComponent } from './spa-cart/spa-cart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaPageRoutingModule
  ],
  declarations: [SpaPage, SpaCartComponent],
  entryComponents: [SpaCartComponent]
})
export class SpaPageModule {}
