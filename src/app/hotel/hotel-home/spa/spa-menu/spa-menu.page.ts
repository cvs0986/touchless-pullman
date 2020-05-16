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
      category: 'SIGNATURE THERAPIES',
      img: '../../../../../assets/spa-signature.png',
      items: [
        {
          name: 'DEEP TISSUE',
          time: '60 Minutes',
          price: '5250',
          details:
            'A deep oil-based massage to ease muscle tension and reawaken your senses. This customized massage uses deep, deliberate strokes to separate and lengthen your muscle fibers and is a great choice for those suffering from muscular tension and spasms.',
        },
        {
          name: 'AROMA THERAPY',
          time: '60 Minutes',
          price: '5000',
          details:
            'Experience a personal and customized approach to therapeutic bodywork with our aroma atherapy. Allow us to stimulate your blood circulation, soothe aches and pains and promote a sense of balance and relaxation.',
        },
        {
          name: 'BALINESE',
          time: '90 Minutes',
          price: '6000',
          details:
            'This traditional Balinese massage reawakens the senses and induces a complete state of calm, combining acupressure and skin rolling with firm but smooth massage strokes',
        },
        {
          name: 'TRADITIONAL THAI MASSAGE',
          time: '90 Minutes',
          price: '6750',
          details:
            'Developed by Buddha’s physician more than 2,500 years ago, the traditional Thai massage promotes a healing process and assures a feeling of sublime relaxation. A dry massage, this technique includes passive stretching and the gentle application of pressure along energy lines.',
        },
        {
          name: 'HOT STONE MASSAGE ',
          time: '90 Minutes',
          price: '6750',
          details:
            'The treatment includes hot basalt stones to generate heat and draw out tightness. The stones are an extension of the therapist’s hands as they glide over the body allowing the benefits tobe felt at a deeper level.',
        },
      ],
    },
    {
      category: 'MASSAGE THERAPY',
      img: '../../../../../assets/spa-massag.png',
      items: [
        {
          name: 'JET LAG RECOVERY',
          time: '90 Minutes',
          price: '6750',
          details:
            'Adjusting to a different time zone can sometimes mean resetting your internal clock, which is not always simple. This massage is specially designed to relieve the symptoms of fatigue and sluggishness that a long flight induces.',
        },
        {
          name: 'DEEP SLEEP MASSAGE ',
          time: '60 Minutes',
          price: '8000',
          details:
            'Two therapists will work together in a synchronised massage designed to relieve tension from every aching muscle. Increasing levels of oxygen in your blood, decreasing muscle toxins, improving circulation, and toning your muscles.',
        },
        {
          name: 'INDIAN HEAD MASSAGE',
          time: '45 Minutes',
          price: '3750',
          details:
            'This Scalp, neck and shoulder massage brings a unique and traditionally Ayurvedic stress relieving practice to modern world. Relieving tension in your head, neck and shoulders, this massage will stimulate blood flow to leave your body feeling totally relaxed.',
        },
        {
          name: 'FACE MASSAGE ',
          time: '45 Minutes',
          price: '3750',
          details:
            'Indulge in a rejuvenating face massage to improve your facial blood circulation, reduce stress and help strained facial muscles to loosen up.',
        },
        {
          name: 'DE-STRESS BACK ',
          time: '30 Minutes',
          price: '3250',
          details:
            'This one’s to counter balance your stressed back and relieve aches, pains and tension to attain blissful serenity.',
        },
        {
          name: 'FOOT REFLEXOLOGY ',
          time: '45 Minutes',
          price: '3750',
          details:
            'An ancient healing therapy, reflexology includes massaging reflex points of the feet and hands to restore natural energy flow by sending waves of deep relaxation throughout the body.',
        },
      ],
    },
    {
      category: 'INDIAN AYURVEDA BODY TREATMENT',
      img: '../../../../../assets/spa-ayurved-indian-body.png',
      items: [
        {
          name: 'SHIRODHARA',
          time: '90 Minutes',
          price: '7250',
          details:
            'Shirodhara is an Ayurvedic body treatment that dates back to over 5,000 years ago. This ancient therapy involves a stream of warm oil flowing over your forehead and scalp. It brings a deep sense of calmness and relaxation and induces stillness in the mind. “Shiro” in Sanskrit means “head,” and “dara” means “flow”.',
        },
        {
          name: 'ABHYANGAM',
          time: '90 Minutes',
          price: '7000',
          details:
            'Abhyangam massage reduces the signs of aging, relieves fatigue, induces sleep and strengthens the skin and the immune system.',
        },
        {
          name: 'PODIKIZHI (Spice Bundle)',
          time: '90 Minutes',
          price: '7000',
          details:
            'Podikizhi is a method of therapeutic sweating or fomentation where the body is thoroughly massaged with cotton bags containing herbal ingredients in powdered form and made into poultice, this treatment improves the circulation, movements of joints, effective in releasing a trapped nerves, reduce swelling for those suffering from rheumatoid arthritis, cervical spondylosis, frozen shoulder, osteoarthritis, tennis elbow, back pain and sciatica.',
        },
      ],
    },
    {
      category: 'INDIAN AYURVEDA SKIN TREATMENT',
      img: '../../../../../assets/spa-ayurveda-indian-skin.png',
      items: [
        {
          name: 'ROSE & SANDALWOOD FACIAL',
          time: '60 Minutes',
          price: '6250',
          details:
            'Ayurveda immersive experience to truly radiate & transform your skin to a healthy hydrated smooth texture. The treatment starts with cleansing with Amrit Ras Cleanser & Ubtan to exfoliate all dead cells. The skin is firm, detoxed & deeply cleansed with gentle dropping of Shrikamya, the beauty oil based of Harshringar flowers, for a deep tissue firming with Ayurveda massage tool ‘Kansa Vataki’. This is followed by hydrating massage by Roses & Sandalwood based cream. Finally, the pores are sealed with pure Sandalwood cream masque. A unique treatment to recharge & renew skin with deep relaxation.',
        },
        {
          name: 'TURMERIC & SAFFRON FACIAL',
          time: '90 Minutes',
          price: '6250',
          details:
            'Skin restorative treatment for a rejuvenated glowing & a brightened complexion. A truly unique experience to recharge & renew skin with deep relaxation. The treatment involves cleansing with pure papaya & yoghurt based cleanser & ubtan to exfoliate dead cells. Shrikamya Beauty oil is dropped on face and massaged with Ayurvedic massage tool, ‘Kansa Vataki’ for a deep tissue detox for a clarified skin.Turmeric & saffron cream, enriched with skin illuminating herbs is massaged to bring in the lost glow. Finally, the pores are closed with Turmeric & Saffron masque',
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
