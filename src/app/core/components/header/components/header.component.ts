import { Component, OnInit, HostListener } from '@angular/core';
import { gsap } from 'gsap';

import { INavContent } from '@app/shared/models/nav-content.interface';

import { FuncsService } from '@app/core/services/funcs/funcs.service';
import { NavMenuToggleService } from '@app/core/services/nav-menu-toggle/nav-menu-toggle.service';
import { NavContentFactoryService } from '@app/shared/services/nav-content/nav-content-factory.service';
import { SocialMediaFactoryService } from '@app/shared/services/social-media/social-media-factory.service';

@Component({
  selector: 'app-header',
  templateUrl: '../header.component.html',
  styleUrls: ['../header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private funcsService: FuncsService,
    private navMenuToggleService: NavMenuToggleService,
    private navContentFactoryService: NavContentFactoryService,
    private socialMediaFactoryService: SocialMediaFactoryService
  ) {}

  navContent: INavContent[] = this.navContentFactoryService.getNavContent();
  lastName: string = this.socialMediaFactoryService.getLastName();

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

  getHamburgerCurrentMode(): boolean {
    return this.funcsService.currentHamburgerToggleMode;
  }

  toggleHamburger(): void {
    this.navMenuToggleService.toggleMode();
  }

  ngOnInit(): void {
    //gsap.from('.navbar-brand', { duration: 1, x: '-150%', delay: 1.5 });
    //gsap.from('.navbar-nav', { duration: 1, x: '150%', delay: 1.5 });
  }
}
