import { Injectable } from '@angular/core';
import { CanActivate , Router } from '@angular/router';
import { FetchService } from './profiles/fetch.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private logged:FetchService,private router:Router ){

  }
  canActivate():boolean{
    if(this.logged.logged() == "true"){
      console.log(this.logged.logged());
      return true;
    }
    else{
      this.router.navigate(['']);
      alert("Please Login!");
      return false;
    }
  }
}
