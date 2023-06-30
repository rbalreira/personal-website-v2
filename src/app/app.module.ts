import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { provideSvgIcons } from '@ngneat/svg-icon';
import { logoIcon } from '@app/svg/logo';
import { SvgIconComponent } from '@ngneat/svg-icon';

import { HomeComponent } from './modules/home/pages/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { HamburgerToggleDirective } from './shared/directives/hamburger-toggle.directive';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    HamburgerToggleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SvgIconComponent
  ],
  providers: [provideSvgIcons([logoIcon])],
  bootstrap: [HomeComponent]
})
export class AppModule { }
