import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-about',
  templateUrl: 'denglu.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public http:Http,public alertCtrl: AlertController,public navParams: NavParams) {

  }
  ionViewDidLoad() {
    console.log('hello');
    console.log(this.navParams.get('name'));
  }
  data=this.navParams.data;

  goReq(){
    this.http.get( 'http://datainfo.duapp.com/shopdata/userinfo.php').subscribe( 
      data=>{
          console.log("success");
          console.log(data.status);
          this.navCtrl.push(HomePage,{name:'首页'});
        },
        err=>{
          console.log('error');
          console.log(err.status);
          this.error();
        })
      // .catch(error=>{
      //     console.log('error');
      //     console.log(error.status);
      //     this.error();
      //  });
  }
    error() {
      let alert = this.alertCtrl.create({
        title: '请求失败',
        subTitle: '请求错误，请重试!',
        buttons: ['OK']
      });
      alert.present();
   };
}
