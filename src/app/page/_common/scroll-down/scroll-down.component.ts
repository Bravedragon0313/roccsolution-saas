import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-scroll-down',
  templateUrl: './scroll-down.component.html',
  styleUrls: ['./scroll-down.component.scss']
})
export class ScrollDownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll() {

    window.scrollTo({
      top: $('#scroll-down').offset().top,
      behavior: 'smooth'
    });

  }
}
