import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegxieyiPage } from '../regxieyi/regxieyi';
import { Http,Headers,Jsonp,JsonpModule} from '@angular/http';
import {Observable} from "rxjs";
import "rxjs/Rx";
/**
 * Generated class for the RegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg',
  templateUrl: 'reg.html',
})
export class RegPage {

  constructor(public http:Http,public jsonp:Jsonp,public navCtrl: NavController, public navParams: NavParams) {
  }
  headers=new Headers({'Content-type':'application/x-www.form-urlencoded'});
  name:string;
  pwd:string;
  goLogin(){
      this.jsonp.get('http://datainfo.duapp.com/shopdata/userinfo.php?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data);
        if(JSON.stringify(data)=='1'){
          localStorage.setItem('status','true');
	        localStorage.setItem('userID',this.name);
          localStorage.setItem('password',this.pwd);
          this.navCtrl.setRoot(LoginPage);
        }
      },err=>{
        console.log(err);
      }); 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPage');
  }
  back(){
    this.navCtrl.setRoot(LoginPage);
  }
  goRegxy(){
    this.navCtrl.setRoot(RegxieyiPage);
  }
}
