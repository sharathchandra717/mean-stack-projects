import { Component, OnInit } from '@angular/core';
import { FetchDataService } from "../fetch-data.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data:any;
  numberOfTickets:number=1;
  empty:string="Nothing to display";
  bookingdata;
  time;
  constructor(private readonly fetch:FetchDataService){}
  ngOnInit(){
    this.fetch.getData("http://localhost:3000/theatres").subscribe((res:any)=>{
      this.data =res;
      // console.log(this.data);
    });
  }
  
  findByPin(pincode){
    if((pincode.value).length == 6){
      this.fetch.get("http://localhost:3000/theatres/pincode?num="+pincode.value).subscribe((res:any)=>{
        this.data =res;
        // console.log(this.data);
      });
    }
    else
      alert("pincode should be 6 digits");
  }
  findByCinema(cinema){
    if((cinema.value).length > 0){
      this.fetch.get("http://localhost:3000/theatres/cinema?name="+cinema.value).subscribe((res:any)=>{
        this.data =res;
        // console.log(this.data);
      });
    }
  }
  saveData(data,time){
    this.bookingdata=data;
    this.time=time;
  }
  book(phNo,day){
    let now: Date = new Date();
    if((phNo.value).length==10 && (day.value).length==10){
      this.fetch.get("http://localhost:3000/theatres/booking?day="+day.value+"&phno="+phNo.value+"&time="+this.time+"&movie="+this.bookingdata.movie_title+"&theatre="+this.bookingdata.name+"&tickets="+this.numberOfTickets+"&timeStamp="+now)
      .subscribe((res:any)=>{
        alert("Day: "+res.day+"\nPhone number: "+res.phone_number+"\nShow time: "+res.show_time+"\nMovie name: "+res.movie_name+"\nTheatre name: "+res.theatre_name+"\nNo of tickets: "+res.no_of_tickets+"\nBooking time: "+res.booking_time);
        // console.log(res);
      });
    }
    else{
      alert("Mobile number or Date missing");
    }
  }
}
