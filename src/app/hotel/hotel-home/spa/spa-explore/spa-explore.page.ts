import { Component, OnInit, ViewChild } from '@angular/core';
import {
  IonInfiniteScroll,
  PopoverController,
  IonContent,
} from '@ionic/angular';
import { SpaExplorePopoverComponent } from './spa-explore-popover/spa-explore-popover.component';

@Component({
  selector: 'app-spa-explore',
  templateUrl: './spa-explore.page.html',
  styleUrls: ['./spa-explore.page.scss'],
})
export class SpaExplorePage implements OnInit {
  @ViewChild(IonContent, {static: true}) content: IonContent;
  
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  exploreMenu(ev) {
    this.popoverCtrl.create({
      component: SpaExplorePopoverComponent,
      event: ev,
      translucent: true,
      mode: 'ios'
    }).then(popEl => {
      popEl.present();
      popEl.onDidDismiss().then((dismissEl) => {
        const data = dismissEl.data;
        if (dismissEl.data.role === 'closed') {
          const titleELe = document.getElementById(data.data);
          this.content.scrollToPoint(0, titleELe.offsetTop, 1000);
          console.log(data.data.menu_category_id, titleELe);
        }
        console.log(data);
      });
    });
  }

}
