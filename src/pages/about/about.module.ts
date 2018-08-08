import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { MomentjsPipe } from '../../pipes/momentjs/momentjs';

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    MomentjsPipe
  ],
})
export class AboutPageModule {}
