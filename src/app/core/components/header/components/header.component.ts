import { Component, OnInit, HostListener } from '@angular/core';
import { gsap } from 'gsap';

import { FuncsService } from '@app/core/services/funcs/funcs.service';
import { NavMenuToggleService } from '@app/core/services/nav-menu-toggle/nav-menu-toggle.service';

import { navMenuContent } from '@app/features/models/nav-menu.model';

@Component({
  selector: 'app-header',
  templateUrl: '../header.component.html',
  styleUrls: ['../header.component.scss'],
})
export class HeaderComponent implements OnInit {
  content = navMenuContent;

  constructor(
    private funcsService: FuncsService,
    private navMenuToggleService: NavMenuToggleService
  ) {}

  /**
   * HostListener event to capture window width in order to inactive Hamburger icon menu
   * in case the window was resized having icon as active
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (
      window.innerWidth >= 769 &&
      this.funcsService.currentHamburgerToggleMode
    ) {
      this.toggleHamburger();
    }
  }

  getHamburgerCurrentMode() {
    return this.funcsService.currentHamburgerToggleMode;
  }

  toggleHamburger() {
    this.navMenuToggleService.toggleMode();
  }

  ngOnInit(): void {
    //gsap.from('.navbar-brand', { duration: 1, x: '-150%', delay: 1.5 });
    //gsap.from('.navbar-nav', { duration: 1, x: '150%', delay: 1.5 });
  }
}
