import { Component, OnInit } from '@angular/core';
declare var AdobeAn;
@Component({
  selector: 'app-home7',
  templateUrl: './home7.component.html',
  styleUrls: ['./home7.component.scss']
})
export class Home7Component implements OnInit {

  constructor() {

    console.log(AdobeAn);
    this.checkLoadElement();

  }
  checkLoadElement() {
    console.log('Here scheibe');
    let canvas = document.getElementById("scheibe_canvas");
    let anim_container = document.getElementById("scheibe_animation_container");
    let dom_overlay_container = document.getElementById("scheibe_dom_overlay_container");
    if (!canvas || !anim_container || !dom_overlay_container) {
      setTimeout(() => {
        this.checkLoadElement();
      }, 200);
    } else {
      console.log('here clicked scheibe')
      document.getElementById('scheibe_trigger-click').click();
    }
  }
  ngOnInit() {
  }
}
