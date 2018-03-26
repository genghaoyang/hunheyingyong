import { Component, OnInit ,Input } from '@angular/core';
import { AddDataService } from '../../services/add-data.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public add:AddDataService) { }
  num;
  ngOnInit() {
  }
  @Input() tolist;
  comlist=[]; 
  
  delete(i){
    this.tolist.splice(i,1);
  }
  cData(i){
    this.comlist.push(this.tolist[i]);
    this.tolist.splice(i,1);
  }
  delete1(i){
    this.comlist.splice(i,1);
  }
  cData1(i){
    this.tolist.push(this.comlist[i]);
    this.comlist.splice(i,1);
  }
}
