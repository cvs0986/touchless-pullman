import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneyMeetingsPageRoutingModule } from './journey-meetings-routing.module';

import { JourneyMeetingsPage } from './journey-meetings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyMeetingsPageRoutingModule
  ],
  declarations: [JourneyMeetingsPage]
})
export class JourneyMeetingsPageModule {}
