import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JourneyHighlightsPageRoutingModule } from './journey-highlights-routing.module';

import { JourneyHighlightsPage } from './journey-highlights.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JourneyHighlightsPageRoutingModule
  ],
  declarations: [JourneyHighlightsPage]
})
export class JourneyHighlightsPageModule {}
