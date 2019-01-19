import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proceed-to-test',
  templateUrl: './proceed-to-test.component.html',
  styleUrls: ['./proceed-to-test.component.css']
})
export class ProceedToTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  proceedToTest(user){
    console.log(user.value);
  }

}
