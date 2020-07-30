import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

import { StorageService } from '../../../../../_services/storage.service';

@Component({
  selector: 'app-overview-sub3',
  templateUrl: './overview-sub3.component.html',
  styleUrls: ['./overview-sub3.component.scss']
})
export class OverviewSub3Component implements OnInit {

  @Output() triggerNext: EventEmitter<any> = new EventEmitter<any>();
  items: Array<any> = [
    'einen Termin',
    'einen Anruf',
    'eine E-Mail'
  ];

  overview3: Array<any> = [];

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  addItem(index) {
    if ($('#overview-sub3 #image-' + index).hasClass('active')) {
      $('#overview-sub3 #image-' + index).removeClass('active');

      this.overview3.splice(this.overview3.indexOf(this.items[index - 1]), 1);
    }
    else {
      $('#overview-sub3 #image-' + index).addClass('active');

      this.overview3.push(this.items[index - 1]);
    }
  }

  goToNext() {
    if (this.overview3.length) {
      this.storageService.set('overview3', this.overview3);
      this.triggerNext.emit();
    }
  }
}