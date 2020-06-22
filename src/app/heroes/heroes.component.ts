import { Component, OnInit } from '@angular/core';
import { IHero } from './../Interfaces/Hero';
import { HEROES } from './../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes = HEROES
  selectedHero: IHero

  onSelect(hero: IHero): void {
    this.selectedHero = hero
  }

}
