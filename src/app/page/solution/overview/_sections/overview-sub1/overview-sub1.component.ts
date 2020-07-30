import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

import { StorageService } from '../../../../../_services/storage.service';

@Component({
  selector: 'app-overview-sub1',
  templateUrl: './overview-sub1.component.html',
  styleUrls: ['./overview-sub1.component.scss']
})
export class OverviewSub1Component implements OnInit {

  @Output() triggerNext: EventEmitter<any> = new EventEmitter<any>();
  items: Array<any> = [
    'ROCC Core',
    'Modulare Anwendungen',
    'Individuelle Neuentwicklungen'
  ];

  overview1: Array<any> = [];

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  addItem(index) {
    if ($('#overview-sub1 .image-' + index).hasClass('active')) {
      $('#overview-sub1 .image-' + index).removeClass('active');

      this.overview1.splice(this.overview1.indexOf(this.items[index - 1]), 1);
    }
    else {
      $('#overview-sub1 .image-' + index).addClass('active');

      this.overview1.push(this.items[index - 1]);
    }
  }

  goToNext() {
    if (this.overview1.length) {
      this.storageService.set('overview1', this.overview1);
      this.triggerNext.emit();
    }
  }
}