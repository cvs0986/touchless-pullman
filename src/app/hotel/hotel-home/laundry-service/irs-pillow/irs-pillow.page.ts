import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { PillowMenuReviewComponent } from './pillow-menu-review/pillow-menu-review.component';

@Component({
  selector: 'app-irs-pillow',
  templateUrl: './irs-pillow.page.html',
  styleUrls: ['./irs-pillow.page.scss'],
})
export class IrsPillowPage implements OnInit {
  selectedRequests: any[] = [];
  requestLists: any[] = [
    {
      name: 'SYNTHETIC PILLOW',
      isChecked: false,
      details: 'Offers perfect support for people who sleep on their back or side.'
    },
    {
      name: 'FOAM PILLOW',
      isChecked: false,
      details: 'Adapts perfectly to head and neck; optimal support for people sleeping on their back or side.'
    },
    {
      name: 'LEG PILLOW',
      isChecked: false,
      details: 'Helps refresh legs and improve blood circulation.'
    },
    {
      name: 'SOFT PILLOW',
      isChecked: false,
      details: 'Soft Pillows will envelope your head with soft, silky, cushioning comfort. This indoor/outdoor pillow has 100% polyfill and a polyester protective cover.'
    },
    {
      name: 'NECK PILLOW',
      isChecked: false,
      details: 'Offers pressure distribution and head, neck and shoulder support for a good night’s rest.'
    },
    {
      name: 'DOWN PILLOW',
      isChecked: false,
      details: 'Down pillows are made from the back, wing and chest feathers of geese. Down pillows mould to the shape of your head, regardless of your sleeping position.'
    },
    {
      name: 'FEATHER PILLOW',
      isChecked: false,
      details: 'Feather pillow has 100% duck feathers. Feather Pillow adds a little flair and comfort to the body and smoother feel.'
    },
    {
      name: 'COTTON PILLOW',
      isChecked: false,
      details: 'Hard Pillow is made from the finest of cotton fiber. Hard Pillows are cool and moisture absorbing for comfortable sleep.'
    }
  ];

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  requestChange(request) {
    if (request.isChecked) {
      this.selectedRequests.push(request);
      console.log(this.selectedRequests);
    } else if (!request.isChecked) {
      this.selectedRequests.splice(this.selectedRequests.indexOf(request), 1);
      console.log(this.selectedRequests);
    }

    if (this.selectedRequests.length > 2) {
      request.isChecked = false;
      this.toastCtrl.create({
        message: 'Can not select more than 2!',
        duration: 1500,
        color: 'warning',
        position: 'top'
      }).then(toastEl => {
        toastEl.present();
      });
    }
    console.log(request, this.selectedRequests);
  }

  reviewRequest() {
    if (this.selectedRequests.length === 0) {
      this.toastCtrl.create({
        message: 'Please select any to continue!',
        color: 'warning',
        duration: 1500,
        position: 'top'
      }).then(toastEl => {
        toastEl.present();
      });
      return false;
    }

    if (this.selectedRequests.length !== 0) {
      this.modalCtrl.create({
      component: PillowMenuReviewComponent,
      componentProps: {
        placedRequest: this.selectedRequests,
      }
      }).then(modalEl => {
        modalEl.present();
        modalEl.onDidDismiss().then(dismissEl => {
        if (dismissEl.data.dismissed === 'on-success') {
          this.requestLists.filter(item => {
            item.isChecked = false;
          });
        }
      });
      });
      return false;
    }
  }

}
