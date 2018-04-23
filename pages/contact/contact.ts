import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SendmesPage } from '../sendmes/sendmes'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  gaming: string = "ps";
  gender: string = "f";
  os: string;
  st:string;
  constructor(public navCtrl: NavController) {
  }
  back(){
    this.navCtrl.setRoot(SendmesPage);
  }
}