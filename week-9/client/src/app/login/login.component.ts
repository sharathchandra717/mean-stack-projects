import { Component, OnInit } from '@angular/core';
import { FetchService } from "../fetch.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private readonly fetch:FetchService,private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('logged') == 'true'){
      this.router.navigate(['/visiting_list/dummy']); 
    }
  }
  login(username,password){
    if((username.value).length > 0 && (password.value).length > 0){
      this.fetch.login("http://localhost:3000/users",username.value,password.value).subscribe((res:any)=>{
        // console.log(res);
        if(res.result=="successful"){
          localStorage.setItem('logged', "true");
          localStorage.setItem('user', res.uname); 
          alert("Hello "+res.name)
          this.router.navigate(['/home']);
        }
        else if(res.result=="authentication failed"){
          alert(res.result);
        }
      });
    }
  }
 
}
