import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  logged:string;
  constructor() {
    
   }

  ngOnInit() {
    if(localStorage.getItem('logged')=="true")
      this.logged="Logout";
    else
      this.logged="Login";
  }

  toggle(){
    if(this.logged=="Login"){
      this.logged="Logout";
      localStorage.setItem('logged','true');
    }
    else{
      this.logged="Login";
      localStorage.setItem('logged','false');
    }
  }

}
