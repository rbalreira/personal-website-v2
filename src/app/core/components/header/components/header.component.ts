import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  templateUrl: '../header.component.html',
  styleUrls: ['../header.component.scss'],
})
export class HeaderComponent implements OnInit {
  hamburgerToggle = false;

  getHamburgerToggle() {
    this.hamburgerToggle = !this.hamburgerToggle;
  }

  ngOnInit(): void {
    gsap.from('.navbar-brand', { duration: 1, x: '-150%', delay: 1.5 });
    gsap.from('.navbar-nav', { duration: 1, x: '150%', delay: 1.5 });
  }
}
