import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solution-loop',
  templateUrl: './solution-loop.component.html',
  styleUrls: ['./solution-loop.component.scss']
})
export class SolutionLoopComponent implements OnInit {

  modules: Array<Object> = [
    {
      _id: 1,
      name: 'Regionaler Marktplatz',
      title: 'Als Betreiber des regionalen Marktplatzes sichern Sie den Kundenkontakt und schaffen neue Ertragsquellen'
    },
    {
      _id: 2,
      name: 'Online Shop',
      title: 'Bieten Sie Ihren Firmenkunden an, sich im digitalen Vertrieb zu etablieren'
    },
    {
      _id: 3,
      name: 'Digitales Anbieterverzeichnis',
      title: 'Mit dem digitalen Anbieterverzeichnis unterstützen Sie Firmenkunden bei der Digitalisierung und Privatkunden, Zeit zu sparen'
    },
    {
      _id: 4,
      name: 'Lead Generator',
      title: 'Mit dem Lead Generator helfen Sie ihren Privatkunden, schnell und bequem vertrauenswürdige Anbieter zu finden'
    },
    {
      _id: 5,
      name: 'Info Portal',
      title: 'Mit dem Info Portal verbessern Sie die  Kommunikation und steigern die Effizienz'
    },
    {
      _id: 6,
      name: 'Event Portal',
      title: 'Mit dem Event Portal optimieren Sie die Organisation Ihrer internen und externen Veranstaltungen'
    },
    {
      _id: 7,
      name: 'eLearning Portal',
      title: 'Das eLearning Modul unterstützt die Umsetzung moderner Lernkonzepte'
    },
    {
      _id: 8,
      name: 'Content Manager',
      title: 'Mit dem Content Manager können Sie alle Networking- und Social Media Seiten zentral und effizient verwalten'
    },
    {
      _id: 9,
      name: 'CRM',
      title: 'Das CRM/Projekt Management Modul vereinfacht und verbessert die Kommunikation und Projektdurchführung'
    },
    {
      _id: 10,
      name: 'Voice Commerce',
      title: 'Voice Commerce vereinfacht die Kundenreise durch Bequemlichkeit und steigert damit die Erfolgschancen'
    },
    {
      _id: 11,
      name: 'KI Google Dialogflow',
      title: 'Mit der KI Google Dialogflow können Sie Prozesse automatisieren und die Kundenzufriedenheit steigern'
    },
    {
      _id: 12,
      name: 'KI Amazon Rekognition',
      title: 'Die Amazon Rekognition KI ermöglicht Prozessautomatisierungen und Qualitätssteigerung'
    }
  ];

  index: any = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  loadPrev() {
    setTimeout(() => {
      this.index = this.index - 1;
      if (this.index < 0) this.index = 11;
    }, 100);
  }

  loadNxt() {
    setTimeout(() => {
      this.index = this.index + 1;
      if (this.index > 11) this.index = 0;
    }, 100);
  }

  loadPage() {
    this.router.navigateByUrl('/solution/module/' + this.modules[this.index]['_id']);
  }
}