import { Injectable } from "@angular/core";
import { SocialSharing } from "@ionic-native/social-sharing";
import { AppVersion } from "@ionic-native/app-version";

// Utilise Ionic Native's social sharing functionality

@Injectable()
export class SocialShareProvider {
  appName: any;
  appURL: string;

  constructor(
    public socialSharing: SocialSharing,
    private appVersion: AppVersion
  ) {}

  regularShare(message: string) {
    // share(message, subject, file, url)
    this.appName = this.appVersion.getAppName();
    this.appURL = "https://github.com/SKempin";
    this.socialSharing.share(message, this.appName, null, this.appURL);
  }
}
