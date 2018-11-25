import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export  class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Freddie Mercury' },
      { id: 13, name: 'Roger Tayler' },
      { id: 14, name: 'Jimmy Page' },
      { id: 15, name: 'Frank Zappa' },
      { id: 16, name: 'Jeff Beck' },
      { id: 17, name: 'Eric Clapton' },
      { id: 18, name: 'John Deacon' },
      { id: 19, name: 'David Bowie' },
      { id: 20, name: 'Mick Kahn' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }

}
