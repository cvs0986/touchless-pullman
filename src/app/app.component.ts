import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Plugins } from '@capacitor/core';

const { Device } = Plugins;
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, ActivatedRoute } from '@angular/router';

import {DeviceUUID} from 'device-uuid';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  subscription: Subscription;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.initializeApp();
    const uid = new DeviceUUID().get();
    Device.getInfo().then(deviceInfo => {
      console.log(deviceInfo);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      setTimeout(() => {
        // This hides the address bar:
        window.scrollTo(0, 1);
      }, 0);
    });
  }

  ionViewDidEnter() {
    this.subscription = this.platform.backButton.subscribe(() => {
      console.log('exit');
      if (this.router.url === '/confirmation') {
        // navigator["app"].exitApp();
        this.router.navigateByUrl('/home');
        document.location.reload();
      }
    });
  }

  ionViewWillLeave() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
