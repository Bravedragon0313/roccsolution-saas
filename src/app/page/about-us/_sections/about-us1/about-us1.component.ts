import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var AdobeAn;
@Component({
  selector: 'app-about-us1',
  templateUrl: './about-us1.component.html',
  styleUrls: ['./about-us1.component.scss']
})
export class AboutUs1Component implements OnInit {

  counter1: any = 0;
  counter2: any = 0;
  counter3: any = 0;

  constructor() {

    console.log(AdobeAn);
    this.checkLoadElement();

  }
  checkLoadElement() {
    var count = 0;
    console.log('Here about');
    let canvas = document.getElementById("about_canvas");
    let anim_container = document.getElementById("about_animation_container");
    let dom_overlay_container = document.getElementById("about_dom_overlay_container");
    if (!canvas || !anim_container || !dom_overlay_container) {
      setTimeout(() => {
        this.checkLoadElement();
      }, 200);
    } else {
      console.log('here clicked about')
      
      document.addEventListener('scroll', () => {
        console.log("y", window.scrollY);
        if (window.scrollY >= anim_container.getBoundingClientRect().top*1.1 && count == 0) {
          document.getElementById('about_trigger-click').click();

          count  = 1;
        }
      })
    }
  }

  ngOnInit() {
    setInterval(() => {
      if (this.counter1 < 25) this.counter1++;
    }, 60);

    setInterval(() => {
      if (this.counter2 < 15) this.counter2++;
      if (this.counter3 < 15) this.counter3++;
    }, 100);
  }
}
