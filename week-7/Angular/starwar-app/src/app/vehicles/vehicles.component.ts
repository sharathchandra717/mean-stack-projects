import { Component, OnInit } from '@angular/core';
import { StarwarsService } from "../starwars.service";
import { Router} from '@angular/router';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  data:any;
  toggle:boolean=false;
  info:any;
  pilots:any[]=[];
  films:any[]=[];
  constructor(private readonly starwarData:StarwarsService,private readonly router:Router){  }
  ngOnInit(){
    this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/https://swapi.co/api/vehicles').subscribe((res:any)=>{
      this.data=res.results;
      // console.log(this.data);
    });
  }

  home(){
    this.router.navigate(['/home']);
  }

  more(name:string){
    this.info = this.data.find(x => x.name == name);
    
    if((this.info.pilots).length > 0){
      for (let url of this.info.pilots) {
        this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+url).subscribe((res:any)=>{
          this.pilots.push(res);
        });
      }      
    }

    for (let url of this.info.films) {
      this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+url).subscribe((res:any)=>{
        this.films.push(res);
      });
    }

    this.toggle = !this.toggle;
  }

  back(){
    this.toggle = !this.toggle;
    this.pilots=[];
    this.films=[];
  }

}
