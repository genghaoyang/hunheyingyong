import { Injectable } from '@angular/core';

@Injectable()
export class AddDataService {

  constructor() { }
  addData(todolist){
    localStorage.clear();
    localStorage.setItem('输入',todolist);
  }
}
