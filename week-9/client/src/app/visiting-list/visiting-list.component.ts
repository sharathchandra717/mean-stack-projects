import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { FetchService } from "../fetch.service";

@Component({
  selector: 'app-visiting-list',
  templateUrl: './visiting-list.component.html',
  styleUrls: ['./visiting-list.component.css']
})
export class VisitingListComponent implements OnInit {
  data:any;
  constructor(private route:ActivatedRoute,private fetch:FetchService,private router:Router) { }
  user:string = localStorage.getItem('name');
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let user = params.get('user');
      if(localStorage.getItem('user') == user){
        this.fetch.getData("http://localhost:3000/visiting?user="+user).subscribe((res:any)=>{
         this.data=res;
        //  console.log(this.data);
        });
      }
      else{
        this.router.navigate(['/visiting_list/'+localStorage.getItem('user')]);
      }
    });
  }
  logout(){
    this.router.navigate(['/home']);
    localStorage.clear();
    localStorage.setItem('logged', "false");
  }
}
