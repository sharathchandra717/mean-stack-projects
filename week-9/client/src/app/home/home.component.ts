import { Component, OnInit } from '@angular/core';
import { FetchService } from "../fetch.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:any;
  bookingData;
  constructor(private readonly fetch:FetchService,private router: Router) { }

  ngOnInit() {
    this.fetch.getData("http://localhost:3000/houses").subscribe((res:any)=>{
      this.data=res;
      // console.log(this.data);
    });
  }
  check(id){
    this.bookingData = id;
    if(localStorage.getItem('logged') == 'false'){
      this.router.navigate(['/login']); 
    }
  }
  book(day){
    if(day.value != ""){
      this.fetch.getData("http://localhost:3000/visiting/book?user="+localStorage.getItem('user')+"&id="+this.bookingData+"&date="+day.value).subscribe((res:any)=>{
      // this.data=res;
      // console.log(res);
      if(res.result==1){
        alert("Successfully Booked");
      }
      if(res.result==0){
        alert("Already Booked by You");
      }
      this.router.navigate(['/visiting_list/'+localStorage.getItem('user')]);
    });
    }
    else{
      alert("Please select a data");
    }
  }
}
