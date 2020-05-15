import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NourishmentGuidePageRoutingModule } from './nourishment-guide-routing.module';

import { NourishmentGuidePage } from './nourishment-guide.page';
import { GoToComponent } from './go-to/go-to.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NourishmentGuidePageRoutingModule
  ],
  declarations: [NourishmentGuidePage, GoToComponent],
  entryComponents: [GoToComponent]
})
export class NourishmentGuidePageModule {}
