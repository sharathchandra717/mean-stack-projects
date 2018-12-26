import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleComponent } from "./people/people.component";
import { PlanetsComponent } from "./planets/planets.component";
import { FilmsComponent } from "./films/films.component";
import { SpeciesComponent } from "./species/species.component";
import { VehiclesComponent } from "./vehicles/vehicles.component";
import { StarshipsComponent } from "./starships/starships.component";
import { StarwarsService } from "./starwars.service";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    PlanetsComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [StarwarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
