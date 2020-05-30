import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreDiningVenuesPageRoutingModule } from './explore-dining-venues-routing.module';

import { ExploreDiningVenuesPage } from './explore-dining-venues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreDiningVenuesPageRoutingModule
  ],
  declarations: [ExploreDiningVenuesPage]
})
export class ExploreDiningVenuesPageModule {}
