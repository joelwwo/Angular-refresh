import { Component, OnInit } from '@angular/core';

import { IHero } from './../Interfaces/Hero';
import { HeroService } from '../hero.service';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService,
    private messagesService: MessagesService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  heroes: IHero[]
  selectedHero: IHero

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
