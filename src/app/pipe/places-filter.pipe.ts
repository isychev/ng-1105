import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from '../place.services';

@Pipe({
  name: 'placesFilter'
})
export class PlacesFilterPipe implements PipeTransform {

  transform(places: IPlace[], type: string): any {
    if (!type || type === 'Weather') {
      return places;
    }
    return places.filter((place: IPlace) => {
      return place.type === type;
    });
  }

}
