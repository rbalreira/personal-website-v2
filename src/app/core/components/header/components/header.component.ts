import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { gsap } from 'gsap';
import { Observer } from 'gsap/all';

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
  @ViewChild('navbar', { static: false }) navbarElement: ElementRef =
    {} as ElementRef;

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
    Observer.create({
      type: 'scroll',
      onDown: () =>
        gsap.to(this.navbarElement.nativeElement, {
          duration: 0.3,
          ease: 'power2.out',
          y: '-100%',
        }),
      onUp: () =>
        gsap.to(this.navbarElement.nativeElement, {
          duration: 0.3,
          ease: 'power2.out',
          y: '0',
        }),
    });
  }
}
