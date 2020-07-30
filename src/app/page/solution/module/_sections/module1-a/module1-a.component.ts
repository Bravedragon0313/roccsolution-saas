import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module1-a',
  templateUrl: './module1-a.component.html',
  styleUrls: ['./module1-a.component.scss']
})
export class Module1AComponent implements OnInit {

  @Input() content;

  constructor() { }

  ngOnInit() {
  }

}