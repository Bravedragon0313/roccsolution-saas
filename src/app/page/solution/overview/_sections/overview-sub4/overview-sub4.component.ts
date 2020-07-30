import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { ApiService } from '../../../../../_services/api.service';
import { StorageService } from '../../../../../_services/storage.service';

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}

@Component({
  selector: 'app-overview-sub4',
  templateUrl: './overview-sub4.component.html',
  styleUrls: ['./overview-sub4.component.scss']
})
export class OverviewSub4Component implements OnInit {

  contactForm: FormGroup;
  submitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private storageService: StorageService
  ) { }

  ngOnInit() {

    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      company: ['', [Validators.required]],
      position: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });

    this.submitted = false;
  }

  get contactF() { return this.contactForm.controls; }

  send() {

    var overview1 = [], overview2 = [], overview3 = [], text = '';

    overview1 = this.storageService.get('overview1') || [];
    overview2 = this.storageService.get('overview2') || [];
    overview3 = this.storageService.get('overview3') || [];

    text += 'Sehr geehrte Damen und Herren,' + '<br>';

    text += 'Ich interessiere mich für:' + '<br>';
    for (var i = 0; i < overview1.length; i++) {
      text += overview1[i] + '<br>';
    }

    text += 'Ich möchte:' + '<br>';
    for (var i = 0; i < overview2.length; i++) {
      text += overview2[i] + '<br>';
    }

    for (var i = 0; i < overview3.length; i++) {
      text += overview3[i] + '<br>';
    }

    this.submitted = true;

    if (this.contactForm.valid) {

      var email, firstName, lastName, company, position, message, req;

      email = this.contactForm.controls['email'].value;
      firstName = this.contactForm.controls['firstName'].value;
      lastName = this.contactForm.controls['lastName'].value;
      company = this.contactForm.controls['company'].value;
      position = this.contactForm.controls['position'].value;
      message = this.contactForm.controls['message'].value;

      text += 'Meine Kontaktdaten sind:' + '<br>';
      text += 'Ihre E-Mail Adresse:' + email + '<br>';
      text += 'Vorname:' + firstName + '<br>';
      text += 'Nachname:' + lastName + '<br>';
      text += 'Unternehmen:' + company + '<br>';
      text += 'Ihre Position:' + position + '<br>';
      text += 'Ihre Nachricht:' + message + '<br>';

      req = {
        from: email,
        html: text
      };

      this.apiService.emailSend(req).subscribe((res) => {
        if (res['status'] == 'success') {

          this.contactForm.reset();
          this.submitted = false;

          Swal.fire('', 'Ihre Anfrage wurde erfolgreich gesendet.', 'success');
        }
      });
    }
  }
}