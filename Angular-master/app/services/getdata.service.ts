import { Injectable } from '@angular/core';
//引入其他服务，写上injectable
@Injectable()//注入模块 装饰器函数
export class GetdataService {
  constructor() { }
  list=[];
  addData(num:number){
    this.list.push(num);
  }
  index:number;
  getIndex(i){
    this.index=i;
  }
}