import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent {
  @Input() hamburgerToggle = false;

  content = ['Home', 'Projects', 'Skills', 'About', 'Contact'];
}
