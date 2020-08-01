import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare var AdobeAn, createjs;

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.scss']
})
export class Home4Component implements OnInit {
  interval = null;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    var count = 0;
    let anim_container = document.getElementById("bank_animation_container");
    
    document.addEventListener('scroll', () => {
      if (window.scrollY >= anim_container.getBoundingClientRect().top*1.1 && count == 0) {
        document.getElementById('bank_trigger-click').click();
        count  = 1;
      }
    });
  }
}
