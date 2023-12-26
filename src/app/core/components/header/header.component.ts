import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  selectedFlag: number = 1;

  flags = [
    { id: 1, name: 'us' },
    { id: 2, name: 'de' },
    { id: 3, name: 'pt' },
  ];
}
