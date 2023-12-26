import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './features/pages/home/home.component';
import { HeaderComponent } from './core/components/header/header.component';
import { HamburgerToggleDirective } from './shared/directives/hamburger/hamburger-toggle.directive';
import { SvgLogoComponent } from './shared/components/svg-logo/svg-logo.component';
import { DayNightModeToggleModule } from './features/day-night-mode-toggle/day-night-mode-toggle.module';
import { IntroComponent } from './features/intro/components/intro.component';
import { SvgIconComponent } from './shared/components/svg-avatar/svg-avatar.component';
import { AboutMeComponent } from './features/about-me/components/about-me.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HamburgerToggleDirective,
    SvgLogoComponent,
    IntroComponent,
    SvgIconComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    DayNightModeToggleModule,
  ],
  exports: [DayNightModeToggleModule],
  bootstrap: [HomeComponent],
})
export class AppModule {}
