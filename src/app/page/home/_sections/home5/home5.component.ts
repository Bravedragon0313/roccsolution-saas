import { Component, OnInit } from '@angular/core';
declare var AdobeAn, createjs;
@Component({
  selector: 'app-home5',
  templateUrl: './home5.component.html',
  styleUrls: ['./home5.component.scss']
})
export class Home5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    var count = 0;
    let anim_container = document.getElementById("platform_animation_container");
 
    document.addEventListener('scroll', () => {
      if (window.scrollY >= anim_container.getBoundingClientRect().top*1.1 && count == 0) {
        if(anim_container){
          // document.getElementById('platform_trigger-click').click();
        }
        
        count  = 1;
      }
    });
  }
}
