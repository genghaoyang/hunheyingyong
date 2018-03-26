import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';
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
import {AppRoutingModule} from'./app-routing.module';
import {HttpModule,JsonpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    GoodslistComponent,
    VoterComponent,
    AComponent,
    InputComponent,
    ListComponent,
    HomeComponent,
    NopageComponent,
    GooddetailComponent,

  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [GetdataService,AddDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
