import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetPlayPageRoutingModule } from './meet-play-routing.module';

import { MeetPlayPage } from './meet-play.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetPlayPageRoutingModule
  ],
  declarations: [MeetPlayPage]
})
export class MeetPlayPageModule {}
