import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export class Content {
  _id: Number;
  type: String;
  title: String;
  description: String;
  image: String;
  optionsL: Array<Object>;
  optionsR: Array<Object>;
  colL: Number;
  colR: Number;
}

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  contents: Array<Content> = [
    {
      _id: 1,
      type: 'a',
      title: 'Als Betreiber des regionalen Marktplatzes sichern Sie den Kundenkontakt und schaffen neue Ertragsquellen',
      description: 'Ein digitaler Marktplatz ist eine Lösung, auf der verschiedene Shops ihrer Produkte anbieten können. Regionale Banken können Marktplätze nutzen, um regionale Privat- und Firmenkunden zu vernetzen. Durch kombinierte Angebote können Nachfrager ganzheitlich Lösungen auf einer Plattform beziehen.',
      image: 'assets/img/module-1.png',
      optionsL: [
        'eCommerce-Shop-System',
        'Multi-Vendor-fähig',
        'Anbindung Produkt-/Serviceanbieter',
        'Dashboards'
      ],
      optionsR: [
        'Bewertung von Dienstleistern',
        'Integration PoS System (Onlinekauf + Kartenzahlung vor Ort möglich)',
        'Benutzerverwaltung (Verbraucher, Anbieter, Administrator,...)',
        'Kunden- und Auftragsverwaltung'
      ],
      colL: 5,
      colR: 7
    },
    {
      _id: 2,
      type: 'a',
      title: 'Bieten Sie Ihren Firmenkunden an, sich im digitalen Vertrieb zu etablieren',
      description: 'Über den Online Shop werden Waren und Dienstleistungen im Internet angeboten und verkauft. Ein Marktplatz ist eine digitale Lösung, auf der verschiedene Online Shops Ihre Produkte anbieten können. Ihnen als Bank (in der Vermittlerrolle) empfehlen wir den Marktplatz. Ihren Firmenkunden können Sie unsere White Label Online-Shops anbieten, um sich im digitalen Vertrieb zu etablieren. Dieser Online-Shop lässt sich dann in Ihrem Marktplatz integrieren.',
      image: 'assets/img/module-2.png',
      optionsL: [
        'Shop-Konfigurationen',
        'Warenkorb',
        'Bezahl und Versandverfahren: mehr als 200 internationale Zahlungsanbieter sind erfasst',
        'Corporate Identity-Anpassung',
        'Inhalte und Navigation'
      ],
      optionsR: [
        'Quick Navigation',
        'Gutscheine kombinieren',
        'Verwaltung Kunden/Kundendatenbank',
        'Statistiken und Dashboards',
        'Lagerführung',
        'Kostenstellenfunktion'
      ],
      colL: 6,
      colR: 6
    },
    {
      _id: 3,
      type: 'a',
      title: 'Mit dem digitalen Anbieterverzeichnis unterstützen Sie Firmenkunden bei der Digitalisierung und Privatkunden, Zeit zu sparen',
      description: 'Das digitale Anbieterverzeichnis ist die digitale Visitenkarte und ein Baukastensystem zur Erstellung der Homepage Ihrer Firmenkunden auf einem Zentralen Portal.',
      image: 'assets/img/module-3.png',
      optionsL: [
        'Erstellung von Unternehmensbeschreibungen',
        'Produktangebote',
        'Einfügen von Bildern',
        'Einfügen von Kontaktdaten',
        'Online Terminabfrage'
      ],
      optionsR: [
        'Implementierung von Google Maps',
        'Öffnungszeiten',
        'Links hinterlegen',
        'Direktanfragen',
        'Umgebungssuche'
      ],
      colL: 6,
      colR: 6
    },
    {
      _id: 4,
      type: 'a',
      title: 'Mit dem Lead Generator helfen Sie ihren Privatkunden, schnell und bequem vertrauenswürdige Anbieter zu finden',
      description: 'Der Lead Generator ist eine Modul mit Klickstrecken, um strukturiert, schnell und einfach die Wunschleistung eines Nachfragers zu erfassen und daraus Leads zu generieren. Die Leads werden registrierten Produktanbietern der Plattform zum Erwerb angeboten. Nach Erwerb des Leads werden Nachfrager und Anbieter vernetzt. Damit begleiten Sie die Kunden von der Suche/Anfrage bis hin zur Abwicklung.',
      image: 'assets/img/module-4.png',
      optionsL: [
        'Klickstrecken zur Erfassung der Wunschleistungen der Nachfrager',
        'Generierung strukturierter Angebotsanfragen (Leads)',
        'Persönliches Dashboard für Nachfrager',
        'Marktplatz für registrierte Anbieter der Plattform, zum Erwerb der Leads'
      ],
      optionsR: [
        'Persönliches Dashboard für Anbieter',
        'Chat Funktion',
        'Online Terminvereinbarung',
        'Dokumentenverwaltung',
        'Dienstleisterbewertung'
      ],
      colL: 8,
      colR: 4
    },
    {
      _id: 5,
      type: 'a',
      title: 'Mit dem Info Portal verbessern Sie die  Kommunikation und steigern die Effizienz',
      description: 'Das Modul ist ein Info Portal, um gezielt Informationen für Kunden, Mitarbeiter oder Interessenten bereit zu stellen. Sie können klassisch Informationen veröffentlichen, einen Informationsaustausch organisieren und Teile des Kundensupports automatisieren.',
      image: 'assets/img/module-5.png',
      optionsL: [
        'Bereitstellung aktueller Informationen (z. B. zu Trends, Neuigkeiten, Tipps und Tricks)',
        'FAQs - Antworten zu häufig gestellten Fragen',
        'Foren'
      ],
      optionsR: [
        'Communities',
        'Blogs/Magazine',
        'Glossar'
      ],
      colL: 8,
      colR: 4
    },
    {
      _id: 6,
      type: 'a',
      title: 'Mit dem Event Portal optimieren Sie die Organisation Ihrer internen und externen Veranstaltungen',
      description: 'Mit dem Event Portal können Sie Seminare und Veranstaltungen verwalten. Es lässt sich intern für Mitarbeiter und extern für Kunden nutzen.',
      image: 'assets/img/module-6.png',
      optionsL: [
        'Benutzerverwaltung: Sie entscheiden, wer welche Meetings und Seminare sehen darf',
        'Flexible Benutzer- und Berechtigungsverwaltung'
      ],
      optionsR: [
        'Zahlungsvorgänge integrieren',
        'Weitere Individualisierungsmöglichkeiten nach Ihren Wünschen'
      ],
      colL: 6,
      colR: 6
    },
    {
      _id: 7,
      type: 'a',
      title: 'Das eLearning Modul unterstützt die Umsetzung moderner Lernkonzepte',
      description: 'Das eLearning Modul ist ein Online Portal mit Lernformen über digitale/elektronische Medien. Es lässt sich intern für die Mitarbeiterentwicklung, aber auch extern für Kunden nutzen.',
      image: 'assets/img/module-7.png',
      optionsL: [
        'Präsentation und Bereitstellung der Lerninhalte über digitale Medien (z. B. interaktive Videos und Audiodateien)',
        'Bereitstellung der Webinare, Online Kurse etc.',
        'Dokumentation des Lernprozesses'
      ],
      optionsR: [
        'Darstellung der Inhalte als Kalender',
        'Dokumentation des Lernprozesses',
        'Real time push notification',
        'Integration von künstlicher Intelligenz (Dialogflow)'
      ],
      colL: 6,
      colR: 6
    },
    {
      _id: 8,
      type: 'b',
      title: 'Mit dem Content Manager können Sie alle Networking- und Social Media Seiten zentral und effizient verwalten',
      description: '',
      image: 'assets/img/module-8.png',
      optionsL: [
        'Content-Pflege für individuelle auswählbare Networking Seiten',
        'Anzeige-Darstellungen einheitlich auf allen Veröffentlichungen',
        'Anfrage-/Nachrichtenbearbeitung über einen Zugang von allen Social Media Portalen',
        'Gebündelte Nachrichten/ Veränderungsinformationen und abonnierte Newsletter'
      ],
      optionsR: [
        'Zugang zu Influencer',
        'Zugang zu neuen Vertriebswege über Social Media',
        'Pflege der Blogs über ein Content Management'
      ],
      colL: 6,
      colR: 6
    },
    {
      _id: 9,
      type: 'a',
      title: 'Das CRM/Projekt Management Modul vereinfacht und verbessert die Kommunikation und Projektdurchführung',
      description: 'Das CRM/Projekt Management ist ein Modul, das Sie systematisch und strukturiert in der Kommunikation sowie Planung, Durchführung und Verwaltung von Projekten unterstützt.',
      image: 'assets/img/module-9.png',
      optionsL: [
        'Gesamtdashboard/ Projektdashboard',
        'Kommunikation: Persönliche Mailbox, projektbezogene Diskussionen/Blogs, Unternehmens-Newsfeed',
        'Projektplanung: Aufgaben, Meilensteine, Vorgänge, detaillierte Kalender, Kan Ban',
        'Aufgabenmanagement: Persönliche und projektbezogene Aktivitäten'
      ],
      optionsR: [
        'Dokumentenmanagement: Dokumente im virtuellen Projektraum verwalten',
        'Ressourcenmanagement: Zeiten erfassen und nachverfolgen',
        'Kundenmanagement: Angebote, Ausgaben, Zeitaufwände für Aufgaben, Rechnungsstellung, Support, Ticketsystem, Interessenten, Kundenakte'
      ],
      colL: 6,
      colR: 6
    },
    {
      _id: 10,
      type: 'b',
      title: 'Voice Commerce vereinfacht die Kundenreise durch Bequemlichkeit und steigert damit die Erfolgschancen',
      description: 'Voice Commerce sind Sprachassistenten des eCommerce und können direkt oder indirekt zu einer geschäftlichen Transaktion beitragen. Um einen Sprachassistenten umzusetzen, ist die Programmierung von Voice Apps als Schnittstelle zum Kunden erforderlich. Wir entwickeln für Sie Voice Apps auf Basis von Dialogflow (Google).',
      image: 'assets/img/module-10.png',
      optionsL: [
        'Sprachsteuerung',
        'Produktinformationen und Beratung: Vergleich und Bewertung von Alternativen',
        'Bestellannahme: Vereinfachte, schnelle Kaufdurchführung',
        'Möglichkeiten der einfachen Wiederbestellung per Sprache',
        'Verfügbarkeitsabfrage'
      ],
      optionsR: [
        'Preisabfrage: Vergleich und Bewertung von Produktalternativen',
        'Merkzettel',
        'Audio Kundenservices',
        'Smart Voice Marketing',
        'und vieles mehr'
      ],
      colL: 6,
      colR: 6
    },
    {
      _id: 11,
      type: 'a',
      title: 'Mit der KI Google Dialogflow können Sie Prozesse automatisieren und die Kundenzufriedenheit steigern',
      description: 'Die KI Dialogflow von Google ist eine Plattform zur Verarbeitung natürlicher Sprache (NLP), die von Google´s künstlicher Intelligenz unterstützt wird. Wir können diese Technologie in Ihren Modulen integrieren, auf Ihre Prozesse ausrichten und individuelle Anwendungsfälle gestalten.',
      image: 'assets/img/module-11.png',
      optionsL: [
        'Integration von Dialogflow auf Ihrer Webseite, Ihrer mobilen Apps, in Kombination mit RoccSolution Modulen oder anderen Anwendungen',
        'Sprach- und textbasierte Konversationsschnittstelle',
        'Erstellung von Sprach Apps und Chatbots, unterstützt durch künstlicher Intelligenz'
      ],
      optionsR: [
        {
          option: 'Beispielhafter Anwendungsfall: Entlastung des Kundensupports',
          items: [
            'Integration Dialogflow im Info Portal',
            'Erkennung der Fragestellung',
            'Automatisierte Widergabe von logischen Antworten und validen Infos'
          ]
        }
      ],
      colL: 6,
      colR: 6
    },
    {
      _id: 12,
      type: 'a',
      title: 'Die Amazon Rekognition KI ermöglicht Prozessautomatisierungen und Qualitätssteigerung',
      description: 'Amazon Rekognition ist eine Service-Computer-Vision-Plattform und basiert auf einer Deep Learning-Technologie. Das erleichtert das Hinzufügen von Bild- und Videoanalysen zu Ihren Anwendungen. Wir können Anwendungsfälle auf Basis dieser Technologie für Sie entwickeln.',
      image: 'assets/img/module-12.png',
      optionsL: [
        'Objekte, Menschen, Texte, Szenen und Aktivitäten in Bildern und Videos identifizieren sowie ungeeignete Inhalte erkennen',
        'Hochgenaue Gesichtsanalyse- und Gesichtssuchfunktionen, mit denen Sie Gesichter für eine Vielzahl von Benutzerüberprüfungen, Personenzählungen und Anwendungsfällen für die öffentliche Sicherheit erkennen, analysieren und vergleichen können'
      ],
      optionsR: [
        'Erkennung von Persönlichkeiten',
        'Informationen aus Bildern extrahieren, die für Ihr Unternehmen besonders hilfreich sind (z.B. Logo in sozialen Medien finden)',
        'Potenziell unsichere und unangemessene Inhalte in Bild- und Videoassets ermitteln'
      ],
      colL: 7,
      colR: 5
    }
  ];

  _id: any = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {

    this.route.params.subscribe(params => {

      this._id = params['_id'];

    });

  }
}