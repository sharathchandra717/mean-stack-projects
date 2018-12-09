import { Component } from '@angular/core';
import {FetchService} from "./fetch.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show:boolean=false;
  show1:boolean=true;
  show2:boolean=true;
  showtable:boolean=false;
  rows_data=[];
  constructor(private readonly servive_data:FetchService){}
  showTable(){
    this.rows_data=this.servive_data.getData();
    this.showtable=!this.showtable;
  }
}
