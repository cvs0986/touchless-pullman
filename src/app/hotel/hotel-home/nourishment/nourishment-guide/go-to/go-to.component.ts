import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-to',
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.scss'],
})
export class GoToComponent implements OnInit {

  constructor(private popCtrl: PopoverController, private router: Router) { }

  ngOnInit() {}

  dismissPopover(e) {
    if (e === 'ird') {
      this.popCtrl.dismiss();
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment/ird-menu');
      return false;
    }
    if (e === 'refreshment') {
      this.popCtrl.dismiss();
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment/refreshment-menu');
      return false;
    }
    if (e === 'breakfast') {
      this.popCtrl.dismiss();
      this.router.navigateByUrl('/hotel/tabs/hotel-home/nourishment/pre-order-breakfast');
      return false;
    }
  }

}
