import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overview4',
  templateUrl: './overview4.component.html',
  styleUrls: ['./overview4.component.scss']
})
export class Overview4Component implements OnInit {

  @Output() triggerNext: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  goToNext() {
    this.triggerNext.emit();
  }
}