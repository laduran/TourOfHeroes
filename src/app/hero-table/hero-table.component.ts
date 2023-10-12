import { Component, OnInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
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
  displayedColumns: string[] = ['id', 'name', 'age', 'symbol', 'actions'];
  heroes: Hero[] = [];
  dataSource : MatTableDataSource<Hero>;

  constructor(private heroService: HeroService) {
    this.dataSource = new MatTableDataSource(this.heroes);
  }

  ngOnInit(): void {
    this.refresh()
  }

  refresh() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.dataSource.data = heroes;
    })
  }

  delete(hero: Hero) {
    this.heroService.deleteHero(hero.id).subscribe(_ => this.refresh());
  }
}
