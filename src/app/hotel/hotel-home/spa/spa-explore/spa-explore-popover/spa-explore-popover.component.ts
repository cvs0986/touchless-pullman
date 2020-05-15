import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-spa-explore-popover',
  templateUrl: './spa-explore-popover.component.html',
  styleUrls: ['./spa-explore-popover.component.scss'],
})
export class SpaExplorePopoverComponent implements OnInit {
  items: any[] = [
    {name: 'QUAN SIGNATURES', value: 'quan-sign'},
    {name: 'INDIAN TRADITIONAL TREATMENT', value: 'indian-trade'}
  ]
  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}

  dismissPopover(category) {
    this.popoverCtrl.dismiss({
      data: category,
      role: 'closed',
    });
  }
}
