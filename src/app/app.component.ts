import { Component } from '@angular/core';
import { IPlace, places$, travelTypes, TTravelType } from './place.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public places: Observable<IPlace[]> = places$;
  public travelTypes: TTravelType[] = travelTypes ;
  public currentTravelType: string;
  public currentPlace: IPlace;

  public handleSelectPlace(place: IPlace): IPlace {
    this.currentPlace = place;
    return place;
  }
  public handleSelectTravelType(travelType: string): string {
    this.currentTravelType = travelType;
    return travelType;
  }
}
