import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TvGuidePageRoutingModule } from './tv-guide-routing.module';

import { TvGuidePage } from './tv-guide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TvGuidePageRoutingModule
  ],
  declarations: [TvGuidePage]
})
export class TvGuidePageModule {}
