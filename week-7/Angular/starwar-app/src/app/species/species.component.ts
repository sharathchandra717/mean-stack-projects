import { Component, OnInit } from '@angular/core';
import { StarwarsService } from "../starwars.service";
import { Router} from '@angular/router';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  data:any;
  toggle:boolean=false;
  homeworld:string=null;
  info:any;
  peoples:any[]=[];
  films:any[]=[];

  constructor(private readonly starwarData:StarwarsService,private readonly router:Router){  }

  ngOnInit(){
    this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/https://swapi.co/api/species').subscribe((res:any)=>{
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

    for (let url of this.info.people) {
      this.starwarData.fetchWeatherData('https://cors-anywhere.herokuapp.com/'+url).subscribe((res:any)=>{
        this.peoples.push(res);
      });
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
    this.homeworld=null;
    this.peoples=[];
    this.films=[];
  }

}
