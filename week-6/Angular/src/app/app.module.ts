import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Router } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesComponent } from "./profiles/profiles.component";
import { CollegesComponent } from "./colleges/colleges.component";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { AuthGuard } from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    CollegesComponent,
    ProfilesComponent,
    HomeComponent,
    NotFoundComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot( [
      { path: '', 
        redirectTo: 'Home', 
        pathMatch: 'full' 
      },
      {
        path:'Home',
        component:HomeComponent
      },
      {
        path:'Profiles/:id',
        component:ProfileInfoComponent,
        canActivate:[AuthGuard]
      },
      {
        path:'Profiles',
        component:ProfilesComponent
      },
      {
        path:'Colleges',
        component:CollegesComponent
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
  ],
  providers: [ AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
