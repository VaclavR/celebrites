import { Component, OnInit } from '@angular/core';
import { CelebService } from '../celeb.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  celebrites = [];
  filter = 'all';
  celService: CelebService;

  constructor(celService: CelebService) {
    this.celService = celService;
   }

  ngOnInit() {
  }

  setFilter(filter) {
    this.filter = filter;
  }

  showList() {
    this.celebrites = this.celService.showList(this.filter);
    return this.celebrites;
  }


}
