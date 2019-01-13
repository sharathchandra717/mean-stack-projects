import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitingListComponent } from "./visiting-list/visiting-list.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";
const routes: Routes = [
      { path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'visiting_list/:user',
        component:VisitingListComponent, 
        canActivate:[AuthGuard]
      },
      {
        path:'login',
        component:LoginComponent
      },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
