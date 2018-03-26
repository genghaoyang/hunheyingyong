import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-gooddetail',
  templateUrl: './gooddetail.component.html',
  styleUrls: ['./gooddetail.component.css']
})
export class GooddetailComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }
  num:number;
  ngOnInit() {
    this.route.params.subscribe(data=>{
      this.num=data.id;
    })
    // console.log(this.route.snapshot.params.goodId);
  }

}
