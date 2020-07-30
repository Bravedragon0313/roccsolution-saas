import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

import { StorageService } from '../../../../../_services/storage.service';

@Component({
  selector: 'app-overview-sub2',
  templateUrl: './overview-sub2.component.html',
  styleUrls: ['./overview-sub2.component.scss']
})
export class OverviewSub2Component implements OnInit {

  @Output() triggerNext: EventEmitter<any> = new EventEmitter<any>();
  items: Array<any> = [
    'bankfremde Angebote anbieten',
    'meine Kunden und regionale Anbieter digital miteinander vernetzen',
    'mehrere Anwendungen auf einem einzigen Front-End orchestrieren',
    'Informationen, Veranstaltungen und Schulungen zentral verwalten (intern und extern)',
    'soziale Netzwerke (Xing, LinkedIn, Facebook, Twitter, Instagram…) zentral und effizient pflegen',
    'Künstliche Intelligenz einsetzen'
  ];

  overview2: Array<any> = [];

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
  }

  addItem(index) {
    if ($('#overview-sub2 #check' + index).is(':checked')) {
      this.overview2.push(this.items[index - 1]);
    }
    else {
      this.overview2.splice(this.overview2.indexOf(this.items[index - 1]), 1);
    }
  }

  goToNext() {
    if (this.overview2.length) {
      this.storageService.set('overview2', this.overview2);
      this.triggerNext.emit();
    }
  }
}