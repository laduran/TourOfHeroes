import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css'],
  standalone: true,
  imports: [MatTableModule]
})
export class HeroTableComponent implements OnInit{
  displayedColumns: string[] = ['id', 'name', 'age', 'symbol'];
  heroes: Hero[] = [];
  dataSource = this.heroes;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => {this.heroes = heroes;
                          this.dataSource = heroes});
  }
}
