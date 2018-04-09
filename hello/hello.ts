
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the HelloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hello',
  templateUrl: 'hello.html',
})
export class HelloPage {
  
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
}