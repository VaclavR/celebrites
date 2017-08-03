import { Component, OnInit } from '@angular/core';
import { CelebService } from '../celeb.service';

@Component({
  selector: 'app-add-celebrity',
  templateUrl: './add-celebrity.component.html',
  styleUrls: ['./add-celebrity.component.css']
})
export class AddCelebrityComponent implements OnInit {
  opinions = [
    { display: 'Ignore', value: 'dcare'},
    { display: 'Love', value: 'ilike'},
    { display: 'Hate', value: 'ihate'}
  ];
  defaultOpinion = 'dcare';

  celebService: CelebService;

  constructor(celebService: CelebService) {
    this.celebService = celebService;
   }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    this.celebService.addNewCelebrity(form.value);
  }

}
