import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { GoodslistComponent } from './components/goodslist/goodslist.component';
import { VoterComponent } from './components/voter/voter.component';

import { AComponent } from './components/a/a.component';
import {GetdataService} from'./services/getdata.service';
import { InputComponent } from './components/input/input.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { NopageComponent } from './components/nopage/nopage.component';
import { AddDataService } from './services/add-data.service';
import { GooddetailComponent } from './components/gooddetail/gooddetail.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path:'todolist/:id',component:TodolistComponent},
      {path:'gooddetail/:goodId',component:GooddetailComponent},
      {path:'goodslist',component:GoodslistComponent,
      children:[
        {path:'gooddetail/:id',component:GooddetailComponent},
      ]
    },
      {path:'input',component:InputComponent},
      {path:'home/:id/:num',component:HomeComponent},
      {path: '', redirectTo:'home', pathMatch:'full'},
      {path: '**', component:NopageComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
