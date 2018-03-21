import { Component, OnInit, Input } from '@angular/core';
import {GetdataService} from '../../services/getdata.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public router:ActivatedRoute) { }
  num;
  ngOnInit() {
    this.num=this.router.snapshot.params;
    console.log(this.router.snapshot.params);//组件之间值的传递
  }
  // constructor(public router:Router,@optional()){}
  idx:number[]=[1,2,3,4,5];
  // goDetail(idx){
  //   this.router.navigate(['/gooddetail',idx]);
  // }
  // num:number;
  @Input() list:Array<any>;
  // ngOnInit() {
  //   this.getdata.addData(20);
  //   this.getdata.addData(30);
  //   console.log(this.getdata.list);    
  // }
}
