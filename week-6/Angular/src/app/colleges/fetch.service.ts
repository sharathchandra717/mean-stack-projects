import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor() { }
  get():any{
    return [
      {
        'id':1,
        'clg':'Vardhaman College of Engineering',
        'rating':'4.4',
        'location':'Shamshabad',
        'nos':'2,500'
      },
      {
        'id':2,
        'clg':'CBIT',
        'rating':'4.2',
        'location':'Gandipet',
        'nos':'3,500'
      },
      {
        'id':3,
        'clg':'Vasavi Engineering College',
        'rating':'4.3',
        'location':'Moinabad',
        'nos':'3,000'
      },
      {
        'id':4,
        'clg':'Malla Reddy College of Engineering',
        'rating':'4.0',
        'location':'Uppal',
        'nos':'2,000'
      },
      {
        'id':5,
        'clg':'Surya College of Engineering',
        'rating':'4.9',
        'location':'Nizambad',
        'nos':'1,00,000'
      }
    ];
  }
}
