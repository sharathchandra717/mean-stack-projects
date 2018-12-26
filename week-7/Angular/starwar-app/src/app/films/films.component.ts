import { Component, OnInit } from '@angular/core';
import { StarwarsService } from "../starwars.service";
import { Router} from '@angular/router';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  
  data:any;
  info:any;
  toggle:boolean=false;
  vehicles:any[]=[];
  characters:any[]=[];
  planets:any[]=[];
  starships:any[]=[];
  species:any[]=[];
  constructor(private readonly starwarData:StarwarsService,private readonly router:Router){  }
  ngOnInit(){
    this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/https://swapi.co/api/films').subscribe((res:any)=>{
      this.data=res.results;
      // console.log(this.data);
    });
  }

  home(){
    this.router.navigate(['/home']);
  }

  more(id:number){
    this.info = this.data.find(x => x.episode_id == id);

    for (let url of this.info.characters) {
      this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+url).subscribe((res:any)=>{
        this.characters.push(res);
      });
    }

    for (let url of this.info.planets) {
      this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+url).subscribe((res:any)=>{
        this.planets.push(res);
      });
    }

    for (let url of this.info.starships) {
      this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+url).subscribe((res:any)=>{
        this.starships.push(res);
      });
    }  
    
    for (let url of this.info.species) {
      this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+url).subscribe((res:any)=>{
        this.species.push(res);
      });
    }   
    
    if((this.info.vehicles).length > 0){
      for (let url of this.info.vehicles) {
        this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+url).subscribe((res:any)=>{
          this.vehicles.push(res);
        });
      }
    }
    
    this.toggle = !this.toggle;
  }

  back(){
    this.toggle = !this.toggle;
    this.vehicles=[];
    this.characters=[];
    this.planets=[];
    this.starships=[];
    this.species=[];
  }

}
