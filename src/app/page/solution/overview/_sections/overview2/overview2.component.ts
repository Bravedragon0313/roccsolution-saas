import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overview2',
  templateUrl: './overview2.component.html',
  styleUrls: ['./overview2.component.scss']
})
export class Overview2Component implements OnInit {

  @Output() triggerNext: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  goToNext() {
    this.triggerNext.emit();
  }
}
