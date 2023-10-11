import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', age: 26 },
      { id: 13, name: 'Bombasto', age: 46 },
      { id: 14, name: 'Celeritas', age: 51 },
      { id: 15, name: 'Magneta', age: 40 },
      { id: 16, name: 'RubberMan', age: 36 },
      { id: 17, name: 'Dynama', age: 35 },
      { id: 18, name: 'Dr. IQ', age: 55 },
      { id: 19, name: 'Magma', age: 34 },
      { id: 20, name: 'Tornado', age: 29 },
      { id: 21, name: 'Thor', age: 31 },
      { id: 22, name: 'Spider Man', age: 22 },
      { id: 23, name: 'Wolverine', age: 35 },
      { id: 24, name: 'Green Lantern', age: 34 },
      { id: 25, name: 'Batman', age: 44 },
      { id: 26, name: 'Wonder Woman', age: 29 },
      { id: 27, name: 'Plastic Man', age: 31 },
      { id: 28, name: 'Hulk', age: 43 },
      { id: 29, name: 'Black Panther', age: 37 },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
