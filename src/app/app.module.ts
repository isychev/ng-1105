import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { CardPlaceComponent } from './card-place/card-place.component';
import { PlaceComponent } from './place/place.component';
import { PlacesFilterPipe } from './pipe/places-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    CardPlaceComponent,
    PlaceComponent,
    PlacesFilterPipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
