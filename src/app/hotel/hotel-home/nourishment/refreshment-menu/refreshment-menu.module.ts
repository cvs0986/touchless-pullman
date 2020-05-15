import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RefreshmentMenuPageRoutingModule } from './refreshment-menu-routing.module';

import { RefreshmentMenuPage } from './refreshment-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RefreshmentMenuPageRoutingModule
  ],
  declarations: [RefreshmentMenuPage]
})
export class RefreshmentMenuPageModule {}
