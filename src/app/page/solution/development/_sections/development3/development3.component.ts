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
      document.getElementById('linien_trigger-click').click();
    }
  }
  ngOnInit() {
  }
}
