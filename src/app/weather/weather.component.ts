import { Component, Input } from '@angular/core';
import {IPlace} from '../place.services'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {

  constructor() { }
  @Input ()
  public place: IPlace;

}
