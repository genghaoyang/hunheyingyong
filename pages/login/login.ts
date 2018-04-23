import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegPage } from '../reg/reg';
import { FindPage } from '../find/find';
import { Http,Headers,Jsonp,JsonpModule} from '@angular/http';
import {Observable} from "rxjs";
import "rxjs/Rx";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage{
  constructor(public http:Http,public jsonp:Jsonp,public navCtrl: NavController, public navParams: NavParams) {
  }
  headers=new Headers({'Content-type':'application/x-www.form-urlencoded'});
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  name:string;
  pwd:string;
  goHome(){
    
      this.jsonp.get('http://datainfo.duapp.com/shopdata/userinfo.php?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data);
        if(data instanceof Object){
          localStorage.setItem('status','true');
	        localStorage.setItem('userID',this.name);
          localStorage.setItem('password',this.pwd);
          this.navCtrl.setRoot(TabsPage);
        }
      },err=>{
        console.log(err);
      }); 
  }
  goReg(){
    this.navCtrl.setRoot(RegPage);
    
  }
  goFind(){
    this.navCtrl.setRoot(FindPage);
  }

}
