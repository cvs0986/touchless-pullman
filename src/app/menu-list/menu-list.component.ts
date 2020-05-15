import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  @Input() menuCategories: any[];
  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {
    console.log(this.menuCategories);
  }

  dismissPopover(category) {
    this.popoverCtrl.dismiss({
      data: category,
      role: 'closed'
    });
  }
}
