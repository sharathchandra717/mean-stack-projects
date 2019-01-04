import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }
  getData(apiUrl:string){
    return this.http.post(apiUrl,{});
  }
  get(apiUrl:string){
    return this.http.get(apiUrl);
  }
}
