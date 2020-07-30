import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private apiUrl = environment.api_url;
    url: any;

    constructor(private http: HttpClient) { }

    public emailSend(req) {
        this.url = this.apiUrl + 'email/send';
        return this.http.post(this.url, req);
    }
}