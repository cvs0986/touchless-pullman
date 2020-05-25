import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IrdMenuPageRoutingModule } from './ird-menu-routing.module';

import { IrdMenuPage } from './ird-menu.page';
import { ItemAddOnComponent } from './item-add-on/item-add-on.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrdMenuPageRoutingModule
  ],
  declarations: [IrdMenuPage, ItemAddOnComponent],
  entryComponents: [ItemAddOnComponent]
})
export class IrdMenuPageModule {}
