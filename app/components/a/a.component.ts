import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {GetdataService} from '../../services/getdata.service';
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  //getdata=new GetdataService();

  constructor(public getdata:GetdataService) { }
  @Input() arrData:Array<any>;
  @Output() getIndex=new EventEmitter();
  num:number;
  ngOnInit() {
    // this.getdata.addData(100);
    // this.getdata.addData(800);
    // console.log(this.getdata.list);
  }
  ngDoCheck(){
  }
  ngOnChanges(){
  }
  fn(i){
    this.getIndex.emit(i);
    //this.getdata.getIndex(i);
  }
}