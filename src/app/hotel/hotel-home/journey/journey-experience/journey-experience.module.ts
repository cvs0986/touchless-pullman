import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneyExperiencePageRoutingModule } from './journey-experience-routing.module';

import { JourneyExperiencePage } from './journey-experience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyExperiencePageRoutingModule
  ],
  declarations: [JourneyExperiencePage]
})
export class JourneyExperiencePageModule {}
