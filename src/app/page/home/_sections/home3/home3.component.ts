import { Component, OnInit } from '@angular/core';
declare var AdobeAn;
@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss']
})
export class Home3Component implements OnInit {
 
  constructor() {

    console.log(AdobeAn);
    this.checkLoadElement();

  }
  checkLoadElement() {
    console.log('Here');
    let canvas = document.getElementById("massimor_canvas");
    let anim_container = document.getElementById("massimor_animation_container");
    let dom_overlay_container = document.getElementById("massimor_dom_overlay_container");
    if (!canvas || !anim_container || !dom_overlay_container) {
      setTimeout(() => {
        this.checkLoadElement();
      }, 200);
    } else {
      console.log("home4 click test")
      document.getElementById('massimor_trigger-click').click();
    }
  }
  ngOnInit() {
  }

}
