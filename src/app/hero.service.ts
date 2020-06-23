import { Injectable } from '@angular/core';

import { HEROES } from './mock-heroes';
import { IHero } from './Interfaces/Hero';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messagesService: MessagesService) { }

  getHeroes(): Observable<IHero[]> {
    this.messagesService.addMessage('HeroService: fetched heroes')
    return of(HEROES)
  }

  getHero(id: number): Observable<IHero> {
    // TODO: send the message _after_ fetching the hero
    this.messagesService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
