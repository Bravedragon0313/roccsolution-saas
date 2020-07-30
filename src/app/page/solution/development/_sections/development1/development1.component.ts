import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-development1',
  templateUrl: './development1.component.html',
  styleUrls: ['./development1.component.scss']
})
export class Development1Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onResize() {
    var section_height = $('#development1').height();

    if (section_height < $('#development1 .text-player').outerHeight() + 100) {
      $('#development1').height($('#development1 .text-player').outerHeight() + 200);
    }
  }

  loadContact() {
    this.router.navigateByUrl('/contact');
  }
}
