import { Component, OnInit, ViewChild } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HeroTableComponent } from '../hero-table/hero-table.component'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  refreshed: Hero[] = [];
  @ViewChild('heroTable')
  heroTable!: HeroTableComponent;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string, age: number, symbol: string = '💀'): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name, age, symbol } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.heroTable.refresh();
        });
  }
}
