import { Component, OnInit } from '@angular/core';
declare var ani_router;
@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  sectionId: any = 1;

  constructor() { }

  ngOnInit() {
  }

  goToNext() {

    this.sectionId++;
    if (this.sectionId > 4) this.sectionId = 1;

  }
}