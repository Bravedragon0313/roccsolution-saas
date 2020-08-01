import { Component, OnInit } from '@angular/core';
declare var AdobeAn, createjs;
@Component({
  selector: 'app-development3',
  templateUrl: './development3.component.html',
  styleUrls: ['./development3.component.scss']
})
export class Development3Component implements OnInit {

  constructor() {

    console.log(AdobeAn);
    this.checkLoadElement();

  }
  checkLoadElement() {
    var count = 0;
    console.log('Here linien');
    let canvas = document.getElementById("linien_canvas");
    let anim_container = document.getElementById("linien_animation_container");
    let dom_overlay_container = document.getElementById("linien_dom_overlay_container");
    if (!canvas || !anim_container || !dom_overlay_container) {
      setTimeout(() => {
        this.checkLoadElement();
      }, 200);
    } else {
      console.log('here clicked linien')
      document.addEventListener('scroll', () => {
        console.log("y", window.scrollY);
        if (window.scrollY >= anim_container.getBoundingClientRect().top * 1.1 && count == 0) {
          document.getElementById('linien_trigger-click').click();

          count = 1;
        }
      })
    }
  }
  ngOnInit() {
  }
}
