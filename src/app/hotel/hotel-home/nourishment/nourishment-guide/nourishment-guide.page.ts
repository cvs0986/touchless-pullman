import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { GoToComponent } from './go-to/go-to.component';

@Component({
  selector: 'app-nourishment-guide',
  templateUrl: './nourishment-guide.page.html',
  styleUrls: ['./nourishment-guide.page.scss'],
})
export class NourishmentGuidePage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  goTo(e) {
    this.popoverCtrl.create({
      component: GoToComponent,
      translucent: true,
      mode: 'ios',
      event: e
    }).then(popEl => {
      popEl.present();
    })
  }

}
