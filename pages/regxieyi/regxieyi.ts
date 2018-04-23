import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegPage } from '../reg/reg';
/**
 * Generated class for the RegxieyiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regxieyi',
  templateUrl: 'regxieyi.html',
})
export class RegxieyiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegxieyiPage');
  }
  back(){
    this.navCtrl.setRoot(RegPage);
  }
}
