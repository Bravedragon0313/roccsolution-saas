import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-sidebar',
  templateUrl: './overview-sidebar.component.html',
  styleUrls: ['./overview-sidebar.component.scss']
})
export class OverviewSidebarComponent implements OnInit {

  @Input() imgUrl;
  @Input() no;
  @Input() text;

  constructor() { }

  ngOnInit() {
  }

}
