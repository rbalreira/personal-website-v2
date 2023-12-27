import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HamburgerToggleDirective } from '../shared/directives/hamburger/hamburger-toggle.directive';
import { SvgAvatarComponent } from '../shared/components/svg-avatar/svg-avatar.component';
import { SvgLogoComponent } from '../shared/components/svg-logo/svg-logo.component';

@NgModule({
  declarations: [
    SvgAvatarComponent,
    SvgLogoComponent,
    HamburgerToggleDirective,
  ],
  imports: [CommonModule],
  exports: [SvgAvatarComponent, SvgLogoComponent, HamburgerToggleDirective],
})
export class SharedModule {}
