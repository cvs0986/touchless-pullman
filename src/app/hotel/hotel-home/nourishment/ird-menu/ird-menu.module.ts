import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrdMenuPageRoutingModule } from './ird-menu-routing.module';

import { IrdMenuPage } from './ird-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrdMenuPageRoutingModule
  ],
  declarations: [IrdMenuPage]
})
export class IrdMenuPageModule {}
