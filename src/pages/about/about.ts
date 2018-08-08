import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';
import { AppVersion } from '@ionic-native/app-version';
import { OpenUrlProvider } from '../../providers/open-url/open-url';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [OpenUrlProvider]
})
export class AboutPage {
  userData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public githubProvider: GithubProvider,
    private appVersion: AppVersion,
    public openUrlProvider: OpenUrlProvider
  ) {
    this.getUserData();
    this.appVersion.getAppName();
    this.appVersion.getPackageName();
    this.appVersion.getVersionCode();
    this.appVersion.getVersionNumber();
  }

  getUserData() {
    this.githubProvider.getUserData('skempin').then(data => {
      this.userData = data;
    });
  }

  openURL(url: string, label: string) {
    this.openUrlProvider.openPage(url, label);
  }

}
