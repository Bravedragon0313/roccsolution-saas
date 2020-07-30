import { Component, OnInit, AfterViewChecked } from '@angular/core';

declare var AdobeAn, createjs;

@Component({
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.scss']
})
export class Home4Component implements OnInit {

  constructor() {

    console.log(AdobeAn);
    this.checkLoadElement();

  }
  checkLoadElement() {
    console.log('Here');
    let canvas = document.getElementById("bank_canvas");
    let anim_container = document.getElementById("bank_animation_container");
    let dom_overlay_container = document.getElementById("bank_dom_overlay_container");
    if (!canvas || !anim_container || !dom_overlay_container) {
      setTimeout(() => {
        this.checkLoadElement();
      }, 200);
    } else {
      console.log("home4 click test")
      document.getElementById('bank_trigger-click').click();
    }
  }

  ngOnInit() {
  }

}
