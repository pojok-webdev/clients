import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'FFR',
      url: '/clientbycategory/1',
      icon: 'home'
    },
    {
      title: 'Platinum',
      url: '/clientbycategory/2',
      icon: 'list'
    },
    {
      title: 'Gold',
      url: '/clientbycategory/3',
      icon: 'home'
    },
    {
      title: 'Silver',
      url: '/clientbycategory/4',
      icon: 'list'
    },
    {
      title: 'Bronze',
      url: '/clientbycategory/5',
      icon: 'list'
    },
    {
      title: 'Uncategorized',
      url: '/clientbycategory/0',
      icon: 'list'
    },
    {
      title: 'Clients',
      url:'/clients/1',
      icon:'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
