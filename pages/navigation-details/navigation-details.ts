import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MessPage } from '../mess/mess';
/**
 * Generated class for the NavigationDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigation-details',
  templateUrl: 'navigation-details.html',
})
export class NavigationDetailsPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationDetailsPage');
  }
  goMess(){
    this.navCtrl.setRoot(MessPage);
    // this.navCtrl.push(MessPage);
  }
}
