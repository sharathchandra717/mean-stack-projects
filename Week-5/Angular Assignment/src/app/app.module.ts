import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FetchService} from './fetch.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [FetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
