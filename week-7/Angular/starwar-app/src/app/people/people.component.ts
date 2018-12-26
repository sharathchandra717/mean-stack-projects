import { Component, OnInit } from '@angular/core';
import { StarwarsService } from "../starwars.service";
import { Router} from '@angular/router';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  data:any[];
  info:any;
  toggle:boolean=false;
  films:any[]=[];
  homeworld:string=null;
  species:string=null;
  vehicles:any[]=[];
  starships:any[]=[];

  constructor(private readonly starwarData:StarwarsService,private readonly router:Router){  }

  ngOnInit(){
    this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/https://swapi.co/api/people').subscribe((res:any)=>{
      this.data=res.results;
      // console.log(this.data);
    });
  }

  home(){
    this.router.navigate(['/home']);
  }

  more(name:string){
    this.info = this.data.find(x => x.name == name);
    
    this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+this.info.homeworld).subscribe((res:any)=>{
      this.homeworld=res;
    });
    
    for (let url of this.info.films) {
      this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+url).subscribe((res:any)=>{
        this.films.push(res);
      });
    }

    this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+this.info.species[0]).subscribe((res:any)=>{
      this.species=res;
    });

    if((this.info.vehicles).length > 0){
      for (let url of this.info.vehicles) {
        this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+url).subscribe((res:any)=>{
          this.vehicles.push(res);
        });
      }
    }

    if((this.info.starships).length > 0){
      for (let url of this.info.starships) {
        this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+url).subscribe((res:any)=>{
          this.starships.push(res);
        });
      }
    }
    
    this.toggle = !this.toggle;
  }

  back(){
    this.toggle = !this.toggle;
    this.homeworld=null;
    this.films=[];
    this.species=null;
    this.vehicles=[];
    this.starships=[];
  }

}