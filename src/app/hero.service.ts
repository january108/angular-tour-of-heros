import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES} from './mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    // TODO: send thin message _after_ fetching the heroes
    this.messageService.add('HeroService: fetch heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send thin message _after_ fetching the heroe
    this.messageService.add(`HeroServivce: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
