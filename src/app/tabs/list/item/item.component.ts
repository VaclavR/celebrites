import { Component, OnInit, Input } from '@angular/core';
import { CelebService} from '../../../celeb.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() celebrity;

  constructor() { }

  ngOnInit() {
  }

}
