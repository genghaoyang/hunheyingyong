import { Component,Optional, OnInit, Input } from '@angular/core';
import {GetdataService} from '../../services/getdata.service';
import { Router } from '@angular/router'; 
import { Http,Headers,Jsonp } from '@angular/http';
import {Observable} from "rxjs";
import "rxjs/Rx";
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  //@Input() list:Array<any>;
  // ngOnInit() {
  //   this.getdata.addData(20);
  //   this.getdata.addData(30);
  //   console.log(this.getdata.list);    
  // }
  constructor(public http:Http,public jsonp:Jsonp,public router:Router,@Optional() public getdata:GetdataService) { 

  }
  // list:number[]=[1,2,3,4,5,6];
  index:number;
  getIndex(i){
   this.index=i;
  }
  headers=new Headers({'Content-type':'application/x-www.form-urlencoded'});
  ngOnInit() {
    //this.num=this.router.snapshot.params;
    //console.log(this.router.snapshot.params);//组件之间值的传递

    // this.http.get('http://datainfo.duapp.com/shopdata/getGoods.php').subscribe(data=>{
    // console.log(JSON.parse(data['_body']));
    // this.list=JSON.parse(data['_body']);
    // },err=>{
    //   console.log(err);
    // });
    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data['_body']);
      this.list=data['_body'];
      },err=>{
        console.log(err);
      });

    // this.http.post('http://datainfo.duapp.com/shopdata/getGoods.php',JSON.stringify({}),{headers:this.headers}).filter(data=>{
    //   return data.status===200;
    // }).map(data=>{
    //     return data.json();}).subscribe(data=>{
    //     console.log(data);
    //     },err=>{
    //       console.log(err);
    //     });
  }
   goDetail(idx){
    this.router.navigate(['/gooddetail',idx]);
  }
}
