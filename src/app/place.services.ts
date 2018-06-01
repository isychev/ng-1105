import {Observable, Observer, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export interface IPlace {
  logo: string,
  title: string,
  address: string,
  phone: string,
  weather: {
     icon: string,
     temperature: {
      water: number,
      air: number,
    }
  }

}


const data: IPlace[] = [
  ];

export const users$: Observable<IPlace[]> = of(data)
  .pipe(
    delay(3000)
  );
