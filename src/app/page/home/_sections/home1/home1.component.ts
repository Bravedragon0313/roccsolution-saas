import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss']
})
export class Home1Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onResize() {
    $('#home1').height($('#home1 .back-layer').outerHeight() + $('#home1 .back-layer').position().top);
  }

  loadOverview() {
    this.router.navigateByUrl('/solution/overview');
  }
}