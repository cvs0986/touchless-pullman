import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SafeInstructionsPageRoutingModule } from './safe-instructions-routing.module';

import { SafeInstructionsPage } from './safe-instructions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SafeInstructionsPageRoutingModule
  ],
  declarations: [SafeInstructionsPage]
})
export class SafeInstructionsPageModule {}
