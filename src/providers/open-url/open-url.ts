import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

// Utilise Ionic Native's in app browser functionality


@Injectable()
export class OpenUrlProvider {

  constructor(public platform: Platform, private iab: InAppBrowser) {
    this.platform = platform;
  }

  openPage(url: string, label: string): void {
    this.platform.ready().then(() => {
      const browser = this.iab.create(url, '_blank');
      browser.show();
    });
  }

}
