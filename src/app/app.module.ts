import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarSocialComponent } from './landing-page/navbar-social/navbar-social.component';


import { LandingPageService } from './services/landing-page.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarMenuComponent } from './landing-page/navbar-menu/navbar-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarSocialComponent,
    NavbarMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LandingPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
