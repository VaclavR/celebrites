
export class LogService {
  emotion;

  constructor() { }

  logOpinionChange(celebrity) {

    switch (celebrity.opinion) {
        case 'ilike':
            this.emotion = 'love';
            break;
        case 'ihate':
            this.emotion = 'hate';
            break;
        case 'dcare':
            this.emotion = 'nothing';
            break;
    }

    console.log('You change your opinion on ' + celebrity.name
    + '. You current emotion is ' + this.emotion + '!');
  }

  logAddedCelebrity(name) {
    console.log('You added a ' + name + ' to the list!');
  }

}
