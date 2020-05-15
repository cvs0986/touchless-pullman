import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaMenuPageRoutingModule } from './spa-menu-routing.module';

import { SpaMenuPage } from './spa-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaMenuPageRoutingModule
  ],
  declarations: [SpaMenuPage]
})
export class SpaMenuPageModule {}
