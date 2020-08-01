import { Component, OnInit } from '@angular/core';
declare var AdobeAn;
@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss']
})
export class Home3Component implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    var count = 0;
    let anim_container = document.getElementById("massimor_animation_container");
 
    document.addEventListener('scroll', () => {
      if (window.scrollY >= anim_container.getBoundingClientRect().top*1.1 && count == 0) {
        // document.getElementById('massimor_trigger-click').click();
        count  = 1;
      }
    });
  }
}
