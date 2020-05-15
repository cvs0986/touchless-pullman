import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneyWelcomePageRoutingModule } from './journey-welcome-routing.module';

import { JourneyWelcomePage } from './journey-welcome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyWelcomePageRoutingModule
  ],
  declarations: [JourneyWelcomePage]
})
export class JourneyWelcomePageModule {}
