import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpaCartComponent } from '../spa-cart/spa-cart.component';

@Component({
  selector: 'app-spa-menu',
  templateUrl: './spa-menu.page.html',
  styleUrls: ['./spa-menu.page.scss'],
})
export class SpaMenuPage implements OnInit {
  spaMenu: any[] = [
    {
      category: 'QUAN SIGNATURE THERAPIES',
      items: [
        {
          name: 'Ultimate Aromatherapy Experience Message',
          time: '60 Minutes',
          price: '5600',
        },
        {
          name: 'Ultimate Aromatherapy Experience Facial',
          time: '60 Minutes',
          price: '7000',
        },
        {
          name: 'Intensive Deep Tissue ',
          time: '90 Minutes',
          price: '7200',
        },
        {
          name: 'Traditional Thai Massage ',
          time: '90 Minutes',
          price: '7000',
        },
        {
          name: 'Abhyanga Spice Bundle ',
          time: '90 Minutes',
          price: '8300',
        },
        {
          name: 'Back, Neck & Shoulder',
          time: '45 Minutes',
          price: '3750',
        },
        {
          name: 'Hot Stones  ',
          time: '60 Minutes',
          price: '7000',
        },
      ],
    },
    {
      category: 'QUAN HEALING TOUCH',
      items: [
        {
          name: 'Jet Lag Cure ',
          time: '90 Minutes',
          price: '6700',
        },
        {
          name: 'Heavy Leg Reviver ',
          time: '45 Minutes',
          price: '3750',
        },
      ],
    },
    {
      category: 'QUAN RITUALS',
      items: [
        {
          name: 'Sleep Deeply',
          time: '120 Minutes',
          price: '9500',
        },
        {
          name: 'Uplift Your Mood',
          time: '120 Minutes',
          price: '9500',
        },
        {
          name: 'De Stress',
          time: '150 Minutes',
          price: '11000',
        },
        {
          name: 'Essential Quan Spa Rituals',
          time: '150 Minutes',
          price: '11000',
        },
        {
          name: 'Couple Wedding Rituals ',
          time: '180 Minutes',
          price: '20000',
        }
      ],
    },
  ];

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  bookSpa(item) {
    this.modalCtrl
      .create({
        component: SpaCartComponent,
        componentProps: {
          spaItem: item,
        },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
