import {Observable, Observer, of} from 'rxjs';
import {delay} from 'rxjs/operators';
import {Injectable} from '@angular/core';


export const travelTypes = ['Hotel', 'Fishing', 'Tours', 'Weather'];

export type TTravelType = 'Hotel' | 'Fishing' | 'Tours' | 'Weather';

export interface IPlace {
  img: string;
  address: string;
  phone: number;   // дополнительно задание pipe для форматирования
  weather: {
    title: string,
    icon: string,
    water: number,
    temperature: number
  };
  social_info: {
    title: string,
    img: string,
    followers: number,
    following: number
  };
  type: TTravelType;

}

const getRandom = (): number => {
 return Math.round(Math.random() * 1000);
};

const data: IPlace[] = [
  {
    img: 'string',
    address: 'sdfgsdfg',
    phone: getRandom(),
    weather: {
      title: 'sdfgsdfg',
      icon: 'sdfgsdfg ',
      water: getRandom(),
      temperature: getRandom(),
    },
    social_info: {
      title: 'zxvzsd',
      img: 'sertar',
      followers: getRandom(),
      following: getRandom(),
    },
    type: travelTypes[0]
  },
  {
    img: 'sdfgsdfg',
    address: 'wertwc',
    phone: getRandom(),
    weather: {
      title: 'xcfgsdr',
      icon: 'sdfh ',
      water: getRandom(),
      temperature: getRandom(),
    },
    social_info: {
      title: ' vsf ',
      img: 'fsdabd',
      followers: getRandom(),
      following: getRandom(),
    },
    type: travelTypes[1]
  }
  , {
    img: 'sdhgsdbf',
    address: 'sdfgsdf',
    phone: getRandom(),
    weather: {
      title: 'sdfg vcx',
      icon: 'asdfsdf ',
      water: getRandom(),
      temperature: getRandom(),
    },
    social_info: {
      title: 'sdfgsdfgs',
      img: 'dfbsdfb',
      followers: getRandom(),
      following: getRandom(),
    },
    type: travelTypes[2]
  }
];

export const places$: Observable<IPlace[]> = of(data)
  .pipe(
    delay(1000)
  );


@Injectable()
export class DemoService {

  constructor() {
  }

  // Uses http.get() to load a single JSON file
  getPlace() {
    return of(data)
      .pipe(
        delay(3000)
      );
  }

}
