import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpaCartComponent } from '../spa-cart/spa-cart.component';

@Component({
  selector: 'app-spa-etiq',
  templateUrl: './spa-etiq.page.html',
  styleUrls: ['./spa-etiq.page.scss'],
})
export class SpaEtiqPage implements OnInit {
  spaMenu: any[] = [
    {
      category: 'KID’S SPA CASTLE',
      items: [
        {
          name: 'CINDERELLA MASSAGE',
          time: '45 Minutes',
          price: '3000',
          details:
            'Relaxing massage with a gentle fragrance, for every little princess',
        },
        {
          name: 'SIMBA MASSAGE',
          time: '45 Minutes',
          price: '3000',
          details:
            'Regenerating and relaxing massage for every charming prince',
        },
        {
          name: 'SNOW-WHITE FACIAL TREATMENT',
          time: '30 Minutes',
          price: '2250',
          details:
            'A pure and simple spa facial for your child that will cleanse, tone and hydrate. A quickly facial treatment to inform your children about the importance of deep cleansing of facial skin',
        },
        {
          name: 'CHOCOLATE MANI',
          time: '30 Minutes',
          price: '2250',
          details:
            'Kids’ manicure that includes an invigorating hand and foot massage with polish application',
        },
        {
          name: 'CHOCOLATE PEDI ',
          time: '30 Minutes',
          price: '2250',
          details:
            'Kids’ pedicure that includes an invigorating hand and foot massage with polish application',
        },
        {
          name: 'TINKERBELL PACKAGE ',
          time: '60 Minutes',
          price: '3500',
          details:
            'Strawberry facial | Chocolate manicure | Glittery nail art Tiara from Tinkerbell | Tinkerbell gift (to take home)',
        },
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
