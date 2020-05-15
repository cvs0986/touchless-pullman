import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpaExplorePageRoutingModule } from './spa-explore-routing.module';

import { SpaExplorePage } from './spa-explore.page';
import { SpaExplorePopoverComponent } from './spa-explore-popover/spa-explore-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpaExplorePageRoutingModule
  ],
  declarations: [SpaExplorePage, SpaExplorePopoverComponent],
  entryComponents: [SpaExplorePopoverComponent]
})
export class SpaExplorePageModule {}
