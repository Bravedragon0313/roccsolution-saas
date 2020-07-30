import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './page/home/home.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { OverviewComponent } from './page/solution/overview/overview.component';
import { CoreComponent } from './page/solution/core/core.component';
import { ModuleComponent } from './page/solution/module/module.component';
import { DevelopmentComponent } from './page/solution/development/development.component';
import { ContactComponent } from './page/contact/contact.component';
import { ImprintComponent } from './page/imprint/imprint.component';
import { PrivacyComponent } from './page/privacy/privacy.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'solution/overview', component: OverviewComponent },
    { path: 'solution/core', component: CoreComponent },
    { path: 'solution/module/:_id', component: ModuleComponent },
    { path: 'solution/development', component: DevelopmentComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }