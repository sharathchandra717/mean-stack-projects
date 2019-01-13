import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) { }
  getData(apiUrl:string){
    return this.http.get(apiUrl);
  }

  login(apiUrl:string,username,password){
    return this.http.post(apiUrl,{
      username:username,
      password:password
    });
  }

  logged(){
    return localStorage.getItem('logged');
  }
}
