import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overview1',
  templateUrl: './overview1.component.html',
  styleUrls: ['./overview1.component.scss']
})
export class Overview1Component implements OnInit {

  @Output() triggerNext: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  goToNext() {
    this.triggerNext.emit();
  }
}
