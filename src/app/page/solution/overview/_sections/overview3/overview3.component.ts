import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overview3',
  templateUrl: './overview3.component.html',
  styleUrls: ['./overview3.component.scss']
})
export class Overview3Component implements OnInit {

  @Output() triggerNext: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  goToNext() {
    this.triggerNext.emit();
  }
}
