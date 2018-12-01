import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UserListComponent } from './user-list/user-list.component';
import { ItemCountComponent } from './item-count/item-count.component';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    // UserListComponent,
    ItemCountComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
