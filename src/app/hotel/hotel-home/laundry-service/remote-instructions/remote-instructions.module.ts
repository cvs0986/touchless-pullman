import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoteInstructionsPageRoutingModule } from './remote-instructions-routing.module';

import { RemoteInstructionsPage } from './remote-instructions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoteInstructionsPageRoutingModule
  ],
  declarations: [RemoteInstructionsPage]
})
export class RemoteInstructionsPageModule {}
