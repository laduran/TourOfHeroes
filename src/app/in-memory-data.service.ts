import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', age: 26, symbol: '🦫' },
      { id: 13, name: 'Bombasto', age: 46, symbol: '💣' },
      { id: 14, name: 'Celeritas', age: 51, symbol: '🎅' },
      { id: 15, name: 'Magneta', age: 40, symbol: '🤶' },
      { id: 16, name: 'RubberMan', age: 36, symbol: '🥸' },
      { id: 17, name: 'Dynama', age: 35, symbol: '💀' },
      { id: 18, name: 'Dr. IQ', age: 55, symbol: '🤓' },
      { id: 19, name: 'Magma', age: 34, symbol: '🧙‍♂️' },
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
