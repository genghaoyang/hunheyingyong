import { Component, OnInit, Input } from '@angular/core';
import {GetdataService} from '../../services/getdata.service';
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {

  constructor(public getdata:GetdataService) { 

  }
  num:number;
  @Input() list:Array<any>;
  ngOnInit() {
    this.getdata.addData(20);
    this.getdata.addData(30);
    console.log(this.getdata.list);    
  }
}
