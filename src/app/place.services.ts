import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

export type TTravelType =  'Hotel' | 'Fishing' | 'Tours' | 'Weather';
export const travelTypes: TTravelType[] = ['Hotel', 'Fishing', 'Tours', 'Weather'];

export interface IPlace {
  img: string;
  address: string;
  phone: number;
  weather: {
    title: string,
    img: string,
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
    img: '/assets/images/r1.jpg',
    address: 'sdfgsdfg',
    phone: getRandom(),
    weather: {
      title: 'sdfgsdfg',
      img: '/assets/images/cloudy.png ',
      water: getRandom(),
      temperature: getRandom(),
    },
    social_info: {
      title: 'zxvzsd',
      img: '/assets/images/r1.jpg',
      followers: getRandom(),
      following: getRandom(),
    },
    type: travelTypes[0]
  },
  {
    img: '/assets/images/b1.jpg',
    address: 'wertwc',
    phone: getRandom(),
    weather: {
      title: 'xcfgsdr',
      img: '/assets/images/cloudy.png ',
      water: getRandom(),
      temperature: getRandom(),
    },
    social_info: {
      title: ' vsf ',
      img: '/assets/images/b1.jpg',
      followers: getRandom(),
      following: getRandom(),
    },
    type: travelTypes[1]
  },
  {
    img: '/assets/images/b1.jpg',
    address: 'sdfgsdf',
    phone: getRandom(),
    weather: {
      title: 'sdfg vcx',
      img: '/assets/images/cloudy.png ',
      water: getRandom(),
      temperature: getRandom(),
    },
    social_info: {
      title: 'sdfgsdfgs',
      img: '/assets/images/b1.jpg',
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
