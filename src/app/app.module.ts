import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './modules/home/pages/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { HamburgerToggleDirective } from './shared/directives/hamburger/hamburger-toggle.directive';
import { SvgLogoComponent } from './shared/components/svg-logo/svg-logo.component';
import { DayNightModeToggleModule } from './shared/components/day-night-mode-toggle/day-night-mode-toggle.module';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HamburgerToggleDirective,
    SvgLogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    DayNightModeToggleModule,
  ],
  exports: [DayNightModeToggleModule],
  bootstrap: [HomeComponent],
})
export class AppModule {}
