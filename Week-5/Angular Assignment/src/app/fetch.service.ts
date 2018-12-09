import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }
  getData():any{
    return [
      {"name":"Nikil", "email":"nikil@gmail.com", "age":23},    
      {"name":"Shyam", "email":"shyam23@gmail.com", "age":28},  
      {"name":"John", "email":"john@gmail.com", "age":33},    
      {"name":"Bob", "email":"bob32@gmail.com", "age":41},
      {"name":"Kiran", "email":"kiran@gmail.com", "age":25},  
      {"name":"Joy", "email":"joy@gmail.com", "age":36},    
      {"name":"Boss", "email":"boss@gmail.com", "age":40},
      {"name":"Sunil", "email":"sunil@gmail.com", "age":20},  
    ];
  }
}
