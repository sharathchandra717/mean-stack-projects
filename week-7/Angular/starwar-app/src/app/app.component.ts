import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(){  }
  ngOnInit(){
  //   this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people').subscribe((res:any)=>{
  //     this.data=res.results;
  //     console.log(this.data);
  //   });
  }
}
