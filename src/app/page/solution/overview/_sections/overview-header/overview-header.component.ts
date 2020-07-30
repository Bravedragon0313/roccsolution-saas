import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview-header',
  templateUrl: './overview-header.component.html',
  styleUrls: ['./overview-header.component.scss']
})
export class OverviewHeaderComponent implements OnInit {

  constructor() {

    this.checkLoadElement();

  }
  checkLoadElement() {
    console.log('Here linien');
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
      console.log('here clicked overview')
        document.getElementById('haus_trigger-click').click();
        document.getElementById('module_trigger-click').click();
        document.getElementById('plata_trigger-click').click();
      
    }
  }
  ngOnInit() {
  }

}
