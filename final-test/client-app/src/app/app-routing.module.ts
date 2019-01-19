import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { QuestionsComponent } from "./questions/questions.component";

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'questions', 
    pathMatch: 'full' 
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'questions',
    component:QuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
