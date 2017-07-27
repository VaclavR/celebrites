import { Component, OnInit, Input } from '@angular/core';
import { CelebService} from '../../../celeb.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  celService: CelebService;

  @Input() celebrity;

  constructor(celService: CelebService) {
    this.celService = celService;
   }

  ngOnInit() {
  }

  sendOpinion(opinion) {
    this.celService.setOpinion({name: this.celebrity.name, opinion: opinion});
  }

}
