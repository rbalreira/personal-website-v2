import { Injectable } from '@angular/core';

import { INavContent } from '@app/shared/models/nav-content.interface';

@Injectable({
  providedIn: 'root',
})
export class NavContentFactoryService {
  constructor() {}

  public getNavContent(): INavContent[] {
    return [
      {
        href: 'experience',
        name: 'NAVBAR.0.NAME',
        section: 'NAVBAR.0.SECTION',
      },
      {
        href: 'projects',
        name: 'NAVBAR.1.NAME',
        section: 'NAVBAR.1.SECTION',
      },
      {
        href: 'about',
        name: 'NAVBAR.2.NAME',
        section: 'NAVBAR.2.SECTION',
      },
      {
        href: 'contact',
        name: 'NAVBAR.3.NAME',
        section: 'NAVBAR.3.SECTION',
      },
    ];
  }
}
