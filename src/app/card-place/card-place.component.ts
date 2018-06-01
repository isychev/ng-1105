import { Component, Input } from '@angular/core';
import { IPlace } from '../place.services';


@Component({
  selector: 'app-card-place',
  templateUrl: './card-place.component.html',
  styleUrls: ['./card-place.component.css']
})
export class CardPlaceComponent {

  @Input()
  public place: IPlace;

}
