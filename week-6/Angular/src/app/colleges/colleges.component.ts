import { Component, OnInit } from '@angular/core';
import { FetchService } from "./fetch.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css']
})
export class CollegesComponent implements OnInit {
  data:any;
  constructor(private readonly clgdata:FetchService,public router: Router) { 
    this.data=clgdata.get();
  }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['']);
  }
}
