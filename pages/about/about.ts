import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { ShezhiPage } from '../shezhi/shezhi';
import { AlertController } from 'ionic-angular';
import { NavigationDetailsPage } from '../navigation-details/navigation-details';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController,public http:Http,public alertCtrl: AlertController,public navParams: NavParams) {

  }
  goShezhi(){
    this.navCtrl.setRoot(ShezhiPage);
  }
}
