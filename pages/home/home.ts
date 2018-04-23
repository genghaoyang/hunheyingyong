
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavigationDetailsPage } from '../navigation-details/navigation-details';
import { AboutPage } from '../about/about';
import { SendmesPage } from '../sendmes/sendmes';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  items=[1,2,3];
  search="infor";
  doInfinite(infiniteScroll){
    setTimeout(()=>{
      for(let i=0;i<30;i++){
        this.items.push(this.items.length);
      }
      console.log('end');
      infiniteScroll.complete();
      if(this.items.length>100){
        infiniteScroll.enable(false);
      }
    },500)
  }
  openPage(homePage){
    this.navCtrl.setRoot(SendmesPage);
  }
  openPage1(friendPage){
    this.navCtrl.setRoot(NavigationDetailsPage);
  }
  openPage2(homePage){
    this.navCtrl.setRoot(AboutPage);
  }

}