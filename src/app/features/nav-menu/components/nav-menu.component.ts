import { Component } from '@angular/core';

import { INavContent } from '@app/shared/models/nav-content.interface';

import { FuncsService } from '@app/core/services/funcs/funcs.service';
import { NavMenuToggleService } from '@app/core/services/nav-menu-toggle/nav-menu-toggle.service';
import { NavContentFactoryService } from '@app/shared/services/nav-content/nav-content-factory.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: '../nav-menu.component.html',
  styleUrls: ['../nav-menu.component.scss'],
})
export class NavMenuComponent {
  constructor(
    private funcsService: FuncsService,
    private navMenuToggleService: NavMenuToggleService,
    private navContentFactoryService: NavContentFactoryService
  ) {}

  navContent: INavContent[] = this.navContentFactoryService.getNavContent();

  getHamburgerCurrentMode(): boolean {
    return this.funcsService.currentHamburgerToggleMode;
  }

  toggleHamburger(): void {
    this.navMenuToggleService.toggleMode();
  }
}
