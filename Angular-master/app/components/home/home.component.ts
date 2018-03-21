import { Component, OnInit ,EventEmitter,Input,Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public router:ActivatedRoute) { }
  num;
  ngOnInit() {
    this.num=this.router.snapshot.params;
    console.log(this.router.snapshot.params);//组件之间值的传递
  }
  //@Input() arrData:Array<any>;
  @Output() getIndex=new EventEmitter();
  ngDoCheck(){
  }
  ngOnChanges(){
  }
  arrData=[1,2,3,4];
  idx:number;
  fn(a){
    this.idx=a;
  }
}
