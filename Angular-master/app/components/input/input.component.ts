import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';
import { AddDataService } from '../../services/add-data.service';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public add:AddDataService) { }

  ngOnInit() {
  }
  content='';  //输入框内容
  @Output() getContent=new EventEmitter();
  
  keyData(e){
    if(e.keyCode==13){      
      this.getContent.emit(this.content);
      this.content=''; 
    }
  
  }

}
