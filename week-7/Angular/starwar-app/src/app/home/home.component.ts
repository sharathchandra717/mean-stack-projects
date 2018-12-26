import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public mainData1:any[] = [
    {
      'name':'people',
      'cl':'fab fa-drupal'
    },
    {
      'name':'planets',
      'cl':'fas fa-globe-europe'
    },
    {
      'name':'films',
      'cl':'fas fa-film'
    }];
    public mainData2:any[] = [
    {
      'name':'species',
      'cl':'fab fa-mandalorian'
    },
    {
      'name':'vehicles',
      'cl':'fas fa-fighter-jet'
    },
    {
      'name':'starships',
      'cl':'fab fa-galactic-republic'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
