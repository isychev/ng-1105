import { Component, Input, EventEmitter, Output } from '@angular/core';
import { IPlace,TTravelType} from '../place.services';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {

  constructor() { }

  @Input()
  public places: IPlace[];

  @Input()
  public currentPlace: IPlace;

  @Input()
  public travelTypes: TTravelType;

  @Output()
  public onSelectPlace: EventEmitter<IPlace> = new EventEmitter();

  @Output()
  public onSelectTravelType: EventEmitter<string> = new EventEmitter();

  public handleSelectPlace(item: IPlace): void {
    this.onSelectPlace.emit(item);
  }

  public handleSelectTravelType(travelType: TTravelType): void {
    this.onSelectTravelType.emit(travelType);
  }
}




