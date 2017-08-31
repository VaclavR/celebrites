import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LogService } from './log.service';

@Injectable()

export class CelebService {

  private celebrites = [
    {
      name: 'Scarlett Johansson',
      img: 'scarlettjohansson-min.jpg',
      desc: 'An American Actress',
      opinion: ''
    },
    {
      name: 'Alber Einstein',
      img: 'alberteinstein-min.jpg',
      desc: 'A German Scientist',
      opinion: ''
    },
    {
      name: 'Angela Merkel',
      img: 'angelamerkel-min.jpg',
      desc: 'A German Councelor',
      opinion: ''
    },
    {
      name: 'Arnold Schwarzenegger',
      img: 'arnoldschwarzenegger-min.jpg',
      desc: 'An American Actor',
      opinion: ''
    },
    {
      name: 'Barrack Obama',
      img: 'barackobama-min.jpg',
      desc: 'A Former American President',
      opinion: ''
    },
    {
      name: 'Conor McGregor',
      img: 'conormcgregor-min.jpg',
      desc: 'An Irish UFC Fighter',
      opinion: ''
    },
    {
      name: 'Donald Trump',
      img: 'donaldtrump-min.jpg',
      desc: 'An American President',
      opinion: ''
    },
    {
      name: 'Elon Musk',
      img: 'elonmusk-min.jpg',
      desc: 'An American Entrepreneur',
      opinion: ''
    },
    {
      name: 'Emily Blunt',
      img: 'emilyblunt-min.jpg',
      desc: 'A British Actress',
      opinion: ''
    },
    {
      name: 'Jeff Bezos',
      img: 'jeffbezos-min.jpg',
      desc: 'An American Entrepreneur',
      opinion: ''
    },
    {
      name: 'Joanna Jedrzejczyk',
      img: 'joannajedrzejczyk-min.jpg',
      desc: 'A Polish UFC Fighter',
      opinion: ''
    },
    {
      name: 'Justin Bieber',
      img: 'justinbieber-min.jpg',
      desc: 'An American Singer',
      opinion: ''
    },
    {
      name: 'Margaret Thatcher',
      img: 'margaretthatcher-min.jpg',
      desc: 'A Former British Prime Minister',
      opinion: ''
    },
    {
      name: 'Marie Curie',
      img: 'mariecurie-min.jpg',
      desc: 'A Polish Scientist',
      opinion: ''
    },
    {
      name: 'Paige Vanzant',
      img: 'paigevanzant-min.jpg',
      desc: 'An American UFC Fighter',
      opinion: ''
    },
    {
      name: 'Ronda Rousey',
      img: 'rondarousey-min.jpg',
      desc: 'An American UFC Fighter',
      opinion: ''
    },
    {
      name: 'Theresa May',
      img: 'theresamay-min.jpg',
      desc: 'A British Prime Minister',
      opinion: ''
    },
    {
      name: 'Valentina Shevchenko',
      img: 'valentinashevchenko-min.jpg',
      desc: 'A Kyrgyz-Peruvian UFC Fighter',
      opinion: ''
    },
    {
      name: 'Viktor Orban',
      img: 'viktororban-min.jpg',
      desc: 'A Hungarian Prime Minister',
      opinion: ''
    }
  ];

  private logService: LogService;
  opinionChange = new Subject<void>();

  constructor(logService: LogService) {
    this.logService = logService;
  }

  setOpinion(opinion) {
    const position = this.celebrites.findIndex((celeb) => {
      return celeb.name === opinion.name;
    });
    this.logService.logOpinionChange(opinion);
    this.celebrites[position].opinion = opinion.opinion;
    this.opinionChange.next();
  }

  showList(filter) {
    if (filter === 'all') {
      return this.celebrites.slice();
    }
    return this.celebrites.filter((celeb) => {
      return filter === celeb.opinion;
    });
  }
  addNewCelebrity(celebrity) {
    const position = this.celebrites.findIndex((celeb) => {
      return celebrity.name === celeb.name;
    });
    if (position !== -1) {
      return;
    }
    this.logService.logAddedCelebrity(celebrity.name);
    this.celebrites.push(celebrity);
  }
}
