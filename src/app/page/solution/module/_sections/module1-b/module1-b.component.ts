import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-module1-b',
  templateUrl: './module1-b.component.html',
  styleUrls: ['./module1-b.component.scss']
})
export class Module1BComponent implements OnInit {

  @Input() content;

  constructor() { }

  ngOnInit() {
  }

}