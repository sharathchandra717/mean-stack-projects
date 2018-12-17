import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  prodata:any[]= [
    {
      'id':1,
      'name':'Sharath Chandra',
      'act':'10m ago',
      'hobbies':'Listening to Music',
      'details':'Btech 4th year CSE',
      'clg':'Vardhaman College of Engineering'
    },
    {
      'id':2,
      'name':'Kalyan',
      'act':'2d ago',
      'hobbies':'Playing Table Tennis',
      'details':'Btech 4th year IT',
      'clg':'Vardhaman College of Engineering'
    },
    {
      'id':3,
      'name':'Varun',
      'act':'5d ago',
      'hobbies':'Watching TV',
      'details':'Btech 4th year MECH',
      'clg':'CBIT'
    },
    {
      'id':4,
      'name':'Naveen',
      'act':'1d ago',
      'hobbies':'Playing Cricket',
      'details':'Btech 4th year ECE',
      'clg':'Vasavi Engineering College'
    },
    {
      'id':5,
      'name':'Pranav',
      'act':'15d ago',
      'hobbies':'Reading Books',
      'details':'Btech 4th year EEE',
      'clg':'Malla Reddy College of Engineering'
    }
  ];
  constructor() { }
  get():any{
    return this.prodata;
  }
  getById(id:number):any{
    return this.prodata.find(x => x.id == id);
  }
  logged(){
    return localStorage.getItem('logged');
  }
}
