import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { NgxSpinnerModule } from "ngx-spinner";
import { AppRoutingModule } from './app.routing';
import { PageModule } from './page/page.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ApiService } from './_services/api.service';
import { StorageService } from './_services/storage.service';

import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule,
        FormsModule,
        RouterModule,
        HttpModule,
        HttpClientModule,
        NgcCookieConsentModule.forRoot(
            {
                cookie: {
                    domain: environment.cookie_domain
                },
                palette: {
                    popup: {
                        background: '#004ba8'
                    },
                    button: {
                        background: '#ffffff'
                    }
                },
                content: {
                    message: "Diese Website verwendet Cookies, um sicherzustellen, dass Sie die bestmögliche Erfahrung auf unserer Website erzielen.",
                    link: "Mehr erfahren",
                    href: "./#/privacy",
                    dismiss: 'Verstanden'
                },
                theme: 'classic'
            }
        ),
        NgxSpinnerModule,
        AppRoutingModule,
        PageModule
    ],
    providers: [
        ApiService,
        StorageService
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
