import { Component, OnInit } from '@angular/core';
declare var AdobeAn;
@Component({
  selector: 'app-home7',
  templateUrl: './home7.component.html',
  styleUrls: ['./home7.component.scss']
})
export class Home7Component implements OnInit {

  constructor() { }
  
  ngOnInit() {
  }
   
  ngAfterViewInit(): void {
    var count = 0;
    let anim_container = document.getElementById("scheibe_animation_container");
 
    document.addEventListener('scroll', () => {
      if (window.scrollY >= anim_container.getBoundingClientRect().top*1.1 && count == 0) {
        if(anim_container){
          // document.getElementById('scheibe_trigger-click').click();

        }
        count  = 1;
      }
    });
  }
}
