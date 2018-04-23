import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessPage } from './mess';

@NgModule({
  declarations: [
    MessPage,
  ],
  imports: [
    IonicPageModule.forChild(MessPage),
  ],
})
export class MessPageModule {}
