import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FetchService } from "./fetch.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { VisitingListComponent } from './visiting-list/visiting-list.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VisitingListComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
