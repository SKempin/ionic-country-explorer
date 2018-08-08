import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubProvider } from '../providers/github/github';
import { OpenUrlProvider } from '../providers/open-url/open-url';
import { SocialShareProvider } from '../providers/social-share/social-share';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

@Component({
  templateUrl: 'app.html',
  providers: [OpenUrlProvider, SocialShareProvider]

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  userData: any;

  pages: Array<{ title: string; component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public githubProvider: GithubProvider,
    public openUrlProvider: OpenUrlProvider,
    public socialShareProvider: SocialShareProvider


  ) {
    this.initializeApp();
    this.getUserData();
    this.openUrlProvider;
    this.socialShareProvider;

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage }
    ];
  }

  getUserData() {
    this.githubProvider.getUserData('skempin').then(data => {
      this.userData = data;
      // console.log(this.userData);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openURL(url: string, label: string) {
    this.openUrlProvider.openPage(url, label);
  }

}
