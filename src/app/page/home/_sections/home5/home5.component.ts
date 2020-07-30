import { Component, OnInit } from '@angular/core';
declare var AdobeAn, createjs;
@Component({
  selector: 'app-home5',
  templateUrl: './home5.component.html',
  styleUrls: ['./home5.component.scss']
})
export class Home5Component implements OnInit {

  constructor() {
    console.log(AdobeAn);
    this.checkLoadElement();
  }

  checkLoadElement() {
    let canvas = document.getElementById("platform_canvas");
    let anim_container = document.getElementById("platform_animation_container");
    let dom_overlay_container = document.getElementById("platform_dom_overlay_container");
    if (!canvas || !anim_container || !dom_overlay_container) {
      setTimeout(() => {
        this.checkLoadElement();
      }, 200);
    } else {
      console.log("here platform click")
      document.getElementById('platform_trigger-click').click();
    }
  }

  ngOnInit() {
  }
}
