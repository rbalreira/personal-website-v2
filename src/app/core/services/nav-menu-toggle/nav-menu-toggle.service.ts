import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

import { FuncsService } from '@app/core/services/funcs/funcs.service';

/**
 * Angular service that provides the mode toggle feature for Navigation Menu.
 * In summary this service adds the `class='is-active'` to the document.body element in
 * order to switch Navigation menu icon
 */
@Injectable({
  providedIn: 'root',
})
export class NavMenuToggleService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private funcsService: FuncsService
  ) {}

  /**
   * Function that toggles the mode
   * Exposed publicly
   */
  toggleMode() {
    this.document.body.classList.toggle('is-active');
    this.funcsService.getCurrentHamburgerToggleMode();
  }
}
