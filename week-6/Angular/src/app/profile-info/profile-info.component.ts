import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { FetchService } from "../profiles/fetch.service";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private proinfo:FetchService,private router:Router) { }
  data:any;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.data = this.proinfo.getById(+params.get('id'));
      if(this.data == undefined){
        this.router.navigate(['/Profiles']);
      }
    });
  }
  back(){
    this.router.navigate(['/Profiles']);
  }
}
