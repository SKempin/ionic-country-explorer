// Angular Components
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

// My Appp
import { MyApp } from './app.component';

// Pages
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { MapPage } from '../pages/map/map';
import { AboutPage } from '../pages/about/about';

// Providers
import { CountryDataProvider } from '../providers/rest-countries/rest-countries';
import { UnsplashProvider } from '../providers/unsplash/unsplash';
import { OpenWeatherProvider } from '../providers/open-weather/open-weather';
import { GithubProvider } from '../providers/github/github';
import { NewsProvider } from '../providers/news/news';
import { OpenUrlProvider } from '../providers/open-url/open-url';
import { SocialShareProvider } from '../providers/social-share/social-share';

// Pipes
import { MomentjsPipe } from '../pipes/momentjs/momentjs';
import { NumeralPipe } from '../pipes/numeral/numeral';
import { StringFilterPipe } from '../pipes/string-filter/string-filter';

// Ionic Native Components
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AppVersion } from '@ionic-native/app-version';
import { Network } from '@ionic-native/network';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    DetailsPage,
    MapPage,
    MomentjsPipe,
    NumeralPipe,
    StringFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    DetailsPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    SocialSharing,
    AppVersion,
    Network,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CountryDataProvider,
    UnsplashProvider,
    OpenWeatherProvider,
    GithubProvider,
    NewsProvider,
    OpenUrlProvider,
    SocialShareProvider
  ]
})
export class AppModule { }
