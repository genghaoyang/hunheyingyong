import { Component } from '@angular/core';
import {GetdataService} from './services/getdata.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public get:GetdataService){
  };
  index:number;
  ngOnInit(){
    //this.index=this.get.index;
  }
  content;
  tolist=[];
  getC(con){
     this.content=con;
     this.tolist.push(con);
     console.log(this.tolist);
  }
  // arrD=[1,2,3,4,5,6];
  // i:number;
  // getI(idx){
  //   console.log(idx);
  // }

  // data:string;
  // dataArr=[];
  // dataA=[];
  // add(){
  // this.dataArr.push(this.data); 
  // this.data='';
  // }
  // delete(i){
  //   this.dataArr.splice(i,1);
  // }
  // cData(i){
  //   this.dataA.push(this.dataArr[i]);
  //   this.dataArr.splice(i,1);
  // }
  // delete1(i){
  //   this.dataA.splice(i,1);
  // }
  // cData1(i){
  //   this.dataArr.push(this.dataA[i]);
  //   this.dataA.splice(i,1);
  // }
}
