import { Component, OnInit } from '@angular/core';
// import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-overview-header',
  templateUrl: './overview-header.component.html',
  styleUrls: ['./overview-header.component.scss']
})
export class OverviewHeaderComponent implements OnInit {

  constructor(

    private router: Router
  ) {

    this.checkLoadElement();

  }
  checkLoadElement() {

    console.log('Here linien');
    var count = 0;
    let canvas = document.getElementById("haus_canvas");
    let anim_container = document.getElementById("haus_animation_container");
    let dom_overlay_container = document.getElementById("haus_dom_overlay_container");
    let module_canvas = document.getElementById("module_canvas");
    let module_anim_container = document.getElementById("module_animation_container");
    let module_dom_overlay_container = document.getElementById("module_dom_overlay_container");
    let plata_canvas = document.getElementById("haus_canvas");
    let plata_anim_container = document.getElementById("haus_animation_container");
    let plata_dom_overlay_container = document.getElementById("haus_dom_overlay_container");
    if (!canvas && !anim_container && !dom_overlay_container && !module_canvas && !module_anim_container && !module_dom_overlay_container && !plata_canvas && !plata_anim_container && !plata_dom_overlay_container) {
      setTimeout(() => {
        this.checkLoadElement();
      }, 200);
    } else {
console.log("...here...")
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      console.log('here clicked overview')
      console.log("here module top", plata_anim_container.getBoundingClientRect().top)
      document.addEventListener('scroll', () => {
        console.log("y", window.scrollY);
        if (window.scrollY >= anim_container.getBoundingClientRect().top && count == 0) {
          if (document.getElementById('haus_trigger-click')){
            document.getElementById('haus_trigger-click').click();
          }
          count = 1;
        }
        if (window.scrollY >= module_anim_container.getBoundingClientRect().top && count == 1) {
          document.getElementById('module_trigger-click').click();

          count = 2;
        }
        if (window.scrollY >= plata_anim_container.getBoundingClientRect().top && count == 2) {
          document.getElementById('plata_trigger-click').click();

          count = 3;
        }
      })
    }
  }
  ngOnInit() {
  }
}
