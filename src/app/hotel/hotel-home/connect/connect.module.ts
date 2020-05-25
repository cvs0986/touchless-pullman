import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectPageRoutingModule } from './connect-routing.module';

import { ConnectPage } from './connect.page';
import { PlaceYourRequestReviewComponent } from './place-your-request-review/place-your-request-review.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectPageRoutingModule
  ],
  declarations: [ConnectPage, PlaceYourRequestReviewComponent],
  entryComponents: [PlaceYourRequestReviewComponent]
})
export class ConnectPageModule {}
