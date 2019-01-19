import { Component, OnInit } from '@angular/core';
import { GetQuestionsService } from "./get-questions.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})



export class QuestionsComponent implements OnInit {
  
  questions:any[];
  copy:any[];
  i:number=0;
  answers=[];
  answersCheck:any[];
  marks:number=0;
  marksDisplay:boolean;

  constructor(private readonly fetch:GetQuestionsService) { }

  ngOnInit() {
    this.fetch.getQuestions("http://localhost:3000/questions").subscribe((res:any)=>{
      this.questions=res;
      this.copy=this.questions;
      console.log(this.questions);
    });
  }
  next(op1,op2,op3,op4){
    if(op1.checked){
      if(this.answers[this.i]){
        this.answers[this.i] ={"ID":this.i,"answer":op1.value};
      }
      else
      this.answers.push({"ID":this.i,"answer":op1.value});        
    }
    else if(op2.checked){
      if(this.answers[this.i]){
        this.answers[this.i] ={"ID":this.i,"answer":op2.value};
      }
      else
      this.answers.push({"ID":this.i,"answer":op2.value});
    }
    else if(op3.checked){
      if(this.answers[this.i]){
        this.answers[this.i] ={"ID":this.i,"answer":op3.value};
      }
      else
      this.answers.push({"ID":this.i,"answer":op3.value});
    }
    else if(op4.checked){
      if(this.answers[this.i]){
        this.answers[this.i] ={"ID":this.i,"answer":op4.value};
      }
      else
      this.answers.push({"ID":this.i,"answer":op4.value});
    }
    else{}
    if(this.i<9) this.i = ++this.i;
    
  }
  back(){
    if(this.i>0) this.i--;
    // console.log(this.i);
  }
  submitNow(){
    this.fetch.getAnswers("http://localhost:3000/answers").subscribe((res:any)=>{
      this.answersCheck=res;
      // console.log(this.answersCheck);
      for(let j=0;j<10;j++){
        if(this.answers[j].answer == this.answersCheck[j].answer){
          this.marks++;
        }
      }
      this.marksDisplay=true;
      // console.log((this.marks/10)*100);
      
    });
  }
}
