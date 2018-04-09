import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HelloPage } from './hello';
import { HomePage } from '../home/home';
@NgModule({
  declarations: [
    HelloPage,
  ],
  imports: [
    IonicPageModule.forChild(HelloPage),
  ],
})
export class HelloPageModule {}
