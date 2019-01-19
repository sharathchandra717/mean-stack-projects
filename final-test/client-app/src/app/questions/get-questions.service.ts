import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetQuestionsService {

  constructor(private http: HttpClient) { }
  getQuestions(apiUrl:string){
    return this.http.get(apiUrl);
  }
  getAnswers(apiUrl){
    return this.http.get(apiUrl);
  }
}
