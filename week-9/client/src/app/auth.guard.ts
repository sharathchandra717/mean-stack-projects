import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FetchService } from "./fetch.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private logged:FetchService,private router:Router ){}

  canActivate():boolean{
    if(this.logged.logged() == "true"){
      return true;
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
