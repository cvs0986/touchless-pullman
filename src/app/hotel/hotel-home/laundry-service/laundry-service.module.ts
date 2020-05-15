import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaundryServicePageRoutingModule } from './laundry-service-routing.module';

import { LaundryServicePage } from './laundry-service.page';
import { BookLaundryComponent } from './book-laundry/book-laundry.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaundryServicePageRoutingModule
  ],
  declarations: [LaundryServicePage, BookLaundryComponent],
  entryComponents: [BookLaundryComponent]
})
export class LaundryServicePageModule {}
