import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConservePageRoutingModule } from './conserve-routing.module';

import { ConservePage } from './conserve.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConservePageRoutingModule
  ],
  declarations: [ConservePage]
})
export class ConservePageModule {}
