import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ProceedToTestComponent } from './proceed-to-test/proceed-to-test.component';
import { HomeComponent } from './home/home.component';
import { GetQuestionsService } from "./questions/get-questions.service";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    DashboardComponent,
    HeaderComponent,
    ProceedToTestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetQuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
