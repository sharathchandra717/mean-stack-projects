import { Component, OnInit } from '@angular/core';
import { FetchService } from "./fetch.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  data:any;
  constructor( private readonly prodata:FetchService,private router: Router ) {
    this.data=prodata.get();
  }

  ngOnInit() {
  }
  home(){
   this.router.navigate(['']);
  }
}
