import { Component } from '@angular/core';
import { FetchService } from "./fetch.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  constructor(private readonly fetch:FetchService){ 
    
   }
  ngOnInit(){
    if(localStorage.getItem('logged')!='true'){
      localStorage.setItem('logged', "false");
    }
  }  
}
