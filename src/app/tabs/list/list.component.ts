import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CelebService } from './../../celeb.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  celebrites = [];
  activatedRoute: ActivatedRoute;
  celService: CelebService;
  subscription;
  loadedOpinion = 'all';

  constructor(celService: CelebService, activatedRoute: ActivatedRoute) {
    this.celService = celService;
    this.activatedRoute = activatedRoute;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.celebrites = this.celService.showList(params.opinion);
      this.loadedOpinion = params.opinion;
    });
    this.subscription = this.celService.opinionChange.subscribe(
      () => {
        this.celebrites = this.celService.showList(this.loadedOpinion);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
