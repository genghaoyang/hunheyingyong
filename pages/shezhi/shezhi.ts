import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the ShezhiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shezhi',
  templateUrl: 'shezhi.html',
})
export class ShezhiPage {

  constructor(public alerCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ShezhiPage');
  }
  back(){
    this.navCtrl.setRoot(AboutPage);
  }
  // if(localStorage.getItem('status')=='true'){
  goLogin(){
    let confirm = this.alerCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            localStorage.removeItem("status");
				    localStorage.removeItem("userID");
            localStorage.removeItem("password");
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    confirm.present()
  }
}
