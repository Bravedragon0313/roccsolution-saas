import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OverviewComponent } from './solution/overview/overview.component';
import { CoreComponent } from './solution/core/core.component';
import { ModuleComponent } from './solution/module/module.component';
import { DevelopmentComponent } from './solution/development/development.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';

import { Home1Component } from './home/_sections/home1/home1.component';
import { Home2Component } from './home/_sections/home2/home2.component';
import { Home3Component } from './home/_sections/home3/home3.component';
import { Home4Component } from './home/_sections/home4/home4.component';
import { Home5Component } from './home/_sections/home5/home5.component';
import { Home6Component } from './home/_sections/home6/home6.component';
import { Home7Component } from './home/_sections/home7/home7.component';
import { Home8Component } from './home/_sections/home8/home8.component';
import { Home9Component } from './home/_sections/home9/home9.component';
import { Home10Component } from './home/_sections/home10/home10.component';
import { Home11Component } from './home/_sections/home11/home11.component';

import { AboutUs1Component } from './about-us/_sections/about-us1/about-us1.component';
import { AboutUs2Component } from './about-us/_sections/about-us2/about-us2.component';

import { OverviewHeaderComponent } from './solution/overview/_sections/overview-header/overview-header.component';
import { OverviewSidebarComponent } from './solution/overview/_sections/overview-sidebar/overview-sidebar.component';
import { OverviewSub1Component } from './solution/overview/_sections/overview-sub1/overview-sub1.component';
import { OverviewSub2Component } from './solution/overview/_sections/overview-sub2/overview-sub2.component';
import { OverviewSub3Component } from './solution/overview/_sections/overview-sub3/overview-sub3.component';
import { OverviewSub4Component } from './solution/overview/_sections/overview-sub4/overview-sub4.component';
import { Overview1Component } from './solution/overview/_sections/overview1/overview1.component';
import { Overview2Component } from './solution/overview/_sections/overview2/overview2.component';
import { Overview3Component } from './solution/overview/_sections/overview3/overview3.component';
import { Overview4Component } from './solution/overview/_sections/overview4/overview4.component';

import { Core1Component } from './solution/core/_sections/core1/core1.component';
import { Core2Component } from './solution/core/_sections/core2/core2.component';
import { Core3Component } from './solution/core/_sections/core3/core3.component';
import { Core4Component } from './solution/core/_sections/core4/core4.component';
import { Core5Component } from './solution/core/_sections/core5/core5.component';

import { Module1AComponent } from './solution/module/_sections/module1-a/module1-a.component';
import { Module1BComponent } from './solution/module/_sections/module1-b/module1-b.component';
import { Module2Component } from './solution/module/_sections/module2/module2.component';
import { Module3Component } from './solution/module/_sections/module3/module3.component';

import { Development1Component } from './solution/development/_sections/development1/development1.component';
import { Development2Component } from './solution/development/_sections/development2/development2.component';
import { Development3Component } from './solution/development/_sections/development3/development3.component';
import { Development4Component } from './solution/development/_sections/development4/development4.component';
import { Development5Component } from './solution/development/_sections/development5/development5.component';
import { Development6Component } from './solution/development/_sections/development6/development6.component';
import { Development7Component } from './solution/development/_sections/development7/development7.component';

import { Contact1Component } from './contact/_sections/contact1/contact1.component';
import { Contact2Component } from './contact/_sections/contact2/contact2.component';

import { Imprint1Component } from './imprint/_sections/imprint1/imprint1.component';
import { Imprint2Component } from './imprint/_sections/imprint2/imprint2.component';

import { Privacy1Component } from './privacy/_sections/privacy1/privacy1.component';
import { Privacy2Component } from './privacy/_sections/privacy2/privacy2.component';
import { Privacy3Component } from './privacy/_sections/privacy3/privacy3.component';
import { Privacy4Component } from './privacy/_sections/privacy4/privacy4.component';
import { Privacy5Component } from './privacy/_sections/privacy5/privacy5.component';
import { Privacy6Component } from './privacy/_sections/privacy6/privacy6.component';
import { Privacy7Component } from './privacy/_sections/privacy7/privacy7.component';
import { Privacy8Component } from './privacy/_sections/privacy8/privacy8.component';
import { Privacy9Component } from './privacy/_sections/privacy9/privacy9.component';
import { Privacy10Component } from './privacy/_sections/privacy10/privacy10.component';
import { Privacy11Component } from './privacy/_sections/privacy11/privacy11.component';

import { ToKitComponent } from './_common/to-kit/to-kit.component';
import { SolutionLoopComponent } from './_common/solution-loop/solution-loop.component';
import { PlayerComponent } from './_common/player/player.component';
import { ScrollDownComponent } from './_common/scroll-down/scroll-down.component';
import { LogoLineComponent } from './_common/logo-line/logo-line.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    OverviewComponent,
    CoreComponent,
    ModuleComponent,
    DevelopmentComponent,
    ContactComponent,
    ImprintComponent,
    PrivacyComponent,

    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component,
    Home5Component,
    Home6Component,
    Home7Component,
    Home8Component,
    Home9Component,
    Home10Component,
    Home11Component,

    AboutUs1Component,
    AboutUs2Component,

    OverviewHeaderComponent,
    OverviewSidebarComponent,
    OverviewSub1Component,
    OverviewSub2Component,
    OverviewSub3Component,
    OverviewSub4Component,
    Overview1Component,
    Overview2Component,
    Overview3Component,
    Overview4Component,

    Core1Component,
    Core2Component,
    Core3Component,
    Core4Component,
    Core5Component,

    Module1AComponent,
    Module1BComponent,
    Module2Component,
    Module3Component,

    Development1Component,
    Development2Component,
    Development3Component,
    Development4Component,
    Development5Component,
    Development6Component,
    Development7Component,

    Contact1Component,
    Contact2Component,

    Imprint1Component,
    Imprint2Component,

    Privacy1Component,
    Privacy2Component,
    Privacy3Component,
    Privacy4Component,
    Privacy5Component,
    Privacy6Component,
    Privacy7Component,
    Privacy8Component,
    Privacy9Component,
    Privacy10Component,
    Privacy11Component,

    ToKitComponent,
    SolutionLoopComponent,
    PlayerComponent,
    ScrollDownComponent,
    LogoLineComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PageModule { }
