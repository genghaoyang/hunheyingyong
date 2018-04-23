import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendmesPage } from './sendmes';

@NgModule({
  declarations: [
    SendmesPage,
  ],
  imports: [
    IonicPageModule.forChild(SendmesPage),
  ],
})
export class SendmesPageModule {}
