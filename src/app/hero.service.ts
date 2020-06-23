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

}
