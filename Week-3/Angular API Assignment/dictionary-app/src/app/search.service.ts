import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { 
  }
  search(key){
    const headers = new HttpHeaders({
      'Accept':'application/json',
      'app_id':'ae12d2f0',
      'app_key':'c3c1a26409bbd229176577f4c08bfee2'
    });
    let apiUrl: string = 'https://cors-anywhere.herokuapp.com/https://od-api.oxforddictionaries.com/api/v1/entries/en/'+key;
    return this.http.get(apiUrl, {headers:headers});
  }
}
