import { Component } from '@angular/core';

import { navMenuContent } from '@app/features/models/nav-menu.model';

import { FuncsService } from '@app/core/services/funcs/funcs.service';
import { NavMenuToggleService } from '@app/core/services/nav-menu-toggle/nav-menu-toggle.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: '../nav-menu.component.html',
  styleUrls: ['../nav-menu.component.scss'],
})
export class NavMenuComponent {
  constructor(
    private funcsService: FuncsService,
    private navMenuToggleService: NavMenuToggleService
  ) {}

  getHamburgerCurrentMode() {
    return this.funcsService.currentHamburgerToggleMode;
  }

  toggleHamburger() {
    this.navMenuToggleService.toggleMode();
  }

  content = navMenuContent;
}
