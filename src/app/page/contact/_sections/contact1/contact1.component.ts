import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

import { ApiService } from '../../../../_services/api.service';

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email);
}

@Component({
  selector: 'app-contact1',
  templateUrl: './contact1.component.html',
  styleUrls: ['./contact1.component.scss']
})
export class Contact1Component implements OnInit {

  contactForm: FormGroup;
  submitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
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
    this.submitted = true;

    if (this.contactForm.valid) {

      var email, firstName, lastName, company, position, message, text = '', req;

      email = this.contactForm.controls['email'].value;
      firstName = this.contactForm.controls['firstName'].value;
      lastName = this.contactForm.controls['lastName'].value;
      company = this.contactForm.controls['company'].value;
      position = this.contactForm.controls['position'].value;
      message = this.contactForm.controls['message'].value;

      text += 'Ihre E-Mail Adresse: ' + email + '<br>';
      text += 'Vorname: ' + firstName + '<br>';
      text += 'Nachname: ' + lastName + '<br>';
      text += 'Unternehmen: ' + company + '<br>';
      text += 'Ihre Position: ' + position + '<br>';
      text += 'Ihre Nachricht: ' + message + '<br>';

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
